import Link from 'next/link';
import CTARounded from "@/app/components/CTARounded";
import { FileDown, Heart, ChevronDown } from "lucide-react";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import ProgressBar from "@/app/components/ProgressBar";
import ProjectCard from "@/app/projects/components/ProjectCard";
import { approvedProjects2025, FUNDING_RECEIVED_2025 } from "@/data/projects";

export const metadata = {
    title: "ASI UK | Project Funding",
    description:
        "Apply for ASI UK project funding for your evangelistic initiatives. 2026 applications now open - deadline Thursday 23rd April 2026.",
    keywords: [
        "ASI UK Projects",
        "Evangelism",
        "ASI Evangelism",
        "ASI UK Evangelism",
        "ASI Projects",
        "ASI Ministries",
        "ASI",
        "ASI UK",
        "ASI-UK",
        "adventist projects",
        "adventist uk",
        "adventist laymen's services and industries",
        "ministry",
        "ministries",
        "2026",
        "project application",
        "apply for funding",
        "evangelistic funding",
    ],
    openGraph: {
        url: "https://asiuk.org/projects",
        type: "website",
        title: "ASI UK | Project Funding - 2026 Applications Open",
        description:
            "Apply for ASI UK project funding for your evangelistic initiatives. 2026 applications now open - deadline Thursday 23rd April 2026.",
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
        title: "ASI UK | Project Funding - 2026 Applications Open",
        description:
            "Apply for ASI UK project funding for your evangelistic initiatives. 2026 applications now open - deadline Thursday 23rd April 2026.",
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

export default function Projects() {
    const totalGoal = approvedProjects2025.reduce((sum, project) => sum + project.amount, 0);

    return (
        <div className="relative w-full overflow-x-hidden">
            {/* Header Section */}
            <div className="border-b border-slate-200">
                <div className="max-w-5xl mx-auto px-4 py-12 md:py-10">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-asi-blue mb-4">
                            Project Funding
                        </h1>
                        <p className="text-sm md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Supporting evangelistic initiatives across the UK through strategic funding and partnerships. Apply for funding to bring your ministry vision to life.
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Container */}
            <div className="max-w-5xl mx-auto md:px-4 py-8">
                {/* 2026 Application Section - Prominent */}
                <section className="mb-12 px-4 md:px-0">
                    <div className="bg-gradient-to-br from-asi-blue to-asi-darkBlue rounded-2xl shadow-lg overflow-hidden">
                        <div className="p-6 md:p-8 text-white">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <h2 className="text-2xl md:text-3xl font-bold">2026 Project Funding Cycle</h2>
                                        <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">Applications Open</span>
                                    </div>
                                    <p className="text-blue-100 text-sm md:text-lg leading-relaxed">Get the resources you need to bring your evangelistic vision to life</p>
                                </div>
                            </div>

                            {/* Deadline Banner */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-6 border border-white/20">
                                <p className="text-white text-center font-medium">
                                    Application Deadline: <span className="font-bold">Thursday 23rd April 2026</span>
                                </p>
                            </div>

                            {/* Application Forms */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <CTARounded
                                    heading={"Main Application Form"}
                                    href={"https://c1crerc0h1fs4ljz.public.blob.vercel-storage.com/asi-uk-project-funding-application-form.docx"}
                                    containerClass={"bg-white hover:bg-slate-100 transition-colors p-4 rounded-lg"}
                                    headingClass={"text-sm font-medium text-asi-blue"}
                                    Icon={FileDown}
                                />
                                <CTARounded
                                    heading={"Budget Form"}
                                    href={"https://c1crerc0h1fs4ljz.public.blob.vercel-storage.com/asi-uk-project-funding-budget-form.xlsx"}
                                    containerClass={"bg-white hover:bg-slate-100 transition-colors p-4 rounded-lg"}
                                    headingClass={"text-sm font-medium text-asi-blue"}
                                    Icon={FileDown}
                                />
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                                <p className="text-white text-sm md:text-base text-center">
                                    Submit completed applications to{' '}
                                    <a href="mailto:evangelism@asiuk.org" className="font-semibold underline hover:text-blue-200">
                                        evangelism@asiuk.org
                                    </a>
                                </p>
                            </div>
                        </div>

                        {/* Application Guidelines */}
                        <div className="bg-white p-6 md:p-8">
                            <h3 className="text-xl font-semibold text-asi-blue mb-6">Application Guidelines</h3>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-base font-medium text-asi-blue mb-3">Project Criteria</h4>
                                    <ol className="list-decimal ml-6 space-y-2 text-slate-700 text-sm md:text-base">
                                        <li>The project must be primarily evangelistic in nature.</li>
                                        <li>The applicant must supply a budget for the project.</li>
                                        <li>Applications must be submitted in English on the official ASI Application form.</li>
                                    </ol>
                                </div>

                                <div>
                                    <h4 className="text-base font-medium text-asi-blue mb-3">Application Criteria</h4>
                                    <ol className="list-decimal ml-6 space-y-2 text-slate-700 text-sm md:text-base" start={4}>
                                        <li>Applications are only accepted from ASI UK members.</li>
                                        <li>The Applicant must be in good and regular standing with the Seventh-day Adventist Church.</li>
                                        <li>Applications are only accepted from organisations and groups that work not for profit or from individuals applying for funding to join evangelistic campaigns.</li>
                                        <li>ASI UK funding must not be available for profit-making purposes.</li>
                                        <li>Seventh-day Adventist entities will be considered for funding for special evangelistic projects, but not for regular church budget items unless ASI UK is directly involved with the project.</li>
                                    </ol>
                                </div>

                                <div>
                                    <h4 className="text-base font-medium text-asi-blue mb-3">Funding</h4>
                                    <ol className="list-decimal ml-6 space-y-2 text-slate-700 text-sm md:text-base" start={9}>
                                        <li>Funding will be limited to not more than 50% of the total project cost.</li>
                                        <li>In most cases funding will be released in interim payments upon receipt of progress reports.</li>
                                    </ol>
                                </div>

                                <div>
                                    <h4 className="text-base font-medium text-asi-blue mb-3">Recommended Additional Criteria</h4>
                                    <p className="text-slate-600 mb-3 text-sm md:text-base">All applications will be considered. Below is a list of recommended criteria (not compulsory), which will give the application a higher chance of approval.</p>
                                    <ul className="list-disc ml-6 space-y-2 text-slate-700 text-sm md:text-base">
                                        <li>If an organization is applying for funding, its Board of Directors should be comprised of less than 50% family members.</li>
                                        <li>If the Applicant invested some of their own funds in their project or at least invested &quot;service time&quot; in their project, that will show that the Applicant is committed to their own project.</li>
                                        <li>If the project has already started that may show that the project is more feasible and achievable.</li>
                                        <li>Priority will be given to projects run in the territory of the UK.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="text-center mt-8">
                                <CTARounded
                                    heading={"Download Complete Application Guidelines"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={"https://c1crerc0h1fs4ljz.public.blob.vercel-storage.com/asi-uk-project-funding-guidelines.pdf"}
                                    containerClass={"inline-flex bg-asi-blue hover:bg-asi-darkBlue text-white py-3 px-6 rounded-lg transition-colors"}
                                    headingClass={"text-base font-medium"}
                                    Icon={FileDown}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Divider */}
                <div className="relative mb-8 md:mb-12">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-slate-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="bg-slate-100 px-4 text-slate-500 font-medium">2025 Funded Projects</span>
                    </div>
                </div>

                {/* 2025 Projects Section - Collapsible */}
                <section className="mb-16 px-4 md:px-0">
                    <Collapsible className="w-full">
                        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                            <CollapsibleTrigger className="group w-full">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between p-6 md:p-8 bg-slate-50 border-b border-slate-200 hover:bg-slate-100 transition-colors">
                                    <div className="text-left">
                                        <h2 className="text-xl md:text-2xl font-bold text-asi-blue mb-1">2025 Approved Projects</h2>
                                        <p className="text-slate-600 text-sm md:text-base">View projects funded in the 2025 cycle</p>
                                    </div>
                                    <div className="flex items-center gap-2 mt-4 md:mt-0 text-asi-blue font-medium">
                                        <span className="text-sm">View Projects</span>
                                        <ChevronDown className="h-5 w-5 transition-transform group-data-[state=open]:rotate-180" />
                                    </div>
                                </div>
                            </CollapsibleTrigger>

                            <CollapsibleContent>
                                <div className="p-4 md:p-8">
                                    {/* Info Banner */}
                                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8">
                                        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4">
                                            <p className="text-blue-800 text-sm md:text-base text-center">
                                                Fundraising for 2025 projects is still ongoing and funds are being disbursed to approved projects.
                                            </p>
                                            <Link
                                                href="/donate"
                                                className="inline-flex items-center gap-2 bg-asi-blue hover:bg-asi-darkBlue text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
                                            >
                                                <Heart className="h-4 w-4" />
                                                Donate
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Funding Progress */}
                                    <div className="mb-8">
                                        <ProgressBar
                                            current={FUNDING_RECEIVED_2025}
                                            total={totalGoal}
                                            className="w-full"
                                        />
                                    </div>

                                    {/* Projects List */}
                                    <div className="space-y-4 md:space-y-8">
                                        {approvedProjects2025.length > 0 ? (
                                            approvedProjects2025.map((project, index) => (
                                                <ProjectCard key={index} {...project} />
                                            ))
                                        ) : (
                                            <div className="text-center py-12 bg-slate-50 rounded-xl">
                                                <Heart className="h-12 w-12 text-slate-400 mx-auto mb-4"/>
                                                <h3 className="text-lg font-medium text-slate-600 mb-2">Projects Coming Soon</h3>
                                                <p className="text-slate-500">2025 approved projects will be displayed here after the convention.</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </CollapsibleContent>
                        </div>
                    </Collapsible>
                </section>
            </div>
        </div>
    );
}
