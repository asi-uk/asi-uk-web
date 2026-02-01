import { Resend } from "resend";

// Initialize Resend client (will be undefined if API key not set)
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const FROM_EMAIL = "ASI UK <noreply@asiuk.org>";

interface ConventionEmailParams {
    email: string;
    attendeeCount: number;
    orderTotal: number;
}

// Generate HTML email for convention confirmation
export function generateConventionConfirmationEmailHtml(params: ConventionEmailParams): string {
    const { attendeeCount, orderTotal } = params;

    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ASI UK Convention 2026 - Registration Confirmed</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
    <div style="text-align: center; margin-bottom: 30px;">
        <h1 style="color: #1e3a5f; margin-bottom: 5px;">ASI UK</h1>
        <p style="color: #666; margin-top: 0;">Adventist-laymen's Services and Industries</p>
    </div>

    <div style="background-color: #22c55e; color: white; padding: 20px; border-radius: 8px; text-align: center; margin-bottom: 20px;">
        <h2 style="margin: 0;">Registration Confirmed!</h2>
    </div>

    <p>Thank you for registering for the ASI UK Convention 2026.</p>

    <div style="background-color: #f5f7fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #1e3a5f; margin-top: 0;">Event Details</h3>
        <p><strong>Event:</strong> ASI UK Convention 2026</p>
        <p><strong>Date:</strong> 20-21 June 2026</p>
        <p><strong>Location:</strong> Newbold College, Bracknell</p>
        <p><strong>Number of Attendees:</strong> ${attendeeCount}</p>
        ${orderTotal > 0 ? `<p><strong>Amount Paid:</strong> £${orderTotal}</p>` : ""}
    </div>

    <h3 style="color: #1e3a5f;">What to Expect</h3>

    <ul style="padding-left: 20px;">
        <li style="margin-bottom: 10px;">Inspiring sessions from Christian professionals and ministry leaders</li>
        <li style="margin-bottom: 10px;">Networking opportunities with like-minded individuals</li>
        <li style="margin-bottom: 10px;">Light refreshments provided throughout the event</li>
    </ul>

    <h3 style="color: #1e3a5f;">Important Information</h3>

    <ul style="padding-left: 20px;">
        <li style="margin-bottom: 10px;">Please arrive at least 15 minutes before the start time for registration</li>
        <li style="margin-bottom: 10px;">Bring a valid photo ID for verification</li>
        <li style="margin-bottom: 10px;">Free parking is available on site</li>
    </ul>

    <p>We look forward to seeing you at the convention!</p>

    <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">

    <p style="color: #666; font-size: 14px;">
        If you have any questions, please contact us at <a href="mailto:info@asiuk.org" style="color: #1e3a5f;">info@asiuk.org</a>
    </p>

    <p style="color: #666; font-size: 14px;">
        ASI UK<br>
        <a href="https://asiuk.org" style="color: #1e3a5f;">www.asiuk.org</a>
    </p>
</body>
</html>
`;
}

// Send confirmation email after successful payment
export async function sendConventionConfirmationEmail(
    params: ConventionEmailParams
): Promise<{ success: boolean; error?: string }> {
    if (!resend) {
        console.warn("Resend not configured - skipping confirmation email");
        return { success: false, error: "Email service not configured" };
    }

    try {
        const { error } = await resend.emails.send({
            from: FROM_EMAIL,
            to: params.email,
            subject: "ASI UK Convention 2026 - Registration Confirmed",
            html: generateConventionConfirmationEmailHtml(params),
        });

        if (error) {
            console.error("Failed to send confirmation email:", error);
            return { success: false, error: error.message };
        }

        console.log("Convention confirmation email sent to:", params.email);
        return { success: true };
    } catch (error) {
        console.error("Error sending confirmation email:", error);
        return { success: false, error: error instanceof Error ? error.message : "Unknown error" };
    }
}

// Send confirmation email for free registrations (no payment)
export async function sendFreeRegistrationConfirmationEmail(
    params: Omit<ConventionEmailParams, "orderTotal">
): Promise<{ success: boolean; error?: string }> {
    return sendConventionConfirmationEmail({ ...params, orderTotal: 0 });
}
