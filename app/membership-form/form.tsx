"use client"

import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import Link from 'next/link';
import {z} from "zod"
import { membershipFormSubmitAction } from "@/app/actions/membershipFormSubmitAction";
import { useState } from "react";
import { toast, useToast } from "@/components/hooks/use-toast";

import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import RadioCards from "@/components/ui/radio-cards"
import {Label} from "@/components/ui/label"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import {AlertCircle, BriefcaseBusiness, Building, Building2, ChartCandlestick, Check, HandHeart, HeartHandshake, User, X} from "lucide-react";

const formSchema = z.object({

    membershipCategory: z.enum(["Ordinary", "Sponsoring"]),

    membershipType: z.enum(["Individual", "Organisation"]),

    orgType: z.enum(["ForProfit", "NonProfit"]),

    title: z.enum(["Mr", "Mrs", "Miss", "Dr"], {
        required_error: "Please select a title",
    }).nullable().refine((value) => value !== null, {
        message: "Please select a title"
    }),

    firstName: z
        .string()
        .min(2, "First name must be at least 2 characters")
        .max(50, "First name must not exceed 50 characters")
        .regex(/^[a-zA-Z\s'-]+$/, "First name can only contain letters, spaces, hyphens and apostrophes"),

    surname: z
        .string()
        .min(2, "Surname must be at least 2 characters")
        .max(50, "Surname must not exceed 50 characters")
        .regex(/^[a-zA-Z\s'-]+$/, "Surname can only contain letters, spaces, hyphens and apostrophes"),

    orgName: z
        .string({required_error: "Please enter the name of your organisation",}),

    orgLegalName: z
        .string().optional(),

    orgApplicantRole: z
        .string({required_error: "Please specify your role",}),

    orgDescription: z.string({required_error: "Please enter a description",}),

    orgAddress: z
        .string()
        .optional()
        .refine(
            (val) => !val || val.length >= 5,
            "Address must be at least 5 characters"
        )
        .refine(
            (val) => !val || val.length <= 200,
            "Address must not exceed 200 characters"
        ),

    orgPostalAddress: z
        .string()
        .optional()
        .refine(
            (val) => !val || val.length >= 5,
            "Address must be at least 5 characters"
        )
        .refine(
            (val) => !val || val.length <= 200,
            "Address must not exceed 200 characters"
        ),

    orgPhone: z
        .string()
        .optional()
        .refine(
            (val) => !val || /^(?:\+?\d{1,4}[\s-]?)?\(?(?:\d{1,}\)?[\s-]?){6,}$/.test(val),
            "Please enter a valid phone number"
        )
        .refine(
            (val) => !val || val.length >= 10,
            "Phone number must be at least 10 digits"
        )
        .refine(
            (val) => !val || val.length <= 17,
            "Phone number must not exceed 15 digits"
        ),

    orgEmail: z
        .string({required_error: "Please enter an email"})
        .email("Please enter a valid email address")
        .min(5, "Email must be at least 5 characters")
        .max(100, "Email must not exceed 100 characters"),

    orgEmployees: z.string({required_error: "Please specify the size of your organisation"}),

    orgYearsInOperation: z.string({required_error: "Please enter the number of years in operation"}),

    orgWebsite: z.string().url().optional(),

    orgK0505IsAgreed: z.enum(["Yes", "No"], {
        required_error: "Please select an option",
    }),

    orgIsReligiousMission: z.enum(["Yes", "No"], {
        required_error: "Please select an option",
    }),

    orgIsChurchControlled: z.enum(["Yes", "No"], {
        required_error: "Please select an option",
    }),

    phoneNumber: z
        .string({required_error: "Please enter a phone number"})
        .min(10, "Phone number must be at least 10 digits")
        .max(17, "Phone number must not exceed 15 digits")
        .regex(/^(?:\+?\d{1,4}[\s-]?)?\(?(?:\d{1,}\)?[\s-]?){6,}$/, "Please enter a valid phone number"),

    email: z
        .string({required_error: "Please provide a contact email"})
        .email("Please enter a valid email address")
        .min(5, "Email must be at least 5 characters")
        .max(100, "Email must not exceed 100 characters"),

    website: z.string().url().optional(),

    isChurchMember: z.enum(["Yes", "No"], {
        required_error: "Please select an option",
    }),

    isChurchEmployed: z.enum(["Yes", "No"], {
        required_error: "Please select an option",
    }),

    localChurchName: z.string({required_error: "Please specify where your membership is held"}),

    localChurchPastorName: z.string({required_error: "Please specify the name of your pastor"}),
    localChurchPastorPhone: z
        .string()
        .optional()
        .refine(
            (val) => !val || /^(?:\+?\d{1,4}[\s-]?)?\(?(?:\d{1,}\)?[\s-]?){6,}$/.test(val),
            "Please enter a valid phone number"
        )
        .refine(
            (val) => !val || val.length >= 10,
            "Phone number must be at least 10 digits"
        )
        .refine(
            (val) => !val || val.length <= 17,
            "Phone number must not exceed 15 digits"
        ),

});

export function MembershipForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            membershipCategory: undefined,
            membershipType: undefined,
            orgType: undefined,
            title: undefined,
            firstName: "",
            surname: "",
            orgName: "",
            orgLegalName: "",
            orgApplicantRole: "",
            orgDescription: "",
            orgAddress: "",
            orgPostalAddress: "",
            orgPhone: "",
            orgEmail: "",
            orgEmployees: "",
            orgYearsInOperation: "",
            orgWebsite: "",
            orgK0505IsAgreed: undefined,
            orgIsReligiousMission: undefined,
            orgIsChurchControlled: undefined,
            phoneNumber: "",
            email: "",
            website: "",
            isChurchMember: undefined,
            isChurchEmployed: undefined,
            localChurchName: "",
            localChurchPastorName: "",
            localChurchPastorPhone: "",
        }
    })

    function getConditionalSchema() {
        const membershipCategory = form.watch("membershipCategory");
        const membershipType = form.watch("membershipType");
        const isChurchMember = form.watch("isChurchMember");
        const isChurchEmployed = form.watch("isChurchEmployed");
        const orgType = form.watch("orgType");
        const orgIsReligiousMission = form.watch("orgIsReligiousMission");
        const orgIsChurchControlled = form.watch("orgIsChurchControlled");

        // Start with the base schema
        const baseSchema = z.object({
            // Base fields that are always required
            membershipCategory: z.enum(["Ordinary", "Sponsoring"]),
            membershipType: z.union([
                z.enum(["Individual", "Organisation"]),
                z.null(),
                z.undefined()
            ]),
            title: z.enum(["Mr", "Mrs", "Miss", "Dr"], {
                required_error: "Please select a title",
            }),
            firstName: z
                .string()
                .min(2, "First name must be at least 2 characters"),
            surname: z
                .string()
                .min(2, "Surname must be at least 2 characters"),
            email: z
                .string({required_error: "Please provide a contact email"})
                .email("Please enter a valid email address"),
            isChurchMember: z.enum(["Yes", "No"], {
                required_error: "Please select an option",
            }),

            // Fields that may be optional based on conditions
            orgType: z.union([
                z.enum(["ForProfit", "NonProfit"]),
                z.null(),
                z.undefined()
            ]),
            orgName: z.string().optional(),
            orgLegalName: z.string().optional(),
            orgApplicantRole: z.string().optional(),
            orgDescription: z.string().optional(),
            orgAddress: z.string().optional(),
            orgPostalAddress: z.string().optional(),
            orgPhone: z.string().optional(),
            orgEmail: z.union([
                z.string().email("Please enter a valid email address"),  // Valid email
                z.string().length(0),  // Empty string
                z.null(),  // Null
                z.undefined()  // Undefined
            ]).optional(),
            orgEmployees: z.string().optional(),
            orgYearsInOperation: z.string().optional(),
            orgK0505IsAgreed: z.union([
                z.enum(["Yes", "No"]),
                z.null(),
                z.undefined()
            ]),
            orgIsReligiousMission: z.union([
                z.enum(["Yes", "No"]),
                z.null(),
                z.undefined()
            ]),
            orgIsChurchControlled: z.union([
                z.enum(["Yes", "No"]),
                z.null(),
                z.undefined()
            ]),
            isChurchEmployed: z.enum(["Yes", "No"]).optional(),
            localChurchName: z.string().optional(),
            localChurchPastorName: z.string().optional(),
            localChurchPastorPhone: z.string().optional(),
            // Add all other fields as optional by default
            phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
            orgWebsite: z.union([
                z.string().url(),  // Valid URL
                z.string().length(0),  // Empty string
                z.null(),  // Null
                z.undefined()  // Undefined
            ]).optional(),
            website: z.union([
                z.string().url(),  // Valid URL
                z.string().length(0),  // Empty string
                z.null(),  // Null
                z.undefined()  // Undefined
            ]).optional(),
        });

        // Define all our refinements in an array
        const refinements: Array<{
            check: (data: any) => boolean,
            message: string,
            path: string[]
        }> = [];

        // Membership type required for Ordinary membership
        if (membershipCategory === "Ordinary") {
            refinements.push({
                check: (data) => data.membershipType !== undefined && data.membershipType !== null,
                message: "Please select a membership type",
                path: ["membershipType"]
            });
        }

        // Add refinements based on conditions
        if (membershipCategory === "Ordinary" && membershipType === "Organisation") {
            // Organization fields become required
            refinements.push({
                check: (data) => data.orgType !== undefined,
                message: "Organisation type is required",
                path: ["orgType"]
            });

            refinements.push({
                check: (data) => data.orgName !== undefined && data.orgName !== "",
                message: "Organisation name is required",
                path: ["orgName"]
            });

            refinements.push({
                check: (data) => data.orgDescription !== undefined && data.orgDescription !== "",
                message: "Organisation description is required",
                path: ["orgDescription"]
            });

            refinements.push({
                check: (data) => data.orgEmail !== undefined && data.orgEmail !== "",
                message: "Organisation email is required",
                path: ["orgEmail"]
            });

            refinements.push({
                check: (data) => data.orgEmployees !== undefined && data.orgEmployees !== "",
                message: "Number of employees is required",
                path: ["orgEmployees"]
            });

            refinements.push({
                check: (data) => data.orgYearsInOperation !== undefined && data.orgYearsInOperation !== "",
                message: "Years in operation is required",
                path: ["orgYearsInOperation"]
            });

            refinements.push({
                check: (data) => data.orgApplicantRole !== undefined && data.orgApplicantRole !== "",
                message: "Your role in the organisation is required",
                path: ["orgApplicantRole"]
            });

            // If it's a non-profit organization
            if (orgType === "NonProfit") {
                refinements.push({
                    check: (data) => data.orgIsReligiousMission !== undefined,
                    message: "Please specify if your organisation's mission is religious",
                    path: ["orgIsReligiousMission"]
                });

                // Only require church affiliation fields if religious mission
                if (orgIsReligiousMission === "Yes") {
                    refinements.push({
                        check: (data) => data.orgIsChurchControlled !== undefined,
                        message: "Please specify church involvement",
                        path: ["orgIsChurchControlled"]
                    });

                    // Only require K 05 05 if not church controlled
                    if (orgIsChurchControlled === "No") {
                        refinements.push({
                            check: (data) => data.orgK0505IsAgreed !== undefined,
                            message: "Please specify K 05 05 compliance",
                            path: ["orgK0505IsAgreed"]
                        });
                    }
                }
            }
        }

        // Church membership related fields
        if (isChurchMember === "Yes") {
            // Church employment question only required for Ordinary membership
            if (membershipCategory === "Ordinary") {
                refinements.push({
                    check: (data) => data.isChurchEmployed !== undefined,
                    message: "Please specify if you are employed by the church",
                    path: ["isChurchEmployed"]
                });
            }

            // Local church details required when eligible to proceed
            // For Ordinary: isChurchMember === "Yes" && isChurchEmployed === "No"
            // For Sponsoring: isChurchMember === "Yes"
            const shouldRequireLocalChurchDetails =
                membershipCategory === "Sponsoring" ||
                (membershipCategory === "Ordinary" && isChurchEmployed === "No");

            if (shouldRequireLocalChurchDetails) {
                refinements.push({
                    check: (data) => data.localChurchName !== undefined && data.localChurchName !== "",
                    message: "Local church name is required",
                    path: ["localChurchName"]
                });

                refinements.push({
                    check: (data) => data.localChurchPastorName !== undefined && data.localChurchPastorName !== "",
                    message: "Pastor's name is required",
                    path: ["localChurchPastorName"]
                });

                refinements.push({
                    check: (data) => data.localChurchPastorPhone !== undefined && data.localChurchPastorPhone !== "",
                    message: "Pastor's phone is required",
                    path: ["localChurchPastorPhone"]
                });
            }
        }

        // Apply all refinements to the schema
        // We use TypeScript's type 'as' to help with the typing issues
        let finalSchema = baseSchema;

        // Apply each refinement one by one
        for (const { check, message, path } of refinements) {
            finalSchema = finalSchema.refine(check, { message, path }) as any;
        }

        return finalSchema;
    }

    // Watch form values for conditional rendering
    const membershipCategory = form.watch("membershipCategory");
    const membershipType = form.watch("membershipType");
    const orgType = form.watch("orgType");
    const orgIsReligiousMission = form.watch("orgIsReligiousMission");
    const orgIsChurchControlled = form.watch("orgIsChurchControlled");
    const orgK0505IsAgreed = form.watch("orgK0505IsAgreed");
    const isChurchMember = form.watch("isChurchMember");
    const isChurchEmployed = form.watch("isChurchEmployed");

    // Compute disqualification flags
    const disqualifications = {
        churchControlled: orgIsChurchControlled === "Yes",
        k0505NonCompliant: orgIsChurchControlled === "No" && orgK0505IsAgreed === "No",
        notChurchMember: isChurchMember === "No",
        churchEmployedIndividual:
            membershipCategory === "Ordinary" &&
            membershipType === "Individual" &&
            isChurchEmployed === "Yes",
    };

    const isDisqualified = Object.values(disqualifications).some(Boolean);

    // Disqualification alert component
    const DisqualificationAlert = ({ message, action }: {
        message: string;
        action?: { label: string; onClick: () => void }
    }) => (
        <div className="flex flex-col gap-3 rounded-lg border border-destructive bg-destructive/10 p-4 mt-5">
            <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                <p className="text-sm text-destructive font-medium">{message}</p>
            </div>
            {action && (
                <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={action.onClick}
                    className="self-start border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
                >
                    {action.label}
                </Button>
            )}
        </div>
    );

    // 2. Define a submit handler.
    const [submitting, setSubmitting] = useState(false);

    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log("Form submitted with values:", values);

        if (isDisqualified) {
            toast({
                title: "Cannot submit",
                description: "Please resolve the eligibility issues before submitting.",
                variant: "destructive",
            });
            return;
        }

        setSubmitting(true);

        try {
            // Get the conditional schema based on current form state
            const conditionalSchema = getConditionalSchema();

            try {
                // Validate values against the conditional schema
                const validatedData = conditionalSchema.parse(values);

                // Log the validated data to see what's being submitted
                console.log("Validated form data:", validatedData);

                // Create FormData for submission
                const formData = new FormData();
                Object.entries(validatedData).forEach(([key, value]) => {
                    if (value !== undefined && value !== null) {
                        formData.append(key, String(value));
                    }
                });

                // Submit the form
                console.log("Calling server action with FormData");
                const result = await membershipFormSubmitAction(formData);
                console.log("Server action result:", result);

                if (result.success) {
                    console.log("Success");
                    toast({
                        title: "Success!",
                        description: "Your membership application has been submitted.",
                    });
                    form.reset();
                } else {
                    console.log("Error");
                    toast({
                        title: "Error",
                        description: result.errors?.[0] || "There was an error submitting your application.",
                        variant: "destructive",
                    });
                }
            } catch (validationError) {
                if (validationError instanceof z.ZodError) {
                    // Handle validation errors
                    console.error("Validation errors:", validationError.errors);
                    validationError.errors.forEach(err => {
                        if (err.path && err.path.length > 0) {
                            form.setError(err.path[0] as any, {
                                type: "manual",
                                message: err.message
                            });
                        }
                    });

                    toast({
                        title: "Validation Error",
                        description: "Please check the form for errors and try again.",
                        variant: "destructive",
                    });
                } else {
                    throw validationError; // Re-throw non-Zod validation errors
                }
            }
        } catch (error) {
            console.error("Form submission error:", error);
            toast({
                title: "Error",
                description: "An unexpected error occurred.",
                variant: "destructive",
            });
        } finally {
            setSubmitting(false);
        }
    }


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full max-w-full overflow-hidden">
                {/* Membership Category */}
                <FormField
                    control={form.control}
                    name="membershipCategory"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Membership category</FormLabel>
                            <FormDescription>Which type of membership do you wish to apply for?</FormDescription>
                            <FormControl>
                                <RadioCards
                                    options={[
                                        {
                                            value: "Ordinary",
                                            label: "Ordinary",
                                            description: "Full membership for individuals or organisations",
                                            icon: User,
                                            annualFee: 100
                                        },
                                        {
                                            value: "Sponsoring",
                                            label: "Sponsoring",
                                            description: "For those wanting to support ASI UK",
                                            icon: HeartHandshake,
                                            annualFee: 20
                                        },
                                    ]}
                                    value={field.value}
                                    layout={"vertical"}
                                    onChange={(value) => {
                                        field.onChange(value);
                                        form.setValue("membershipType", undefined);
                                        form.setValue("orgType", undefined);
                                        form.setValue("orgIsReligiousMission", undefined);
                                    }}
                                />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                {/* Membership Type */}
                {membershipCategory === "Ordinary" && (
                    <FormField
                        control={form.control}
                        name="membershipType"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Membership type</FormLabel>
                                <FormDescription>Are you applying as an individual or on behalf of an organisation?</FormDescription>
                                <FormControl>
                                    <RadioCards
                                        className="grid-cols-2"
                                        options={[
                                            {
                                                value: "Individual",
                                                label: "Individual",
                                                description: "Membership as an individual person",
                                                icon: User,
                                            },
                                            {
                                                value: "Organisation",
                                                label: "Organisation",
                                                description: "Membership as a business, organisation or self-supporting ministry",
                                                icon: Building2,
                                            }
                                        ]}
                                        value={field.value}
                                        layout={"horizontal"}
                                        onChange={(value) => {
                                            field.onChange(value);
                                            form.setValue("orgType", undefined);
                                            form.setValue("orgIsReligiousMission", undefined);
                                        }}
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                )}

                {/* Organisation Type */}
                {membershipType === "Organisation" && (
                    <FormField
                        control={form.control}
                        name="orgType"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Type of organisation</FormLabel>
                                <FormDescription>Which of the following best describes your organisation?</FormDescription>
                                <FormControl>
                                    <RadioCards
                                        className="grid-cols-2"
                                        options={[
                                            {
                                                value: "ForProfit",
                                                label: "For-profit",
                                                icon: BriefcaseBusiness,
                                            },
                                            {
                                                value: "NonProfit",
                                                label: "Not-for-profit",
                                                icon: HandHeart,
                                            }
                                        ]}
                                        value={field.value}
                                        onChange={(value) => {
                                            field.onChange(value);
                                            form.setValue("orgIsReligiousMission", undefined);
                                        }}
                                        layout="horizontal"
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                )}

                {/* Religious Mission Question */}
                {orgType === "NonProfit" && (
                    <FormField
                        control={form.control}
                        name="orgIsReligiousMission"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Religious mission <span className="text-destructive">*</span></FormLabel>
                                <FormDescription>Is the mission of your not-for-profit organisation religious in nature?</FormDescription>
                                <FormControl>
                                    <div className="max-w-full">
                                        <RadioCards
                                            className="grid-cols-2"
                                            options={[
                                                { value: "Yes", label: "Yes", icon: Check },
                                                { value: "No", label: "No", icon: X },
                                            ]}
                                            value={field.value}
                                            onChange={field.onChange}
                                            layout="inline"
                                        />
                                    </div>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                )}

                {/* Organisation Information Section */}
                {membershipType === "Organisation" && (
                    <>
                        <h1 className={"text-asi-blue text-left pt-10 text-lg font-bold md:text-xl"}>
                            Organisation Information
                        </h1>

                        {/* Organisation Church Affiliation Subsection - only when religious mission */}
                        {orgIsReligiousMission === "Yes" && (
                            <div className="space-y-5 bg-white p-5 rounded-2xl">
                                <h1 className="font-medium text-asi-blue text-lg">Church Affiliation</h1>

                                <FormField
                                    control={form.control}
                                    name="orgIsChurchControlled"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Church involvement <span className="text-destructive">*</span></FormLabel>
                                            <FormDescription>Is your organisation directly or indirectly owned, operated or controlled by the Seventh-day Adventist Church?</FormDescription>
                                            <FormControl>
                                                <div className="max-w-full">
                                                    <RadioCards
                                                        className="grid-cols-2"
                                                        options={[
                                                            { value: "Yes", label: "Yes", icon: Check },
                                                            { value: "No", label: "No", icon: X },
                                                        ]}
                                                        value={field.value}
                                                        onChange={field.onChange}
                                                        layout="inline"
                                                    />
                                                </div>
                                            </FormControl>
                                            <FormMessage/>
                                            {orgIsChurchControlled === "Yes" && (
                                                <DisqualificationAlert
                                                    message="ASI UK membership is only available to organisations that are not controlled by the Seventh-day Adventist church"
                                                />
                                            )}
                                        </FormItem>
                                    )}
                                />

                                {orgIsChurchControlled === "No" && (
                                    <FormField
                                        control={form.control}
                                        name="orgK0505IsAgreed"
                                        render={({field}) => (
                                            <FormItem className="py-2">
                                                <FormLabel>
                                                    K 05 05 compliance <span className="text-destructive">*</span>
                                                </FormLabel>
                                                <FormDescription>
                                                    Does the individual who owns and/or operates this religious-based organisation, self-supporting ministry, or mission comply with the Seventh-day Adventist Church's <Link href="https://drive.google.com/file/d/1gK1xGvPzyqBMXh7iigm6kbCwn99E2xUQ/view" className="underline" target="_blank" rel="noopener noreferrer">K 05 05 Criteria for Defining Supporting Ministries</Link>?
                                                </FormDescription>
                                                <FormControl>
                                                    <div className="max-w-full">
                                                        <RadioCards
                                                            className="grid-cols-2"
                                                            options={[
                                                                { value: "Yes", label: "Yes", icon: Check },
                                                                { value: "No", label: "No", icon: X },
                                                            ]}
                                                            value={field.value}
                                                            onChange={field.onChange}
                                                            layout="inline"
                                                        />
                                                    </div>
                                                </FormControl>
                                                <FormMessage/>
                                                {orgK0505IsAgreed === "No" && (
                                                    <DisqualificationAlert
                                                        message="Your organisation must comply with the K 05 05 criteria to qualify for ASI UK membership"
                                                    />
                                                )}
                                            </FormItem>
                                        )}
                                    />
                                )}
                            </div>
                        )}

                        {/* Organisation Basic Details Subsection */}
                        <div className="space-y-5 bg-white p-5 rounded-2xl">
                            <h1 className="font-medium text-asi-blue text-lg">Basic Details</h1>
                            <FormField
                                control={form.control}
                                name="orgName"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Name <span className="text-destructive">*</span></FormLabel>
                                        <FormDescription>What is the name of your organisation?</FormDescription>
                                        <FormControl>
                                            <Input placeholder="" className="" {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="orgLegalName"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Legal name</FormLabel>
                                        <FormDescription>Full legal name of the organisation (if registered)</FormDescription>
                                        <FormControl>
                                            <Input placeholder="" className="" {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="orgDescription"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Description <span className="text-destructive">*</span></FormLabel>
                                        <FormDescription>Please briefly describe what your organisation does</FormDescription>
                                        <FormControl>
                                            <Textarea placeholder="" rows={4} {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                        </div>

                        {/* Organisation Contact Details Subsection */}
                        <div className="space-y-5 bg-white p-5 rounded-2xl">
                            <h1 className="font-medium text-asi-blue text-lg">Contact Details</h1>
                            <FormField
                                control={form.control}
                                name="orgAddress"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Address</FormLabel>
                                        <FormDescription>Legal registered address of your organisation</FormDescription>
                                        <FormControl>
                                            <Input placeholder="" {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="orgPostalAddress"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Postal address</FormLabel>
                                        <FormDescription>If different from legal address</FormDescription>
                                        <FormControl>
                                            <Input placeholder="" {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="orgPhone"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Phone</FormLabel>
                                        <FormControl>
                                            <Input placeholder="" {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="orgEmail"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Email <span className="text-destructive">*</span></FormLabel>
                                        <FormControl>
                                            <Input placeholder="" {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="orgWebsite"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Website</FormLabel>
                                        <FormControl>
                                            <Input placeholder="" {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                        </div>

                        {/* Organisation Other Details Subsection */}
                        <div className="space-y-5 bg-white p-5 rounded-2xl">
                            <h1 className="font-medium text-asi-blue text-lg">Other Details</h1>
                            <FormField
                                control={form.control}
                                name="orgEmployees"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Size of organisation <span className="text-destructive">*</span></FormLabel>
                                        <FormDescription>How many people work for your organisation, including yourself?</FormDescription>
                                        <FormControl>
                                            <Input placeholder="" {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="orgYearsInOperation"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Years in operation <span className="text-destructive">*</span></FormLabel>
                                        <FormDescription>How many years has your organisation been in operation?</FormDescription>
                                        <FormControl>
                                            <Input placeholder="" {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                        </div>
                    </>
                )}

                {/* Personal Information Section */}
                {membershipCategory && (
                    <>

                        <div>
                            <h1 className={"text-asi-blue text-left pt-10 text-lg font-bold md:text-xl"}>
                                Personal Information
                            </h1>

                            {membershipType === "Organisation" && (
                                <p className="text-gray-600 text-sm ">
                                    Information about the individual representing the organisation for ASI UK membership
                                </p>
                            )}
                        </div>

                        {/* Personal Church Affiliation Subsection */}
                        <div className="space-y-5 bg-white p-5 rounded-2xl">
                            <h1 className="font-medium text-asi-blue text-lg">Church Affiliation</h1>

                            <FormField
                                control={form.control}
                                name="isChurchMember"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>
                                            Church membership <span className="text-destructive">*</span>
                                        </FormLabel>
                                        <FormDescription>
                                            Are you a baptised member of the Seventh-day Adventist church?
                                        </FormDescription>
                                        <FormControl>
                                            <div className="max-w-full">
                                                <RadioCards
                                                    className="grid-cols-2"
                                                    options={[
                                                        { value: "Yes", label: "Yes", icon: Check },
                                                        { value: "No", label: "No", icon: X },
                                                    ]}
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                    layout="inline"
                                                />
                                            </div>
                                        </FormControl>
                                        <FormMessage/>
                                        {isChurchMember === "No" && (
                                            <DisqualificationAlert
                                                message="You must be an SDA church member to qualify for ASI UK membership"
                                            />
                                        )}
                                    </FormItem>
                                )}
                            />

                            {/* Church employment - shown when church member */}
                            {membershipCategory && (
                                <FormField
                                    control={form.control}
                                    name="isChurchEmployed"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>
                                                Church employment <span className="text-destructive">*</span>
                                            </FormLabel>
                                            <FormDescription>
                                                Are you employed by the Seventh-day Adventist church or by any organisation owned or substantially controlled by the Seventh-day Adventist church?
                                            </FormDescription>
                                            <FormControl>
                                                <div className="max-w-full">
                                                    <RadioCards
                                                        className="grid-cols-2"
                                                        options={[
                                                            { value: "Yes", label: "Yes", icon: Check },
                                                            { value: "No", label: "No", icon: X },
                                                        ]}
                                                        value={field.value}
                                                        onChange={field.onChange}
                                                        layout="inline"
                                                    />
                                                </div>
                                            </FormControl>
                                            <FormMessage/>
                                            {membershipType === "Individual" && isChurchEmployed === "Yes" && (
                                                <DisqualificationAlert
                                                    message="Employees of the church do not qualify for ASI UK Ordinary membership. Sponsoring membership is available if desired"
                                                    action={{
                                                        label: "Switch to Sponsoring membership",
                                                        onClick: () => {
                                                            form.setValue("membershipCategory", "Sponsoring");
                                                            form.setValue("membershipType", undefined);
                                                            form.setValue("isChurchEmployed", undefined);
                                                        }
                                                    }}
                                                />
                                            )}
                                        </FormItem>
                                    )}
                                />
                            )}
                        </div>

                        {/* About You Subsection */}
                        <div className="space-y-5 bg-white p-5 rounded-2xl">
                            <h1 className="font-medium text-asi-blue text-lg">About You</h1>

                            <FormField
                                control={form.control}
                                name="title"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Title <span className="text-destructive">*</span></FormLabel>
                                        <FormControl>
                                            <Select onValueChange={field.onChange}
                                                    defaultValue={field.value || ""}
                                                    value={field.value || ""}>
                                                <SelectTrigger className="w-[180px]">
                                                    <SelectValue placeholder="Choose"/>
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="Mr">Mr</SelectItem>
                                                    <SelectItem value="Mrs">Mrs</SelectItem>
                                                    <SelectItem value="Miss">Miss</SelectItem>
                                                    <SelectItem value="Dr">Dr</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <div className="grid grid-cols-2 space-x-8">
                                <FormField
                                    control={form.control}
                                    name="firstName"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>First name(s) <span className="text-destructive">*</span></FormLabel>
                                            <FormControl>
                                                <Input placeholder="" className="" {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="surname"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Surname <span className="text-destructive">*</span></FormLabel>
                                            <FormControl>
                                                <Input placeholder="" {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            {membershipType === "Organisation" && (
                                <FormField
                                    control={form.control}
                                    name="orgApplicantRole"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Role within organisation <span className="text-destructive">*</span></FormLabel>
                                            <FormDescription>What is your personal role within the organisation you represent?</FormDescription>
                                            <FormControl>
                                                <Input placeholder="" {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                            )}
                            <FormField
                                control={form.control}
                                name="phoneNumber"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Phone <span className="text-destructive">*</span></FormLabel>
                                        <FormControl>
                                            <Input placeholder="" {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Email <span className="text-destructive">*</span></FormLabel>
                                        <FormControl>
                                            <Input placeholder="" {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                        </div>

                        {/* Church Details Subsection */}
                        <div className="space-y-5 bg-white p-5 rounded-2xl">
                            <h1 className="font-medium text-asi-blue text-lg">Church Details</h1>
                            <FormField
                                control={form.control}
                                name="localChurchName"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Local church name <span className="text-destructive">*</span></FormLabel>
                                        <FormDescription>What is the name of the local church where your membership is held?</FormDescription>
                                        <FormControl>
                                            <Input placeholder="" {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="localChurchPastorName"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Pastor's name <span className="text-destructive">*</span></FormLabel>
                                        <FormDescription>What is the name of your local church pastor?</FormDescription>
                                        <FormControl>
                                            <Input placeholder="" {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="localChurchPastorPhone"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Pastor's phone <span className="text-destructive">*</span></FormLabel>
                                        <FormDescription>Please provide the phone number of your pastor</FormDescription>
                                        <FormControl>
                                            <Input placeholder="" {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                        </div>
                    </>
                )}

                {/* Submit Button */}
                {membershipCategory && (
                    <Button
                        type="button"
                        onClick={() => {
                            console.log("Submit button clicked");
                            onSubmit(form.getValues());
                        }}
                        className="mt-4"
                        disabled={isDisqualified || submitting}
                    >
                        {submitting ? "Submitting..." : "Submit Application"}
                    </Button>
                )}
            </form>
        </Form>
    )
}
