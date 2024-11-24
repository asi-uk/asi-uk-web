import React from 'react';
import Image from "next/image";
import Link from "next/link";

const MainHeader: React.FC = () => {
    return (
        <Link href="/">
            <div
                className="flex p-8 items-center justify-center hover:bg-slate-50 rounded-xl content-center w-7/12 md:w-1/3 mx-auto mt-8">
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
    );
};

export default MainHeader;