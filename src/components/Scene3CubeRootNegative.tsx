import { motion } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Scene3CubeRootNegative({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [answer, setAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  // cbrt(-512) = -8

  const checkAnswer = () => {
    if (answer === "-8") {
      setIsCorrect(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Cube Root of a Negative Number</h2>
      
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-left space-y-2">
          <p className="text-lg">Can we take the cube root of a negative number?</p>
          <p className="text-lg">Yes! Because <span className="font-bold text-red-600">negative × negative × negative = negative</span>.</p>
        </div>

        <div className="flex items-center justify-center gap-4 text-2xl font-bold">
          <span>∛-512 = </span>
          <input 
            type="number" 
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="w-24 border-b-2 border-purple-500 text-center focus:outline-none"
            placeholder="?"
          />
        </div>

        <button onClick={checkAnswer} className="px-6 py-2 bg-purple-600 text-white rounded-full font-bold hover:bg-purple-700">Check</button>
        
        {isCorrect && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 font-bold space-y-2">
            <p>Correct!</p>
            <p className="text-sm text-slate-500">(-8) × (-8) × (-8) = 64 × (-8) = -512</p>
          </motion.div>
        )}
      </div>

      <div className="flex space-x-4 mt-auto w-full justify-between items-center pt-8 border-t border-slate-100">
        <button onClick={onPrev} className="flex items-center space-x-2 px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-full font-medium shadow-sm hover:bg-slate-50 transition-colors">
          <ArrowLeft size={18} /> <span>Back</span>
        </button>
        <button onClick={onNext} disabled={!isCorrect} className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium shadow-lg transition-colors ${!isCorrect ? "bg-slate-200 text-slate-400" : "bg-purple-600 text-white hover:bg-purple-700"}`}>
          <span>Next Lesson</span> <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
