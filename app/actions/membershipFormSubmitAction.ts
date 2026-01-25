"use server";

import { z } from "zod";
import { createMembershipApplication, getNotionPageUrl } from "@/lib/notion";
import { sendMembershipEmails } from "@/lib/email";
import { sendDiscordNotification } from "@/lib/discord";
import {
    parseFormData,
    toServiceData,
    type MembershipFormData
} from "@/lib/schemas/membership-form";

export interface SubmissionResult {
    success: boolean;
    errors: string[] | null;
    redirectTo?: string;
    emailStatus?: {
        applicantEmailSent: boolean;
        adminEmailSent: boolean;
    };
}

export async function membershipFormSubmitAction(formData: FormData): Promise<SubmissionResult> {
    // Log the data received to help with debugging
    const receivedData = Object.fromEntries(formData.entries());
    console.log("Received form data:", receivedData);

    try {
        // Validate and parse the form data using the shared schema
        const validatedData = parseFormData(formData);
        console.log("Validated data:", validatedData);

        // Convert to service format for Notion and email
        const serviceData = toServiceData(validatedData);

        // Create entry in Notion (primary - must succeed)
        const notionResult = await createMembershipApplication(serviceData);

        if (!notionResult.success) {
            console.error("Notion creation failed:", notionResult.error);
            return {
                success: false,
                errors: [notionResult.error || "Failed to save application. Please try again."],
            };
        }

        console.log("Notion entry created:", notionResult.pageId);

        // Construct Notion page URL for notifications
        const notionPageUrl = notionResult.pageId ? getNotionPageUrl(notionResult.pageId) : undefined;

        // Format membership type for Discord notification
        const membershipTypeDisplay = serviceData.membershipCategory === "Sponsoring"
            ? "Sponsoring"
            : serviceData.membershipType === "Organisation"
                ? `Organisation (${serviceData.orgType === "ForProfit" ? "For-Profit" : "Not-for-Profit"})`
                : "Individual";

        // Send emails and Discord notification in parallel (secondary - don't fail submission if they fail)
        const [emailResult, discordResult] = await Promise.all([
            sendMembershipEmails(serviceData, notionPageUrl),
            notionPageUrl ? sendDiscordNotification({
                applicantName: `${serviceData.firstName} ${serviceData.surname}`,
                membershipType: membershipTypeDisplay,
                email: serviceData.email,
                notionPageUrl,
            }) : Promise.resolve({ success: false, error: "No Notion page URL" }),
        ]);

        if (emailResult.errors.length > 0) {
            console.warn("Email sending had issues:", emailResult.errors);
        }

        if (!discordResult.success && discordResult.error !== "Discord webhook not configured") {
            console.warn("Discord notification had issues:", discordResult.error);
        }

        // Return success with redirect
        return {
            success: true,
            errors: null,
            redirectTo: "/membership/application-form/confirmation",
            emailStatus: {
                applicantEmailSent: emailResult.applicantEmailSent,
                adminEmailSent: emailResult.adminEmailSent,
            },
        };

    } catch (error: unknown) {
        if (error instanceof z.ZodError) {
            // Provide detailed validation errors
            const errorMessages = error.errors.map((issue) =>
                `${issue.path.join(".")} - ${issue.message}`
            );
            console.error("Validation errors:", errorMessages);

            return {
                success: false,
                errors: errorMessages,
            };
        } else {
            console.error("Form submission error:", error);
            return {
                success: false,
                errors: [`An error occurred: ${error instanceof Error ? error.message : String(error)}`],
            };
        }
    }
}
