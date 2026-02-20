import CTARounded from "@/app/components/CTARounded";
import Link from "next/link";
import {HandHeart, Globe, Target, BookOpen, ArrowRight} from "lucide-react";

export default function About() {
    return (
        <div>
            {/* Hero */}
            <section className="w-full border-b border-slate-200">
                <div className="max-w-5xl mx-auto px-4 py-12 md:py-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-asi-blue mb-4">What is ASI?</h1>
                    <p className="text-sm md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Adventist-laymen&lsquo;s Services and Industries (ASI) is an organisation
                        comprised of members of the Seventh-day Adventist Church who are business owners, professionals,
                        or ministry leaders—united in the common mission of sharing Christ in the marketplace.
                    </p>
                </div>
            </section>

            {/* Our Mission */}
            <section className="w-full">
                <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
                    <h2 className="text-3xl font-bold text-asi-blue text-center mb-10">Our Mission</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Stewardship */}
                        <div className="bg-white rounded-2xl p-6 border border-slate-200">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="rounded-full bg-asi-blue/10 p-2 shrink-0">
                                    <HandHeart className="h-5 w-5 text-asi-blue"/>
                                </div>
                                <h3 className="font-semibold text-lg text-asi-darkBlue">Stewardship</h3>
                            </div>
                            <p className="text-slate-600 leading-relaxed">
                                We acknowledge that our time, talents, wealth, and our bodies belong to
                                God, and we are merely stewards of these gifts. With this understanding, we are
                                committed to
                                using our professions to support the spread of the gospel message (Luke 9:1-3,
                                Testimonies for
                                the Church, vol. 4, page 469).
                            </p>
                        </div>

                        {/* Outreach */}
                        <div className="bg-white rounded-2xl p-6 border border-slate-200">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="rounded-full bg-asi-blue/10 p-2 shrink-0">
                                    <Globe className="h-5 w-5 text-asi-blue"/>
                                </div>
                                <h3 className="font-semibold text-lg text-asi-darkBlue">Outreach</h3>
                            </div>
                            <p className="text-slate-600 leading-relaxed">
                                We pledge to support the diverse outreach programs of the Seventh-day
                                Adventist Church, which include health, education, missionary work, community ministry,
                                family,
                                and other special projects. ASI has approximately 2,000 members worldwide, comprising of
                                men and
                                women from all walks of life. These members reflect the diversity found within our
                                church.
                            </p>
                        </div>

                        {/* Our Philosophy */}
                        <div className="bg-white rounded-2xl p-6 border border-slate-200">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="rounded-full bg-asi-blue/10 p-2 shrink-0">
                                    <Target className="h-5 w-5 text-asi-blue"/>
                                </div>
                                <h3 className="font-semibold text-lg text-asi-darkBlue">Our Philosophy</h3>
                            </div>
                            <p className="text-slate-600 leading-relaxed">
                                ASI&lsquo;s philosophy is to advocate for a Christ-centred way of life that is
                                expressed through a daily commitment to God. ASI members endeavour to embody God&lsquo;s
                                love
                                and share it with the millions of people they encounter in their business or
                                professional
                                engagements each year. ASI&lsquo;s motto is: SHARING CHRIST IN THE MARKETPLACE!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our History */}
            <section className="w-full bg-slate-50">
                <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
                    <h2 className="text-3xl font-bold text-asi-blue text-center mb-10">Our History</h2>
                    <div className="max-w-3xl mx-auto bg-white rounded-2xl p-6 border border-slate-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="rounded-full bg-asi-blue/10 p-2 shrink-0">
                                <BookOpen className="h-5 w-5 text-asi-blue"/>
                            </div>
                            <h3 className="font-semibold text-lg text-asi-darkBlue">Our Story</h3>
                        </div>
                        <div className="space-y-4 text-slate-600 leading-relaxed">
                            <p>ASI traces its roots to Madison College, founded near Nashville, Tennessee in 1904
                                as a pioneering self-supporting missionary training school. The network of lay-driven
                                institutions it inspired was formally organised in 1947 as the Association of
                                Seventh-day
                                Adventist Self-Supporting Institutions, later renamed Adventist-laymen&lsquo;s Services
                                and Industries in 1979.</p>
                            <p>ASI UK was formed in Leicester, UK in 1983 as the first overseas ASI chapter.
                                Unfortunately, after decades of spirit-led ministry, the chapter went into a period of
                                dormancy. On 2 March 2024, ASI UK was officially relaunched at Newbold College with
                                church leaders present for the inauguration. Today, ASI UK continues to network, equip, and empower Adventist
                                lay professionals to share Christ in the marketplace through networking, financial support, and training.</p>
                        </div>
                        <Link href="/about/history"
                              className="inline-flex items-center gap-1.5 text-asi-blue hover:underline text-sm font-medium mt-4">
                            Read the full history
                            <ArrowRight className="h-4 w-4"/>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Explore More */}
            <section className="w-full">
                <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
                    <h2 className="text-3xl font-bold text-asi-blue text-center mb-10">Explore More</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <CTARounded
                            heading={"Our History"}
                            subheading={"From Madison College in 1904 to ASI UK today"}
                            href={"/about/history"}
                        />
                        <CTARounded
                            heading={"Constitution"}
                            subheading={"Fundamental principles, structure, and rules that govern ASI UK operations"}
                            href={"/constitution"}
                        />
                        <CTARounded
                            heading={"Join"}
                            subheading={"Join the movement of Adventist lay professionals in the UK"}
                            href={"/membership"}
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}
