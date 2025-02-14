import Image from 'next/image'
import Link from 'next/link';
import MainHeader from '@/app/components/MainHeader';
import {Heading1, Heading2, Heading3, Heading4, Heading5} from "@/app/components/Headings";
import SimpleTixWidget from "@/app/convention/SimpleTixWidget";
import CTARounded from "@/app/components/CTARounded";
import {FileDown, MapPin, CalendarFold} from "lucide-react";
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
        <div className="flex items-center justify-center w-screen">
            <div className="max-w-screen-md mx-auto">
                <MainHeader/>
                <div className="text-left p-5">
                    <Heading1 text={"Convention 2025"}/>
                    <div className="grid grid-cols-2 gap-5 my-5">
                        <div
                            className="flex flex-col items-center text-center border-2 border-slate-100 rounded-2xl p-5">
                            <h2 className={`flex items-center gap-2 text-asi-blue`}>
                                <CalendarFold className="h-5 w-5 transition duration-300 ease-in-out group-hover:translate-x-2
                                inline-block"/>
                                <span className={`text-lg md:text-xl font-bold`}>When</span>
                            </h2>
                            <h3 className="text-2xl font-medium h-full flex items-center">21 June<span className="hidden md:inline">, 2025</span>
                            </h3>
                            <p>9:30 am - 6:00 pm</p>
                        </div>


                        <a target="_blank" href="https://maps.app.goo.gl/ejgjnVKhYuz6ZyD7A" rel="noopener noreferrer">
                            <div
                                className="flex flex-col items-center text-center border-2 border-slate-100 rounded-2xl p-5 transition duration-300 ease-out hover:bg-slate-100">
                                <h2 className={`flex items-center gap-2 text-asi-blue`}>
                                    <MapPin className="h-5 w-5 transition duration-300 ease-in-out group-hover:translate-x-2
                                inline-block"/>
                                    <span className={`text-lg md:text-xl font-bold`}>Where</span>
                                </h2>
                                <h3 className="text-2xl font-medium h-full">Daventry
                                </h3>
                                <p className={`text-base font-medium`}>Mercure Daventry Court Hotel</p>
                                <p className={`font-light`}>Northamptonshire NN11 OSG</p>
                            </div>
                        </a>
                    </div>
                    <p>Join ASI UK for our first major event on Sabbath, June 21, 2025, featuring renowned speaker
                        Johnny Wong, who will share powerful insights on evangelism in today's world. ASI USA
                        President Andi Hunsaker will also be in attendance. As part of the Adventist-laymen's
                        Services and Industries network, we're bringing together professionals, entrepreneurs, and
                        ministry leaders who are passionate about sharing Christ through their business and
                        professional lives.</p>

                    <p className={`my-2`}>This full-day event offers valuable opportunities to:</p>
                    <ul className="list-disc list-inside pl-5">
                        <li>Learn practical approaches to marketplace evangelism</li>
                        <li>Connect with fellow Christian professionals</li>
                        <li>Strengthen your ministry through business excellence</li>
                        <li>Enjoy fellowship over a provided lunch and refreshments</li>
                    </ul>

                    <p className={`font-bold my-5`}>ASI UK Members: £15<br/>
                        Early Bird Tickets: £25 (Limited time offer)<br/>
                        Standard Tickets: £40 (from April)</p>

                    <p>Don't miss this chance to be part of ASI UK's growing community of business leaders and
                        professionals dedicated to sharing Christ's message through their work.</p>
                    <div className={`bg-slate-50 rounded-2xl flex justify-center my-5`}>
                        <SimpleTixWidget/>
                    </div>
                </div>
            </div>
        </div>
    );
}