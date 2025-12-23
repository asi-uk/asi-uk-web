'use client';

import Link from 'next/link';
import {
    Calendar,
    MapPin,
    Clock,
    UserPlus,
    MessageSquare,
    Music,
    Lightbulb,
    Target,
    HelpingHand,
    PoundSterling,
    Info,
    Merge, Users, Coffee, Presentation, TrendingUp, Heading1, CalendarDays, FolderOpen, Heart, Hammer
} from 'lucide-react';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import React, {useState, useEffect} from "react";
import MainHeader from "@/app/components/MainHeader";
import Footer from "@/app/components/Footer";
import SaveTheDateBanner from "@/app/components/SaveTheDateBanner";

// Note: Metadata should be in a separate layout.tsx or page.tsx file as a server component
// This is a client component so we've removed the metadata export

const ParallaxBackground = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check if we're on mobile
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Run on mount and when window resizes
        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <>
            {/* Fixed Background Image with Parallax Effect */}
            <div
                className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
                style={{
                    backgroundImage: "url('https://res.cloudinary.com/disrkguox/image/upload/w_1920/v1742976209/sam-knight-jhpL88kP7Y8-unsplash_rvxhux.jpg')",
                    backgroundAttachment: isMobile ? "scroll" : "fixed" // Use scroll on mobile
                }}
            />

            {/* Semi-transparent overlay to improve content readability */}
            <div className="fixed top-0 left-0 w-full h-full bg-white/10 z-10"/>
        </>
    );
};

export default function Home() {
    return (
        <div className="relative w-full overflow-x-hidden">
            {/* Background component (stays fixed) */}
            <ParallaxBackground/>

            {/* Save the Date Banner - 2026 Convention */}
            <SaveTheDateBanner />

            {/* Membership Section */}
            <section className="relative z-20 w-full bg-white/90 backdrop-blur-md">
                <div className="w-full max-w-3xl mx-auto flex flex-col px-4 py-12 md:py-16">
                    <div className="flex flex-col items-center text-center">
                        <div className="flex items-center mb-4 md:mb-6">
                            <Merge className="mr-2 h-5 w-5 md:h-6 md:w-6 text-asi-blue"/>
                            <h2 className="text-2xl md:text-3xl text-asi-blue font-bold leading-none">Join ASI</h2>
                        </div>
                        <p className="text-sm md:text-base mb-6 max-w-2xl">
                            Are you an Adventist professional, entrepreneur, or ministry leader with a desire to spread
                            the love of Christ in your sphere of influence? ASI UK is designed specifically for you.
                        </p>
                        <div>
                            <Link
                                href="/membership"
                                className="bg-asi-blue hover:bg-blue-700 text-white py-2 px-6 rounded-lg font-medium transition-colors duration-200"
                            >
                                Membership Information
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* First Section - Project Fundraising Call to Action */}
            <section className="relative z-20 flex items-center justify-center w-full my-10 md:my-8 md:mt-12 px-4 md:py-0">
                <div
                    className="w-full max-w-3xl mx-auto flex flex-col gap-6 md:gap-10 bg-asi-darkBlue/80 rounded-2xl backdrop-blur-md p-6 md:px-10 shadow">
                    {/* Header */}
                    <div className="flex flex-col items-center justify-center w-full gap-6 mt-6">
                        <div className="flex items-center gap-3">
                            <Hammer className="h-8 w-8 text-white" />
                            <h1 className="text-3xl md:text-4xl text-white font-bold text-center">Support ASI Projects</h1>
                        </div>
                    </div>

                    {/* Horizontal divider */}
                    <div className="w-full h-px bg-white/20"></div>

                    <div className="text-center">
                        <p className="text-lg md:text-xl text-white font-medium mb-4">
                            Help fund life-changing ministry projects across the UK
                        </p>
                        <p className="text-sm md:text-base text-white/90 font-light mb-6">
                            Your donation directly supports ASI UK members who are making a difference in their communities through evangelism, outreach, and ministry initiatives. Every contribution helps spread the Gospel and transforms lives.
                        </p>
                    </div>

                    {/* Call to Action Buttons */}
                    <div className="w-full flex flex-col gap-3 justify-center items-center mb-6">
                        <Link
                            href="/donate"
                            className="bg-white text-asi-blue hover:bg-blue-50 py-3 px-8 rounded-2xl font-semibold text-lg transition-all duration-200 text-center w-64 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            <Heart className="h-5 w-5" />
                            Donate Now
                        </Link>
                        <Link
                            href="/projects"
                            className="bg-white/10 rounded-2xl hover:bg-white/20 text-white py-2 px-6 inline-block font-medium transition-colors duration-200 text-center w-64 flex items-center justify-center gap-2"
                        >
                            <FolderOpen className="h-4 w-4" />
                            View Projects
                        </Link>
                        <Link
                            href="/convention"
                            className="bg-white/10 rounded-2xl hover:bg-white/20 text-white py-2 px-6 inline-block font-medium transition-colors duration-200 text-center w-64 flex items-center justify-center gap-2"
                        >
                            <CalendarDays className="h-4 w-4" />
                            Convention Info
                        </Link>
                    </div>

                </div>
            </section>

            <section className="relative z-20 flex items-center justify-center w-full my-10 md:my-16 px-4 md:py-0">
                <div
                    className="w-full max-w-3xl mx-auto flex flex-col gap-6 md:gap-10 bg-white/90 rounded-2xl backdrop-blur-md p-6 md:px-10 shadow">

                    <div className="flex items-center">
                        {/*<Info className="mr-2 h-5 w-5 md:h-6 md:w-6 text-asi-blue"/>*/}
                        <h2 className="text-2xl md:text-3xl text-asi-blue font-bold leading-none">About ASI</h2>
                    </div>

                    <p className={""}>Adventist-laymen's Services and Industries (ASI) is a dynamic organization that unites Seventh-day Adventist business owners, professionals, and supporting ministries in a shared mission. The organization is dedicated to supporting the Seventh-day Adventist Church through a unique approach that integrates faith with professional life.</p>

                    {/* Call to Action Button in its own row */}
                    <div className="flex justify-center mt-2">
                        <Link
                            href="/about"
                            className="bg-asi-blue hover:bg-blue-700 text-white py-2 px-8 rounded-lg inline-block font-medium transition-colors duration-200"
                    >
                        Learn More
                    </Link>
                </div>
        </div>
</section>
</div>
)
}