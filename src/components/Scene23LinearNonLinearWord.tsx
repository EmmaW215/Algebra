import { motion } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle, XCircle } from "lucide-react";

export default function Scene23LinearNonLinearWord({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);

  // x + y = 45
  // y = -x + 45
  // Linear? Yes.

  const checkAnswer = (id: string) => {
    setSelected(id);
    if (id === "Yes") {
      setIsCorrect(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Linear or Nonlinear?</h2>
      
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-left space-y-2">
          <h3 className="font-bold text-slate-600 text-xl mb-4">Problem</h3>
          <p className="text-lg">The sum of two numbers, <span className="font-bold">x</span> and <span className="font-bold">y</span>, is always 45.</p>
          <p className="font-mono text-2xl text-center mt-4">x + y = 45</p>
        </div>

        <p className="text-lg text-slate-600 font-bold">Is the relationship between x and y <span className="text-purple-600">linear</span>?</p>
        
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => checkAnswer("Yes")}
            className={`px-8 py-3 rounded-full font-bold shadow-lg transition-colors flex items-center space-x-2
              ${selected === "Yes" ? "bg-green-100 text-green-700 border-2 border-green-500" : "bg-white border-2 border-slate-200 hover:bg-slate-50"}
            `}
          >
            <span>Yes</span>
            {selected === "Yes" && <CheckCircle size={20} />}
          </button>

          <button
            onClick={() => checkAnswer("No")}
            className={`px-8 py-3 rounded-full font-bold shadow-lg transition-colors flex items-center space-x-2
              ${selected === "No" ? "bg-red-100 text-red-700 border-2 border-red-500" : "bg-white border-2 border-slate-200 hover:bg-slate-50"}
            `}
          >
            <span>No</span>
            {selected === "No" && <XCircle size={20} />}
          </button>
        </div>

        {isCorrect && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 font-bold text-lg mt-4">
            Correct! It can be written as y = -x + 45, which is in the form y = mx + b.
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
