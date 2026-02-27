import { motion } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Scene24LinearMissingValue({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [answer, setAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  // Table: (1, 1.5), (2, 3), (3, 4.5), (8, ?)
  // Rate: +1.5 per 1 x.
  // y = 1.5x
  // y = 1.5 * 8 = 12

  const checkAnswer = () => {
    if (answer === "12") {
      setIsCorrect(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Linear Functions: Missing Value</h2>
      
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
        <h3 className="text-xl font-bold text-slate-700 mb-4">Linear Function Table</h3>
        <table className="w-full text-center border-collapse mb-6">
          <thead>
            <tr className="bg-slate-100">
              <th className="p-3 border border-slate-200">x</th>
              <th className="p-3 border border-slate-200">y</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-3 border border-slate-200">1</td><td className="p-3 border border-slate-200">1.5</td></tr>
            <tr><td className="p-3 border border-slate-200">2</td><td className="p-3 border border-slate-200">3.0</td></tr>
            <tr><td className="p-3 border border-slate-200">3</td><td className="p-3 border border-slate-200">4.5</td></tr>
            <tr><td className="p-3 border border-slate-200">8</td><td className="p-3 border border-slate-200 font-bold text-purple-600">?</td></tr>
          </tbody>
        </table>

        <p className="text-lg text-slate-600 font-bold">Find the missing value for <span className="text-purple-600">y</span>.</p>
        
        <div className="flex items-center justify-center space-x-2">
          <span className="font-mono text-xl font-bold text-slate-700">y = </span>
          <input
            type="number"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="w-24 p-2 border-2 border-purple-200 rounded-lg text-center font-mono text-xl focus:border-purple-500 focus:outline-none"
            placeholder="?"
          />
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
            <br/>Rate = 1.5. 
            <br/>y = 1.5 × 8 = 12.
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
