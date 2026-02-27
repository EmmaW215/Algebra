import { motion } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Scene12EvalFunctionGraph({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [answer, setAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  // Graph: y = x + 2 (Simple linear)
  // Find y when x = 6.
  // y = 8.

  const checkAnswer = () => {
    if (answer === "8") {
      setIsCorrect(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Evaluating Functions from Graph</h2>
      
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl items-center">
        {/* Graph */}
        <div className="flex-1 bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-center justify-center">
          <div className="relative w-64 h-64 border-l-2 border-b-2 border-slate-400">
            {/* Grid */}
            <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 opacity-10 pointer-events-none">
              {/* Simplified grid */}
            </div>

            {/* Line y = x + 2. (0,2) to (6,8) */}
            {/* x range 0-8. y range 0-8. */}
            <svg className="absolute inset-0 w-full h-full overflow-visible">
              <line x1="0" y1="75%" x2="100%" y2="-25%" stroke="#4f46e5" strokeWidth="3" />
              {/* Point at (6, 8) */}
              <circle cx="75%" cy="0%" r="4" fill="#ef4444" />
              {/* Dashed lines */}
              <line x1="75%" y1="100%" x2="75%" y2="0%" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4" />
              <line x1="0%" y1="0%" x2="75%" y2="0%" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4" />
            </svg>
            
            {/* Labels */}
            <div className="absolute -bottom-6 right-0 text-sm font-bold text-slate-600">x</div>
            <div className="absolute -left-8 top-0 text-sm font-bold text-slate-600 -rotate-90 origin-center">y</div>
            
            {/* Axis Numbers */}
            <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-4 text-xs">0</div>
            <div className="absolute bottom-0 left-3/4 -translate-x-1/2 translate-y-4 text-xs font-bold text-red-600">6</div>
            <div className="absolute top-0 left-0 -translate-x-4 -translate-y-1/2 text-xs font-bold text-red-600">?</div>
          </div>
        </div>

        {/* Question */}
        <div className="flex-1 bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6 text-left">
          <p className="text-lg text-slate-600 font-bold">Find the output <span className="text-red-600">y</span> when the input <span className="text-red-600">x</span> is 6.</p>
          
          <div className="flex items-center space-x-2">
            <span className="font-mono text-xl font-bold text-slate-700">y = </span>
            <input
              type="number"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="w-24 p-2 border-2 border-red-200 rounded-lg text-center font-mono text-xl focus:border-red-500 focus:outline-none"
              placeholder="?"
            />
          </div>

          <button
            onClick={checkAnswer}
            className="px-8 py-3 bg-red-600 text-white rounded-full font-bold shadow-lg hover:bg-red-700 transition-colors"
          >
            Check Answer
          </button>

          {isCorrect && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 font-bold text-lg mt-4">
              Correct! When x is 6, the graph is at height 8.
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
          <span>Next Lesson</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
