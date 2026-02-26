import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle, XCircle } from "lucide-react";

export default function Scene13ComparingRatios({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);

  // Burger Barn: 2 Honey : 0.5 Mustard
  // Sandwich Town: 4 Honey : 1 Mustard
  // Are they equivalent? Yes.

  const checkAnswer = (ans: string) => {
    setSelected(ans);
    if (ans === "Same") {
      setIsCorrect(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Comparing Ratios</h2>
      
      <div className="w-full max-w-3xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
        <p className="text-lg text-slate-600 mb-8">Which dipping sauce has a stronger mustard flavor?</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
            <h3 className="text-xl font-bold text-amber-800 mb-4">Burger Barn</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium text-amber-700">Honey</span>
                <span className="font-bold text-2xl text-amber-900">2</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-yellow-600">Mustard</span>
                <span className="font-bold text-2xl text-yellow-800">0.5</span>
              </div>
            </div>
            <div className="mt-4 text-sm text-slate-500">Ratio: 2 : 0.5</div>
          </div>

          <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
            <h3 className="text-xl font-bold text-amber-800 mb-4">Sandwich Town</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium text-amber-700">Honey</span>
                <span className="font-bold text-2xl text-amber-900">4</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-yellow-600">Mustard</span>
                <span className="font-bold text-2xl text-yellow-800">1</span>
              </div>
            </div>
            <div className="mt-4 text-sm text-slate-500">Ratio: 4 : 1</div>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={() => checkAnswer("Burger Barn")}
            disabled={isCorrect}
            className={`px-6 py-3 rounded-xl border-2 font-bold transition-all ${selected === "Burger Barn" ? "bg-red-100 border-red-500 text-red-800" : "bg-white border-slate-200 hover:bg-slate-50"}`}
          >
            Burger Barn
          </button>
          <button
            onClick={() => checkAnswer("Sandwich Town")}
            disabled={isCorrect}
            className={`px-6 py-3 rounded-xl border-2 font-bold transition-all ${selected === "Sandwich Town" ? "bg-red-100 border-red-500 text-red-800" : "bg-white border-slate-200 hover:bg-slate-50"}`}
          >
            Sandwich Town
          </button>
          <button
            onClick={() => checkAnswer("Same")}
            disabled={isCorrect}
            className={`px-6 py-3 rounded-xl border-2 font-bold transition-all ${selected === "Same" ? "bg-green-100 border-green-500 text-green-800" : "bg-white border-slate-200 hover:bg-slate-50"}`}
          >
            They are the same
          </button>
        </div>

        {selected && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-6 font-bold text-lg ${isCorrect ? "text-green-600" : "text-amber-600"}`}
          >
            {isCorrect 
              ? "Correct! If you multiply Burger Barn's ratio (2 : 0.5) by 2, you get 4 : 1." 
              : "Not quite. Try multiplying Burger Barn's amounts by 2."}
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
