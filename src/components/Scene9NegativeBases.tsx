import { motion } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Scene9NegativeBases({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [answer, setAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  // (-2)^5 = -32

  const checkAnswer = () => {
    if (answer === "-32") {
      setIsCorrect(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Exponents with Negative Bases</h2>
      
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-left space-y-2">
          <p className="text-lg">Remember:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Negative base to <span className="font-bold text-blue-600">even</span> power → <span className="font-bold text-green-600">Positive</span></li>
            <li>Negative base to <span className="font-bold text-orange-600">odd</span> power → <span className="font-bold text-red-600">Negative</span></li>
          </ul>
        </div>

        <div className="flex items-center justify-center gap-4 text-3xl font-bold">
          <span>(-2)⁵ = </span>
          <input 
            type="number" 
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="w-24 border-b-2 border-slate-500 text-center focus:outline-none"
            placeholder="?"
          />
        </div>

        <button onClick={checkAnswer} className="px-6 py-2 bg-slate-800 text-white rounded-full font-bold hover:bg-slate-900">Check</button>
        
        {isCorrect && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 font-bold space-y-2">
            <p>Correct!</p>
            <p className="text-sm text-slate-500">(-2)×(-2)×(-2)×(-2)×(-2) = -32</p>
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
