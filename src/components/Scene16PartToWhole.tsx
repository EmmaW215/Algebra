import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle, XCircle } from "lucide-react";

export default function Scene16PartToWhole({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [indoor, setIndoor] = useState("");
  const [outdoor, setOutdoor] = useState("");
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);

  // Ratio: 2 Indoor : 3 Outdoor
  // Total: 30
  // Parts: 2 + 3 = 5
  // Multiplier: 30 / 5 = 6
  // Indoor: 2 * 6 = 12
  // Outdoor: 3 * 6 = 18

  const checkAnswer = () => {
    if (indoor === "12" && outdoor === "18") {
      setFeedback("Correct! 2 + 3 = 5 parts. 30 ÷ 5 = 6. So multiply each part by 6.");
      setIsCorrect(true);
    } else {
      setFeedback("Not quite. Remember, the total parts are 2 + 3 = 5. How many times does 5 go into 30?");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Part-to-Whole Ratios</h2>
      
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
        <p className="text-lg text-slate-600">
          The ratio of <span className="font-bold text-indigo-600">Indoor</span> to <span className="font-bold text-emerald-600">Outdoor</span> play times is <span className="font-bold text-slate-800">2 : 3</span>.
        </p>
        <p className="text-lg text-slate-600">
          There were <span className="font-bold text-slate-800">30 total</span> play times. How many were indoor and outdoor?
        </p>
        
        <div className="flex items-center justify-center space-x-8 mt-8">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-sm font-bold text-indigo-600 uppercase tracking-wider">Indoor</div>
            <div className="flex space-x-1">
              <div className="w-12 h-12 bg-indigo-100 border-2 border-indigo-400 rounded-lg flex items-center justify-center font-bold text-indigo-600">1</div>
              <div className="w-12 h-12 bg-indigo-100 border-2 border-indigo-400 rounded-lg flex items-center justify-center font-bold text-indigo-600">1</div>
            </div>
            <div className="text-xs text-slate-400">2 Parts</div>
            <input
              type="number"
              value={indoor}
              onChange={(e) => setIndoor(e.target.value)}
              placeholder="?"
              className="w-20 text-center p-2 border-2 border-indigo-200 rounded-lg font-bold text-xl text-indigo-600 focus:border-indigo-500 focus:outline-none mt-2"
            />
          </div>

          <div className="text-2xl font-bold text-slate-300">+</div>

          <div className="flex flex-col items-center space-y-2">
            <div className="text-sm font-bold text-emerald-600 uppercase tracking-wider">Outdoor</div>
            <div className="flex space-x-1">
              <div className="w-12 h-12 bg-emerald-100 border-2 border-emerald-400 rounded-lg flex items-center justify-center font-bold text-emerald-600">1</div>
              <div className="w-12 h-12 bg-emerald-100 border-2 border-emerald-400 rounded-lg flex items-center justify-center font-bold text-emerald-600">1</div>
              <div className="w-12 h-12 bg-emerald-100 border-2 border-emerald-400 rounded-lg flex items-center justify-center font-bold text-emerald-600">1</div>
            </div>
            <div className="text-xs text-slate-400">3 Parts</div>
            <input
              type="number"
              value={outdoor}
              onChange={(e) => setOutdoor(e.target.value)}
              placeholder="?"
              className="w-20 text-center p-2 border-2 border-emerald-200 rounded-lg font-bold text-xl text-emerald-600 focus:border-emerald-500 focus:outline-none mt-2"
            />
          </div>

          <div className="text-2xl font-bold text-slate-300">=</div>

          <div className="flex flex-col items-center space-y-2">
            <div className="text-sm font-bold text-slate-600 uppercase tracking-wider">Total</div>
            <div className="h-12 flex items-center justify-center font-bold text-2xl text-slate-800">
              30
            </div>
            <div className="text-xs text-slate-400">5 Parts</div>
            <div className="h-10"></div> {/* Spacer */}
          </div>
        </div>

        <button
          onClick={checkAnswer}
          className="px-8 py-3 bg-slate-900 text-white rounded-full font-bold shadow-lg hover:bg-slate-800 transition-colors mt-8"
        >
          Check Answer
        </button>
        
        {feedback && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`font-bold mt-4 ${feedback.includes("Correct") ? "text-green-600" : "text-amber-600"}`}
          >
            {feedback}
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
            ${!isCorrect
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
