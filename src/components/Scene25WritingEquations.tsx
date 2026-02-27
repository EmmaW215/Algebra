import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function Scene25WritingEquations({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [step, setStep] = useState(0);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState<string | null>(null);

  // Step 0: Justin runs 17km in 2h. d = 8.5h
  // Step 1: Alexandra parks $7 for 3h. c = (7/3)p

  const checkAnswer = () => {
    if (step === 0) {
      if (answer === "8.5") {
        setFeedback("Correct! 17 / 2 = 8.5 km/h.");
        setTimeout(() => {
          setStep(1);
          setAnswer("");
          setFeedback(null);
        }, 2000);
      } else {
        setFeedback("Try again. Distance / Time = Rate.");
      }
    } else {
      // Accept 7/3 or 2.33...
      const val = parseFloat(answer);
      if (answer === "7/3" || Math.abs(val - 2.333) < 0.01) {
        setFeedback("Correct! Cost is $7/3 per hour.");
      } else {
        setFeedback("Try again. Cost / Hours = Rate.");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Word Problems to Equations</h2>
      
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="justin"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6"
          >
            <h3 className="text-2xl font-bold text-orange-600">Running Rate</h3>
            <p className="text-lg text-slate-600">
              Justin runs <span className="font-bold">17 km</span> in <span className="font-bold">2 hours</span>.
              <br/>Write an equation for distance (<span className="font-mono font-bold">d</span>) in terms of time (<span className="font-mono font-bold">h</span>).
            </p>
            
            <div className="flex items-center justify-center space-x-2 mt-4 text-2xl font-mono font-bold text-slate-800">
              <span>d = </span>
              <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="w-24 p-2 border-2 border-orange-200 rounded-lg text-center focus:border-orange-500 focus:outline-none"
                placeholder="k"
              />
              <span>h</span>
            </div>

            <button
              onClick={checkAnswer}
              className="px-8 py-3 bg-orange-600 text-white rounded-full font-bold shadow-lg hover:bg-orange-700 transition-colors mt-4"
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
            key="alexandra"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6"
          >
            <h3 className="text-2xl font-bold text-teal-600">Parking Cost</h3>
            <p className="text-lg text-slate-600">
              Alexandra paid <span className="font-bold">$7</span> for <span className="font-bold">3 hours</span> of parking.
              <br/>Write an equation for cost (<span className="font-mono font-bold">c</span>) in terms of hours (<span className="font-mono font-bold">p</span>).
            </p>
            
            <div className="flex items-center justify-center space-x-2 mt-4 text-2xl font-mono font-bold text-slate-800">
              <span>c = </span>
              <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="w-24 p-2 border-2 border-teal-200 rounded-lg text-center focus:border-teal-500 focus:outline-none"
                placeholder="k"
              />
              <span>p</span>
            </div>
            <p className="text-sm text-slate-500">Enter as fraction (e.g. 7/3) or decimal.</p>

            <button
              onClick={checkAnswer}
              className="px-8 py-3 bg-teal-600 text-white rounded-full font-bold shadow-lg hover:bg-teal-700 transition-colors mt-4"
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
