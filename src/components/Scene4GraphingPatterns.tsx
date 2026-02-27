import { motion } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Scene4GraphingPatterns({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [points, setPoints] = useState<{x: number, y: number}[]>([]);
  
  // Pattern A: 0, 1, 2, 3, 4
  // Pattern B: 3A + 1 -> 1, 4, 7, 10, 13
  
  const data = [
    { a: 0, b: 1 },
    { a: 1, b: 4 },
    { a: 2, b: 7 },
    { a: 3, b: 10 },
    { a: 4, b: 13 },
  ];

  const plotPoint = (index: number) => {
    if (index < data.length) {
      setPoints([...points, { x: data[index].a, y: data[index].b }]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Graphing Patterns</h2>
      
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl">
        {/* Table */}
        <div className="flex-1 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold text-slate-700 mb-4">Pattern Table</h3>
          <table className="w-full text-center border-collapse">
            <thead>
              <tr className="bg-slate-100">
                <th className="p-2 border border-slate-200">Pattern A (x)</th>
                <th className="p-2 border border-slate-200">Pattern B (y)</th>
                <th className="p-2 border border-slate-200">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={i} className={points.length > i ? "bg-green-50" : ""}>
                  <td className="p-2 border border-slate-200">{row.a}</td>
                  <td className="p-2 border border-slate-200">{row.b}</td>
                  <td className="p-2 border border-slate-200">
                    <button 
                      onClick={() => plotPoint(i)}
                      disabled={points.length > i}
                      className={`px-3 py-1 rounded text-sm font-bold ${
                        points.length > i ? "bg-green-200 text-green-700" : "bg-blue-500 text-white hover:bg-blue-600"
                      }`}
                    >
                      {points.length > i ? "Plotted" : "Plot"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-sm text-slate-500 mt-4">Rule: Multiply A by 3, then add 1.</p>
        </div>

        {/* Graph */}
        <div className="flex-1 bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-center justify-center">
          <div className="relative w-64 h-64 border-l-2 border-b-2 border-slate-400">
            {/* Grid Lines */}
            <div className="absolute inset-0 grid grid-cols-5 grid-rows-14 gap-0 opacity-10 pointer-events-none">
              {/* Simplified grid visual */}
            </div>

            {/* Points */}
            <AnimatePresence>
              {points.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute w-3 h-3 bg-blue-600 rounded-full -translate-x-1/2 -translate-y-1/2"
                  style={{ 
                    left: `${(p.x / 4) * 100}%`, 
                    bottom: `${(p.y / 14) * 100}%` 
                  }}
                >
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs bg-slate-800 text-white px-1 rounded opacity-0 hover:opacity-100 transition-opacity">
                    ({p.x}, {p.y})
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {/* Labels */}
            <div className="absolute -bottom-6 right-0 text-sm font-bold text-slate-600">Pattern A</div>
            <div className="absolute -left-8 top-0 text-sm font-bold text-slate-600 -rotate-90 origin-center">Pattern B</div>
          </div>
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
          className="flex items-center space-x-2 px-6 py-3 bg-purple-600 text-white rounded-full font-medium shadow-lg hover:bg-purple-700 transition-colors"
        >
          <span>Next Lesson</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
