import { motion } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";

export default function Scene17SnowModel({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);

  // Start: 12 inches
  // Melt: 2 inches/day
  // Equation: y = 12 - 2x

  const checkAnswer = (id: string) => {
    setSelected(id);
    if (id === "B") {
      setIsCorrect(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Modeling with Linear Equations: Snow</h2>
      
      <div className="w-full max-w-3xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 text-left space-y-2">
          <h3 className="font-bold text-blue-600 text-xl mb-4">Snow Melt</h3>
          <p className="text-lg">Monday Morning: <span className="font-bold">12 inches</span> of snow.</p>
          <p className="text-lg">Each day, <span className="font-bold text-red-500">2 inches</span> melt.</p>
        </div>

        <p className="text-lg text-slate-600 font-bold">Which equation models the snow height (<span className="text-purple-600">y</span>) after <span className="text-purple-600">x</span> days?</p>
        
        <div className="grid grid-cols-1 gap-3 text-left">
          <button
            onClick={() => checkAnswer("A")}
            className={`p-4 rounded-xl border-2 transition-all flex items-center justify-between font-mono text-lg
              ${selected === "A" ? "border-red-500 bg-red-50" : "border-slate-200 hover:border-purple-200"}
            `}
          >
            <span>A. y = 12 + 2x</span>
            {selected === "A" && <span className="text-red-600 font-bold">Incorrect</span>}
          </button>

          <button
            onClick={() => checkAnswer("B")}
            className={`p-4 rounded-xl border-2 transition-all flex items-center justify-between font-mono text-lg
              ${selected === "B" ? "border-green-500 bg-green-50" : "border-slate-200 hover:border-purple-200"}
            `}
          >
            <span>B. y = 12 - 2x</span>
            {selected === "B" && <CheckCircle size={24} className="text-green-600" />}
          </button>

          <button
            onClick={() => checkAnswer("C")}
            className={`p-4 rounded-xl border-2 transition-all flex items-center justify-between font-mono text-lg
              ${selected === "C" ? "border-red-500 bg-red-50" : "border-slate-200 hover:border-purple-200"}
            `}
          >
            <span>C. y = 2x - 12</span>
            {selected === "C" && <span className="text-red-600 font-bold">Incorrect</span>}
          </button>
        </div>

        {isCorrect && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 font-bold text-lg mt-4">
            Correct! Start at 12 (y-intercept), decrease by 2 each day (slope -2).
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
