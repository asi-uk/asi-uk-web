"use client";
import Image from 'next/image'
import dynamic from 'next/dynamic'; // Import dynamic from 'next/dynamic'
import Link from 'next/link';
import EventIcon from '@mui/icons-material/Event';
import HistoryIcon from '@mui/icons-material/History';
import CTARounded from "@/app/components/CTARounded";

const CountdownTimer = dynamic(() => import('./components/CountdownTimer'), { ssr: false });

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
