import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function Scene15GraphExamples({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [example, setExample] = useState(0);

  const examples = [
    { 
      eq: "y = 0.5x", 
      points: [{x:0,y:0}, {x:2,y:1}, {x:4,y:2}], 
      isProportional: true,
      desc: "Straight line through origin (0,0). Proportional."
    },
    { 
      eq: "y = 2x + 1", 
      points: [{x:0,y:1}, {x:1,y:3}, {x:2,y:5}], 
      isProportional: false,
      desc: "Straight line, but does NOT pass through origin. Not Proportional."
    },
    { 
      eq: "y = x²", 
      points: [{x:0,y:0}, {x:1,y:1}, {x:2,y:4}], 
      isProportional: false,
      desc: "Passes through origin, but is a CURVE. Not Proportional."
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Comparing Graph Types</h2>
      
      <div className="flex space-x-4 mb-4">
        {examples.map((ex, i) => (
          <button
            key={i}
            onClick={() => setExample(i)}
            className={`px-4 py-2 rounded-full font-bold transition-colors ${
              example === i ? "bg-blue-600 text-white" : "bg-slate-200 text-slate-600 hover:bg-slate-300"
            }`}
          >
            {ex.eq}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={example}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 w-full max-w-2xl flex flex-col items-center"
        >
          <h3 className="text-2xl font-mono font-bold text-slate-800 mb-4">{examples[example].eq}</h3>
          
          <div className="relative w-64 h-64 bg-slate-50 border-l-2 border-b-2 border-slate-400 mb-6">
            {/* Grid */}
            <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 pointer-events-none opacity-20">
               {/* Simplified grid */}
            </div>

            {/* Plot */}
            <svg className="absolute inset-0 w-full h-full overflow-visible">
              {example === 0 && <line x1="0" y1="100%" x2="100%" y2="50%" stroke="#4f46e5" strokeWidth="3" />}
              {example === 1 && <line x1="0" y1="80%" x2="100%" y2="0%" stroke="#ef4444" strokeWidth="3" />}
              {example === 2 && <path d="M0,256 Q64,240 128,0" stroke="#ef4444" strokeWidth="3" fill="none" transform="scale(1, 0.25)" />} {/* Simplified curve visualization */}
              
              {/* Points */}
              {examples[example].points.map((p, i) => (
                <circle 
                  key={i} 
                  cx={`${(p.x / 4) * 100}%`} 
                  cy={`${100 - (p.y / 5) * 100}%`} 
                  r="4" 
                  fill={examples[example].isProportional ? "#4f46e5" : "#ef4444"} 
                />
              ))}
            </svg>
          </div>

          <p className={`text-lg font-bold ${examples[example].isProportional ? "text-green-600" : "text-red-600"}`}>
            {examples[example].desc}
          </p>
        </motion.div>
      </AnimatePresence>

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
          <span>Next Lesson</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
