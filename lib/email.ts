import { Resend } from "resend";
import { MembershipFormData } from "./notion";

// Initialize Resend client (will be undefined if API key not set)
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const FROM_EMAIL = "ASI UK <noreply@asiuk.org>";
const ADMIN_EMAIL = "membership@asiuk.org";

// Helper to format membership type for display
function formatMembershipTypeDisplay(data: MembershipFormData): string {
    if (data.membershipCategory === "Sponsoring") {
        return "Sponsoring Membership";
    }
    if (data.membershipType === "Organisation") {
        const orgTypeLabel = data.orgType === "ForProfit" ? "For-Profit" : "Not-for-Profit";
        return `Ordinary Membership - Organisation (${orgTypeLabel})`;
    }
    return "Ordinary Membership - Individual";
}

// Generate HTML email for applicant confirmation
export function generateApplicantEmailHtml(data: MembershipFormData): string {
    const fullName = `${data.title} ${data.firstName} ${data.surname}`;

    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ASI UK Membership Application Received</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
    <div style="text-align: center; margin-bottom: 30px;">
        <h1 style="color: #1e3a5f; margin-bottom: 5px;">ASI UK</h1>
        <p style="color: #666; margin-top: 0;">Adventist-laymen's Services and Industries</p>
    </div>

    <h2 style="color: #1e3a5f;">Application Received</h2>

    <p>Dear ${fullName},</p>

    <p>Thank you for submitting your membership application to ASI UK. We have received your application and it is now being processed.</p>

    <div style="background-color: #f5f7fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #1e3a5f; margin-top: 0;">Application Summary</h3>
        <p><strong>Application Type:</strong> ${formatMembershipTypeDisplay(data)}</p>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phoneNumber}</p>
        ${data.localChurchName ? `<p><strong>Local Church:</strong> ${data.localChurchName}</p>` : ""}
        ${data.membershipType === "Organisation" && data.orgName ? `<p><strong>Organisation:</strong> ${data.orgName}</p>` : ""}
    </div>

    <h3 style="color: #1e3a5f;">What Happens Next?</h3>

    <ol style="padding-left: 20px;">
        <li style="margin-bottom: 10px;"><strong>Review:</strong> Our membership team will review your application.</li>
        <li style="margin-bottom: 10px;"><strong>Verification:</strong> We may contact your pastor to verify your church membership.</li>
        <li style="margin-bottom: 10px;"><strong>Decision:</strong> You will receive a decision within <strong>2-4 weeks</strong>.</li>
        <li style="margin-bottom: 10px;"><strong>Welcome:</strong> If approved, you'll receive instructions on completing your membership.</li>
    </ol>

    <p>If you have any questions about your application, please contact us at <a href="mailto:membership@asiuk.org" style="color: #1e3a5f;">membership@asiuk.org</a>.</p>

    <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">

    <p style="color: #666; font-size: 14px;">
        ASI UK<br>
        <a href="mailto:info@asiuk.org" style="color: #1e3a5f;">info@asiuk.org</a><br>
        <a href="https://asiuk.org" style="color: #1e3a5f;">www.asiuk.org</a>
    </p>
</body>
</html>
`;
}

// Generate HTML email for admin notification
export function generateAdminEmailHtml(data: MembershipFormData, notionPageUrl?: string): string {
    const fullName = `${data.title} ${data.firstName} ${data.surname}`;
    const submissionDate = new Date().toLocaleDateString("en-GB", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });

    let orgSection = "";
    if (data.membershipType === "Organisation") {
        orgSection = `
        <h3 style="color: #1e3a5f; margin-top: 25px;">Organisation Details</h3>
        <table style="width: 100%; border-collapse: collapse;">
            ${data.orgName ? `<tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Name:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${data.orgName}</td></tr>` : ""}
            ${data.orgLegalName ? `<tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Legal Name:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${data.orgLegalName}</td></tr>` : ""}
            ${data.orgType ? `<tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Type:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${data.orgType === "ForProfit" ? "For-Profit" : "Not-for-Profit"}</td></tr>` : ""}
            ${data.orgDescription ? `<tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Description:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${data.orgDescription}</td></tr>` : ""}
            ${data.orgApplicantRole ? `<tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Applicant's Role:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${data.orgApplicantRole}</td></tr>` : ""}
            ${data.orgEmail ? `<tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Email:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${data.orgEmail}</td></tr>` : ""}
            ${data.orgPhone ? `<tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${data.orgPhone}</td></tr>` : ""}
            ${data.orgAddress ? `<tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Address:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${data.orgAddress}</td></tr>` : ""}
            ${data.orgPostalAddress ? `<tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Postal Address:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${data.orgPostalAddress}</td></tr>` : ""}
            ${data.orgWebsite ? `<tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Website:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${data.orgWebsite}</td></tr>` : ""}
            ${data.orgEmployees ? `<tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Employees:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${data.orgEmployees}</td></tr>` : ""}
            ${data.orgYearsInOperation ? `<tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Years in Operation:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${data.orgYearsInOperation}</td></tr>` : ""}
            ${data.orgIsReligiousMission ? `<tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Religious Mission:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${data.orgIsReligiousMission}</td></tr>` : ""}
            ${data.orgIsChurchControlled ? `<tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Church Controlled:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${data.orgIsChurchControlled}</td></tr>` : ""}
            ${data.orgK0505IsAgreed ? `<tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>K 05 05 Compliant:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${data.orgK0505IsAgreed}</td></tr>` : ""}
        </table>
        `;
    }

    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New ASI UK Membership Application</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 700px; margin: 0 auto; padding: 20px;">
    <div style="background-color: #1e3a5f; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
        <h1 style="margin: 0;">New Membership Application</h1>
        <p style="margin: 5px 0 0 0; opacity: 0.9;">${formatMembershipTypeDisplay(data)}</p>
    </div>

    <div style="border: 1px solid #ddd; border-top: none; padding: 20px; border-radius: 0 0 8px 8px;">
        <p style="color: #666; font-size: 14px; margin-top: 0;">Submitted: ${submissionDate}</p>

        <h3 style="color: #1e3a5f;">Applicant Details</h3>
        <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee; width: 150px;"><strong>Name:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${fullName}</td></tr>
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Email:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${data.phoneNumber}</td></tr>
        </table>

        <h3 style="color: #1e3a5f; margin-top: 25px;">Church Information</h3>
        <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee; width: 150px;"><strong>Church Member:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${data.isChurchMember}</td></tr>
            ${data.isChurchEmployed ? `<tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Church Employed:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${data.isChurchEmployed}</td></tr>` : ""}
            ${data.localChurchName ? `<tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Local Church:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${data.localChurchName}</td></tr>` : ""}
            ${data.localChurchPastorName ? `<tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Pastor Name:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${data.localChurchPastorName}</td></tr>` : ""}
            ${data.localChurchPastorPhone ? `<tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Pastor Phone:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${data.localChurchPastorPhone}</td></tr>` : ""}
        </table>

        ${orgSection}

        <h3 style="color: #1e3a5f; margin-top: 25px;">Consent</h3>
        <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee; width: 150px;"><strong>Privacy Policy:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${data.privacyPolicyAccepted ? "Accepted" : "Not Accepted"}</td></tr>
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Marketing:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${data.marketingConsent ? "Opted In" : "Opted Out"}</td></tr>
        </table>

        <div style="margin-top: 30px; padding: 15px; background-color: #f5f7fa; border-radius: 8px;">
            <p style="margin: 0; font-size: 14px;"><strong>Next Steps:</strong> Review this application and update the status in Notion. Contact the applicant's pastor for verification if needed.</p>
        </div>

        ${notionPageUrl ? `
        <div style="margin-top: 20px; text-align: center;">
            <a href="${notionPageUrl}" style="display: inline-block; background-color: #1e3a5f; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">View Application in Notion</a>
        </div>
        ` : ""}
    </div>
</body>
</html>
`;
}

// Send confirmation email to applicant
export async function sendApplicantConfirmationEmail(data: MembershipFormData): Promise<{ success: boolean; error?: string }> {
    if (!resend) {
        console.warn("Resend not configured - skipping applicant confirmation email");
        return { success: false, error: "Email service not configured" };
    }

    try {
        const { error } = await resend.emails.send({
            from: FROM_EMAIL,
            to: data.email,
            subject: "ASI UK - Membership Application Received",
            html: generateApplicantEmailHtml(data),
        });

        if (error) {
            console.error("Failed to send applicant email:", error);
            return { success: false, error: error.message };
        }

        return { success: true };
    } catch (error) {
        console.error("Error sending applicant email:", error);
        return { success: false, error: error instanceof Error ? error.message : "Unknown error" };
    }
}

// Send notification email to admin
export async function sendAdminNotificationEmail(data: MembershipFormData, notionPageUrl?: string): Promise<{ success: boolean; error?: string }> {
    if (!resend) {
        console.warn("Resend not configured - skipping admin notification email");
        return { success: false, error: "Email service not configured" };
    }

    const fullName = `${data.title} ${data.firstName} ${data.surname}`;

    try {
        const { error } = await resend.emails.send({
            from: FROM_EMAIL,
            to: ADMIN_EMAIL,
            subject: `New Membership Application: ${fullName}`,
            html: generateAdminEmailHtml(data, notionPageUrl),
        });

        if (error) {
            console.error("Failed to send admin email:", error);
            return { success: false, error: error.message };
        }

        return { success: true };
    } catch (error) {
        console.error("Error sending admin email:", error);
        return { success: false, error: error instanceof Error ? error.message : "Unknown error" };
    }
}

// Send both emails in parallel (graceful error handling - don't fail if emails fail)
export async function sendMembershipEmails(data: MembershipFormData, notionPageUrl?: string): Promise<{
    applicantEmailSent: boolean;
    adminEmailSent: boolean;
    errors: string[];
}> {
    const errors: string[] = [];

    const [applicantResult, adminResult] = await Promise.all([
        sendApplicantConfirmationEmail(data),
        sendAdminNotificationEmail(data, notionPageUrl),
    ]);

    if (!applicantResult.success && applicantResult.error) {
        errors.push(`Applicant email: ${applicantResult.error}`);
    }

    if (!adminResult.success && adminResult.error) {
        errors.push(`Admin email: ${adminResult.error}`);
    }

    return {
        applicantEmailSent: applicantResult.success,
        adminEmailSent: adminResult.success,
        errors,
    };
}
