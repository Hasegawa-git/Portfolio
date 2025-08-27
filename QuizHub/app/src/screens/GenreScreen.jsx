import { Screens } from '../app/appState.jsx';
import { useQuiz } from '../app/QuizProvider.jsx';
import { Card } from '../components/index.js';

const GENRES = [
    { key: 'english', label: '英語', desc: '語彙と基礎文法の確認', time: '約30秒', level: '初級' },
    { key: 'history', label: '歴史', desc: '重要トピックの復習', time: '約30秒', level: '初級' },
    { key: 'math', label: '数学', desc: '計算と基礎の理解', time: '約30秒', level: '初級' },
    { key: 'sports', label: 'スポーツ', desc: '競技やルールの基礎', time: '約30秒', level: '初級' },
    { key: 'music', label: '音楽', desc: 'アーティスト/用語', time: '約30秒', level: '初級' },
    { key: 'geography', label: '地理', desc: '国名・地形・都市', time: '約30秒', level: '初級' },
    { key: 'science', label: '科学', desc: '基礎科学の常識', time: '約30秒', level: '初級' },
    { key: 'food', label: '食べ物', desc: '料理・食文化の基礎', time: '約30秒', level: '初級' },
];

export default function GenreScreen({ goto }) {
    const { setGenre, resetGame } = useQuiz();
    const choose = (g) => { resetGame(); setGenre(g); goto(Screens.QUIZ); };

    return (
        <div className="space-y-5">
            <Card className="space-y-2">
                <div className="kicker">Step 2 / 3</div>
                <h2 className="text-2xl font-bold">ジャンルを選択</h2>
                <p className="muted">今の気分に合う分野をお選びください。各ジャンルは3問、テンポよく解けます。</p>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
                {GENRES.map((g) => (
                    <Card
                        key={g.key}
                        className="cursor-pointer p-5 md:p-6 hover:shadow-lg transition-shadow"
                        onClick={() => choose(g.key)}
                    >
                        <div className="flex items-start justify-between gap-4">
                            <div className="space-y-1">
                                <div className="text-xl font-semibold">{g.label}</div>
                                <p className="muted">{g.desc}</p>
                            </div>
                            <div className="text-right">
                                <div className="kicker">3 問</div>
                                <div className="muted">所要 {g.time}</div>
                                <div className="muted">難易度 {g.level}</div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
