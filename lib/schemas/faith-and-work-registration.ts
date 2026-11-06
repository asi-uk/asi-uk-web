import { z } from "zod";

const namePattern = /^[\p{L}\s'.-]+$/u;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ============ "WHAT BEST DESCRIBES YOU" ============

export const ATTENDEE_ROLES = {
    student: "Student",
    entrepreneur: "Entrepreneur / Business owner",
    professional: "Working professional",
    "ministry-leader": "Ministry leader / Pastor",
    "church-member": "Church member",
    other: "Other",
} as const;

export type AttendeeRole = keyof typeof ATTENDEE_ROLES;

const roleKeys = Object.keys(ATTENDEE_ROLES) as [AttendeeRole, ...AttendeeRole[]];

// ============ ATTENDEE ============

export const faithAndWorkAttendeeSchema = z.object({
    firstName: z
        .string()
        .trim()
        .min(1, "First name is required")
        .max(50, "First name must not exceed 50 characters")
        .regex(namePattern, "First name can only contain letters, spaces, hyphens and apostrophes"),
    lastName: z
        .string()
        .trim()
        .min(1, "Last name is required")
        .max(50, "Last name must not exceed 50 characters")
        .regex(namePattern, "Last name can only contain letters, spaces, hyphens and apostrophes"),
    // Optional for additional attendees; the first attendee's schema below makes it required.
    email: z
        .string()
        .trim()
        .max(100, "Email must not exceed 100 characters")
        .regex(emailPattern, "Please enter a valid email address")
        .optional()
        .or(z.literal("")),
    role: z.enum(roleKeys, {
        required_error: "Please choose one",
        invalid_type_error: "Please choose one",
    }),
});

export type FaithAndWorkAttendee = z.infer<typeof faithAndWorkAttendeeSchema>;

// The first attendee's email receives the confirmation for the whole registration.
const leadAttendeeSchema = faithAndWorkAttendeeSchema.extend({
    email: z
        .string()
        .trim()
        .min(1, "Email is required — we'll send your confirmation here")
        .max(100, "Email must not exceed 100 characters")
        .regex(emailPattern, "Please enter a valid email address"),
});

// ============ REGISTRATION ============

export const MAX_FAITH_AND_WORK_ATTENDEES = 10;

export const faithAndWorkRegistrationSchema = z.object({
    // A tuple keeps per-field errors for each attendee independent (an
    // object-level refine would only run once every other field is valid).
    attendees: z
        .tuple([leadAttendeeSchema])
        .rest(faithAndWorkAttendeeSchema)
        .refine((a) => a.length <= MAX_FAITH_AND_WORK_ATTENDEES, {
            message: `Maximum ${MAX_FAITH_AND_WORK_ATTENDEES} attendees per registration`,
        }),
    newsletterOptIn: z.boolean().optional().default(false),
    privacyPolicyAccepted: z.literal(true, {
        errorMap: () => ({ message: "You must accept the privacy policy to continue" }),
    }),
});

export type FaithAndWorkRegistrationData = z.infer<typeof faithAndWorkRegistrationSchema>;

// ============ HELPERS ============

export function getContactEmail(data: FaithAndWorkRegistrationData): string {
    return data.attendees[0].email;
}

export function formatFaithAndWorkAttendees(attendees: FaithAndWorkAttendee[]): string {
    return attendees
        .map((a, i) => `${i + 1}. ${a.firstName} ${a.lastName} (${ATTENDEE_ROLES[a.role]})`)
        .join("\n");
}
