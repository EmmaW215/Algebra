import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowRight, ArrowLeft, CheckCircle, XCircle } from "lucide-react";

export default function Scene5ConstantEquationPractice({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [step, setStep] = useState<"intro" | "quiz">("intro");
  const [quizAnswer, setQuizAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);

  // Intro: 4y = 8x -> y = 2x -> k=2
  // Quiz: y = 1/2 x -> k = 1/2

  const checkAnswer = (ans: string) => {
    setQuizAnswer(ans);
    if (ans === "1/2") {
      setIsCorrect(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Finding k in Equations</h2>
      
      <AnimatePresence mode="wait">
        {step === "intro" && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6"
          >
            <p className="text-lg text-slate-600">Find the constant of proportionality for:</p>
            <div className="text-4xl font-mono font-bold text-slate-800">4y = 8x</div>
            
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-left space-y-2">
              <p className="text-sm text-slate-500 font-bold">Step 1: Solve for y</p>
              <p className="font-mono">Divide both sides by 4</p>
              <div className="font-mono text-xl">y = (8/4)x</div>
              <div className="font-mono text-xl font-bold text-indigo-600">y = 2x</div>
            </div>

            <div className="text-2xl font-bold text-slate-800">
              k = 2
            </div>

            <button
              onClick={() => setStep("quiz")}
              className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold shadow-lg hover:bg-blue-700 transition-colors"
            >
              Try a Problem
            </button>
          </motion.div>
        )}

        {step === "quiz" && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6"
          >
            <p className="text-lg text-slate-600">What is the constant of proportionality?</p>
            <div className="text-4xl font-mono font-bold text-slate-800 mb-8">y = (1/2)x</div>

            <div className="grid grid-cols-2 gap-4">
              {["2", "1/2", "1", "4"].map((opt) => (
                <button
                  key={opt}
                  onClick={() => checkAnswer(opt)}
                  disabled={isCorrect}
                  className={`p-4 rounded-xl border-2 font-mono text-xl font-bold transition-all flex items-center justify-center space-x-2
                    ${quizAnswer === opt 
                      ? (opt === "1/2" ? "border-green-500 bg-green-50 text-green-900" : "border-red-500 bg-red-50 text-red-900")
                      : "bg-white border-slate-200 hover:border-indigo-200 text-slate-700"
                    }
                  `}
                >
                  <span>{opt}</span>
                  {quizAnswer === opt && (opt === "1/2" ? <CheckCircle size={20} /> : <XCircle size={20} />)}
                </button>
              ))}
            </div>

            {isCorrect && (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="text-green-600 font-bold text-lg mt-4"
              >
                Correct! The coefficient of x is 1/2.
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
          onClick={onNext}
          disabled={step === "quiz" && !isCorrect}
          className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium shadow-lg transition-colors
            ${step === "quiz" && !isCorrect
              ? "bg-slate-200 text-slate-400 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
        >
          <span>Next Lesson</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
