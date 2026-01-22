"use client";

import {Heading2} from "@/app/components/Headings";
import { MembershipForm } from "./form";


const MembershipPage : React.FC = () => {

    return (
        <div className="w-full bg-slate-50">
            <div className="max-w-screen-md mx-auto">
                <div className="p-5 pt-10">
                    <Heading2 text={"Membership Form"}/>
                    <MembershipForm />
                </div>
            </div>
        </div>
    );
};

export default MembershipPage;