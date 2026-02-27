import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function Scene18SolvingProportions({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [step, setStep] = useState(0);
  const [answer, setAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  // 8/36 = 10/n
  // 8n = 360
  // n = 45

  const checkAnswer = () => {
    if (answer === "45") {
      setIsCorrect(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Solving Proportions</h2>
      
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-8">
        <div className="flex items-center justify-center space-x-8 text-4xl font-mono font-bold text-slate-800">
          <div className="flex flex-col items-center">
            <span>8</span>
            <div className="w-full h-1 bg-slate-800 my-2"></div>
            <span>36</span>
          </div>
          <span>=</span>
          <div className="flex flex-col items-center">
            <span>10</span>
            <div className="w-full h-1 bg-slate-800 my-2"></div>
            <span className="text-indigo-600">n</span>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-left space-y-4">
          <p className="font-bold text-slate-600">Cross Multiply:</p>
          <div className="font-mono text-xl text-slate-700">8 × n = 36 × 10</div>
          <div className="font-mono text-xl text-slate-700">8n = 360</div>
          
          <div className="flex items-center space-x-4 mt-4">
            <span className="font-mono text-xl text-slate-700">n = 360 ÷ 8 = </span>
            <input
              type="number"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="w-24 p-2 border-2 border-slate-300 rounded-lg font-mono text-xl text-center focus:border-indigo-500 focus:outline-none"
              placeholder="?"
            />
          </div>
        </div>

        <button
          onClick={checkAnswer}
          className="px-8 py-3 bg-indigo-600 text-white rounded-full font-bold shadow-lg hover:bg-indigo-700 transition-colors"
        >
          Check Answer
        </button>

        {isCorrect && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 font-bold text-lg">
            Correct! n = 45.
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
