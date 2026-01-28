import { z } from "zod";

// ============ VALIDATION PATTERNS ============

const phonePattern = /^(?:\+?\d{1,4}[\s-]?)?\(?(?:\d{1,}\)?[\s-]?){6,}$/;
const namePattern = /^[a-zA-Z\s'-]+$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ============ BASE SCHEMA (permissive - validation happens in superRefine) ============

export const membershipFormSchema = z
  .object({
    // Membership selection
    membershipCategory: z.enum(["Ordinary", "Sponsoring"]).optional().nullable(),
    membershipType: z.enum(["Individual", "Organisation"]).optional().nullable(),

    // Personal info
    title: z.enum(["Mr", "Mrs", "Miss", "Dr"]).optional().nullable(),
    firstName: z.string().optional().or(z.literal("")),
    surname: z.string().optional().or(z.literal("")),
    email: z.string().optional().or(z.literal("")),
    phoneNumber: z.string().optional().or(z.literal("")),
    website: z.string().optional().or(z.literal("")),

    // Eligibility
    isProfessionalOrBusinessOwner: z.enum(["Yes", "No"]).optional().nullable(),

    // Church info
    isChurchMember: z.enum(["Yes", "No"]).optional().nullable(),
    isChurchEmployed: z.enum(["Yes", "No"]).optional().nullable(),
    localChurchName: z.string().optional().or(z.literal("")),
    localChurchPastorName: z.string().optional().or(z.literal("")),
    localChurchPastorPhone: z.string().optional().or(z.literal("")),

    // Organisation fields
    orgType: z.enum(["ForProfit", "NonProfit"]).optional().nullable(),
    orgName: z.string().optional().or(z.literal("")),
    orgLegalName: z.string().optional().or(z.literal("")),
    orgApplicantRole: z.string().optional().or(z.literal("")),
    orgDescription: z.string().optional().or(z.literal("")),
    orgAddress: z.string().optional().or(z.literal("")),
    orgPostalAddress: z.string().optional().or(z.literal("")),
    orgPhone: z.string().optional().or(z.literal("")),
    orgEmail: z.string().optional().or(z.literal("")),
    orgEmployees: z.string().optional().or(z.literal("")),
    orgYearsInOperation: z.string().optional().or(z.literal("")),
    orgWebsite: z.string().optional().or(z.literal("")),
    orgIsReligiousMission: z.enum(["Yes", "No"]).optional().nullable(),
    orgIsChurchControlled: z.enum(["Yes", "No"]).optional().nullable(),
    orgK0505IsAgreed: z.enum(["Yes", "No"]).optional().nullable(),

    // Consent
    privacyPolicyAccepted: z.boolean().optional(),
    marketingConsent: z.boolean().optional(),
    comments: z.string().optional().or(z.literal("")),
  })
  .superRefine((data, ctx) => {
    // ============ HELPER FUNCTIONS ============

    const addError = (field: string, message: string) => {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message,
        path: [field],
      });
    };

    const isEmpty = (value: unknown): boolean => {
      return value === undefined || value === null || value === "";
    };

    const validateRequired = (field: string, value: unknown, message: string) => {
      if (isEmpty(value)) {
        addError(field, message);
        return false;
      }
      return true;
    };

    const validateMinLength = (field: string, value: string | undefined | null, min: number, message: string) => {
      if (value && value.length < min) {
        addError(field, message);
        return false;
      }
      return true;
    };

    const validateMaxLength = (field: string, value: string | undefined | null, max: number, message: string) => {
      if (value && value.length > max) {
        addError(field, message);
        return false;
      }
      return true;
    };

    const validatePattern = (field: string, value: string | undefined | null, pattern: RegExp, message: string) => {
      if (value && !pattern.test(value)) {
        addError(field, message);
        return false;
      }
      return true;
    };

    const validateName = (field: string, value: string | undefined | null, label: string, required: boolean = true) => {
      if (required && isEmpty(value)) {
        addError(field, `${label} is required`);
        return;
      }
      if (!isEmpty(value)) {
        validateMinLength(field, value, 2, `${label} must be at least 2 characters`);
        validateMaxLength(field, value, 50, `${label} must not exceed 50 characters`);
        validatePattern(field, value, namePattern, `${label} can only contain letters, spaces, hyphens and apostrophes`);
      }
    };

    const validateEmail = (field: string, value: string | undefined | null, label: string = "Email", required: boolean = true) => {
      if (required && isEmpty(value)) {
        addError(field, `${label} is required`);
        return;
      }
      if (!isEmpty(value)) {
        validateMinLength(field, value, 5, `${label} must be at least 5 characters`);
        validateMaxLength(field, value, 100, `${label} must not exceed 100 characters`);
        validatePattern(field, value, emailPattern, "Please enter a valid email address");
      }
    };

    const validatePhone = (field: string, value: string | undefined | null, label: string = "Phone number", required: boolean = true) => {
      if (required && isEmpty(value)) {
        addError(field, `${label} is required`);
        return;
      }
      if (!isEmpty(value)) {
        validateMinLength(field, value, 10, `${label} must be at least 10 digits`);
        validateMaxLength(field, value, 17, `${label} must not exceed 15 digits`);
        validatePattern(field, value, phonePattern, "Please enter a valid phone number");
      }
    };

    const validateUrl = (field: string, value: string | undefined | null, required: boolean = false) => {
      if (required && isEmpty(value)) {
        addError(field, "URL is required");
        return;
      }
      if (!isEmpty(value)) {
        try {
          new URL(value as string);
        } catch {
          addError(field, "Please enter a valid URL");
        }
      }
    };

    // ============ ALWAYS REQUIRED FIELDS ============

    // Membership category
    validateRequired("membershipCategory", data.membershipCategory, "Please select a membership category");

    // Personal info
    validateRequired("title", data.title, "Please select a title");
    validateName("firstName", data.firstName, "First name");
    validateName("surname", data.surname, "Surname");
    validateEmail("email", data.email);
    validatePhone("phoneNumber", data.phoneNumber);
    validateUrl("website", data.website, false);

    // Church membership
    validateRequired("isChurchMember", data.isChurchMember, "Please select an option for church membership");

    // Church employment - only required for Ordinary members
    if (data.membershipCategory === "Ordinary") {
      validateRequired("isChurchEmployed", data.isChurchEmployed, "Please specify if you are employed by the church");
    }

    // Church details (always required)
    if (validateRequired("localChurchName", data.localChurchName, "Local church name is required")) {
      validateMinLength("localChurchName", data.localChurchName, 2, "Church name must be at least 2 characters");
      validateMaxLength("localChurchName", data.localChurchName, 100, "Church name must not exceed 100 characters");
    }
    validateName("localChurchPastorName", data.localChurchPastorName, "Pastor's name");
    validatePhone("localChurchPastorPhone", data.localChurchPastorPhone, "Pastor's phone");

    // Privacy policy
    if (data.privacyPolicyAccepted !== true) {
      addError("privacyPolicyAccepted", "You must accept the privacy policy to continue");
    }

    // ============ CONDITIONAL FIELDS ============

    const { membershipCategory, membershipType, orgType, orgIsReligiousMission } = data;

    // Membership type required for Ordinary
    if (membershipCategory === "Ordinary") {
      if (!membershipType) {
        addError("membershipType", "Please select a membership type");
      }
    }

    // Occupation validation for Ordinary Individual members
    if (membershipCategory === "Ordinary" && membershipType === "Individual") {
      validateRequired("isProfessionalOrBusinessOwner", data.isProfessionalOrBusinessOwner,
        "Please select an option for occupation eligibility");
    }

    // Organisation fields required for Ordinary + Organisation
    if (membershipCategory === "Ordinary" && membershipType === "Organisation") {
      validateRequired("orgType", orgType, "Organisation type is required");

      if (validateRequired("orgName", data.orgName, "Organisation name is required")) {
        validateMinLength("orgName", data.orgName, 2, "Organisation name must be at least 2 characters");
        validateMaxLength("orgName", data.orgName, 100, "Organisation name must not exceed 100 characters");
      }

      validateMaxLength("orgLegalName", data.orgLegalName, 150, "Legal name must not exceed 150 characters");

      if (validateRequired("orgApplicantRole", data.orgApplicantRole, "Your role in the organisation is required")) {
        validateMinLength("orgApplicantRole", data.orgApplicantRole, 2, "Role must be at least 2 characters");
        validateMaxLength("orgApplicantRole", data.orgApplicantRole, 50, "Role must not exceed 50 characters");
      }

      if (validateRequired("orgDescription", data.orgDescription, "Organisation description is required")) {
        validateMinLength("orgDescription", data.orgDescription, 10, "Description must be at least 10 characters");
        validateMaxLength("orgDescription", data.orgDescription, 500, "Description must not exceed 500 characters");
      }

      if (validateRequired("orgAddress", data.orgAddress, "Organisation address is required")) {
        validateMinLength("orgAddress", data.orgAddress, 5, "Address must be at least 5 characters");
        validateMaxLength("orgAddress", data.orgAddress, 200, "Address must not exceed 200 characters");
      }

      // Optional org postal address
      if (!isEmpty(data.orgPostalAddress)) {
        validateMinLength("orgPostalAddress", data.orgPostalAddress, 5, "Postal address must be at least 5 characters");
        validateMaxLength("orgPostalAddress", data.orgPostalAddress, 200, "Postal address must not exceed 200 characters");
      }

      validatePhone("orgPhone", data.orgPhone, "Organisation phone", false);
      validateEmail("orgEmail", data.orgEmail, "Organisation email", true);

      if (validateRequired("orgEmployees", data.orgEmployees, "Number of employees is required")) {
        validatePattern("orgEmployees", data.orgEmployees, /^\d+$/, "Please enter a valid number");
      }

      if (validateRequired("orgYearsInOperation", data.orgYearsInOperation, "Years in operation is required")) {
        validatePattern("orgYearsInOperation", data.orgYearsInOperation, /^\d+$/, "Please enter a valid number");
      }

      validateUrl("orgWebsite", data.orgWebsite, false);

      // NonProfit requires religious mission answer
      if (orgType === "NonProfit") {
        validateRequired("orgIsReligiousMission", orgIsReligiousMission, "Please specify if your organisation's mission is religious");

        // Religious mission requires church control + K0505 answers
        if (orgIsReligiousMission === "Yes") {
          validateRequired("orgIsChurchControlled", data.orgIsChurchControlled, "Please specify church involvement");
          validateRequired("orgK0505IsAgreed", data.orgK0505IsAgreed, "Please specify K 05 05 compliance");
        }
      }
    }

    // Comments validation (optional but has max length)
    validateMaxLength("comments", data.comments, 1000, "Comments must not exceed 1000 characters");
  });

// Export inferred type
export type MembershipFormData = z.infer<typeof membershipFormSchema>;

// ============ SERVER PREPROCESSING ============

/**
 * Parse FormData into validated MembershipFormData for server actions.
 * Handles string-to-boolean conversions and empty string normalization.
 */
export function parseFormData(formData: FormData): MembershipFormData {
  const raw: Record<string, unknown> = {};

  for (const [key, value] of formData.entries()) {
    if (key === "privacyPolicyAccepted") {
      raw[key] = value === "true";
    } else if (key === "marketingConsent") {
      raw[key] = value === "true";
    } else if (value === "") {
      // Keep empty strings for optional fields (schema handles them)
      raw[key] = value;
    } else {
      raw[key] = value;
    }
  }

  return membershipFormSchema.parse(raw);
}

// ============ TYPE ALIASES FOR EXTERNAL USE ============

// Type for Notion/email services that need a slightly different interface
// (allows undefined for optional fields instead of requiring them)
export interface MembershipFormDataForServices {
  // Membership info
  membershipCategory: "Ordinary" | "Sponsoring";
  membershipType?: "Individual" | "Organisation" | null;

  // Personal info
  title: "Mr" | "Mrs" | "Miss" | "Dr";
  firstName: string;
  surname: string;
  email: string;
  phoneNumber: string;

  // Eligibility
  isProfessionalOrBusinessOwner?: "Yes" | "No" | null;

  // Church info
  isChurchMember: "Yes" | "No";
  isChurchEmployed?: "Yes" | "No" | null;
  localChurchName?: string;
  localChurchPastorName?: string;
  localChurchPastorPhone?: string;

  // Organisation info (when applicable)
  orgType?: "ForProfit" | "NonProfit" | null;
  orgName?: string;
  orgLegalName?: string;
  orgApplicantRole?: string;
  orgDescription?: string;
  orgAddress?: string;
  orgPostalAddress?: string;
  orgPhone?: string;
  orgEmail?: string;
  orgEmployees?: string;
  orgYearsInOperation?: string;
  orgWebsite?: string;
  orgIsReligiousMission?: "Yes" | "No" | null;
  orgIsChurchControlled?: "Yes" | "No" | null;
  orgK0505IsAgreed?: "Yes" | "No" | null;

  // Consent
  privacyPolicyAccepted: boolean;
  marketingConsent: boolean;

  // Additional information
  comments?: string;
}

/**
 * Convert validated form data to the format expected by services (Notion, email).
 * Normalizes empty strings to undefined for cleaner data storage.
 */
export function toServiceData(data: MembershipFormData): MembershipFormDataForServices {
  return {
    membershipCategory: data.membershipCategory as "Ordinary" | "Sponsoring",
    membershipType: data.membershipType || null,
    title: data.title as "Mr" | "Mrs" | "Miss" | "Dr",
    firstName: data.firstName || "",
    surname: data.surname || "",
    email: data.email || "",
    phoneNumber: data.phoneNumber || "",
    isProfessionalOrBusinessOwner: data.isProfessionalOrBusinessOwner || null,
    isChurchMember: data.isChurchMember as "Yes" | "No",
    isChurchEmployed: data.isChurchEmployed || null,
    localChurchName: data.localChurchName || undefined,
    localChurchPastorName: data.localChurchPastorName || undefined,
    localChurchPastorPhone: data.localChurchPastorPhone || undefined,
    orgType: data.orgType || null,
    orgName: data.orgName || undefined,
    orgLegalName: data.orgLegalName || undefined,
    orgApplicantRole: data.orgApplicantRole || undefined,
    orgDescription: data.orgDescription || undefined,
    orgAddress: data.orgAddress || undefined,
    orgPostalAddress: data.orgPostalAddress || undefined,
    orgPhone: data.orgPhone || undefined,
    orgEmail: data.orgEmail || undefined,
    orgEmployees: data.orgEmployees || undefined,
    orgYearsInOperation: data.orgYearsInOperation || undefined,
    orgWebsite: data.orgWebsite || undefined,
    orgIsReligiousMission: data.orgIsReligiousMission || null,
    orgIsChurchControlled: data.orgIsChurchControlled || null,
    orgK0505IsAgreed: data.orgK0505IsAgreed || null,
    privacyPolicyAccepted: data.privacyPolicyAccepted || false,
    marketingConsent: data.marketingConsent || false,
    comments: data.comments || undefined,
  };
}
