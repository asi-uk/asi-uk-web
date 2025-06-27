import Image from 'next/image'
import Link from 'next/link';
import MainHeader from '@/app/components/MainHeader';
import {Heading1, Heading2, Heading3} from "@/app/components/Headings";
import CTARounded from "@/app/components/CTARounded";
import Profile from '@/app/components/Profile';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

export default function Leadership() {
    return (
        <div className="flex items-center justify-center w-screen">
            <div className="max-w-screen-md mx-auto">
                <div className="text-left p-5">
                    <Heading2 text={"Leadership Team"}/>

                    <div className="bg-white rounded-2xl p-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold text-lg mb-4 text-asi-darkBlue">Executive Officers</h4>
                                <div className="space-y-3">
                                    <div>
                                        <p className="font-medium">Angel Alishev</p>
                                        <p className="text-sm text-gray-600">President</p>
                                    </div>
                                    <div>
                                        <p className="font-medium">Bianna Espinal</p>
                                        <p className="text-sm text-gray-600">Vice President</p>
                                    </div>
                                    <div>
                                        <p className="font-medium">Tashana Samuels</p>
                                        <p className="text-sm text-gray-600">Vice President for Evangelism</p>
                                    </div>
                                    <div>
                                        <p className="font-medium">Craig Gooden</p>
                                        <p className="text-sm text-gray-600">Vice President for Chapter Growth</p>
                                    </div>
                                    <div>
                                        <p className="font-medium">Silvia Garcia Portilla</p>
                                        <p className="text-sm text-gray-600">Treasurer</p>
                                    </div>
                                    <div>
                                        <p className="font-medium">Eric Welch</p>
                                        <p className="text-sm text-gray-600">Secretary</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg mb-4 text-asi-darkBlue">Committee Members & Directors</h4>
                                <div className="space-y-3">
                                    <div>
                                        <p className="font-light italic text-sm">To be selected by Executive Committee</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Collapsible className="my-8">
                        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-asi-blue text-white rounded-lg hover:bg-asi-darkBlue transition-colors">
                            <span className="text-lg font-semibold">Previous Leadership Team (2025-2026)</span>
                            <ChevronDown className="h-5 w-5 transition-transform duration-200 data-[state=open]:rotate-180" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="pt-4">
                            <div className="bg-white rounded-lg p-6 border">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-semibold text-lg mb-4 text-asi-darkBlue">Executive Officers</h4>
                                        <div className="space-y-3">
                                            <div>
                                                <p className="font-medium">Daniel Klop</p>
                                                <p className="text-sm text-gray-600">President</p>
                                            </div>
                                            <div>
                                                <p className="font-medium">Karlene Agard</p>
                                                <p className="text-sm text-gray-600">Vice President</p>
                                            </div>
                                            <div>
                                                <p className="font-medium">Craig Gooden</p>
                                                <p className="text-sm text-gray-600">Vice President for Chapter Growth</p>
                                            </div>
                                            <div>
                                                <p className="font-medium">Angel Alishev</p>
                                                <p className="text-sm text-gray-600">Vice President for Evangelism</p>
                                            </div>
                                            <div>
                                                <p className="font-medium">Michael Garkov</p>
                                                <p className="text-sm text-gray-600">Treasurer</p>
                                            </div>
                                            <div>
                                                <p className="font-medium">Eric Welch</p>
                                                <p className="text-sm text-gray-600">Secretary</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg mb-4 text-asi-darkBlue">Committee Members & Directors</h4>
                                        <div className="space-y-3">
                                            <div>
                                                <p className="font-medium">Jason Garcia Portilla</p>
                                                <p className="text-sm text-gray-600">Projects Committee</p>
                                            </div>
                                            <div>
                                                <p className="font-medium">Tashana Samuels</p>
                                                <p className="text-sm text-gray-600">Projects Committee</p>
                                            </div>
                                            <div>
                                                <p className="font-medium">Sam Walters</p>
                                                <p className="text-sm text-gray-600">Director for Youth Relations</p>
                                            </div>
                                            <div>
                                                <p className="font-medium">Rachel Graham-Tohue</p>
                                                <p className="text-sm text-gray-600">Director for Logistics</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CollapsibleContent>
                    </Collapsible>

                    <CTARounded
                        heading={"Contact Us"}
                        subheading={"Get in touch with ASI UK"}
                        href={"/contact-us"}
                        containerClass="my-8"
                    />

                </div>
            </div>
        </div>
    )
}