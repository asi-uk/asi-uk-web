import Image from 'next/image'
import Link from 'next/link';
import MainHeader from '@/app/components/MainHeader';
import {Heading1, Heading2, Heading3} from "@/app/components/Headings";
import CTARounded from "@/app/components/CTARounded";
import Profile from '@/app/components/Profile';
import {Mail, Phone, MapPin, Clock, ExternalLink} from 'lucide-react';

export default function ContactUs() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
                <div className="max-w-screen-md mx-auto px-8">
                    <div className="text-left mb-12">
                        <Heading1 text={"Contact Us"}/>
                        <p className="mt-4 text-lg text-gray-600 mx-auto">
                            We'd love to hear from you. Currently, the best way to get in contact with us is via email
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-8 mx-auto">
                        <div className="space-y-8">
                            <div className="flex items-start">
                                <Mail className="h-8 w-8 text-asi-blue mr-4 mt-1 flex-shrink-0"/>
                                <div>
                                    <h3 className="font-semibold text-lg">Email</h3>
                                    <a href="mailto:info@asiuk.org"
                                       className="text-asi-blue hover:underline text-lg">info@asiuk.org</a>
                                    <p className="text-gray-600 mt-1">We aim to respond within 48 hours</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* You can add your Footer component here */}
        </div>
    )
}