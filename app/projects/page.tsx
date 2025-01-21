import Image from 'next/image'
import Link from 'next/link';
import MainHeader from '@/app/components/MainHeader';
import {Heading1, Heading2, Heading3, Heading4, Heading5} from "@/app/components/Headings";
import CTARounded from "@/app/components/CTARounded";
import {FileDown} from "lucide-react";

export const metadata = {
    title: "ASI UK | Projects",
    description:
        "Apply for project funding from ASI UK",
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
            "Apply for evangelistic project funding from ASI UK",
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
            "Apply for evangelistic project funding from ASI UK",
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
    return (
        <div className="flex items-center justify-center w-screen">
            <div className="max-w-screen-md mx-auto">
                <MainHeader />
                <div className="text-left p-5">

                    <Heading1 text={"Project Funding"} />
                    <p>The 2025 ASI UK project application cycle is now open. Check in on this page for updates regarding application deadlines and more.</p>

                    <div className="bg-white rounded-2xl p-5 my-5 mb-10 flex flex-col items-center outline outline-5 outline-asi-blue">
                        <span className={`text-xl text-asi-blue font-bold`}>Application Forms</span>
                        <p className={`m-2`}>Download and fill out the following application forms to apply for ASI UK funding</p>
                        <div className="flex items-center w-full justify-between gap-5">
                            <CTARounded
                                heading={"Main Application Form"}
                                href={"https://c1crerc0h1fs4ljz.public.blob.vercel-storage.com/asi-uk-project-funding-application-form.docx"}
                                containerClass={"bg-slate-50 flex-1"}
                                headingClass={"text-sm md:text-base font-normal"}
                                Icon={FileDown}
                            />
                            <CTARounded
                                heading={"Budget Form"}
                                href={"https://c1crerc0h1fs4ljz.public.blob.vercel-storage.com/asi-uk-project-funding-budget-form.xlsx"}
                                containerClass={"bg-slate-50 flex-1"}
                                headingClass={"text-sm md:text-base font-normal"}
                                Icon={FileDown}
                            />
                        </div>
                    </div>


                    <Heading2 text={"Funding Application Guidelines"}/>

                    <Heading5 text={"Project Criteria"}/>
                    <ol className={`list-decimal pb-5`}>
                        <li>The project must be primarily evangelistic in nature.</li>
                        <li>The applicant must supply a budget for the project.</li>
                        <li>Applications must be submitted in English on the official ASI Application form, which can be
                            requested via the ASI UK website.
                        </li>
                    </ol>

                    <Heading5 text={"Application Criteria"}/>
                    <ol className={`list-decimal pb-5`} start={4}>
                        <li>Applications are only accepted from ASI UK members.</li>
                        <li>The Applicant must be in good and regular standing with the Seventh-day Adventist Church.
                        </li>
                        <li>Applications are only accepted from organisations and groups that work not for profit or
                            from individuals applying for funding to join evangelistic campaigns.</li>
                        <li>ASI UK funding must not be available for profit-making purposes.</li>
                        <li>Seventh-day Adventist entities will be considered for funding for special evangelistic projects, but not for regular church budget items unless ASI UK is directly involved with the project.</li>
                    </ol>

                    <Heading5 text={"Funding"} />
                    <ol className={`list-decimal pb-5`} start={9}>
                        <li>Funding will be limited to not more than 50% of the total project cost.</li>
                        <li>In most cases funding will be released in interim payments upon receipt of progress reports.</li>
                    </ol>

                    <Heading5 text={"Application Submission Deadline"} />
                    <ol className={`list-decimal pb-5`} start={11}>
                        <li>Applications must be received by the deadline date announced on the ASI UK website, in order to be considered for inclusion in the next Convention project list.</li>
                    </ol>

                    <Heading5 text={"Interim Applications"} />
                    <ol className={`list-decimal pb-5`} start={12}>
                        <li>
                            Interim Applications may be considered for approval and may receive funding before the next Convention at the discretion of the Projects Committee, and subject to approval by the ASI UK Ex Com, in the following circumstances:
                            <ol className={`list-decimal mx-6 my-2`}>
                                <li>If the Application is received after the “Submission Deadline”.</li>
                                <li>If the Project is due to start before the next Convention and imminent funds are needed to start it.</li>
                            </ol>
                            <p className={`my-2`}>Priority will be given to projects applying through the standard Convention funding cycle. Interim Applications, if approved, will receive funding after the funds for the standard Convention projects have been allocated first, and if there are funding leftover, except for cases of projects requiring funds for immediate start. The total amount of funding, if any, for Interim Applications will be restricted to 20% of the total project value funded at the forthcoming Convention.</p>
                            <p className={`my-2`}>All of the above regular above guidelines apply to the Interim Applications, except for the Application Submission Deadline (point 12 above).</p>
                        </li>
                    </ol>
                    <Heading4 text={"Recommended Additional Criteria"} />
                    <p>All applications will be considered. Below is a list of recommended criteria (not compulsory), which will give the application a higher chance of approval, if they are met. Your application does not need to meet the criteria below in order to be considered and approved.</p>
                    <ul className={`list-disc p-5 space-y-3`}>
                        <li>If an organization is applying for funding, its Board of Directors should be comprised of less than 50% family members.</li>
                        <li>If the Applicant invested some of their own funds in their project or at least invested “service time” in their project, that will show that the Applicant is committed to their own project.</li>
                        <li>If the project has already started that may show that the project is more feasible and achievable.</li>
                        <li>Priority will be given to projects run in the territory of the UK.</li>
                    </ul>

                    <CTARounded
                        heading={"Download Application Guidelines"}
                        target="_blank"
                        rel="noopener noreferrer"
                        href={"https://c1crerc0h1fs4ljz.public.blob.vercel-storage.com/asi-uk-project-funding-guidelines.pdf"}
                        containerClass={"bg-slate-50 flex-1"}
                        headingClass={"text-sm md:text-base font-normal"}
                        Icon={FileDown}
                    />

                </div>
            </div>
        </div>
    )
}