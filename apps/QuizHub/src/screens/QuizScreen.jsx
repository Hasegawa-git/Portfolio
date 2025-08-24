import { useEffect, useMemo, useState } from 'react';
import { Screens } from '../app/appState.jsx';
import { useQuiz } from '../app/QuizProvider.jsx';
import { Card, Button, ProgressBar } from '../components/index.js';
import { DATASET } from '../data/index.js';

export default function QuizScreen({ goto }) {
    const { name, genre, setScore, setTotal } = useQuiz();
    const questions = useMemo(() => DATASET[genre] ?? [], [genre]);

    const [idx, setIdx] = useState(0);
    const [selected, setSelected] = useState(null);
    const [localScore, setLocalScore] = useState(0);
    const [revealed, setRevealed] = useState(false);

    useEffect(() => { if (!genre) goto(Screens.GENRE); /* eslint-disable-next-line */ }, [genre]);
    if (!genre) return null;

    const q = questions[idx];
    const step = idx + 1;

    const onChoose = (i) => { if (!revealed) { setSelected(i); setRevealed(true); } };
    const onNext = () => {
        if (!revealed) return;
        const isCorrect = selected === q.answer;
        if (isCorrect) setLocalScore((s) => s + 1);
        const next = idx + 1;
        if (next < questions.length) { setIdx(next); setSelected(null); setRevealed(false); }
        else { setScore((_) => localScore + (isCorrect ? 1 : 0)); setTotal(questions.length); goto(Screens.RESULT); }
    };

    const isCorrect = revealed && selected === q.answer;

    return (
        <Card className="space-y-6">
            <header>
                <div className="flex items-center justify-between text-xs md:text-sm text-slate-600">
                    <span>プレイヤー: {name || 'ゲスト'}</span>
                    <span>{step}/{questions.length}</span>
                </div>
                <div className="mt-3"><ProgressBar value={step} max={questions.length} /></div>
            </header>

            <div className="space-y-2">
                <h3 className="text-2xl font-semibold leading-snug">{q.question}</h3>
                <p className="muted">最も適切だと思う選択肢をひとつ選んでください。選択後、正解がハイライトされます。</p>
            </div>

            <div className="grid gap-3 md:gap-4">
                {q.choices.map((c, i) => {
                    const letter = String.fromCharCode(65 + i);
                    const base = 'relative w-full rounded-2xl border px-5 py-4 text-[15px] md:text-[16px] transition bg-white/95 hover:bg-orange-50/40 shadow-soft flex items-center gap-3';
                    let cls = `${base} border-orange-100`;
                    let badge = null;

                    if (revealed) {
                        if (i === q.answer) {
                            cls = `${base} border-emerald-300 bg-emerald-50`;
                            badge = <span className="px-2 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700 border border-emerald-200">正解</span>;
                        } else if (selected === i) {
                            cls = `${base} border-rose-300 bg-rose-50`;
                            badge = <span className="px-2 py-1 rounded-full text-xs font-medium bg-rose-100 text-rose-700 border border-rose-200">不正解</span>;
                        }
                    } else if (selected === i) {
                        cls = `${base} border-orange-300 bg-orange-50`;
                    }

                    return (
                        <button key={i} onClick={() => onChoose(i)} className={cls}>
                            <span className="h-7 w-7 md:h-8 md:w-8 rounded-full grid place-items-center text-[12px] md:text-[13px] font-semibold bg-orange-100 text-orange-800">{letter}</span>
                            <span className="text-left flex-1">{c}</span>
                            {badge}
                        </button>
                    );
                })}
            </div>

            {revealed && (
                <div className={`p-4 rounded-xl border ${isCorrect ? 'border-emerald-200 bg-emerald-50/60' : 'border-rose-200 bg-rose-50/60'}`}>
                    <p className="font-semibold">{isCorrect ? 'よくできました！' : '惜しい！'}</p>
                    <p className="muted">{isCorrect ? 'その調子で次の問題に進みましょう。' : '正解のパターンを覚えて次に活かしましょう。'}</p>
                </div>
            )}

            <div className="pt-2 text-right">
                <Button variant="primary" onClick={onNext} disabled={!revealed}>次へ</Button>
            </div>
        </Card>
    );
}
