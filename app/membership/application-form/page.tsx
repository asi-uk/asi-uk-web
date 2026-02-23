"use client";

import { MembershipForm } from "./form";


const MembershipPage : React.FC = () => {

    return (
        <div className="w-full min-h-full bg-slate-50 overflow-x-hidden">
            <div className="max-w-screen-md mx-auto">
                <div className="p-5 pt-10 pb-20">
                    <h2 className="heading-section">Membership Application Form</h2>
                    <MembershipForm />
                </div>
            </div>
        </div>
    );
};

export default MembershipPage;
