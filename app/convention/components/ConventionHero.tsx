import Link from 'next/link';
import Image from 'next/image';
import { CalendarDays, MapPin, ArrowRight } from 'lucide-react';
import { CONVENTION_2026 } from '@/data/convention';

interface ConventionHeroProps {
    /**
     * "home"   — used at the top of the site homepage. Sits flush under the
     *            fixed header (negative top margin), shorter vertical padding.
     * "page"   — used at the top of the /convention page itself. Full bleed,
     *            taller padding, no negative margin compensation.
     */
    variant?: 'home' | 'page';
}

export default function ConventionHero({ variant = 'page' }: ConventionHeroProps) {
    const isHome = variant === 'home';

    return (
        <section className="relative w-full overflow-hidden bg-asi-darkBlue text-white -mt-[100px] md:-mt-[110px] pt-[100px] md:pt-[110px]">
            {/* Background photo */}
            <Image
                src="https://res.cloudinary.com/disrkguox/image/upload/v1771541116/DSC_4758_p6p9wv.jpg"
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
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-asi-darkBlue/90 via-asi-blue/85 to-asi-blue/90"
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

            <div
                className={`relative mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 md:grid-cols-[1.3fr_1fr] md:items-center md:gap-12 md:px-8 ${
                    isHome ? 'py-20 md:py-24' : 'py-24 md:py-32'
                }`}
            >
                {/* Left — copy */}
                <div className="flex flex-col items-start gap-7">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur">
                        ASI UK Convention 2026
                    </span>

                    <h1 className="font-bold leading-[0.95] tracking-tight text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                        <span className="block">Annual</span>
                        <span className="block">Convention</span>
                    </h1>

                    <div className="flex flex-wrap gap-3">
                        <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
                            <CalendarDays className="h-4 w-4" />
                            {CONVENTION_2026.datesShort}
                        </span>
                        <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
                            <MapPin className="h-4 w-4" />
                            {CONVENTION_2026.venueShort}
                        </span>
                    </div>

                    <p className="max-w-xl text-base text-white/80 md:text-lg">
                        A weekend for Adventist professionals, entrepreneurs, and ministry
                        leaders to explore how faith shapes daily work and mission.
                    </p>

                    <div className="flex flex-col gap-3 sm:flex-row">
                        <Link
                            href={CONVENTION_2026.registrationUrl}
                            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-7 py-3.5 font-semibold text-asi-blue shadow-sm transition hover:bg-white/90"
                        >
                            Register Now
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link
                            href={isHome ? '/convention' : '/convention/programme'}
                            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/70 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
                        >
                            {isHome ? 'Learn More' : 'View Programme'}
                        </Link>
                    </div>
                </div>

                {/* Right — poster / hero image */}
                <div className="relative hidden md:block">
                    <div className="relative aspect-[5/7] w-full max-w-sm ml-auto overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/20">
                        <Image
                            src={CONVENTION_2026.heroImageUrl}
                            alt="Hands holding a small plant growing in soil"
                            fill
                            sizes="(min-width: 1024px) 380px, 40vw"
                            className="object-cover"
                            priority={isHome}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-asi-darkBlue/60 via-transparent to-transparent" />
                    </div>
                </div>
            </div>
        </section>
    );
}
