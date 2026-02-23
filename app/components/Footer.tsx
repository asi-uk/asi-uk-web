// components/Footer.tsx
import Link from 'next/link';
import { Mail } from 'lucide-react';
import React from 'react';
import Image from "next/image";
import NewsletterSignup from "@/app/components/NewsletterSignup";

interface FooterProps {
    companyName?: string;
    companyDescription?: string;
    address?: {
        street: string;
        city: string;
        stateZip: string;
    };
    phone?: string;
    email?: string;
}

const Footer: React.FC<FooterProps> = ({
                                           companyName = "ASI UK",
                                           companyDescription = "Sharing Christ in the Marketplace",
                                           address = {
                                               street: "123 Regent St.",
                                               city: "London",
                                               stateZip: "W1B 5SE"
                                           },
                                           email = "info@asiuk.org"
                                       }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white relative z-40 print:hidden">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Top section with columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Company info */}
                    <div>
                        <Image
                            src="/asiLogoWhite.svg"
                            alt="ASI Logo"
                            width={120}
                            height={120}
                            priority
                            className="object-contain h-[50px] md:h-[120px]"
                        />
                        <div className="flex items-center mt-4">
                            <Mail className="mr-2 h-4 w-4 text-gray-400" />
                            <a href={`mailto:${email}`} className="text-gray-400 hover:text-white transition-colors text-sm">
                                {email}
                            </a>
                        </div>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h3 className="text-lg md:text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm md:text-base">
                            <li>
                                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="/news" className="text-gray-400 hover:text-white transition-colors">
                                    News
                                </Link>
                            </li>
                            <li>
                                <Link href="/membership" className="text-gray-400 hover:text-white transition-colors">
                                    Membership
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg md:text-xl font-bold mb-4">About</h3>
                        <ul className="space-y-2 text-sm md:text-base">
                            <li>
                                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                                    About ASI
                                </Link>
                            </li>
                            <li>
                                <Link href="/leadership" className="text-gray-400 hover:text-white transition-colors">
                                    Leadership
                                </Link>
                            </li>
                            <li>
                                <Link href="/constitution" className="text-gray-400 hover:text-white transition-colors">
                                    Constitution
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact-us" className="text-gray-400 hover:text-white transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter signup */}
                    <NewsletterSignup variant="compact" />
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 pt-8">
                    {/* Bottom section with copyright and terms */}
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm mb-4 md:mb-0">
                            © {currentYear} Adventist laymen’s Services and Industries, United Kingdom. All rights reserved.
                        </p>
                        {/*<div className="flex space-x-6">*/}
                        {/*    <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-sm">*/}
                        {/*        Privacy Policy*/}
                        {/*    </Link>*/}
                        {/*    <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors text-sm">*/}
                        {/*        Terms of Service*/}
                        {/*    </Link>*/}
                        {/*    <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors text-sm">*/}
                        {/*        Cookies*/}
                        {/*    </Link>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;