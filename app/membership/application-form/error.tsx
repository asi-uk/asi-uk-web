'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function MembershipFormError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error('Membership form error:', error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
            <h1 className="text-4xl font-bold text-asi-blue mb-4">Application Error</h1>
            <p className="text-slate-500 mb-8 text-center max-w-md">
                Something went wrong with your membership application. Please try again or contact us if the problem persists.
            </p>
            <div className="flex gap-4">
                <button
                    onClick={reset}
                    className="bg-asi-blue hover:bg-asi-darkBlue text-white py-2 px-6 rounded-lg font-medium transition-colors duration-200"
                >
                    Try Again
                </button>
                <Link
                    href="/contact-us"
                    className="border border-asi-blue text-asi-blue hover:bg-asi-blue/5 py-2 px-6 rounded-lg font-medium transition-colors duration-200"
                >
                    Contact Us
                </Link>
            </div>
        </div>
    );
}
