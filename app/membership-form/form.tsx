"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import DateInput from "@/components/ui/date";
import { Label } from "@/components/ui/label"
import RadioCards from "@/components/ui/radio-cards";
import {Building2, HeartHandshake, User} from "lucide-react";

const formSchema = z.object({
    membershipType: z.enum(["Individual", "Organisation", "Supporting"], {
        required_error: "Please select a membership type",
    }).optional(),

    title: z.enum(["Mr", "Mrs", "Miss", "Dr"], {
        required_error: "Please select a title",
    }).optional(),

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
            required_error: "Please select your date of birth",
            invalid_type_error: "That's not a valid date",
        })
        .min(new Date("1900-01-01"), "Date of birth cannot be before 1900")
        .max(new Date(), "Date of birth cannot be in the future"),

    address: z
        .string()
        .min(5, "Address must be at least 5 characters")
        .max(200, "Address must not exceed 200 characters"),

    phoneNumber: z
        .string()
        .regex(
            /^(?:\+?\d{1,4}[\s-]?)?\(?(?:\d{1,}\)?[\s-]?){6,}$/,
            "Please enter a valid phone number"
        )
        .min(10, "Phone number must be at least 10 digits")
        .max(17, "Phone number must not exceed 15 digits"),

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
            membershipType: "Individual",
            title: undefined,
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
                    name="membershipType"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Membership Type</FormLabel>
                            <FormControl>
                                <RadioCards
                                    options={[
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
                                    ]}
                                    value={field.value}
                                    onChange={field.onChange}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Select>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Choose" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Mr">Mr</SelectItem>
                                        <SelectItem value="Mrs">Mrs</SelectItem>
                                        <SelectItem value="Miss">Miss</SelectItem>
                                        <SelectItem value="Dr">Dr</SelectItem>
                                    </SelectContent>
                                </Select>

                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex grid grid-cols-2 space-x-8">
                    <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>First name(s)</FormLabel>
                                <FormControl>
                                    <Input placeholder="Ellen Gould" className="" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="surname"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Surname</FormLabel>
                                <FormControl>
                                    <Input placeholder="White" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="dateOfBirth"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Date of Birth</FormLabel>
                            <DateInput
                                value={field.value}
                                onChange={field.onChange}
                                error={!!form.formState.errors.dateOfBirth}
                            />
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Mailing Address</FormLabel>
                            <FormControl>
                                <Input placeholder="Please enter your mailing address" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                                <Input placeholder="Phone number" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Email address" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}
