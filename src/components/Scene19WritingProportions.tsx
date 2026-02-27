import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function Scene19WritingProportions({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);

  // 9 markers cost $11.50
  // 7 markers cost x
  // Correct: 9/11.50 = 7/x OR 9/7 = 11.50/x

  const checkAnswer = (id: string) => {
    setSelected(id);
    if (id === "A") {
      setIsCorrect(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Writing Proportions</h2>
      
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
        <p className="text-lg text-slate-600">
          <span className="font-bold text-indigo-600">9 markers</span> cost <span className="font-bold text-green-600">$11.50</span>.
          <br/>How much would <span className="font-bold text-indigo-600">7 markers</span> cost (<span className="font-bold text-green-600">x</span>)?
        </p>
        
        <div className="grid grid-cols-1 gap-4">
          <button
            onClick={() => checkAnswer("A")}
            className={`p-4 rounded-xl border-2 transition-all font-mono text-lg
              ${selected === "A" ? "border-green-500 bg-green-50" : "border-slate-200 hover:border-indigo-200"}
            `}
          >
            9 / 11.50 = 7 / x
          </button>

          <button
            onClick={() => checkAnswer("B")}
            className={`p-4 rounded-xl border-2 transition-all font-mono text-lg
              ${selected === "B" ? "border-red-500 bg-red-50" : "border-slate-200 hover:border-indigo-200"}
            `}
          >
            9 / 7 = x / 11.50
          </button>

          <button
            onClick={() => checkAnswer("C")}
            className={`p-4 rounded-xl border-2 transition-all font-mono text-lg
              ${selected === "C" ? "border-red-500 bg-red-50" : "border-slate-200 hover:border-indigo-200"}
            `}
          >
            11.50 / 7 = 9 / x
          </button>
        </div>

        {isCorrect && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 font-bold text-lg">
            Correct! Markers/Cost = Markers/Cost.
          </motion.div>
        )}
      </div>

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
          disabled={!isCorrect}
          className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium shadow-lg transition-colors
            ${!isCorrect
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
