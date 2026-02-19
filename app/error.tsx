'use client';

import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error('Application error:', error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
            <h1 className="text-4xl font-bold text-asi-blue mb-4">Something went wrong</h1>
            <p className="text-slate-500 mb-8 text-center max-w-md">
                An unexpected error occurred. Please try again.
            </p>
            <button
                onClick={reset}
                className="bg-asi-blue hover:bg-asi-darkBlue text-white py-2 px-6 rounded-lg font-medium transition-colors duration-200"
            >
                Try Again
            </button>
        </div>
    );
}
