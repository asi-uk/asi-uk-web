/**
 * Client-safe list of contact recipients for the dropdown.
 *
 * Contains ONLY opaque keys and display labels — never real email addresses.
 * The server resolves each `value` to an inbox in `lib/contact-recipients.ts`
 * (which is `server-only`). Keep these `value`s in sync with that map.
 */
export type ContactOption = {
    value: string;
    label: string;
};

export const CONTACT_OPTIONS: ContactOption[] = [
    {value: "angel", label: "Angel Alishev — President"},
    {value: "bianna", label: "Bianna Espinal — Vice President"},
    {value: "tashana", label: "Tashana Samuels — VP for Evangelism"},
    {value: "silvia", label: "Silvia Garcia Portilla — Treasurer"},
    {value: "eric", label: "Eric Welch — Secretary"},
    {value: "charlicia", label: "Charlicia Sinclair — Director of Youth"},
    {value: "rachel", label: "Rachel Graham-Tohue — Director for Logistics"},
    {value: "sam", label: "Sam Walters — Projects Committee"},
    {value: "jason", label: "Jason Garcia Portilla — Projects Committee"},
    {value: "general", label: "General enquiry"},
];

/** Look up a recipient's display label by key (for emails/subjects). */
export function getContactLabel(value: string): string | undefined {
    return CONTACT_OPTIONS.find((option) => option.value === value)?.label;
}
