import { motion } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle, XCircle } from "lucide-react";

export default function Scene11EvenOddNegatives({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);

  // a < 0, b < 0.
  // a^101 / b^7
  // a^101 (odd power) -> Negative
  // b^7 (odd power) -> Negative
  // Neg / Neg -> Positive

  const checkAnswer = (id: string) => {
    setSelected(id);
    if (id === "Positive") {
      setIsCorrect(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Even & Odd Numbers of Negatives</h2>
      
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-left space-y-2">
          <p className="text-lg">Let <span className="font-bold font-mono">a</span> and <span className="font-bold font-mono">b</span> be negative numbers.</p>
          <p className="text-lg">What is the sign of:</p>
          <div className="text-3xl font-mono font-bold text-center py-4">
            a¹⁰¹ ÷ b⁷
          </div>
        </div>
        
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => checkAnswer("Positive")}
            className={`px-8 py-3 rounded-full font-bold shadow-lg transition-colors flex items-center space-x-2
              ${selected === "Positive" ? "bg-green-100 text-green-700 border-2 border-green-500" : "bg-white border-2 border-slate-200 hover:bg-slate-50"}
            `}
          >
            <span>Positive</span>
            {selected === "Positive" && <CheckCircle size={20} />}
          </button>

          <button
            onClick={() => checkAnswer("Negative")}
            className={`px-8 py-3 rounded-full font-bold shadow-lg transition-colors flex items-center space-x-2
              ${selected === "Negative" ? "bg-red-100 text-red-700 border-2 border-red-500" : "bg-white border-2 border-slate-200 hover:bg-slate-50"}
            `}
          >
            <span>Negative</span>
            {selected === "Negative" && <XCircle size={20} />}
          </button>
        </div>

        {isCorrect && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 font-bold text-lg mt-4">
            Correct! 
            <br/>a¹⁰¹ is negative (odd power).
            <br/>b⁷ is negative (odd power).
            <br/>Negative ÷ Negative = Positive.
          </motion.div>
        )}
      </div>

      <div className="flex space-x-4 mt-auto w-full justify-between items-center pt-8 border-t border-slate-100">
        <button onClick={onPrev} className="flex items-center space-x-2 px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-full font-medium shadow-sm hover:bg-slate-50 transition-colors">
          <ArrowLeft size={18} /> <span>Back</span>
        </button>
        <button onClick={onNext} disabled={!isCorrect} className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium shadow-lg transition-colors ${!isCorrect ? "bg-slate-200 text-slate-400" : "bg-slate-800 text-white hover:bg-slate-900"}`}>
          <span>Next Lesson</span> <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
