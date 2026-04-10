"use server";

import { z } from "zod";
import { createMembershipApplication, getNotionPageUrl } from "@/lib/notion";
import { sendApplicantConfirmationEmail, sendAdminNotificationEmail, sendFallbackAdminEmail } from "@/lib/email";
import { sendDiscordNotification } from "@/lib/discord";
import {
    parseFormData,
    toServiceData,
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
    try {
        // Validate and parse the form data using the shared schema
        const validatedData = parseFormData(formData);

        // Convert to service format for Notion and email
        const serviceData = toServiceData(validatedData);

        // Attempt Notion push (best-effort - failure is non-fatal)
        const notionResult = await createMembershipApplication(serviceData);
        const notionPageUrl = notionResult.success && notionResult.pageId
            ? getNotionPageUrl(notionResult.pageId)
            : undefined;
        const notionFailed = !notionResult.success;

        if (notionFailed) {
            console.error("Notion creation failed (non-fatal):", notionResult.error);
        }

        // Format membership type for Discord notification
        const membershipTypeDisplay = serviceData.membershipCategory === "Sponsoring"
            ? "Sponsoring"
            : serviceData.membershipType === "Organisation"
                ? `Organisation (${serviceData.orgType === "ForProfit" ? "For-Profit" : "Not-for-Profit"})`
                : "Individual";

        // Send all notifications in parallel (none should fail the submission)
        const [applicantEmailResult, adminEmailResult, discordResult] = await Promise.allSettled([
            // 1. Applicant confirmation email - always
            sendApplicantConfirmationEmail(serviceData),
            // 2. Admin email - fallback version if Notion failed, normal version otherwise
            notionFailed
                ? sendFallbackAdminEmail(serviceData, notionResult.error || "Unknown Notion error")
                : sendAdminNotificationEmail(serviceData, notionPageUrl),
            // 3. Discord notification - always
            sendDiscordNotification({
                applicantName: `${serviceData.firstName} ${serviceData.surname}`,
                membershipType: membershipTypeDisplay,
                email: serviceData.email,
                notionPageUrl,
                notionFailed,
            }),
        ]);

        // Log any notification failures for debugging
        if (applicantEmailResult.status === "rejected") {
            console.warn("Applicant email failed:", applicantEmailResult.reason);
        }
        if (adminEmailResult.status === "rejected") {
            console.warn("Admin email failed:", adminEmailResult.reason);
        }
        if (discordResult.status === "rejected") {
            console.warn("Discord notification failed:", discordResult.reason);
        }

        const applicantEmailSent = applicantEmailResult.status === "fulfilled" && applicantEmailResult.value.success;
        const adminEmailSent = adminEmailResult.status === "fulfilled" && adminEmailResult.value.success;

        // Always return success to the user
        return {
            success: true,
            errors: null,
            redirectTo: "/membership/application-form/confirmation",
            emailStatus: {
                applicantEmailSent,
                adminEmailSent,
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
