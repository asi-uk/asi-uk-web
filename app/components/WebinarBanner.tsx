'use client';

import Image from 'next/image';
import Script from 'next/script';
import { Calendar, Video } from 'lucide-react';

export default function WebinarBanner() {
    return (
        <>
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 flex flex-col md:flex-row gap-6 md:gap-10 items-center">
                {/* Poster */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                    <Image
                        src="https://res.cloudinary.com/disrkguox/image/upload/v1774383034/friday-webinar-keith-square_xk9maf.png"
                        width={600}
                        height={600}
                        alt="From the Ground Up — Session #1 with Keith Detwieler"
                        className="w-full h-auto rounded-xl shadow-md"
                    />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
                    <span className="bg-asi-blue/10 text-asi-blue text-sm font-medium px-4 py-1 rounded-full">
                        Upcoming Webinar
                    </span>

                    <h2 className="text-2xl md:text-3xl font-bold text-asi-blue">
                        From the Ground Up
                    </h2>

                    <p className="text-slate-600">
                        A live webinar series where ministries share the stories behind how they started, how they were built, and what they&apos;ve learned along the way — followed by an open Q&A with the audience.
                    </p>

                    <p className="text-slate-800 font-semibold">
                        Session #1: Keith Detwieler — Little Light Studios
                    </p>

                    <div className="flex items-center gap-2 text-slate-600">
                        <Calendar className="h-5 w-5 text-asi-blue" />
                        <span>10th April 2026, 7:00 PM BST</span>
                        <span className="text-slate-300">|</span>
                        <Video className="h-5 w-5 text-asi-blue" />
                        <span>Online</span>
                    </div>

                    <a
                        href="https://luma.com/event/evt-gAQTS7l6km47wR7"
                        className="luma-checkout--button !bg-asi-blue !text-white hover:!bg-blue-700 !py-3 !px-8 !rounded-lg !font-semibold transition-colors duration-200 inline-flex items-center justify-center gap-2 mt-2"
                        data-luma-action="checkout"
                        data-luma-event-id="evt-gAQTS7l6km47wR7"
                    >
                        Register for Event
                    </a>
                </div>
            </div>

            <Script
                id="luma-checkout"
                src="https://embed.lu.ma/checkout-button.js"
                strategy="lazyOnload"
            />
        </>
    );
}
