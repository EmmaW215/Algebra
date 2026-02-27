import { motion } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Scene18ParenthesesPropertyPractice({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [answer, setAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  // (8^n)^3 = 8^6
  // n*3 = 6 -> n=2

  const checkAnswer = () => {
    if (answer === "2") {
      setIsCorrect(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Practice: Power of a Power</h2>
      
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
        <p className="text-lg text-slate-600 font-bold">Solve for <span className="font-mono">n</span>.</p>
        
        <div className="flex items-center justify-center gap-2 text-4xl font-bold font-mono py-4">
          <span>(8ⁿ)³ = 8⁶</span>
        </div>
        
        <div className="flex items-center justify-center gap-4 text-2xl font-bold">
          <span>n = </span>
          <input 
            type="number" 
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="w-20 border-b-2 border-blue-500 text-center focus:outline-none"
            placeholder="?"
          />
        </div>

        <button onClick={checkAnswer} className="px-6 py-2 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700">Check</button>
        
        {isCorrect && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 font-bold space-y-2">
            <p>Correct!</p>
            <p className="text-sm text-slate-500">n · 3 = 6, so n = 2.</p>
          </motion.div>
        )}
      </div>

      <div className="flex space-x-4 mt-auto w-full justify-between items-center pt-8 border-t border-slate-100">
        <button onClick={onPrev} className="flex items-center space-x-2 px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-full font-medium shadow-sm hover:bg-slate-50 transition-colors">
          <ArrowLeft size={18} /> <span>Back</span>
        </button>
        <button onClick={onNext} disabled={!isCorrect} className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium shadow-lg transition-colors ${!isCorrect ? "bg-slate-200 text-slate-400" : "bg-blue-600 text-white hover:bg-blue-700"}`}>
          <span>Next Lesson</span> <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
