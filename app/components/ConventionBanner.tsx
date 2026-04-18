'use client';

import Link from 'next/link';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import CountdownTimer from '@/app/components/CountdownTimer';
import { CONVENTION_2026 } from '@/data/convention';

export default function ConventionBanner() {
    return (
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 flex flex-col items-center gap-5 h-full">
            {/* Save the Date Badge */}
            <span className="bg-asi-blue/10 text-asi-blue text-sm font-medium px-4 py-1 rounded-full">
                Save the Date
            </span>

            {/* Theme + Title */}
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl text-asi-blue font-bold leading-tight">
                    {CONVENTION_2026.theme}
                </h2>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-slate-500">
                    {CONVENTION_2026.title}
                </p>
            </div>

            <p className="text-slate-600 text-center">
                A weekend for Adventist professionals, entrepreneurs, and ministry leaders to explore
                how faith shapes daily work and mission.
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

            {/* CTA */}
            <Link
                href="/convention"
                className="mt-auto inline-flex items-center justify-center gap-2 w-full bg-asi-blue text-white hover:bg-asi-darkBlue py-3 px-6 rounded-lg font-semibold transition-colors duration-200"
            >
                View Event Details
                <ArrowRight className="h-4 w-4" />
            </Link>
        </div>
    );
}
