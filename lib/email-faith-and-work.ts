import { Resend } from "resend";
import { FAITH_AND_WORK_2026, getFaithAndWorkCalendarUrl } from "@/data/faith-and-work";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const FROM_EMAIL = "ASI UK <noreply@asiuk.org>";

interface FaithAndWorkEmailParams {
    email: string;
    firstName: string;
    attendeeNames: string[];
}

function escapeHtml(value: string): string {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function generateHtml({ firstName, attendeeNames }: FaithAndWorkEmailParams): string {
    const e = FAITH_AND_WORK_2026;
    const attendeesHtml = attendeeNames
        .map((n) => `<li style="margin-bottom: 4px;">${escapeHtml(n)}</li>`)
        .join("");

    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${e.title} — Registration Confirmed</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
    <div style="text-align: center; margin-bottom: 30px;">
        <img src="https://www.asiuk.org/asiLogo.png" alt="ASI UK" style="max-width: 180px; height: auto; margin-bottom: 10px;" />
        <p style="color: #666; margin-top: 0;">Adventist-laymen's Services and Industries</p>
    </div>

    <div style="background-color: #1e40af; color: white; padding: 20px; border-radius: 8px; text-align: center; margin-bottom: 20px;">
        <h2 style="margin: 0;">You're registered for ${e.title}!</h2>
    </div>

    <p>Hi ${escapeHtml(firstName)},</p>
    <p>Thank you for registering. We're looking forward to seeing you — here are the details.</p>

    <div style="background-color: #f5f7fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #1e3a5f; margin-top: 0;">Event Details</h3>
        <p style="margin: 4px 0;"><strong>Date:</strong> ${e.dateLabel}</p>
        <p style="margin: 4px 0;"><strong>Time:</strong> ${e.timeLabel}</p>
        <p style="margin: 4px 0;"><strong>Venue:</strong> ${e.venue}, ${e.venueAddress}</p>
        <p style="margin: 12px 0 4px;"><strong>Registered attendees:</strong></p>
        <ul style="padding-left: 20px; margin: 0;">${attendeesHtml}</ul>
    </div>

    <p style="text-align: center; margin: 24px 0;">
        <a href="${getFaithAndWorkCalendarUrl()}" style="background-color: #1e40af; color: #fff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold;">Add to Google Calendar</a>
        &nbsp;
        <a href="${e.venueMapUrl}" style="color: #1e40af; font-weight: bold;">Get directions</a>
    </p>

    <h3 style="color: #1e3a5f;">Good to know</h3>
    <ul style="padding-left: 20px;">
        <li style="margin-bottom: 8px;">${e.refreshments}</li>
        <li style="margin-bottom: 8px;">${e.donations}</li>
        <li style="margin-bottom: 8px;">Bring business cards if you have them — there will be plenty of time to network.</li>
    </ul>

    <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">

    <p style="color: #666; font-size: 14px;">
        Can no longer attend, or have a question? Reply to <a href="mailto:info@asiuk.org" style="color: #1e3a5f;">info@asiuk.org</a>.
    </p>
    <p style="color: #666; font-size: 14px;">
        ASI UK<br>
        <a href="https://www.asiuk.org" style="color: #1e3a5f;">www.asiuk.org</a>
    </p>
</body>
</html>
`;
}

export async function sendFaithAndWorkConfirmationEmail(
    params: FaithAndWorkEmailParams,
): Promise<{ success: boolean; error?: string }> {
    if (!resend) {
        console.warn("Resend not configured - skipping Faith & Work confirmation email");
        return { success: false, error: "Email service not configured" };
    }

    try {
        const { error } = await resend.emails.send({
            from: FROM_EMAIL,
            to: params.email,
            replyTo: "info@asiuk.org",
            subject: `${FAITH_AND_WORK_2026.title} — ${FAITH_AND_WORK_2026.dateShort} — Registration Confirmed`,
            html: generateHtml(params),
        });
        if (error) {
            console.error("Failed to send Faith & Work confirmation email:", error);
            return { success: false, error: error.message };
        }
        return { success: true };
    } catch (error) {
        console.error("Error sending Faith & Work confirmation email:", error);
        return { success: false, error: error instanceof Error ? error.message : "Unknown error" };
    }
}
