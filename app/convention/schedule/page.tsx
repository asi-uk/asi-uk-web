import Link from 'next/link';
import React from "react";
import {ArrowLeft, Calendar, Clock, MapPin} from "lucide-react";

export const metadata = {
    title: "ASI UK | Convention 2025 Schedule",
    description:
        "Detailed programme schedule for the ASI UK Convention on 21 June, 2025 in Daventry",
    keywords: [
        "ASI UK Convention Schedule",
        "Programme",
        "Timetable",
        "ASI UK",
        "Convention 2025",
    ],
    openGraph: {
        url: "https://asiuk.org/convention/schedule",
        type: "website",
        title: "ASI UK | Convention 2025 Schedule",
        description:
            "Detailed programme schedule for the ASI UK Convention on 21 June, 2025 in Daventry",
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

export default function ConventionSchedule() {
    return (
        <div className="relative w-full overflow-x-hidden">
            <div className="flex items-center justify-center w-full my-10 md:my-8 md:mb-36 px-4 md:py-0">
                <div className="w-full max-w-4xl mx-auto flex flex-col gap-2 md:gap-3 bg-white/90 rounded-2xl backdrop-blur-md p-6 md:px-10 shadow">
                    
                    {/* Back Link */}
                    <div className="mb-6">
                        <Link href="/convention" className="inline-flex items-center text-asi-blue hover:text-asi-darkBlue transition-colors">
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            <span>Back to Convention</span>
                        </Link>
                    </div>

                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl md:text-4xl text-asi-blue font-bold mb-4">Convention Schedule</h1>
                        <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-600">
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-asi-blue" />
                                <span>Saturday, 21 June 2025</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-asi-blue" />
                                <span>Mercure Daventry Court Hotel</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-asi-blue" />
                                <span>9:00 AM - 7:00 PM</span>
                            </div>
                        </div>
                    </div>

                    {/* Programme Overview */}
                    {/*<div className="bg-white rounded-xl p-6 mb-6 border-asi-blue">*/}
                    {/*    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">*/}
                    {/*        <div className="text-center p-4 bg-slate-50 rounded-lg border border-slate-200">*/}
                    {/*            <h4 className="text-asi-blue text-sm font-semibold mb-1">Morning Session</h4>*/}
                    {/*            <p className="text-sm font-medium text-slate-700">9:45 - 12:30</p>*/}
                    {/*        </div>*/}
                    {/*        <div className="text-center p-4 bg-slate-50 rounded-lg border border-slate-200">*/}
                    {/*            <h4 className="text-asi-blue text-sm font-semibold mb-1">Lunch Break</h4>*/}
                    {/*            <p className="text-sm font-medium text-slate-700">12:30 - 14:30</p>*/}
                    {/*        </div>*/}
                    {/*        <div className="text-center p-4 bg-slate-50 rounded-lg border border-slate-200">*/}
                    {/*            <h4 className="text-asi-blue text-sm font-semibold mb-1">Afternoon Session</h4>*/}
                    {/*            <p className="text-sm font-medium text-slate-700">14:30 - 19:00</p>*/}
                    {/*        </div>*/}
                    {/*        <div className="text-center p-4 bg-slate-50 rounded-lg border border-slate-200">*/}
                    {/*            <h4 className="text-asi-blue text-sm font-semibold mb-1">Total Duration</h4>*/}
                    {/*            <p className="text-sm font-medium text-slate-700">9+ Hours</p>*/}
                    {/*        </div>*/}
                    {/*        <div className="text-center p-4 bg-slate-50 rounded-lg border border-slate-200">*/}
                    {/*            <h4 className="text-asi-blue text-sm font-semibold mb-1">Venue</h4>*/}
                    {/*            <p className="text-sm font-medium text-slate-700">Main Hall</p>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/* Navigation */}
                    <div className="bg-white rounded-xl p-4 mb-6 shadow-sm text-center">
                        <div className="flex justify-center gap-4 flex-wrap">
                            <a href="#morning" className="bg-asi-blue text-white py-2 px-4 rounded-lg font-medium hover:bg-asi-darkBlue transition-colors">
                                Morning Programme
                            </a>
                            <a href="#afternoon" className="bg-asi-blue text-white py-2 px-4 rounded-lg font-medium hover:bg-asi-darkBlue transition-colors">
                                Afternoon Programme
                            </a>
                        </div>
                    </div>

                    {/* Morning Programme */}
                    <div id="morning" className="bg-white rounded-xl overflow-hidden shadow-sm mb-6">
                        <div className="bg-gradient-to-r from-asi-blue to-asi-darkBlue text-white p-4 text-center">
                            <h4 className="text-lg font-medium">Morning Programme</h4>
                            <p className="text-sm opacity-90">9:00 AM - 12:30 PM • Main Hall</p>
                        </div>
                        <div className="p-6 space-y-6">
                            {/* Registration Block */}
                            <div className="border-l-4 border-l-yellow-500 bg-yellow-50 p-4 rounded-r-lg">
                                <div className="flex items-center justify-between mb-3">
                                    <h5 className="text-lg font-semibold text-asi-blue">Registration & Welcome</h5>
                                    <span className="text-sm font-medium text-slate-600 bg-white px-2 py-1 rounded">9:00 - 9:45 AM</span>
                                </div>
                                <ul className="space-y-1 text-slate-700">
                                    <li>• Registration and check-in</li>
                                    <li>• Pastries and drinks on arrival</li>
                                    <li>• Networking and fellowship</li>
                                </ul>
                            </div>

                            {/* Opening Session Block */}
                            <div className="border-l-4 border-l-asi-blue bg-blue-50 p-4 rounded-r-lg">
                                <div className="flex items-center justify-between mb-3">
                                    <h5 className="text-lg font-semibold text-asi-blue">Opening Session</h5>
                                    <span className="text-sm font-medium text-slate-600 bg-white px-2 py-1 rounded">9:45 - 11:00 AM</span>
                                </div>
                                <ul className="space-y-1 text-slate-700">
                                    <li>• Welcome and opening hymn</li>
                                    <li>• Greetings from conference representatives</li>
                                    <li>• ASI UK President's message - Daniel Klop</li>
                                    <li>• ASI introduction video</li>
                                    <li>• ASI in Action testimonials (Part 1)</li>
                                    <li>• Project presentations and offering appeal</li>
                                </ul>
                            </div>

                            {/* Break Block */}
                            <div className="border-l-4 border-l-yellow-500 bg-yellow-50 p-4 rounded-r-lg">
                                <div className="flex items-center justify-between mb-3">
                                    <h5 className="text-lg font-semibold text-asi-blue">Morning Break</h5>
                                    <span className="text-sm font-medium text-slate-600 bg-white px-2 py-1 rounded">11:00 - 11:15 AM</span>
                                </div>
                                <ul className="space-y-1 text-slate-700">
                                    <li>• Refreshments and fellowship</li>
                                    <li>• Networking opportunity</li>
                                </ul>
                            </div>

                            {/* Worship Service Block */}
                            <div className="border-l-4 border-l-green-500 bg-green-50 p-4 rounded-r-lg">
                                <div className="flex items-center justify-between mb-3">
                                    <h5 className="text-lg font-semibold text-asi-blue">Worship Service</h5>
                                    <span className="text-sm font-medium text-slate-600 bg-white px-2 py-1 rounded">11:15 AM - 12:30 PM</span>
                                </div>
                                <ul className="space-y-1 text-slate-700">
                                    <li>• Opening hymn and prayer</li>
                                    <li>• Scripture reading</li>
                                    <li>• Special music</li>
                                    <li>• Sermon by Johnny Wong</li>
                                    <li>• Closing hymn and announcements</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Lunch Break */}
                    <div className="bg-white rounded-xl overflow-hidden shadow-sm mb-6">
                        <div className="bg-gradient-to-r from-green-600 to-green-500 text-white p-4 text-center">
                            <h4 className="text-lg font-medium">Lunch Break</h4>
                            <p className="text-sm opacity-90">12:30 - 2:30 PM • Networking & Booths</p>
                        </div>
                        <div className="p-6">
                            <div className="border-l-4 border-l-green-500 bg-green-50 p-4 rounded-r-lg">
                                <div className="flex items-center justify-between mb-3">
                                    <h5 className="text-lg font-semibold text-asi-blue">Lunch & Networking</h5>
                                    <span className="text-sm font-medium text-slate-600 bg-white px-2 py-1 rounded">12:30 - 2:30 PM</span>
                                </div>
                                <ul className="space-y-1 text-slate-700">
                                    <li>• Lunch service</li>
                                    <li>• Ministry booths and displays</li>
                                    <li>• Networking and fellowship</li>
                                    <li>• Book sales and resources</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Afternoon Programme */}
                    <div id="afternoon" className="bg-white rounded-xl overflow-hidden shadow-sm mb-6">
                        <div className="bg-gradient-to-r from-asi-blue to-asi-darkBlue text-white p-4 text-center">
                            <h4 className="text-lg font-medium">Afternoon Programme</h4>
                            <p className="text-sm opacity-90">2:30 - 7:00 PM • Main Hall</p>
                        </div>
                        <div className="p-6 space-y-6">
                            {/* Interactive Session Block */}
                            <div className="border-l-4 border-l-purple-500 bg-purple-50 p-4 rounded-r-lg">
                                <div className="flex items-center justify-between mb-3">
                                    <h5 className="text-lg font-semibold text-asi-blue">Interactive Session</h5>
                                    <span className="text-sm font-medium text-slate-600 bg-white px-2 py-1 rounded">2:30 - 4:00 PM</span>
                                </div>
                                <ul className="space-y-1 text-slate-700">
                                    <li>• Welcome and opening hymn</li>
                                    <li>• ASI Mission testimonials (Part 2)</li>
                                    <li>• Q&A panel and discussion</li>
                                    <li>• ADRA presentation</li>
                                    <li>• Stewardship presentation by Cathy Boldeau</li>
                                </ul>
                            </div>

                            {/* Break & Networking Block */}
                            <div className="border-l-4 border-l-yellow-500 bg-yellow-50 p-4 rounded-r-lg">
                                <div className="flex items-center justify-between mb-3">
                                    <h5 className="text-lg font-semibold text-asi-blue">Break & Ministry Networking</h5>
                                    <span className="text-sm font-medium text-slate-600 bg-white px-2 py-1 rounded">4:00 - 5:00 PM</span>
                                </div>
                                <ul className="space-y-1 text-slate-700">
                                    <li>• Refreshments and fellowship</li>
                                    <li>• Ministry speed networking session</li>
                                    <li>• Connect with other ASI members</li>
                                    <li>• Ministry collaboration opportunities</li>
                                </ul>
                            </div>

                            {/* Leadership Seminar Block */}
                            <div className="border-l-4 border-l-orange-500 bg-orange-50 p-4 rounded-r-lg">
                                <div className="flex items-center justify-between mb-3">
                                    <h5 className="text-lg font-semibold text-asi-blue">Leadership Seminar</h5>
                                    <span className="text-sm font-medium text-slate-600 bg-white px-2 py-1 rounded">5:00 - 5:45 PM</span>
                                </div>
                                <ul className="space-y-1 text-slate-700">
                                    <li>• Leadership seminar by Christian Salcianu</li>
                                    <li>• Practical ministry leadership skills</li>
                                    <li>• Building effective ASI organisations</li>
                                </ul>
                            </div>

                            {/* Closing Worship Block */}
                            <div className="border-l-4 border-l-green-500 bg-green-50 p-4 rounded-r-lg">
                                <div className="flex items-center justify-between mb-3">
                                    <h5 className="text-lg font-semibold text-asi-blue">Closing Worship</h5>
                                    <span className="text-sm font-medium text-slate-600 bg-white px-2 py-1 rounded">5:45 - 7:00 PM</span>
                                </div>
                                <ul className="space-y-1 text-slate-700">
                                    <li>• Special music</li>
                                    <li>• Sermon by Johnny Wong</li>
                                    <li>• Prayer for ASI UK members and ministries</li>
                                    <li>• Closing hymn and final announcements</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Programme Info */}
                    <div className="bg-white rounded-xl p-6 shadow-sm text-center border-t-4 border-t-asi-blue">
                        <h4 className="text-asi-blue text-lg font-medium mb-3">About This Programme</h4>
                        <p className="text-sm text-slate-600 mb-2">Join us for a full day of spiritual growth, networking, and inspiration with the ASI UK community.</p>
                        <p className="text-sm text-slate-600 mb-2">Experience powerful testimonials, interactive sessions, ministry networking, and uplifting worship throughout the day.</p>
                        <p className="text-sm text-slate-600"><strong>Location:</strong> Main Hall | <strong>Morning:</strong> 9:45 AM-12:30 PM | <strong>Afternoon:</strong> 2:30-7:00 PM</p>
                    </div>
                </div>
            </div>
        </div>
    );
}