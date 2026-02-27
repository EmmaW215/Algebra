import { motion } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Scene27PowerOfQuotient({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [ans1, setAns1] = useState("");
  const [ans2, setAns2] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  // (7/2)^8 = 7^8 / 2^8

  const checkAnswer = () => {
    if (ans1 === "8" && ans2 === "8") {
      setIsCorrect(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Power of a Quotient Property</h2>
      
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
        <p className="text-lg text-slate-600 font-bold">Simplify. Rewrite in the form 7ⁿ / 2ᵐ.</p>
        
        <div className="flex items-center justify-center gap-4 text-4xl font-bold font-mono py-4">
          <span>(7/2)⁸ = </span>
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <span>7</span>
              <sup className="flex items-center">
                <input 
                  type="number" 
                  value={ans1}
                  onChange={(e) => setAns1(e.target.value)}
                  className="w-12 h-12 border-2 border-red-500 rounded text-center text-xl focus:outline-none"
                  placeholder="n"
                />
              </sup>
            </div>
            <div className="w-full h-1 bg-slate-800 my-2"></div>
            <div className="flex items-center">
              <span>2</span>
              <sup className="flex items-center">
                <input 
                  type="number" 
                  value={ans2}
                  onChange={(e) => setAns2(e.target.value)}
                  className="w-12 h-12 border-2 border-red-500 rounded text-center text-xl focus:outline-none"
                  placeholder="m"
                />
              </sup>
            </div>
          </div>
        </div>

        <button onClick={checkAnswer} className="px-6 py-2 bg-red-600 text-white rounded-full font-bold hover:bg-red-700">Check</button>
        
        {isCorrect && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 font-bold space-y-2">
            <p>Correct!</p>
            <p className="text-sm text-slate-500">Distribute the exponent to the numerator and denominator.</p>
          </motion.div>
        )}
      </div>

      <div className="flex space-x-4 mt-auto w-full justify-between items-center pt-8 border-t border-slate-100">
        <button onClick={onPrev} className="flex items-center space-x-2 px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-full font-medium shadow-sm hover:bg-slate-50 transition-colors">
          <ArrowLeft size={18} /> <span>Back</span>
        </button>
        <button onClick={onNext} disabled={!isCorrect} className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium shadow-lg transition-colors ${!isCorrect ? "bg-slate-200 text-slate-400" : "bg-red-600 text-white hover:bg-red-700"}`}>
          <span>Next Lesson</span> <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
