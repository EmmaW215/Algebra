import { motion } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle, XCircle } from "lucide-react";

export default function Scene13EqVsFunc({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);

  // Which is NOT a function?
  // A: y = x + 1 (Function)
  // B: x^2 + y^2 = 4 (Circle - Not a function, fails vertical line test)
  // C: Day -> Cereal (Function)

  const checkAnswer = (id: string) => {
    setSelected(id);
    if (id === "B") {
      setIsCorrect(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Equations vs. Functions</h2>
      
      <div className="w-full max-w-3xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
        <p className="text-lg text-slate-600 font-bold">Which of the following is <span className="text-red-600">NOT</span> a function?</p>
        <p className="text-sm text-slate-500 mb-4">(Hint: A function has only ONE output for each input)</p>
        
        <div className="grid grid-cols-1 gap-4 text-left">
          <button
            onClick={() => checkAnswer("A")}
            className={`p-4 rounded-xl border-2 transition-all flex items-center justify-between
              ${selected === "A" ? "border-red-500 bg-red-50" : "border-slate-200 hover:border-purple-200"}
            `}
          >
            <div className="flex flex-col">
              <span className="font-bold text-lg">A. y = x + 1</span>
              <span className="text-sm text-slate-500">For every x, there is exactly one y.</span>
            </div>
            {selected === "A" && <XCircle size={24} className="text-red-600" />}
          </button>

          <button
            onClick={() => checkAnswer("B")}
            className={`p-4 rounded-xl border-2 transition-all flex items-center justify-between
              ${selected === "B" ? "border-green-500 bg-green-50" : "border-slate-200 hover:border-purple-200"}
            `}
          >
            <div className="flex flex-col">
              <span className="font-bold text-lg">B. x² + y² = 4</span>
              <span className="text-sm text-slate-500">A circle. For x=0, y is 2 AND -2.</span>
            </div>
            {selected === "B" && <CheckCircle size={24} className="text-green-600" />}
          </button>

          <button
            onClick={() => checkAnswer("C")}
            className={`p-4 rounded-xl border-2 transition-all flex items-center justify-between
              ${selected === "C" ? "border-red-500 bg-red-50" : "border-slate-200 hover:border-purple-200"}
            `}
          >
            <div className="flex flex-col">
              <span className="font-bold text-lg">C. Input: Day -&gt; Output: Cereal</span>
              <span className="text-sm text-slate-500">If Monday, eat Cereal. One output per day.</span>
            </div>
            {selected === "C" && <XCircle size={24} className="text-red-600" />}
          </button>
        </div>

        {isCorrect && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 font-bold text-lg mt-4">
            Correct! The circle equation has two y-values for a single x-value (e.g., at x=0, y=2 and y=-2).
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
