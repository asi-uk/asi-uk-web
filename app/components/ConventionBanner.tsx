'use client';

import { Calendar, MapPin } from 'lucide-react';
import CountdownTimer from '@/app/components/CountdownTimer';
import { CONVENTION_2026 } from '@/data/convention';

export default function ConventionBanner() {
    return (
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 flex flex-col items-center gap-6 h-full">
            {/* Save the Date Badge */}
            <span className="bg-asi-blue/10 text-asi-blue text-sm font-medium px-4 py-1 rounded-full">
                Save the Date
            </span>

            {/* Event Title */}
            <h2 className="text-2xl md:text-3xl text-asi-blue font-bold text-center">
                {CONVENTION_2026.title}
            </h2>

            <p className="text-slate-600 text-center">
                Join fellow Adventist professionals and ministry leaders for a weekend of inspiration, networking, and spiritual growth.
            </p>

            {/* Event Details: Date & Location */}
            <div className="grid grid-cols-2 gap-4 w-full">
                <div className="flex flex-col items-center gap-2">
                    <Calendar className="h-5 w-5 text-asi-blue" />
                    <p className="text-base md:text-lg font-semibold text-center text-slate-800">{CONVENTION_2026.dates}</p>
                    <p className="text-sm text-slate-500">{CONVENTION_2026.daysOfWeek}</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <MapPin className="h-5 w-5 text-asi-blue" />
                    <p className="text-base md:text-lg font-semibold text-center text-slate-800">{CONVENTION_2026.venue}</p>
                    <p className="text-sm text-slate-500">{CONVENTION_2026.venueLocation}</p>
                </div>
            </div>

            {/* Countdown Timer */}
            <div className="bg-slate-50 rounded-xl p-4 w-full">
                <CountdownTimer
                    targetDate={CONVENTION_2026.startDate}
                    numberClassName="font-bold text-2xl md:text-4xl text-asi-blue"
                    labelClassName="text-xs text-slate-500 uppercase tracking-wider"
                    gridClassName="grid grid-cols-4 gap-3 md:gap-6"
                    itemClassName="text-center"
                />
            </div>
        </div>
    );
}
