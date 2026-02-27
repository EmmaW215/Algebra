import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function Scene17InterpretGraph({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [selected, setSelected] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState(false);

  // Graph: (4, 120) -> $120 for 4 hours -> k = 30
  // A: y-coord of (4,120) is cost for 4 hours (True)
  // B: Cost for 1 hour is $35 (False, it's $30)

  const toggleSelection = (id: string) => {
    if (selected.includes(id)) {
      setSelected(selected.filter(s => s !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  const checkAnswer = () => {
    if (selected.length === 1 && selected[0] === "A") {
      setIsCorrect(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Interpreting Graphs</h2>
      
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Graph */}
        <div className="relative w-64 h-64 bg-white border-l-2 border-b-2 border-slate-400">
          <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 pointer-events-none opacity-20">
             {/* Grid */}
          </div>
          <svg className="absolute inset-0 w-full h-full overflow-visible">
            <line x1="0" y1="100%" x2="100%" y2="0%" stroke="#4f46e5" strokeWidth="3" />
            <circle cx="100%" cy="0%" r="4" fill="#4f46e5" />
          </svg>
          <div className="absolute right-0 top-0 translate-x-4 -translate-y-4 bg-white px-1 rounded shadow text-xs font-bold text-indigo-600">
            A (4, 120)
          </div>
          <div className="absolute bottom-0 left-1/2 translate-y-6 text-sm font-bold text-slate-600">Hours</div>
          <div className="absolute left-0 top-1/2 -translate-x-8 -rotate-90 text-sm font-bold text-slate-600">Cost ($)</div>
        </div>

        {/* Question */}
        <div className="text-left space-y-4 max-w-md">
          <p className="text-lg text-slate-600">Which statement is true?</p>
          
          <button
            onClick={() => toggleSelection("A")}
            className={`w-full p-4 rounded-xl border-2 text-left transition-all ${selected.includes("A") ? "border-indigo-500 bg-indigo-50" : "border-slate-200 hover:border-indigo-200"}`}
          >
            <span className="font-bold">A.</span> The y-coordinate of point A represents the total cost for 4 hours.
          </button>

          <button
            onClick={() => toggleSelection("B")}
            className={`w-full p-4 rounded-xl border-2 text-left transition-all ${selected.includes("B") ? "border-indigo-500 bg-indigo-50" : "border-slate-200 hover:border-indigo-200"}`}
          >
            <span className="font-bold">B.</span> The total cost for 1 hour is $35.
          </button>

          <button
            onClick={checkAnswer}
            className="px-8 py-3 bg-indigo-600 text-white rounded-full font-bold shadow-lg hover:bg-indigo-700 transition-colors w-full"
          >
            Check Answer
          </button>

          {isCorrect && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 font-bold text-lg">
              Correct! (4, 120) means 4 hours cost $120. Also, 120/4 = $30/hour, so B is false.
            </motion.div>
          )}
        </div>
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
