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

                    <p className="text-slate-600 leading-relaxed max-w-3xl mx-auto text-center mb-10">
                        At its core, ASI believes that each of us is called to ministry&mdash;wherever we
                        live, work, or study. Sharing our faith is not confined to the four walls of the
                        church or its official programmes. ASI exists to inspire and equip laypeople to get
                        personally involved in the worldwide proclamation of the Gospel, not waiting for the
                        organised church to prescribe every step, but supporting the church through our own
                        inspired initiatives.
                    </p>

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
                            <p>The story of ASI begins with two young educators &mdash; E.A. Sutherland and Percy
                                Magan &mdash; who left their positions at Emmanuel Missionary College to launch a
                                self-supporting training school in the American South. In June 1904, a steamboat
                                expedition led by Ellen White discovered the future site of Madison College near
                                Nashville, Tennessee. Despite rocky land and meagre funds, Sutherland and Magan
                                purchased the property in faith, and in October 1904 Madison College opened its doors
                                to its first eleven students.</p>
                            <p>Madison pioneered a model that combined education, healthcare, and agriculture into a
                                single self-supporting operation. Graduates fanned out across the South to establish
                                their own outposts &mdash; by 1915 there were 39 self-supporting groups across
                                Tennessee, Alabama, and North Carolina. At the heart of Madison were the principles
                                that would come to define ASI: faith, innovation, self-sacrifice, and an empowered
                                laity sharing Christ in everyday life.</p>
                            <p>In March 1947, representatives from approximately 25 self-supporting institutions met
                                in Cincinnati, Ohio, to formally organise the Association of Seventh-day Adventist
                                Self-Supporting Institutions. Ellen White&lsquo;s conviction that <em>&ldquo;the work
                                of God in this earth can never be finished until the men and women comprising our church
                                membership rally to the work&rdquo;</em> became its founding principle. In 1979, the
                                organisation broadened its vision and was renamed Adventist-laymen&lsquo;s Services and
                                Industries, with the motto: <em>Sharing Christ in the Marketplace.</em></p>
                            <p>ASI UK was formed in Leicester in 1983 as the first overseas ASI chapter. After a
                                period of dormancy, it was officially relaunched on 2 March 2024 at Newbold College
                                with church leaders present for the inauguration. Today, ASI UK continues to network,
                                equip, and empower Adventist lay professionals to share Christ in the marketplace.</p>
                        </div>
                        <Link href="/about/history"
                              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-asi-blue text-white text-sm font-medium rounded-lg hover:bg-asi-darkBlue transition-colors">
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                        <CTARounded
                            heading={"Constitution"}
                            subheading={"Fundamental principles, structure, and rules that govern ASI UK operations"}
                            href={"/constitution"}
                        />
                        <CTARounded
                            heading={"Leadership"}
                            subheading={"Meet the people behind ASI UK"}
                            href={"/leadership"}
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}
