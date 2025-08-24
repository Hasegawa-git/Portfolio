export default function ProgressBar({ value, max }) {
    const ratio = Math.max(0, Math.min(1, value / Math.max(1, max)));
    return (
        <div className="h-1.5 w-full rounded-full bg-orange-100 overflow-hidden">
            <div
                className="h-full rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 transition-all"
                style={{ width: `${ratio * 100}%` }}
            />
        </div>
    );
}
