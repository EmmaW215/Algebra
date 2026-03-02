import { motion } from "motion/react";
import { useState } from "react";
import { Check, X } from "lucide-react";

export default function Scene2NegativeCoefficients({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [highlight, setHighlight] = useState<string | null>(null);

  const terms = [
    { id: 1, val: "-3y", type: "y", color: "bg-red-100 text-red-700 border-red-200" },
    { id: 2, val: "+4xy", type: "xy", color: "bg-blue-100 text-blue-700 border-blue-200" },
    { id: 3, val: "-2x²", type: "x2", color: "bg-green-100 text-green-700 border-green-200" },
    { id: 4, val: "+3x²", type: "x2", color: "bg-green-100 text-green-700 border-green-200" },
    { id: 5, val: "+2x", type: "x", color: "bg-yellow-100 text-yellow-700 border-yellow-200" },
    { id: 6, val: "+y²", type: "y2", color: "bg-purple-100 text-purple-700 border-purple-200" },
    { id: 7, val: "+2y", type: "y", color: "bg-red-100 text-red-700 border-red-200" },
    { id: 8, val: "-4xy", type: "xy", color: "bg-blue-100 text-blue-700 border-blue-200" },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Negative Coefficients & Hairy Expressions</h2>
      
      <p className="text-lg text-slate-600 max-w-2xl">
        Look at this mess! We need to simplify it. But be careful: <span className="font-mono bg-slate-100 px-1 rounded">y</span> is different from <span className="font-mono bg-slate-100 px-1 rounded">xy</span> and <span className="font-mono bg-slate-100 px-1 rounded">y²</span>.
      </p>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 w-full">
        <div className="flex flex-wrap items-center justify-center gap-4 text-2xl font-mono font-bold">
          {terms.map((term) => (
            <motion.button
              key={term.id}
              whileHover={{ scale: 1.05 }}
              onClick={() => setHighlight(term.type)}
              className={`px-4 py-2 rounded-xl border-2 transition-all ${
                highlight === term.type 
                  ? term.color + " scale-110 shadow-lg" 
                  : highlight 
                    ? "opacity-30 border-slate-100 bg-slate-50 text-slate-400" 
                    : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
              }`}
            >
              {term.val}
            </motion.button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <button 
            onClick={() => setHighlight("y")}
            className={`p-4 rounded-xl border transition-all ${highlight === "y" ? "bg-red-50 border-red-200 ring-2 ring-red-100" : "bg-slate-50 border-slate-200 hover:bg-slate-100"}`}
          >
            <span className="block text-sm text-slate-500 mb-1">y terms</span>
            <span className="font-mono font-bold text-red-600">-3y + 2y = -y</span>
          </button>
          
          <button 
            onClick={() => setHighlight("xy")}
            className={`p-4 rounded-xl border transition-all ${highlight === "xy" ? "bg-blue-50 border-blue-200 ring-2 ring-blue-100" : "bg-slate-50 border-slate-200 hover:bg-slate-100"}`}
          >
            <span className="block text-sm text-slate-500 mb-1">xy terms</span>
            <span className="font-mono font-bold text-blue-600">4xy - 4xy = 0</span>
          </button>

          <button 
            onClick={() => setHighlight("x2")}
            className={`p-4 rounded-xl border transition-all ${highlight === "x2" ? "bg-green-50 border-green-200 ring-2 ring-green-100" : "bg-slate-50 border-slate-200 hover:bg-slate-100"}`}
          >
            <span className="block text-sm text-slate-500 mb-1">x² terms</span>
            <span className="font-mono font-bold text-green-600">-2x² + 3x² = x²</span>
          </button>

          <button 
            onClick={() => setHighlight("y2")}
            className={`p-4 rounded-xl border transition-all ${highlight === "y2" ? "bg-purple-50 border-purple-200 ring-2 ring-purple-100" : "bg-slate-50 border-slate-200 hover:bg-slate-100"}`}
          >
            <span className="block text-sm text-slate-500 mb-1">y² terms</span>
            <span className="font-mono font-bold text-purple-600">y² (only one)</span>
          </button>
        </div>

        {highlight && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 p-4 bg-slate-50 rounded-xl border border-slate-200"
          >
            <h3 className="text-lg font-bold text-slate-700 mb-2">Simplified Result:</h3>
            <p className="text-3xl font-mono font-bold text-indigo-600">
              x² - y + 2x + y²
            </p>
          </motion.div>
        )}

        <div className="mt-12 pt-8 border-t border-slate-100 w-full">
          <h3 className="text-xl font-bold text-slate-800 mb-4">Practice Problem</h3>
          <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
            <p className="text-lg text-slate-700 mb-4">Combine like terms: <span className="font-mono font-bold">r + (-5r)</span></p>
            <div className="flex justify-center space-x-4">
              <button className="px-4 py-2 bg-white border border-indigo-200 rounded-lg hover:bg-indigo-100 text-indigo-900 font-mono">-4r</button>
              <button className="px-4 py-2 bg-white border border-indigo-200 rounded-lg hover:bg-indigo-100 text-indigo-900 font-mono">-5r</button>
              <button className="px-4 py-2 bg-white border border-indigo-200 rounded-lg hover:bg-indigo-100 text-indigo-900 font-mono">4r</button>
            </div>
            <p className="text-sm text-slate-500 mt-4">Hint: r is the same as 1r. So 1r + (-5r) = ?</p>
          </div>
        </div>
      </div>

      <div className="flex space-x-4 mt-auto pt-8">
        <button
          onClick={onPrev}
          className="px-6 py-2 bg-white border border-slate-200 text-slate-700 rounded-full font-medium hover:bg-slate-50 transition-colors"
        >
          Back
        </button>
        <button
          onClick={onNext}
          className="px-6 py-2 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors"
        >
          Next Scene
        </button>
      </div>
    </div>
  );
}
