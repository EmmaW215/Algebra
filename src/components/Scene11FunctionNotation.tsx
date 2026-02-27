import { motion } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Scene11FunctionNotation({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [answer, setAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  // V(r) = 4/3 * pi * r^3
  // Find V(3)
  // V(3) = 4/3 * pi * 27 = 36pi

  const checkAnswer = () => {
    // Accept "36pi", "36 pi", "113.1" (approx)
    const clean = answer.toLowerCase().replace(/\s/g, "");
    if (clean === "36pi" || clean === "36π" || Math.abs(parseFloat(clean) - 113.1) < 1) {
      setIsCorrect(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Function Notation: Volume</h2>
      
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 text-left space-y-2">
          <h3 className="font-bold text-blue-600 text-xl mb-4">Volume of a Sphere</h3>
          <p className="font-mono text-xl text-center">V(r) = <span className="text-lg">4</span>/<span className="text-lg">3</span> π r³</p>
        </div>

        <p className="text-lg text-slate-600">
          Find the volume of water <span className="font-bold text-blue-600">V(3)</span> for a balloon with radius 3 inches.
          <br/><span className="text-sm text-slate-400">(Write your answer in terms of π, e.g. "10pi")</span>
        </p>
        
        <div className="flex items-center justify-center space-x-2">
          <span className="font-mono text-xl font-bold text-slate-700">V(3) = </span>
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="w-32 p-2 border-2 border-blue-200 rounded-lg text-center font-mono text-xl focus:border-blue-500 focus:outline-none"
            placeholder="?"
          />
        </div>

        <button
          onClick={checkAnswer}
          className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold shadow-lg hover:bg-blue-700 transition-colors"
        >
          Check Answer
        </button>

        {isCorrect && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 font-bold text-lg mt-4 text-left bg-green-50 p-4 rounded-lg">
            Correct! 
            <br/>V(3) = 4/3 π (3)³
            <br/>V(3) = 4/3 π (27)
            <br/>V(3) = 36π
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
