import { useState, useMemo } from 'react';
import { Screens } from '../app/appState.jsx';
import { useQuiz } from '../app/QuizProvider.jsx';
import { Card, Button, TextInput } from '../components/index.js';

export default function LoginScreen({ goto }) {
    const { name, setName } = useQuiz();
    const [localName, setLocalName] = useState(name || '');

    const trimmed = useMemo(() => localName.trim(), [localName]);
    const isValid = trimmed.length > 0;
    const max = 24;

    const onNext = () => { if (isValid) { setName(trimmed); goto(Screens.GENRE); } };

    return (
        <Card className="space-y-7">
            <header className="space-y-2">
                <div className="kicker">Step 1 / 3</div>
                <h2 className="text-2xl md:text-3xl font-bold">お名前を入力してください</h2>
                <p className="muted">結果表示に使う<strong>ニックネーム</strong>だけ。個人情報は不要です。</p>
            </header>

            <section className="space-y-3">
                <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-slate-700">ニックネーム</label>
                    <span className="text-[12px] text-slate-500">{trimmed.length}/{max}</span>
                </div>
                <TextInput
                    placeholder="例: たかひろ / hikari / player01"
                    value={localName}
                    onChange={(e) => setLocalName(e.target.value.slice(0, max))}
                    className={`text-base py-3 ${!isValid ? 'border-orange-300' : ''}`}
                />
                {!isValid && <p className="text-[12px] text-orange-500">ニックネームを入力してください</p>}
            </section>

            <div className="grid grid-cols-2 gap-3">
                <Button variant="subtle" onClick={() => goto(Screens.START)}>戻る</Button>
                <Button variant="primary" onClick={onNext} disabled={!isValid}>次へ</Button>
            </div>
        </Card>
    );
}
