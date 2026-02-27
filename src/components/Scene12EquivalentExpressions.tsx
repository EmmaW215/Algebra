import { motion } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";

export default function Scene12EquivalentExpressions({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [selected, setSelected] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState(false);

  // 5p + 3p + (-9) = 8p - 9
  // A: 8p + 9 (No)
  // B: 3(p + (-3)) + 5p = 3p - 9 + 5p = 8p - 9 (Yes)
  // C: None (No)

  const toggleSelection = (id: string) => {
    if (selected.includes(id)) {
      setSelected(selected.filter(s => s !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  const checkAnswer = () => {
    const correct = ["B"];
    // Check if only B is selected
    if (selected.length === 1 && selected[0] === "B") {
      setIsCorrect(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Equivalent Expressions</h2>
      
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
        <p className="text-lg text-slate-600 font-bold">Which expressions are equivalent to <span className="font-mono text-purple-600">5p + 3p + (-9)</span>?</p>
        <p className="text-sm text-slate-500">(Select all that apply)</p>
        
        <div className="grid grid-cols-1 gap-4">
          <button onClick={() => toggleSelection("A")} className={`p-4 rounded-xl border-2 transition-all flex items-center justify-between ${selected.includes("A") ? "bg-purple-50 border-purple-500" : "border-slate-200 hover:border-purple-200"}`}>
            <span className="font-mono text-lg">8p + 9</span>
            {selected.includes("A") && <CheckCircle size={20} className="text-purple-600" />}
          </button>
          
          <button onClick={() => toggleSelection("B")} className={`p-4 rounded-xl border-2 transition-all flex items-center justify-between ${selected.includes("B") ? "bg-purple-50 border-purple-500" : "border-slate-200 hover:border-purple-200"}`}>
            <span className="font-mono text-lg">3(p + (-3)) + 5p</span>
            {selected.includes("B") && <CheckCircle size={20} className="text-purple-600" />}
          </button>

          <button onClick={() => toggleSelection("C")} className={`p-4 rounded-xl border-2 transition-all flex items-center justify-between ${selected.includes("C") ? "bg-purple-50 border-purple-500" : "border-slate-200 hover:border-purple-200"}`}>
            <span className="font-mono text-lg">None of the above</span>
            {selected.includes("C") && <CheckCircle size={20} className="text-purple-600" />}
          </button>
        </div>

        <button onClick={checkAnswer} className="px-8 py-3 bg-purple-600 text-white rounded-full font-bold shadow-lg hover:bg-purple-700 transition-colors">
          Check Answer
        </button>

        {isCorrect && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 font-bold text-lg mt-4">
            Correct!
            <br/>Original: 8p - 9
            <br/>B: 3p - 9 + 5p = 8p - 9
          </motion.div>
        )}
      </div>

      <div className="flex space-x-4 mt-auto w-full justify-between items-center pt-8 border-t border-slate-100">
        <button onClick={onPrev} className="flex items-center space-x-2 px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-full font-medium shadow-sm hover:bg-slate-50 transition-colors">
          <ArrowLeft size={18} /> <span>Back</span>
        </button>
        <button onClick={onNext} disabled={!isCorrect} className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium shadow-lg transition-colors ${!isCorrect ? "bg-slate-200 text-slate-400" : "bg-purple-600 text-white hover:bg-purple-700"}`}>
          <span>Next Lesson</span> <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
