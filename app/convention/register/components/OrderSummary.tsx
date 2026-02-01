"use client";

import { useWatch } from "react-hook-form";
import { Receipt, Ticket } from "lucide-react";
import {
    ConventionRegistrationData,
    getTicketBreakdown,
    calculateOrderTotal,
    TICKET_PRICES,
    TicketType,
} from "@/lib/schemas/convention-registration";
import { Control } from "react-hook-form";

interface OrderSummaryProps {
    control: Control<ConventionRegistrationData>;
}

export default function OrderSummary({ control }: OrderSummaryProps) {
    // useWatch is more reliable for watching nested array fields
    const attendees = useWatch({
        control,
        name: "attendees",
    });

    // Filter only attendees with valid ticket types
    const validAttendees = (attendees || []).filter(
        (a) => a.ticketType && a.ticketType in TICKET_PRICES
    );

    const breakdown = getTicketBreakdown(validAttendees);
    const total = calculateOrderTotal(validAttendees);

    return (
        <div className="bg-white p-5 rounded-2xl sticky top-4">
            <div className="flex items-center gap-2 mb-4">
                <Receipt className="h-5 w-5 text-asi-blue" />
                <h2 className="font-medium text-asi-blue text-lg">Order Summary</h2>
            </div>

            {breakdown.length === 0 ? (
                <p className="text-gray-500 text-sm">Select ticket types to see your order summary</p>
            ) : (
                <>
                    <div className="space-y-3 mb-4">
                        {breakdown.map((item) => (
                            <div key={item.type} className="flex justify-between items-center text-sm">
                                <div className="flex items-center gap-2">
                                    <Ticket className="h-4 w-4 text-gray-400" />
                                    <span>
                                        {item.label} x {item.count}
                                    </span>
                                </div>
                                <span className="font-medium">
                                    {item.subtotal === 0 ? "Free" : `£${item.subtotal}`}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="border-t pt-4">
                        <div className="flex justify-between items-center">
                            <span className="font-semibold text-lg">Total</span>
                            <span className="font-bold text-xl text-asi-blue">
                                {total === 0 ? "Free" : `£${total}`}
                            </span>
                        </div>
                        {total === 0 && breakdown.length > 0 && (
                            <p className="text-green-600 text-sm mt-2">
                                No payment required for this registration
                            </p>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}
