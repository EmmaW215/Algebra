import { motion } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";

export default function Scene25InterpretingGraph({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);

  // Graph: V-shape.
  // 0-3: Slope -1 (Decreasing)
  // 3-5: Slope +3 (Increasing)
  // Correct: Decreases, then Increases.

  const checkAnswer = (id: string) => {
    setSelected(id);
    if (id === "B") {
      setIsCorrect(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Interpreting Graphs</h2>
      
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl items-center">
        {/* Graph */}
        <div className="flex-1 bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-center justify-center">
          <div className="relative w-64 h-64 border-l-2 border-b-2 border-slate-400">
            {/* Grid */}
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-10 pointer-events-none"></div>

            {/* V-Shape Graph */}
            {/* (0, 4) -> (3, 1) -> (5, 7) */}
            {/* Max Y is 7. Max X is 6. */}
            <svg className="absolute inset-0 w-full h-full overflow-visible">
              <polyline 
                points="0,109 128,218 213,0" 
                fill="none" 
                stroke="#9333ea" 
                strokeWidth="4" 
                strokeLinecap="round"
                strokeLinejoin="round"
                transform="scale(1, 0.8) translate(0, 50)" // Adjust to fit box roughly
              />
            </svg>
            
            {/* Labels */}
            <div className="absolute -bottom-6 right-0 text-sm font-bold text-slate-600">Time</div>
            <div className="absolute -left-8 top-0 text-sm font-bold text-slate-600 -rotate-90 origin-center">Value</div>
          </div>
        </div>

        {/* Question */}
        <div className="flex-1 bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6 text-left">
          <p className="text-lg text-slate-600 font-bold">Describe the behavior of the function.</p>
          
          <div className="grid grid-cols-1 gap-3">
            <button
              onClick={() => checkAnswer("A")}
              className={`p-4 rounded-xl border-2 transition-all flex items-center justify-between
                ${selected === "A" ? "border-red-500 bg-red-50" : "border-slate-200 hover:border-purple-200"}
              `}
            >
              <span>A. Increases, then Decreases</span>
              {selected === "A" && <span className="text-red-600 font-bold">Incorrect</span>}
            </button>

            <button
              onClick={() => checkAnswer("B")}
              className={`p-4 rounded-xl border-2 transition-all flex items-center justify-between
                ${selected === "B" ? "border-green-500 bg-green-50" : "border-slate-200 hover:border-purple-200"}
              `}
            >
              <span>B. Decreases, then Increases</span>
              {selected === "B" && <CheckCircle size={24} className="text-green-600" />}
            </button>

            <button
              onClick={() => checkAnswer("C")}
              className={`p-4 rounded-xl border-2 transition-all flex items-center justify-between
                ${selected === "C" ? "border-red-500 bg-red-50" : "border-slate-200 hover:border-purple-200"}
              `}
            >
              <span>C. Constant throughout</span>
              {selected === "C" && <span className="text-red-600 font-bold">Incorrect</span>}
            </button>
          </div>

          {isCorrect && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 font-bold text-lg mt-4">
              Correct! The graph goes down (negative slope), hits a minimum, then goes up (positive slope).
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
            ${!isCorrect ? "bg-slate-200 text-slate-400 cursor-not-allowed" : "bg-purple-600 text-white hover:bg-purple-700"}
          `}
        >
          <span>Finish Unit</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
