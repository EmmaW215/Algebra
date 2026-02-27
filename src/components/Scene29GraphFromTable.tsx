import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function Scene29GraphFromTable({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [slope, setSlope] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  // Table: (0,0), (3, 0.5), (6, 1)
  // Slope = 1/6

  const checkAnswer = () => {
    const val = parseFloat(slope);
    if (slope === "1/6" || Math.abs(val - 0.166) < 0.01) {
      setIsCorrect(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Graphing from a Table</h2>
      
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Table */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <table className="w-full text-center border-collapse">
            <thead>
              <tr className="bg-slate-100">
                <th className="p-3 border border-slate-200">x</th>
                <th className="p-3 border border-slate-200">y</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-3 border border-slate-200">0</td><td className="p-3 border border-slate-200">0</td></tr>
              <tr><td className="p-3 border border-slate-200">3</td><td className="p-3 border border-slate-200">0.5</td></tr>
              <tr><td className="p-3 border border-slate-200">6</td><td className="p-3 border border-slate-200">1</td></tr>
              <tr><td className="p-3 border border-slate-200">9</td><td className="p-3 border border-slate-200">1.5</td></tr>
            </tbody>
          </table>
        </div>

        {/* Graph */}
        <div className="relative w-64 h-64 bg-white border-l-2 border-b-2 border-slate-400">
          <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 pointer-events-none opacity-20">
             {/* Grid */}
          </div>
          <svg className="absolute inset-0 w-full h-full overflow-visible">
            {/* Line through (0,0) and (6,1) */}
            {/* x=6 is 75% width (assuming max x=8), y=1 is 25% height (assuming max y=4) */}
            <line x1="0" y1="100%" x2="75%" y2="75%" stroke="#4f46e5" strokeWidth="3" />
            <circle cx="0" cy="100%" r="4" fill="#4f46e5" />
            <circle cx="75%" cy="75%" r="4" fill="#4f46e5" />
          </svg>
          <div className="absolute bottom-0 left-0 -translate-x-2 translate-y-4 text-xs font-bold text-slate-600">0</div>
          <div className="absolute bottom-0 right-0 translate-y-4 text-xs font-bold text-slate-600">x</div>
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-lg text-slate-700">
          What is the <span className="font-bold text-indigo-600">slope</span> (change in y / change in x)?
        </p>
        <div className="flex items-center justify-center space-x-2">
          <span className="font-mono text-2xl font-bold text-slate-800">m = </span>
          <input
            type="text"
            value={slope}
            onChange={(e) => setSlope(e.target.value)}
            className="w-24 p-2 border-2 border-indigo-200 rounded-lg font-mono text-xl text-center focus:border-indigo-500 focus:outline-none"
            placeholder="?"
          />
        </div>
        <p className="text-sm text-slate-500">Enter as fraction (e.g. 1/2) or decimal.</p>
      </div>

      <button
        onClick={checkAnswer}
        className="px-8 py-3 bg-indigo-600 text-white rounded-full font-bold shadow-lg hover:bg-indigo-700 transition-colors"
      >
        Check Answer
      </button>

      {isCorrect && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 font-bold text-lg">
          Correct! Change in y is 1 when change in x is 6. Slope = 1/6.
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
