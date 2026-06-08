"use server";

import { z } from "zod";
import { contactFormSchema, type ContactFormData } from "@/lib/schemas/contact-form";
import { resolveRecipientEmail } from "@/lib/contact-recipients";
import { getContactLabel } from "@/lib/contact-options";
import { sendContactEmail } from "@/lib/email-contact";

export interface ContactSubmissionResult {
    success: boolean;
    errors: string[] | null;
}

export async function contactFormSubmitAction(values: ContactFormData): Promise<ContactSubmissionResult> {
    try {
        // Re-validate server-side; never trust the client payload.
        const data = contactFormSchema.parse(values);

        // Honeypot: a real user never fills this. Pretend success so bots get no signal.
        if (data.website && data.website.trim() !== "") {
            console.warn("Contact form honeypot triggered - skipping send");
            return { success: true, errors: null };
        }

        // Resolve the opaque recipient key to a real inbox (server-only).
        const recipientEmail = resolveRecipientEmail(data.recipient);
        if (!recipientEmail) {
            return { success: false, errors: ["Please choose a valid recipient."] };
        }

        const recipientLabel = getContactLabel(data.recipient) ?? "ASI UK";

        const result = await sendContactEmail({
            senderName: data.name,
            senderEmail: data.email,
            recipientLabel,
            recipientEmail,
            subject: data.subject,
            message: data.message,
        });

        if (!result.success) {
            return {
                success: false,
                errors: [result.error || "We couldn't send your message. Please try again later."],
            };
        }

        return { success: true, errors: null };
    } catch (error: unknown) {
        if (error instanceof z.ZodError) {
            const errorMessages = error.errors.map((issue) => issue.message);
            console.error("Contact form validation errors:", errorMessages);
            return { success: false, errors: errorMessages };
        }
        console.error("Contact form submission error:", error);
        return {
            success: false,
            errors: [`An error occurred: ${error instanceof Error ? error.message : String(error)}`],
        };
    }
}
