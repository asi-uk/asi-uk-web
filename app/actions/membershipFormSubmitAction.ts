"use server";

import { z } from "zod";
import { googleAuth } from "@/app/actions/googleAuth";
import { google } from "googleapis";

// Define a more flexible Zod schema for form submission with better error messages
const formSubmissionSchema = z.object({
    // Required fields for all submissions
    applicantDescription: z.enum(["Individual", "Entity"], {
        required_error: "Applicant type is required"
    }),
    membershipType: z.enum(["Ordinary-Individual", "Ordinary-Organisation", "Supporting"], {
        required_error: "Membership type is required"
    }),

    // Personal information - always required
    title: z.enum(["Mr", "Mrs", "Miss", "Dr"], {
        required_error: "Title is required"
    }),
    firstName: z.string({
        required_error: "First name is required"
    }).min(2, "First name must be at least 2 characters"),
    surname: z.string({
        required_error: "Surname is required"
    }).min(2, "Surname must be at least 2 characters"),
    dateOfBirth: z.union([
        z.date(),
        z.string().refine((val) => !isNaN(Date.parse(val)), {
            message: "Invalid date format"
        }).transform(val => new Date(val))
    ], {
        required_error: "Date of birth is required"
    }),
    email: z.string({
        required_error: "Email is required"
    }).email("Please enter a valid email address"),

    // All other fields are optional in the schema
    orgType: z.union([
        z.enum(["Business", "Organisation"]),
        z.literal(""),
        z.null(),
        z.undefined()
    ]).optional(),
    orgName: z.string().optional(),
    orgLegalName: z.string().optional(),
    orgApplicantRole: z.string().optional(),
    orgDescription: z.string().optional(),
    orgAddress: z.string().optional(),
    orgPostalAddress: z.string().optional(),
    orgPhone: z.string().optional(),
    orgEmail: z.union([
        z.string().email("Please enter a valid email address"),
        z.literal(""),
        z.null(),
        z.undefined()
    ]).optional(),
    orgEmployees: z.string().optional(),
    orgYearsInOperation: z.string().optional(),
    orgWebsite: z.union([
        z.string().url("Please enter a valid URL"),
        z.literal(""),
        z.null(),
        z.undefined()
    ]).optional(),
    orgSocialMedia: z.string().optional(),
    orgK0505IsAgreed: z.union([
        z.enum(["Yes", "No"]),
        z.null(),
        z.undefined()
    ]),
    orgIsFundedByChurch: z.union([
        z.enum(["Yes", "No"]),
        z.null(),
        z.undefined()
    ]),
    address: z.string().optional(),
    phoneNumber: z.string().optional(),
    website: z.union([
        z.string().url("Please enter a valid URL"),
        z.literal(""),
        z.null(),
        z.undefined()
    ]).optional(),
    socialMedia: z.string().optional(),

    isChurchMember: z.enum(["Yes", "No"], {
        required_error: "Church membership status is required"
    }),
    isChurchEmployed: z.enum(["Yes", "No"]).optional(),
    localChurchName: z.string().optional(),
    localChurchPastorName: z.string().optional(),
    localChurchPastorPhone: z.string().optional(),
}).passthrough(); // Add passthrough to allow extra fields

export type FormSubmissionType = z.infer<typeof formSubmissionSchema>;

export async function membershipFormSubmitAction(formData: FormData): Promise<{
    success: boolean;
    errors: string[] | null;
    sheetInfo?: {
        updatedRange?: string;
        updatedRows?: number;
        spreadsheetId?: string;
    }
}> {
    // Log the data received to help with debugging
    const receivedData = Object.fromEntries(formData.entries());
    console.log("Received form data:", receivedData);

    const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;

    if (!spreadsheetId) {
        return {
            success: false,
            errors: ["There was an error connecting to Google Sheets."],
        };
    }

    try {
        // Process data to handle the dateOfBirth field
        const processedData = {
            ...receivedData,
            // Convert dateOfBirth string to Date if it exists
            dateOfBirth: receivedData.dateOfBirth ? new Date(receivedData.dateOfBirth as string) : undefined
        };

        // Validate the processed data
        const validatedData = formSubmissionSchema.parse(processedData);

        console.log("Validated data:", validatedData);

        // Format the data for Google Sheets
        const rowData = formatDataForGoogleSheets(validatedData);

        // Connect to Google Sheets API
        const sheets = await google.sheets({
            auth: await googleAuth(),
            version: "v4",
        });

        const appendResponse = await sheets.spreadsheets.values.append({
            spreadsheetId,
            range: "Sheet1!A:A", // Only specify the first column as the target
            valueInputOption: "USER_ENTERED",
            insertDataOption: "INSERT_ROWS", // This ensures data goes into new rows
            requestBody: {
                values: [rowData],
            },
        });

// Log and return information about the successful operation
        console.log("Google Sheets response:", appendResponse.data);

// Return success with additional information
        return {
            success: true,
            errors: null,
            sheetInfo: {
                updatedRange: appendResponse.data.updates?.updatedRange,
                updatedRows: appendResponse.data.updates?.updatedRows,
                spreadsheetId: appendResponse.data.spreadsheetId
            }
        };

    } catch (error: unknown) {
        if (error instanceof z.ZodError) {
            // Provide detailed validation errors
            const errorMessages = error.errors.map((issue) =>
                `${issue.path.join(".")} - ${issue.message}`
            );
            console.error("Validation errors:", errorMessages);

            return {
                success: false,
                errors: errorMessages,
            };
        } else {
            console.error("Form submission error:", error);
            return {
                success: false,
                errors: [`An error occurred: ${error instanceof Error ? error.message : String(error)}`],
            };
        }
    }
}

// Helper function to format data for Google Sheets
function formatDataForGoogleSheets(data: FormSubmissionType): string[] {
    // Convert the date to string format
    const dateOfBirth = data.dateOfBirth ? data.dateOfBirth.toISOString().split('T')[0] : '';

    // Create an array with the values in the order matching your Google Sheet columns
    return [
        new Date().toISOString(), // Submission timestamp
        data.applicantDescription,
        data.membershipType,
        data.orgType || '',
        data.title,
        data.firstName,
        data.surname,
        dateOfBirth,
        data.email,
        data.phoneNumber || '',
        data.address || '',
        data.socialMedia || '',
        data.website || '',
        data.isChurchMember,
        data.isChurchEmployed || '',
        data.localChurchName || '',
        data.localChurchPastorName || '',
        data.localChurchPastorPhone || '',
        data.orgName || '',
        data.orgLegalName || '',
        data.orgApplicantRole || '',
        data.orgDescription || '',
        data.orgAddress || '',
        data.orgPostalAddress || '',
        data.orgPhone || '',
        data.orgEmail || '',
        data.orgEmployees || '',
        data.orgYearsInOperation || '',
        data.orgWebsite || '',
        data.orgSocialMedia || '',
        data.orgK0505IsAgreed || '',
        data.orgIsFundedByChurch || '',
    ];
}