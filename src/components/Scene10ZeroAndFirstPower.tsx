import { motion } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Scene10ZeroAndFirstPower({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [ans0, setAns0] = useState("");
  const [ans1, setAns1] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  // 5^0 = 1
  // 5^1 = 5

  const checkAnswer = () => {
    if (ans0 === "1" && ans1 === "5") {
      setIsCorrect(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">The Zero & First Power</h2>
      
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-8">
        <div className="space-y-6">
          <div className="flex items-center justify-center gap-4 text-3xl font-bold">
            <span>5¹ = </span>
            <input 
              type="number" 
              value={ans1}
              onChange={(e) => setAns1(e.target.value)}
              className="w-20 border-b-2 border-blue-500 text-center focus:outline-none"
              placeholder="?"
            />
          </div>
          
          <div className="flex items-center justify-center gap-4 text-3xl font-bold">
            <span>5⁰ = </span>
            <input 
              type="number" 
              value={ans0}
              onChange={(e) => setAns0(e.target.value)}
              className="w-20 border-b-2 border-purple-500 text-center focus:outline-none"
              placeholder="?"
            />
          </div>
        </div>

        <button onClick={checkAnswer} className="px-6 py-2 bg-slate-800 text-white rounded-full font-bold hover:bg-slate-900">Check</button>
        
        {isCorrect && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 font-bold space-y-2">
            <p>Correct!</p>
            <p className="text-sm text-slate-500">Any number to the power of 1 is itself.</p>
            <p className="text-sm text-slate-500">Any non-zero number to the power of 0 is 1.</p>
          </motion.div>
        )}
      </div>

      <div className="flex space-x-4 mt-auto w-full justify-between items-center pt-8 border-t border-slate-100">
        <button onClick={onPrev} className="flex items-center space-x-2 px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-full font-medium shadow-sm hover:bg-slate-50 transition-colors">
          <ArrowLeft size={18} /> <span>Back</span>
        </button>
        <button onClick={onNext} disabled={!isCorrect} className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium shadow-lg transition-colors ${!isCorrect ? "bg-slate-200 text-slate-400" : "bg-slate-800 text-white hover:bg-slate-900"}`}>
          <span>Next Lesson</span> <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
