import { Resend } from "resend";
import { generateQRCodeDataUrl, AttendeeQRCode } from "@/lib/qr-code";
import { TICKET_LABELS, TicketType } from "@/lib/schemas/convention-registration";

// Initialize Resend client (will be undefined if API key not set)
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const FROM_EMAIL = "ASI UK <noreply@asiuk.org>";

interface AttendeeWithQRInfo {
    name: string;
    ticketType: string;
    checkInUrl: string;
}

interface ConventionEmailParams {
    email: string;
    attendeeCount: number;
    orderTotal: number;
    attendees?: AttendeeWithQRInfo[];
}

// Generate QR code HTML blocks for each attendee
async function generateAttendeeQRCodesHtml(attendees: AttendeeWithQRInfo[]): Promise<string> {
    if (!attendees || attendees.length === 0) {
        return "";
    }

    const qrCodesHtml = await Promise.all(
        attendees.map(async (attendee) => {
            try {
                const qrDataUrl = await generateQRCodeDataUrl(attendee.checkInUrl);
                const ticketLabel = TICKET_LABELS[attendee.ticketType as TicketType] || attendee.ticketType;

                return `
                <div style="background-color: #fff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 20px; margin-bottom: 16px; text-align: center;">
                    <h4 style="color: #1e3a5f; margin: 0 0 5px 0; font-size: 18px;">${attendee.name}</h4>
                    <p style="color: #666; margin: 0 0 15px 0; font-size: 14px;">${ticketLabel}</p>
                    <img src="${qrDataUrl}" alt="Check-in QR Code for ${attendee.name}" style="width: 180px; height: 180px; margin: 0 auto; display: block;" />
                    <p style="color: #888; font-size: 12px; margin-top: 10px;">Scan at event check-in</p>
                </div>
                `;
            } catch (error) {
                console.error(`Failed to generate QR code for ${attendee.name}:`, error);
                return `
                <div style="background-color: #fff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 20px; margin-bottom: 16px; text-align: center;">
                    <h4 style="color: #1e3a5f; margin: 0 0 5px 0; font-size: 18px;">${attendee.name}</h4>
                    <p style="color: #666; margin: 0; font-size: 14px;">${TICKET_LABELS[attendee.ticketType as TicketType] || attendee.ticketType}</p>
                </div>
                `;
            }
        })
    );

    return `
    <div style="background-color: #f5f7fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #1e3a5f; margin-top: 0; text-align: center;">Your Check-In QR Codes</h3>
        <p style="color: #666; text-align: center; margin-bottom: 20px; font-size: 14px;">
            Show these QR codes at the event for quick check-in. Each attendee has their own unique code.
        </p>
        ${qrCodesHtml.join("")}
    </div>
    `;
}

// Generate HTML email for convention confirmation
export async function generateConventionConfirmationEmailHtml(params: ConventionEmailParams): Promise<string> {
    const { attendeeCount, orderTotal, attendees } = params;

    // Generate QR codes section if attendees with check-in URLs are provided
    const qrCodesSection = attendees && attendees.length > 0
        ? await generateAttendeeQRCodesHtml(attendees)
        : "";

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
        <img src="https://www.asiuk.org/asiLogo.png" alt="ASI UK" style="max-width: 180px; height: auto; margin-bottom: 10px;" />
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

    ${qrCodesSection}

    <h3 style="color: #1e3a5f;">What to Expect</h3>

    <ul style="padding-left: 20px;">
        <li style="margin-bottom: 10px;">Inspiring sessions from Christian professionals and ministry leaders</li>
        <li style="margin-bottom: 10px;">Networking opportunities with like-minded individuals</li>
    </ul>

    <h3 style="color: #1e3a5f;">Meals & Refreshments</h3>

    <ul style="padding-left: 20px;">
        <li style="margin-bottom: 10px;">Light refreshments will be provided on both Sabbath and Sunday (drinks, cakes, snacks, etc.)</li>
        <li style="margin-bottom: 10px;">Main meals are available in the dining hall but need to be arranged separately with Newbold College</li>
        <li style="margin-bottom: 10px;">You are also welcome to bring packed lunches or food from home</li>
    </ul>

    <h3 style="color: #1e3a5f;">Important Information</h3>

    <ul style="padding-left: 20px;">
        <li style="margin-bottom: 10px;">Show your QR code at check-in for fast entry</li>
        <li style="margin-bottom: 10px;">Free parking is available on site</li>
    </ul>

    <p>We look forward to seeing you at the convention!</p>

    <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">

    <p style="color: #666; font-size: 14px;">
        If you have any questions, please contact us at <a href="mailto:info@asiuk.org" style="color: #1e3a5f;">info@asiuk.org</a>
    </p>

    <p style="color: #666; font-size: 14px;">
        ASI UK<br>
        <a href="https://www.asiuk.org" style="color: #1e3a5f;">www.asiuk.org</a>
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
        const html = await generateConventionConfirmationEmailHtml(params);

        const { error } = await resend.emails.send({
            from: FROM_EMAIL,
            to: params.email,
            subject: "ASI UK Convention 2026 - Registration Confirmed",
            html,
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
