"use client"

import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import Link from 'next/link';
import {z} from "zod"
import { useEffect, useRef } from "react"

import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import DateInput from "@/components/ui/date"
import RadioCards from "@/components/ui/radio-cards"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
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

import {BriefcaseBusiness, Building, Building2, ChartCandlestick, HandHeart, HeartHandshake, User} from "lucide-react";

const formSchema = z.object({

    applicantDescription: z.enum(["Individual", "Entity"]),

    membershipType: z.enum(["Ordinary-Individual", "Ordinary-Organisation", "Supporting"]),

    orgType: z.enum(["Business", "Organisation"]),

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

    dateOfBirth: z
        .date({
            required_error: "Please enter a valid date of birth",
            invalid_type_error: "That's not a valid date",
        })
        .min(new Date("1900-01-01"), "Date of birth cannot be before 1900")
        .max(new Date(), "Date of birth cannot be in the future"),

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

    orgSocialMedia: z
        .string()
        .optional(),

    orgK0505IsAgreed: z.enum(["yes", "no"], {
        required_error: "Please select an option",
    }),

    orgIsFundedByChurch: z.enum(["yes", "no"], {
        required_error: "Please select an option",
    }),

    address: z
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

    phoneNumber: z
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

    email: z
        .string({required_error: "Please provide a contact email"})
        .email("Please enter a valid email address")
        .min(5, "Email must be at least 5 characters")
        .max(100, "Email must not exceed 100 characters"),

    website: z.string().url().optional(),

    socialMedia: z
        .string()
        .optional(),

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

const capitalizeFirstWord = (str) => {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export function MembershipForm() {
    // 1. Define your form.

    const orgSectionRef = useRef(null);
    const personalInfoSectionRef = useRef(null);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            applicantDescription: undefined,
            membershipType: undefined,
            orgType: null,
            title: null,
            firstName: undefined,
            surname: undefined,
            dateOfBirth: undefined,
            orgName: undefined,
            orgLegalName: undefined,
            orgApplicantRole: undefined,
            orgDescription: undefined,
            orgAddress: undefined,
            orgPostalAddress: undefined,
            orgPhone: undefined,
            orgEmail: undefined,
            orgEmployees: undefined,
            orgYearsInOperation: undefined,
            orgWebsite: undefined,
            orgSocialMedia: undefined,
            orgK0505IsAgreed: null,
            orgIsFundedByChurch: null,
            address: undefined,
            phoneNumber: undefined,
            email: undefined,
            website: undefined,
            socialMedia: undefined
        }
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    // Watch for changes in key form values that trigger conditional rendering
    const applicantDescription = form.watch("applicantDescription");
    const membershipType = form.watch("membershipType");
    const orgType = form.watch("orgType");

    // Scroll to entity section when it appears
    useEffect(() => {
        if (applicantDescription === "Entity" && membershipType && orgType && orgSectionRef.current) {
            setTimeout(() => {
                orgSectionRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }, 100); // Small delay to ensure DOM has updated
        }
    }, [applicantDescription, orgType]);

    // Scroll to personal info section when it appears
    useEffect(() => {
        if (
            personalInfoSectionRef.current &&
            applicantDescription == "Individual" &&
            membershipType
        ) {
            setTimeout(() => {
                personalInfoSectionRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }, 100); // Small delay to ensure DOM has updated
        }
    }, [applicantDescription, membershipType, orgType]);

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="applicantDescription"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Membership category</FormLabel>
                            <FormDescription>Which best describes the type of membership you wish to apply for?</FormDescription>
                            <FormControl>
                                <RadioCards
                                    className="grid-cols-2"
                                    options={[
                                        {
                                            value: "Individual",
                                            label: "Individual",
                                            icon: User,
                                        },
                                        {
                                            value: "Entity",
                                            label: "Organisation",
                                            icon: Building2,
                                        },
                                    ]}
                                    value={field.value}
                                    layout={"horizontal"}
                                    onChange={(value) => {

                                        if (value === "Individual") {
                                            form.setValue("orgName", "");
                                            form.setValue("orgLegalName", "");
                                            form.setValue("orgApplicantRole", "");
                                            form.setValue("orgDescription", "");
                                            form.setValue("orgAddress", "");
                                            form.setValue("orgPostalAddress", "");
                                            form.setValue("orgPhone", "");
                                            form.setValue("orgEmail", "");
                                            form.setValue("orgEmployees", "");
                                            form.setValue("orgYearsInOperation", "");
                                            form.setValue("orgWebsite", "");
                                            form.setValue("orgSocialMedia", "");
                                            form.setValue("orgK0505IsAgreed", null);
                                            form.setValue("orgIsFundedByChurch", null);
                                        }

                                        if (value === "Entity") {
                                            form.setValue("membershipType", "Ordinary-Organisation")
                                        } else {
                                            form.setValue('membershipType', null);
                                        }

                                        field.onChange(value);
                                        form.setValue('orgType', null);
                                        form.clearErrors();
                                    }}
                                />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                {form.watch("applicantDescription") && (<FormField
                    control={form.control}
                    name="membershipType"
                    render={({field}) => {
                        // Get the current applicant type
                        const applicantType = form.watch("applicantDescription");

                        // Define which membership types are available for each applicant type
                        const membershipOptions = {
                            "Individual": ["Ordinary-Individual", "Supporting"],
                            "Entity": ["Ordinary-Organisation"],
                        };

                        // Filter the options based on the selected applicant type
                        const filteredOptions = [
                            {
                                value: "Ordinary-Individual",
                                label: "Ordinary",
                                description: "Ordinary membership as an individual",
                                icon: User,
                                annualFee: 100
                            },
                            {
                                value: "Ordinary-Organisation",
                                label: "Ordinary",
                                description: "Ordinary membership as a business, organisation or self-supporting ministry",
                                icon: Building2,
                                annualFee: 100
                            },
                            {
                                value: "Supporting",
                                label: "Supporting",
                                description: "For those wanting to support ASI UK, but not as full members",
                                icon: HeartHandshake,
                                annualFee: 20
                            }
                        ].filter(option =>
                            !applicantType || // Show all options if no applicant type selected
                            membershipOptions[applicantType]?.includes(option.value)
                        );

                        return (
                            <FormItem>
                                <FormLabel>Membership type</FormLabel>
                                <FormDescription>Please select your desired membership type</FormDescription>
                                <FormControl>
                                    <RadioCards
                                        options={filteredOptions}
                                        value={field.value}
                                        onChange={(value) => {
                                            field.onChange(value);
                                            form.clearErrors();
                                        }}
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        );
                    }}
                />)}
                {form.watch("applicantDescription") === "Entity" && form.watch("membershipType") && (
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
                                                value: "Business",
                                                label: "For-profit",
                                                icon: BriefcaseBusiness,
                                            },
                                            {
                                                value: "Organisation",
                                                label: "Not-for-profit",
                                                icon: HandHeart,
                                            }
                                        ]}
                                        value={field.value}
                                        onChange={field.onChange}
                                        layout="horizontal"
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                )}

                {form.watch("applicantDescription") === "Entity" && form.watch("orgType") && (<>
                    <h1 ref={orgSectionRef} className={"text-asi-blue text-left pt-10 text-lg font-bold md:text-xl"}>
                        {form.watch("orgType")} Information
                    </h1>
                    <div className="space-y-5 bg-white p-5 rounded-2xl">
                        <h1 className="font-medium text-asi-blue text-lg">Basic Details</h1>
                        <FormField
                            control={form.control}
                            name="orgName"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Name <span className="text-destructive">*</span></FormLabel>
                                    <FormDescription>What is the name of your {form.watch("orgType")?.toLowerCase()}?</FormDescription>
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
                                    <FormDescription>Full legal name of the {form.watch("orgType")?.toLowerCase()} (if registered)</FormDescription>
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
                                    <FormDescription>Please briefly describe what your {form.watch("orgType")?.toLowerCase()} does</FormDescription>
                                    <FormControl>
                                        <Input placeholder="" {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="space-y-5 bg-white p-5 rounded-2xl">
                        <h1 className="font-medium text-asi-blue text-lg">Contact Details</h1>

                    <FormField
                        control={form.control}
                        name="orgAddress"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Address</FormLabel>
                                <FormDescription>Legal registered address of your {form.watch("orgType")?.toLowerCase()}</FormDescription>
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
                    <FormField
                        control={form.control}
                        name="orgSocialMedia"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel >Social media</FormLabel>
                                <FormDescription>Social media links for your {form.watch("orgType")?.toLowerCase()} (Instagram, Facebook, etc.)</FormDescription>
                                <FormControl>
                                    <Input placeholder="" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    </div>

                    <div className="space-y-5 bg-white p-5 rounded-2xl">
                        <h1 className="font-medium text-asi-blue text-lg">Other Details</h1>

                    <FormField
                        control={form.control}
                        name="orgEmployees"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Size of {form.watch("orgType")?.toLowerCase()} <span className="text-destructive">*</span></FormLabel>
                                <FormDescription>How many employees are part of your {form.watch("orgType")?.toLowerCase()}, including yourself?</FormDescription>
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
                                <FormDescription>How many years has your {form.watch("orgType")?.toLowerCase()} been in operation?</FormDescription>
                                <FormControl>
                                    <Input placeholder="" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    {form.watch("orgType") === "Organisation" && (<>
                        <FormField
                            control={form.control}
                            name="orgK0505IsAgreed"
                            render={({field}) => (
                                <FormItem className={`py-2`}>
                                    <div className="space-y-1 leading-none">
                                        <FormLabel>
                                            K 05 05 compliance <span className="text-destructive">*</span>
                                        </FormLabel>
                                        <FormDescription>
                                            Does the individual who owns and/or operates a religious based organisation, self-supporting ministry, or mission comply with the Seventh-day Adventist Church’s <Link href="https://drive.google.com/file/d/1gK1xGvPzyqBMXh7iigm6kbCwn99E2xUQ/view" className="underline" target="_blank" rel="noopener noreferrer">K 05 05 Criteria for Defining Supporting Ministries</Link>?
                                        </FormDescription>
                                    </div>
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            className="flex flex-col space-y-1"
                                        >
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="Yes" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Yes
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="No" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    No
                                                </FormLabel>
                                            </FormItem>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="orgIsFundedByChurch"
                            render={({field}) => (
                                <FormItem className={`py-2`}>
                                    <div className="space-y-1 leading-none">
                                        <FormLabel>
                                            Church funding <span className="text-destructive">*</span>
                                        </FormLabel>
                                        <FormDescription>
                                            Does the individual who owns and/or operates a religious based organisation, self-supporting ministry, or mission receive a salary or any subsidies from an organisation owned and/or operated by the SDA Church?
                                        </FormDescription>
                                    </div>
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            className="flex flex-col space-y-1"
                                        >
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="Yes" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Yes
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="No" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    No
                                                </FormLabel>
                                            </FormItem>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                    </>)}
                    </div>
                </>)}

                {form.watch("applicantDescription") && form.watch("membershipType") && (form.watch("applicantDescription") === "Individual" || form.watch("orgType") ) && (<>

                    <h1 ref={personalInfoSectionRef} className={"text-asi-blue text-left pt-10 text-lg font-bold md:text-xl"}>
                        Personal Information
                    </h1>

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
                    <div className="flex grid grid-cols-2 space-x-8">
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
                    {form.watch("applicantDescription") === "Entity" && (
                        <FormField
                            control={form.control}
                            name="orgApplicantRole"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Role within {form.watch("orgType")?.toLowerCase() || "organisation"} <span className="text-destructive">*</span></FormLabel>
                                    <FormDescription>What is your personal role within {form.watch("orgName") || "the organisation you represent"}?</FormDescription>
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
                        name="dateOfBirth"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Date of birth <span className="text-destructive">*</span></FormLabel>
                                <DateInput
                                    value={field.value}
                                    onChange={field.onChange}
                                    error={!!form.formState.errors.dateOfBirth}
                                />
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="address"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Address</FormLabel>
                                <FormDescription>Your postal address</FormDescription>
                                <FormControl>
                                    <Input placeholder="" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phoneNumber"
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
                    <FormField
                        control={form.control}
                        name="socialMedia"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Social media links </FormLabel>
                                <FormDescription>Your personal social media profiles (LinkedIn, Instagram, Facebook, etc.)</FormDescription>
                                <FormControl>
                                    <Input placeholder="" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                </div>

                    <div className="space-y-5 bg-white p-5 rounded-2xl">
                        <h1 className="font-medium text-asi-blue text-lg">Church Affiliation</h1>

                        <FormField
                            control={form.control}
                            name="isChurchMember"
                            render={({field}) => (
                                <FormItem className={`py-2`}>
                                    <div className="space-y-1 leading-none">
                                        <FormLabel>
                                            Church membership <span className="text-destructive">*</span>
                                        </FormLabel>
                                        <FormDescription>
                                            Are you a baptised member of the Seventh-day Adventist church?
                                        </FormDescription>
                                    </div>
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={(value) => {

                                                if (value === "No") {
                                                    form.setValue("isChurchEmployed", undefined);
                                                    form.setValue("localChurchName", "");
                                                    form.setValue("localChurchPastorPhone", "");
                                                    form.setValue("localChurchPastorName", "");
                                                }

                                                field.onChange(value);
                                            }}
                                            defaultValue={field.value}
                                            className="flex flex-col space-y-1"
                                        >
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="Yes"/>
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Yes
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="No"/>
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    No
                                                </FormLabel>
                                            </FormItem>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        {form.watch("isChurchMember") === "Yes" && (
                            <FormField
                                control={form.control}
                                name="isChurchEmployed"
                                render={({field}) => (
                                    <FormItem className={`py-2`}>
                                        <div className="space-y-1 leading-none">
                                            <FormLabel>
                                                Church employment <span className="text-destructive">*</span>
                                            </FormLabel>
                                            <FormDescription>
                                                Are you employed by the Seventh-day Adventist church or by any organisation owned or substantially controlled by the Seventh-day Adventist church?
                                            </FormDescription>
                                        </div>
                                        <FormControl>
                                            <RadioGroup
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                                className="flex flex-col space-y-1"
                                            >
                                                <FormItem className="flex items-center space-x-3 space-y-0">
                                                    <FormControl>
                                                        <RadioGroupItem value="Yes"/>
                                                    </FormControl>
                                                    <FormLabel className="font-normal">
                                                        Yes
                                                    </FormLabel>
                                                </FormItem>
                                                <FormItem className="flex items-center space-x-3 space-y-0">
                                                    <FormControl>
                                                        <RadioGroupItem value="No"/>
                                                    </FormControl>
                                                    <FormLabel className="font-normal">
                                                        No
                                                    </FormLabel>
                                                </FormItem>
                                            </RadioGroup>
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                        )}

                        {form.watch("isChurchMember") === "Yes" && form.watch("isChurchEmployed") === "No" && (<>
                            <FormField
                                control={form.control}
                                name="localChurchName"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Local church name <span
                                            className="text-destructive">*</span></FormLabel>
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
                            </>
                        )}
                    </div>
                </>)}
                {form.watch("applicantDescription") && form.watch("membershipType") && (form.watch("applicantDescription") === "Individual" || form.watch("orgType")) && (
                    <Button type="submit">Submit</Button>
                )}
            </form>
        </Form>
    )
}
