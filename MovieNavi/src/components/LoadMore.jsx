export default function LoadMore({ show, onClick, disabled }) {
    if (!show) return null;
    return (
        <div className="mt-6 flex justify-center">
            <button
                onClick={onClick}
                disabled={disabled}
                className="rounded-full border border-zinc-700 px-5 py-2 text-sm hover:bg-zinc-800 disabled:opacity-50"
            >
                もっと見る
            </button>
        </div>
    );
}
