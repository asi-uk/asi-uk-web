import { z } from "zod";

/**
 * Shared contact-form schema used by both the client form (react-hook-form
 * resolver) and the server action (re-validation — never trust the client).
 *
 * `website` is a honeypot: it is hidden from real users, so any non-empty value
 * signals a bot. The server treats a filled honeypot as a silent no-op.
 */
export const contactFormSchema = z.object({
    name: z.string().min(2, "Please enter your name"),
    email: z.string().email("Please enter a valid email address"),
    recipient: z.string().min(1, "Please choose who you'd like to contact"),
    subject: z.string().min(2, "Please enter a subject"),
    message: z.string().min(10, "Please enter a message (at least 10 characters)"),
    website: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
