import { motion } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Scene7GraphingSequences({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [points, setPoints] = useState<{x: number, y: number}[]>([]);
  
  // Seq X: Start 1, Add 1 -> 1, 2, 3
  // Seq Y: Start 5, Add 5 -> 5, 10, 15
  
  const data = [
    { x: 1, y: 5 },
    { x: 2, y: 10 },
    { x: 3, y: 15 },
  ];

  const plotPoint = (index: number) => {
    if (index < data.length) {
      setPoints([...points, { x: data[index].x, y: data[index].y }]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Graphing Sequence Relationships</h2>
      
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl">
        {/* Table */}
        <div className="flex-1 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold text-slate-700 mb-4">Sequence Table</h3>
          <div className="mb-4 text-sm text-left space-y-2">
            <p><span className="font-bold text-purple-600">Seq X:</span> Start 1, Add 1</p>
            <p><span className="font-bold text-teal-600">Seq Y:</span> Start 5, Add 5</p>
          </div>
          <table className="w-full text-center border-collapse">
            <thead>
              <tr className="bg-slate-100">
                <th className="p-2 border border-slate-200">X</th>
                <th className="p-2 border border-slate-200">Y</th>
                <th className="p-2 border border-slate-200">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={i} className={points.length > i ? "bg-green-50" : ""}>
                  <td className="p-2 border border-slate-200">{row.x}</td>
                  <td className="p-2 border border-slate-200">{row.y}</td>
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
          <p className="text-sm text-slate-500 mt-4 font-bold">Relationship: Y = 5X</p>
        </div>

        {/* Graph */}
        <div className="flex-1 bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-center justify-center">
          <div className="relative w-64 h-64 border-l-2 border-b-2 border-slate-400">
            {/* Grid Lines */}
            <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-0 opacity-10 pointer-events-none">
              {/* Simplified grid visual */}
            </div>

            {/* Points */}
            {points.map((p, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute w-3 h-3 bg-blue-600 rounded-full -translate-x-1/2 -translate-y-1/2"
                style={{ 
                  left: `${(p.x / 4) * 100}%`, 
                  bottom: `${(p.y / 20) * 100}%` 
                }}
              >
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs bg-slate-800 text-white px-1 rounded opacity-0 hover:opacity-100 transition-opacity whitespace-nowrap">
                  ({p.x}, {p.y})
                </span>
              </motion.div>
            ))}
            
            {/* Labels */}
            <div className="absolute -bottom-6 right-0 text-sm font-bold text-slate-600">X</div>
            <div className="absolute -left-8 top-0 text-sm font-bold text-slate-600 -rotate-90 origin-center">Y</div>
            
            {/* Axis marks */}
            <div className="absolute bottom-0 left-1/4 h-2 w-px bg-slate-400"></div>
            <div className="absolute bottom-0 left-2/4 h-2 w-px bg-slate-400"></div>
            <div className="absolute bottom-0 left-3/4 h-2 w-px bg-slate-400"></div>
            
            <div className="absolute left-0 bottom-1/4 w-2 h-px bg-slate-400"></div>
            <div className="absolute left-0 bottom-2/4 w-2 h-px bg-slate-400"></div>
            <div className="absolute left-0 bottom-3/4 w-2 h-px bg-slate-400"></div>
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
