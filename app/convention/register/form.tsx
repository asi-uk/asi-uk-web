"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { CalendarFold, MapPin, Coffee, Plus, Loader2, ArrowUpRight, BedDouble, UtensilsCrossed } from "lucide-react";
import { CONVENTION_2026 } from "@/data/convention";
import { toast } from "@/components/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    FormDescription,
} from "@/components/ui/form";
import AttendeeCard from "./components/AttendeeCard";
import OrderSummary from "./components/OrderSummary";
import {
    conventionRegistrationSchema,
    ConventionRegistrationData,
    calculateOrderTotal,
    isFreeRegistration,
} from "@/lib/schemas/convention-registration";
import { conventionRegistrationAction } from "@/app/actions/conventionRegistrationAction";

const MAX_ATTENDEES = 10;

const defaultAttendee = {
    ticketType: undefined as unknown as "member" | "non-member" | "student" | "youth",
    firstName: "",
    lastName: "",
    dietaryRequirements: "",
};

export function ConventionRegistrationForm() {
    const router = useRouter();
    const [submitting, setSubmitting] = useState(false);

    const form = useForm<ConventionRegistrationData>({
        resolver: zodResolver(conventionRegistrationSchema),
        defaultValues: {
            attendees: [{ ...defaultAttendee }],
            email: "",
            newsletterOptIn: false,
            interestedInAccommodation: false,
            interestedInMeals: false,
            privacyPolicyAccepted: false as unknown as true,
        },
    });

    const { fields, append, remove } = useFieldArray({
        control: form.control,
        name: "attendees",
    });

    const watchedAttendees = form.watch("attendees");
    const canAddMore = fields.length < MAX_ATTENDEES;
    const canRemove = fields.length > 1;

    async function onSubmit(values: ConventionRegistrationData) {
        setSubmitting(true);

        try {
            const result = await conventionRegistrationAction(values);

            if (result.success) {
                const isFree = isFreeRegistration(values.attendees);

                if (isFree) {
                    // Free registration - redirect directly to confirmation
                    toast({
                        title: "Registration Complete!",
                        description: "Your free registration has been confirmed.",
                    });
                    router.push("/convention/register/confirmation?status=confirmed");
                } else if (result.checkoutUrl) {
                    // Paid registration - redirect to Stripe
                    toast({
                        title: "Redirecting to payment...",
                        description: "Please complete your payment to confirm registration.",
                    });
                    window.location.href = result.checkoutUrl;
                } else {
                    // Fallback to confirmation page
                    router.push("/convention/register/confirmation?status=pending");
                }
            } else {
                toast({
                    title: "Error",
                    description: result.errors?.[0] || "There was an error processing your registration.",
                    variant: "destructive",
                });
            }
        } catch (error) {
            console.error("Registration error:", error);
            toast({
                title: "Error",
                description: "An unexpected error occurred. Please try again.",
                variant: "destructive",
            });
        } finally {
            setSubmitting(false);
        }
    }

    const orderTotal = calculateOrderTotal(
        (watchedAttendees || []).filter((a) => a.ticketType)
    );
    const isFree = orderTotal === 0 && watchedAttendees?.some((a) => a.ticketType);

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full max-w-full">
                {/* Event Information */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                        <div className="rounded-xl bg-asi-blue/10 p-3 text-asi-blue">
                            <CalendarFold className="h-6 w-6" />
                        </div>
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Date</p>
                            <p className="mt-1 text-lg font-semibold text-asi-darkBlue">{CONVENTION_2026.dates}</p>
                            <p className="text-sm text-slate-500">{CONVENTION_2026.daysOfWeek}</p>
                        </div>
                    </div>

                    <a
                        href={CONVENTION_2026.venueMapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition hover:ring-asi-blue/50"
                    >
                        <div className="rounded-xl bg-asi-blue/10 p-3 text-asi-blue">
                            <MapPin className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Venue</p>
                            <p className="mt-1 flex items-center gap-1 text-lg font-semibold text-asi-darkBlue">
                                {CONVENTION_2026.venue}
                                <ArrowUpRight className="h-4 w-4 text-slate-400 transition group-hover:text-asi-blue" />
                            </p>
                            <p className="text-sm text-slate-500">{CONVENTION_2026.venueLocation}</p>
                        </div>
                    </a>

                    <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                        <div className="rounded-xl bg-asi-blue/10 p-3 text-asi-blue">
                            <Coffee className="h-6 w-6" />
                        </div>
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Included</p>
                            <p className="mt-1 text-lg font-semibold text-asi-darkBlue">Light refreshments</p>
                            <p className="text-sm text-slate-500">Throughout each day</p>
                        </div>
                    </div>
                </div>

                {/* Attendees Section */}
                <div>
                    <h1 className="text-asi-blue text-left text-lg font-bold md:text-xl mb-4">
                        Attendees
                    </h1>
                    <p className="text-gray-600 text-sm mb-6">
                        Add details for each person attending. You can register up to {MAX_ATTENDEES} attendees.
                    </p>

                    <div className="space-y-6">
                        {fields.map((field, index) => (
                            <AttendeeCard
                                key={field.id}
                                form={form}
                                index={index}
                                onRemove={() => remove(index)}
                                canRemove={canRemove}
                            />
                        ))}
                    </div>

                    {canAddMore && (
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => append({ ...defaultAttendee })}
                            className="mt-4 w-full md:w-auto"
                        >
                            <Plus className="h-4 w-4 mr-2" />
                            Add Another Attendee
                        </Button>
                    )}
                </div>

                {/* Order Summary */}
                <div className="md:hidden">
                    <OrderSummary control={form.control} />
                </div>

                {/* Contact Information */}
                <div>
                    <h1 className="text-asi-blue text-left text-lg font-bold md:text-xl mb-4">
                        Contact Information
                    </h1>
                    <div className="space-y-5 bg-white p-5 rounded-2xl">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email address <span className="text-destructive">*</span></FormLabel>
                                    <FormDescription>
                                        We'll send your registration confirmation and event details to this email
                                    </FormDescription>
                                    <FormControl>
                                        <Input
                                            type="email"
                                            placeholder="your.email@example.com"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="newsletterOptIn"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                    <div className="space-y-1 leading-none">
                                        <FormLabel className="font-normal">
                                            Keep me updated about ASI UK events and news
                                        </FormLabel>
                                    </div>
                                </FormItem>
                            )}
                        />
                    </div>
                </div>

                {/* Accommodation & Meals */}
                <div>
                    <h1 className="text-asi-blue text-left text-lg font-bold md:text-xl mb-4">
                        Accommodation & Meals
                    </h1>
                    <p className="text-gray-600 text-sm mb-6">
                        These options do not affect your registration price. We&apos;ll send booking details separately after registration.
                    </p>

                    <div className="space-y-4">
                        <div className="bg-white p-5 rounded-2xl space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="rounded-xl bg-asi-blue/10 p-2.5 text-asi-blue mt-0.5">
                                    <BedDouble className="h-5 w-5" />
                                </div>
                                <div>
                                    <h2 className="font-medium text-asi-blue text-base">On-campus Accommodation</h2>
                                    <p className="text-sm text-gray-600 mt-1">
                                        On-campus rooms are available for convention attendees, starting from £41 per night.
                                        Options range from shared-standard rooms and bunk rooms through to en-suite singles and doubles,
                                        across Keough House, Schuil House, and Moor Close. Self-catering flats are also available.
                                    </p>
                                    <p className="text-sm text-gray-500 mt-2">
                                        <span className="font-medium">Indicative nightly rates:</span>{" "}
                                        Singles from £41 · Doubles from £53 · En-suite singles £53 · En-suite doubles £79 · Bunk beds from £22pp · Flats from £126
                                    </p>
                                </div>
                            </div>

                            <FormField
                                control={form.control}
                                name="interestedInAccommodation"
                                render={({ field }) => (
                                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 pl-12">
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                        <div className="space-y-1 leading-none">
                                            <FormLabel className="font-normal">
                                                Yes, please send me accommodation booking details
                                            </FormLabel>
                                        </div>
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="bg-white p-5 rounded-2xl space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="rounded-xl bg-asi-blue/10 p-2.5 text-asi-blue mt-0.5">
                                    <UtensilsCrossed className="h-5 w-5" />
                                </div>
                                <div>
                                    <h2 className="font-medium text-asi-blue text-base">Meals</h2>
                                    <p className="text-sm text-gray-600 mt-1">
                                        Light refreshments are included with your registration throughout the convention.
                                        Full meals in the Newbold dining hall are also available for booking, alongside your accommodation or on their own.
                                    </p>
                                    <p className="text-sm text-gray-500 mt-2">
                                        <span className="font-medium">Per meal:</span>{" "}
                                        Breakfast £7.80 (under-12s £4.40) · Lunch or dinner £9.31 (under-12s £6.00)
                                    </p>
                                </div>
                            </div>

                            <FormField
                                control={form.control}
                                name="interestedInMeals"
                                render={({ field }) => (
                                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 pl-12">
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                        <div className="space-y-1 leading-none">
                                            <FormLabel className="font-normal">
                                                Yes, please send me meal booking details
                                            </FormLabel>
                                        </div>
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>
                </div>

                {/* Privacy Policy */}
                <div className="space-y-5 bg-white p-5 rounded-2xl">
                    <h2 className="font-medium text-asi-blue text-lg">Data Protection</h2>
                    <p className="text-sm text-gray-600">
                        Your data will be processed by Adventist-laymen's Services and Industries UK (ASI UK).
                        For questions about your data, contact us at{' '}
                        <Link href="mailto:info@asiuk.org" className="text-asi-blue underline">info@asiuk.org</Link>.
                    </p>

                    <FormField
                        control={form.control}
                        name="privacyPolicyAccepted"
                        render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                <FormControl>
                                    <Checkbox
                                        checked={field.value === true}
                                        onCheckedChange={field.onChange}
                                    />
                                </FormControl>
                                <div className="space-y-1 leading-none">
                                    <FormLabel className="font-normal">
                                        I have read and accept the{' '}
                                        <Link
                                            href="/privacy-policy"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-asi-blue underline"
                                        >
                                            Privacy Policy
                                        </Link>
                                        <span className="text-destructive"> *</span>
                                    </FormLabel>
                                    <FormMessage />
                                </div>
                            </FormItem>
                        )}
                    />
                </div>

                {/* Desktop Order Summary & Submit */}
                <div className="md:grid md:grid-cols-2 md:gap-6">
                    <div className="hidden md:block">
                        <OrderSummary control={form.control} />
                    </div>
                    <div className="flex flex-col justify-end">
                        <Button
                            type="submit"
                            className="w-full bg-asi-blue hover:bg-asi-darkBlue text-lg py-6"
                            disabled={submitting}
                        >
                            {submitting ? (
                                <>
                                    <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                                    Processing...
                                </>
                            ) : isFree ? (
                                "Complete Registration"
                            ) : (
                                `Proceed to Payment${orderTotal > 0 ? ` - £${orderTotal}` : ""}`
                            )}
                        </Button>
                        {!isFree && orderTotal > 0 && (
                            <p className="text-center text-sm text-gray-500 mt-2">
                                You'll be redirected to our secure payment page
                            </p>
                        )}
                    </div>
                </div>
            </form>
        </Form>
    );
}
