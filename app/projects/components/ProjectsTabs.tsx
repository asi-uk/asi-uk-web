"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ApplicationCyclePanel from "./ApplicationCyclePanel";
import FundedProjectsPanel from "./FundedProjectsPanel";
import type { ProjectCycle } from "@/data/projects";

const statusColors: Record<string, string> = {
    'applications-open': 'bg-green-100 text-green-700',
    'funding-in-progress': 'bg-amber-100 text-amber-700',
    'completed': 'bg-slate-100 text-slate-600',
};

export default function ProjectsTabs({ cycles }: { cycles: ProjectCycle[] }) {
    const defaultYear = String(cycles[0]?.year);

    return (
        <Tabs defaultValue={defaultYear} className="w-full">
            <TabsList className="w-full h-auto flex bg-white border border-slate-200 rounded-xl p-1 mb-8">
                {cycles.map((cycle) => (
                    <TabsTrigger
                        key={cycle.year}
                        value={String(cycle.year)}
                        className="group/tab flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-slate-500 data-[state=active]:bg-asi-blue data-[state=active]:text-white data-[state=active]:shadow-sm transition-all"
                    >
                        <span className="font-bold">{cycle.year}</span>
                        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${statusColors[cycle.status] ?? 'bg-slate-100 text-slate-600'} group-data-[state=active]/tab:bg-white/20 group-data-[state=active]/tab:text-white`}>
                            {cycle.statusLabel}
                        </span>
                    </TabsTrigger>
                ))}
            </TabsList>

            {cycles.map((cycle) => (
                <TabsContent key={cycle.year} value={String(cycle.year)}>
                    {cycle.applicationFormUrl ? (
                        <ApplicationCyclePanel cycle={cycle} />
                    ) : (
                        <FundedProjectsPanel cycle={cycle} />
                    )}
                </TabsContent>
            ))}
        </Tabs>
    );
}
