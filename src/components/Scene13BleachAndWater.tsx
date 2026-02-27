import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowRight, ArrowLeft, CheckCircle, XCircle } from "lucide-react";

export default function Scene13BleachAndWater({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [selected, setSelected] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState(false);

  // Ratio: 15 ml Bleach : 3.75 L Water
  // k = 3.75 / 15 = 0.25 L/ml
  // Choices:
  // A: 12 ml, 3 L -> 3/12 = 0.25 (Correct)
  // B: 6 ml, 1.5 L -> 1.5/6 = 0.25 (Correct)
  // C: 3 ml, 0.75 L -> 0.75/3 = 0.25 (Correct)
  // D: 20 ml, 5.5 L -> 5.5/20 = 0.275 (Incorrect)
  // E: 11 ml, 3.75 L -> 3.75/11 = 0.34 (Incorrect)

  const correctAnswers = ["A", "B", "C"];

  const toggleSelection = (id: string) => {
    if (selected.includes(id)) {
      setSelected(selected.filter(s => s !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  const checkAnswer = () => {
    const sortedSelected = [...selected].sort();
    const sortedCorrect = [...correctAnswers].sort();
    if (JSON.stringify(sortedSelected) === JSON.stringify(sortedCorrect)) {
      setIsCorrect(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Bleach & Water Mixture</h2>
      
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
        <p className="text-lg text-slate-600">
          Mael mixes <span className="font-bold text-indigo-600">15 ml</span> of bleach with <span className="font-bold text-blue-600">3.75 L</span> of water.
        </p>
        <p className="text-sm text-slate-500">Select all combinations that use the same ratio.</p>
        
        <div className="grid grid-cols-1 gap-4 text-left">
          {[
            { id: "A", bleach: "12 ml", water: "3 L" },
            { id: "B", bleach: "6 ml", water: "1.5 L" },
            { id: "C", bleach: "3 ml", water: "0.75 L" },
            { id: "D", bleach: "20 ml", water: "5.5 L" },
            { id: "E", bleach: "11 ml", water: "3.75 L" },
          ].map((opt) => (
            <button
              key={opt.id}
              onClick={() => toggleSelection(opt.id)}
              className={`p-4 rounded-xl border-2 flex justify-between items-center transition-all
                ${selected.includes(opt.id) ? "border-indigo-500 bg-indigo-50" : "border-slate-200 hover:border-indigo-200"}
              `}
            >
              <span className="font-bold text-slate-700">{opt.bleach} Bleach, {opt.water} Water</span>
              {selected.includes(opt.id) && <CheckCircle className="text-indigo-600" size={20} />}
            </button>
          ))}
        </div>

        <button
          onClick={checkAnswer}
          className="px-8 py-3 bg-indigo-600 text-white rounded-full font-bold shadow-lg hover:bg-indigo-700 transition-colors"
        >
          Check Answer
        </button>

        {isCorrect && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 font-bold text-lg">
            Correct! The ratio is always 0.25 L of water per ml of bleach.
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
