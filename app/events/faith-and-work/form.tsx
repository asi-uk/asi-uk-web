"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { AlertCircle, Loader2, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
    ATTENDEE_ROLES,
    AttendeeRole,
    FaithAndWorkRegistrationData,
    MAX_FAITH_AND_WORK_ATTENDEES,
    faithAndWorkRegistrationSchema,
} from "@/lib/schemas/faith-and-work-registration";
import { faithAndWorkRegistrationAction } from "@/app/actions/faithAndWorkRegistrationAction";
import { FAITH_AND_WORK_2026 } from "@/data/faith-and-work";

const emptyAttendee = {
    firstName: "",
    lastName: "",
    email: "",
    role: undefined as unknown as AttendeeRole,
};

export function FaithAndWorkRegistrationForm() {
    const router = useRouter();
    const [submitting, setSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const form = useForm<FaithAndWorkRegistrationData>({
        resolver: zodResolver(faithAndWorkRegistrationSchema),
        defaultValues: {
            attendees: [{ ...emptyAttendee }],
            newsletterOptIn: false,
            privacyPolicyAccepted: false as unknown as true,
        },
    });

    const { fields, append, remove } = useFieldArray({ control: form.control, name: "attendees" });

    async function onSubmit(values: FaithAndWorkRegistrationData) {
        setSubmitting(true);
        setSubmitError(null);
        try {
            const result = await faithAndWorkRegistrationAction(values);
            if (result.success) {
                router.push(`${FAITH_AND_WORK_2026.path}/confirmation`);
                return;
            }
            setSubmitError(result.errors?.[0] || "There was an error processing your registration.");
        } catch (error) {
            console.error("Registration error:", error);
            setSubmitError("An unexpected error occurred. Please try again.");
        }
        setSubmitting(false);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" noValidate>
                {fields.map((field, index) => {
                    const isLead = index === 0;
                    return (
                        <div key={field.id} className="space-y-5 bg-white p-5 md:p-6 rounded-2xl shadow-sm ring-1 ring-slate-100">
                            <div className="flex justify-between items-center">
                                <h3 className="font-semibold text-asi-blue text-lg">
                                    {fields.length > 1 ? `Attendee ${index + 1}` : "Attendee details"}
                                </h3>
                                {fields.length > 1 && (
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => remove(index)}
                                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                                    >
                                        <Trash2 className="h-4 w-4 mr-1" />
                                        Remove
                                    </Button>
                                )}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name={`attendees.${index}.firstName`}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>First name <span className="text-destructive">*</span></FormLabel>
                                            <FormControl>
                                                <Input autoComplete={isLead ? "given-name" : "off"} {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name={`attendees.${index}.lastName`}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Last name <span className="text-destructive">*</span></FormLabel>
                                            <FormControl>
                                                <Input autoComplete={isLead ? "family-name" : "off"} {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name={`attendees.${index}.email`}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                Email {isLead ? <span className="text-destructive">*</span> : <span className="text-slate-400 font-normal">(optional)</span>}
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="email"
                                                    autoComplete={isLead ? "email" : "off"}
                                                    placeholder="name@example.com"
                                                    {...field}
                                                />
                                            </FormControl>
                                            {isLead && (
                                                <FormDescription>
                                                    {fields.length > 1
                                                        ? "The confirmation for everyone on this registration is sent here."
                                                        : "We'll send your confirmation here."}
                                                </FormDescription>
                                            )}
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name={`attendees.${index}.role`}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>What best describes {fields.length > 1 ? "this person" : "you"}? <span className="text-destructive">*</span></FormLabel>
                                            <Select value={field.value ?? ""} onValueChange={field.onChange}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select one" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {(Object.entries(ATTENDEE_ROLES) as [AttendeeRole, string][]).map(([value, label]) => (
                                                        <SelectItem key={value} value={value}>
                                                            {label}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                    );
                })}

                {fields.length < MAX_FAITH_AND_WORK_ATTENDEES && (
                    <Button
                        type="button"
                        variant="outline"
                        onClick={() => append({ ...emptyAttendee })}
                        className="w-full md:w-auto"
                    >
                        <Plus className="h-4 w-4 mr-2" />
                        Add another person
                    </Button>
                )}

                <div className="space-y-4 bg-white p-5 md:p-6 rounded-2xl shadow-sm ring-1 ring-slate-100">
                    <FormField
                        control={form.control}
                        name="newsletterOptIn"
                        render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                <FormControl>
                                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                </FormControl>
                                <FormLabel className="font-normal leading-snug">
                                    Keep me updated about ASI UK events and news
                                </FormLabel>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="privacyPolicyAccepted"
                        render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                <FormControl>
                                    <Checkbox checked={field.value === true} onCheckedChange={field.onChange} />
                                </FormControl>
                                <div className="space-y-1 leading-snug">
                                    <FormLabel className="font-normal">
                                        I have read and accept the{" "}
                                        <Link href="/privacy-policy" target="_blank" className="text-asi-blue underline">
                                            Privacy Policy
                                        </Link>
                                        <span className="text-destructive"> *</span>
                                    </FormLabel>
                                    <FormMessage />
                                </div>
                            </FormItem>
                        )}
                    />
                    <p className="text-xs text-slate-500">
                        Your data will be processed by Adventist-laymen&apos;s Services and Industries UK (ASI UK) to
                        manage this event. Questions? Email{" "}
                        <a href="mailto:info@asiuk.org" className="text-asi-blue underline">info@asiuk.org</a>.
                    </p>
                </div>

                <div>
                    {submitError && (
                        <div role="alert" className="mb-4 flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">
                            <AlertCircle className="h-5 w-5 shrink-0" />
                            <p>
                                {submitError} If this keeps happening, email{" "}
                                <a href="mailto:info@asiuk.org" className="underline">info@asiuk.org</a>.
                            </p>
                        </div>
                    )}
                    <Button
                        type="submit"
                        className="w-full bg-asi-blue hover:bg-asi-darkBlue text-lg py-6"
                        disabled={submitting}
                    >
                        {submitting ? (
                            <>
                                <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                                Registering...
                            </>
                        ) : fields.length > 1 ? (
                            `Register ${fields.length} people — Free`
                        ) : (
                            "Register — Free"
                        )}
                    </Button>
                    <p className="text-center text-sm text-slate-500 mt-3">{FAITH_AND_WORK_2026.donations}</p>
                </div>
            </form>
        </Form>
    );
}
