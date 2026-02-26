import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle, XCircle } from "lucide-react";

export default function Scene11EquivalentRatios({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [selected, setSelected] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState(false);

  // Target: 7:6
  // Correct: 14:12, 21:18, 42:36, 63:54
  // Incorrect: 12:14, 84:62

  const options = [
    { id: "A", text: "14 : 12", correct: true },
    { id: "B", text: "12 : 14", correct: false },
    { id: "C", text: "21 : 18", correct: true },
    { id: "D", text: "42 : 36", correct: true },
    { id: "E", text: "63 : 54", correct: true },
    { id: "F", text: "84 : 62", correct: false },
  ];

  const toggleOption = (id: string) => {
    if (isCorrect) return;
    setSelected(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const checkAnswer = () => {
    const correctIds = options.filter(o => o.correct).map(o => o.id);
    const allCorrectSelected = correctIds.every(id => selected.includes(id));
    const noIncorrectSelected = selected.every(id => correctIds.includes(id));
    
    if (allCorrectSelected && noIncorrectSelected) {
      setIsCorrect(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Equivalent Ratios</h2>
      
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
        <p className="text-lg text-slate-600 mb-6">Select all ratios equivalent to:</p>
        <div className="text-5xl font-mono font-bold text-indigo-600 mb-8">
          7 : 6
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => toggleOption(opt.id)}
              disabled={isCorrect}
              className={`p-4 rounded-xl border-2 font-mono text-xl font-bold transition-all flex items-center justify-center space-x-2
                ${selected.includes(opt.id) 
                  ? "border-indigo-500 bg-indigo-50 text-indigo-900" 
                  : "bg-white border-slate-200 hover:border-indigo-200 text-slate-700"
                }
                ${isCorrect && opt.correct && "border-green-500 bg-green-50 text-green-900"}
                ${isCorrect && !opt.correct && selected.includes(opt.id) && "border-red-500 bg-red-50 text-red-900"}
              `}
            >
              <span>{opt.text}</span>
              {isCorrect && opt.correct && <CheckCircle size={20} className="text-green-600" />}
              {isCorrect && !opt.correct && selected.includes(opt.id) && <XCircle size={20} className="text-red-600" />}
            </button>
          ))}
        </div>

        {!isCorrect && (
          <button
            onClick={checkAnswer}
            className="px-8 py-3 bg-indigo-600 text-white rounded-full font-bold shadow-lg hover:bg-indigo-700 transition-colors"
          >
            Check Answer
          </button>
        )}

        {isCorrect && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-green-600 font-bold text-lg"
          >
            Correct! Equivalent ratios are found by multiplying or dividing both parts by the same number.
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
