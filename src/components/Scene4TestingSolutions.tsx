import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, RefreshCcw } from "lucide-react";

export default function Scene4TestingSolutions({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [selectedX, setSelectedX] = useState<number | null>(null);
  const [step, setStep] = useState<"initial" | "substituted" | "multiplied" | "final">("initial");

  const equation = {
    coeff: 3,
    constant: -4,
    target: 11,
  };
  
  // Candidates: 3, 5, 6
  // 3(3) - 4 = 9 - 4 = 5 != 11
  // 3(5) - 4 = 15 - 4 = 11 == 11 (Correct)
  // 3(6) - 4 = 18 - 4 = 14 != 11
  const candidates = [3, 5, 6];

  const handleSelect = (val: number) => {
    if (step !== "initial") return;
    setSelectedX(val);
    setStep("substituted");
    
    // Auto-advance steps for animation
    setTimeout(() => setStep("multiplied"), 1500);
    setTimeout(() => setStep("final"), 3000);
  };

  const reset = () => {
    setSelectedX(null);
    setStep("initial");
  };

  const isCorrect = selectedX !== null && (equation.coeff * selectedX + equation.constant === equation.target);

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-slate-800"
      >
        Testing Solutions
      </motion.h2>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-lg text-slate-600 max-w-md"
      >
        To solve an equation, we need to find the value that makes the statement <strong>true</strong>.
        <br/>
        Which value of <span className="font-mono font-bold text-indigo-600">x</span> is the solution?
      </motion.p>

      {/* Equation Display Area */}
      <div className="h-48 flex items-center justify-center">
        <div className="text-4xl font-mono font-bold text-slate-800 flex items-center space-x-4 bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
          
          {/* Left Side */}
          <div className="flex items-center space-x-2">
            {/* Coefficient */}
            <span>{equation.coeff}</span>

            {/* Variable / Substitution */}
            <div className="relative min-w-[1.5em] text-center">
              <AnimatePresence mode="wait">
                {step === "initial" ? (
                  <motion.span 
                    key="var"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-indigo-600"
                  >
                    x
                  </motion.span>
                ) : (
                  <motion.span 
                    key="val"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-indigo-600 inline-block bg-indigo-50 px-2 rounded border border-indigo-200"
                  >
                    ({selectedX})
                  </motion.span>
                )}
              </AnimatePresence>
            </div>

            {/* Constant */}
            <span>- 4</span>
          </div>

          <span>=</span>

          {/* Right Side (Target) */}
          <span>{equation.target}</span>
        </div>
      </div>

      {/* Step-by-step Evaluation */}
      <div className="h-32 w-full max-w-md">
        <AnimatePresence mode="wait">
          {step === "substituted" && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-xl text-slate-500"
            >
              Substitute <strong>{selectedX}</strong> for x...
            </motion.div>
          )}

          {step === "multiplied" && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col items-center space-y-2"
            >
              <div className="text-2xl font-mono text-slate-700">
                <span className="border-b-2 border-indigo-400 pb-1">{equation.coeff * selectedX!}</span> - 4 = {equation.target} ?
              </div>
              <p className="text-slate-500 text-sm">Multiply {equation.coeff} • {selectedX}</p>
            </motion.div>
          )}

          {step === "final" && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`flex flex-col items-center p-4 rounded-xl ${isCorrect ? "bg-green-50" : "bg-red-50"}`}
            >
              <div className="text-3xl font-mono font-bold mb-2 flex items-center space-x-3">
                <span className={isCorrect ? "text-green-700" : "text-red-700"}>
                  {equation.coeff * selectedX! - 4}
                </span>
                <span className="text-slate-400 text-xl">
                  {isCorrect ? "=" : "≠"}
                </span>
                <span className="text-slate-800">
                  {equation.target}
                </span>
              </div>
              
              <div className={`flex items-center space-x-2 font-bold ${isCorrect ? "text-green-600" : "text-red-600"}`}>
                {isCorrect ? <CheckCircle size={20} /> : <XCircle size={20} />}
                <span>{isCorrect ? "True! It is a solution." : "False. Not a solution."}</span>
              </div>

              {!isCorrect && (
                <button 
                  onClick={reset}
                  className="mt-4 flex items-center space-x-1 text-sm text-slate-500 hover:text-slate-800 underline"
                >
                  <RefreshCcw size={14} />
                  <span>Try another value</span>
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Candidate Selection */}
      <div className="flex flex-col space-y-4">
        <p className="text-sm text-slate-500 font-medium">Select a value to test:</p>
        <div className="flex space-x-6">
          {candidates.map((num) => (
            <motion.button
              key={num}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleSelect(num)}
              disabled={step !== "initial"}
              className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold shadow-md transition-all
                ${selectedX === num 
                  ? "bg-indigo-600 text-white ring-4 ring-indigo-200" 
                  : step === "initial"
                    ? "bg-white text-slate-700 hover:bg-indigo-50 border-2 border-slate-200"
                    : "bg-slate-100 text-slate-400 border-2 border-slate-100 cursor-not-allowed"
                }`}
            >
              {num}
            </motion.button>
          ))}
        </div>
      </div>

      <div className="flex space-x-4 mt-auto">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onPrev}
          className="flex items-center space-x-2 px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-full font-medium shadow-sm hover:bg-slate-50 transition-colors"
        >
          <ArrowLeft size={18} />
          <span>Back</span>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="flex items-center space-x-2 px-6 py-3 bg-slate-900 text-white rounded-full font-medium shadow-lg hover:bg-slate-800 transition-colors"
        >
          <span>Next: Practice Mode</span>
          <ArrowRight size={18} />
        </motion.button>
      </div>
    </div>
  );
}
