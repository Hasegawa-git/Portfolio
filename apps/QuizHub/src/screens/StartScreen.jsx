import { Screens } from '../app/appState.jsx';
import { Card, Button } from '../components/index.js';

export default function StartScreen({ goto }) {
    return (
        <Card className="space-y-8">
            {/* Header */}
            <header className="space-y-2">
                <div className="flex items-center gap-2">
                    <span className="kicker">v1 · Portfolio demo</span>
                    <span className="muted">Quiz Hub</span>
                </div>
                <h1 className="text-3xl md:text-6xl font-extrabold tracking-tight">
                    Quiz Hub
                </h1>
                <p className="lede">
                    <span className="font-semibold">1〜2分で完走</span>できるテンポの良さと、
                    回答直後の<strong>即フィードバック</strong>で学びが定着。<br className="hidden md:block" />
                    <strong>8ジャンル × 各3問</strong>のライトな構成ながら、毎回の挑戦で
                    <strong>ベストスコア更新</strong>を狙えます。
                </p>
            </header>

            {/* Small facts / badges */}
            <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-orange-50 text-orange-700 border border-orange-200">所要 1〜2分</span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-orange-50 text-orange-700 border border-orange-200">広告なし / 通信なし</span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-orange-50 text-orange-700 border border-orange-200">キーボード操作対応</span>
            </div>

            {/* Features */}
            <section className="space-y-2">
                <h2 className="text-lg font-semibold">このクイズの特徴</h2>
                <ul className="text-slate-700 list-disc pl-5 space-y-1.5">
                    <li><span className="font-medium">8ジャンル</span>から選べる（英語 / 歴史 / 数学 / スポーツ / 音楽 / 地理 / 科学 / 食べ物）</li>
                    <li>選択後に<strong>正解/不正解</strong>を色で明快に表示</li>
                    <li>オフライン想定の設計。入力情報は<strong>端末内のみ</strong>で完結</li>
                    <li>フォーカスリング/コントラストに配慮し、アクセシビリティを確保</li>
                </ul>
            </section>

            {/* How to play */}
            <section className="space-y-2">
                <h2 className="text-lg font-semibold">遊び方（3ステップ）</h2>
                <ol className="text-slate-700 list-decimal pl-5 space-y-1.5">
                    <li>ニックネームを入力</li>
                    <li>ジャンルを選ぶ（各3問／約30秒）</li>
                    <li>4択から回答 → すぐにフィードバックを確認</li>
                </ol>
                <p className="muted">
                    短いスパンで<strong>繰り返すほど定着率が向上</strong>します。気軽に何度でも挑戦してください。
                </p>
            </section>

            {/* Scoring */}
            <section className="space-y-2">
                <h2 className="text-lg font-semibold">スコアリングと履歴</h2>
                <ul className="text-slate-700 list-disc pl-5 space-y-1.5">
                    <li>各問題 <strong>1点</strong>、各ジャンル<strong>満点3点</strong></li>
                    <li>結果画面で<strong>達成率</strong>と<strong>過去最高</strong>を表示</li>
                </ul>
            </section>

            {/* CTA */}
            <div className="pt-1">
                <Button variant="primary" onClick={() => goto(Screens.LOGIN)} className="w-full">
                    はじめる
                </Button>
            </div>
        </Card>
    );
}
