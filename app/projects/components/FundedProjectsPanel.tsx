import Link from 'next/link';
import { Heart } from "lucide-react";
import ProgressBar from "@/app/components/ProgressBar";
import ProjectCard from "@/app/projects/components/ProjectCard";
import type { ProjectCycle } from "@/data/projects";

export default function FundedProjectsPanel({ cycle }: { cycle: ProjectCycle }) {
    const totalGoal = cycle.projects
        .filter(project => !project.cancelled)
        .reduce((sum, project) => sum + project.amount, 0);

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-4 md:p-8">
                {/* Info Banner */}
                {cycle.infoBanner && (
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4">
                            <p className="text-blue-800 text-sm md:text-base text-center">
                                {cycle.infoBanner}
                            </p>
                            {cycle.showDonateLink && (
                                <Link
                                    href="/donate"
                                    className="inline-flex items-center gap-2 bg-asi-blue hover:bg-asi-darkBlue text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
                                >
                                    <Heart className="h-4 w-4" />
                                    Donate
                                </Link>
                            )}
                        </div>
                    </div>
                )}

                {/* Funding Progress */}
                {cycle.fundingReceived != null && totalGoal > 0 && (
                    <div className="mb-8">
                        <ProgressBar
                            current={cycle.fundingReceived}
                            total={totalGoal}
                            pledged={cycle.fundingPledged}
                            className="w-full"
                        />
                    </div>
                )}

                {/* Projects List */}
                <div className="space-y-4 md:space-y-8">
                    {cycle.projects.length > 0 ? (
                        cycle.projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))
                    ) : (
                        <div className="text-center py-12 bg-slate-50 rounded-xl">
                            <Heart className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                            <h3 className="text-lg font-medium text-slate-600 mb-2">Projects Coming Soon</h3>
                            <p className="text-slate-500">{cycle.year} approved projects will be displayed here after the convention.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
