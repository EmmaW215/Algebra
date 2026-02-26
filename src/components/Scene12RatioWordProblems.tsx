import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle, XCircle } from "lucide-react";

export default function Scene12RatioWordProblems({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [step, setStep] = useState(0);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState<string | null>(null);

  // Problem 1: Yoda Soda
  // 5L / 12 guests
  // 36 guests -> 15L

  const checkAnswer = () => {
    if (step === 0) {
      if (answer === "15") {
        setFeedback("Correct! 36 is 3 times 12, so we need 3 times 5 liters.");
        setTimeout(() => {
          setStep(1);
          setAnswer("");
          setFeedback(null);
        }, 2000);
      } else {
        setFeedback("Try again. How many times larger is 36 than 12?");
      }
    } else {
      // Problem 2: Fish Tank
      // 8 big fish / 10 small fish
      // 4 big fish / ? small fish
      if (answer === "5") {
        setFeedback("Correct! 4 is half of 8, so we need half of 10.");
        setTimeout(() => {
          onNext();
        }, 2000);
      } else {
        setFeedback("Try again. If we have half as many big fish, how many small fish do we need?");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Ratio Word Problems</h2>
      
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="yoda"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6"
          >
            <h3 className="text-2xl font-bold text-green-600">Yoda Soda</h3>
            <p className="text-lg text-slate-600">
              You need <span className="font-bold text-green-600">5 liters</span> of soda for every <span className="font-bold text-slate-800">12 guests</span>.
            </p>
            <p className="text-lg text-slate-600">
              If you have <span className="font-bold text-slate-800">36 guests</span>, how many liters do you need?
            </p>
            
            <div className="flex items-center justify-center space-x-4">
              <div className="text-center">
                <div className="text-sm text-slate-400">Guests</div>
                <div className="text-2xl font-bold text-slate-800">12</div>
                <div className="text-sm text-slate-400 mt-2">× 3</div>
                <div className="text-2xl font-bold text-slate-800 mt-2">36</div>
              </div>
              <div className="h-24 w-px bg-slate-200"></div>
              <div className="text-center">
                <div className="text-sm text-slate-400">Liters</div>
                <div className="text-2xl font-bold text-green-600">5</div>
                <div className="text-sm text-slate-400 mt-2">× 3</div>
                <input
                  type="number"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  className="w-20 text-center p-2 border-2 border-green-200 rounded-lg font-bold text-2xl text-green-600 focus:border-green-500 focus:outline-none mt-2"
                />
              </div>
            </div>

            <button
              onClick={checkAnswer}
              className="px-8 py-3 bg-green-600 text-white rounded-full font-bold shadow-lg hover:bg-green-700 transition-colors"
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
            key="fish"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6"
          >
            <h3 className="text-2xl font-bold text-blue-600">Fish Tank</h3>
            <p className="text-lg text-slate-600">
              There are <span className="font-bold text-blue-800">8 big fish</span> for every <span className="font-bold text-blue-400">10 small fish</span>.
            </p>
            <p className="text-lg text-slate-600">
              If there are <span className="font-bold text-blue-800">4 big fish</span>, how many small fish are there?
            </p>
            
            <div className="flex items-center justify-center space-x-4">
              <div className="text-center">
                <div className="text-sm text-slate-400">Big Fish</div>
                <div className="text-2xl font-bold text-blue-800">8</div>
                <div className="text-sm text-slate-400 mt-2">÷ 2</div>
                <div className="text-2xl font-bold text-blue-800 mt-2">4</div>
              </div>
              <div className="h-24 w-px bg-slate-200"></div>
              <div className="text-center">
                <div className="text-sm text-slate-400">Small Fish</div>
                <div className="text-2xl font-bold text-blue-400">10</div>
                <div className="text-sm text-slate-400 mt-2">÷ 2</div>
                <input
                  type="number"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  className="w-20 text-center p-2 border-2 border-blue-200 rounded-lg font-bold text-2xl text-blue-400 focus:border-blue-500 focus:outline-none mt-2"
                />
              </div>
            </div>

            <button
              onClick={checkAnswer}
              className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold shadow-lg hover:bg-blue-700 transition-colors"
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
