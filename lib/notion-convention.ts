import { Client } from "@notionhq/client";
import { AttendeeData, ConventionRegistrationServiceData, TICKET_PRICES } from "@/lib/schemas/convention-registration";

// Initialize Notion client
const notion = new Client({
    auth: process.env.NOTION_CONVENTION_REGISTRATION_API_KEY,
});

// Re-export the getNotionPageUrl helper
export function getNotionPageUrl(pageId: string): string {
    const idWithoutDashes = pageId.replace(/-/g, "");
    return `https://www.notion.so/${idWithoutDashes}`;
}

type RegistrationStatus = "Pending Payment" | "Paid" | "Confirmed" | "Cancelled";

/**
 * Create an individual attendee record in the Attendees database
 */
async function createAttendee(
    registrationPageId: string,
    attendee: AttendeeData,
    ticketPrice: number
): Promise<{ success: boolean; pageId?: string; error?: string }> {
    const attendeesDatabaseId = process.env.NOTION_CONVENTION_ATTENDEES_DB_ID;

    if (!attendeesDatabaseId) {
        console.warn("NOTION_CONVENTION_ATTENDEES_DB_ID not configured - skipping attendee entry");
        return { success: true, pageId: undefined };
    }

    try {
        const fullName = `${attendee.firstName} ${attendee.lastName}`;

        const properties: Record<string, any> = {
            Name: {
                title: [{ text: { content: fullName } }],
            },
            "First Name": {
                rich_text: [{ text: { content: attendee.firstName } }],
            },
            "Last Name": {
                rich_text: [{ text: { content: attendee.lastName } }],
            },
            "Ticket Type": {
                select: { name: attendee.ticketType },
            },
            "Ticket Price": {
                number: ticketPrice,
            },
            Registration: {
                relation: [{ id: registrationPageId }],
            },
        };

        // Add dietary requirements if present
        if (attendee.dietaryRequirements && attendee.dietaryRequirements.trim()) {
            properties["Dietary Requirements"] = {
                rich_text: [{ text: { content: attendee.dietaryRequirements } }],
            };
        }

        const response = await notion.pages.create({
            parent: { database_id: attendeesDatabaseId },
            properties,
        });

        return { success: true, pageId: response.id };
    } catch (error) {
        console.error("Notion API error creating attendee:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Failed to create attendee entry",
        };
    }
}

export async function createConventionRegistration(
    data: ConventionRegistrationServiceData,
    status: RegistrationStatus = "Pending Payment"
): Promise<{ success: boolean; pageId?: string; attendeeIds?: string[]; error?: string }> {
    const registrationsDatabaseId = process.env.NOTION_CONVENTION_REGISTRATIONS_DB_ID;

    // Fall back to old env var for backwards compatibility
    const databaseId = registrationsDatabaseId || process.env.NOTION_CONVENTION_DATABASE_ID;

    if (!databaseId) {
        console.warn("NOTION_CONVENTION_REGISTRATIONS_DB_ID not configured - skipping Notion entry");
        return { success: true, pageId: undefined };
    }

    if (!process.env.NOTION_API_KEY) {
        return { success: false, error: "Notion API key not configured" };
    }

    try {
        // Step 1: Create the registration record
        const registrationProperties: Record<string, any> = {
            Name: {
                title: [{ text: { content: data.email } }],
            },
            Email: { email: data.email },
            "Attendee Count": { number: data.attendeeCount },
            "Order Total": { number: data.orderTotal },
            Status: { select: { name: status } },
            "Registration Date": { date: { start: new Date().toISOString() } },
            "Newsletter Opt-in": { checkbox: data.newsletterOptIn },
        };

        const registrationResponse = await notion.pages.create({
            parent: { database_id: databaseId },
            properties: registrationProperties,
        });

        const registrationPageId = registrationResponse.id;

        // Step 2: Create individual attendee records (if Attendees DB is configured)
        const attendeeIds: string[] = [];
        const attendeesDatabaseId = process.env.NOTION_CONVENTION_ATTENDEES_DB_ID;

        if (attendeesDatabaseId) {
            for (const attendee of data.attendees) {
                const ticketPrice = TICKET_PRICES[attendee.ticketType] || 0;
                const attendeeResult = await createAttendee(registrationPageId, attendee, ticketPrice);

                if (attendeeResult.success && attendeeResult.pageId) {
                    attendeeIds.push(attendeeResult.pageId);
                } else if (!attendeeResult.success) {
                    console.error(`Failed to create attendee record: ${attendeeResult.error}`);
                }
            }
        }

        return {
            success: true,
            pageId: registrationPageId,
            attendeeIds: attendeeIds.length > 0 ? attendeeIds : undefined,
        };
    } catch (error) {
        console.error("Notion API error:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Failed to create Notion entry",
        };
    }
}

export async function updateConventionRegistrationStatus(
    pageId: string,
    status: RegistrationStatus,
    stripeSessionId?: string
): Promise<{ success: boolean; error?: string }> {
    if (!process.env.NOTION_API_KEY) {
        return { success: false, error: "Notion API key not configured" };
    }

    try {
        const properties: Record<string, any> = {
            Status: { select: { name: status } },
        };

        if (stripeSessionId) {
            properties["Stripe Session ID"] = {
                rich_text: [{ text: { content: stripeSessionId } }],
            };
        }

        await notion.pages.update({
            page_id: pageId,
            properties,
        });

        return { success: true };
    } catch (error) {
        console.error("Notion update error:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Failed to update Notion entry",
        };
    }
}

export async function markConventionRegistrationPaid(
    pageId: string,
    stripeSessionId: string
): Promise<{ success: boolean; error?: string }> {
    return updateConventionRegistrationStatus(pageId, "Paid", stripeSessionId);
}
