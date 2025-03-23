"use client";

import MainHeader from "@/app/components/MainHeader";
import {Heading1, Heading2, Heading3, Heading4} from "@/app/components/Headings";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { MembershipForm } from "./form";


const MembershipPage : React.FC = () => {

    return (
        <div className="flex flex-col items-center justify-center w-screen">
            <div className="max-w-screen-md mx-auto w-full">
                <MainHeader/>

            </div>

            {/* Full-width slate grey background section */}
            <div className="w-full bg-slate-50">
                <div className="max-w-screen-md mx-auto">
                    <div className="p-5 pt-10">
                        <Heading2 text={"Membership Form"}/>
                        <MembershipForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MembershipPage;