import { Heart, FileText, Hammer } from 'lucide-react';
import Link from 'next/link';

export default function Projects() {

return (
    <div className="relative w-full overflow-x-hidden">
        {/* Header Section */}
        <div className="text-white">
            <div className="max-w-5xl bg-asi-blue md:rounded-3xl mx-auto px-4 py-12 md:py-16">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Donate to ASI UK
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-normal text-blue-100 mb-4">
                        Support our 2025 Project Cycle
                    </h2>
                    <p className="text-sm md:text-lg text-blue-50 max-w-2xl mx-auto leading-relaxed mb-8">
                    ASI UK is supporting many exciting ministries and projects during this project cycle. Every bit of support will go far to supporting the spreading the gospel here in the UK and abroad.
                    </p>
                    
                    {/* Funding Goal */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 mb-8 inline-block">
                        <div className="flex items-center justify-center gap-3">
                            <h3 className="text-xl font-semibold text-white">Funding Goal:</h3>
                            <p className="text-3xl font-bold text-white">£40,730</p>
                        </div>
                    </div>
                    
                    {/* Call to Action Buttons */}
                    <div className="flex flex-col text-xl sm:flex-row gap-4 justify-center items-center">
                        {/* Pledge Donation Button */}
                        <Link
                            href="https://docs.google.com/forms/d/e/1FAIpQLSeQnkWKHB6XGeBssro0FAh2BV5SKYSDIYu29wu3o-nAk22zLA/viewform?usp=dialog"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-white text-asi-blue hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-sm hover:shadow-md"
                        >
                            <FileText className="h-5 w-5" />
                            Pledge Donation
                        </Link>
                        
                        {/* Donate Now Button */}
                        <Link
                            href="https://donate.stripe.com/eVa6oNg2Ka7l21a288"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-white text-asi-blue hover:bg-red-50 px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-sm hover:shadow-md"
                        >
                            <Heart className="h-5 w-5 text-red-600" />
                            Donate Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        {/* Projects Section */}
        <div className="bg-slate-50">
            <div className="max-w-5xl mx-auto px-4 py-16 md:py-20">
                <div className="text-center">
                    <div className="flex items-center justify-center mb-6">
                        <Hammer className="mr-3 h-6 w-6 text-asi-blue"/>
                        <h2 className="text-3xl md:text-4xl font-bold text-asi-blue">
                            See Our Projects
                        </h2>
                    </div>
                    <p className="text-sm md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-6">
                        Discover the exciting ministries and evangelistic initiatives that your donations support. 
                        Learn about our approved projects and see the impact we're making across the UK.
                    </p>
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 bg-asi-blue hover:bg-asi-darkBlue text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 shadow-sm hover:shadow-md"
                    >
                        <Hammer className="h-5 w-5" />
                        View Projects
                    </Link>
                </div>
            </div>
        </div>
    </div>
        );
    }