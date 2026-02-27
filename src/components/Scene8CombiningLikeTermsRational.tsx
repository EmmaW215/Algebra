import { motion } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Scene8CombiningLikeTermsRational({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [ansNum, setAnsNum] = useState("");
  const [ansDenom, setAnsDenom] = useState("");
  const [ansConstNum, setAnsConstNum] = useState("");
  const [ansConstDenom, setAnsConstDenom] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  // 9/8 m + 9/10 - 2m - 3/5
  // m terms: 9/8 - 2 = 9/8 - 16/8 = -7/8 m
  // const terms: 9/10 - 3/5 = 9/10 - 6/10 = 3/10
  // Result: -7/8 m + 3/10

  const checkAnswer = () => {
    if (ansNum === "-7" && ansDenom === "8" && ansConstNum === "3" && ansConstDenom === "10") {
      setIsCorrect(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Combining with Rational Coefficients</h2>
      
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
        <p className="text-lg text-slate-600 font-bold">Simplify the expression.</p>
        
        <div className="text-2xl font-mono font-bold text-slate-800 py-4">
          <span className="text-blue-600">9/8 m</span> + <span className="text-green-600">9/10</span> - <span className="text-blue-600">2m</span> - <span className="text-green-600">3/5</span>
        </div>
        
        <div className="flex items-center justify-center gap-4 text-xl font-bold">
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <input 
                type="number" 
                value={ansNum}
                onChange={(e) => setAnsNum(e.target.value)}
                className="w-12 border-b-2 border-blue-500 text-center focus:outline-none"
                placeholder="?"
              />
            </div>
            <div className="w-full h-0.5 bg-slate-800 my-1"></div>
            <div className="flex items-center">
              <input 
                type="number" 
                value={ansDenom}
                onChange={(e) => setAnsDenom(e.target.value)}
                className="w-12 border-b-2 border-blue-500 text-center focus:outline-none"
                placeholder="?"
              />
            </div>
          </div>
          <span className="text-blue-600 text-2xl">m</span>
          <span className="text-2xl">+</span>
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <input 
                type="number" 
                value={ansConstNum}
                onChange={(e) => setAnsConstNum(e.target.value)}
                className="w-12 border-b-2 border-green-500 text-center focus:outline-none"
                placeholder="?"
              />
            </div>
            <div className="w-full h-0.5 bg-slate-800 my-1"></div>
            <div className="flex items-center">
              <input 
                type="number" 
                value={ansConstDenom}
                onChange={(e) => setAnsConstDenom(e.target.value)}
                className="w-12 border-b-2 border-green-500 text-center focus:outline-none"
                placeholder="?"
              />
            </div>
          </div>
        </div>

        <button onClick={checkAnswer} className="px-6 py-2 bg-slate-800 text-white rounded-full font-bold hover:bg-slate-900">Check</button>
        
        {isCorrect && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 font-bold space-y-2">
            <p>Correct!</p>
            <p className="text-sm text-slate-500">m: 9/8 - 16/8 = -7/8</p>
            <p className="text-sm text-slate-500">const: 9/10 - 6/10 = 3/10</p>
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
