import { createContext, useContext, useMemo, useState } from 'react';

const QuizContext = createContext(null);
export const useQuiz = () => useContext(QuizContext);

export default function QuizProvider({ children }) {
    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [score, setScore] = useState(0);
    const [total, setTotal] = useState(0);

    const resetGame = () => { setScore(0); setTotal(0); };
    const resetAll = () => { setName(''); setGenre(''); resetGame(); };

    const value = useMemo(
        () => ({ name, setName, genre, setGenre, score, setScore, total, setTotal, resetGame, resetAll }),
        [name, genre, score, total]
    );

    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}
