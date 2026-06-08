"use client";

import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import Link from "next/link";
import {useState} from "react";
import {toast} from "@/components/hooks/use-toast";
import {contactFormSchema, type ContactFormData} from "@/lib/schemas/contact-form";
import {CONTACT_OPTIONS} from "@/lib/contact-options";
import {contactFormSubmitAction} from "@/app/actions/contactFormSubmitAction";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {CheckCircle2} from "lucide-react";

export default function ContactForm() {
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const form = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            recipient: "",
            subject: "",
            message: "",
            website: "",
        },
    });

    async function onSubmit(values: ContactFormData) {
        setSubmitting(true);
        try {
            const result = await contactFormSubmitAction(values);
            if (result.success) {
                form.reset();
                setSubmitted(true);
            } else {
                toast({
                    title: "Error",
                    description: result.errors?.[0] || "Something went wrong. Please try again.",
                    variant: "destructive",
                });
            }
        } catch (error) {
            console.error("Contact form error:", error);
            toast({
                title: "Error",
                description: "Something went wrong. Please try again.",
                variant: "destructive",
            });
        } finally {
            setSubmitting(false);
        }
    }

    if (submitted) {
        return (
            <div className="flex flex-col items-center text-center py-8 space-y-4">
                <div className="rounded-full bg-green-100 p-3">
                    <CheckCircle2 className="h-8 w-8 text-green-600"/>
                </div>
                <h2 className="text-xl font-semibold text-asi-blue">Message sent</h2>
                <p className="text-slate-600 max-w-md">
                    Thank you for getting in touch. Your message has been sent and we aim to
                    respond within 48 hours.
                </p>
                <Button variant="outline" onClick={() => setSubmitted(false)}>
                    Send another message
                </Button>
            </div>
        );
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="recipient"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Who would you like to reach? <span className="text-destructive">*</span></FormLabel>
                            <Select onValueChange={field.onChange} value={field.value || ""}>
                                <FormControl>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Choose a recipient"/>
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {CONTACT_OPTIONS.map((option) => (
                                        <SelectItem key={option.value} value={option.value}>
                                            {option.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Your name <span className="text-destructive">*</span></FormLabel>
                                <FormControl>
                                    <Input placeholder="Jane Doe" {...field} />
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
                                <FormLabel>Your email <span className="text-destructive">*</span></FormLabel>
                                <FormControl>
                                    <Input type="email" placeholder="you@example.com" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="subject"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Subject <span className="text-destructive">*</span></FormLabel>
                            <FormControl>
                                <Input placeholder="What's this about?" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="message"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Message <span className="text-destructive">*</span></FormLabel>
                            <FormControl>
                                <Textarea placeholder="How can we help?" rows={6} {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                {/* Honeypot — hidden from real users; bots that fill it are silently dropped */}
                <div aria-hidden="true" className="absolute left-[-9999px] top-[-9999px]" style={{display: "none"}}>
                    <label>
                        Leave this field empty
                        <input
                            type="text"
                            tabIndex={-1}
                            autoComplete="off"
                            {...form.register("website")}
                        />
                    </label>
                </div>

                <p className="text-sm text-slate-500">
                    By submitting this form you agree to our{" "}
                    <Link href="/privacy-policy" className="text-asi-blue hover:underline">privacy policy</Link>.
                    We aim to respond within 48 hours.
                </p>

                <Button type="submit" disabled={submitting} className="w-full sm:w-auto">
                    {submitting ? "Sending…" : "Send message"}
                </Button>
            </form>
        </Form>
    );
}
