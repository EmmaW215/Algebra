import { motion } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";

export default function Scene11CombiningNegativeDistribution({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);

  // 2 - 4(5p + 1)
  // = 2 - 20p - 4
  // = -20p - 2

  const checkAnswer = (id: string) => {
    setSelected(id);
    if (id === "A") {
      setIsCorrect(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Combining & Distributing</h2>
      
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
        <p className="text-lg text-slate-600 font-bold">Simplify to create an equivalent expression.</p>
        
        <div className="text-4xl font-mono font-bold text-slate-800 py-4">
          2 - 4(5p + 1)
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button onClick={() => checkAnswer("A")} className={`p-4 rounded-xl border-2 transition-all flex items-center justify-between ${selected === "A" ? "bg-purple-50 border-purple-500" : "border-slate-200 hover:border-purple-200"}`}>
            <span className="font-mono text-lg">-20p - 2</span>
            {selected === "A" && <CheckCircle size={20} className="text-purple-600" />}
          </button>
          
          <button onClick={() => checkAnswer("B")} className={`p-4 rounded-xl border-2 transition-all flex items-center justify-between ${selected === "B" ? "bg-purple-50 border-purple-500" : "border-slate-200 hover:border-purple-200"}`}>
            <span className="font-mono text-lg">-5p - 4</span>
            {selected === "B" && <CheckCircle size={20} className="text-purple-600" />}
          </button>

          <button onClick={() => checkAnswer("C")} className={`p-4 rounded-xl border-2 transition-all flex items-center justify-between ${selected === "C" ? "bg-purple-50 border-purple-500" : "border-slate-200 hover:border-purple-200"}`}>
            <span className="font-mono text-lg">-20p + 2</span>
            {selected === "C" && <CheckCircle size={20} className="text-purple-600" />}
          </button>

          <button onClick={() => checkAnswer("D")} className={`p-4 rounded-xl border-2 transition-all flex items-center justify-between ${selected === "D" ? "bg-purple-50 border-purple-500" : "border-slate-200 hover:border-purple-200"}`}>
            <span className="font-mono text-lg">-5p + 4</span>
            {selected === "D" && <CheckCircle size={20} className="text-purple-600" />}
          </button>
        </div>

        {isCorrect && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 font-bold text-lg mt-4">
            Correct!
            <br/>Distribute -4: 2 - 20p - 4
            <br/>Combine terms: -20p - 2
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
