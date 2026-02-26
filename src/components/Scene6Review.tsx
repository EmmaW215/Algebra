import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle, XCircle } from "lucide-react";

export default function Scene6Review({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [step, setStep] = useState(0);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState<string | null>(null);

  const problems = [
    {
      id: 1,
      question: "Solve for c: 43 = 8c - 5",
      correct: "6",
      hint: "Add 5 first, then divide by 8."
    },
    {
      id: 2,
      question: "Solve for n: 24 = 3(n - 5)",
      correct: "13",
      hint: "Divide by 3 first, then add 5."
    },
    {
      id: 3,
      question: "Word Problem: Mindy ate 3 pieces. Troy ate 1/4 of the total cake (c). Together they ate 9 pieces. How many pieces were there in total?",
      equation: "3 + 1/4c = 9",
      correct: "24",
      hint: "Subtract 3, then multiply by 4."
    }
  ];

  const checkAnswer = () => {
    if (answer === problems[step].correct) {
      setFeedback("Correct!");
      setTimeout(() => {
        if (step < problems.length - 1) {
          setStep(s => s + 1);
          setAnswer("");
          setFeedback(null);
        } else {
          setFeedback("All correct! Ready for inequalities.");
        }
      }, 1500);
    } else {
      setFeedback("Try again. " + problems[step].hint);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-6 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Two-Step Equations Review</h2>
      
      <div className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
        <div className="text-xl font-medium text-slate-700">
          Problem {step + 1} of {problems.length}
        </div>
        
        <div className="text-2xl font-mono font-bold text-slate-900">
          {problems[step].question}
        </div>
        
        {problems[step].equation && (
          <div className="text-xl font-mono text-indigo-600 font-bold">
            Equation: {problems[step].equation}
          </div>
        )}

        <div className="flex space-x-2">
          <input
            type="number"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Enter value"
            className="flex-1 p-3 border-2 border-slate-200 rounded-lg font-mono text-lg focus:border-indigo-500 focus:outline-none"
            onKeyDown={(e) => e.key === "Enter" && checkAnswer()}
          />
          <button
            onClick={checkAnswer}
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transition-colors"
          >
            Check
          </button>
        </div>

        <AnimatePresence>
          {feedback && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`font-bold ${feedback.includes("Correct") ? "text-green-600" : "text-amber-600"}`}
            >
              {feedback}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

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
          disabled={step < problems.length - 1 || !feedback?.includes("All correct")}
          className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium shadow-lg transition-colors
            ${step < problems.length - 1 || !feedback?.includes("All correct")
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
