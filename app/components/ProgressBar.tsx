interface ProgressBarProps {
    current: number;
    total: number;
    className?: string;
    variant?: 'default' | 'light';
}

export default function ProgressBar({ current, total, className = "", variant = "default" }: ProgressBarProps) {
    const percentage = Math.min((current / total) * 100, 100);
    const isLight = variant === 'light';

    return (
        <div className={`w-full ${className}`}>
            <div className="flex justify-between items-center mb-3">
                <span className={`text-base font-semibold ${isLight ? 'text-white' : 'text-slate-700'}`}>Funding Progress</span>
                <span className={`text-base font-medium ${isLight ? 'text-blue-100' : 'text-slate-600'}`}>
                    £{current.toLocaleString()} of £{total.toLocaleString()}
                </span>
            </div>
            <div className={`w-full rounded-full h-4 overflow-hidden ${isLight ? 'bg-white/20' : 'bg-slate-200'}`}>
                <div
                    className={`h-full rounded-full transition-all duration-500 ease-out ${isLight ? 'bg-white' : 'bg-gradient-to-r from-asi-blue to-asi-darkBlue'}`}
                    style={{ width: `${percentage}%` }}
                />
            </div>
            <div className="flex justify-between items-center mt-2">
                <span className={`text-sm ${isLight ? 'text-blue-100' : 'text-slate-500'}`}>
                    {percentage.toFixed(1)}% Complete
                </span>
                <span className={`text-sm ${isLight ? 'text-blue-100' : 'text-slate-500'}`}>
                    £{(total - current).toLocaleString()} remaining
                </span>
            </div>
        </div>
    );
}
