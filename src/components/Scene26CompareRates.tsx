import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function Scene26CompareRates({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);

  // Equation: y = 6.5x (Rate = 6.5)
  // Graph: (0,0) -> (1, 3.5) (Rate = 3.5)
  // Which is less? Graph.

  const checkAnswer = (id: string) => {
    setSelected(id);
    if (id === "graph") {
      setIsCorrect(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Comparing Rates</h2>
      <p className="text-lg text-slate-600">Which has a <span className="font-bold text-red-600">smaller</span> unit rate?</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
        {/* Equation */}
        <button
          onClick={() => checkAnswer("eq")}
          className={`p-6 rounded-2xl border-2 transition-all flex flex-col items-center justify-center space-y-4
            ${selected === "eq" ? "border-red-500 bg-red-50" : "border-slate-200 hover:border-indigo-200 bg-white"}
          `}
        >
          <h3 className="text-xl font-bold text-slate-700">Equation</h3>
          <div className="text-3xl font-mono font-bold text-indigo-600">y = 6.5x</div>
          <p className="text-sm text-slate-500">Rate = 6.5</p>
        </button>

        {/* Graph */}
        <button
          onClick={() => checkAnswer("graph")}
          className={`p-6 rounded-2xl border-2 transition-all flex flex-col items-center justify-center space-y-4
            ${selected === "graph" ? "border-green-500 bg-green-50" : "border-slate-200 hover:border-indigo-200 bg-white"}
          `}
        >
          <h3 className="text-xl font-bold text-slate-700">Graph</h3>
          <div className="relative w-40 h-40 bg-slate-50 border-l-2 border-b-2 border-slate-400">
            <svg className="absolute inset-0 w-full h-full overflow-visible">
              {/* Line with slope approx 3.5 */}
              <line x1="0" y1="100%" x2="100%" y2="30%" stroke="#ef4444" strokeWidth="3" />
              <circle cx="28%" cy="80%" r="3" fill="#ef4444" /> {/* (1, 3.5) roughly */}
            </svg>
            <div className="absolute bottom-4 left-8 text-xs font-bold text-red-600">(1, 3.5)</div>
          </div>
          <p className="text-sm text-slate-500">Rate = 3.5</p>
        </button>
      </div>

      {isCorrect && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 font-bold text-lg">
          Correct! The graph has a rate of 3.5, which is less than 6.5.
        </motion.div>
      )}

      {selected === "eq" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-600 font-bold text-lg">
          Incorrect. 6.5 is greater than 3.5.
        </motion.div>
      )}

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
