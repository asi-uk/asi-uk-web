'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import { FTGU_SERIES_DESCRIPTION, getUpcomingFtguEvents } from '@/data/events';
import FtguEventCard from '@/app/components/FtguEventCard';

const FTGU_PAGE_PATH = '/events/from-the-ground-up';

export default function EventsCarousel() {
    const events = getUpcomingFtguEvents();

    return (
        <section className="w-full bg-white">
            <div className="max-w-5xl mx-auto px-4 py-16 md:py-20">
                <div className="text-center mb-10">
                    <span className="bg-asi-blue/10 text-asi-blue text-sm font-medium px-4 py-1 rounded-full">
                        {events.length > 0 ? 'Upcoming Events' : 'Webinar Series'}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-asi-blue mt-4">
                        From the Ground Up
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto mt-3">
                        {FTGU_SERIES_DESCRIPTION}
                    </p>
                </div>

                {events.length > 0 && (
                    <Carousel opts={{ align: 'start' }} className="relative">
                        <CarouselContent>
                            {events.map((event) => (
                                <CarouselItem
                                    key={event.id}
                                    className="basis-full sm:basis-1/2 lg:basis-1/3"
                                >
                                    <FtguEventCard event={event} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-2 bg-white/90" />
                        <CarouselNext className="right-2 bg-white/90" />
                    </Carousel>
                )}

                <div className="flex justify-center mt-10">
                    <Link
                        href={FTGU_PAGE_PATH}
                        className="inline-flex items-center gap-2 text-asi-blue hover:text-blue-700 font-medium transition-colors"
                    >
                        View all sessions &amp; recordings
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
