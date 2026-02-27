import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function Scene21HotDogs({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [minutes, setMinutes] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  // 21 hot dogs / 66 minutes
  // 35 hot dogs / m minutes
  // 21/66 = 35/m
  // 21m = 35 * 66 = 2310
  // m = 110

  const checkAnswer = () => {
    if (minutes === "110") {
      setIsCorrect(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Eating Contest Pace</h2>
      
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
        <p className="text-lg text-slate-600">
          Mika eats <span className="font-bold text-red-600">21 hot dogs</span> in <span className="font-bold text-slate-800">66 minutes</span>.
        </p>
        <p className="text-lg text-slate-600">
          At the same pace, how long will it take to eat <span className="font-bold text-red-600">35 hot dogs</span>?
        </p>
        
        <div className="flex items-center justify-center space-x-8 mt-8">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-sm font-bold text-red-600 uppercase tracking-wider">Hot Dogs</div>
            <div className="text-2xl font-bold text-red-600">21</div>
            <div className="w-full h-px bg-slate-300"></div>
            <div className="text-2xl font-bold text-slate-800">66</div>
            <div className="text-sm font-bold text-slate-600 uppercase tracking-wider">Minutes</div>
          </div>

          <div className="text-2xl font-bold text-slate-300">=</div>

          <div className="flex flex-col items-center space-y-2">
            <div className="text-sm font-bold text-red-600 uppercase tracking-wider">Hot Dogs</div>
            <div className="text-2xl font-bold text-red-600">35</div>
            <div className="w-full h-px bg-slate-300"></div>
            <input
              type="number"
              value={minutes}
              onChange={(e) => setMinutes(e.target.value)}
              className="w-24 text-center p-2 border-2 border-slate-200 rounded-lg font-bold text-xl text-slate-800 focus:border-indigo-500 focus:outline-none"
              placeholder="?"
            />
            <div className="text-sm font-bold text-slate-600 uppercase tracking-wider">Minutes</div>
          </div>
        </div>

        <button
          onClick={checkAnswer}
          className="px-8 py-3 bg-red-600 text-white rounded-full font-bold shadow-lg hover:bg-red-700 transition-colors mt-8"
        >
          Check Answer
        </button>

        {isCorrect && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 font-bold text-lg mt-4">
            Correct! It takes 110 minutes. (21/66 = 35/110)
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
