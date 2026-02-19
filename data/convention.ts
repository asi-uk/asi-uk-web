export interface Presenter {
    name: string;
    imageUrl: string;
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
    dates: "20-21 June 2026",
    daysOfWeek: "Saturday - Sunday",
    startDate: new Date('2026-06-20T09:00:00'),
    venue: "Newbold College",
    venueLocation: "Bracknell, England",
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
