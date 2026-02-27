import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function Scene22MultiStep({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [step, setStep] = useState(0);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState<string | null>(null);

  // Step 0: Magic Carpet (Silver Yarn)
  // Ratio: 10 Gold : 7 Bronze : 3 Silver (Total 20 parts)
  // Total Yarn: 150m
  // Silver = (3/20) * 150 = 22.5

  // Step 1: Soccer (Time)
  // Mon: 20m (25% soccer) + 60m (40% soccer)
  // 5 + 24 = 29 minutes

  const checkAnswer = () => {
    if (step === 0) {
      if (answer === "22.5") {
        setFeedback("Correct! 3/20 of 150 is 22.5m.");
        setTimeout(() => {
          setStep(1);
          setAnswer("");
          setFeedback(null);
        }, 2000);
      } else {
        setFeedback("Try again. Total parts = 10+7+3 = 20.");
      }
    } else {
      if (answer === "29") {
        setFeedback("Correct! 5 mins + 24 mins = 29 mins.");
        setTimeout(() => {
          onNext(); // Back to Unit Menu
        }, 2000);
      } else {
        setFeedback("Try again. 25% of 20 + 40% of 60.");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Multi-Step Problems</h2>
      
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="carpet"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6"
          >
            <h3 className="text-2xl font-bold text-purple-600">Magic Carpet Yarn</h3>
            <div className="flex justify-center space-x-4 text-lg">
              <span className="text-yellow-600 font-bold">10 Gold</span>
              <span className="text-amber-700 font-bold">7 Bronze</span>
              <span className="text-slate-400 font-bold">3 Silver</span>
            </div>
            <p className="text-lg text-slate-600">
              Total Yarn used is <span className="font-bold">150 meters</span>.
              <br/>How much <span className="font-bold text-slate-400">Silver Yarn</span> is used?
            </p>
            
            <div className="flex items-center justify-center space-x-2 mt-4">
              <input
                type="number"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="w-32 text-center p-2 border-2 border-purple-200 rounded-lg font-bold text-xl text-purple-600 focus:border-purple-500 focus:outline-none"
                placeholder="?"
              />
              <span className="font-bold text-slate-600">meters</span>
            </div>

            <button
              onClick={checkAnswer}
              className="px-8 py-3 bg-purple-600 text-white rounded-full font-bold shadow-lg hover:bg-purple-700 transition-colors mt-4"
            >
              Check Answer
            </button>
            
            {feedback && (
              <p className={`font-bold mt-4 ${feedback.includes("Correct") ? "text-green-600" : "text-amber-600"}`}>{feedback}</p>
            )}
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            key="soccer"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6"
          >
            <h3 className="text-2xl font-bold text-green-600">Soccer Practice</h3>
            <div className="space-y-4 text-left bg-green-50 p-6 rounded-xl border border-green-100">
              <p><span className="font-bold">Before School:</span> 20 mins total, <span className="font-bold text-green-700">25% soccer</span>.</p>
              <p><span className="font-bold">After School:</span> 60 mins total, <span className="font-bold text-green-700">40% soccer</span>.</p>
            </div>
            <p className="text-lg text-slate-600">
              Total minutes playing soccer?
            </p>
            
            <div className="flex items-center justify-center space-x-2 mt-4">
              <input
                type="number"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="w-32 text-center p-2 border-2 border-green-200 rounded-lg font-bold text-xl text-green-600 focus:border-green-500 focus:outline-none"
                placeholder="?"
              />
              <span className="font-bold text-slate-600">minutes</span>
            </div>

            <button
              onClick={checkAnswer}
              className="px-8 py-3 bg-green-600 text-white rounded-full font-bold shadow-lg hover:bg-green-700 transition-colors mt-4"
            >
              Check Answer
            </button>
            
            {feedback && (
              <p className={`font-bold mt-4 ${feedback.includes("Correct") ? "text-green-600" : "text-amber-600"}`}>{feedback}</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>

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
          disabled={step < 1 || !feedback?.includes("Correct")}
          className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium shadow-lg transition-colors
            ${step < 1 || !feedback?.includes("Correct")
              ? "bg-slate-200 text-slate-400 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
        >
          <span>Next Lesson</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
