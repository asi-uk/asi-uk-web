"use server";

import { after } from "next/server";
import { z } from "zod";
import {
    faithAndWorkRegistrationSchema,
    FaithAndWorkRegistrationData,
    formatFaithAndWorkAttendees,
    getContactEmail,
} from "@/lib/schemas/faith-and-work-registration";
import { createFaithAndWorkRegistration, getNotionPageUrl } from "@/lib/notion-faith-and-work";
import { sendFaithAndWorkDiscordNotification } from "@/lib/discord-faith-and-work";
import { sendFaithAndWorkConfirmationEmail } from "@/lib/email-faith-and-work";
import { subscribeToNewsletter } from "@/lib/mailchimp";
import { isFaithAndWorkRegistrationOpen } from "@/data/faith-and-work";

export interface FaithAndWorkRegistrationResult {
    success: boolean;
    errors: string[] | null;
}

export async function faithAndWorkRegistrationAction(
    data: FaithAndWorkRegistrationData,
): Promise<FaithAndWorkRegistrationResult> {
    try {
        if (!isFaithAndWorkRegistrationOpen()) {
            return { success: false, errors: ["Registration for this event has closed."] };
        }

        const validated = faithAndWorkRegistrationSchema.parse(data);
        const email = getContactEmail(validated);
        const lead = validated.attendees[0];

        const notionResult = await createFaithAndWorkRegistration(validated);
        if (!notionResult.success) {
            // Details are logged in lib/notion-faith-and-work.ts; don't leak them to visitors.
            return {
                success: false,
                errors: ["We couldn't save your registration just now. Please try again in a moment."],
            };
        }

        // Everything below is best-effort and shouldn't hold up the response.
        after(async () => {
            await Promise.allSettled([
                sendFaithAndWorkConfirmationEmail({
                    email,
                    firstName: lead.firstName,
                    attendeeNames: validated.attendees.map((a) => `${a.firstName} ${a.lastName}`),
                }),
                sendFaithAndWorkDiscordNotification({
                    leadName: `${lead.firstName} ${lead.lastName}`,
                    email,
                    attendeeCount: validated.attendees.length,
                    attendeesList: formatFaithAndWorkAttendees(validated.attendees),
                    notionPageUrl: notionResult.pageId ? getNotionPageUrl(notionResult.pageId) : undefined,
                }),
                validated.newsletterOptIn ? subscribeToNewsletter(email) : Promise.resolve(),
            ]);
        });

        return { success: true, errors: null };
    } catch (error: unknown) {
        if (error instanceof z.ZodError) {
            return {
                success: false,
                errors: error.errors.map((issue) => `${issue.path.join(".")} - ${issue.message}`),
            };
        }
        console.error("Faith & Work registration error:", error);
        return { success: false, errors: ["An unexpected error occurred. Please try again."] };
    }
}
