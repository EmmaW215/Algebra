import { motion } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";

export default function Scene5InterpretingPatterns({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [selected, setSelected] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState(false);

  // Pattern A: 4, 7, 10, 13, 16 (+3)
  // Pattern B: 1, 7, 13, 19, 25 (+6)
  
  // Correct Statements:
  // 1. B = 2A - 7 (Check: 2*4 - 7 = 1. 2*7 - 7 = 7. Correct)
  // 3. Move 3 right, 6 up (Correct)
  // 4. Second terms are 7 (Correct)

  const toggleSelection = (id: string) => {
    if (selected.includes(id)) {
      setSelected(selected.filter(s => s !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  const checkAnswer = () => {
    const correct = ["1", "3", "4"];
    if (selected.length === 3 && selected.every(s => correct.includes(s))) {
      setIsCorrect(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Interpreting Patterns</h2>
      
      <div className="w-full max-w-3xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
        <div className="flex justify-center space-x-8 mb-4">
          <div className="text-left">
            <h3 className="font-bold text-purple-600">Pattern A (x)</h3>
            <p>4, 7, 10, 13, 16</p>
            <p className="text-sm text-slate-400">Rule: Add 3</p>
          </div>
          <div className="text-left">
            <h3 className="font-bold text-teal-600">Pattern B (y)</h3>
            <p>1, 7, 13, 19, 25</p>
            <p className="text-sm text-slate-400">Rule: Add 6</p>
          </div>
        </div>

        <p className="text-lg text-slate-600 font-bold">Select all TRUE statements:</p>
        
        <div className="grid grid-cols-1 gap-3 text-left">
          <button
            onClick={() => toggleSelection("1")}
            className={`p-3 rounded-lg border transition-all flex items-center justify-between ${selected.includes("1") ? "bg-purple-50 border-purple-500" : "hover:bg-slate-50 border-slate-200"}`}
          >
            <span>1. Pattern B = 2 × (Pattern A) - 7</span>
            {selected.includes("1") && <CheckCircle size={18} className="text-purple-600" />}
          </button>

          <button
            onClick={() => toggleSelection("2")}
            className={`p-3 rounded-lg border transition-all flex items-center justify-between ${selected.includes("2") ? "bg-purple-50 border-purple-500" : "hover:bg-slate-50 border-slate-200"}`}
          >
            <span>2. Pattern B is always greater than Pattern A</span>
            {selected.includes("2") && <CheckCircle size={18} className="text-purple-600" />}
          </button>

          <button
            onClick={() => toggleSelection("3")}
            className={`p-3 rounded-lg border transition-all flex items-center justify-between ${selected.includes("3") ? "bg-purple-50 border-purple-500" : "hover:bg-slate-50 border-slate-200"}`}
          >
            <span>3. To get to next point: Move 3 right, 6 up</span>
            {selected.includes("3") && <CheckCircle size={18} className="text-purple-600" />}
          </button>

          <button
            onClick={() => toggleSelection("4")}
            className={`p-3 rounded-lg border transition-all flex items-center justify-between ${selected.includes("4") ? "bg-purple-50 border-purple-500" : "hover:bg-slate-50 border-slate-200"}`}
          >
            <span>4. The second terms of both patterns are 7</span>
            {selected.includes("4") && <CheckCircle size={18} className="text-purple-600" />}
          </button>
        </div>

        <button
          onClick={checkAnswer}
          className="px-8 py-3 bg-purple-600 text-white rounded-full font-bold shadow-lg hover:bg-purple-700 transition-colors"
        >
          Check Answer
        </button>

        {isCorrect && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 font-bold text-lg">
            Correct! Statements 1, 3, and 4 are true.
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
