import React from 'react';
import Link from "next/link";

interface CTARoundedProps {
    href?: string;
    target?: string;
    rel?: string;
    heading?: string;
    subheading?: string;
    containerClass?: string;
    headingClass?: string;
    subheadingClass?: string;
}

const CTARounded: React.FC<CTARoundedProps> = ({
           href = "/",
           target = "",
           rel = "",
           heading = "Heading",
           subheading = "Lorem Ipsum this is a subheading",
           containerClass = "",
           headingClass = "",
           subheadingClass = "",
       }) => {
    return (
        <div className={`group bg-slate-50 transition duration-300 ease-out hover:bg-slate-100 rounded-2xl p-5 my-8 ${containerClass}`}>
            <Link target={target} href={href} rel={rel} className="text-center">
                <div>
                    <h2 className={`text-lg md:text-xl font-bold text-asi-blue ${headingClass}`}>
                        {heading}{" "}
                        <span className="font-sans transition duration-300 ease-in-out group-hover:translate-x-2 inline-block">
                            →
                        </span>
                    </h2>
                    <p className={`text-sm md:text-base ${subheadingClass}`}>{subheading}</p>
                </div>
            </Link>
        </div>
    );
};

export default CTARounded;
