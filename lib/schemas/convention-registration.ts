import { z } from "zod";

// ============ VALIDATION PATTERNS ============

const namePattern = /^[a-zA-Z\s'-]+$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ============ TICKET PRICING ============

export const TICKET_PRICES = {
    member: 20,
    "non-member": 30,
    student: 10,
    youth: 0,
} as const;

export const TICKET_LABELS = {
    member: "ASI Member",
    "non-member": "Non-member",
    student: "Student (16-25)",
    youth: "Youth (Under 16)",
} as const;

export type TicketType = keyof typeof TICKET_PRICES;

// ============ ATTENDEE SCHEMA ============

export const attendeeSchema = z.object({
    ticketType: z.enum(["member", "non-member", "student", "youth"], {
        required_error: "Please select a ticket type",
    }),
    firstName: z
        .string()
        .min(2, "First name must be at least 2 characters")
        .max(50, "First name must not exceed 50 characters")
        .regex(namePattern, "First name can only contain letters, spaces, hyphens and apostrophes"),
    lastName: z
        .string()
        .min(2, "Last name must be at least 2 characters")
        .max(50, "Last name must not exceed 50 characters")
        .regex(namePattern, "Last name can only contain letters, spaces, hyphens and apostrophes"),
    dietaryRequirements: z
        .string()
        .max(500, "Dietary requirements must not exceed 500 characters")
        .optional()
        .or(z.literal("")),
});

export type AttendeeData = z.infer<typeof attendeeSchema>;

// ============ MAIN REGISTRATION SCHEMA ============

export const conventionRegistrationSchema = z.object({
    attendees: z
        .array(attendeeSchema)
        .min(1, "At least one attendee is required")
        .max(10, "Maximum 10 attendees per registration"),
    email: z
        .string()
        .min(5, "Email must be at least 5 characters")
        .max(100, "Email must not exceed 100 characters")
        .regex(emailPattern, "Please enter a valid email address"),
    newsletterOptIn: z.boolean().optional().default(false),
    privacyPolicyAccepted: z.literal(true, {
        errorMap: () => ({ message: "You must accept the privacy policy to continue" }),
    }),
});

export type ConventionRegistrationData = z.infer<typeof conventionRegistrationSchema>;

// ============ HELPER FUNCTIONS ============

/**
 * Calculate the total price for a list of attendees
 */
export function calculateOrderTotal(attendees: AttendeeData[]): number {
    return attendees.reduce((total, attendee) => {
        return total + (TICKET_PRICES[attendee.ticketType] || 0);
    }, 0);
}

/**
 * Format attendees list for display/storage
 */
export function formatAttendeesList(attendees: AttendeeData[]): string {
    return attendees
        .map((a, i) => `${i + 1}. ${a.firstName} ${a.lastName} (${TICKET_LABELS[a.ticketType]})`)
        .join("\n");
}

/**
 * Get ticket breakdown for display
 */
export function getTicketBreakdown(attendees: AttendeeData[]): { type: TicketType; label: string; count: number; subtotal: number }[] {
    const counts = attendees.reduce((acc, attendee) => {
        acc[attendee.ticketType] = (acc[attendee.ticketType] || 0) + 1;
        return acc;
    }, {} as Record<TicketType, number>);

    return (Object.entries(counts) as [TicketType, number][])
        .map(([type, count]) => ({
            type,
            label: TICKET_LABELS[type],
            count,
            subtotal: TICKET_PRICES[type] * count,
        }))
        .filter((item) => item.count > 0);
}

/**
 * Check if registration is free (all children)
 */
export function isFreeRegistration(attendees: AttendeeData[]): boolean {
    return calculateOrderTotal(attendees) === 0;
}

// ============ SERVICE DATA INTERFACE ============

export interface ConventionRegistrationServiceData {
    attendees: AttendeeData[];
    email: string;
    newsletterOptIn: boolean;
    privacyPolicyAccepted: boolean;
    orderTotal: number;
    attendeeCount: number;
    formattedAttendees: string;
    dietaryRequirements: string;
}

/**
 * Convert validated form data to the format expected by services (Notion, email)
 */
export function toServiceData(data: ConventionRegistrationData): ConventionRegistrationServiceData {
    const dietaryReqs = data.attendees
        .filter((a) => a.dietaryRequirements && a.dietaryRequirements.trim())
        .map((a) => `${a.firstName} ${a.lastName}: ${a.dietaryRequirements}`)
        .join("\n");

    return {
        attendees: data.attendees,
        email: data.email,
        newsletterOptIn: data.newsletterOptIn ?? false,
        privacyPolicyAccepted: data.privacyPolicyAccepted,
        orderTotal: calculateOrderTotal(data.attendees),
        attendeeCount: data.attendees.length,
        formattedAttendees: formatAttendeesList(data.attendees),
        dietaryRequirements: dietaryReqs,
    };
}
