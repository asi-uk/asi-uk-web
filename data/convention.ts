export interface Presenter {
    name: string;
    imageUrl: string;
    title?: string;
    organization?: string;
    bio?: string;
}

export interface ConventionVideo {
    embedUrl: string;
    watchUrl: string;
    title: string;
}

export interface FAQItem {
    question: string;
    answer: string;
    linkHref?: string;
    linkText?: string;
}

export const CONVENTION_2026 = {
    title: "ASI UK Convention 2026",
    theme: "Faith at Work",
    dates: "20–21 June 2026",
    datesShort: "20–21 JUNE",
    daysOfWeek: "Saturday – Sunday",
    startDate: new Date('2026-06-20T09:00:00'),
    venue: "Newbold College",
    venueShort: "NEWBOLD COLLEGE",
    venueLocation: "Bracknell, England",
    venueAddress: "St Mark's Road, Binfield, Bracknell RG42 4AN",
    venueMapUrl: "https://maps.app.goo.gl/eeoNP3RPthnxMV4m8",
    posterUrl: "https://res.cloudinary.com/disrkguox/image/upload/v1776197755/convention2026-poster-v2_cxlwty.png",
    heroImageUrl: "https://res.cloudinary.com/disrkguox/image/upload/v1776197755/convention2026-poster-v2_cxlwty.png",
    registrationUrl: "/convention/register",
    description:
        "Join ASI UK on 20–21 June 2026 at Newbold College for Faith at Work — a weekend exploring how Adventist professionals, entrepreneurs, and ministry leaders can integrate faith with daily work and mission.",
    presenters: [
        {
            name: "Jesse Zwiker",
            title: "Founder & President",
            organization: "Hyve International",
            imageUrl: "https://res.cloudinary.com/disrkguox/image/upload/v1776201860/Jesse-Zwiker-1_kp2lc8.jpg",
        },
        {
            name: "Dusanka Rancic",
            title: "Editor-in-Chief",
            organization: "Stanborough Press",
            imageUrl: "https://res.cloudinary.com/disrkguox/image/upload/v1776202193/Stanborough-Press-Dusanka-Rancic-scaled_3_l7awvc.png",
        },
    ] satisfies Presenter[],
    programmePreview: [
        {
            day: "Saturday 20 June",
            dayShort: "SAT 20 JUN",
            sessions: [
                { time: "10:00", title: "Welcome & Panel Discussion" },
                { time: "11:30", title: "Main Service" },
                { time: "14:30", title: "Seminars & Mixer" },
                { time: "Evening", title: "Informal Gathering" },
            ],
        },
        {
            day: "Sunday 21 June",
            dayShort: "SUN 21 JUN",
            sessions: [
                { time: "10:00", title: "Breakout Training Seminars" },
                { time: "12:00", title: "Final Charge & Goodbyes" },
                { time: "14:00", title: "AGM (Members only)" },
            ],
        },
    ],
    faq: [
        {
            question: "What is Faith at Work?",
            answer: "Faith at Work is the theme of the ASI UK Convention 2026 — a weekend gathering focused on how Adventist professionals, entrepreneurs, and ministry leaders can live out their faith in daily work and mission.",
        },
        {
            question: "When and where is the convention?",
            answer: "Saturday 20 to Sunday 21 June 2026 at Newbold College, Bracknell, England.",
        },
        {
            question: "How do I register?",
            answer: "Registration is open on our website — click any Register Now button or visit the registration page directly.",
            linkHref: "/convention/register",
            linkText: "registration page",
        },
        {
            question: "Is accommodation available?",
            answer: "Yes — accommodation is available at Newbold College and should be booked directly with the college.",
        },
        {
            question: "Is parking available?",
            answer: "Yes — parking is available on-site at Newbold College free of charge.",
        },
        {
            question: "What's included with my ticket?",
            answer: "Light refreshments throughout each day are included with your ticket. Meals can be arranged separately at the Newbold dining hall by direct arrangement with the college.",
        },
        {
            question: "How do I qualify for the member discount?",
            answer: "The member discount is automatically available to current ASI UK members. If you're not yet a member, visit our membership page to learn more.",
            linkHref: "/membership",
            linkText: "membership page",
        },
        {
            question: "Can my ministry or organisation have a booth?",
            answer: "Ministries and organisations interested in having a booth at the convention should contact our VP for Evangelism, Tashana Samuels, at evangelism@asiuk.org.",
            linkHref: "mailto:evangelism@asiuk.org",
            linkText: "evangelism@asiuk.org",
        },
        {
            question: "What is ASI UK?",
            answer: "ASI UK (Adventist-laymen's Services and Industries) unites Seventh-day Adventist business owners, professionals, and supporting ministries in a shared mission to integrate faith with professional life.",
        },
    ] satisfies FAQItem[],
} as const;

export const CONVENTION_2025 = {
    title: "ASI UK Convention 2025",
    date: "21 June, 2025",
    time: "9:00 AM - 7:00 PM",
    venue: "Mercure Daventry Court Hotel",
    venueAddress: "Northamptonshire NN11 OSG",
    venueMapUrl: "https://maps.app.goo.gl/ejgjnVKhYuz6ZyD7A",
    logoUrl: "https://res.cloudinary.com/disrkguox/image/upload/w_600,e_replace_color:black/v1743532070/Logo-2_jdykpt.png",
    presenters: [
        {
            name: "Johnny Wong",
            imageUrl: "https://res.cloudinary.com/disrkguox/image/upload/w_200/v1743533994/jwong_qa4c9p_4e7a8c.jpg",
        },
        {
            name: "Christian Salcianu",
            imageUrl: "https://res.cloudinary.com/disrkguox/image/upload/w_200/v1743534051/csalcianu_mlopct_dddaf5.jpg",
        },
    ] satisfies Presenter[],
    tickets: {
        general: { label: "General Admission", price: 25, description: "Standard admission for all attendees" },
        member: { label: "ASI Member", price: 15, description: "For registered ASI UK members" },
    },
    promoVideos: [
        {
            embedUrl: "https://www.youtube.com/embed/bfsRAXffX54?si=9Hp7uGju9ekU3gqS",
            watchUrl: "https://www.youtube.com/watch?v=bfsRAXffX54",
            title: "ASI UK Convention Promo Video",
        },
        {
            embedUrl: "https://www.youtube.com/embed/yllqBWrWAYY?si=9-Xj5Jtn61YutP97",
            watchUrl: "https://www.youtube.com/watch?v=yllqBWrWAYY",
            title: "ASI UK Re-Connect Conference Preview - Johnny Wong",
        },
        {
            embedUrl: "https://www.youtube.com/embed/tWmVqM7lhns?si=Mr1pkXOpqXP8RqaR",
            watchUrl: "https://www.youtube.com/watch?v=tWmVqM7lhns",
            title: "ASI UK Re-Connect Conference - Invitation from the President",
        },
    ] satisfies ConventionVideo[],
    faq: [
        {
            question: "What is ASI UK?",
            answer: "ASI UK (Adventist-laymen's Services and Industries) is an organization that unites Seventh-day Adventist business owners, professionals, and supporting ministries in a shared mission to integrate faith with professional life.",
        },
        {
            question: "Is lunch included with my ticket?",
            answer: "Yes, a full lunch and refreshments throughout the day are included with all ticket types.",
        },
        {
            question: "How do I qualify for the member discount?",
            answer: "The member discount is automatically available to current ASI UK members. If you're not yet a member but would like to join, please visit our membership page for more information.",
            linkHref: "/membership",
            linkText: "membership page",
        },
        {
            question: "Is there parking available at the venue?",
            answer: "Yes, the Mercure Daventry Court Hotel offers free parking for all attendees.",
        },
    ] satisfies FAQItem[],
    marketingMaterials: {
        poster: {
            previewUrl: "https://res.cloudinary.com/disrkguox/image/upload/w_300/v1746474986/ASI-Convention-Poster_v2_oyccfb.jpg",
            downloadPdfUrl: "https://res.cloudinary.com/disrkguox/image/upload/v1746474988/ASI-Convention-Poster_v2_droqoo.pdf",
            socialMediaUrl: "https://res.cloudinary.com/disrkguox/image/upload/v1743022100/ASI-Convention-social-media_lubbl3.jpg",
        },
        bulletinAnnouncement: "Join ASI UK for our first major event on Sabbath, June 21, 2025 at Mercure Daventry Court Hotel. Learn practical approaches to marketplace evangelism from renowned speaker Johnny Wong. Connect with fellow Christian professionals, entrepreneurs, and ministry leaders who are passionate about sharing Christ in the marketplace. Tickets: £25 (general), £15 (ASI members). Registration includes lunch and refreshments. For more information and to register, visit asiuk.org/convention.",
    },
} as const;
