import Image from 'next/image'
import Link from 'next/link';
import MainHeader from "@/app/components/MainHeader";
import CTARounded from "@/app/components/CTARounded";
import {Heading1, Heading2, Heading3, Heading4} from "@/app/components/Headings";

export const metadata = {
  title: "ASI UK | Join",
  description:
      "Join the UK chapter of Adventist-laymen's Services and Industries",
  keywords: [
    "Join ASI UK",
    "Join ASI",
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
    url: "https://asiuk.org/join",
    type: "website",
    title: "ASI UK | Join",
    description:
        "Apply to be a member of ASI UK",
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
    title: "ASI UK | Join",
    description:
        "Apply to be a member of ASI UK",
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

export function MembershipFormButton() {
  return (
      <CTARounded
          href={"https://forms.gle/WYLiMMsVrP8qjYdj6"}
          target="_blank"
          rel="noopener noreferrer"
          heading={"Membership Form"}
          subheading={"Join the movement of Adventist lay professionals in the UK"}
      />
  )
}

export default function About() {
  return (
  <div className="flex items-center justify-center w-screen">
    <div className="max-w-screen-md mx-auto">
    <MainHeader />
      <div className="text-left p-5">

      <Heading1 text={"Join"}/>
      <p>The ASI UK team welcomes your interest in joining our organisation. Established officially in 1947, ASI’s ideals date back to the 19th century. We are a group of dedicated individuals using our talents in service to God to make a positive impact in our community. If you wish to become a member, please complete this application form and be prepared to share CHRIST’S MESSAGE IN YOUR MARKETPLACE.</p>

      <MembershipFormButton />

      <Heading2 text={"Information for Membership"} id={"information-for-membership"}/>
      <p>Membership in ASI UK is open to any member of the Seventh-day Adventist Church who is in good and regular standing, manages a business, provides professional services, sells products, or has a supporting ministry. Members agree to align their business practices and personal lives with the goals and principles outlined in the organisation&lsquo;s mission and vision.</p>

      <div className="my-10">
        <Heading3 text={"Types of Membership in ASI UK"} />
        <p className="pb-5">An individual or organisation may qualify for ASI UK membership if it meets the following requirements:</p>
        <ol>
          <li>Is an individual that is employed in a profession or are self-employed and is a member of the Seventh-day Adventist Church.</li>
          <li>An organisation is owned and controlled by an individual who is a member of the Seventh-day Adventist Church.</li>
          <li>An individual who owns and/or operates a religious based organisation, self-supporting ministry, or mission project that complies with the Seventh-day Adventist Church’s K 05 05 definition of a Supporting Ministry, and where that organisation does not receive a salary or subsidies from any organisation within the SDA Church.</li>
        </ol>
        <p>Continuation of membership is contingent upon the member remaining in harmony with the principles of the Seventh-day Adventist Church. Additionally, individual members must maintain a strong spiritual standing and good relations with the Seventh-day Adventist Church.</p>
        
        <div className="my-6">
          <Heading4 text={"1. Ordinary Member"} />
          <p>These members include business owners, co-managers of companies, firms, and institutions, religious self-supporting ministries and/or mission projects that is K 05 05 compliant, and professionals specializing in various fields, such as accounting, law, medicine, banking, engineering, architecture, construction, amongst others. They may also be self-supporting workers who, despite having limited time, are committed to serving God and appreciate the vision of ASI. Collectively, they constitute the Annual General Meeting (AGM), one of the governing bodies of ASI UK. They approve all decisions made by the Executive Committee.</p>
          <p className="my-4">The membership fee is £100 per annum.</p>
        </div>

        <div className="my-6">
          <Heading4 text={"2. Supporting Member"} />
          <p>There are individuals who wish to support the organisation passively, or back specific projects based on their personal interests. These members do not participate in the decisions of organisation and are not eligible to vote during the AGM. However, their membership allows them to represent ASI UK in their cities, encouraging and motivating other laypeople about the organisation&lsquo;s purpose and mission.</p>
          <p className="my-4">The membership fee is £20 per annum.</p>
        </div>
      </div>

      <MembershipFormButton />

      </div>

      
    </div>
  </div>
  )
}