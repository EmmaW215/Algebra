import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle, XCircle } from "lucide-react";

export default function Scene15MeasurementRatios({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [step, setStep] = useState(0);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState<string | null>(null);

  // Problem 1: Hours to Weeks
  // 168 hours = 1 week
  // 3 weeks = ? hours (504)

  // Problem 2: Yards to Miles
  // 3520 yards = 2 miles
  // 5 miles = ? yards (8800)

  const checkAnswer = () => {
    if (step === 0) {
      if (answer === "504") {
        setFeedback("Correct! 168 × 3 = 504.");
        setTimeout(() => {
          setStep(1);
          setAnswer("");
          setFeedback(null);
        }, 2000);
      } else {
        setFeedback("Try again. Multiply 168 by 3.");
      }
    } else {
      if (answer === "8800") {
        setFeedback("Correct! 1 mile is 1760 yards. 1760 × 5 = 8800.");
        setTimeout(() => {
          onNext();
        }, 2000);
      } else {
        setFeedback("Try again. First find yards in 1 mile (3520 ÷ 2).");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Ratios & Measurement</h2>
      
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="hours"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6"
          >
            <h3 className="text-2xl font-bold text-indigo-600">Time Conversion</h3>
            <p className="text-lg text-slate-600">
              There are <span className="font-bold text-indigo-600">168 hours</span> in <span className="font-bold text-slate-800">1 week</span>.
            </p>
            <p className="text-lg text-slate-600">
              How many hours are in <span className="font-bold text-slate-800">3 weeks</span>?
            </p>
            
            <div className="flex items-center justify-center space-x-4">
              <div className="text-center">
                <div className="text-sm text-slate-400">Weeks</div>
                <div className="text-2xl font-bold text-slate-800">1</div>
                <div className="text-sm text-slate-400 mt-2">× 3</div>
                <div className="text-2xl font-bold text-slate-800 mt-2">3</div>
              </div>
              <div className="h-24 w-px bg-slate-200"></div>
              <div className="text-center">
                <div className="text-sm text-slate-400">Hours</div>
                <div className="text-2xl font-bold text-indigo-600">168</div>
                <div className="text-sm text-slate-400 mt-2">× 3</div>
                <input
                  type="number"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  className="w-24 text-center p-2 border-2 border-indigo-200 rounded-lg font-bold text-2xl text-indigo-600 focus:border-indigo-500 focus:outline-none mt-2"
                />
              </div>
            </div>

            <button
              onClick={checkAnswer}
              className="px-8 py-3 bg-indigo-600 text-white rounded-full font-bold shadow-lg hover:bg-indigo-700 transition-colors"
            >
              Check Answer
            </button>
            
            {feedback && (
              <p className={`font-bold ${feedback.includes("Correct") ? "text-green-600" : "text-amber-600"}`}>{feedback}</p>
            )}
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            key="yards"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6"
          >
            <h3 className="text-2xl font-bold text-emerald-600">Distance Conversion</h3>
            <p className="text-lg text-slate-600">
              There are <span className="font-bold text-emerald-600">3,520 yards</span> in <span className="font-bold text-slate-800">2 miles</span>.
            </p>
            <p className="text-lg text-slate-600">
              How many yards are in <span className="font-bold text-slate-800">5 miles</span>?
            </p>
            
            <div className="flex items-center justify-center space-x-4">
              <div className="text-center">
                <div className="text-sm text-slate-400">Miles</div>
                <div className="text-2xl font-bold text-slate-800">2</div>
                <div className="text-sm text-slate-400 mt-2">× 2.5</div>
                <div className="text-2xl font-bold text-slate-800 mt-2">5</div>
              </div>
              <div className="h-24 w-px bg-slate-200"></div>
              <div className="text-center">
                <div className="text-sm text-slate-400">Yards</div>
                <div className="text-2xl font-bold text-emerald-600">3,520</div>
                <div className="text-sm text-slate-400 mt-2">× 2.5</div>
                <input
                  type="number"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  className="w-28 text-center p-2 border-2 border-emerald-200 rounded-lg font-bold text-2xl text-emerald-600 focus:border-emerald-500 focus:outline-none mt-2"
                />
              </div>
            </div>

            <button
              onClick={checkAnswer}
              className="px-8 py-3 bg-emerald-600 text-white rounded-full font-bold shadow-lg hover:bg-emerald-700 transition-colors"
            >
              Check Answer
            </button>
            
            {feedback && (
              <p className={`font-bold ${feedback.includes("Correct") ? "text-green-600" : "text-amber-600"}`}>{feedback}</p>
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
              : "bg-slate-900 text-white hover:bg-slate-800"
            }`}
        >
          <span>Next Lesson</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
