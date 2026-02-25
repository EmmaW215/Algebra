import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle, XCircle } from "lucide-react";

export default function Scene16DistributionCombine({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [step, setStep] = useState<"intro" | "quiz">("intro");
  const [quizAnswer, setQuizAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);

  // Quiz: 2 - 4(5p + 1)
  // 2 - 20p - 4
  // -20p - 2

  const checkAnswer = (ans: string) => {
    setQuizAnswer(ans);
    if (ans === "-20p - 2") {
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
            <h2 className="text-3xl font-bold text-slate-800">Distribution & Combining</h2>
            <p className="text-slate-600">Simplify expressions by distributing first.</p>
            
            <div className="bg-slate-100 p-6 rounded-xl font-mono text-xl shadow-inner">
              7(3y - 5) - 2(10 + 4y)
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <div className="font-bold text-slate-800 mb-2">1. Distribute</div>
                <div className="font-mono text-lg">
                  <span className="text-indigo-600">21y - 35</span> <span className="text-emerald-600">- 20 - 8y</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <div className="font-bold text-slate-800 mb-2">2. Combine Like Terms</div>
                <div className="font-mono text-lg">
                  <span className="text-indigo-600">21y - 8y</span> = 13y<br/>
                  <span className="text-emerald-600">-35 - 20</span> = -55
                </div>
              </div>
            </div>

            <div className="bg-indigo-50 p-4 rounded-xl border-2 border-indigo-200 font-bold text-xl text-indigo-800">
              Result: 13y - 55
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
            <h2 className="text-3xl font-bold text-slate-800">Practice</h2>
            <p className="text-slate-600">Simplify to create an equivalent expression:</p>
            
            <div className="text-3xl font-mono font-bold bg-slate-50 p-6 rounded-xl inline-block">
              2 - 4(5p + 1)
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {["-20p - 2", "-5p - 4", "-20p + 2", "-5p + 4"].map((opt) => (
                <button
                  key={opt}
                  onClick={() => checkAnswer(opt)}
                  disabled={isCorrect}
                  className={`p-4 rounded-xl border-2 font-mono font-bold text-lg transition-all
                    ${quizAnswer === opt 
                      ? (opt === "-20p - 2" ? "bg-green-100 border-green-500 text-green-800" : "bg-red-100 border-red-500 text-red-800")
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
                Correct! 2 - 20p - 4 = -20p - 2.
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
          <span>{step === "quiz" ? "Next Lesson" : "Next"}</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
