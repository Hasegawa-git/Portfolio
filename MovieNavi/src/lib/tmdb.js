const BASE = "https://api.themoviedb.org/3";
export const IMG_W342 = "https://image.tmdb.org/t/p/w342";
export const IMG_W500 = "https://image.tmdb.org/t/p/w500";
export const IMG_W1280 = "https://image.tmdb.org/t/p/w1280";
const KEY = import.meta.env.VITE_TMDB_API_KEY;

async function fetchJson(url) {
    const res = await fetch(url);
    if (!res.ok) throw new Error("TMDB error");
    return await res.json();
}

export async function getTrending(page = 1) {
    const url = `${BASE}/trending/movie/week?language=ja-JP&page=${page}&api_key=${KEY}`;
    return fetchJson(url);
}

export async function searchMovies(query, page = 1) {
    const url = `${BASE}/search/movie?query=${encodeURIComponent(query)}&language=ja-JP&include_adult=false&page=${page}&api_key=${KEY}`;
    return fetchJson(url);
}
