import CTARounded from "@/app/components/CTARounded";
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "@/components/ui/collapsible";
import {ChevronDown, Mail, Shield, Users} from "lucide-react";
import Link from "next/link";

type Member = {
    name: string;
    role: string;
};

const currentExecutives: Member[] = [
    {name: "Angel Alishev", role: "President"},
    {name: "Bianna Espinal", role: "Vice President"},
    {name: "Tashana Samuels", role: "Vice President for Evangelism"},
    {name: "Silvia Garcia Portilla", role: "Treasurer"},
    {name: "Eric Welch", role: "Secretary"},
];

const currentCommittee: Member[] = [
    {name: "Charlicia Sinclair", role: "Director of Youth"},
    {name: "Rachel Graham-Tohue", role: "Director for Logistics"},
    {name: "Sam Walters", role: "Projects Committee"},
    {name: "Jason Garcia Portilla", role: "Projects Committee"},
];

const previousExecutives: Member[] = [
    {name: "Daniel Klop", role: "President"},
    {name: "Karlene Agard", role: "Vice President"},
    {name: "Craig Gooden", role: "Vice President for Chapter Growth"},
    {name: "Angel Alishev", role: "Vice President for Evangelism"},
    {name: "Michael Garkov", role: "Treasurer"},
    {name: "Eric Welch", role: "Secretary"},
];

const previousCommittee: Member[] = [
    {name: "Jason Garcia Portilla", role: "Projects Committee"},
    {name: "Tashana Samuels", role: "Projects Committee"},
    {name: "Sam Walters", role: "Director for Youth Relations"},
    {name: "Rachel Graham-Tohue", role: "Director for Logistics"},
];

function initials(name: string) {
    return name
        .split(" ")
        .map((part) => part[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();
}

function MemberCard({member}: {member: Member}) {
    return (
        <div className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-slate-50">
            <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-asi-blue/10 text-sm font-semibold text-asi-blue">
                {initials(member.name)}
            </div>
            <div className="min-w-0">
                <p className="font-medium text-slate-900 leading-tight">{member.name}</p>
                <p className="text-sm text-slate-500">{member.role}</p>
            </div>
        </div>
    );
}

function MemberGroup({title, icon, members}: {title: string; icon: React.ReactNode; members: Member[]}) {
    return (
        <div className="bg-white rounded-2xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-4">
                <div className="rounded-full bg-asi-blue/10 p-2 shrink-0">{icon}</div>
                <h3 className="font-semibold text-lg text-asi-darkBlue">{title}</h3>
            </div>
            <div className="divide-y divide-slate-100">
                {members.map((member, i) => (
                    <MemberCard key={`${member.name}-${i}`} member={member}/>
                ))}
            </div>
        </div>
    );
}

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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                        <MemberGroup
                            title="Executive Officers"
                            icon={<Shield className="h-5 w-5 text-asi-blue"/>}
                            members={currentExecutives}
                        />
                        <MemberGroup
                            title="Committee Members & Directors"
                            icon={<Users className="h-5 w-5 text-asi-blue"/>}
                            members={currentCommittee}
                        />
                    </div>

                    <div className="mt-10 text-center">
                        <Link href="/contact-us"
                              className="inline-flex items-center gap-2 rounded-full bg-asi-blue px-6 py-3 text-white font-medium hover:bg-asi-darkBlue transition-colors">
                            <Mail className="h-5 w-5"/>
                            Contact the team
                        </Link>
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
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                                <MemberGroup
                                    title="Executive Officers"
                                    icon={<Shield className="h-5 w-5 text-asi-blue"/>}
                                    members={previousExecutives}
                                />
                                <MemberGroup
                                    title="Committee Members & Directors"
                                    icon={<Users className="h-5 w-5 text-asi-blue"/>}
                                    members={previousCommittee}
                                />
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
