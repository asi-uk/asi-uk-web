"use client";
import Image from 'next/image'
import dynamic from 'next/dynamic'; // Import dynamic from 'next/dynamic'
import Link from 'next/link';
import EventIcon from '@mui/icons-material/Event';

const CountdownTimer = dynamic(() => import('./components/CountdownTimer'), { ssr: false });

export default function Home() {

  const targetDate = new Date('2024-03-02T19:00:00');

  return (
      <div className="flex items-center justify-center h-screen w-screen">
        <div className="max-w-screen-md mx-auto">
          <div className="flex p-10 items-center justify-center content-center mx-auto w-3/4 md:w-1/2">
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

            <div className="grid grid-cols-2 gap-5 m-5">
              <div className="group bg-slate-50 transition duration-300 ease-out hover:bg-slate-100 rounded-2xl p-5 ">
              <Link href="/about" className="text-center">
                <div>
                  <h2 className="text-lg md:text-xl font-bold text-asi-blue">
                    About <span className="transition duration-300 ease-in-out group-hover:translate-x-2 inline-block">-&gt;</span>
                  </h2>
                  <p className="text-sm md:text-base">Find out more about the mission and structure of ASI UK</p>
                </div>
              </Link>
              </div>

              <div className="group bg-slate-50 transition duration-300 ease-out hover:bg-slate-100 rounded-2xl p-5">
              <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSepfSgNKd0cxDILqxmI-HrfcoL4YN-gImb_7YekDqmBWD2wng/viewform" rel="noopener noreferrer" className="text-center">
                <div>
                  <h2 className="text-lg md:text-xl font-bold text-asi-blue">
                    Join <span className="transition duration-300 ease-in-out group-hover:translate-x-2 inline-block">-&gt;</span>
                  </h2>
                  <p className="text-sm md:text-base w-50">Join the movement of Adventist lay professionals in the UK</p>
                </div>
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
