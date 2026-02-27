import { motion } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle, XCircle } from "lucide-react";

export default function Scene6ClassifyingNumbers1({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);

  // 0.777... (Rational)

  const checkAnswer = (id: string) => {
    setSelected(id);
    if (id === "Rational") {
      setIsCorrect(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Classifying Numbers</h2>
      
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
        <p className="text-lg text-slate-600 font-bold">Is the following number rational or irrational?</p>
        
        <div className="text-4xl font-mono font-bold text-slate-800 py-4">
          0.777...
        </div>
        
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => checkAnswer("Rational")}
            className={`px-8 py-3 rounded-full font-bold shadow-lg transition-colors flex items-center space-x-2
              ${selected === "Rational" ? "bg-green-100 text-green-700 border-2 border-green-500" : "bg-white border-2 border-slate-200 hover:bg-slate-50"}
            `}
          >
            <span>Rational</span>
            {selected === "Rational" && <CheckCircle size={20} />}
          </button>

          <button
            onClick={() => checkAnswer("Irrational")}
            className={`px-8 py-3 rounded-full font-bold shadow-lg transition-colors flex items-center space-x-2
              ${selected === "Irrational" ? "bg-red-100 text-red-700 border-2 border-red-500" : "bg-white border-2 border-slate-200 hover:bg-slate-50"}
            `}
          >
            <span>Irrational</span>
            {selected === "Irrational" && <XCircle size={20} />}
          </button>
        </div>

        {isCorrect && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 font-bold text-lg mt-4">
            Correct! Repeating decimals can be written as fractions (0.777... = 7/9).
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
