import CTARounded from "@/app/components/CTARounded";
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "@/components/ui/collapsible";
import {ChevronDown, Shield, Users} from "lucide-react";

export default function Leadership() {
    return (
        <div>
            {/* Hero */}
            <section className="w-full border-b border-slate-200">
                <div className="max-w-5xl mx-auto px-4 py-12 md:py-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-asi-blue mb-4">Leadership</h1>
                    <p className="text-sm md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        The current executive committee and team members of ASI UK
                    </p>
                </div>
            </section>

            {/* Current Team */}
            <section className="w-full">
                <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
                    <h2 className="text-3xl font-bold text-asi-blue text-center mb-10">Current Team (2025–2027)</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Executive Officers */}
                        <div className="bg-white rounded-2xl p-6 border border-slate-200">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="rounded-full bg-asi-blue/10 p-2 shrink-0">
                                    <Shield className="h-5 w-5 text-asi-blue"/>
                                </div>
                                <h3 className="font-semibold text-lg text-asi-darkBlue">Executive Officers</h3>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <p className="font-medium text-slate-900">Angel Alishev</p>
                                    <p className="text-sm text-slate-500">President</p>
                                </div>
                                <div>
                                    <p className="font-medium text-slate-900">Bianna Espinal</p>
                                    <p className="text-sm text-slate-500">Vice President</p>
                                </div>
                                <div>
                                    <p className="font-medium text-slate-900">Tashana Samuels</p>
                                    <p className="text-sm text-slate-500">Vice President for Evangelism</p>
                                </div>
                                <div>
                                    <p className="font-medium text-slate-900">Silvia Garcia Portilla</p>
                                    <p className="text-sm text-slate-500">Treasurer</p>
                                </div>
                                <div>
                                    <p className="font-medium text-slate-900">Eric Welch</p>
                                    <p className="text-sm text-slate-500">Secretary</p>
                                </div>
                            </div>
                        </div>

                        {/* Committee Members & Directors */}
                        <div className="bg-white rounded-2xl p-6 border border-slate-200">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="rounded-full bg-asi-blue/10 p-2 shrink-0">
                                    <Users className="h-5 w-5 text-asi-blue"/>
                                </div>
                                <h3 className="font-semibold text-lg text-asi-darkBlue">Committee Members & Directors</h3>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <p className="font-medium text-slate-900">Sam Walters</p>
                                    <p className="text-sm text-slate-500">Projects Committee</p>
                                </div>
                                <div>
                                    <p className="font-medium text-slate-900">Jason Garcia Portilla</p>
                                    <p className="text-sm text-slate-500">Projects Committee</p>
                                </div>
                                <div>
                                    <p className="font-medium text-slate-900">Charlicia Sinclair</p>
                                    <p className="text-sm text-slate-500">Director of Youth</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Previous Team + CTA */}
            <section className="w-full bg-slate-50">
                <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
                    <Collapsible>
                        <CollapsibleTrigger
                            className="flex items-center justify-between w-full p-4 bg-asi-blue text-white rounded-2xl hover:bg-asi-darkBlue transition-colors">
                            <span className="text-lg font-semibold">Previous Leadership Team (2024-2025)</span>
                            <ChevronDown
                                className="h-5 w-5 transition-transform duration-200 data-[state=open]:rotate-180"/>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="pt-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Executive Officers */}
                                <div className="bg-white rounded-2xl p-6 border border-slate-200">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="rounded-full bg-asi-blue/10 p-2 shrink-0">
                                            <Shield className="h-5 w-5 text-asi-blue"/>
                                        </div>
                                        <h3 className="font-semibold text-lg text-asi-darkBlue">Executive Officers</h3>
                                    </div>
                                    <div className="space-y-4">
                                        <div>
                                            <p className="font-medium text-slate-900">Daniel Klop</p>
                                            <p className="text-sm text-slate-500">President</p>
                                        </div>
                                        <div>
                                            <p className="font-medium text-slate-900">Karlene Agard</p>
                                            <p className="text-sm text-slate-500">Vice President</p>
                                        </div>
                                        <div>
                                            <p className="font-medium text-slate-900">Craig Gooden</p>
                                            <p className="text-sm text-slate-500">Vice President for Chapter Growth</p>
                                        </div>
                                        <div>
                                            <p className="font-medium text-slate-900">Angel Alishev</p>
                                            <p className="text-sm text-slate-500">Vice President for Evangelism</p>
                                        </div>
                                        <div>
                                            <p className="font-medium text-slate-900">Michael Garkov</p>
                                            <p className="text-sm text-slate-500">Treasurer</p>
                                        </div>
                                        <div>
                                            <p className="font-medium text-slate-900">Eric Welch</p>
                                            <p className="text-sm text-slate-500">Secretary</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Committee Members & Directors */}
                                <div className="bg-white rounded-2xl p-6 border border-slate-200">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="rounded-full bg-asi-blue/10 p-2 shrink-0">
                                            <Users className="h-5 w-5 text-asi-blue"/>
                                        </div>
                                        <h3 className="font-semibold text-lg text-asi-darkBlue">Committee Members &
                                            Directors</h3>
                                    </div>
                                    <div className="space-y-4">
                                        <div>
                                            <p className="font-medium text-slate-900">Jason Garcia Portilla</p>
                                            <p className="text-sm text-slate-500">Projects Committee</p>
                                        </div>
                                        <div>
                                            <p className="font-medium text-slate-900">Tashana Samuels</p>
                                            <p className="text-sm text-slate-500">Projects Committee</p>
                                        </div>
                                        <div>
                                            <p className="font-medium text-slate-900">Sam Walters</p>
                                            <p className="text-sm text-slate-500">Director for Youth Relations</p>
                                        </div>
                                        <div>
                                            <p className="font-medium text-slate-900">Rachel Graham-Tohue</p>
                                            <p className="text-sm text-slate-500">Director for Logistics</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CollapsibleContent>
                    </Collapsible>

                    <div className="mt-10">
                        <CTARounded
                            heading={"Contact Us"}
                            subheading={"Get in touch with ASI UK"}
                            href={"/contact-us"}
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}
