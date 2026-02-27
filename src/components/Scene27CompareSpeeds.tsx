import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";

export default function Scene27CompareSpeeds({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [selected, setSelected] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState(false);

  // Maria & Nadia: 240 miles / 4 hours = 60 mph
  // Select all > 60 mph
  // A: y = 65x (65 > 60) - Correct
  // B: y = 55x (55 < 60)
  // C: y = 70x (70 > 60) - Correct
  // D: y = 60x (60 = 60)

  const toggleSelection = (id: string) => {
    if (selected.includes(id)) {
      setSelected(selected.filter(s => s !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  const checkAnswer = () => {
    const correct = ["A", "C"];
    if (selected.length === 2 && selected.every(s => correct.includes(s))) {
      setIsCorrect(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Comparing Speeds</h2>
      
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
        <p className="text-lg text-slate-600">
          Maria drives <span className="font-bold text-indigo-600">240 miles</span> in <span className="font-bold text-indigo-600">4 hours</span>.
        </p>
        <p className="text-lg font-bold text-indigo-600">
          Speed = 240 / 4 = 60 mph
        </p>
        <p className="text-lg text-slate-600">
          Select all equations representing a speed <span className="font-bold text-green-600">greater than</span> 60 mph.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={() => toggleSelection("A")}
            className={`p-4 rounded-xl border-2 transition-all font-mono text-lg flex items-center justify-between
              ${selected.includes("A") ? "border-green-500 bg-green-50" : "border-slate-200 hover:border-indigo-200"}
            `}
          >
            <span>y = 65x</span>
            {selected.includes("A") && <CheckCircle className="text-green-600" size={20} />}
          </button>

          <button
            onClick={() => toggleSelection("B")}
            className={`p-4 rounded-xl border-2 transition-all font-mono text-lg flex items-center justify-between
              ${selected.includes("B") ? "border-green-500 bg-green-50" : "border-slate-200 hover:border-indigo-200"}
            `}
          >
            <span>y = 55x</span>
            {selected.includes("B") && <CheckCircle className="text-green-600" size={20} />}
          </button>

          <button
            onClick={() => toggleSelection("C")}
            className={`p-4 rounded-xl border-2 transition-all font-mono text-lg flex items-center justify-between
              ${selected.includes("C") ? "border-green-500 bg-green-50" : "border-slate-200 hover:border-indigo-200"}
            `}
          >
            <span>y = 70x</span>
            {selected.includes("C") && <CheckCircle className="text-green-600" size={20} />}
          </button>

          <button
            onClick={() => toggleSelection("D")}
            className={`p-4 rounded-xl border-2 transition-all font-mono text-lg flex items-center justify-between
              ${selected.includes("D") ? "border-green-500 bg-green-50" : "border-slate-200 hover:border-indigo-200"}
            `}
          >
            <span>y = 60x</span>
            {selected.includes("D") && <CheckCircle className="text-green-600" size={20} />}
          </button>
        </div>

        <button
          onClick={checkAnswer}
          className="px-8 py-3 bg-indigo-600 text-white rounded-full font-bold shadow-lg hover:bg-indigo-700 transition-colors"
        >
          Check Answer
        </button>

        {isCorrect && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 font-bold text-lg">
            Correct! 65 and 70 are greater than 60.
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
