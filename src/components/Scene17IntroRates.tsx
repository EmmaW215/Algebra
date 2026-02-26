import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle, XCircle } from "lucide-react";

export default function Scene17IntroRates({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [step, setStep] = useState(0);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState<string | null>(null);

  // Problem 1: Jayda
  // 189 newspapers / 3 hours
  // 63 newspapers / 1 hour

  // Problem 2: Nierria
  // $75 / 4 hours
  // $18.75 / 1 hour

  const checkAnswer = () => {
    if (step === 0) {
      if (answer === "63") {
        setFeedback("Correct! 189 ÷ 3 = 63.");
        setTimeout(() => {
          setStep(1);
          setAnswer("");
          setFeedback(null);
        }, 2000);
      } else {
        setFeedback("Try again. Divide 189 by 3.");
      }
    } else {
      if (answer === "18.75") {
        setFeedback("Correct! 75 ÷ 4 = 18.75.");
        setTimeout(() => {
          onNext(); // This will go back to Unit menu
        }, 2000);
      } else {
        setFeedback("Try again. Divide 75 by 4.");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Introduction to Rates</h2>
      
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="jayda"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6"
          >
            <h3 className="text-2xl font-bold text-indigo-600">Newspaper Delivery</h3>
            <p className="text-lg text-slate-600">
              Jayda delivers <span className="font-bold text-indigo-600">189 newspapers</span> in <span className="font-bold text-slate-800">3 hours</span>.
            </p>
            <p className="text-lg text-slate-600">
              What is her rate per hour?
            </p>
            
            <div className="flex items-center justify-center space-x-4">
              <div className="text-center">
                <div className="text-sm text-slate-400">Newspapers</div>
                <div className="text-2xl font-bold text-indigo-600">189</div>
                <div className="text-sm text-slate-400 mt-2">÷ 3</div>
                <input
                  type="number"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  className="w-24 text-center p-2 border-2 border-indigo-200 rounded-lg font-bold text-2xl text-indigo-600 focus:border-indigo-500 focus:outline-none mt-2"
                />
              </div>
              <div className="h-24 w-px bg-slate-200"></div>
              <div className="text-center">
                <div className="text-sm text-slate-400">Hours</div>
                <div className="text-2xl font-bold text-slate-800">3</div>
                <div className="text-sm text-slate-400 mt-2">÷ 3</div>
                <div className="text-2xl font-bold text-slate-800 mt-2">1</div>
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
            key="nierria"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6"
          >
            <h3 className="text-2xl font-bold text-emerald-600">Tutoring Earnings</h3>
            <p className="text-lg text-slate-600">
              Nierria earns <span className="font-bold text-emerald-600">$75</span> for <span className="font-bold text-slate-800">4 hours</span> of tutoring.
            </p>
            <p className="text-lg text-slate-600">
              How much does she earn per hour?
            </p>
            
            <div className="flex items-center justify-center space-x-4">
              <div className="text-center">
                <div className="text-sm text-slate-400">Earnings</div>
                <div className="text-2xl font-bold text-emerald-600">$75</div>
                <div className="text-sm text-slate-400 mt-2">÷ 4</div>
                <input
                  type="number"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  className="w-28 text-center p-2 border-2 border-emerald-200 rounded-lg font-bold text-2xl text-emerald-600 focus:border-emerald-500 focus:outline-none mt-2"
                />
              </div>
              <div className="h-24 w-px bg-slate-200"></div>
              <div className="text-center">
                <div className="text-sm text-slate-400">Hours</div>
                <div className="text-2xl font-bold text-slate-800">4</div>
                <div className="text-sm text-slate-400 mt-2">÷ 4</div>
                <div className="text-2xl font-bold text-slate-800 mt-2">1</div>
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
          <span>Finish Unit</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
