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
                            <p className="text-sm opacity-90">9:45 - 12:30 • Main Hall</p>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-slate-600 text-white">
                                        <th className="p-3 text-left text-xs font-semibold uppercase tracking-wide">Time</th>
                                        <th className="p-3 text-center text-xs font-semibold uppercase tracking-wide">Duration</th>
                                        <th className="p-3 text-left text-xs font-semibold uppercase tracking-wide">Activity</th>
                                        <th className="p-3 text-left text-xs font-semibold uppercase tracking-wide">Presenter</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-slate-200 bg-yellow-50 border-l-4 border-l-yellow-500 hover:bg-yellow-50">
                                        <td className="p-3 font-semibold text-asi-blue whitespace-nowrap">9:00</td>
                                        <td className="p-3 text-center font-medium text-slate-600">45 min</td>
                                        <td className="p-3 font-medium">Registration / Pastries and drinks on arrival</td>
                                        <td className="p-3 text-slate-600 italic">-</td>
                                    </tr>
                                    <tr className="border-b border-slate-200 hover:bg-slate-50">
                                        <td className="p-3 font-semibold text-asi-blue whitespace-nowrap">9:45</td>
                                        <td className="p-3 text-center font-medium text-slate-600">2 min</td>
                                        <td className="p-3 font-medium">Welcome and Announcements</td>
                                        <td className="p-3 text-slate-600 italic">Moderator</td>
                                    </tr>
                                    <tr className="border-b border-slate-200 hover:bg-slate-50">
                                        <td className="p-3 font-semibold text-asi-blue whitespace-nowrap">9:47</td>
                                        <td className="p-3 text-center font-medium text-slate-600">3 min</td>
                                        <td className="p-3 font-medium">Hymn: Holy, holy, holy</td>
                                        <td className="p-3 text-slate-600 italic">Music Team</td>
                                    </tr>
                                    <tr className="border-b border-slate-200 hover:bg-slate-50">
                                        <td className="p-3 font-semibold text-asi-blue whitespace-nowrap">9:50</td>
                                        <td className="p-3 text-center font-medium text-slate-600">2 min</td>
                                        <td className="p-3 font-medium">Prayer</td>
                                        <td className="p-3 text-slate-600 italic">-</td>
                                    </tr>
                                    <tr className="border-b border-slate-200 hover:bg-slate-50">
                                        <td className="p-3 font-semibold text-asi-blue whitespace-nowrap">9:52</td>
                                        <td className="p-3 text-center font-medium text-slate-600">8 min</td>
                                        <td className="p-3 font-semibold text-red-600">Short message by TED, BUC, SEC, NEC, Mission representatives</td>
                                        <td className="p-3 text-slate-600 italic">-</td>
                                    </tr>
                                    <tr className="border-b border-slate-200 hover:bg-slate-50">
                                        <td className="p-3 font-semibold text-asi-blue whitespace-nowrap">10:00</td>
                                        <td className="p-3 text-center font-medium text-slate-600">4 min</td>
                                        <td className="p-3 font-semibold text-red-600">Message by ASI UK President & presentation of ASI UK Team</td>
                                        <td className="p-3 text-slate-600 italic">Daniel Klop</td>
                                    </tr>
                                    <tr className="border-b border-slate-200 hover:bg-slate-50">
                                        <td className="p-3 font-semibold text-asi-blue whitespace-nowrap">10:04</td>
                                        <td className="p-3 text-center font-medium text-slate-600">5 min</td>
                                        <td className="p-3 font-medium">Video about ASI 5 min</td>
                                        <td className="p-3 text-slate-600 italic">-</td>
                                    </tr>
                                    <tr className="border-b border-slate-200 hover:bg-slate-50">
                                        <td className="p-3 font-semibold text-asi-blue whitespace-nowrap">10:09</td>
                                        <td className="p-3 text-center font-medium text-slate-600">4 min</td>
                                        <td className="p-3 font-medium">Special Music</td>
                                        <td className="p-3 text-slate-600 italic">-</td>
                                    </tr>
                                    <tr className="border-b border-slate-200 hover:bg-slate-50">
                                        <td className="p-3 font-semibold text-asi-blue whitespace-nowrap">10:13</td>
                                        <td className="p-3 text-center font-medium text-slate-600">25 min</td>
                                        <td className="p-3 font-semibold text-asi-blue">ASI in Action (Testimonials) - Part 1</td>
                                        <td className="p-3 text-slate-600 italic">-</td>
                                    </tr>
                                    <tr className="border-b border-slate-200 hover:bg-slate-50">
                                        <td className="p-3 font-semibold text-asi-blue whitespace-nowrap">10:38</td>
                                        <td className="p-3 text-center font-medium text-slate-600">7 min</td>
                                        <td className="p-3 font-semibold text-asi-blue">What is ASI?</td>
                                        <td className="p-3 text-slate-600 italic">-</td>
                                    </tr>
                                    <tr className="border-b border-slate-200 hover:bg-slate-50">
                                        <td className="p-3 font-semibold text-asi-blue whitespace-nowrap">10:45</td>
                                        <td className="p-3 text-center font-medium text-slate-600">8 min</td>
                                        <td className="p-3 font-semibold text-red-600">Project Summary PPT and Appeal for Donations</td>
                                        <td className="p-3 text-slate-600 italic">-</td>
                                    </tr>
                                    <tr className="border-b border-slate-200 hover:bg-slate-50">
                                        <td className="p-3 font-semibold text-asi-blue whitespace-nowrap">10:53</td>
                                        <td className="p-3 text-center font-medium text-slate-600">5 min</td>
                                        <td className="p-3 font-medium">Collection of offering / pledges</td>
                                        <td className="p-3 text-slate-600 italic">-</td>
                                    </tr>
                                    <tr className="border-b border-slate-200 bg-yellow-50 border-l-4 border-l-yellow-500 hover:bg-yellow-50">
                                        <td className="p-3 font-semibold text-asi-blue whitespace-nowrap">10:58</td>
                                        <td className="p-3 text-center font-medium text-slate-600">15 min</td>
                                        <td className="p-3 font-medium">BREAK: Pastries and drinks</td>
                                        <td className="p-3 text-slate-600 italic">-</td>
                                    </tr>
                                    <tr className="border-b border-slate-200 hover:bg-slate-50">
                                        <td className="p-3 font-semibold text-asi-blue whitespace-nowrap">11:13</td>
                                        <td className="p-3 text-center font-medium text-slate-600">4 min</td>
                                        <td className="p-3 font-medium">Hymn: In Christ Alone</td>
                                        <td className="p-3 text-slate-600 italic">Music Team</td>
                                    </tr>
                                    <tr className="border-b border-slate-200 hover:bg-slate-50">
                                        <td className="p-3 font-semibold text-asi-blue whitespace-nowrap">11:17</td>
                                        <td className="p-3 text-center font-medium text-slate-600">2 min</td>
                                        <td className="p-3 font-medium">Prayer for ASI UK Project Cycle 2025-26</td>
                                        <td className="p-3 text-slate-600 italic">-</td>
                                    </tr>
                                    <tr className="border-b border-slate-200 hover:bg-slate-50">
                                        <td className="p-3 font-semibold text-asi-blue whitespace-nowrap">11:19</td>
                                        <td className="p-3 text-center font-medium text-slate-600">1 min</td>
                                        <td className="p-3 font-medium">Scripture Reading</td>
                                        <td className="p-3 text-slate-600 italic">-</td>
                                    </tr>
                                    <tr className="border-b border-slate-200 hover:bg-slate-50">
                                        <td className="p-3 font-semibold text-asi-blue whitespace-nowrap">11:20</td>
                                        <td className="p-3 text-center font-medium text-slate-600">4 min</td>
                                        <td className="p-3 font-medium">Special Music</td>
                                        <td className="p-3 text-slate-600 italic">-</td>
                                    </tr>
                                    <tr className="border-b border-slate-200 hover:bg-slate-50">
                                        <td className="p-3 font-semibold text-asi-blue whitespace-nowrap">11:24</td>
                                        <td className="p-3 text-center font-medium text-slate-600">1 hour</td>
                                        <td className="p-3 font-semibold text-asi-blue">Sermon</td>
                                        <td className="p-3 text-slate-600 italic">Johnny Wong</td>
                                    </tr>
                                    <tr className="border-b border-slate-200 hover:bg-slate-50">
                                        <td className="p-3 font-semibold text-asi-blue whitespace-nowrap">12:24</td>
                                        <td className="p-3 text-center font-medium text-slate-600">4 min</td>
                                        <td className="p-3 font-medium">Hymn</td>
                                        <td className="p-3 text-slate-600 italic">Music Team</td>
                                    </tr>
                                    <tr className="border-b border-slate-200 hover:bg-slate-50">
                                        <td className="p-3 font-semibold text-asi-blue whitespace-nowrap">12:28</td>
                                        <td className="p-3 text-center font-medium text-slate-600">2 min</td>
                                        <td className="p-3 font-medium">Announcements</td>
                                        <td className="p-3 text-slate-600 italic">Moderator</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Lunch Break */}
                    <div className="bg-white rounded-xl overflow-hidden shadow-sm mb-6">
                        <div className="bg-gradient-to-r from-green-600 to-green-500 text-white p-4 text-center">
                            <h4 className="text-lg font-medium">Lunch Break</h4>
                            <p className="text-sm opacity-90">12:30 - 14:30 • Networking & Booths</p>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <tbody>
                                    <tr className="bg-green-50 border-l-4 border-l-green-500 hover:bg-green-50">
                                        <td className="p-3 font-semibold text-asi-blue whitespace-nowrap">12:30</td>
                                        <td className="p-3 text-center font-medium text-slate-600">2 hours</td>
                                        <td className="p-3 font-medium">LUNCH, Networking & Booths</td>
                                        <td className="p-3 text-slate-600 italic">-</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Afternoon Programme */}
                    <div id="afternoon" className="bg-white rounded-xl overflow-hidden shadow-sm mb-6">
                        <div className="bg-gradient-to-r from-asi-blue to-asi-darkBlue text-white p-4 text-center">
                            <h4 className="text-lg font-medium">Afternoon Programme</h4>
                            <p className="text-sm opacity-90">14:30 - 19:00 • Main Hall</p>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-slate-600 text-white">
                                        <th className="p-3 text-left text-xs font-semibold uppercase tracking-wide">Time</th>
                                        <th className="p-3 text-center text-xs font-semibold uppercase tracking-wide">Duration</th>
                                        <th className="p-3 text-left text-xs font-semibold uppercase tracking-wide">Activity</th>
                                        <th className="p-3 text-left text-xs font-semibold uppercase tracking-wide">Presenter</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-slate-200 hover:bg-slate-50">
                                        <td className="p-3 font-semibold text-asi-blue whitespace-nowrap">14:30</td>
                                        <td className="p-3 text-center font-medium text-slate-600">3 min</td>
                                        <td className="p-3 font-medium">Welcome</td>
                                        <td className="p-3 text-slate-600 italic">Moderator</td>
                                    </tr>
                                    <tr className="border-b border-slate-200 hover:bg-slate-50">
                                        <td className="p-3 font-semibold text-asi-blue whitespace-nowrap">14:33</td>
                                        <td className="p-3 text-center font-medium text-slate-600">3 min</td>
                                        <td className="p-3 font-medium">Hymn: Turn Your Eyes Upon Jesus</td>
                                        <td className="p-3 text-slate-600 italic">Music Team</td>
                                    </tr>
                                    <tr className="border-b border-slate-200 hover:bg-slate-50">
                                        <td className="p-3 font-semibold text-asi-blue whitespace-nowrap">14:36</td>
                                        <td className="p-3 text-center font-medium text-slate-600">2 min</td>
                                        <td className="p-3 font-medium">Prayer</td>
                                        <td className="p-3 text-slate-600 italic">-</td>
                                    </tr>
                                    <tr className="border-b border-slate-200 hover:bg-slate-50">
                                        <td className="p-3 font-semibold text-asi-blue whitespace-nowrap">14:38</td>
                                        <td className="p-3 text-center font-medium text-slate-600">30 min</td>
                                        <td className="p-3 font-semibold text-asi-blue">ASI Mission (Testimonials) - Part 2</td>
                                        <td className="p-3 text-slate-600 italic">-</td>
                                    </tr>
                                    <tr className="border-b border-slate-200 hover:bg-slate-50">
                                        <td className="p-3 font-semibold text-asi-blue whitespace-nowrap">15:08</td>
                                        <td className="p-3 text-center font-medium text-slate-600">45 min</td>
                                        <td className="p-3 font-semibold text-asi-blue">Q&A Panel & Discussion</td>
                                        <td className="p-3 text-slate-600 italic">-</td>
                                    </tr>
                                    <tr className="border-b border-slate-200 hover:bg-slate-50">
                                        <td className="p-3 font-semibold text-asi-blue whitespace-nowrap">15:53</td>
                                        <td className="p-3 text-center font-medium text-slate-600">5 min</td>
                                        <td className="p-3 font-semibold text-red-600">ADRA Presentation</td>
                                        <td className="p-3 text-slate-600 italic">-</td>
                                    </tr>
                                    <tr className="border-b border-slate-200 hover:bg-slate-50">
                                        <td className="p-3 font-semibold text-asi-blue whitespace-nowrap">15:58</td>
                                        <td className="p-3 text-center font-medium text-slate-600">5 min</td>
                                        <td className="p-3 font-semibold text-red-600">Stewardship Presentation</td>
                                        <td className="p-3 text-slate-600 italic">Cathy Boldeau</td>
                                    </tr>
                                    <tr className="border-b border-slate-200 bg-yellow-50 border-l-4 border-l-yellow-500 hover:bg-yellow-50">
                                        <td className="p-3 font-semibold text-asi-blue whitespace-nowrap">16:03</td>
                                        <td className="p-3 text-center font-medium text-slate-600">15 min</td>
                                        <td className="p-3 font-medium">Break - setting up chairs & Refreshments</td>
                                        <td className="p-3 text-slate-600 italic">-</td>
                                    </tr>
                                    <tr className="border-b border-slate-200 hover:bg-slate-50">
                                        <td className="p-3 font-semibold text-asi-blue whitespace-nowrap">16:18</td>
                                        <td className="p-3 text-center font-medium text-slate-600">40 min</td>
                                        <td className="p-3 font-semibold text-asi-blue">Ministry Speed Networking</td>
                                        <td className="p-3 text-slate-600 italic">-</td>
                                    </tr>
                                    <tr className="border-b border-slate-200 bg-yellow-50 border-l-4 border-l-yellow-500 hover:bg-yellow-50">
                                        <td className="p-3 font-semibold text-asi-blue whitespace-nowrap">16:58</td>
                                        <td className="p-3 text-center font-medium text-slate-600">5 min</td>
                                        <td className="p-3 font-medium">Break - setting up chairs back to normal</td>
                                        <td className="p-3 text-slate-600 italic">-</td>
                                    </tr>
                                    <tr className="border-b border-slate-200 hover:bg-slate-50">
                                        <td className="p-3 font-semibold text-asi-blue whitespace-nowrap">17:03</td>
                                        <td className="p-3 text-center font-medium text-slate-600">40 min</td>
                                        <td className="p-3 font-semibold text-asi-blue">Seminar (Leadership): Christian Salcianu</td>
                                        <td className="p-3 text-slate-600 italic">Christian Salcianu</td>
                                    </tr>
                                    <tr className="border-b border-slate-200 hover:bg-slate-50">
                                        <td className="p-3 font-semibold text-asi-blue whitespace-nowrap">17:43</td>
                                        <td className="p-3 text-center font-medium text-slate-600">3 min</td>
                                        <td className="p-3 font-medium">Special Music</td>
                                        <td className="p-3 text-slate-600 italic">-</td>
                                    </tr>
                                    <tr className="border-b border-slate-200 hover:bg-slate-50">
                                        <td className="p-3 font-semibold text-asi-blue whitespace-nowrap">17:46</td>
                                        <td className="p-3 text-center font-medium text-slate-600">1 hour</td>
                                        <td className="p-3 font-semibold text-asi-blue">Sermon</td>
                                        <td className="p-3 text-slate-600 italic">Johnny Wong</td>
                                    </tr>
                                    <tr className="border-b border-slate-200 hover:bg-slate-50">
                                        <td className="p-3 font-semibold text-asi-blue whitespace-nowrap">18:46</td>
                                        <td className="p-3 text-center font-medium text-slate-600">5 min</td>
                                        <td className="p-3 font-semibold text-red-600">Special Prayer for all ASI UK members and ministries</td>
                                        <td className="p-3 text-slate-600 italic">-</td>
                                    </tr>
                                    <tr className="border-b border-slate-200 hover:bg-slate-50">
                                        <td className="p-3 font-semibold text-asi-blue whitespace-nowrap">18:51</td>
                                        <td className="p-3 text-center font-medium text-slate-600">4 min</td>
                                        <td className="p-3 font-medium">Hymn</td>
                                        <td className="p-3 text-slate-600 italic">Music Team</td>
                                    </tr>
                                    <tr className="border-b border-slate-200 hover:bg-slate-50">
                                        <td className="p-3 font-semibold text-asi-blue whitespace-nowrap">18:55</td>
                                        <td className="p-3 text-center font-medium text-slate-600">5 min</td>
                                        <td className="p-3 font-medium">Announcements and "Thank you"</td>
                                        <td className="p-3 text-slate-600 italic">-</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50">
                                        <td className="p-3 font-semibold text-asi-blue whitespace-nowrap">19:00</td>
                                        <td className="p-3 text-center font-medium text-slate-600">-</td>
                                        <td className="p-3 font-medium">CLOSE</td>
                                        <td className="p-3 text-slate-600 italic">Moderator</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Programme Info */}
                    <div className="bg-white rounded-xl p-6 shadow-sm text-center border-t-4 border-t-asi-blue">
                        <h4 className="text-asi-blue text-lg font-medium mb-3">About This Programme</h4>
                        <p className="text-sm text-slate-600 mb-2">Join us for a full day of spiritual growth, networking, and inspiration with the ASI UK community.</p>
                        <p className="text-sm text-slate-600 mb-2">Experience powerful testimonials, interactive sessions, ministry networking, and uplifting worship throughout the day.</p>
                        <p className="text-sm text-slate-600"><strong>Location:</strong> Main Hall | <strong>Morning:</strong> 9:45-12:30 | <strong>Afternoon:</strong> 14:30-19:00</p>
                    </div>
                </div>
            </div>
        </div>
    );
}