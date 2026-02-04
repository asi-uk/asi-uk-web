import { Client } from "@notionhq/client";
import { AttendeeData, ConventionRegistrationServiceData, TICKET_PRICES, TICKET_LABELS, TicketType } from "@/lib/schemas/convention-registration";
import { generateCheckInToken, generateCheckInUrl } from "@/lib/checkin-tokens";

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
type CheckInStatus = "Not Checked In" | "Checked In";

export interface AttendeeWithToken {
    pageId: string;
    name: string;
    firstName: string;
    lastName: string;
    ticketType: string;
    checkInToken: string;
    checkInUrl: string;
}

export interface AttendeeInfo {
    pageId: string;
    name: string;
    firstName: string;
    lastName: string;
    ticketType: string;
    ticketLabel: string;
    dietaryRequirements?: string;
    checkInStatus: CheckInStatus;
    checkInTime?: string;
    registrationEmail?: string;
}

/**
 * Create an individual attendee record in the Attendees database
 * Generates a unique check-in token for QR code functionality
 */
async function createAttendee(
    registrationPageId: string,
    attendee: AttendeeData,
    ticketPrice: number
): Promise<{ success: boolean; pageId?: string; token?: string; error?: string }> {
    const attendeesDatabaseId = process.env.NOTION_CONVENTION_ATTENDEES_DB_ID;

    if (!attendeesDatabaseId) {
        console.warn("NOTION_CONVENTION_ATTENDEES_DB_ID not configured - skipping attendee entry");
        return { success: true, pageId: undefined };
    }

    try {
        const fullName = `${attendee.firstName} ${attendee.lastName}`;

        // Create a temporary page first to get the ID, then generate token with the ID
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
            "Check-In Status": {
                select: { name: "Not Checked In" },
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

        // Generate check-in token using the attendee page ID
        const checkInToken = generateCheckInToken(response.id);

        // Update the page with the check-in token
        await notion.pages.update({
            page_id: response.id,
            properties: {
                "Check-In Token": {
                    rich_text: [{ text: { content: checkInToken } }],
                },
            },
        });

        return { success: true, pageId: response.id, token: checkInToken };
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
): Promise<{ success: boolean; pageId?: string; attendeeIds?: string[]; attendeesWithTokens?: AttendeeWithToken[]; error?: string }> {
    const registrationsDatabaseId = process.env.NOTION_CONVENTION_REGISTRATIONS_DB_ID;

    // Fall back to old env var for backwards compatibility
    const databaseId = registrationsDatabaseId || process.env.NOTION_CONVENTION_DATABASE_ID;

    if (!databaseId) {
        console.warn("NOTION_CONVENTION_REGISTRATIONS_DB_ID not configured - skipping Notion entry");
        return { success: true, pageId: undefined };
    }

    if (!process.env.NOTION_CONVENTION_REGISTRATION_API_KEY) {
        return { success: false, error: "Notion Convention Registration API key not configured" };
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
        const attendeesWithTokens: AttendeeWithToken[] = [];
        const attendeesDatabaseId = process.env.NOTION_CONVENTION_ATTENDEES_DB_ID;

        if (attendeesDatabaseId) {
            for (const attendee of data.attendees) {
                const ticketPrice = TICKET_PRICES[attendee.ticketType] || 0;
                const attendeeResult = await createAttendee(registrationPageId, attendee, ticketPrice);

                if (attendeeResult.success && attendeeResult.pageId) {
                    attendeeIds.push(attendeeResult.pageId);

                    // Store attendee info with check-in token
                    if (attendeeResult.token) {
                        attendeesWithTokens.push({
                            pageId: attendeeResult.pageId,
                            name: `${attendee.firstName} ${attendee.lastName}`,
                            firstName: attendee.firstName,
                            lastName: attendee.lastName,
                            ticketType: attendee.ticketType,
                            checkInToken: attendeeResult.token,
                            checkInUrl: generateCheckInUrl(attendeeResult.token),
                        });
                    }
                } else if (!attendeeResult.success) {
                    console.error(`Failed to create attendee record: ${attendeeResult.error}`);
                }
            }
        }

        return {
            success: true,
            pageId: registrationPageId,
            attendeeIds: attendeeIds.length > 0 ? attendeeIds : undefined,
            attendeesWithTokens: attendeesWithTokens.length > 0 ? attendeesWithTokens : undefined,
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
    if (!process.env.NOTION_CONVENTION_REGISTRATION_API_KEY) {
        return { success: false, error: "Notion Convention Registration API key not configured" };
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

/**
 * Get attendee info by check-in token
 */
export async function getAttendeeByToken(token: string): Promise<{ success: boolean; attendee?: AttendeeInfo; error?: string }> {
    const attendeesDatabaseId = process.env.NOTION_CONVENTION_ATTENDEES_DB_ID;

    if (!attendeesDatabaseId) {
        return { success: false, error: "Attendees database not configured" };
    }

    try {
        const response = await notion.dataSources.query({
            data_source_id: attendeesDatabaseId,
            filter: {
                property: "Check-In Token",
                rich_text: {
                    equals: token,
                },
            },
        });

        if (response.results.length === 0) {
            return { success: false, error: "Attendee not found" };
        }

        const page = response.results[0] as any;
        const properties = page.properties;

        // Extract properties safely
        const getName = (prop: any) => prop?.title?.[0]?.text?.content || "";
        const getRichText = (prop: any) => prop?.rich_text?.[0]?.text?.content || "";
        const getSelect = (prop: any) => prop?.select?.name || "";
        const getDate = (prop: any) => prop?.date?.start || undefined;

        const ticketType = getSelect(properties["Ticket Type"]) as TicketType;
        const ticketLabel = TICKET_LABELS[ticketType] || ticketType;

        // Get registration email from related registration
        let registrationEmail: string | undefined;
        const registrationRelation = properties["Registration"]?.relation;
        if (registrationRelation && registrationRelation.length > 0) {
            try {
                const registrationPage = await notion.pages.retrieve({
                    page_id: registrationRelation[0].id,
                }) as any;
                registrationEmail = registrationPage.properties?.Email?.email || undefined;
            } catch (e) {
                console.error("Failed to fetch registration email:", e);
            }
        }

        const attendee: AttendeeInfo = {
            pageId: page.id,
            name: getName(properties["Name"]),
            firstName: getRichText(properties["First Name"]),
            lastName: getRichText(properties["Last Name"]),
            ticketType: ticketType,
            ticketLabel: ticketLabel,
            dietaryRequirements: getRichText(properties["Dietary Requirements"]) || undefined,
            checkInStatus: getSelect(properties["Check-In Status"]) as CheckInStatus || "Not Checked In",
            checkInTime: getDate(properties["Check-In Time"]),
            registrationEmail,
        };

        return { success: true, attendee };
    } catch (error) {
        console.error("Error fetching attendee by token:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Failed to fetch attendee",
        };
    }
}

/**
 * Check in an attendee by their page ID
 */
export async function checkInAttendee(attendeePageId: string): Promise<{ success: boolean; error?: string }> {
    try {
        await notion.pages.update({
            page_id: attendeePageId,
            properties: {
                "Check-In Status": {
                    select: { name: "Checked In" },
                },
                "Check-In Time": {
                    date: { start: new Date().toISOString() },
                },
            },
        });

        return { success: true };
    } catch (error) {
        console.error("Error checking in attendee:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Failed to check in attendee",
        };
    }
}

/**
 * Get attendees with their check-in tokens for a registration
 * Used to retrieve tokens for displaying QR codes on confirmation page
 */
export async function getAttendeesForRegistration(registrationPageId: string): Promise<{ success: boolean; attendees?: AttendeeWithToken[]; error?: string }> {
    const attendeesDatabaseId = process.env.NOTION_CONVENTION_ATTENDEES_DB_ID;

    if (!attendeesDatabaseId) {
        return { success: false, error: "Attendees database not configured" };
    }

    try {
        const response = await notion.dataSources.query({
            data_source_id: attendeesDatabaseId,
            filter: {
                property: "Registration",
                relation: {
                    contains: registrationPageId,
                },
            },
        });

        const attendees: AttendeeWithToken[] = response.results.map((page: any) => {
            const properties = page.properties;
            const getRichText = (prop: any) => prop?.rich_text?.[0]?.text?.content || "";
            const getSelect = (prop: any) => prop?.select?.name || "";
            const getName = (prop: any) => prop?.title?.[0]?.text?.content || "";

            const token = getRichText(properties["Check-In Token"]);

            return {
                pageId: page.id,
                name: getName(properties["Name"]),
                firstName: getRichText(properties["First Name"]),
                lastName: getRichText(properties["Last Name"]),
                ticketType: getSelect(properties["Ticket Type"]),
                checkInToken: token,
                checkInUrl: generateCheckInUrl(token),
            };
        });

        return { success: true, attendees };
    } catch (error) {
        console.error("Error fetching attendees for registration:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Failed to fetch attendees",
        };
    }
}

/**
 * Get registration by Stripe session ID
 */
export async function getRegistrationByStripeSession(stripeSessionId: string): Promise<{ success: boolean; pageId?: string; error?: string }> {
    const registrationsDatabaseId = process.env.NOTION_CONVENTION_REGISTRATIONS_DB_ID || process.env.NOTION_CONVENTION_DATABASE_ID;

    if (!registrationsDatabaseId) {
        return { success: false, error: "Registrations database not configured" };
    }

    try {
        const response = await notion.dataSources.query({
            data_source_id: registrationsDatabaseId,
            filter: {
                property: "Stripe Session ID",
                rich_text: {
                    equals: stripeSessionId,
                },
            },
        });

        if (response.results.length === 0) {
            return { success: false, error: "Registration not found" };
        }

        return { success: true, pageId: response.results[0].id };
    } catch (error) {
        console.error("Error fetching registration by Stripe session:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Failed to fetch registration",
        };
    }
}
