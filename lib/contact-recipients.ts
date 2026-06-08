import "server-only";

/**
 * Server-only registry mapping an opaque recipient key to the real inbox.
 *
 * These addresses MUST NOT be imported into client components. Keeping them here
 * (behind `server-only`) guarantees the actual emails never reach the browser
 * bundle — the client only ever sees the keys/labels in `lib/contact-options.ts`.
 *
 * The keys here MUST stay in sync with the `value`s in `CONTACT_OPTIONS`.
 */
const RECIPIENT_EMAILS: Record<string, string> = {
    angel: "president@asiuk.org",
    bianna: "vp@asiuk.org",
    tashana: "evangelism@asiuk.org",
    silvia: "treasurer@asiuk.org",
    eric: "secretary@asiuk.org",
    charlicia: "youth@asiuk.org",
    rachel: "logistics@asiuk.org",
    sam: "projects@asiuk.org",
    jason: "projects@asiuk.org",
    general: "info@asiuk.org",
};

/**
 * Resolve an opaque recipient key to its inbox. Returns undefined for unknown
 * keys so the caller can reject tampered/invalid submissions.
 */
export function resolveRecipientEmail(value: string): string | undefined {
    return Object.prototype.hasOwnProperty.call(RECIPIENT_EMAILS, value)
        ? RECIPIENT_EMAILS[value]
        : undefined;
}
