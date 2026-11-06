import type { Presenter } from "@/data/convention";

// Faith & Work — free networking event for Christian professionals and
// entrepreneurs. Registration is handled by /events/faith-and-work and stored
// in Notion (see lib/notion-faith-and-work.ts).

export const FAITH_AND_WORK_2026 = {
    id: "faith-and-work-2026", // written to the Notion "Event" select
    title: "Faith & Work",
    tagline: "Join Christian Professionals and Entrepreneurs",
    description:
        "An afternoon of networking, inspirational insights from business leaders, and Q&A for Christian professionals, entrepreneurs, students and ministry leaders.",
    dateLabel: "Sunday 29th November 2026",
    dateShort: "Sun 29 Nov",
    timeLabel: "11:00am – 3:00pm",
    startDate: new Date("2026-11-29T11:00:00Z"), // GMT
    endDate: new Date("2026-11-29T15:00:00Z"),
    venue: "Camp Hill SDA Church",
    venueAddress: "198 Camp Hill, Birmingham B12 0JP",
    venueMapUrl: "https://www.google.com/maps/search/?api=1&query=Camp+Hill+SDA+Church+198+Camp+Hill+Birmingham+B12+0JP",
    path: "/events/faith-and-work",
    highlights: ["Networking", "Inspirational insights from business leaders", "Q&A", "Meet new people"],
    refreshments: "Light refreshments provided. Food available to buy on the day.",
    donations:
        "Entry is free. A voluntary donation will be collected on the day to help cover the cost of the event.",
    // Event artwork (networking photo). posterUrl is used for the homepage
    // feature card and social share image; heroImageUrl sits behind the hero
    // gradient. Leave either empty to fall back to the gradient-only layout.
    posterUrl: "https://res.cloudinary.com/disrkguox/image/upload/c_fill,g_auto,w_1200,h_630/v1793962135/ASI_UK_-_IMAGE_usgbdg.jpg",
    heroImageUrl: "https://res.cloudinary.com/disrkguox/image/upload/w_1920/v1793962135/ASI_UK_-_IMAGE_usgbdg.jpg",
    speakers: [
        {
            name: "Adrian Mateas",
            title: "Entrepreneur | Dentist | Business Owner",
            imageUrl: "https://res.cloudinary.com/disrkguox/image/upload/c_fill,g_face,ar_1:1,w_600/v1793962135/Andrea_1_anornk.jpg",
        },
        {
            name: "Craig Gooden",
            title: "Elder | IT Specialist | Evangelist",
            imageUrl: "https://res.cloudinary.com/disrkguox/image/upload/c_crop,g_center,w_0.92,h_0.92/w_600/v1793962135/Craig_Gooden_adiwl0.png",
        },
        {
            name: "Hugh Gray",
            title: "Entrepreneur | Construction | Engineering",
            imageUrl: "https://res.cloudinary.com/disrkguox/image/upload/c_crop,g_center,w_0.92,h_0.92/w_600/v1793962136/Hugh_Gray_c2y77b.png",
        },
    ] satisfies Presenter[],
} as const;

/** Registration stays open until the event ends. */
export function isFaithAndWorkRegistrationOpen(now: Date = new Date()): boolean {
    return now.getTime() < FAITH_AND_WORK_2026.endDate.getTime();
}

/** Google Calendar "add event" link for confirmation page + email. */
export function getFaithAndWorkCalendarUrl(): string {
    const fmt = (d: Date) => d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
    const e = FAITH_AND_WORK_2026;
    const params = new URLSearchParams({
        action: "TEMPLATE",
        text: `ASI UK — ${e.title}`,
        dates: `${fmt(e.startDate)}/${fmt(e.endDate)}`,
        details: `${e.tagline}. https://www.asiuk.org${e.path}`,
        location: `${e.venue}, ${e.venueAddress}`,
    });
    return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
