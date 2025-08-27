import { useEffect, useState } from "react";
import { getTrending, searchMovies } from "./lib/tmdb";
import SearchBar from "./components/SearchBar";
import MovieGrid from "./components/MovieGrid";
import MovieModal from "./components/MovieModal";
import LoadMore from "./components/LoadMore";

const TITLE = "Movie Navi";

export default function App() {
  const [query, setQuery] = useState("");
  const [mode, setMode] = useState("trending");      // 'trending' | 'search'
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [selected, setSelected] = useState(null);

  // 取得処理を1本化（URL生成やappendの面倒をここに集約）
  async function load(nextPage = 1, append = false, nextMode = mode) {
    try {
      setLoading(true); setError(false);
      const api = nextMode === "trending"
        ? () => getTrending(nextPage)
        : () => searchMovies(query, nextPage);
      const data = await api();
      setPage(data.page);
      setTotalPages(data.total_pages || 1);
      setResults(prev => append ? [...prev, ...data.results] : data.results);
      setMode(nextMode);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load(1, false, "trending"); }, []);

  function onSubmit(e) {
    e.preventDefault();
    if (query.trim()) load(1, false, "search");
  }

  function loadMore() {
    if (page < totalPages) load(page + 1, true);
  }

  return (
    <div className="min-h-dvh">
      {/* ヘッダー（シンプル） */}
      <header className="sticky top-0 z-10 border-b border-zinc-800 bg-[linear-gradient(180deg,#000_0%,#141414_100%)]/90 backdrop-blur">
        <div className="container mx-auto px-4 py-4 flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-red font-bold">MN</span>
          <h1 className="text-xl font-semibold">{TITLE}</h1>
        </div>
      </header>

      {/* 上部コピー（初期トレンド時だけ） */}
      {mode === "trending" && (
        <div className="container mx-auto px-4 pt-6">
          <section className="card relative overflow-hidden p-5 sm:p-7">
            {/* 赤いグロー（装飾） */}
            <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-brand-red/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-brand-red/10 blur-3xl" />

            {/* 見出し */}
            <h2 className="flex items-center gap-3 text-2xl sm:text-4xl font-extrabold tracking-tight">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-red text-sm font-bold">MN</span>
              映画のドキドキ、ここから。
            </h2>

            {/* リード文（ワクワク感） */}
            <p className="mt-3 max-w-3xl leading-7 text-zinc-300">
              <strong className="text-white">Movie Navi</strong> は TMDB の膨大なデータからいま話題の作品や名作をサクッと検索<br className="hidden sm:block" />
              気になったらその場で詳細チェックして、次に夢中になる一本に今すぐ出会おう
            </p>

            {/* 3つのミニ特徴（アイコン付き） */}
            <ul className="mt-4 grid gap-3 text-sm sm:grid-cols-3">
              <li className="flex items-center gap-2">
                <span aria-hidden>🎬</span><span>トレンドを自動更新</span>
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden>⚡</span><span>クリックで即モーダル表示</span>
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden>🔍</span><span>シンプルな検索機能</span>
              </li>
            </ul>

            {/* バッジ群 */}
            <div className="mt-4 flex flex-wrap gap-2 text-zinc-400">
              <span className="chip">トレンド表示</span>
              <span className="chip">日本語UI</span>
              <span className="chip">モーダルで詳細</span>
            </div>

            {/* Tip */}
            <p className="mt-4 text-xs text-zinc-400">
              Tip: <span className="kbd">Enter</span> で検索
            </p>
          </section>
        </div>
      )}


      {/* 検索バー */}
      <div className="container mx-auto px-4 mt-6 sm:mt-8">
        <div className="mx-auto mb-6 max-w-3xl">
          <SearchBar
            value={query}
            onChange={setQuery}
            onSubmit={onSubmit}
            disabled={loading}
            variant="lg"
            placeholder="作品名で検索（例: ハリー・ポッターと賢者の石）"
          />
        </div>
      </div>

      {/* メイン */}
      <main className="container mx-auto px-4 pb-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-medium">
            {mode === "trending" ? "今週のトレンド" : `検索結果: “${query}”`}
          </h3>
          {error && <span className="text-sm text-red-400">ただいまデータの取得に失敗しました。少し時間を置いて再読み込みしてください。</span>}
        </div>

        <MovieGrid results={results} onSelect={setSelected} />

        <LoadMore
          show={results.length > 0 && page < totalPages}
          onClick={loadMore}
          disabled={loading}
        />

        {!loading && results.length === 0 && (
          <p className="mt-10 text-center text-zinc-400">うーん、見つからないみたい…。
            キーワードを短くするか、別の表記（カタカナ/英語）でも試してみて。</p>
        )}
      </main>

      <MovieModal movie={selected} onClose={() => setSelected(null)} />

      <footer className="border-t border-zinc-800 px-4 py-6 text-center text-xs text-zinc-400">
        This product uses the TMDB API but is not endorsed or certified by TMDB.
      </footer>
    </div>
  );
}
