import Image from 'next/image'
import dynamic from 'next/dynamic'; // Import dynamic from 'next/dynamic'
import Link from 'next/link';
import EventIcon from '@mui/icons-material/Event';
import HistoryIcon from '@mui/icons-material/History';
import {Calendar, Hammer, Info, Merge, PoundSterling} from "lucide-react"
import CTARounded from "@/app/components/CTARounded"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import {Card, CardContent} from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import {cn} from "@/lib/utils"
import React from "react";
import MainHeader from "@/app/components/MainHeader";
import Footer from "@/app/components/Footer";

export const metadata = {
    title: "ASI UK | Adventist-laymen‘s Services and Industries",
    description:
        "ASI is an organisation comprised of members of the Seventh-day Adventist church who are engaged in spreading the gospel of Christ to the world.",
    keywords: [
        "ASI",
        "ASI UK",
        "ASI-UK",
        "adventist",
        "adventist uk",
        "adventist laymen's services and industries",
        "ministry",
        "ministries",
    ],
    openGraph: {
        url: "https://www.asiuk.org",
        type: "website",
        title: "ASI UK | Adventist-laymen‘s Services and Industries",
        description:
            "ASI is an organisation comprised of members of the Seventh-day Adventist church who are engaged in spreading the gospel of Christ to the world.",
        images: [
            {
                url: "https://www.asiuk.org/thumbnail.png",
                width: 1200,
                height: 630,
                alt: "ASIUK"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "ASI UK | Adventist-laymen‘s Services and Industries",
        description:
            "ASI is an organisation comprised of members of the Seventh-day Adventist church who are engaged in spreading the gospel of Christ to the world.",
        images: [
            {
                url: "https://www.asiuk.org/thumbnail.png",
                width: 1200,
                height: 630,
                alt: "ASIUK"
            }
        ]
    },
}

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
]

const ParallaxBackground = () => {
    return (
        <>
            {/* Fixed Background Image with Parallax Effect */}
            <div
                className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-0 overscroll"
                style={{
                    backgroundImage: "url('https://res.cloudinary.com/disrkguox/image/upload/w_1920/v1742976209/sam-knight-jhpL88kP7Y8-unsplash_rvxhux.jpg')",
                    backgroundAttachment: "fixed" // This creates the parallax effect
                }}
            />

            {/* Semi-transparent overlay to improve content readability */}
            <div className="fixed top-0 left-0 w-full h-full bg-white/10 z-10"/>
        </>
    );
};

export default function Home() {

    return (
        <div className="relative w-screen no-doc-overscroll">
            {/* Background component (stays fixed) */}
            <ParallaxBackground/>

            {/* First Section - Full height with Carousel */}
            <section className="relative z-20 flex items-center justify-center w-full my-40">
                <div
                    className="w-full max-w-5xl mx-auto flex gap-10 background bg-white/80 rounded-2xl backdrop-blur-md p-10 shadow">
                    <Image
                        src="https://res.cloudinary.com/disrkguox/image/upload/w_400/v1743022100/IMG_3649_sir8gj.jpg"
                        width={400}
                        height={1000}
                        alt={"ASI Convention Poster"}
                    />
                    <div>
                        <h1 className="text-4xl text-asi-blue font-bold">ASI UK Convention</h1>
                        <h1 className="text-2xl text-asi-grey font-light mb-6">21 June, 2025</h1>
                        <p>Come join us for the first annual ASI UK convention. Learn how God is working through your
                            fellow lay members of the church to share Christ in the marketplace. Special presenters will
                            include Johnny Wong and Christian Salcianu. Don't miss out on this opportunity to network
                            with like-minded Adventist professionals, entrepreneurs, and ministries who share the same
                            mission of sharing God's love and the exciting message of Jesus' soon return!</p>
                        <Link
                            href="/convention"
                            className="bg-asi-blue hover:bg-blue-700 text-white py-2 px-4 rounded mt-4 inline-block"
                        >
                            Register Now
                        </Link>
                    </div>

                </div>
            </section>

            {/* Second Section - Below the viewport on initial load */}
            <section className="relative z-20 w-full bg-white/90 backdrop-blur-md">
                <div className="w-full max-w-5xl mx-auto px-4 py-16">
                    <div className="flex items-center mb-6">
                        <Hammer className="mr-2 h-6 w-6 text-asi-blue"/>
                        <h2 className="text-3xl text-asi-blue font-bold leading-none">Project Funding</h2>
                    </div>
                    <p className="text-lg mb-4">
                        Do you have a ministry or evangelistic project that needs support? ASI UK has a project funding
                        programme designed specifically to financially support laypeople with a passion for ministry.
                        The 2025 ASI UK project funding application process is now open.
                    </p>
                    <Link
                        href="/projects"
                        className="bg-asi-blue hover:bg-blue-700 text-white py-2 px-4 rounded mt-4 inline-block"
                    >
                        Learn More
                    </Link>
                </div>
            </section>

            {/* Third Section - Even further down */}
            <section className="relative z-20 flex items-center justify-center w-full my-40">
                <div
                    className="w-full max-w-5xl mx-auto background bg-white/80 rounded-2xl backdrop-blur-md p-10 shadow">
                    <h2 className="text-3xl text-asi-blue font-bold mb-6">Apply for Membership</h2>
                    <p className="text-lg mb-4">
                        Are you an Adventist professional, entrepreneur, or ministry leader with a desire to spread
                        the love of Christ in your sphere of influence? ASI UK is designed specifically for you.
                    </p>
                    <Link
                        href="/membership"
                        className="bg-asi-blue hover:bg-blue-700 text-white py-2 px-4 rounded mt-4 inline-block"
                    >
                        Membership Information
                    </Link>
                </div>
            </section>
        </div>
    )
}