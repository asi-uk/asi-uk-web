"use client"

import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { membershipFormSubmitAction } from "@/app/actions/membershipFormSubmitAction";
import { useState } from "react";
import { toast } from "@/components/hooks/use-toast";
import { membershipFormSchema, type MembershipFormData } from "@/lib/schemas/membership-form";

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
import {Checkbox} from "@/components/ui/checkbox";

export function MembershipForm() {
    const router = useRouter();
    const form = useForm<MembershipFormData>({
        resolver: zodResolver(membershipFormSchema),
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
            privacyPolicyAccepted: false as unknown as true,
            marketingConsent: false,
            comments: "",
        }
    })

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

    async function onSubmit(values: MembershipFormData) {
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
            // Create FormData for submission
            const formData = new FormData();
            Object.entries(values).forEach(([key, value]) => {
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
                // Redirect to confirmation page
                if (result.redirectTo) {
                    router.push(result.redirectTo);
                } else {
                    form.reset();
                }
            } else {
                console.log("Error");
                toast({
                    title: "Error",
                    description: result.errors?.[0] || "There was an error submitting your application.",
                    variant: "destructive",
                });
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
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full max-w-full">
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

                {/* Organisation Information Section */}
                {membershipType === "Organisation" && (
                    <div className="w-screen ml-[calc(-50vw+50%)] py-8 bg-blue-50">
                        <div className="max-w-screen-md mx-auto px-5 space-y-8">
                            <h1 className={"text-asi-blue text-left text-lg font-bold md:text-xl"}>
                                Organisation Information
                            </h1>

                            {/* Organisation Type Subsection */}
                            <div className="space-y-5 bg-white p-5 rounded-2xl">
                            <h1 className="font-medium text-asi-blue text-lg">Organisation Type</h1>
                            <FormField
                                control={form.control}
                                name="orgType"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Type of organisation <span className="text-destructive">*</span></FormLabel>
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
                        </div>

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

                                {orgIsReligiousMission === "Yes" && (
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
                                        <FormLabel>Address <span className="text-destructive">*</span></FormLabel>
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
                        </div>
                    </div>
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

                {/* Additional Information Section */}
                {membershipCategory && (
                    <div className="space-y-5 bg-white p-5 rounded-2xl">
                        <h1 className="font-medium text-asi-blue text-lg">Additional Information</h1>
                        <FormField
                            control={form.control}
                            name="comments"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Comments</FormLabel>
                                    <FormDescription>
                                        Is there anything else you would like us to know about your application?
                                    </FormDescription>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Enter any additional comments here (optional)"
                                            rows={4}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                    </div>
                )}

                {/* GDPR Consent Section */}
                {membershipCategory && (
                    <div className="space-y-5 bg-white p-5 rounded-2xl">
                        <h1 className="font-medium text-asi-blue text-lg">Data Protection</h1>

                        <p className="text-sm text-gray-600">
                            Your data will be processed by Adventist-laymen's Services and Industries UK (ASI UK).
                            For questions about your data, contact us at{' '}
                            <Link href="mailto:info@asiuk.org" className="text-asi-blue underline">info@asiuk.org</Link>.
                        </p>

                        <FormField
                            control={form.control}
                            name="privacyPolicyAccepted"
                            render={({field}) => (
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
                                        <FormMessage/>
                                    </div>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="marketingConsent"
                            render={({field}) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                    <div className="space-y-1 leading-none">
                                        <FormLabel className="font-normal">
                                            I would like to receive newsletters and updates about ASI UK activities, events, and member news
                                        </FormLabel>
                                    </div>
                                </FormItem>
                            )}
                        />
                    </div>
                )}

                {/* Submit Button */}
                {membershipCategory && (
                    <Button
                        type="submit"
                        className="mt-4 bg-asi-blue hover:bg-asi-darkBlue"
                        disabled={isDisqualified || submitting}
                    >
                        {submitting ? "Submitting..." : "Submit Application"}
                    </Button>
                )}
            </form>
        </Form>
    )
}
