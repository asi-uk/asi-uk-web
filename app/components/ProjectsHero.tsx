import Link from 'next/link';
import Image from 'next/image';
import { Heart, HandCoins, ArrowRight } from 'lucide-react';
import ProgressBar from '@/app/components/ProgressBar';
import {
    approvedProjects2026,
    FUNDING_RECEIVED_2026,
    FUNDING_PLEDGED_2026,
} from '@/data/projects';

const DONATE_URL = 'https://donate.stripe.com/eVa6oNg2Ka7l21a288';

export default function ProjectsHero() {
    const totalGoal = approvedProjects2026
        .filter((project) => !project.cancelled)
        .reduce((sum, project) => sum + project.amount, 0);

    return (
        <section className="relative w-full overflow-hidden bg-asi-darkBlue text-white -mt-[100px] md:-mt-[110px] pt-[100px] md:pt-[110px]">
            {/* Background photo */}
            <Image
                src="https://res.cloudinary.com/disrkguox/image/upload/v1782074664/elly-m-y7mLAsTztQs-unsplash_vndxnl.jpg"
                alt=""
                aria-hidden
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
            />

            {/* Blue gradient overlay */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-asi-darkBlue/75 via-asi-blue/75 to-asi-darkBlue/75"
            />

            {/* Decorative radial glow */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{
                    backgroundImage:
                        'radial-gradient(ellipse 70% 60% at 20% 10%, rgba(255,255,255,0.15), transparent 60%), radial-gradient(ellipse 60% 50% at 85% 90%, rgba(244,197,55,0.18), transparent 60%)',
                }}
            />

            <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-7 px-6 py-20 text-center md:px-8 md:py-28">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur">
                    2026 Project Cycle
                </span>

                <h1 className="font-bold leading-[0.95] tracking-tight text-white text-5xl sm:text-6xl md:text-7xl">
                    Fund the Mission
                </h1>

                <p className="max-w-xl text-base text-white/80 md:text-lg">
                    ASI UK is supporting evangelistic ministries and projects across the
                    UK and beyond. Every gift helps share the gospel — see how far we've
                    come and help us reach the goal.
                </p>

                {/* Funding progress */}
                <div className="w-full max-w-2xl rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                    <ProgressBar
                        current={FUNDING_RECEIVED_2026}
                        total={totalGoal}
                        pledged={FUNDING_PLEDGED_2026}
                        variant="light"
                        className="text-white"
                    />
                </div>

                {/* Call to action */}
                <div className="flex flex-col gap-3 sm:flex-row">
                    <Link
                        href={DONATE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-7 py-3.5 font-semibold text-asi-blue shadow-sm transition hover:bg-white/90"
                    >
                        <Heart className="h-5 w-5 text-red-600" />
                        Donate Now
                    </Link>
                    <Link
                        href="/projects"
                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/70 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
                    >
                        See Our Projects
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

                <Link
                    href="/donate"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-100 underline-offset-4 transition hover:text-white hover:underline"
                >
                    <HandCoins className="h-4 w-4" />
                    Prefer to pledge? Make a pledge instead
                </Link>
            </div>
        </section>
    );
}
