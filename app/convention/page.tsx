import Image from 'next/image'
import Link from 'next/link';
import MainHeader from '@/app/components/MainHeader';
import {Heading1, Heading2, Heading3, Heading4, Heading5} from "@/app/components/Headings";
import SimpleTixWidget from "@/app/convention/SimpleTixWidget";
import CTARounded from "@/app/components/CTARounded";
import {Briefcase, Coffee, Users, Lightbulb, FileDown, MapPin, CalendarFold} from "lucide-react";
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
                            <p>9:00 am - 7:00 pm</p>
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
                        <p className="font-bold my-5 text-left">
                            ASI UK Members: £15<br/>
                            Early Bird Tickets: £25 (Limited time offer until 30th April)<br/>
                            Standard Tickets: £40
                        </p>

                        <p className="text-left">Don't miss this chance to be part of ASI UK's growing community of business leaders and
                            professionals dedicated to sharing Christ's message through their work.</p>
                    </div>

                    {/* Registration Section */}
                    <div className="bg-slate-50 rounded-2xl flex justify-center my-5 p-4">
                        <SimpleTixWidget/>
                    </div>
                </div>
            </div>
        </div>
    );
}
