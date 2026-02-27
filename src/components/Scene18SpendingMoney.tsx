import { motion } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Scene18SpendingMoney({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [answer, setAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  // Start: $40
  // Spend: $2.50/day
  // y = 40 - 2.5x
  // After 8 days: 40 - 2.5(8) = 40 - 20 = 20

  const checkAnswer = () => {
    if (answer === "20") {
      setIsCorrect(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Linear Function: Spending Money</h2>
      
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
        <div className="bg-green-50 p-6 rounded-xl border border-green-200 text-left space-y-2">
          <h3 className="font-bold text-green-600 text-xl mb-4">Jill's Money</h3>
          <p className="text-lg">Start: <span className="font-bold">$40</span></p>
          <p className="text-lg">Spends: <span className="font-bold text-red-500">$2.50 per day</span></p>
          <p className="font-mono text-xl text-center mt-4">y = 40 - 2.5x</p>
        </div>

        <p className="text-lg text-slate-600 font-bold">How much money is left after <span className="text-purple-600">8 days</span>?</p>
        
        <div className="flex items-center justify-center space-x-2">
          <span className="font-mono text-xl font-bold text-slate-700">$</span>
          <input
            type="number"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="w-24 p-2 border-2 border-green-200 rounded-lg text-center font-mono text-xl focus:border-green-500 focus:outline-none"
            placeholder="?"
          />
        </div>

        <button
          onClick={checkAnswer}
          className="px-8 py-3 bg-green-600 text-white rounded-full font-bold shadow-lg hover:bg-green-700 transition-colors"
        >
          Check Answer
        </button>

        {isCorrect && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 font-bold text-lg mt-4">
            Correct! 
            <br/>y = 40 - 2.5(8)
            <br/>y = 40 - 20
            <br/>y = $20
          </motion.div>
        )}
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
          disabled={!isCorrect}
          className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium shadow-lg transition-colors
            ${!isCorrect ? "bg-slate-200 text-slate-400 cursor-not-allowed" : "bg-purple-600 text-white hover:bg-purple-700"}
          `}
        >
          <span>Next Lesson</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
