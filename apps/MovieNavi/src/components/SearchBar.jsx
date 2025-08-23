export default function SearchBar({
    value,
    onChange,
    onSubmit,
    disabled,
    variant = "sm",               // "sm" | "lg"
    placeholder = "作品名で検索（例: ハリー・ポッターと賢者の石）",
}) {
    const h = variant === "lg"
        ? "h-14 sm:h-16 text-base sm:text-lg"
        : "h-11 sm:h-12 text-sm";

    return (
        <form onSubmit={onSubmit} className="w-full" role="search">
            <div
                className="flex w-full overflow-hidden rounded-2xl border border-zinc-800 bg-black/60
                   focus-within:ring-2 focus-within:ring-brand-red/60"
            >
                <input
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    className={`w-full bg-transparent px-4 outline-none placeholder:text-zinc-500 ${h}`}
                    aria-label="映画検索"
                />
                <button
                    type="submit"
                    disabled={disabled}
                    className={`shrink-0 bg-brand-red px-5 font-semibold text-white hover:opacity-90 disabled:opacity-50 ${h}`}
                >
                    検索
                </button>
            </div>
        </form>
    );
}
