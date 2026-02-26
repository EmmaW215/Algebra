import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle, XCircle } from "lucide-react";

export default function Scene14RatiosCoordinatePlane({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [points, setPoints] = useState<{x: number, y: number}[]>([]);
  const [isCorrect, setIsCorrect] = useState(false);

  // Ratio: 1 Batch : 8 Cups
  // Points: (1, 8), (2, 16), (3, 24)

  const targetPoints = [
    { x: 1, y: 8 },
    { x: 2, y: 16 },
    { x: 3, y: 24 }
  ];

  const handlePlot = (x: number, y: number) => {
    if (points.some(p => p.x === x && p.y === y)) return;
    
    const newPoints = [...points, { x, y }];
    setPoints(newPoints);

    // Check if all target points are plotted
    const allTargetsFound = targetPoints.every(tp => 
      newPoints.some(p => p.x === tp.x && p.y === tp.y)
    );

    if (allTargetsFound) {
      setIsCorrect(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Ratios on the Coordinate Plane</h2>
      
      <div className="w-full max-w-4xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col md:flex-row gap-8">
        
        {/* Table */}
        <div className="w-full md:w-1/3 space-y-6">
          <p className="text-lg text-slate-600">
            A baker uses <span className="font-bold text-indigo-600">8 cups</span> of flour for every <span className="font-bold text-slate-800">1 batch</span>.
          </p>
          <p className="text-sm text-slate-500">Plot the points for 1, 2, and 3 batches.</p>
          
          <div className="border border-slate-200 rounded-lg overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="p-3 font-bold text-slate-700">Batches (x)</th>
                  <th className="p-3 font-bold text-indigo-700">Cups (y)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-3">1</td>
                  <td className="p-3 font-bold text-indigo-600">8</td>
                </tr>
                <tr>
                  <td className="p-3">2</td>
                  <td className="p-3 font-bold text-indigo-600">16</td>
                </tr>
                <tr>
                  <td className="p-3">3</td>
                  <td className="p-3 font-bold text-indigo-600">24</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Graph */}
        <div className="w-full md:w-2/3 relative h-80 bg-slate-50 border border-slate-200 rounded-lg">
          {/* Grid Lines */}
          <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 pointer-events-none">
            {/* Vertical Lines */}
            <div className="border-r border-slate-200 h-full w-full absolute left-0"></div>
            <div className="border-r border-slate-200 h-full w-1/4 absolute left-0"></div>
            <div className="border-r border-slate-200 h-full w-2/4 absolute left-0"></div>
            <div className="border-r border-slate-200 h-full w-3/4 absolute left-0"></div>
            
            {/* Horizontal Lines */}
            <div className="border-b border-slate-200 w-full h-full absolute top-0"></div>
            <div className="border-b border-slate-200 w-full h-1/4 absolute top-0"></div>
            <div className="border-b border-slate-200 w-full h-2/4 absolute top-0"></div>
            <div className="border-b border-slate-200 w-full h-3/4 absolute top-0"></div>
          </div>

          {/* Labels */}
          <div className="absolute bottom-0 left-0 w-full flex justify-between px-4 pb-1 text-xs text-slate-400">
            <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span>
          </div>
          <div className="absolute top-0 left-0 h-full flex flex-col justify-between py-4 pl-1 text-xs text-slate-400">
            <span>32</span><span>24</span><span>16</span><span>8</span><span>0</span>
          </div>

          {/* Click Areas (Simplified for this demo) */}
          <button onClick={() => handlePlot(1, 8)} className="absolute left-[25%] bottom-[25%] w-8 h-8 -ml-4 -mb-4 rounded-full hover:bg-indigo-100/50 z-10"></button>
          <button onClick={() => handlePlot(2, 16)} className="absolute left-[50%] bottom-[50%] w-8 h-8 -ml-4 -mb-4 rounded-full hover:bg-indigo-100/50 z-10"></button>
          <button onClick={() => handlePlot(3, 24)} className="absolute left-[75%] bottom-[75%] w-8 h-8 -ml-4 -mb-4 rounded-full hover:bg-indigo-100/50 z-10"></button>

          {/* Plotted Points */}
          <AnimatePresence>
            {points.map((p, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute w-4 h-4 bg-indigo-600 rounded-full border-2 border-white shadow-sm"
                style={{ 
                  left: `${p.x * 25}%`, 
                  bottom: `${(p.y / 32) * 100}%`,
                  transform: "translate(-50%, 50%)" 
                }}
              />
            ))}
          </AnimatePresence>

          {/* Line */}
          {isCorrect && (
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <motion.line
                x1="0%" y1="100%"
                x2="75%" y2="25%"
                stroke="#4f46e5"
                strokeWidth="3"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1 }}
              />
            </svg>
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
            ${!isCorrect
              ? "bg-slate-200 text-slate-400 cursor-not-allowed"
              : "bg-slate-900 text-white hover:bg-slate-800"
            }`}
        >
          <span>Next Lesson</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
