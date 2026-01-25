import { Client } from "@notionhq/client";
import { MembershipFormDataForServices as MembershipFormData } from "@/lib/schemas/membership-form";

// Initialize Notion client
const notion = new Client({
    auth: process.env.NOTION_API_KEY,
});

// Re-export for backwards compatibility
export type { MembershipFormData };

// Helper to format the full membership type string
function formatMembershipType(data: MembershipFormData): string {
    if (data.membershipCategory === "Sponsoring") {
        return "Sponsoring";
    }
    if (data.membershipType === "Organisation") {
        const orgTypeLabel = data.orgType === "ForProfit" ? "For-Profit" : "Not-for-Profit";
        return `Ordinary - Organisation (${orgTypeLabel})`;
    }
    return "Ordinary - Individual";
}

// Helper to format the applicant name
function formatApplicantName(data: MembershipFormData): string {
    return `${data.firstName} ${data.surname}`;
}

// Convert Notion page ID to a shareable URL
export function getNotionPageUrl(pageId: string): string {
    const idWithoutDashes = pageId.replace(/-/g, "");
    return `https://www.notion.so/${idWithoutDashes}`;
}

export async function createMembershipApplication(data: MembershipFormData): Promise<{ success: boolean; pageId?: string; error?: string }> {
    const databaseId = process.env.NOTION_DATABASE_ID;

    if (!databaseId) {
        return { success: false, error: "Notion database ID not configured" };
    }

    if (!process.env.NOTION_API_KEY) {
        return { success: false, error: "Notion API key not configured" };
    }

    try {
        // Build the properties object for Notion
        const properties: Record<string, any> = {
            // Title field (required for Notion databases)
            "Name": {
                title: [{ text: { content: formatApplicantName(data) } }]
            },
            // Basic fields
            "Email": { email: data.email },
            "Phone": { phone_number: data.phoneNumber },
            "Submission Date": { date: { start: new Date().toISOString() } },
            "Status": { select: { name: "Pending Review" } },

            // Membership info
            "Membership Category": { select: { name: data.membershipCategory } },
            "Membership Type": { rich_text: [{ text: { content: formatMembershipType(data) } }] },

            // Personal info
            "Title": { select: { name: data.title } },
            "First Name": { rich_text: [{ text: { content: data.firstName } }] },
            "Surname": { rich_text: [{ text: { content: data.surname } }] },

            // Church info
            "Is Church Member": { select: { name: data.isChurchMember } },

            // Consent
            "Privacy Accepted": { checkbox: data.privacyPolicyAccepted },
            "Marketing Consent": { checkbox: data.marketingConsent },
        };

        // Add comments if provided
        if (data.comments) {
            properties["Comments"] = { rich_text: [{ text: { content: data.comments } }] };
        }

        // Add optional fields only if they have values
        if (data.isChurchEmployed) {
            properties["Is Church Employed"] = { select: { name: data.isChurchEmployed } };
        }
        if (data.localChurchName) {
            properties["Local Church"] = { rich_text: [{ text: { content: data.localChurchName } }] };
        }
        if (data.localChurchPastorName) {
            properties["Pastor Name"] = { rich_text: [{ text: { content: data.localChurchPastorName } }] };
        }
        if (data.localChurchPastorPhone) {
            properties["Pastor Phone"] = { rich_text: [{ text: { content: data.localChurchPastorPhone } }] };
        }

        // Organisation fields (when applicable)
        if (data.membershipType === "Organisation") {
            if (data.orgType) {
                properties["Org Type"] = { select: { name: data.orgType === "ForProfit" ? "For-Profit" : "Not-for-Profit" } };
            }
            if (data.orgName) {
                properties["Org Name"] = { rich_text: [{ text: { content: data.orgName } }] };
            }
            if (data.orgLegalName) {
                properties["Org Legal Name"] = { rich_text: [{ text: { content: data.orgLegalName } }] };
            }
            if (data.orgApplicantRole) {
                properties["Applicant Role"] = { rich_text: [{ text: { content: data.orgApplicantRole } }] };
            }
            if (data.orgDescription) {
                properties["Org Description"] = { rich_text: [{ text: { content: data.orgDescription } }] };
            }
            if (data.orgAddress) {
                properties["Org Address"] = { rich_text: [{ text: { content: data.orgAddress } }] };
            }
            if (data.orgPostalAddress) {
                properties["Org Postal Address"] = { rich_text: [{ text: { content: data.orgPostalAddress } }] };
            }
            if (data.orgPhone) {
                properties["Org Phone"] = { phone_number: data.orgPhone };
            }
            if (data.orgEmail) {
                properties["Org Email"] = { email: data.orgEmail };
            }
            if (data.orgEmployees) {
                properties["Org Employees"] = { number: parseInt(data.orgEmployees, 10) };
            }
            if (data.orgYearsInOperation) {
                properties["Org Years in Operation"] = { number: parseInt(data.orgYearsInOperation, 10) };
            }
            if (data.orgWebsite) {
                properties["Org Website"] = { url: data.orgWebsite };
            }
            if (data.orgIsReligiousMission) {
                properties["Org Religious Mission"] = { select: { name: data.orgIsReligiousMission } };
            }
            if (data.orgIsChurchControlled) {
                properties["Org Church Controlled"] = { select: { name: data.orgIsChurchControlled } };
            }
            if (data.orgK0505IsAgreed) {
                properties["K 05 05 Compliant"] = { select: { name: data.orgK0505IsAgreed } };
            }
        }

        const response = await notion.pages.create({
            parent: { database_id: databaseId },
            properties,
        });

        return { success: true, pageId: response.id };
    } catch (error) {
        console.error("Notion API error:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Failed to create Notion entry"
        };
    }
}
