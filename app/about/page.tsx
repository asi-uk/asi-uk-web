import CTARounded from "@/app/components/CTARounded";

export default function About() {
    return (
        <div className="flex items-center justify-center w-screen">
            <div className="max-w-screen-md mx-auto">
                <div className="text-left p-5">

                    <h1 className="heading-page">What is ASI?</h1>
                    <p className="pb-5">Adventist-laymen&lsquo;s Services and Industries (ASI) is an organisation
                        comprised of members of the Seventh-day Adventist Church who are business owners, professionals,
                        or ministry leaders. The uniqueness of the organisation
                        can be described in two parts:</p>
                    <p className="pb-5">Firstly, we acknowledge that our time, talents, wealth, and our bodies belong to
                        God, and we are merely stewards of these gifts. With this understanding, we are committed to
                        using our professions to support the spread of the gospel message (Luke 9:1-3, Testimonies for
                        the Church, vol. 4, page 469).</p>
                    <p className="pb-5">Secondly, we pledge to support the diverse outreach programs of the Seventh-day
                        Adventist Church, which include health, education, missionary work, community ministry, family,
                        and other special projects. ASI has approximately 2,000 members worldwide, comprising of men and
                        women from all walks of life. These members reflect the diversity found within our church. </p>
                    <p className="pb-5">ASI&lsquo;s philosophy is to advocate for a Christ-centred way of life that is
                        expressed through a daily commitment to God. ASI members endeavour to embody God&lsquo;s love
                        and share it with the millions of people they encounter in their business or professional
                        engagements each year. ASI&lsquo;s motto is: SHARING CHRIST IN THE MARKETPLACE!</p>

                    <h2 className="heading-section">Our History</h2>
                    <p className="pb-5">ASI UK was formed in 1983 when the British Union Conference President, Harold
                        Calkins, invited ASI members from the United States to meet with interested business and
                        professional lay people in Leicester. That weekend, the first overseas chapter of ASI was
                        established &mdash; a historic milestone for the movement.</p>
                    <p className="pb-5">Initially known as the Adventist Business and Professionals Association from
                        1990, the UK chapter was renamed back to ASI UK in 2006, aligning with other European chapters
                        following the formation of ASI Europe in 1998. Today, ASI UK continues to network, equip, and
                        empower Adventist lay professionals through evangelistic initiatives, humanitarian projects,
                        workshops, and seminars &mdash; maintaining strong links with ADRA and the British Union
                        Conference of Seventh-day Adventists.</p>

                    <CTARounded
                        heading={"Our History"}
                        subheading={"From Madison College in 1904 to ASI UK today"}
                        href={"/about/history"}
                        containerClass="my-8"
                    />

                    <CTARounded
                        heading={"Constitution"}
                        subheading={"Fundamental principles, structure, and rules that govern ASI UK operations"}
                        href={"/constitution"}
                        containerClass="my-8"
                    />

                    <CTARounded
                        heading={"Join"}
                        subheading={"Join the movement of Adventist lay professionals in the UK"}
                        href={"/membership"}
                        containerClass="my-8"
                    />

                </div>
            </div>
        </div>
    )
}
