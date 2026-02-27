import { motion } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";

export default function Scene15FunctionFromEq({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);

  // 4a + 7b = -52
  // Solve for a (f(b)).
  // 4a = -52 - 7b
  // a = -13 - (7/4)b

  const checkAnswer = (id: string) => {
    setSelected(id);
    if (id === "B") {
      setIsCorrect(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Obtaining a Function from an Equation</h2>
      
      <div className="w-full max-w-3xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-left space-y-2">
          <h3 className="font-bold text-slate-600 text-xl mb-4">Equation</h3>
          <p className="font-mono text-2xl text-center">4a + 7b = -52</p>
        </div>

        <p className="text-lg text-slate-600 font-bold">Write a formula for <span className="text-purple-600">f(b)</span> (solve for <span className="text-purple-600">a</span>).</p>
        
        <div className="grid grid-cols-1 gap-3 text-left">
          <button
            onClick={() => checkAnswer("A")}
            className={`p-4 rounded-xl border-2 transition-all flex items-center justify-between font-mono text-lg
              ${selected === "A" ? "border-red-500 bg-red-50" : "border-slate-200 hover:border-purple-200"}
            `}
          >
            <span>A. a = -13 + 7/4 b</span>
            {selected === "A" && <span className="text-red-600 font-bold">Incorrect</span>}
          </button>

          <button
            onClick={() => checkAnswer("B")}
            className={`p-4 rounded-xl border-2 transition-all flex items-center justify-between font-mono text-lg
              ${selected === "B" ? "border-green-500 bg-green-50" : "border-slate-200 hover:border-purple-200"}
            `}
          >
            <span>B. a = -13 - 7/4 b</span>
            {selected === "B" && <CheckCircle size={24} className="text-green-600" />}
          </button>

          <button
            onClick={() => checkAnswer("C")}
            className={`p-4 rounded-xl border-2 transition-all flex items-center justify-between font-mono text-lg
              ${selected === "C" ? "border-red-500 bg-red-50" : "border-slate-200 hover:border-purple-200"}
            `}
          >
            <span>C. a = -52 - 7b</span>
            {selected === "C" && <span className="text-red-600 font-bold">Incorrect</span>}
          </button>
        </div>

        {isCorrect && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 font-bold text-lg mt-4">
            Correct! 
            <br/>4a = -52 - 7b
            <br/>a = (-52/4) - (7/4)b
            <br/>a = -13 - 1.75b
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
