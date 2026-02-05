"use client";

import { UseFormReturn } from "react-hook-form";
import { UserCheck, GraduationCap, UserRound, UserPlus, Trash2, Info } from "lucide-react";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import {
    ConventionRegistrationData,
    TICKET_PRICES,
} from "@/lib/schemas/convention-registration";
import { useId } from "react";

interface AttendeeCardProps {
    form: UseFormReturn<ConventionRegistrationData>;
    index: number;
    onRemove: () => void;
    canRemove: boolean;
}

const ticketOptions = [
    {
        value: "non-member",
        label: "Non-member",
        description: "General admission",
        icon: UserPlus,
        price: TICKET_PRICES["non-member"],
    },
    {
        value: "member",
        label: "ASI Member",
        description: "Current ASI UK members",
        icon: UserCheck,
        price: TICKET_PRICES.member,
    },
    {
        value: "student",
        label: "Student",
        description: "Ages 16-25",
        icon: GraduationCap,
        price: TICKET_PRICES.student,
    },
    {
        value: "youth",
        label: "Youth",
        description: "Under 16s",
        icon: UserRound,
        price: 0,
    },
];

export default function AttendeeCard({ form, index, onRemove, canRemove }: AttendeeCardProps) {
    const uniqueId = useId();

    return (
        <TooltipProvider>
            <div className="space-y-5 bg-white p-5 rounded-2xl">
                <div className="flex justify-between items-center">
                    <h2 className="font-medium text-asi-blue text-lg">
                        Attendee {index + 1}
                    </h2>
                    {canRemove && (
                        <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={onRemove}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        >
                            <Trash2 className="h-4 w-4 mr-1" />
                            Remove
                        </Button>
                    )}
                </div>

                {/* Compact Ticket Type Selection */}
                <FormField
                    control={form.control}
                    name={`attendees.${index}.ticketType`}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Ticket type <span className="text-destructive">*</span></FormLabel>
                            <FormControl>
                                <RadioGroup
                                    value={field.value ?? ""}
                                    onValueChange={field.onChange}
                                    className="grid grid-cols-2 md:grid-cols-4 gap-3"
                                >
                                    {ticketOptions.map((option) => (
                                        <div key={option.value}>
                                            <RadioGroupItem
                                                value={option.value}
                                                id={`${uniqueId}-${index}-${option.value}`}
                                                className="peer sr-only"
                                            />
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <Label
                                                        htmlFor={`${uniqueId}-${index}-${option.value}`}
                                                        className={cn(
                                                            "flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-popover p-3 hover:bg-accent hover:text-accent-foreground cursor-pointer transition-colors h-full min-h-[90px]",
                                                            "peer-data-[state=checked]:border-asi-blue peer-data-[state=checked]:bg-asi-blue/5"
                                                        )}
                                                    >
                                                        <option.icon className="h-5 w-5 text-asi-blue mb-1" />
                                                        <span className="text-sm font-medium text-center leading-tight">
                                                            {option.label}
                                                        </span>
                                                        <span className="text-xs text-gray-500 text-center leading-tight">
                                                            {option.description}
                                                        </span>
                                                        <span className="text-sm font-bold text-asi-blue mt-1">
                                                            {option.price === 0 ? "Free" : `£${option.price}`}
                                                        </span>
                                                    </Label>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>{option.description}</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </div>
                                    ))}
                                </RadioGroup>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name={`attendees.${index}.firstName`}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>First name <span className="text-destructive">*</span></FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter first name" {...field} />
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
                                    <Input placeholder="Enter last name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                {/* Dietary Requirements */}
                <FormField
                    control={form.control}
                    name={`attendees.${index}.dietaryRequirements`}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Dietary requirements</FormLabel>
                            <FormDescription>Please list any allergies or dietary requirements (optional)</FormDescription>
                            <FormControl>
                                <Input
                                    placeholder="E.g., vegetarian, gluten-free, nut allergy..."
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
        </TooltipProvider>
    );
}
