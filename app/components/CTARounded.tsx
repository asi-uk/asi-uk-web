import React from 'react';
import Link from "next/link";

import { ChevronRight, LucideIcon } from "lucide-react" // Import default icon

interface CTARoundedProps {
    href?: string;
    target?: string;
    rel?: string;
    heading?: string;
    subheading?: string;
    containerClass?: string;
    headingClass?: string;
    subheadingClass?: string;
    Icon?: LucideIcon;  // Add optional icon prop
    iconSize?: number;
    iconClass?: string;
}

const CTARounded: React.FC<CTARoundedProps> = ({
           href = "/",
           target = "",
           rel = "",
           heading = "Heading",
           subheading = "",
           containerClass = "",
           headingClass = "text-lg md:text-xl",
           subheadingClass = "",
           Icon = ChevronRight,  // Set default icon
        }) => {
    return (
        <div
            className={`group bg-white transition duration-300 ease-out hover:bg-slate-100 rounded-2xl p-5 ${containerClass}`}>
            <Link target={target} href={href} rel={rel} className="text-center">
                <div>
                    <div className="flex justify-center">
                        <h2 className={`flex items-center gap-2 text-asi-blue`}>
                            <span className={`font-bold ${headingClass}`}>{heading}</span>
                            <Icon
                                className="h-5 w-5 transition duration-300 ease-in-out group-hover:translate-x-2 inline-block"/>
                        </h2>
                    </div>
                    <p className={`text-sm md:text-base ${subheadingClass}`}>{subheading}</p>
                </div>
            </Link>
        </div>
    );
};

export default CTARounded;
