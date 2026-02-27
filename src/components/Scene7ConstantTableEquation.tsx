import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function Scene7ConstantTableEquation({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [r, setR] = useState("");
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);

  // Table: (4, 10), (5, 12.5), (10, 25)
  // k = 2.5

  const checkAnswer = () => {
    if (r === "2.5") {
      setFeedback("Correct! 10/4 = 2.5");
      setIsCorrect(true);
    } else {
      setFeedback("Try again. Divide y by x.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Finding 'r' in y = rx</h2>
      
      <div className="flex flex-col md:flex-row items-start gap-8 w-full max-w-3xl">
        {/* Table */}
        <div className="w-full md:w-1/2 bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
          <table className="w-full text-center">
            <thead className="bg-slate-50">
              <tr>
                <th className="p-3 border-r border-slate-200">x</th>
                <th className="p-3">y</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr><td className="p-3 border-r">4</td><td className="p-3">10</td></tr>
              <tr><td className="p-3 border-r">5</td><td className="p-3">12.5</td></tr>
              <tr><td className="p-3 border-r">10</td><td className="p-3">25</td></tr>
            </tbody>
          </table>
        </div>

        {/* Question */}
        <div className="w-full md:w-1/2 text-left space-y-6">
          <p className="text-lg text-slate-600">
            Find the constant of proportionality, <span className="font-mono font-bold text-indigo-600">r</span>.
          </p>
          <div className="text-2xl font-mono font-bold text-slate-800 bg-slate-100 p-4 rounded-lg text-center">
            y = rx
          </div>
          
          <div className="space-y-2">
            <label className="text-sm text-slate-500 font-bold">Value of r:</label>
            <div className="flex space-x-2">
              <input
                type="number"
                value={r}
                onChange={(e) => setR(e.target.value)}
                className="flex-1 p-3 border-2 border-slate-200 rounded-lg font-mono text-lg focus:border-indigo-500 focus:outline-none"
                placeholder="?"
              />
              <button
                onClick={checkAnswer}
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transition-colors"
              >
                Check
              </button>
            </div>
          </div>

          {feedback && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className={`font-bold ${isCorrect ? "text-green-600" : "text-amber-600"}`}
            >
              {feedback}
            </motion.div>
          )}
        </div>
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
            ${!isCorrect
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
