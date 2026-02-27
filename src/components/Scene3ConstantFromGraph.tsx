import { motion } from "motion/react";
import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function Scene3ConstantFromGraph({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [step, setStep] = useState(0);

  // Points: (0,0), (1,3), (2,6)
  // k = 3

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Constant of Proportionality from Graph</h2>
      
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Graph */}
        <div className="relative w-64 h-96 bg-white border-l-2 border-b-2 border-slate-400">
          {/* Grid Lines */}
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={`h-${i}`} className="absolute w-full h-px bg-slate-100" style={{ bottom: `${i * 16.66}%` }}>
              <span className="absolute -left-6 -top-2 text-xs text-slate-400">{i}</span>
            </div>
          ))}
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={`v-${i}`} className="absolute h-full w-px bg-slate-100" style={{ left: `${i * 33.33}%` }}>
              <span className="absolute -bottom-6 -left-1 text-xs text-slate-400">{i}</span>
            </div>
          ))}

          {/* Line */}
          <svg className="absolute inset-0 w-full h-full overflow-visible">
            <line x1="0%" y1="100%" x2="66.66%" y2="0%" stroke="#4f46e5" strokeWidth="3" />
            
            {/* Points */}
            <circle cx="0%" cy="100%" r="4" fill="#4f46e5" />
            <circle cx="33.33%" cy="50%" r="4" fill="#4f46e5" />
            <circle cx="66.66%" cy="0%" r="4" fill="#4f46e5" />
          </svg>

          {/* Point Labels */}
          <div className="absolute left-[33.33%] bottom-[50%] translate-x-2 -translate-y-2 bg-white px-1 rounded shadow text-xs font-bold text-indigo-600">
            (1, 3)
          </div>
          <div className="absolute left-[66.66%] bottom-[100%] translate-x-2 translate-y-4 bg-white px-1 rounded shadow text-xs font-bold text-indigo-600">
            (2, 6)
          </div>
        </div>

        {/* Table & Calculation */}
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm">
            <table className="w-full text-center">
              <thead className="bg-slate-50">
                <tr>
                  <th className="p-3 border-r border-slate-200">x</th>
                  <th className="p-3">y</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-3 border-r border-slate-100">0</td>
                  <td className="p-3">0</td>
                </tr>
                <tr className="border-t border-slate-100 bg-indigo-50">
                  <td className="p-3 border-r border-slate-100 font-bold">1</td>
                  <td className="p-3 font-bold">3</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-3 border-r border-slate-100">2</td>
                  <td className="p-3">6</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-left space-y-2">
            <p className="text-slate-600">Calculate k:</p>
            <div className="text-2xl font-mono font-bold text-slate-800">
              k = y / x
            </div>
            <div className="text-2xl font-mono font-bold text-indigo-600">
              k = 3 / 1 = 3
            </div>
            <div className="text-2xl font-mono font-bold text-indigo-600">
              k = 6 / 2 = 3
            </div>
          </div>
          
          <div className="p-4 bg-indigo-100 rounded-lg text-indigo-800 font-bold text-center">
            Equation: y = 3x
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
          className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-full font-medium shadow-lg hover:bg-blue-700 transition-colors"
        >
          <span>Next Lesson</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
