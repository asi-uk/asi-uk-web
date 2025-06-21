import Image from 'next/image'
import Link from 'next/link';
import MainHeader from '@/app/components/MainHeader';
import {Heading1, Heading2, Heading3, Heading4, Heading5} from "@/app/components/Headings";
import SimpleTixWidget from "@/app/convention/SimpleTixWidget";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"

import CTARounded from "@/app/components/CTARounded";
import {ChevronDown, Briefcase, Coffee, Users, Lightbulb, FileDown, MapPin, CalendarFold, Calendar} from "lucide-react";
import React from "react";

export const metadata = {
    title: "ASI UK | Convention 2025",
    description:
        "Join us for the annual ASI UK Convention on 21 June, 2025 in Daventry",
    keywords: [
        "ASI UK Convention",
        "Convention",
        "Conference",
        "Convocation",
        "ASI Ministries",
        "ASI",
        "ASI UK",
        "ASI-UK",
    ],
    openGraph: {
        url: "https://asiuk.org/convention",
        type: "website",
        title: "ASI UK | Convention 2025",
        description:
            "Join us for the annual ASI UK Convention on 21 June, 2025 in Daventry",
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
        title: "ASI UK | Projects",
        description:
            "Join us for the annual ASI UK Convention on 21 June, 2025 in Daventry",
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

export default function Convention() {
    return (
        <div className="relative w-full overflow-x-hidden">
            <div className="flex items-center justify-center w-full my-10 md:my-8 md:mb-36 px-4 md:py-0">
                <div className="w-full max-w-3xl mx-auto flex flex-col gap-2 md:gap-3 bg-white/90 rounded-2xl backdrop-blur-md p-6 md:px-10 shadow">
                    {/* Logo */}
                    <div className="w-full flex justify-center">
                        <Image
                            src="https://res.cloudinary.com/disrkguox/image/upload/w_600,e_replace_color:black/v1743532070/Logo-2_jdykpt.png"
                            width={600}
                            height={600}
                            alt={"ASI Convention Logo"}
                            className="w-auto h-auto pb-10 max-h-[150px] object-contain"
                            priority
                        />
                    </div>

                    <div className="flex items-center mb-4">
                        <h2 className="text-2xl md:text-3xl text-asi-blue font-bold leading-none">ASI UK Convention 2025</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
                        <div className="flex flex-col items-center text-center border-2 border-slate-100 rounded-2xl p-5 bg-white/10">
                            <h2 className="flex items-center gap-2 text-asi-blue">
                                <CalendarFold className="h-5 w-5 transition duration-300 ease-in-out group-hover:translate-x-2 inline-block"/>
                                <span className="text-lg md:text-xl font-bold">When</span>
                            </h2>
                            <h3 className="text-2xl font-medium h-full flex items-center">21 June<span className="hidden md:inline">, 2025</span>
                            </h3>
                            <p>9:00 AM - 7:00 PM</p>
                        </div>

                        <a target="_blank" href="https://maps.app.goo.gl/ejgjnVKhYuz6ZyD7A" rel="noopener noreferrer">
                            <div className="flex flex-col items-center text-center border-2 border-slate-100 rounded-2xl p-5 transition duration-300 ease-out hover:bg-slate-100 bg-white/10">
                                <h2 className="flex items-center gap-2 text-asi-blue">
                                    <MapPin className="h-5 w-5 transition duration-300 ease-in-out group-hover:translate-x-2 inline-block"/>
                                    <span className="text-lg md:text-xl font-bold">Where</span>
                                </h2>
                                <h3 className="text-2xl font-medium h-full">Daventry
                                </h3>
                                <p className="text-base font-medium">Mercure Daventry Court Hotel</p>
                                <p className="font-light">Northamptonshire NN11 OSG</p>
                            </div>
                        </a>
                    </div>

                    <div className="text-sm md:text-base mb-4">
                        <p>Join ASI UK for our first major event on Sabbath, June 21, 2025, featuring renowned speaker
                            Johnny Wong, who will share powerful insights on evangelism in today's world. As part of the Adventist-laymen's
                            Services and Industries network, we're bringing together professionals, entrepreneurs, and
                            ministry leaders who are passionate about sharing Christ through their business and
                            professional lives.</p>
                    </div>

                    {/* Presenters Section */}
                    <div className="w-full mb-5">
                        <h3 className="text-lg font-normal text-asi-blue mb-3 text-center">Featured Presenters</h3>
                        <div className="flex flex-wrap justify-center gap-10">
                            <div className="flex flex-col items-center">
                                <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-300 border-2 border-asi-blue mb-2">
                                    <Image
                                        src="https://res.cloudinary.com/disrkguox/image/upload/w_200/v1743533994/jwong_qa4c9p_4e7a8c.jpg"
                                        width={200}
                                        height={200}
                                        alt="Johnny Wong"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <span className="text-sm text-center">Johnny Wong</span>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-300 border-2 border-asi-blue mb-2">
                                    <Image
                                        src="https://res.cloudinary.com/disrkguox/image/upload/w_200/v1743534051/csalcianu_mlopct_dddaf5.jpg"
                                        width={200}
                                        height={200}
                                        alt="Christian Salcianu"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <span className="text-sm text-center">Christian Salcianu</span>
                            </div>
                        </div>
                    </div>

                    <div className="w-full">
                        <h3 className="text-lg font-normal text-asi-blue mb-3">This full-day event offers valuable opportunities to:</h3>
                        <ul className="space-y-3 text-sm md:text-base">
                            <li className="flex items-start">
                                <Lightbulb className="h-4 w-4 text-asi-blue mr-2 mt-1"/>
                                <span>Learn practical approaches to marketplace evangelism</span>
                            </li>
                            <li className="flex items-start">
                                <Users className="h-4 w-4 text-asi-blue mr-2 mt-1"/>
                                <span>Connect with fellow Christian professionals</span>
                            </li>
                            <li className="flex items-start">
                                <Coffee className="h-4 w-4 text-asi-blue mr-2 mt-1"/>
                                <span>Enjoy fellowship over a provided lunch and refreshments</span>
                            </li>
                        </ul>
                    </div>

                    {/* Video Embed Section */}
                    <div className="my-8 flex justify-center">
                        <div className="w-full max-w-lg aspect-video">
                            <iframe
                                className="w-full h-full rounded-lg shadow-md"
                                src="https://www.youtube.com/embed/bfsRAXffX54?si=9Hp7uGju9ekU3gqS"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen>
                            </iframe>
                        </div>
                    </div>

                    <div className="w-full py-4">
                        <h3 className="text-lg font-normal text-asi-blue mb-3 text-center">Ticket Options</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 max-w-lg mx-auto">
                            {/* General Admission Ticket */}
                            <div
                                className="flex flex-col border-2 border-slate-100 rounded-2xl p-5 bg-white/10 text-center">
                                <h4 className="text-asi-blue font-bold text-xl mb-2">General Admission</h4>
                                <div className="text-3xl font-bold mb-2 text-slate-700">£25</div>
                                <p className="text-sm text-slate-600 mb-2">Standard admission for all attendees</p>
                            </div>

                            {/* ASI Member Ticket */}
                            <div
                                className="flex flex-col border-2 border-asi-blue rounded-2xl p-5 shadow-md bg-white text-center relative">
                                <div
                                    className="absolute -top-3 left-0 right-0 mx-auto w-max bg-asi-blue text-white text-xs py-1 px-3 rounded-full">
                                    MEMBER DISCOUNT
                                </div>
                                <h4 className="text-asi-blue font-bold text-xl mb-2">ASI Member</h4>
                                <div className="text-3xl font-bold mb-2 text-slate-700">£15</div>
                                <p className="text-sm text-slate-600 mb-2">For registered ASI UK members</p>
                            </div>
                        </div>

                        <p className="text-left">Don't miss this chance to be part of ASI UK's growing community of
                            business leaders and
                            professionals dedicated to sharing Christ's message through their work.</p>
                    </div>

                    {/* Schedule Link Section */}
                    <div className="mt-12 mb-6">
                        <h3 className="text-xl font-medium text-asi-blue mb-6 text-center">Programme Schedule</h3>

                        <div className="text-center">
                            <div className="mx-auto">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-sm">
                                    <div className="text-center p-3 bg-slate-50 rounded-lg">
                                        <div className="font-semibold text-asi-blue">Registration</div>
                                        <div className="text-slate-600">9:00 - 9:45 AM</div>
                                    </div>
                                    <div className="text-center p-3 bg-slate-50 rounded-lg">
                                        <div className="font-semibold text-asi-blue">Morning</div>
                                        <div className="text-slate-600">9:45 - 12:30 PM</div>
                                    </div>
                                    <div className="text-center p-3 bg-slate-50 rounded-lg">
                                        <div className="font-semibold text-asi-blue">Lunch</div>
                                        <div className="text-slate-600">12:30 - 2:30 PM</div>
                                    </div>
                                    <div className="text-center p-3 bg-slate-50 rounded-lg">
                                        <div className="font-semibold text-asi-blue">Afternoon</div>
                                        <div className="text-slate-600">2:30 - 7:00 PM</div>
                                    </div>
                                </div>

                                <Link
                                    href="/convention/programme"
                                    className="inline-flex items-center text-asi-blue py-3 px-6 rounded-lg font-medium transition-colors gap-2"
                                >
                                    <Calendar className="h-5 w-5" />
                                    <span>View Full Schedule</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Registration Section */}
                    <div className="bg-slate-50 rounded-2xl flex justify-center my-5 p-4">
                        <SimpleTixWidget/>
                    </div>

                    {/* Marketing Materials Section (Collapsible) */}
                    <div className="my-8 border-t border-b border-slate-200 py-6">
                        <Collapsible className="w-full">
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-medium text-asi-blue">Additional Resources</h3>
                                <CollapsibleTrigger className="group flex items-center space-x-1 rounded-md px-3 py-2 text-sm font-medium text-asi-blue hover:bg-slate-100 transition-colors">
                                    <span>View Marketing Materials</span>
                                    <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                                </CollapsibleTrigger>
                            </div>

                            <CollapsibleContent className="mt-6">
                                <div className="space-y-6">
                                    {/* Poster Preview */}
                                    <div className="border rounded-lg p-4 bg-white shadow-sm">
                                        <h4 className="text-lg font-medium text-asi-blue mb-3">Convention Poster</h4>
                                        <div className="flex flex-col md:flex-row gap-6">
                                            {/* Poster Preview Image */}
                                            <div className="w-full md:w-1/3 flex justify-center">
                                                <div className="relative aspect-[3/4] w-full max-w-[200px] shadow-md rounded-md overflow-hidden">
                                                    <Image
                                                        src="https://res.cloudinary.com/disrkguox/image/upload/w_300/v1746474986/ASI-Convention-Poster_v2_oyccfb.jpg"
                                                        alt="ASI UK Convention Poster Preview"
                                                        width={500}
                                                        height={650}
                                                        className="object-cover"
                                                    />
                                                </div>
                                            </div>

                                            {/* Poster Description and Download */}
                                            <div className="w-full md:w-2/3 flex flex-col">
                                                <p className="text-sm text-slate-600 mb-4">
                                                    Download our official convention poster to display at your church, workplace, or community center.
                                                </p>
                                                <div className="flex flex-wrap gap-3 mt-auto">
                                                    <a
                                                        href="https://res.cloudinary.com/disrkguox/image/upload/v1746474988/ASI-Convention-Poster_v2_droqoo.pdf"
                                                        target="_blank"
                                                        className="bg-asi-blue/10 hover:bg-asi-blue/20 text-asi-blue py-2 px-4 rounded flex items-center gap-2 transition-colors"
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4"
                                                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                                  strokeWidth={2}
                                                                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                                                        </svg>
                                                        <span>Download Main Poster PDF</span>
                                                    </a>
                                                    <a
                                                        href="https://res.cloudinary.com/disrkguox/image/upload/v1743022100/ASI-Convention-social-media_lubbl3.jpg"
                                                        target="_blank"
                                                        className="bg-asi-blue/10 hover:bg-asi-blue/20 text-asi-blue py-2 px-4 rounded flex items-center gap-2 transition-colors"
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4"
                                                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                                  strokeWidth={2}
                                                                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                                                        </svg>
                                                        <span>Download Social Media Post JPG</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* YouTube Video Embed */}
                                    <div className="border rounded-lg p-4 bg-white shadow-sm">
                                        <h4 className="text-lg font-medium text-asi-blue mb-3">Promotional Video</h4>
                                        <p className="text-sm text-slate-600 mb-4">
                                            Watch and share our promotional videos for the ASI UK 2025 Convention.
                                        </p>

                                        {/*Video 1*/}
                                        <div>
                                            <div className="w-full aspect-video rounded-md overflow-hidden shadow-md">
                                                <iframe
                                                    className="w-full h-full"
                                                    src="https://www.youtube.com/embed/bfsRAXffX54?si=9Hp7uGju9ekU3gqS"
                                                    title="ASI UK Convention Promo Video"
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    referrerPolicy="strict-origin-when-cross-origin"
                                                    allowFullScreen>
                                                </iframe>
                                            </div>
                                            <div className="mt-4 flex justify-end">
                                                <a
                                                    href="https://www.youtube.com/watch?v=bfsRAXffX54"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-asi-blue hover:text-blue-700 text-sm font-medium flex items-center gap-1"
                                                >
                                                    <span>Watch on YouTube</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4"
                                                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              strokeWidth={2}
                                                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>

                                        {/*Video 2*/}
                                        <div className={"mt-10"}>
                                            <div className="w-full aspect-video rounded-md overflow-hidden shadow-md">
                                                <iframe
                                                    className="w-full h-full"
                                                    src="https://www.youtube.com/embed/yllqBWrWAYY?si=9-Xj5Jtn61YutP97"
                                                    title="ASI UK Re-Connect Conference Preview - Johnny Wong"
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    referrerPolicy="strict-origin-when-cross-origin"
                                                    allowFullScreen>
                                                </iframe>
                                            </div>
                                            <div className="mt-4 flex justify-end">
                                                <a
                                                    href="https://www.youtube.com/watch?v=yllqBWrWAYY"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-asi-blue hover:text-blue-700 text-sm font-medium flex items-center gap-1"
                                                >
                                                    <span>Watch on YouTube</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4"
                                                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              strokeWidth={2}
                                                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>

                                        {/*Video 3*/}
                                        <div className={"mt-10"}>
                                            <div className="w-full aspect-video rounded-md overflow-hidden shadow-md">
                                                <iframe
                                                    className="w-full h-full"
                                                    src="https://www.youtube.com/embed/tWmVqM7lhns?si=Mr1pkXOpqXP8RqaR"
                                                    title="ASI UK Re-Connect Conference - Invitation from the President"
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    referrerPolicy="strict-origin-when-cross-origin"
                                                    allowFullScreen>
                                                </iframe>
                                            </div>
                                            <div className="mt-4 flex justify-end">
                                                <a
                                                    href="https://www.youtube.com/watch?v=tWmVqM7lhns"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-asi-blue hover:text-blue-700 text-sm font-medium flex items-center gap-1"
                                                >
                                                    <span>Watch on YouTube</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4"
                                                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              strokeWidth={2}
                                                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>

                                    </div>

                                    {/* Bulletin Announcement */}
                                    <div className="border rounded-lg p-4 bg-white shadow-sm">
                                        <h4 className="text-lg font-medium text-asi-blue mb-2">Bulletin
                                            Announcement</h4>
                                        <p className="text-sm text-slate-600 mb-2">Copy and paste this announcement into
                                            your church bulletin:</p>
                                        <div className="bg-slate-50 p-3 rounded text-sm border border-slate-200">
                                            <p>Join ASI UK for our first major event on Sabbath, June 21, 2025 at
                                                Mercure Daventry Court Hotel. Learn practical approaches to marketplace
                                                evangelism from renowned speaker Johnny Wong. Connect with fellow
                                                Christian professionals, entrepreneurs, and ministry leaders who are
                                                passionate about sharing Christ in the marketplace. Tickets: £25
                                                (general), £15 (ASI members). Registration includes lunch and
                                                refreshments. For more information and to register, visit
                                                asiuk.org/convention.</p>
                                        </div>
                                    </div>
                                </div>
                            </CollapsibleContent>
                        </Collapsible>
                    </div>

                    {/* FAQ Accordion Section */}
                    <div className="mt-12 mb-6">
                        <h3 className="text-xl font-medium text-asi-blue mb-4 text-center">Frequently Asked
                            Questions</h3>

                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger
                                    className="text-left text-base font-medium text-asi-blue hover:text-asi-blue hover:no-underline">
                                    What is ASI UK?
                                </AccordionTrigger>
                                <AccordionContent>
                                <p className="text-sm text-slate-600">
                                        ASI UK (Adventist-laymen's Services and Industries) is an organization that unites Seventh-day Adventist business owners, professionals, and supporting ministries in a shared mission to integrate faith with professional life.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2">
                                <AccordionTrigger className="text-left text-base font-medium text-asi-blue hover:text-asi-blue hover:no-underline">
                                    Is lunch included with my ticket?
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-sm text-slate-600">
                                        Yes, a full lunch and refreshments throughout the day are included with all ticket types.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3">
                                <AccordionTrigger className="text-left text-base font-medium text-asi-blue hover:text-asi-blue hover:no-underline">
                                    How do I qualify for the member discount?
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-sm text-slate-600">
                                        The member discount is automatically available to current ASI UK members. If you're not yet a member but would like to join, please visit our <a href="/membership" className="text-asi-blue underline">membership page</a> for more information.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-4">
                                <AccordionTrigger className="text-left text-base font-medium text-asi-blue hover:text-asi-blue hover:no-underline">
                                    Is there parking available at the venue?
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-sm text-slate-600">
                                        Yes, the Mercure Daventry Court Hotel offers free parking for all attendees.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
}
