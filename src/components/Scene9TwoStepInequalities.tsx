import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle, XCircle } from "lucide-react";

export default function Scene9TwoStepInequalities({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [step, setStep] = useState<"intro" | "quiz">("intro");
  const [quizAnswer, setQuizAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);

  // Quiz: -11 - 2d >= 1
  // -2d >= 12
  // d <= -6

  const checkAnswer = (ans: string) => {
    setQuizAnswer(ans);
    if (ans === "d ≤ -6") {
      setIsCorrect(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-6 w-full max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        {step === "intro" && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8 w-full"
          >
            <h2 className="text-3xl font-bold text-slate-800">Two-Step Inequalities</h2>
            <p className="text-slate-600">Solve and graph:</p>
            
            <div className="bg-slate-100 p-6 rounded-xl font-mono text-xl shadow-inner">
              2/3 &gt; -4y - 8 1/3
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <div className="font-bold text-slate-800 mb-2">1. Multiply by 3</div>
                <div className="font-mono text-lg">
                  2 &gt; -12y - 25
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <div className="font-bold text-slate-800 mb-2">2. Add 25</div>
                <div className="font-mono text-lg">
                  27 &gt; -12y
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 col-span-2">
                <div className="font-bold text-slate-800 mb-2">3. Divide by -12 (Flip!)</div>
                <div className="font-mono text-lg font-bold text-indigo-600">
                  -2.25 &lt; y  (or y &gt; -2.25)
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {step === "quiz" && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8 w-full"
          >
            <h2 className="text-3xl font-bold text-slate-800">Your Turn</h2>
            <p className="text-slate-600">Solve for d:</p>
            
            <div className="text-3xl font-mono font-bold bg-slate-50 p-6 rounded-xl inline-block">
              -11 - 2d ≥ 1
            </div>

            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
              {["d ≥ -6", "d ≤ -6", "d ≥ 5", "d ≤ 5"].map((opt) => (
                <button
                  key={opt}
                  onClick={() => checkAnswer(opt)}
                  disabled={isCorrect}
                  className={`p-4 rounded-xl border-2 font-mono font-bold text-lg transition-all
                    ${quizAnswer === opt 
                      ? (opt === "d ≤ -6" ? "bg-green-100 border-green-500 text-green-800" : "bg-red-100 border-red-500 text-red-800")
                      : "bg-white border-slate-200 hover:border-indigo-300 text-slate-700"
                    }
                  `}
                >
                  {opt}
                </button>
              ))}
            </div>
            {isCorrect && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 font-bold">
                Correct! Add 11: -2d ≥ 12. Divide by -2 and flip: d ≤ -6.
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex space-x-4 mt-auto w-full justify-between items-center pt-8 border-t border-slate-100">
        <button
          onClick={onPrev}
          className="flex items-center space-x-2 px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-full font-medium shadow-sm hover:bg-slate-50 transition-colors"
        >
          <ArrowLeft size={18} />
          <span>Back</span>
        </button>

        <button
          onClick={() => step === "intro" ? setStep("quiz") : onNext()}
          disabled={step === "quiz" && !isCorrect}
          className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium shadow-lg transition-colors
            ${step === "quiz" && !isCorrect
              ? "bg-slate-200 text-slate-400 cursor-not-allowed"
              : "bg-slate-900 text-white hover:bg-slate-800"
            }`}
        >
          <span>{step === "quiz" ? "Finish Unit" : "Next"}</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
