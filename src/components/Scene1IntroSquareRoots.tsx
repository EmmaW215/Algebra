import { motion } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Scene1IntroSquareRoots({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [step, setStep] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [feedback, setFeedback] = useState<string | null>(null);

  // Step 0: Square a number (3^2 = 9)
  // Step 1: Find root (sqrt(9) = 3)

  const checkSquare = () => {
    if (inputValue === "9") {
      setFeedback("Correct! 3 squared is 9.");
      setTimeout(() => {
        setStep(1);
        setInputValue("");
        setFeedback(null);
      }, 1500);
    } else {
      setFeedback("Try again. 3 * 3 = ?");
    }
  };

  const checkRoot = () => {
    if (inputValue === "3") {
      setFeedback("Correct! The square root of 9 is 3.");
      setTimeout(() => {
        onNext();
      }, 1500);
    } else {
      setFeedback("Try again. What number times itself is 9?");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Intro to Square Roots</h2>
      
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6 min-h-[300px] flex flex-col justify-center">
        {step === 0 ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <p className="text-xl text-slate-600">
              We know that <span className="font-bold text-orange-600">squaring</span> a number means multiplying it by itself.
            </p>
            <div className="text-3xl font-mono font-bold text-slate-800">
              3² = 3 × 3 = <input 
                type="number" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-20 border-b-2 border-orange-500 text-center focus:outline-none"
                placeholder="?"
              />
            </div>
            <button onClick={checkSquare} className="px-6 py-2 bg-orange-600 text-white rounded-full font-bold hover:bg-orange-700">Check</button>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <p className="text-xl text-slate-600">
              The <span className="font-bold text-orange-600">square root</span> goes the other way.
            </p>
            <div className="text-3xl font-mono font-bold text-slate-800 flex items-center justify-center gap-4">
              <span>√9 = </span>
              <input 
                type="number" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-20 border-b-2 border-orange-500 text-center focus:outline-none"
                placeholder="?"
              />
            </div>
            <p className="text-sm text-slate-500">"What number squared equals 9?"</p>
            <button onClick={checkRoot} className="px-6 py-2 bg-orange-600 text-white rounded-full font-bold hover:bg-orange-700">Check</button>
          </motion.div>
        )}

        {feedback && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`font-bold ${feedback.includes("Correct") ? "text-green-600" : "text-red-500"}`}>
            {feedback}
          </motion.p>
        )}
      </div>

      <div className="flex space-x-4 mt-auto w-full justify-between items-center pt-8 border-t border-slate-100">
        <button onClick={onPrev} className="flex items-center space-x-2 px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-full font-medium shadow-sm hover:bg-slate-50 transition-colors">
          <ArrowLeft size={18} /> <span>Back</span>
        </button>
        <button onClick={onNext} className="flex items-center space-x-2 px-6 py-3 bg-orange-600 text-white rounded-full font-medium shadow-lg hover:bg-orange-700 transition-colors">
          <span>Next Lesson</span> <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
