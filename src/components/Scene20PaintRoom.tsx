import { motion } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Scene20PaintRoom({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [answer, setAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  // Rate: 8 sq m/hour
  // t=3 -> 28 left
  // A(t) = -8t + b
  // 28 = -8(3) + b => 28 = -24 + b => b = 52
  // Initial area = 52

  const checkAnswer = () => {
    if (answer === "52") {
      setIsCorrect(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Linear Functions: Painting</h2>
      
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
        <div className="bg-orange-50 p-6 rounded-xl border border-orange-200 text-left space-y-2">
          <h3 className="font-bold text-orange-600 text-xl mb-4">Hiro's Painting</h3>
          <p className="text-lg">Paint Rate: <span className="font-bold">8 sq meters per hour</span></p>
          <p className="text-lg">After 3 hours: <span className="font-bold">28 sq meters LEFT</span> to paint.</p>
        </div>

        <p className="text-lg text-slate-600 font-bold">What was the <span className="text-purple-600">total area</span> to paint at the start (t=0)?</p>
        
        <div className="flex items-center justify-center space-x-2">
          <input
            type="number"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="w-24 p-2 border-2 border-orange-200 rounded-lg text-center font-mono text-xl focus:border-orange-500 focus:outline-none"
            placeholder="?"
          />
          <span className="font-mono text-xl font-bold text-slate-700">sq meters</span>
        </div>

        <button
          onClick={checkAnswer}
          className="px-8 py-3 bg-orange-600 text-white rounded-full font-bold shadow-lg hover:bg-orange-700 transition-colors"
        >
          Check Answer
        </button>

        {isCorrect && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 font-bold text-lg mt-4">
            Correct! 
            <br/>In 3 hours, he painted 3 × 8 = 24 sq m.
            <br/>Total = Painted + Left = 24 + 28 = 52 sq m.
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
