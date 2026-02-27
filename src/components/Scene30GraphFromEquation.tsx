import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";

export default function Scene30GraphFromEquation({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [selected, setSelected] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState(false);

  // Equation: y = 2.5x
  // True statements:
  // C: Slope is 2.5
  // E: Change of 2 in x -> Change of 5 in y (2 * 2.5 = 5)

  const toggleSelection = (id: string) => {
    if (selected.includes(id)) {
      setSelected(selected.filter(s => s !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  const checkAnswer = () => {
    const correct = ["C", "E"];
    if (selected.length === 2 && selected.every(s => correct.includes(s))) {
      setIsCorrect(true);
      setTimeout(() => {
        onNext();
      }, 2000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Graphing from Equation</h2>
      
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
        <h3 className="text-2xl font-bold text-indigo-600">Equation: y = 2.5x</h3>
        
        <div className="relative w-64 h-64 bg-slate-50 border-l-2 border-b-2 border-slate-400 mx-auto">
          <svg className="absolute inset-0 w-full h-full overflow-visible">
            {/* Line y=2.5x. (0,0) -> (2, 5) */}
            {/* Assume max x=4, max y=10 */}
            <line x1="0" y1="100%" x2="50%" y2="50%" stroke="#4f46e5" strokeWidth="3" />
            <circle cx="0" cy="100%" r="4" fill="#4f46e5" />
            <circle cx="50%" cy="50%" r="4" fill="#4f46e5" /> {/* (2, 5) */}
          </svg>
          <div className="absolute bottom-0 left-0 -translate-x-2 translate-y-4 text-xs font-bold text-slate-600">0</div>
          <div className="absolute bottom-0 right-0 translate-y-4 text-xs font-bold text-slate-600">x</div>
        </div>

        <p className="text-lg text-slate-600">Select all <span className="font-bold text-green-600">TRUE</span> statements.</p>
        
        <div className="grid grid-cols-1 gap-4 text-left">
          <button
            onClick={() => toggleSelection("A")}
            className={`p-4 rounded-xl border-2 transition-all flex items-center justify-between
              ${selected.includes("A") ? "border-indigo-500 bg-indigo-50" : "border-slate-200 hover:border-indigo-200"}
            `}
          >
            <span>A. The equation is NOT proportional.</span>
            {selected.includes("A") && <CheckCircle className="text-indigo-600" size={20} />}
          </button>

          <button
            onClick={() => toggleSelection("B")}
            className={`p-4 rounded-xl border-2 transition-all flex items-center justify-between
              ${selected.includes("B") ? "border-indigo-500 bg-indigo-50" : "border-slate-200 hover:border-indigo-200"}
            `}
          >
            <span>B. The unit rate is 2/5 (0.4).</span>
            {selected.includes("B") && <CheckCircle className="text-indigo-600" size={20} />}
          </button>

          <button
            onClick={() => toggleSelection("C")}
            className={`p-4 rounded-xl border-2 transition-all flex items-center justify-between
              ${selected.includes("C") ? "border-indigo-500 bg-indigo-50" : "border-slate-200 hover:border-indigo-200"}
            `}
          >
            <span>C. The slope of the line is 2.5.</span>
            {selected.includes("C") && <CheckCircle className="text-indigo-600" size={20} />}
          </button>

          <button
            onClick={() => toggleSelection("D")}
            className={`p-4 rounded-xl border-2 transition-all flex items-center justify-between
              ${selected.includes("D") ? "border-indigo-500 bg-indigo-50" : "border-slate-200 hover:border-indigo-200"}
            `}
          >
            <span>D. Change of 5 in x -&gt; Change of 2 in y.</span>
            {selected.includes("D") && <CheckCircle className="text-indigo-600" size={20} />}
          </button>

          <button
            onClick={() => toggleSelection("E")}
            className={`p-4 rounded-xl border-2 transition-all flex items-center justify-between
              ${selected.includes("E") ? "border-indigo-500 bg-indigo-50" : "border-slate-200 hover:border-indigo-200"}
            `}
          >
            <span>E. Change of 2 in x -&gt; Change of 5 in y.</span>
            {selected.includes("E") && <CheckCircle className="text-indigo-600" size={20} />}
          </button>
        </div>

        <button
          onClick={checkAnswer}
          className="px-8 py-3 bg-indigo-600 text-white rounded-full font-bold shadow-lg hover:bg-indigo-700 transition-colors"
        >
          Check Answer
        </button>

        {isCorrect && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 font-bold text-lg">
            Correct! Slope is 2.5, and 2 * 2.5 = 5.
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
          className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-full font-medium shadow-lg hover:bg-blue-700 transition-colors"
        >
          <span>Finish Unit</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
