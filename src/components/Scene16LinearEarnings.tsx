import { motion } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Scene16LinearEarnings({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [answer, setAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  // 4 hours -> $54
  // 8 hours -> $108
  // Slope = (108 - 54) / (8 - 4) = 54 / 4 = 13.5

  const checkAnswer = () => {
    const val = parseFloat(answer);
    if (Math.abs(val - 13.5) < 0.01) {
      setIsCorrect(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Linear Equations: Earnings</h2>
      
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
        <h3 className="text-xl font-bold text-slate-700 mb-4">Earnings Table</h3>
        <table className="w-full text-center border-collapse mb-6">
          <thead>
            <tr className="bg-slate-100">
              <th className="p-3 border border-slate-200">Hours Worked (x)</th>
              <th className="p-3 border border-slate-200">Money Earned (y)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-3 border border-slate-200">4</td><td className="p-3 border border-slate-200">$54</td></tr>
            <tr><td className="p-3 border border-slate-200">8</td><td className="p-3 border border-slate-200">$108</td></tr>
            <tr><td className="p-3 border border-slate-200">16</td><td className="p-3 border border-slate-200">$216</td></tr>
          </tbody>
        </table>

        <p className="text-lg text-slate-600">
          Find the <span className="font-bold text-purple-600">slope</span> (hourly wage).
          <br/><span className="text-sm text-slate-400">(Dollars per hour)</span>
        </p>
        
        <div className="flex items-center justify-center space-x-2">
          <span className="font-mono text-xl font-bold text-slate-700">$</span>
          <input
            type="number"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="w-24 p-2 border-2 border-purple-200 rounded-lg text-center font-mono text-xl focus:border-purple-500 focus:outline-none"
            placeholder="?"
          />
          <span className="font-mono text-xl font-bold text-slate-700">/ hr</span>
        </div>

        <button
          onClick={checkAnswer}
          className="px-8 py-3 bg-purple-600 text-white rounded-full font-bold shadow-lg hover:bg-purple-700 transition-colors"
        >
          Check Answer
        </button>

        {isCorrect && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 font-bold text-lg mt-4">
            Correct! 
            <br/>Slope = Change in Y / Change in X
            <br/>(108 - 54) / (8 - 4) = 54 / 4 = $13.50/hr
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
