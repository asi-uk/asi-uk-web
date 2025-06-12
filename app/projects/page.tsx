import Image from 'next/image'
import Link from 'next/link';
import CTARounded from "@/app/components/CTARounded";
import {FileDown, MapPin, Heart, Download, ExternalLink, ChevronDown} from "lucide-react";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";

// Reusable Project Card Component
interface ProjectMedia {
    type: 'image' | 'video' | 'flyer';
    url: string;
    title?: string;
    thumbnail?: string;
}

interface ProjectProps {
    title: string;
    amount: number;
    location: string;
    description: string;
    media?: ProjectMedia[];
}

function ProjectCard({title, amount, location, description, media}: ProjectProps) {
    return (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 mb-8">
            {/* Project Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
                <div>
                    <h3 className="text-xl font-bold text-asi-blue mb-2">{title}</h3>
                    <div className="flex items-center text-slate-600 mb-2">
                        <MapPin className="h-4 w-4 mr-2"/>
                        <span className="text-sm">{location}</span>
                    </div>
                </div>
                <div className="text-right">
                    <div className="flex items-center gap-2 justify-end md:justify-start">
                        <Heart className="h-5 w-5 text-red-500"/>
                        <span className="text-2xl font-bold text-asi-blue">£{amount.toLocaleString()}</span>
                    </div>
                    <p className="text-sm text-slate-500">ASI UK Support</p>
                </div>
            </div>

            {/* Project Description */}
            <div className="mb-6">
                <p className="text-slate-700 leading-relaxed">{description}</p>
            </div>

            {/* Project Media */}
            {media && media.length > 0 && (
                <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-asi-blue">Project Media</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {media.map((item, index) => (
                            <div key={index} className="border border-slate-200 rounded-lg overflow-hidden">
                                {item.type === 'image' && (
                                    <div className="aspect-video relative">
                                        <Image
                                            src={item.url}
                                            alt={item.title || `${title} image ${index + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                )}

                                {item.type === 'video' && (
                                    <div className="aspect-video">
                                        <iframe
                                            src={item.url}
                                            title={item.title || `${title} video ${index + 1}`}
                                            className="w-full h-full"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    </div>
                                )}

                                {item.type === 'flyer' && (
                                    <div className="p-4 bg-slate-50">
                                        <a
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 text-asi-blue hover:text-asi-darkBlue transition-colors"
                                        >
                                            <Download className="h-5 w-5"/>
                                            <span
                                                className="font-medium">{item.title || `Download Flyer ${index + 1}`}</span>
                                            <ExternalLink className="h-4 w-4"/>
                                        </a>
                                    </div>
                                )}

                                {item.title && item.type !== 'flyer' && (
                                    <div className="p-3 bg-slate-50">
                                        <p className="text-sm font-medium text-slate-700">{item.title}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export const metadata = {
    title: "ASI UK | Projects",
    description:
        "View approved ASI UK projects and apply for funding for new evangelistic initiatives",
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
    ],
    openGraph: {
        url: "https://asiuk.org/projects",
        type: "website",
        title: "ASI UK | Projects",
        description:
            "View approved ASI UK projects and apply for funding for new evangelistic initiatives",
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
        title: "ASI UK | Projects",
        description:
            "View approved ASI UK projects and apply for funding for new evangelistic initiatives",
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
    // Sample projects data - you can replace these with your actual approved projects
    const approvedProjects: ProjectProps[] = [
        {
            title: "Urban Evangelism Initiative",
            amount: 15000,
            location: "London, UK",
            description: "A comprehensive urban evangelism project focused on reaching young professionals in the London area through innovative digital outreach, community events, and personal Bible studies. This initiative aims to establish sustainable relationships and create pathways for spiritual growth in urban communities.",
            media: [
                {
                    type: 'image',
                    url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
                    title: 'Community Outreach Event'
                },
                {
                    type: 'video',
                    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                    title: 'Project Overview Video'
                },
                {
                    type: 'flyer',
                    url: '#',
                    title: 'Project Information Flyer'
                }
            ]
        }
    ];

    return (
        <div className="relative w-full overflow-x-hidden">
            <div className="max-w-4xl mx-auto px-4 py-8">

                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-asi-blue mb-4">ASI UK Projects</h1>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                        Supporting evangelistic initiatives across the UK through strategic funding and partnerships.
                        Discover our approved projects making an impact in communities, and learn how to apply for
                        funding for your ministry.
                    </p>
                </div>

                {/* Approved Projects Section */}
                <section className="mb-16">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-asi-blue mb-2">Approved Projects
                                2025</h2>
                            <p className="text-slate-600">Projects currently supported by ASI UK funding</p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm text-slate-500">Total Funding</p>
                            <p className="text-2xl font-bold text-asi-blue">
                                £{approvedProjects.reduce((sum, project) => sum + project.amount, 0).toLocaleString()}
                            </p>
                        </div>
                    </div>

                    {/* Projects List */}
                    <div className="space-y-8">
                        {approvedProjects.length > 0 ? (
                            approvedProjects.map((project, index) => (
                                <ProjectCard key={index} {...project} />
                            ))
                        ) : (
                            <div className="text-center py-12 bg-slate-50 rounded-xl">
                                <Heart className="h-12 w-12 text-slate-400 mx-auto mb-4"/>
                                <h3 className="text-lg font-medium text-slate-600 mb-2">Projects Coming Soon</h3>
                                <p className="text-slate-500">2025 approved projects will be displayed here after the
                                    convention.</p>
                            </div>
                        )}
                    </div>
                </section>

                {/* Application Section - Collapsible */}
                <section className="mb-16">
                    <Collapsible className="w-full">
                        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                            <div className="flex items-center justify-between p-6 border-b border-slate-200">
                                <div>
                                    <h2 className="text-xl font-bold text-asi-blue">Apply for Project Funding</h2>
                                    <p className="text-slate-600 mt-2">Application forms and detailed guidelines for new
                                        projects</p>
                                </div>
                                <CollapsibleTrigger
                                    className="group flex items-center space-x-1 rounded-md px-3 py-2 text-sm font-medium text-asi-blue hover:bg-slate-100 transition-colors">
                                    <span>View Application Information</span>
                                    <ChevronDown
                                        className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180"/>
                                </CollapsibleTrigger>
                            </div>

                            <CollapsibleContent className="p-6 space-y-8">
                                <div className="bg-slate-50 rounded-xl p-6">
                                    <h3 className="text-lg font-semibold text-asi-blue mb-4">2026 Project Cycle</h3>
                                    <p className="text-slate-600 mb-6">
                                        Do you have an evangelistic project that needs funding? The 2026 ASI UK project
                                        application details will be posted here before the end of this year.
                                        If you have any questions about the project funding process, please reach out
                                        to <a
                                        href="mailto:evangelism@asiuk.org"
                                        className="text-asi-blue underline hover:text-asi-darkBlue"
                                    >
                                        evangelism@asiuk.org
                                    </a>.
                                    </p>
                                </div>


                                {/* Application Process */}
                                <div className="bg-slate-50 rounded-xl p-6">
                                    <h3 className="text-lg font-semibold text-asi-blue mb-4">2025 Project Cycle</h3>
                                    <p className="text-slate-600 mb-6">
                                        <span className="font-semibold">The 2025 ASI UK project application cycle is now closed.</span> Approved
                                        projects have been posted on the top of this page.
                                    </p>

                                    <p className="text-slate-600 mb-6">
                                        For reference, the application resources and guidelines from the 2025 project cycle are available below:
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                        <CTARounded
                                            heading={"Main Application Form"}
                                            href={"https://c1crerc0h1fs4ljz.public.blob.vercel-storage.com/asi-uk-project-funding-application-form.docx"}
                                            containerClass={"bg-asi-blue/10 hover:bg-asi-blue/20 transition-colors p-4 rounded-lg border border-asi-blue/20"}
                                            headingClass={"text-sm font-medium text-asi-blue"}
                                            Icon={FileDown}
                                        />
                                        <CTARounded
                                            heading={"Budget Form"}
                                            href={"https://c1crerc0h1fs4ljz.public.blob.vercel-storage.com/asi-uk-project-funding-budget-form.xlsx"}
                                            containerClass={"bg-asi-blue/10 hover:bg-asi-blue/20 transition-colors p-4 rounded-lg border border-asi-blue/20"}
                                            headingClass={"text-sm font-medium text-asi-blue"}
                                            Icon={FileDown}
                                        />
                                    </div>


                                    {/* Detailed Guidelines */}
                                    <div>
                                        <h3 className="text-lg font-normal text-asi-blue mb-6">Application
                                            Guidelines</h3>

                                        <div className="space-y-8">
                                            <div>
                                                <h4 className="text-base font-normal text-asi-blue mb-4">Project
                                                    Criteria</h4>
                                                <ol className="list-decimal ml-6 space-y-2 text-slate-700">
                                                    <li>The project must be primarily evangelistic in nature.</li>
                                                    <li>The applicant must supply a budget for the project.</li>
                                                    <li>Applications must be submitted in English on the official
                                                        ASI
                                                        Application form.
                                                    </li>
                                                </ol>
                                            </div>

                                            <div>
                                                <h4 className="text-base font-normal text-asi-blue mb-4">Application
                                                    Criteria</h4>
                                                <ol className="list-decimal ml-6 space-y-2 text-slate-700"
                                                    start={4}>
                                                    <li>Applications are only accepted from ASI UK members.</li>
                                                    <li>The Applicant must be in good and regular standing with the
                                                        Seventh-day Adventist Church.
                                                    </li>
                                                    <li>Applications are only accepted from organisations and groups
                                                        that
                                                        work not for profit or from individuals applying for funding
                                                        to join
                                                        evangelistic campaigns.
                                                    </li>
                                                    <li>ASI UK funding must not be available for profit-making
                                                        purposes.
                                                    </li>
                                                    <li>Seventh-day Adventist entities will be considered for
                                                        funding for
                                                        special evangelistic projects, but not for regular church
                                                        budget
                                                        items unless ASI UK is directly involved with the project.
                                                    </li>
                                                </ol>
                                            </div>

                                            <div>
                                                <h4 className="text-base font-normal text-asi-blue mb-4">Funding</h4>
                                                <ol className="list-decimal ml-6 space-y-2 text-slate-700"
                                                    start={9}>
                                                    <li>Funding will be limited to not more than 50% of the total
                                                        project
                                                        cost.
                                                    </li>
                                                    <li>In most cases funding will be released in interim payments
                                                        upon
                                                        receipt of progress reports.
                                                    </li>
                                                </ol>
                                            </div>

                                            <div>
                                                <h4 className="text-base font-normal text-asi-blue mb-4">Recommended
                                                    Additional Criteria</h4>
                                                <p className="text-slate-600 mb-4">All applications will be
                                                    considered.
                                                    Below is a list of recommended criteria (not compulsory), which
                                                    will
                                                    give the application a higher chance of approval.</p>
                                                <ul className="list-disc ml-6 space-y-2 text-slate-700">
                                                    <li>If an organization is applying for funding, its Board of
                                                        Directors
                                                        should be comprised of less than 50% family members.
                                                    </li>
                                                    <li>If the Applicant invested some of their own funds in their
                                                        project
                                                        or at least invested "service time" in their project, that
                                                        will show
                                                        that the Applicant is committed to their own project.
                                                    </li>
                                                    <li>If the project has already started that may show that the
                                                        project is
                                                        more feasible and achievable.
                                                    </li>
                                                    <li>Priority will be given to projects run in the territory of
                                                        the UK.
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="text-center mt-6">
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
                            </CollapsibleContent>
                        </div>
                    </Collapsible>
                </section>
            </div>
        </div>
    );
}