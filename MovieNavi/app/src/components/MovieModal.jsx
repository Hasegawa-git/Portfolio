import { IMG_W500 } from "../lib/tmdb";

export default function MovieModal({ movie, onClose }) {
    if (!movie) return null;
    const title = movie.title || movie.name;

    return (
        <div
            className="fixed inset-0 z-20 grid place-items-center bg-black/80 p-4"
            role="dialog"
            aria-modal="true"
            onClick={onClose}
        >
            <div
                className="max-w-2xl w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/90"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="grid gap-4 p-4 sm:grid-cols-[200px,1fr]">
                    {movie.poster_path ? (
                        <img
                            src={`${IMG_W500}${movie.poster_path}`}
                            alt={`${title} のポスター`}
                            className="w-full rounded-lg object-cover"
                        />
                    ) : (
                        <div className="aspect-[2/3] w-full rounded-lg bg-zinc-800/50 grid place-items-center text-zinc-400 text-sm">
                            No Image
                        </div>
                    )}
                    <div>
                        <h3 className="text-lg font-semibold">{title}</h3>
                        <p className="mt-1 text-sm text-zinc-400">
                            公開: {(movie.release_date || "").slice(0, 10) || "-"}／
                            評価: ★ {movie.vote_average?.toFixed?.(1) ?? "-"}
                        </p>
                        <p className="mt-3 text-sm leading-6 text-zinc-200">
                            {movie.overview || "概要なし"}
                        </p>
                        <div className="mt-4 flex gap-2">
                            <button
                                onClick={onClose}
                                className="rounded-xl bg-brand-red px-4 py-2 text-sm font-medium hover:opacity-90"
                            >
                                閉じる（Esc）
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
