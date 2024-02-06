"use client";
import Image from 'next/image'
import dynamic from 'next/dynamic'; // Import dynamic from 'next/dynamic'
import Link from 'next/link';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const CountdownTimer = dynamic(() => import('../components/CountdownTimer'), { ssr: false });

export default function Event() {

  const targetDate = new Date('2024-03-02T18:00:00');

    return (
      <div className="flex items-center justify-center w-screen">
        <div className="max-w-screen-md mx-auto">
        <Link href="/">
        <div className="flex p-8 items-center justify-center hover:bg-slate-50 rounded-xl content-center w-7/12 md:w-1/3 mx-auto mt-8">
            <Image
              src="/asiLogo.svg"
              alt="ASI Logo"
              width={375}
              height={150}
              priority
              className="object-contain max-w-full max-h-full"
            />
          </div>
          </Link>
          <div className="text-left p-5">
            <h1 className="text-asi-blue text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">Formation Event</h1>

            </div>

            <div className="grid grid-cols-2 gap-5 mx-5">
            <div className="text-center border-2 border-slate-100 rounded-2xl p-5">
                <h2 className="text-asi-blue text-lg md:text-xl font-bold"><EventIcon className="mx-2 my-1" />When</h2>
                <h3 className="text-2xl font-medium">2 March<span className="hidden md:inline">, 2024</span></h3>
                <p>6:00 pm</p>
              </div>
              <a target="_blank" href="https://maps.app.goo.gl/G7cqnqTfbJYeJ6tMA" rel="noopener noreferrer">
                <div className="group text-center border-2 border-slate-100 rounded-2xl p-5 transition duration-300 ease-out hover:bg-slate-100">
                  <h2 className="text-asi-blue text-lg md:text-xl font-bold"><LocationOnIcon className="mx-2 my-1 transition duration-300 ease-in-out group-hover:translate-y-[-5px] inline-block" />Where</h2>
                  <h3 className="text-2xl font-medium">Newbold <span className="hidden md:inline">College</span></h3>
                  <p>Moor Close</p>
                </div>
                </a>
            </div>

            <div className="text-left p-5">

            <h2 className="text-asi-blue text-2xl font-bold my-2 text-center md:text-left">Overview</h2>
            <p>History will be made at Newbold College on <strong>2nd March, 2024</strong>, when ASI-UK will be relaunched. Dr. Daniel Duda (TED President), Pr. Egaln Brooks (BUC President), and other church officials are expected to be present at the solemn inauguration ceremony. <span className="underline decoration-asi-grey decoration-2">All church members who would like to know more, or be part of it, are invited to Newbold that afternoon. </span>Let us all join in prayer for the Lord to propel the launch of ASU-UK into a powerful network, led by the Spirit, inspiring members for mission work so that multitudes of people in the UK can be reached for Jesus.</p>

            <div className="bg-slate-50 p-5 rounded-xl my-5">
              <CountdownTimer targetDate={targetDate}/>
            </div>  
            

            <h2 className="text-asi-blue text-2xl font-bold my-2 text-center md:text-left">Schedule</h2>
            <div className="p-5">
              <ul class="list-disc">
                <li>6:00pm - Formation event starts in Moor Close</li>
              </ul>
            </div>
            
            <h2 className="text-asi-blue text-2xl font-bold mt-4 mb-2 text-center md:text-left">About ASI</h2>
            <p className="my-4">Adventist-laymen’s Services & Industries (ASI) is a worldwide organization of Adventist laypeople who are actively involved in supporting the mission work of the church.  This unique and diverse group of laypeople includes professionals, business owners, supporting ministries and missionaries. In short, ASI members are Adventists from every walk of life. The lifestyle of ASI members is their motto - “Sharing Christ in the marketplace”.</p>

            </div>

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
    )
  }