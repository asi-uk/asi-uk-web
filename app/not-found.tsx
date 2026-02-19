import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
            <h1 className="text-6xl font-bold text-asi-blue mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-slate-700 mb-2">Page Not Found</h2>
            <p className="text-slate-500 mb-8 text-center max-w-md">
                The page you are looking for does not exist or has been moved.
            </p>
            <Link
                href="/"
                className="bg-asi-blue hover:bg-asi-darkBlue text-white py-2 px-6 rounded-lg font-medium transition-colors duration-200"
            >
                Return Home
            </Link>
        </div>
    );
}
