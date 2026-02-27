import { motion } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle, XCircle } from "lucide-react";

export default function Scene22LinearNonLinearTable({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);

  // Table: (-7,4), (-3,3), (1,2), (7,1)
  // Changes:
  // -7 to -3: dx=4, dy=-1. Slope = -1/4
  // -3 to 1: dx=4, dy=-1. Slope = -1/4
  // 1 to 7: dx=6, dy=-1. Slope = -1/6
  // Not linear.

  const checkAnswer = (id: string) => {
    setSelected(id);
    if (id === "No") {
      setIsCorrect(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Linear or Nonlinear?</h2>
      
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
        <h3 className="text-xl font-bold text-slate-700 mb-4">Function Table</h3>
        <table className="w-full text-center border-collapse mb-6">
          <thead>
            <tr className="bg-slate-100">
              <th className="p-3 border border-slate-200">x</th>
              <th className="p-3 border border-slate-200">y</th>
              <th className="p-3 border border-slate-200 text-sm text-slate-500">Change Ratio (Δy/Δx)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-3 border border-slate-200">-7</td><td className="p-3 border border-slate-200">4</td><td className="p-3 border border-slate-200 text-slate-400">-</td></tr>
            <tr><td className="p-3 border border-slate-200">-3</td><td className="p-3 border border-slate-200">3</td><td className="p-3 border border-slate-200 text-slate-600">-1/4</td></tr>
            <tr><td className="p-3 border border-slate-200">1</td><td className="p-3 border border-slate-200">2</td><td className="p-3 border border-slate-200 text-slate-600">-1/4</td></tr>
            <tr><td className="p-3 border border-slate-200">7</td><td className="p-3 border border-slate-200">1</td><td className="p-3 border border-slate-200 text-red-600 font-bold">-1/6</td></tr>
          </tbody>
        </table>

        <p className="text-lg text-slate-600 font-bold">Is this function <span className="text-purple-600">linear</span>?</p>
        
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => checkAnswer("Yes")}
            className={`px-8 py-3 rounded-full font-bold shadow-lg transition-colors flex items-center space-x-2
              ${selected === "Yes" ? "bg-red-100 text-red-700 border-2 border-red-500" : "bg-white border-2 border-slate-200 hover:bg-slate-50"}
            `}
          >
            <span>Yes</span>
            {selected === "Yes" && <XCircle size={20} />}
          </button>

          <button
            onClick={() => checkAnswer("No")}
            className={`px-8 py-3 rounded-full font-bold shadow-lg transition-colors flex items-center space-x-2
              ${selected === "No" ? "bg-green-100 text-green-700 border-2 border-green-500" : "bg-white border-2 border-slate-200 hover:bg-slate-50"}
            `}
          >
            <span>No</span>
            {selected === "No" && <CheckCircle size={20} />}
          </button>
        </div>

        {isCorrect && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 font-bold text-lg mt-4">
            Correct! The rate of change is not constant (-1/4 vs -1/6).
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
            ${!isCorrect ? "bg-slate-200 text-slate-400 cursor-not-allowed" : "bg-purple-600 text-white hover:bg-purple-700"}
          `}
        >
          <span>Next Lesson</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
