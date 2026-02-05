import crypto from "crypto";

/**
 * Check-in Token Utilities
 *
 * Generates and validates HMAC-signed tokens for event check-in.
 * Token format: {attendeeId}:{uuid}:{signature}
 */

const ALGORITHM = "sha256";

function getSecret(): string {
    const secret = process.env.CHECKIN_TOKEN_SECRET;
    if (!secret) {
        throw new Error("CHECKIN_TOKEN_SECRET environment variable is not set");
    }
    if (secret.length < 32) {
        throw new Error("CHECKIN_TOKEN_SECRET must be at least 32 characters");
    }
    return secret;
}

/**
 * Generate a unique check-in token for an attendee
 * Token format: {attendeeId}:{uuid}:{signature}
 */
export function generateCheckInToken(attendeeId: string): string {
    const secret = getSecret();
    const uuid = crypto.randomUUID();
    const payload = `${attendeeId}:${uuid}`;

    const signature = crypto
        .createHmac(ALGORITHM, secret)
        .update(payload)
        .digest("base64url");

    return `${payload}:${signature}`;
}

/**
 * Validate a check-in token and extract the attendee ID
 * Returns null if token is invalid or tampered
 */
export function validateCheckInToken(token: string): { valid: boolean; attendeeId?: string; error?: string } {
    try {
        const secret = getSecret();
        const parts = token.split(":");

        if (parts.length !== 3) {
            return { valid: false, error: "Invalid token format" };
        }

        const [attendeeId, uuid, providedSignature] = parts;

        if (!attendeeId || !uuid || !providedSignature) {
            return { valid: false, error: "Invalid token format" };
        }

        // Recreate the signature
        const payload = `${attendeeId}:${uuid}`;
        const expectedSignature = crypto
            .createHmac(ALGORITHM, secret)
            .update(payload)
            .digest("base64url");

        // Constant-time comparison to prevent timing attacks
        const isValid = crypto.timingSafeEqual(
            Buffer.from(providedSignature),
            Buffer.from(expectedSignature)
        );

        if (!isValid) {
            return { valid: false, error: "Invalid token signature" };
        }

        return { valid: true, attendeeId };
    } catch (error) {
        if (error instanceof Error && error.message.includes("CHECKIN_TOKEN_SECRET")) {
            throw error; // Re-throw configuration errors
        }
        return { valid: false, error: "Token validation failed" };
    }
}

/**
 * Generate the full check-in URL for a token
 * Always uses the production domain since QR codes are printed/emailed
 * to attendees and scanned at physical events.
 */
export function generateCheckInUrl(token: string): string {
    const baseUrl = "https://www.asiuk.org";
    return `${baseUrl}/api/convention/check-in?token=${encodeURIComponent(token)}`;
}

/**
 * Extract just the attendee ID from a token without full validation
 * Useful for logging/debugging - does NOT verify signature
 */
export function extractAttendeeIdFromToken(token: string): string | null {
    const parts = token.split(":");
    if (parts.length !== 3) {
        return null;
    }
    return parts[0] || null;
}
