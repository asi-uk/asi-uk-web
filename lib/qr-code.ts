import QRCode from "qrcode";

/**
 * QR Code Generation Utilities
 *
 * Server-side QR code generation for check-in tokens
 */

// Options for generating high-quality QR codes
const QR_OPTIONS: QRCode.QRCodeToDataURLOptions = {
    errorCorrectionLevel: "M", // Medium error correction (15% data recovery)
    type: "image/png",
    margin: 2,
    width: 200,
    color: {
        dark: "#1e3a5f", // ASI blue
        light: "#ffffff",
    },
};

const QR_SVG_OPTIONS: QRCode.QRCodeToStringOptions = {
    type: "svg",
    errorCorrectionLevel: "M",
    margin: 2,
    width: 200,
    color: {
        dark: "#1e3a5f", // ASI blue
        light: "#ffffff",
    },
};

/**
 * Generate a QR code as a base64 data URL (PNG)
 * Suitable for embedding in emails
 */
export async function generateQRCodeDataUrl(url: string): Promise<string> {
    try {
        const dataUrl = await QRCode.toDataURL(url, QR_OPTIONS);
        return dataUrl;
    } catch (error) {
        console.error("Failed to generate QR code data URL:", error);
        throw new Error("Failed to generate QR code");
    }
}

/**
 * Generate a QR code as an SVG string
 * Suitable for web display (scalable, smaller file size)
 */
export async function generateQRCodeSvg(url: string): Promise<string> {
    try {
        const svg = await QRCode.toString(url, QR_SVG_OPTIONS);
        return svg;
    } catch (error) {
        console.error("Failed to generate QR code SVG:", error);
        throw new Error("Failed to generate QR code");
    }
}

/**
 * Generate a QR code as a Buffer (PNG)
 * Suitable for file attachments
 */
export async function generateQRCodeBuffer(url: string): Promise<Buffer> {
    try {
        const buffer = await QRCode.toBuffer(url, {
            errorCorrectionLevel: "M",
            margin: 2,
            width: 200,
            color: {
                dark: "#1e3a5f",
                light: "#ffffff",
            },
        });
        return buffer;
    } catch (error) {
        console.error("Failed to generate QR code buffer:", error);
        throw new Error("Failed to generate QR code");
    }
}

export interface AttendeeQRCode {
    attendeeId: string;
    attendeeName: string;
    ticketType: string;
    qrCodeDataUrl: string;
    checkInUrl: string;
}

/**
 * Generate QR codes for multiple attendees
 */
export async function generateAttendeesQRCodes(
    attendees: Array<{
        attendeeId: string;
        attendeeName: string;
        ticketType: string;
        checkInUrl: string;
    }>
): Promise<AttendeeQRCode[]> {
    const results = await Promise.all(
        attendees.map(async (attendee) => {
            const qrCodeDataUrl = await generateQRCodeDataUrl(attendee.checkInUrl);
            return {
                ...attendee,
                qrCodeDataUrl,
            };
        })
    );
    return results;
}
