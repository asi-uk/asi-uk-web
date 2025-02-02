"use client";

import MainHeader from "@/app/components/MainHeader";
import {Heading1, Heading2, Heading3, Heading4} from "@/app/components/Headings";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { MembershipForm } from "./form";


const MembershipPage : React.FC = () => {

    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");

    const today = new Date().toISOString().split('T')[0];

    const titleOptions = [
        { value: 'Mr', label: 'Mr' },
        { value: 'Mrs', label: 'Mrs' },
        { value: 'Miss', label: 'Miss' },
        { value: 'Dr', label: 'Dr' }
    ];

    return (
        <div className="flex items-center justify-center w-screen">
            <div className="max-w-screen-md mx-auto">
                <MainHeader/>
                <div className="text-left p-5">
                    <div className="py-5">
                        <Heading1 text={"Join"}/>
                        <p>Carefully read the information about the type of memberships here. To apply for ASI UK membership please complete this form
                            and provide all information asked for. Once the form has been completed please press the "Send" button found at the top. Membership fees can be paid into the bank account found at the bottom of this form.</p>
                    </div>
                    <div className="py-5">
                        <Heading3 text={"Types of Memberships"}/>
                        <p>Ordinary Membership as an individual</p>
                        <p>Ordinary Membership as a business, organisation or self-supporting ministry</p>
                        <p>Supporting Membership</p>
                    </div>

                    <MembershipForm />
                </div>
            </div>
        </div>
    );
};

export default MembershipPage;