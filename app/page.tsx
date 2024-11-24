import Image from 'next/image'
import dynamic from 'next/dynamic'; // Import dynamic from 'next/dynamic'
import Link from 'next/link';
import EventIcon from '@mui/icons-material/Event';
import HistoryIcon from '@mui/icons-material/History';
import CTARounded from "@/app/components/CTARounded";

export const metadata = {
  title: "ASI UK | Adventist-laymen‘s Services and Industries",
  description:
      "ASI is an organisation comprised of members of the Seventh-day Adventist church who are engaged in spreading the gospel of Christ to the world.",
  keywords: [
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
    url: "https://www.asiuk.org",
    type: "website",
    title: "ASI UK | Adventist-laymen‘s Services and Industries",
    description:
        "ASI is an organisation comprised of members of the Seventh-day Adventist church who are engaged in spreading the gospel of Christ to the world.",
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
    title: "ASI UK | Adventist-laymen‘s Services and Industries",
    description:
        "ASI is an organisation comprised of members of the Seventh-day Adventist church who are engaged in spreading the gospel of Christ to the world.",
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

export default function Home() {

  return (
      <div className="flex items-center justify-center min-h-screen w-screen">
        <div className="max-w-screen-md mx-auto">
          <div className="flex p-10 items-center justify-center content-center mx-auto w-3/4 md:w-5/12">
            <Image
              src="/asiLogo.svg"
              alt="ASI Logo"
              width={375}
              height={150}
              priority
              className="object-contain max-w-full max-h-full"
            />
          </div>
          <div>
            <div className="grid grid-cols-2 gap-5">
              <CTARounded
                href="/about"
                heading="About"
                subheading="Find out more about the mission and structure of ASI UK"
              />
              <CTARounded
                href="/join"
                heading="Join"
                subheading="Join the movement of Adventist lay professionals in the UK"
              />
            </div>
          </div>
        </div>
      </div>
  )
}
