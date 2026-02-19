import CTARounded from "@/app/components/CTARounded";
import { FileDown } from "lucide-react";
import type { ProjectCycle } from "@/data/projects";

export default function ApplicationCyclePanel({ cycle }: { cycle: ProjectCycle }) {
    return (
        <div className="bg-gradient-to-br from-asi-blue to-asi-darkBlue rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 md:p-8 text-white">
                <div className="mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">
                        {cycle.year} Project Funding Cycle
                    </h2>
                    <p className="text-blue-100 text-sm md:text-lg leading-relaxed">
                        Get the resources you need to bring your evangelistic vision to life
                    </p>
                </div>

                {/* Deadline Banner */}
                {cycle.applicationDeadline && (
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-6 border border-white/20">
                        <p className="text-white text-center font-medium">
                            Application Deadline: <span className="font-bold">{cycle.applicationDeadline}</span>
                        </p>
                    </div>
                )}

                {/* Application Forms */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {cycle.applicationFormUrl && (
                        <CTARounded
                            heading="Main Application Form"
                            href={cycle.applicationFormUrl}
                            containerClass="bg-white hover:bg-slate-100 transition-colors p-4 rounded-lg"
                            headingClass="text-sm font-medium text-asi-blue"
                            Icon={FileDown}
                        />
                    )}
                    {cycle.budgetFormUrl && (
                        <CTARounded
                            heading="Budget Form"
                            href={cycle.budgetFormUrl}
                            containerClass="bg-white hover:bg-slate-100 transition-colors p-4 rounded-lg"
                            headingClass="text-sm font-medium text-asi-blue"
                            Icon={FileDown}
                        />
                    )}
                </div>

                {cycle.submitEmail && (
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                        <p className="text-white text-sm md:text-base text-center">
                            Submit completed applications to{' '}
                            <a href={`mailto:${cycle.submitEmail}`} className="font-semibold underline hover:text-blue-200">
                                {cycle.submitEmail}
                            </a>
                        </p>
                    </div>
                )}
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

                {cycle.guidelinesUrl && (
                    <div className="text-center mt-8">
                        <CTARounded
                            heading="Download Complete Application Guidelines"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={cycle.guidelinesUrl}
                            containerClass="inline-flex bg-asi-blue hover:bg-asi-darkBlue text-white py-3 px-6 rounded-lg transition-colors"
                            headingClass="text-base font-medium"
                            Icon={FileDown}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
