import Image from 'next/image'
import Link from 'next/link';
import MainHeader from '@/app/components/MainHeader';
import {Heading1, Heading2} from "@/app/components/Headings";
import CTARounded from "@/app/components/CTARounded";

export const metadata = {
  title: "ASI UK | About",
  description:
      "Learn more about ASI UK",
  keywords: [
    "About ASI UK",
    "About ASI",
    "ASI",
    "ASI UK",
    "ASI-UK",
    "adventist",
    "adventist uk",
    "adventist laymen's services and industries",
    "ministry",
    "ministries",
  ],
  openGraph: {
    url: "https://asiuk.org/about",
    type: "website",
    title: "ASI UK | About",
    description:
        "Learn more about the UK chapter of Adventist Laymen's Services and Industries",
    images: [
      {
        url: "https://www.asiuk.org/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "ASIUK"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "ASI UK | About",
    description:
        "Learn more about the UK chapter of Adventist Laymen's Services and Industries",
    images: [
      {
        url: "https://www.asiuk.org/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "ASIUK"
      }
    ]
  },
}

export default function About() {
  return (
  <div className="flex items-center justify-center w-screen">
    <div className="max-w-screen-md mx-auto">
      <MainHeader />
      <div className="text-left p-5">

      <Heading1 text={"What is ASI?"} />
      <p className="pb-5">Adventist-laymen&lsquo;s Services and Industries (ASI) is an organisation comprised of members of the Seventh-day Adventist Church who are either employed in the private business, are self-employed, or hold managerial positions. The uniqueness of the organisation can be described in two parts:</p>
      <p className="pb-5">Firstly, we acknowledge that our time, talents, wealth, and our bodies belong to God, and we are merely stewards of these gifts. With this understanding, we are committed to using our professions to support the spread of the gospel message (Luke 9:1-3, Testimonies for the Church, vol. 4, page 469).</p>
      <p className="pb-5">Secondly, we pledge to support the diverse outreach programs of the Seventh-day Adventist Church, which include health, education, missionary work, community ministry, family, and other special projects. ASI has approximately 2,000 members worldwide, comprising of men and women from all walks of life. These members reflect the diversity found within our church. </p>
      <p className="pb-5">ASI&lsquo;s philosophy is to advocate for a Christ-centred way of life that is expressed through a daily commitment to God. ASI members endeavour to embody God&lsquo;s love and share it with the millions of people they encounter in their business or professional engagements each year. ASI&lsquo;s motto is: SHARING CHRIST IN THE MARKETPLACE!</p>

      <Heading2 text={"History"} />
      <p>ASI’s history is rooted in Madison College, an Adventist self-supporting institution established in 1904 near Nashville, with Ellen White a stern supporter of the concept.  The organisation grew and during its official formation meeting in 1947 frequent reference was made to Ellen White&lsquo;s statement “The work of God in this earth can never be finished until the men and women comprising our church membership rally to the work, and unite their efforts with those of ministers and church officers” Gospel Workers, p. 352. That is what ASI is all about - lay people inspiring each other for mission work and serving hand in hand with the church ministers and officers.  Togetherness and inspiration!</p>

      <CTARounded
        heading={"Constitution"}
        subheading={"Fundamental principles, structure, and rules that govern ASI UK operations"}
        href={"/constitution"}
      />

      <CTARounded
          heading={"Join"}
          subheading={"Join the movement of Adventist lay professionals in the UK"}
          href={"/join"}
      />

      </div>
    </div>
  </div>
  )
}