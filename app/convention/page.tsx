import Image from 'next/image'
import Link from 'next/link';
import SimpleTixWidget from "@/app/convention/SimpleTixWidget";
import CTARounded from "@/app/components/CTARounded";
import YouTubeEmbed from "@/app/components/YouTubeEmbed";
import PresenterGrid from "@/app/convention/components/PresenterGrid";
import FAQSection from "@/app/convention/components/FAQSection";
import MarketingMaterials from "@/app/convention/components/MarketingMaterials";
import { Lightbulb, Coffee, Users, MapPin, CalendarFold, Calendar } from "lucide-react";
import { CONVENTION_2025 } from "@/data/convention";

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
                            src={CONVENTION_2025.logoUrl}
                            width={600}
                            height={600}
                            alt={"ASI Convention Logo"}
                            className="w-auto h-auto pb-10 max-h-[150px] object-contain"
                            priority
                        />
                    </div>

                    <div className="flex items-center mb-4">
                        <h2 className="text-2xl md:text-3xl text-asi-blue font-bold leading-none">{CONVENTION_2025.title}</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
                        <div className="flex flex-col items-center text-center border-2 border-slate-100 rounded-2xl p-5 bg-white/10">
                            <h2 className="flex items-center gap-2 text-asi-blue">
                                <CalendarFold className="h-5 w-5 inline-block"/>
                                <span className="text-lg md:text-xl font-bold">When</span>
                            </h2>
                            <h3 className="text-2xl font-medium h-full flex items-center">{CONVENTION_2025.date.replace(', 2025', '')}<span className="hidden md:inline">, 2025</span></h3>
                            <p>{CONVENTION_2025.time}</p>
                        </div>

                        <a target="_blank" href={CONVENTION_2025.venueMapUrl} rel="noopener noreferrer">
                            <div className="flex flex-col items-center text-center border-2 border-slate-100 rounded-2xl p-5 transition duration-300 ease-out hover:bg-slate-100 bg-white/10">
                                <h2 className="flex items-center gap-2 text-asi-blue">
                                    <MapPin className="h-5 w-5 inline-block"/>
                                    <span className="text-lg md:text-xl font-bold">Where</span>
                                </h2>
                                <h3 className="text-2xl font-medium h-full">Daventry</h3>
                                <p className="text-base font-medium">{CONVENTION_2025.venue}</p>
                                <p className="font-light">{CONVENTION_2025.venueAddress}</p>
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
                    <PresenterGrid presenters={CONVENTION_2025.presenters} />

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
                        <div className="w-full max-w-lg">
                            <YouTubeEmbed
                                embedUrl={CONVENTION_2025.promoVideos[0].embedUrl}
                                title="YouTube video player"
                            />
                        </div>
                    </div>

                    <div className="w-full py-4">
                        <h3 className="text-lg font-normal text-asi-blue mb-3 text-center">Ticket Options</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 max-w-lg mx-auto">
                            {/* General Admission Ticket */}
                            <div className="flex flex-col border-2 border-slate-100 rounded-2xl p-5 bg-white/10 text-center">
                                <h4 className="text-asi-blue font-bold text-xl mb-2">{CONVENTION_2025.tickets.general.label}</h4>
                                <div className="text-3xl font-bold mb-2 text-slate-700">£{CONVENTION_2025.tickets.general.price}</div>
                                <p className="text-sm text-slate-600 mb-2">{CONVENTION_2025.tickets.general.description}</p>
                            </div>

                            {/* ASI Member Ticket */}
                            <div className="flex flex-col border-2 border-asi-blue rounded-2xl p-5 shadow-md bg-white text-center relative">
                                <div className="absolute -top-3 left-0 right-0 mx-auto w-max bg-asi-blue text-white text-xs py-1 px-3 rounded-full">
                                    MEMBER DISCOUNT
                                </div>
                                <h4 className="text-asi-blue font-bold text-xl mb-2">{CONVENTION_2025.tickets.member.label}</h4>
                                <div className="text-3xl font-bold mb-2 text-slate-700">£{CONVENTION_2025.tickets.member.price}</div>
                                <p className="text-sm text-slate-600 mb-2">{CONVENTION_2025.tickets.member.description}</p>
                            </div>
                        </div>

                        <p className="text-left">Don't miss this chance to be part of ASI UK's growing community of business leaders and
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
                    <MarketingMaterials />

                    {/* FAQ Accordion Section */}
                    <FAQSection items={CONVENTION_2025.faq} />
                </div>
            </div>
        </div>
    );
}
