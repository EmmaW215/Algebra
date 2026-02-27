import { motion } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Scene2PerfectSquares({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [answer, setAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  // sqrt(25) = 5

  const checkAnswer = () => {
    if (answer === "5") {
      setIsCorrect(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Square Roots of Perfect Squares</h2>
      
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Visual Square */}
        <div className="relative w-48 h-48 bg-orange-100 border-2 border-orange-300 grid grid-cols-5 grid-rows-5">
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className="border border-orange-200/50"></div>
          ))}
          <div className="absolute -top-6 w-full text-center font-bold text-orange-600">Area = 25</div>
          <div className="absolute -left-8 h-full flex items-center font-bold text-orange-600">?</div>
          <div className="absolute -bottom-6 w-full text-center font-bold text-orange-600">?</div>
        </div>

        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
          <p className="text-xl text-slate-600">
            Finding <span className="font-mono font-bold">√25</span> is like finding the side length of a square with area 25.
          </p>
          
          <div className="flex items-center justify-center gap-4 text-2xl font-bold">
            <span>√25 = </span>
            <input 
              type="number" 
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="w-20 border-b-2 border-orange-500 text-center focus:outline-none"
              placeholder="?"
            />
          </div>

          <button onClick={checkAnswer} className="px-6 py-2 bg-orange-600 text-white rounded-full font-bold hover:bg-orange-700">Check</button>
          
          {isCorrect && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 font-bold">
              Correct! 5 × 5 = 25.
            </motion.p>
          )}
        </div>
      </div>

      <div className="flex space-x-4 mt-auto w-full justify-between items-center pt-8 border-t border-slate-100">
        <button onClick={onPrev} className="flex items-center space-x-2 px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-full font-medium shadow-sm hover:bg-slate-50 transition-colors">
          <ArrowLeft size={18} /> <span>Back</span>
        </button>
        <button onClick={onNext} disabled={!isCorrect} className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium shadow-lg transition-colors ${!isCorrect ? "bg-slate-200 text-slate-400" : "bg-orange-600 text-white hover:bg-orange-700"}`}>
          <span>Next Lesson</span> <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
