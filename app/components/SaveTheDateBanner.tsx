'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar, MapPin, CalendarDays } from 'lucide-react';
import CountdownTimer from '@/app/components/CountdownTimer';
import { CONVENTION_2026 } from '@/data/convention';

const SaveTheDateBanner: React.FC = () => {
    const conventionDate = CONVENTION_2026.startDate;

    return (
        <section className="relative z-20 flex items-center justify-center w-full my-8 md:my-12 md:mb-16 px-4 md:py-0">
            <div className="w-full max-w-3xl mx-auto flex flex-col gap-6 bg-gradient-to-br from-asi-darkBlue to-asi-blue rounded-2xl backdrop-blur-md p-6 md:px-10 shadow-lg">

                {/* Save the Date Badge */}
                <div className="flex justify-center">
                    <span className="bg-white/20 text-white text-sm font-medium px-4 py-1 rounded-full">
                        Save the Date
                    </span>
                </div>

                {/* Event Title */}
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl text-white font-bold">
                        {CONVENTION_2026.title}
                    </h2>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-white/20"></div>

                {/* Event Details: Date & Location */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {/* Date */}
                    <div className="flex items-center justify-center gap-3 text-white">
                        <Calendar className="h-6 w-6 text-white/80" />
                        <div>
                            <p className="text-lg md:text-xl font-semibold">{CONVENTION_2026.dates}</p>
                            <p className="text-sm text-white/70">{CONVENTION_2026.daysOfWeek}</p>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-center justify-center gap-3 text-white">
                        <MapPin className="h-6 w-6 text-white/80" />
                        <div>
                            <p className="text-lg md:text-xl font-semibold">{CONVENTION_2026.venue}</p>
                            <p className="text-sm text-white/70">{CONVENTION_2026.venueLocation}</p>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-white/20"></div>

                {/* Countdown Timer */}
                <div className="py-2">
                    <CountdownTimer
                        targetDate={conventionDate}
                        numberClassName="font-bold text-3xl md:text-5xl text-white"
                        labelClassName="text-xs md:text-sm text-white/70 uppercase tracking-wider"
                        gridClassName="grid grid-cols-4 gap-4 md:gap-8"
                        itemClassName="text-center"
                    />
                </div>

                {/* CTA Button */}
                {/*<div className="flex justify-center mt-2 mb-4">*/}
                {/*    <Link*/}
                {/*        href="/convention"*/}
                {/*        className="bg-white text-asi-blue hover:bg-blue-50 py-3 px-8 rounded-2xl font-semibold text-lg transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"*/}
                {/*    >*/}
                {/*        <CalendarDays className="h-5 w-5" />*/}
                {/*        Learn More*/}
                {/*    </Link>*/}
                {/*</div>*/}
            </div>
        </section>
    );
};

export default SaveTheDateBanner;
