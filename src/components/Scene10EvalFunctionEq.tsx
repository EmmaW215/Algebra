import { motion } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Scene10EvalFunctionEq({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [answer, setAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  // f(x) = 49 - x^2
  // Find f(5)
  // 49 - 25 = 24

  const checkAnswer = () => {
    if (answer === "24") {
      setIsCorrect(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Evaluating Functions from Equation</h2>
      
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-left space-y-2">
          <h3 className="font-bold text-purple-600 text-xl mb-4">The Function</h3>
          <p className="font-mono text-2xl text-center">f(x) = 49 - x²</p>
        </div>

        <p className="text-lg text-slate-600 font-bold">Find the value of <span className="text-purple-600">f(5)</span>.</p>
        
        <div className="flex items-center justify-center space-x-2">
          <span className="font-mono text-xl font-bold text-slate-700">f(5) = </span>
          <input
            type="number"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="w-24 p-2 border-2 border-purple-200 rounded-lg text-center font-mono text-xl focus:border-purple-500 focus:outline-none"
            placeholder="?"
          />
        </div>

        <button
          onClick={checkAnswer}
          className="px-8 py-3 bg-purple-600 text-white rounded-full font-bold shadow-lg hover:bg-purple-700 transition-colors"
        >
          Check Answer
        </button>

        {isCorrect && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 font-bold text-lg mt-4">
            Correct! 
            <br/>f(5) = 49 - (5)²
            <br/>f(5) = 49 - 25
            <br/>f(5) = 24
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
