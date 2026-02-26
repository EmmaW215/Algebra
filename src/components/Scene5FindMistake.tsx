import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle, XCircle } from "lucide-react";

export default function Scene5FindMistake({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [selectedStep, setSelectedStep] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);

  // Mistake is in Step 3.
  // 1/3k = 15 -> k should be 45, not 5.

  const checkAnswer = (step: string) => {
    setSelectedStep(step);
    if (step === "Step 3") {
      setIsCorrect(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-6 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Find the Mistake</h2>
      <p className="text-slate-600">Olga tried to solve this equation. Where did she go wrong?</p>
      
      <div className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-left space-y-4 font-mono text-lg">
        <div className="border-b pb-4 mb-4">
          1/4(1/3k + 9) = 6
        </div>
        
        <button 
          onClick={() => checkAnswer("Step 1")}
          className={`w-full text-left p-3 rounded-lg transition-colors flex justify-between items-center ${selectedStep === "Step 1" ? "bg-red-50 border border-red-200" : "hover:bg-slate-50"}`}
        >
          <span>1/3k + 9 = 24</span>
          <span className="text-sm font-sans text-slate-400 font-bold">Step 1</span>
        </button>

        <button 
          onClick={() => checkAnswer("Step 2")}
          className={`w-full text-left p-3 rounded-lg transition-colors flex justify-between items-center ${selectedStep === "Step 2" ? "bg-red-50 border border-red-200" : "hover:bg-slate-50"}`}
        >
          <span>1/3k = 15</span>
          <span className="text-sm font-sans text-slate-400 font-bold">Step 2</span>
        </button>

        <button 
          onClick={() => checkAnswer("Step 3")}
          className={`w-full text-left p-3 rounded-lg transition-colors flex justify-between items-center ${selectedStep === "Step 3" ? (isCorrect ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200") : "hover:bg-slate-50"}`}
        >
          <span>k = 5</span>
          <span className="text-sm font-sans text-slate-400 font-bold">Step 3</span>
        </button>

        <button 
          onClick={() => checkAnswer("No Mistake")}
          className={`w-full text-left p-3 rounded-lg transition-colors flex justify-between items-center ${selectedStep === "No Mistake" ? "bg-red-50 border border-red-200" : "hover:bg-slate-50"}`}
        >
          <span className="font-sans italic text-slate-500">Olga did not make a mistake</span>
        </button>
      </div>

      <AnimatePresence>
        {selectedStep && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-lg font-bold ${isCorrect ? "text-green-600" : "text-red-500"}`}
          >
            {isCorrect 
              ? "Correct! To isolate k, multiply by 3. k = 15 × 3 = 45." 
              : "That step looks okay. Check the math again!"}
          </motion.div>
        )}
      </AnimatePresence>

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
