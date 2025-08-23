import { IMG_W342 } from "../lib/tmdb";

export default function MovieCard({ movie, onSelect }) {
    const title = movie.title || movie.name;
    return (
        <button
            onClick={() => onSelect(movie)}
            className="group block w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/70 text-left shadow transition hover:-translate-y-0.5 hover:border-brand-red/50 hover:shadow-lg"
        >
            {movie.poster_path ? (
                <img
                    src={`${IMG_W342}${movie.poster_path}`}
                    alt={`${title} のポスター`}
                    className="aspect-[2/3] w-full object-cover transition group-hover:scale-[1.02]"
                    loading="lazy"
                />
            ) : (
                <div className="aspect-[2/3] w-full bg-zinc-800/50 grid place-items-center text-zinc-400 text-sm">
                    No Image
                </div>
            )}
            <div className="p-3">
                <h3 className="line-clamp-2 text-sm font-semibold">{title}</h3>
                <div className="mt-1 flex items-center justify-between text-xs text-zinc-400">
                    <span>{(movie.release_date || "").slice(0, 4) || "-"}</span>
                    <span className="inline-flex items-center gap-1">
                        ★ {movie.vote_average?.toFixed?.(1) ?? "-"}
                    </span>
                </div>
            </div>
        </button>
    );
}
