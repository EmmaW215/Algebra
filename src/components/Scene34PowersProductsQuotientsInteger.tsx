import { motion } from "motion/react";
import { useState } from "react";
import { ArrowLeft, CheckCircle } from "lucide-react";

export default function Scene34PowersProductsQuotientsInteger({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);

  // (x^4 / 7^-8)^-7
  // = (x^4)^-7 / (7^-8)^-7
  // = x^-28 / 7^56
  // = 1 / (x^28 * 7^56) ? No, wait.
  // Let's re-read the problem from the prompt.
  // Problem: Select equivalent expression for (x^4 / 7^-8)^-7
  // A: x^28 / 7^-56
  // B: x^28 / 7^56 (Wait, x^-28...)
  // C: x^-28 * 7^-56
  // Let's solve it:
  // (x^4)^-7 = x^-28
  // (7^-8)^-7 = 7^56
  // So: x^-28 / 7^56
  // Which is equivalent to 1 / (x^28 * 7^56)
  // Or x^-28 * 7^-56 ? No, 1/7^56 is 7^-56.
  // So x^-28 * 7^-56 is correct.
  
  // Let's check the options provided in the prompt text:
  // A: x^28 / 7^-56
  // B: x^28 / 7^56
  // C: x^-28 * 7^-56
  
  // Wait, let's re-evaluate carefully.
  // Numerator: (x^4)^-7 = x^-28
  // Denominator: (7^-8)^-7 = 7^56
  // Result: x^-28 / 7^56
  // This can be written as x^-28 * 7^-56.
  // So C is correct.

  const checkAnswer = (id: string) => {
    setSelected(id);
    if (id === "C") {
      setIsCorrect(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Challenge: Powers of Quotients</h2>
      
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
        <p className="text-lg text-slate-600 font-bold">Select the equivalent expression.</p>
        
        <div className="text-4xl font-mono font-bold text-slate-800 py-4">
          (x⁴ / 7⁻⁸)⁻⁷
        </div>
        
        <div className="grid grid-cols-1 gap-4">
          <button onClick={() => checkAnswer("A")} className={`p-4 rounded-xl border-2 transition-all flex items-center justify-between ${selected === "A" ? "bg-purple-50 border-purple-500" : "border-slate-200 hover:border-purple-200"}`}>
            <span className="font-mono text-lg">x²⁸ / 7⁻⁵⁶</span>
            {selected === "A" && <CheckCircle size={20} className="text-purple-600" />}
          </button>
          
          <button onClick={() => checkAnswer("B")} className={`p-4 rounded-xl border-2 transition-all flex items-center justify-between ${selected === "B" ? "bg-purple-50 border-purple-500" : "border-slate-200 hover:border-purple-200"}`}>
            <span className="font-mono text-lg">x²⁸ / 7⁵⁶</span>
            {selected === "B" && <CheckCircle size={20} className="text-purple-600" />}
          </button>

          <button onClick={() => checkAnswer("C")} className={`p-4 rounded-xl border-2 transition-all flex items-center justify-between ${selected === "C" ? "bg-purple-50 border-purple-500" : "border-slate-200 hover:border-purple-200"}`}>
            <span className="font-mono text-lg">x⁻²⁸ · 7⁻⁵⁶</span>
            {selected === "C" && <CheckCircle size={20} className="text-purple-600" />}
          </button>
        </div>

        {isCorrect && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 font-bold text-lg mt-4">
            Correct!
            <br/>Numerator: (x⁴)⁻⁷ = x⁻²⁸
            <br/>Denominator: (7⁻⁸)⁻⁷ = 7⁵⁶
            <br/>Result: x⁻²⁸ / 7⁵⁶ = x⁻²⁸ · 7⁻⁵⁶
          </motion.div>
        )}
      </div>

      <div className="flex space-x-4 mt-auto w-full justify-between items-center pt-8 border-t border-slate-100">
        <button onClick={onPrev} className="flex items-center space-x-2 px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-full font-medium shadow-sm hover:bg-slate-50 transition-colors">
          <ArrowLeft size={18} /> <span>Back</span>
        </button>
        <button onClick={onNext} className="flex items-center space-x-2 px-6 py-3 bg-slate-800 text-white rounded-full font-medium shadow-lg hover:bg-slate-900 transition-colors">
          <span>Finish Unit</span> <CheckCircle size={18} />
        </button>
      </div>
    </div>
  );
}
