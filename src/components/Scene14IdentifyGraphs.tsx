import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function Scene14IdentifyGraphs({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [selectedGraph, setSelectedGraph] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);

  // Graph A: Line through origin (Proportional)
  // Graph B: Line not through origin (Not Proportional)
  // Graph C: Curve (Not Proportional)

  const checkAnswer = (id: string) => {
    setSelectedGraph(id);
    if (id === "A") {
      setIsCorrect(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Identifying Proportional Graphs</h2>
      <p className="text-lg text-slate-600">Which graph shows a proportional relationship?</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {/* Graph A */}
        <button 
          onClick={() => checkAnswer("A")}
          className={`bg-white p-4 rounded-xl border-2 transition-all flex flex-col items-center ${selectedGraph === "A" ? "border-green-500 bg-green-50" : "border-slate-200 hover:border-indigo-200"}`}
        >
          <div className="w-full h-40 bg-slate-50 relative border-l border-b border-slate-300 mb-2">
             <svg className="absolute inset-0 w-full h-full overflow-visible">
               <line x1="0" y1="100%" x2="100%" y2="0%" stroke="#4f46e5" strokeWidth="3" />
             </svg>
          </div>
          <p className="font-bold text-slate-700">Graph A</p>
          {selectedGraph === "A" && <p className="text-green-600 text-sm mt-2 font-bold">Yes! Straight line through origin.</p>}
        </button>

        {/* Graph B */}
        <button 
          onClick={() => checkAnswer("B")}
          className={`bg-white p-4 rounded-xl border-2 transition-all flex flex-col items-center ${selectedGraph === "B" ? "border-red-500 bg-red-50" : "border-slate-200 hover:border-indigo-200"}`}
        >
          <div className="w-full h-40 bg-slate-50 relative border-l border-b border-slate-300 mb-2">
             <svg className="absolute inset-0 w-full h-full overflow-visible">
               <line x1="0" y1="80%" x2="100%" y2="0%" stroke="#ef4444" strokeWidth="3" />
             </svg>
          </div>
          <p className="font-bold text-slate-700">Graph B</p>
          {selectedGraph === "B" && <p className="text-red-600 text-sm mt-2 font-bold">No. Does not pass through origin.</p>}
        </button>

        {/* Graph C */}
        <button 
          onClick={() => checkAnswer("C")}
          className={`bg-white p-4 rounded-xl border-2 transition-all flex flex-col items-center ${selectedGraph === "C" ? "border-red-500 bg-red-50" : "border-slate-200 hover:border-indigo-200"}`}
        >
          <div className="w-full h-40 bg-slate-50 relative border-l border-b border-slate-300 mb-2">
             <svg className="absolute inset-0 w-full h-full overflow-visible">
               <path d="M0,160 Q80,160 160,0" stroke="#ef4444" strokeWidth="3" fill="none" />
             </svg>
          </div>
          <p className="font-bold text-slate-700">Graph C</p>
          {selectedGraph === "C" && <p className="text-red-600 text-sm mt-2 font-bold">No. Not a straight line.</p>}
        </button>
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
