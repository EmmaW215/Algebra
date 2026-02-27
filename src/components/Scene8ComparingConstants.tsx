import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowRight, ArrowLeft, CheckCircle, XCircle } from "lucide-react";

export default function Scene8ComparingConstants({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [selectedStore, setSelectedStore] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);

  // Store A: D = 0.75S ($0.75/scoop)
  // Store B: Table (3,3), (8,8) ($1.00/scoop)
  // Store C: Graph (2,3), (4,6) ($1.50/scoop)
  // Least expensive: A

  const checkAnswer = (id: string) => {
    setSelectedStore(id);
    if (id === "A") {
      setIsCorrect(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Comparing Ice Cream Prices</h2>
      <p className="text-lg text-slate-600">Which store has the <span className="font-bold text-indigo-600">least expensive</span> ice cream per scoop?</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {/* Store A */}
        <button 
          onClick={() => checkAnswer("A")}
          className={`bg-white p-4 rounded-xl border-2 transition-all flex flex-col items-center ${selectedStore === "A" ? "border-green-500 bg-green-50" : "border-slate-200 hover:border-indigo-200"}`}
        >
          <h3 className="font-bold text-slate-500 mb-4">Store A</h3>
          <div className="text-2xl font-mono font-bold text-slate-800 mb-2">D = 0.75S</div>
          <p className="text-sm text-slate-400">Equation</p>
          {selectedStore === "A" && <p className="text-green-600 text-sm mt-4 font-bold">$0.75 / scoop (Cheapest!)</p>}
        </button>

        {/* Store B */}
        <button 
          onClick={() => checkAnswer("B")}
          className={`bg-white p-4 rounded-xl border-2 transition-all flex flex-col items-center ${selectedStore === "B" ? "border-red-500 bg-red-50" : "border-slate-200 hover:border-indigo-200"}`}
        >
          <h3 className="font-bold text-slate-500 mb-4">Store B</h3>
          <table className="w-full text-center text-sm mb-2">
            <thead className="bg-slate-100"><tr><th className="p-1">Scoops</th><th className="p-1">Cost</th></tr></thead>
            <tbody>
              <tr><td>3</td><td>$3</td></tr>
              <tr><td>8</td><td>$8</td></tr>
            </tbody>
          </table>
          <p className="text-sm text-slate-400">Table</p>
          {selectedStore === "B" && <p className="text-red-600 text-sm mt-4 font-bold">$1.00 / scoop</p>}
        </button>

        {/* Store C */}
        <button 
          onClick={() => checkAnswer("C")}
          className={`bg-white p-4 rounded-xl border-2 transition-all flex flex-col items-center ${selectedStore === "C" ? "border-red-500 bg-red-50" : "border-slate-200 hover:border-indigo-200"}`}
        >
          <h3 className="font-bold text-slate-500 mb-4">Store C</h3>
          <div className="w-full h-24 bg-slate-50 relative border-l border-b border-slate-300 mb-2">
             <svg className="absolute inset-0 w-full h-full overflow-visible">
               <line x1="0" y1="100%" x2="100%" y2="0%" stroke="#4f46e5" strokeWidth="2" />
               <circle cx="50%" cy="50%" r="3" fill="#4f46e5" />
             </svg>
             <div className="absolute left-1/2 top-1/2 -translate-y-4 text-xs font-bold text-indigo-600">(2, $3)</div>
          </div>
          <p className="text-sm text-slate-400">Graph</p>
          {selectedStore === "C" && <p className="text-red-600 text-sm mt-4 font-bold">$1.50 / scoop</p>}
        </button>
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
