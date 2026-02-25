import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle, XCircle } from "lucide-react";

export default function Scene12NegativeCoeffs({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [step, setStep] = useState<"intro" | "quiz">("intro");
  const [quizAnswer, setQuizAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);

  // Expression: -3y + 2y + 4xy - 4xy - 2x^2 + 3x^2 + 2x + y^2
  // Simplified: -y + x^2 + 2x + y^2

  const checkAnswer = (ans: string) => {
    setQuizAnswer(ans);
    if (ans === "-4r") {
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
            <h2 className="text-3xl font-bold text-slate-800">Combining with Negatives</h2>
            <p className="text-slate-600">Simplify this "hairy" expression by grouping like terms:</p>
            
            <div className="bg-slate-100 p-6 rounded-xl font-mono text-lg md:text-xl break-words leading-relaxed shadow-inner">
              <span className="text-red-600 font-bold">-3y</span> + <span className="text-red-600 font-bold">2y</span> + <span className="text-blue-600 font-bold">4xy</span> - <span className="text-blue-600 font-bold">4xy</span> - <span className="text-green-600 font-bold">2x²</span> + <span className="text-green-600 font-bold">3x²</span> + 2x + y²
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <div className="font-bold text-red-800 mb-2">y terms</div>
                <div>-3y + 2y = <span className="font-bold">-1y</span> (or -y)</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="font-bold text-blue-800 mb-2">xy terms</div>
                <div>4xy - 4xy = <span className="font-bold">0</span></div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <div className="font-bold text-green-800 mb-2">x² terms</div>
                <div>-2x² + 3x² = <span className="font-bold">1x²</span> (or x²)</div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border-2 border-slate-200 font-bold text-xl">
              Result: <span className="text-green-600">x²</span> <span className="text-red-600">- y</span> + 2x + y²
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
            
            <div className="text-4xl font-mono font-bold bg-slate-50 p-6 rounded-xl inline-block">
              r + (-5r)
            </div>

            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
              {["4r", "-4r", "-6r", "6r"].map((opt) => (
                <button
                  key={opt}
                  onClick={() => checkAnswer(opt)}
                  disabled={isCorrect}
                  className={`p-4 rounded-xl border-2 font-mono font-bold text-lg transition-all
                    ${quizAnswer === opt 
                      ? (opt === "-4r" ? "bg-green-100 border-green-500 text-green-800" : "bg-red-100 border-red-500 text-red-800")
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
                Correct! 1r + (-5r) = -4r.
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
          <span>{step === "intro" ? "Try Practice" : "Next Lesson"}</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
