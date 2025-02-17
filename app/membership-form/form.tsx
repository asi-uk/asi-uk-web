"use client"

import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"

import {Button} from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import DateInput from "@/components/ui/date";
import {Label} from "@/components/ui/label"
import RadioCards from "@/components/ui/radio-cards";
import {BriefcaseBusiness, Building2, ChartCandlestick, HandHeart, HeartHandshake, User} from "lucide-react";

const formSchema = z.object({

    applicantDescription: z.enum(["Businessperson", "Professional", "Self-supporting ministry"], {
        required_error: "Please select an option",
    }),

    membershipType: z.enum(["Individual", "Organisation", "Supporting"], {
        required_error: "Please select a membership type",
    }),

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
        .string()
        .email("Please enter a valid email address")
        .min(5, "Email must be at least 5 characters")
        .max(100, "Email must not exceed 100 characters"),
});

export function MembershipForm() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            applicantDescription: null,
            membershipType: null,
            title: null,
            firstName: "",
            surname: "",
            dateOfBirth: undefined,
            address: "",
            phoneNumber: "",
            email: ""
        }
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="applicantDescription"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>What best describes you?</FormLabel>
                            <FormControl>
                                <RadioCards
                                    className="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3"
                                    options={[
                                        {
                                            value: "Businessperson",
                                            label: "Businessperson",
                                            icon: ChartCandlestick,
                                        },
                                        {
                                            value: "Professional",
                                            label: "Professional",
                                            icon: BriefcaseBusiness,
                                        },
                                        {
                                            value: "Self-supporting ministry",
                                            label: "Self-supporting ministry",
                                            icon: HandHeart,
                                        }
                                    ]}
                                    value={field.value}
                                    layout={"horizontal"}
                                    onChange={(value) => {
                                        field.onChange(value);
                                        form.setValue('membershipType', null);
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
                            "Businessperson": ["Individual", "Organisation", "Supporting"],
                            "Professional": ["Individual", "Organisation", "Supporting"],
                            "Self-supporting ministry": ["Organisation"]
                        };

                        // Filter the options based on the selected applicant type
                        const filteredOptions = [
                            {
                                value: "Individual",
                                label: "Individual",
                                description: "Ordinary membership as an individual",
                                icon: User,
                                annualFee: 100
                            },
                            {
                                value: "Organisation",
                                label: "Organisation",
                                description: "Ordinary membership as a business, organisation or self-supporting ministry",
                                icon: Building2,
                                annualFee: 100
                            },
                            {
                                value: "Supporting",
                                label: "Supporting",
                                description: "For those wanting to support ASI UK, but not as full members",
                                icon: HeartHandshake,
                                annualFee: 100
                            }
                        ].filter(option =>
                            !applicantType || // Show all options if no applicant type selected
                            membershipOptions[applicantType]?.includes(option.value)
                        );

                        return (
                            <FormItem>
                                <FormLabel>Membership Type</FormLabel>
                                <FormControl>
                                    <RadioCards
                                        options={filteredOptions}
                                        value={field.value}
                                        onChange={field.onChange}
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        );
                    }}
                />)}
                {form.watch("applicantDescription") && form.watch("membershipType") && (<>
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
                                        <Input placeholder="Ellen Gould" className="" {...field} />
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
                                        <Input placeholder="White" {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name="dateOfBirth"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Date of Birth <span className="text-destructive">*</span></FormLabel>
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
                                <FormLabel>Mailing Address</FormLabel>
                                <FormControl>
                                    <Input placeholder="Please enter your mailing address" {...field} />
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
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                    <Input placeholder="Phone number" {...field} />
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
                                    <Input placeholder="Email address" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button> </>)}
            </form>
        </Form>
    )
}
