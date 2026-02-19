import Link from 'next/link';
import {
    Merge,
    Lightbulb,
    FolderOpen,
    Heart,
} from 'lucide-react';
import SaveTheDateBanner from "@/app/components/SaveTheDateBanner";
import ParallaxBackground from "@/app/components/ParallaxBackground";

export default function Home() {
    return (
        <div className="relative w-full overflow-x-hidden">
            {/* Background component (stays fixed) */}
            <ParallaxBackground/>

            {/* Save the Date Banner - 2026 Convention */}
            <SaveTheDateBanner />

            {/* Membership Section */}
            <section className="relative z-20 w-full bg-white/90 backdrop-blur-md">
                <div className="w-full max-w-3xl mx-auto flex flex-col px-4 py-12 md:py-16">
                    <div className="flex flex-col items-center text-center">
                        <div className="flex items-center mb-4 md:mb-6">
                            <Merge className="mr-2 h-5 w-5 md:h-6 md:w-6 text-asi-blue"/>
                            <h2 className="text-2xl md:text-3xl text-asi-blue font-bold leading-none">Join ASI</h2>
                        </div>
                        <p className="text-sm md:text-base mb-6 max-w-2xl">
                            Are you an Adventist professional, entrepreneur, or ministry leader with a desire to spread
                            the love of Christ in your sphere of influence? ASI UK is designed specifically for you.
                        </p>
                        <div>
                            <Link
                                href="/membership"
                                className="bg-asi-blue hover:bg-blue-700 text-white py-2 px-6 rounded-lg font-medium transition-colors duration-200"
                            >
                                Membership Information
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* First Section - 2026 Project Funding Call to Action */}
            <section className="relative z-20 flex items-center justify-center w-full my-10 md:my-8 md:mt-12 px-4 md:py-0">
                <div
                    className="w-full max-w-3xl mx-auto flex flex-col gap-6 md:gap-8 bg-asi-darkBlue/80 rounded-2xl backdrop-blur-md p-6 md:px-10 shadow">
                    {/* Header */}
                    <div className="flex flex-col items-center justify-center w-full gap-4 mt-6">
                        <div className="flex items-center gap-3">
                            <Lightbulb className="h-8 w-8 text-white" />
                            <h1 className="text-3xl md:text-4xl text-white font-bold text-center">2026 Project Funding</h1>
                        </div>
                        <span className="bg-green-500 text-white text-sm font-semibold px-4 py-1 rounded-full">Applications Open</span>
                    </div>

                    {/* Deadline Banner */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                        <p className="text-white text-center font-medium">
                            Application Deadline: <span className="font-bold">Thursday 23rd April 2026</span>
                        </p>
                    </div>

                    <div className="text-center">
                        <p className="text-lg md:text-xl text-white font-medium mb-4">
                            Get funding for your evangelistic ministry
                        </p>
                        <p className="text-sm md:text-base text-white/90 font-light">
                            Do you have an evangelistic project that needs funding? ASI UK provides grants to support members who are making a difference through evangelism, outreach, and ministry initiatives.
                        </p>
                    </div>

                    {/* Call to Action Buttons */}
                    <div className="w-full flex flex-col gap-3 justify-center items-center mb-6">
                        <Link
                            href="/projects"
                            className="bg-white text-asi-blue hover:bg-blue-50 py-3 px-8 rounded-2xl font-semibold text-lg transition-all duration-200 text-center w-72 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            <FolderOpen className="h-5 w-5" />
                            Learn More & Apply
                        </Link>
                        <Link
                            href="/donate"
                            className="bg-white/10 rounded-2xl hover:bg-white/20 text-white py-2 px-6 inline-block font-medium transition-colors duration-200 text-center w-72 flex items-center justify-center gap-2"
                        >
                            <Heart className="h-4 w-4" />
                            Donate to Projects
                        </Link>
                    </div>

                </div>
            </section>

            <section className="relative z-20 flex items-center justify-center w-full my-10 md:my-16 px-4 md:py-0">
                <div
                    className="w-full max-w-3xl mx-auto flex flex-col gap-6 md:gap-10 bg-white/90 rounded-2xl backdrop-blur-md p-6 md:px-10 shadow">

                    <div className="flex items-center">
                        <h2 className="text-2xl md:text-3xl text-asi-blue font-bold leading-none">About ASI</h2>
                    </div>

                    <p className={""}>Adventist-laymen's Services and Industries (ASI) is a dynamic organization that unites Seventh-day Adventist business owners, professionals, and supporting ministries in a shared mission. The organization is dedicated to supporting the Seventh-day Adventist Church through a unique approach that integrates faith with professional life.</p>

                    {/* Call to Action Button in its own row */}
                    <div className="flex justify-center mt-2">
                        <Link
                            href="/about"
                            className="bg-asi-blue hover:bg-blue-700 text-white py-2 px-8 rounded-lg inline-block font-medium transition-colors duration-200"
                    >
                        Learn More
                    </Link>
                </div>
        </div>
</section>
</div>
)
}
