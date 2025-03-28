import Image from 'next/image'
import Link from 'next/link';
import MainHeader from '@/app/components/MainHeader';
import {Heading1, Heading2, Heading3} from "@/app/components/Headings";
import CTARounded from "@/app/components/CTARounded";
import Profile from '@/app/components/Profile';

export default function ContactUs() {
    return (
        <div className="flex items-center justify-center w-screen">
            <div className="max-w-screen-md mx-auto">
                <div className="text-left p-5">
                    <Heading1 text={"Contact Us"}/>
                </div>
            </div>
        </div>
    )
}