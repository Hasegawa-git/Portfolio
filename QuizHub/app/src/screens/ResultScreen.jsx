import { useEffect, useState } from 'react';
import { Screens } from '../app/appState.jsx';
import { useQuiz } from '../app/QuizProvider.jsx';
import { Card, Button } from '../components/index.js';

export default function ResultScreen({ goto }) {
    const { score, total, resetGame, genre } = useQuiz();
    const [best, setBest] = useState(0);

    useEffect(() => {
        try {
            const KEY = 'quizapp_best';
            const prev = JSON.parse(localStorage.getItem(KEY) || '{}');
            const newBest = Math.max(prev[genre] || 0, score);
            localStorage.setItem(KEY, JSON.stringify({ ...prev, [genre]: newBest }));
            setBest(newBest);
        } catch { setBest(score); }
    }, [genre, score]);

    const ratio = total ? Math.round((score / total) * 100) : 0;

    return (
        <Card className="space-y-6 relative overflow-hidden">
            <header className="space-y-2">
                <div className="kicker">Complete</div>
                <h2 className="text-2xl font-bold">結果</h2>
                <p className="lede">
                    今回のチャレンジは <span className="font-semibold">{genre}</span>、
                    スコアは <span className="font-semibold">{score}/{total}</span>（達成率 {ratio}%）でした。
                    ベストスコアは自動的に保存されています。
                </p>
            </header>

            <div className="grid grid-cols-3 gap-4">
                <Stat title="正解数" value={score} />
                <Stat title="全問数" value={total} />
                <Stat title="達成率" value={`${ratio}%`} />
            </div>

            <div className="muted">
                ベスト（{genre}）: <span className="font-semibold">{best}/{total}</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
                <Button variant="primary" onClick={() => { resetGame(); goto(Screens.GENRE); }}>
                    もう一度挑戦
                </Button>
                <Button variant="subtle" onClick={() => goto(Screens.START)}>
                    ホームに戻る
                </Button>
            </div>
        </Card>
    );
}

function Stat({ title, value }) {
    return (
        <div className="surface shadow-soft rounded-2xl p-5 text-center hover-lift">
            <div className="kicker">{title}</div>
            <div className="mt-1 text-2xl md:text-3xl font-extrabold text-orange-700">{value}</div>
        </div>
    );
}
