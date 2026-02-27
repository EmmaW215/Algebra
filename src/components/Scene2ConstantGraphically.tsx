import { motion } from "motion/react";
import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function Scene2ConstantGraphically({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [showConstant, setShowConstant] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Identifying Constant of Proportionality Graphically</h2>
      
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Graph */}
        <div className="relative w-80 h-80 bg-white border-2 border-slate-200 rounded-xl overflow-hidden shadow-sm">
          {/* Grid */}
          <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 pointer-events-none">
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={`v-${i}`} className="border-r border-slate-100 h-full absolute top-0" style={{ left: `${i * 16.66}%` }}></div>
            ))}
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={`h-${i}`} className="border-b border-slate-100 w-full absolute left-0" style={{ top: `${i * 16.66}%` }}></div>
            ))}
          </div>
          
          {/* Axes */}
          <div className="absolute left-0 bottom-0 w-full h-0.5 bg-slate-400 mb-[16.66%]"></div> {/* X Axis at y=0 (shifted up for visual if needed, but here 0 is bottom) */}
          <div className="absolute left-0 bottom-0 h-full w-0.5 bg-slate-400 ml-[16.66%]"></div> {/* Y Axis at x=0 */}

          {/* Line y = 2/3 x */}
          {/* Points: (0,0), (3,2), (6,4) */}
          {/* Scale: Each grid is 1 unit. Origin at (1,1) grid index for visibility? Let's assume standard 0-5 */}
          
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
             {/* Origin at bottom-left padding */}
             {/* Let's map 0-5 to the view */}
             <line x1="16.66%" y1="83.33%" x2="100%" y2="27.77%" stroke="#4f46e5" strokeWidth="3" />
             
             {/* Point (3, 2) */}
             {/* x=3 -> 16.66 + 3*16.66 = 66.64% */}
             {/* y=2 -> 83.33 - 2*16.66 = 50% */}
             <circle cx="66.64%" cy="50%" r="6" fill="#4f46e5" />
          </svg>

          {/* Labels */}
          <div className="absolute left-[68%] top-[45%] bg-white px-2 py-1 rounded shadow text-xs font-bold text-indigo-600">
            (3, 2)
          </div>
        </div>

        {/* Explanation */}
        <div className="max-w-md text-left space-y-4">
          <p className="text-lg text-slate-600">
            The graph shows a proportional relationship passing through the origin (0,0) and the point <span className="font-bold text-indigo-600">(3, 2)</span>.
          </p>
          
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <p className="font-mono text-sm text-slate-500 mb-2">Constant of Proportionality (k)</p>
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold text-slate-800">k = y / x</div>
              <div className="text-2xl font-bold text-slate-300">→</div>
              <div className="text-2xl font-bold text-indigo-600">k = 2 / 3</div>
            </div>
          </div>

          <button
            onClick={() => setShowConstant(!showConstant)}
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
          >
            {showConstant ? "Hide Equation" : "Show Equation"}
          </button>

          {showConstant && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xl font-mono font-bold text-indigo-600 bg-indigo-50 p-3 rounded-lg text-center"
            >
              y = (2/3)x
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
          className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-full font-medium shadow-lg hover:bg-blue-700 transition-colors"
        >
          <span>Next Lesson</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
