import { Resend } from "resend";

// Initialize Resend client (will be null if API key not set)
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const FROM_EMAIL = "ASI UK <noreply@asiuk.org>";

export interface ContactEmailData {
    senderName: string;
    senderEmail: string;
    recipientLabel: string;
    recipientEmail: string;
    subject: string;
    message: string;
}

// Escape user-provided text before interpolating into the HTML email
function escapeHtml(value: string): string {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

export function generateContactEmailHtml(data: ContactEmailData): string {
    const submissionDate = new Date().toLocaleDateString("en-GB", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });

    const messageHtml = escapeHtml(data.message).replace(/\n/g, "<br>");

    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New ASI UK Website Enquiry</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 700px; margin: 0 auto; padding: 20px;">
    <div style="background-color: #1e3a5f; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
        <h1 style="margin: 0;">New Website Enquiry</h1>
        <p style="margin: 5px 0 0 0; opacity: 0.9;">For: ${escapeHtml(data.recipientLabel)}</p>
    </div>

    <div style="border: 1px solid #ddd; border-top: none; padding: 20px; border-radius: 0 0 8px 8px;">
        <p style="color: #666; font-size: 14px; margin-top: 0;">Submitted: ${submissionDate}</p>

        <h3 style="color: #1e3a5f;">From</h3>
        <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee; width: 120px;"><strong>Name:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${escapeHtml(data.senderName)}</td></tr>
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Email:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><a href="mailto:${escapeHtml(data.senderEmail)}">${escapeHtml(data.senderEmail)}</a></td></tr>
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Subject:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${escapeHtml(data.subject)}</td></tr>
        </table>

        <h3 style="color: #1e3a5f; margin-top: 25px;">Message</h3>
        <div style="background-color: #f5f7fa; padding: 16px; border-radius: 8px;">${messageHtml}</div>

        <div style="margin-top: 25px; padding: 12px; background-color: #f5f7fa; border-radius: 8px;">
            <p style="margin: 0; font-size: 14px;">Reply directly to this email to respond to ${escapeHtml(data.senderName)}.</p>
        </div>
    </div>
</body>
</html>
`;
}

/**
 * Relay a website contact enquiry to the chosen inbox. The sender's address is
 * set as Reply-To so a plain "reply" reaches the visitor directly.
 */
export async function sendContactEmail(data: ContactEmailData): Promise<{ success: boolean; error?: string }> {
    if (!resend) {
        console.warn("Resend not configured - skipping contact email");
        return { success: false, error: "Email service not configured" };
    }

    try {
        const { error } = await resend.emails.send({
            from: FROM_EMAIL,
            to: data.recipientEmail,
            replyTo: data.senderEmail,
            subject: `[Website Contact] ${data.subject}`,
            html: generateContactEmailHtml(data),
        });

        if (error) {
            console.error("Failed to send contact email:", error);
            return { success: false, error: error.message };
        }

        return { success: true };
    } catch (error) {
        console.error("Error sending contact email:", error);
        return { success: false, error: error instanceof Error ? error.message : "Unknown error" };
    }
}
