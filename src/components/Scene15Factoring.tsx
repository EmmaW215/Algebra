import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle, XCircle } from "lucide-react";

export default function Scene15Factoring({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [step, setStep] = useState<"intro" | "quiz">("intro");
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState(false);

  // Quiz: Which expressions are equivalent to -56z + 28?
  // A: 1/2(-28z + 14) -> -14z + 7 (No)
  // B: (-1.4z + 0.7) * 40 -> -56z + 28 (Yes)
  // C: (14 - 7z) * (-4) -> -56 + 28z (No, signs flipped)
  // D: (8z - 4)(-7) -> -56z + 28 (Yes)
  // E: -2(-28z - 14) -> 56z + 28 (No)

  const correctAnswers = ["B", "D"];

  const toggleAnswer = (ans: string) => {
    if (isCorrect) return;
    setSelectedAnswers(prev => 
      prev.includes(ans) ? prev.filter(a => a !== ans) : [...prev, ans]
    );
  };

  const checkAnswers = () => {
    const isAllCorrect = 
      selectedAnswers.length === correctAnswers.length && 
      selectedAnswers.every(a => correctAnswers.includes(a));
    
    if (isAllCorrect) setIsCorrect(true);
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
            <h2 className="text-3xl font-bold text-slate-800">Factoring Practice</h2>
            <p className="text-slate-600">Find the greatest common factor (GCF) and factor it out.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <div className="text-xl font-mono font-bold mb-4">4x + 18</div>
                <div className="text-slate-500 mb-2">GCF of 4 and 18 is <span className="font-bold text-indigo-600">2</span></div>
                <div className="text-2xl font-mono font-bold text-indigo-700">2(2x + 9)</div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <div className="text-xl font-mono font-bold mb-4">12 + 32y</div>
                <div className="text-slate-500 mb-2">GCF of 12 and 32 is <span className="font-bold text-indigo-600">4</span></div>
                <div className="text-2xl font-mono font-bold text-indigo-700">4(3 + 8y)</div>
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
            <h2 className="text-3xl font-bold text-slate-800">Quiz</h2>
            <p className="text-slate-600">Which expressions are equivalent to:</p>
            
            <div className="text-3xl font-mono font-bold bg-slate-50 p-6 rounded-xl inline-block">
              -56z + 28
            </div>
            <p className="text-sm font-bold uppercase text-slate-400">Choose 2 answers:</p>

            <div className="grid grid-cols-1 gap-3 max-w-2xl mx-auto text-left">
              {[
                { id: "A", text: "1/2(-28z + 14)" },
                { id: "B", text: "(-1.4z + 0.7) × 40" },
                { id: "C", text: "(14 - 7z)(-4)" },
                { id: "D", text: "(8z - 4)(-7)" },
                { id: "E", text: "-2(-28z - 14)" }
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => toggleAnswer(opt.id)}
                  disabled={isCorrect}
                  className={`p-4 rounded-xl border-2 font-mono text-lg flex items-center justify-between transition-all
                    ${selectedAnswers.includes(opt.id) 
                      ? "border-indigo-500 bg-indigo-50 text-indigo-900" 
                      : "bg-white border-slate-200 hover:border-indigo-200 text-slate-700"
                    }
                  `}
                >
                  <span>{opt.text}</span>
                  {isCorrect && correctAnswers.includes(opt.id) && <CheckCircle className="text-green-500" />}
                  {isCorrect && !correctAnswers.includes(opt.id) && selectedAnswers.includes(opt.id) && <XCircle className="text-red-500" />}
                </button>
              ))}
            </div>

            {!isCorrect && (
              <button
                onClick={checkAnswers}
                className="px-8 py-3 bg-indigo-600 text-white rounded-full font-bold shadow-lg hover:bg-indigo-700 transition-colors"
              >
                Check Answer
              </button>
            )}

            {isCorrect && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 font-bold">
                Correct! Both B and D simplify to -56z + 28.
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
