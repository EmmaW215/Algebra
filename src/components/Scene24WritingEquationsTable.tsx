import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function Scene24WritingEquationsTable({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [k, setK] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  // Table: (0,0), (1, 1.75), (2, 3.5), (3, 5.25)
  // k = 1.75 or 7/4

  const checkAnswer = () => {
    const val = parseFloat(k);
    if (Math.abs(val - 1.75) < 0.01 || k === "7/4") {
      setIsCorrect(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Writing Equations from Tables</h2>
      
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
        <h3 className="text-2xl font-bold text-pink-600">Ice Cream Scoops vs Price</h3>
        
        <div className="flex justify-center">
          <table className="w-full max-w-md text-center border-collapse">
            <thead>
              <tr className="bg-pink-50 text-pink-800">
                <th className="p-3 border border-pink-200">Scoops (x)</th>
                <th className="p-3 border border-pink-200">Price ($) (y)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-pink-100">0</td>
                <td className="p-3 border border-pink-100">0</td>
              </tr>
              <tr>
                <td className="p-3 border border-pink-100">1</td>
                <td className="p-3 border border-pink-100">1.75</td>
              </tr>
              <tr>
                <td className="p-3 border border-pink-100">2</td>
                <td className="p-3 border border-pink-100">3.50</td>
              </tr>
              <tr>
                <td className="p-3 border border-pink-100">3</td>
                <td className="p-3 border border-pink-100">5.25</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="space-y-4">
          <p className="text-lg text-slate-700">
            Find the constant of proportionality (k = y/x).
          </p>
          <div className="flex items-center justify-center space-x-2">
            <span className="font-mono text-2xl font-bold text-slate-800">y = </span>
            <input
              type="text"
              value={k}
              onChange={(e) => setK(e.target.value)}
              className="w-24 p-2 border-2 border-pink-200 rounded-lg font-mono text-xl text-center focus:border-pink-500 focus:outline-none"
              placeholder="k"
            />
            <span className="font-mono text-2xl font-bold text-slate-800">x</span>
          </div>
          <p className="text-sm text-slate-500">Enter k as a decimal (e.g. 1.5) or fraction (e.g. 3/2)</p>
        </div>

        <button
          onClick={checkAnswer}
          className="px-8 py-3 bg-pink-600 text-white rounded-full font-bold shadow-lg hover:bg-pink-700 transition-colors"
        >
          Check Answer
        </button>

        {isCorrect && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 font-bold text-lg">
            Correct! The price is $1.75 per scoop. Equation: y = 1.75x
          </motion.div>
        )}
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
