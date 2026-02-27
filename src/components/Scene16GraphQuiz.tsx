import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowRight, ArrowLeft, CheckCircle, XCircle } from "lucide-react";

export default function Scene16GraphQuiz({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [selected, setSelected] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState(false);

  // A: Proportional (Line through origin)
  // B: Not Proportional (Line not through origin)
  // C: Not Proportional (Curve)
  // Correct: A

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
      <h2 className="text-3xl font-bold text-slate-800">Quiz: Identify Proportional Graphs</h2>
      <p className="text-lg text-slate-600">Select all graphs that show a proportional relationship.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {/* Graph A */}
        <button 
          onClick={() => toggleSelection("A")}
          className={`bg-white p-4 rounded-xl border-2 transition-all flex flex-col items-center ${selected.includes("A") ? "border-indigo-500 bg-indigo-50" : "border-slate-200 hover:border-indigo-200"}`}
        >
          <div className="w-full h-40 bg-slate-50 relative border-l border-b border-slate-300 mb-2">
             <svg className="absolute inset-0 w-full h-full overflow-visible">
               <line x1="0" y1="100%" x2="100%" y2="0%" stroke="#4f46e5" strokeWidth="3" />
             </svg>
          </div>
          <p className="font-bold text-slate-700">Graph A</p>
          {selected.includes("A") && <CheckCircle className="text-indigo-600 mt-2" size={20} />}
        </button>

        {/* Graph B */}
        <button 
          onClick={() => toggleSelection("B")}
          className={`bg-white p-4 rounded-xl border-2 transition-all flex flex-col items-center ${selected.includes("B") ? "border-indigo-500 bg-indigo-50" : "border-slate-200 hover:border-indigo-200"}`}
        >
          <div className="w-full h-40 bg-slate-50 relative border-l border-b border-slate-300 mb-2">
             <svg className="absolute inset-0 w-full h-full overflow-visible">
               <line x1="0" y1="80%" x2="100%" y2="0%" stroke="#ef4444" strokeWidth="3" />
             </svg>
          </div>
          <p className="font-bold text-slate-700">Graph B</p>
          {selected.includes("B") && <CheckCircle className="text-indigo-600 mt-2" size={20} />}
        </button>

        {/* Graph C */}
        <button 
          onClick={() => toggleSelection("C")}
          className={`bg-white p-4 rounded-xl border-2 transition-all flex flex-col items-center ${selected.includes("C") ? "border-indigo-500 bg-indigo-50" : "border-slate-200 hover:border-indigo-200"}`}
        >
          <div className="w-full h-40 bg-slate-50 relative border-l border-b border-slate-300 mb-2">
             <svg className="absolute inset-0 w-full h-full overflow-visible">
               <path d="M0,160 Q80,160 160,0" stroke="#ef4444" strokeWidth="3" fill="none" />
             </svg>
          </div>
          <p className="font-bold text-slate-700">Graph C</p>
          {selected.includes("C") && <CheckCircle className="text-indigo-600 mt-2" size={20} />}
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
          Correct! Only Graph A is a straight line passing through the origin.
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
