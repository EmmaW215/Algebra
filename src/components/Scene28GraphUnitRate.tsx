import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function Scene28GraphUnitRate({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [points, setPoints] = useState<{x: number, y: number}[]>([]);
  const [isCorrect, setIsCorrect] = useState(false);

  // Unit rate 0.4 -> y = 0.4x
  // Points needed: (0,0) and (5,2)

  const addPoint = (x: number, y: number) => {
    if (points.length < 2) {
      setPoints([...points, {x, y}]);
    } else {
      setPoints([{x, y}]); // Reset if full
    }
  };

  const checkAnswer = () => {
    // Check if points are on y=0.4x
    const valid = points.every(p => Math.abs(p.y - 0.4 * p.x) < 0.01);
    if (valid && points.length === 2) {
      setIsCorrect(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Graphing Unit Rate</h2>
      <p className="text-lg text-slate-600">
        Graph the line with a unit rate of <span className="font-bold text-indigo-600">0.4</span>.
        <br/>(Hint: y = 0.4x. Try x=5)
      </p>
      
      <div className="relative w-80 h-80 bg-white border-l-2 border-b-2 border-slate-400">
        {/* Grid */}
        <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 pointer-events-none opacity-20">
          {Array.from({ length: 100 }).map((_, i) => (
            <div key={i} className="border border-slate-300"></div>
          ))}
        </div>

        {/* Clickable Area */}
        <div className="absolute inset-0 grid grid-cols-10 grid-rows-10">
          {Array.from({ length: 10 }).map((_, row) => (
            Array.from({ length: 10 }).map((_, col) => {
              const x = col; 
              const y = 9 - row; // Invert y
              return (
                <div 
                  key={`${x}-${y}`} 
                  onClick={() => addPoint(x, y)}
                  className="cursor-pointer hover:bg-indigo-100/50"
                />
              );
            })
          ))}
        </div>

        {/* Points */}
        {points.map((p, i) => (
          <div 
            key={i}
            className="absolute w-4 h-4 bg-indigo-600 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{ left: `${p.x * 10}%`, bottom: `${p.y * 10}%` }}
          />
        ))}

        {/* Line */}
        {points.length === 2 && (
          <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
            <line 
              x1={`${points[0].x * 10}%`} 
              y1={`${100 - points[0].y * 10}%`} 
              x2={`${points[1].x * 10}%`} 
              y2={`${100 - points[1].y * 10}%`} 
              stroke="#4f46e5" 
              strokeWidth="3" 
            />
          </svg>
        )}
      </div>

      <div className="flex space-x-4">
        <button
          onClick={() => setPoints([])}
          className="px-6 py-2 bg-slate-200 text-slate-700 rounded-full font-bold hover:bg-slate-300"
        >
          Reset
        </button>
        <button
          onClick={checkAnswer}
          className="px-8 py-3 bg-indigo-600 text-white rounded-full font-bold shadow-lg hover:bg-indigo-700 transition-colors"
        >
          Check Graph
        </button>
      </div>

      {isCorrect && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 font-bold text-lg">
          Correct! The line passes through (0,0) and (5,2). Slope = 2/5 = 0.4.
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
