import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function Scene20Cookies({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [flour, setFlour] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  // 2 cups flour / 3 cups oatmeal
  // x cups flour / 9 cups oatmeal
  // 3 * 3 = 9, so 2 * 3 = 6

  const checkAnswer = () => {
    if (flour === "6") {
      setIsCorrect(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Scaling a Recipe</h2>
      
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
        <p className="text-lg text-slate-600">
          A recipe calls for <span className="font-bold text-indigo-600">2 cups flour</span> for every <span className="font-bold text-amber-600">3 cups oatmeal</span>.
        </p>
        <p className="text-lg text-slate-600">
          How much flour is needed for <span className="font-bold text-amber-600">9 cups oatmeal</span>?
        </p>
        
        <div className="flex items-center justify-center space-x-8 mt-8">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-sm font-bold text-indigo-600 uppercase tracking-wider">Flour</div>
            <div className="text-2xl font-bold text-indigo-600">2</div>
            <div className="text-sm text-slate-400">Original</div>
          </div>

          <div className="text-2xl font-bold text-slate-300">→</div>

          <div className="flex flex-col items-center space-y-2">
            <div className="text-sm font-bold text-indigo-600 uppercase tracking-wider">Flour</div>
            <input
              type="number"
              value={flour}
              onChange={(e) => setFlour(e.target.value)}
              className="w-20 text-center p-2 border-2 border-indigo-200 rounded-lg font-bold text-xl text-indigo-600 focus:border-indigo-500 focus:outline-none"
              placeholder="?"
            />
            <div className="text-sm text-slate-400">New Batch</div>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-8 mt-4">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-sm font-bold text-amber-600 uppercase tracking-wider">Oatmeal</div>
            <div className="text-2xl font-bold text-amber-600">3</div>
            <div className="text-sm text-slate-400">Original</div>
          </div>

          <div className="text-2xl font-bold text-slate-300">→</div>

          <div className="flex flex-col items-center space-y-2">
            <div className="text-sm font-bold text-amber-600 uppercase tracking-wider">Oatmeal</div>
            <div className="text-2xl font-bold text-amber-600">9</div>
            <div className="text-sm text-slate-400">New Batch (×3)</div>
          </div>
        </div>

        <button
          onClick={checkAnswer}
          className="px-8 py-3 bg-indigo-600 text-white rounded-full font-bold shadow-lg hover:bg-indigo-700 transition-colors mt-8"
        >
          Check Answer
        </button>

        {isCorrect && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 font-bold text-lg mt-4">
            Correct! Since oatmeal tripled (3 × 3 = 9), flour must triple (2 × 3 = 6).
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
