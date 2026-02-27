import { motion } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Scene12OneAndNegativeOne({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [ans1, setAns1] = useState("");
  const [ans2, setAns2] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  // (-1)^1000000 = 1
  // (-1)^999999 = -1

  const checkAnswer = () => {
    if (ans1 === "1" && ans2 === "-1") {
      setIsCorrect(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">1 and -1 to Different Powers</h2>
      
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-8">
        <div className="space-y-6">
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="text-xl font-bold">(-1)¹⁰⁰⁰⁰⁰⁰ = </span>
            <input 
              type="number" 
              value={ans1}
              onChange={(e) => setAns1(e.target.value)}
              className="w-24 border-b-2 border-blue-500 text-center focus:outline-none text-2xl font-mono"
              placeholder="?"
            />
            <span className="text-sm text-slate-400">(Even Power)</span>
          </div>
          
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="text-xl font-bold">(-1)⁹⁹⁹⁹⁹⁹ = </span>
            <input 
              type="number" 
              value={ans2}
              onChange={(e) => setAns2(e.target.value)}
              className="w-24 border-b-2 border-purple-500 text-center focus:outline-none text-2xl font-mono"
              placeholder="?"
            />
            <span className="text-sm text-slate-400">(Odd Power)</span>
          </div>
        </div>

        <button onClick={checkAnswer} className="px-6 py-2 bg-slate-800 text-white rounded-full font-bold hover:bg-slate-900">Check</button>
        
        {isCorrect && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 font-bold space-y-2">
            <p>Correct!</p>
            <p className="text-sm text-slate-500">(-1) to an even power is 1.</p>
            <p className="text-sm text-slate-500">(-1) to an odd power is -1.</p>
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
