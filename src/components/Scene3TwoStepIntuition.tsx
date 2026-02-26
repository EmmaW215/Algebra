import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function Scene3TwoStepIntuition({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [step, setStep] = useState(0);

  // Equation: 3x + 5 = 17
  // Step 0: Show equation and objects
  // Step 1: Subtract 5
  // Step 2: Divide by 3

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Visualizing Equations</h2>
      
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
        <div className="text-3xl font-mono font-bold mb-8">
          <span className="text-indigo-600">3x</span> + <span className="text-amber-500">5</span> = <span className="text-slate-700">17</span>
        </div>

        <div className="flex items-center justify-center space-x-8 mb-8">
          {/* Left Side */}
          <div className="flex flex-col items-center space-y-2">
            <div className="flex space-x-2">
              <div className="w-12 h-12 bg-indigo-100 border-2 border-indigo-500 rounded-lg flex items-center justify-center text-indigo-700 font-bold text-xl">x</div>
              <div className="w-12 h-12 bg-indigo-100 border-2 border-indigo-500 rounded-lg flex items-center justify-center text-indigo-700 font-bold text-xl">x</div>
              <div className="w-12 h-12 bg-indigo-100 border-2 border-indigo-500 rounded-lg flex items-center justify-center text-indigo-700 font-bold text-xl">x</div>
            </div>
            <AnimatePresence>
              {step === 0 && (
                <motion.div 
                  initial={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex space-x-1"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="w-8 h-8 bg-amber-100 border-2 border-amber-400 rounded-full flex items-center justify-center text-amber-600 font-bold text-xs">1</div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="text-4xl text-slate-300">=</div>

          {/* Right Side */}
          <div className="flex flex-wrap justify-center w-48 gap-1">
            {/* Permanent 12 */}
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={`perm-${i}`} className="w-8 h-8 bg-slate-100 border-2 border-slate-300 rounded-full flex items-center justify-center text-slate-500 font-bold text-xs">1</div>
            ))}
            {/* Removable 5 */}
            <AnimatePresence>
              {step === 0 && (
                Array.from({ length: 5 }).map((_, i) => (
                  <motion.div 
                    key={`rem-${i}`}
                    initial={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className="w-8 h-8 bg-slate-100 border-2 border-slate-300 rounded-full flex items-center justify-center text-slate-500 font-bold text-xs"
                  >1</motion.div>
                ))
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="space-y-4">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="step0"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <p className="text-lg text-slate-600 mb-4">We want to isolate the <span className="font-bold text-indigo-600">3x</span>. Let's remove the 5 ones.</p>
                <button
                  onClick={() => setStep(1)}
                  className="px-6 py-3 bg-amber-500 text-white rounded-full font-bold shadow-lg hover:bg-amber-600 transition-colors"
                >
                  Subtract 5 from Both Sides
                </button>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <p className="text-lg text-slate-600 mb-4">Now we have <span className="font-bold text-indigo-600">3x = 12</span>. Let's find what one x is.</p>
                <button
                  onClick={() => setStep(2)}
                  className="px-6 py-3 bg-indigo-600 text-white rounded-full font-bold shadow-lg hover:bg-indigo-700 transition-colors"
                >
                  Divide by 3
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <p className="text-2xl font-bold text-indigo-600 mb-4">x = 4</p>
                <p className="text-slate-500">Each x corresponds to 4 ones.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
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
          disabled={step < 2}
          className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium shadow-lg transition-colors
            ${step < 2
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
