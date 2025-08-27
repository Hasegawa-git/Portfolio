import { useState } from 'react';
import QuizProvider from './QuizProvider.jsx';
import { Screens } from './appState.jsx';
import { StartScreen, LoginScreen, GenreScreen, QuizScreen, ResultScreen } from '../screens/index.js';
import { ProgressBar } from '../components/index.js';

const STEPS = { START: 0, LOGIN: 1, GENRE: 2, QUIZ: 3, RESULT: 4 };

export default function App() {
  const [screen, setScreen] = useState(Screens.START);
  const goto = (next) => setScreen(next);

  return (
    <QuizProvider>
      <div className="min-h-screen app-gradient text-slate-800">
        <header className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-orange-100">
          <div className="mx-auto max-w-4xl px-6 py-3 flex items-center gap-4">
            <div className="h-9 w-9 rounded-xl bg-orange-600 text-white grid place-items-center text-xs font-bold">QH</div>
            <div className="flex-1">
              <div className="text-sm font-semibold">Quiz Hub</div>
              <div className="mt-1"><ProgressBar value={STEPS[screen]} max={4} /></div>
            </div>
            <span className="kicker hidden md:inline">{screen}</span>
          </div>
        </header>

        <main className="mx-auto max-w-4xl px-6 py-10 md:py-14 space-y-8">
          {screen === Screens.START && <StartScreen goto={goto} />}
          {screen === Screens.LOGIN && <LoginScreen goto={goto} />}
          {screen === Screens.GENRE && <GenreScreen goto={goto} />}
          {screen === Screens.QUIZ && <QuizScreen goto={goto} />}
          {screen === Screens.RESULT && <ResultScreen goto={goto} />}
        </main>
      </div>
    </QuizProvider>
  );
}
