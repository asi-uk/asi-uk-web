import { Client } from "@notionhq/client";
import { FAITH_AND_WORK_2026 } from "@/data/faith-and-work";
import {
    ATTENDEE_ROLES,
    FaithAndWorkAttendee,
    FaithAndWorkRegistrationData,
    formatFaithAndWorkAttendees,
    getContactEmail,
} from "@/lib/schemas/faith-and-work-registration";

/*
 * Notion setup (two databases, mirroring the convention setup):
 *
 * Registrations DB  (NOTION_FAITH_WORK_REGISTRATIONS_DB_ID)
 *   Name               title       lead attendee's full name
 *   Email              email
 *   Event              select      e.g. "faith-and-work-2026"
 *   Attendee Count     number
 *   Attendees          rich_text   formatted list (handy without the Attendees DB)
 *   Status             select      Confirmed | Cancelled
 *   Registration Date  date
 *   Newsletter Opt-in  checkbox
 *
 * Attendees DB  (NOTION_FAITH_WORK_ATTENDEES_DB_ID, optional)
 *   Name               title
 *   First Name         rich_text
 *   Last Name          rich_text
 *   Email              email
 *   Role               select      labels from ATTENDEE_ROLES
 *   Event              select
 *   Registration       relation -> Registrations DB
 *
 * The integration key defaults to the convention one so the same Notion
 * integration can be shared; set NOTION_EVENTS_API_KEY to override.
 */

const apiKey = process.env.NOTION_EVENTS_API_KEY || process.env.NOTION_CONVENTION_REGISTRATION_API_KEY;
const notion = new Client({ auth: apiKey });

const dataSourceIdCache = new Map<string, string>();

// Notion API 2025-09-03: pages are created under a database's data source.
async function getDataSourceId(databaseId: string): Promise<string> {
    const cached = dataSourceIdCache.get(databaseId);
    if (cached) return cached;

    const response = await notion.databases.retrieve({ database_id: databaseId });
    if ("data_sources" in response && Array.isArray(response.data_sources) && response.data_sources.length > 0) {
        const id = response.data_sources[0].id;
        dataSourceIdCache.set(databaseId, id);
        return id;
    }
    throw new Error(`No data sources found for database ${databaseId}`);
}

const text = (content: string) => ({ rich_text: [{ text: { content: content.slice(0, 2000) } }] });

export function getNotionPageUrl(pageId: string): string {
    return `https://www.notion.so/${pageId.replace(/-/g, "")}`;
}

async function createAttendee(
    attendeesDatabaseId: string,
    registrationPageId: string,
    attendee: FaithAndWorkAttendee,
): Promise<void> {
    const properties: Record<string, any> = {
        Name: { title: [{ text: { content: `${attendee.firstName} ${attendee.lastName}` } }] },
        "First Name": text(attendee.firstName),
        "Last Name": text(attendee.lastName),
        Role: { select: { name: ATTENDEE_ROLES[attendee.role] } },
        Event: { select: { name: FAITH_AND_WORK_2026.id } },
        Registration: { relation: [{ id: registrationPageId }] },
    };
    if (attendee.email) {
        properties.Email = { email: attendee.email };
    }

    await notion.pages.create({
        parent: { data_source_id: await getDataSourceId(attendeesDatabaseId) },
        properties,
    });
}

export async function createFaithAndWorkRegistration(
    data: FaithAndWorkRegistrationData,
): Promise<{ success: boolean; pageId?: string; error?: string }> {
    const registrationsDatabaseId = process.env.NOTION_FAITH_WORK_REGISTRATIONS_DB_ID;
    const attendeesDatabaseId = process.env.NOTION_FAITH_WORK_ATTENDEES_DB_ID;

    if (!registrationsDatabaseId) {
        // Lets the form be exercised locally before the Notion tables exist.
        console.warn("NOTION_FAITH_WORK_REGISTRATIONS_DB_ID not configured - skipping Notion entry");
        return { success: true };
    }
    if (!apiKey) {
        return { success: false, error: "Notion API key not configured" };
    }

    try {
        const lead = data.attendees[0];
        const registration = await notion.pages.create({
            parent: { data_source_id: await getDataSourceId(registrationsDatabaseId) },
            properties: {
                Name: { title: [{ text: { content: `${lead.firstName} ${lead.lastName}` } }] },
                Email: { email: getContactEmail(data) },
                Event: { select: { name: FAITH_AND_WORK_2026.id } },
                "Attendee Count": { number: data.attendees.length },
                Attendees: text(formatFaithAndWorkAttendees(data.attendees)),
                Status: { select: { name: "Confirmed" } },
                "Registration Date": { date: { start: new Date().toISOString() } },
                "Newsletter Opt-in": { checkbox: data.newsletterOptIn ?? false },
            },
        });

        if (attendeesDatabaseId) {
            // Attendee rows are a convenience view; the registration (with its
            // formatted attendee list) is already saved, so don't fail on these.
            const results = await Promise.allSettled(
                data.attendees.map((a) => createAttendee(attendeesDatabaseId, registration.id, a)),
            );
            results.forEach((r) => {
                if (r.status === "rejected") console.error("Failed to create Faith & Work attendee:", r.reason);
            });
        }

        return { success: true, pageId: registration.id };
    } catch (error) {
        console.error("Notion API error (Faith & Work):", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Failed to create Notion entry",
        };
    }
}
