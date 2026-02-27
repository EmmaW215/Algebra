import { motion } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";

export default function Scene8TablesFromRules({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);

  // Rule 1: y = 5x
  // Rule 2: y = x + 12
  // Find (x, y) that works for BOTH.
  // 5x = x + 12 => 4x = 12 => x = 3. y = 15.
  // Options: (1, 13), (3, 15), (5, 25)

  const checkAnswer = (id: string) => {
    setSelected(id);
    if (id === "B") {
      setIsCorrect(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Tables from Rules</h2>
      
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
        <div className="text-left space-y-4 bg-slate-50 p-6 rounded-xl border border-slate-200">
          <p className="text-lg"><span className="font-bold text-purple-600">Rule 1:</span> Multiply <span className="font-mono font-bold">x</span> by 5 to get <span className="font-mono font-bold">y</span>.</p>
          <p className="text-lg"><span className="font-bold text-teal-600">Rule 2:</span> Add 12 to <span className="font-mono font-bold">x</span> to get <span className="font-mono font-bold">y</span>.</p>
        </div>

        <p className="text-lg text-slate-600 font-bold">Which ordered pair (x, y) works for BOTH rules?</p>
        
        <div className="grid grid-cols-1 gap-3 text-left">
          <button
            onClick={() => checkAnswer("A")}
            className={`p-4 rounded-xl border-2 transition-all flex items-center justify-between font-mono text-lg
              ${selected === "A" ? "border-red-500 bg-red-50" : "border-slate-200 hover:border-purple-200"}
            `}
          >
            <span>A. (1, 13)</span>
            {selected === "A" && <span className="text-red-600 font-bold">Incorrect</span>}
          </button>

          <button
            onClick={() => checkAnswer("B")}
            className={`p-4 rounded-xl border-2 transition-all flex items-center justify-between font-mono text-lg
              ${selected === "B" ? "border-green-500 bg-green-50" : "border-slate-200 hover:border-purple-200"}
            `}
          >
            <span>B. (3, 15)</span>
            {selected === "B" && <CheckCircle size={24} className="text-green-600" />}
          </button>

          <button
            onClick={() => checkAnswer("C")}
            className={`p-4 rounded-xl border-2 transition-all flex items-center justify-between font-mono text-lg
              ${selected === "C" ? "border-red-500 bg-red-50" : "border-slate-200 hover:border-purple-200"}
            `}
          >
            <span>C. (5, 25)</span>
            {selected === "C" && <span className="text-red-600 font-bold">Incorrect</span>}
          </button>
        </div>

        {isCorrect && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 font-bold text-lg mt-4">
            Correct! 
            <br/>Rule 1: 3 × 5 = 15. 
            <br/>Rule 2: 3 + 12 = 15.
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
            ${!isCorrect ? "bg-slate-200 text-slate-400 cursor-not-allowed" : "bg-purple-600 text-white hover:bg-purple-700"}
          `}
        >
          <span>Next Lesson</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
