import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle, XCircle } from "lucide-react";

export default function Scene17EquivalentExpressions({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [step, setStep] = useState<"intro" | "quiz">("intro");
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState(false);

  // Quiz: 5p + 3p + (-9)
  // 8p - 9
  // A: 8p + 9 (No)
  // B: 3(p + (-3)) + 5p = 3p - 9 + 5p = 8p - 9 (Yes)
  // C: None (No)

  const correctAnswers = ["B"];

  const toggleAnswer = (ans: string) => {
    if (isCorrect) return;
    setSelectedAnswers(prev => 
      prev.includes(ans) ? prev.filter(a => a !== ans) : [...prev, ans]
    );
  };

  const checkAnswers = () => {
    // Check if selected answers match correct answers exactly
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
            <h2 className="text-3xl font-bold text-slate-800">Equivalent Expressions</h2>
            <p className="text-slate-600">Which expressions are equivalent?</p>
            
            <div className="bg-yellow-100 p-6 rounded-xl font-mono text-xl shadow-inner border border-yellow-300">
              -6n + 4n - 12
            </div>
            <div className="text-sm text-slate-500">Simplifies to: <span className="font-bold">-2n - 12</span></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                <div className="font-bold text-green-800 mb-2">4(n - 3) - 6n</div>
                <div className="font-mono text-sm">
                  4n - 12 - 6n = <span className="font-bold">-2n - 12</span>
                </div>
                <div className="text-green-600 font-bold mt-2 flex items-center"><CheckCircle size={16} className="mr-1"/> Equivalent</div>
              </div>
              <div className="bg-red-50 p-4 rounded-xl border border-red-200">
                <div className="font-bold text-red-800 mb-2">2(2n - 6)</div>
                <div className="font-mono text-sm">
                  4n - 12
                </div>
                <div className="text-red-600 font-bold mt-2 flex items-center"><XCircle size={16} className="mr-1"/> Not Equivalent</div>
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
            <h2 className="text-3xl font-bold text-slate-800">Final Quiz</h2>
            <p className="text-slate-600">Which expressions are equivalent to:</p>
            
            <div className="text-3xl font-mono font-bold bg-slate-50 p-6 rounded-xl inline-block">
              5p + 3p + (-9)
            </div>
            <p className="text-sm font-bold uppercase text-slate-400">Choose all answers that apply:</p>

            <div className="grid grid-cols-1 gap-3 max-w-2xl mx-auto text-left">
              {[
                { id: "A", text: "8p + 9" },
                { id: "B", text: "3(p + (-3)) + 5p" },
                { id: "C", text: "None of the above" }
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
                Correct! 5p + 3p - 9 = 8p - 9. Option B simplifies to 3p - 9 + 5p = 8p - 9.
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
