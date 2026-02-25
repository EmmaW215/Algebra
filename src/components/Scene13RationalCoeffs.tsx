import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle, XCircle } from "lucide-react";

export default function Scene13RationalCoeffs({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [step, setStep] = useState<"intro" | "fractions" | "quiz">("intro");
  const [quizAnswer, setQuizAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);

  // Quiz: 9/8m + 9/10 - 2m - 3/5
  // Like terms: 9/8m - 2m = 9/8m - 16/8m = -7/8m
  // Constants: 9/10 - 3/5 = 9/10 - 6/10 = 3/10
  // Result: -7/8m + 3/10

  const checkAnswer = (ans: string) => {
    setQuizAnswer(ans);
    if (ans === "-7/8m + 3/10") {
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
            <h2 className="text-3xl font-bold text-slate-800">Rational Coefficients</h2>
            <p className="text-slate-600">Simplify expressions with decimals:</p>
            
            <div className="bg-slate-100 p-6 rounded-xl font-mono text-xl shadow-inner">
              -5.55 <span className="text-indigo-600 font-bold">- 8.55c</span> + <span className="text-indigo-600 font-bold">4.35c</span>
            </div>

            <div className="bg-white p-4 rounded-xl border-2 border-indigo-100">
              <p className="font-bold text-indigo-800 mb-2">Combine c terms:</p>
              <p className="font-mono text-lg">-8.55 + 4.35 = <span className="font-bold">-4.20</span></p>
            </div>

            <div className="bg-emerald-50 p-4 rounded-xl border-2 border-emerald-200 font-bold text-xl text-emerald-800">
              Result: -5.55 - 4.2c
            </div>
          </motion.div>
        )}

        {step === "fractions" && (
          <motion.div
            key="fractions"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8 w-full"
          >
            <h2 className="text-3xl font-bold text-slate-800">Fraction Coefficients</h2>
            <p className="text-slate-600">Simplify expressions with fractions:</p>
            
            <div className="bg-slate-100 p-6 rounded-xl font-mono text-xl shadow-inner">
              <span className="text-indigo-600 font-bold">2/5m</span> - 4/5 - <span className="text-indigo-600 font-bold">3/5m</span>
            </div>

            <div className="bg-white p-4 rounded-xl border-2 border-indigo-100">
              <p className="font-bold text-indigo-800 mb-2">Combine m terms:</p>
              <p className="font-mono text-lg">2/5 - 3/5 = <span className="font-bold">-1/5</span></p>
            </div>

            <div className="bg-emerald-50 p-4 rounded-xl border-2 border-emerald-200 font-bold text-xl text-emerald-800">
              Result: -1/5m - 4/5
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
            <p className="text-slate-600">Combine like terms:</p>
            
            <div className="text-2xl font-mono font-bold bg-slate-50 p-6 rounded-xl inline-block">
              9/8m + 9/10 - 2m - 3/5
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {["-7/8m + 3/10", "25/8m + 3/10", "-7/8m + 15/10", "7/8m - 3/10"].map((opt) => (
                <button
                  key={opt}
                  onClick={() => checkAnswer(opt)}
                  disabled={isCorrect}
                  className={`p-4 rounded-xl border-2 font-mono font-bold text-lg transition-all
                    ${quizAnswer === opt 
                      ? (opt === "-7/8m + 3/10" ? "bg-green-100 border-green-500 text-green-800" : "bg-red-100 border-red-500 text-red-800")
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
                Correct! 9/8m - 16/8m = -7/8m. And 9/10 - 6/10 = 3/10.
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
          onClick={() => {
            if (step === "intro") setStep("fractions");
            else if (step === "fractions") setStep("quiz");
            else onNext();
          }}
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
