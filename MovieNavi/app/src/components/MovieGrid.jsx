import MovieCard from "./MovieCard";

export default function MovieGrid({ results, onSelect }) {
    return (
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {results.map((m) => (
                <li key={m.id}>
                    <MovieCard movie={m} onSelect={onSelect} />
                </li>
            ))}
        </ul>
    );
}
