import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight, RotateCw } from "lucide-react";

export default function Scene7InequalitiesIntro({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [step, setStep] = useState(0);

  // Steps:
  // 0: Intro (1 < 2)
  // 1: Multiply by -1 (-1 > -2) - Show flip
  // 2: Example (-0.5x <= 7.5)
  // 3: Solve (x >= -15)

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Inequalities & Negatives</h2>
      
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-8">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="step0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="space-y-6"
            >
              <p className="text-xl text-slate-600">We know that:</p>
              <div className="text-5xl font-mono font-bold text-indigo-600">
                1 &lt; 2
              </div>
              <p className="text-slate-500">One is less than two.</p>
              <button
                onClick={() => setStep(1)}
                className="px-6 py-3 bg-indigo-600 text-white rounded-full font-bold shadow-lg hover:bg-indigo-700 transition-colors"
              >
                Multiply both sides by -1
              </button>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="space-y-6"
            >
              <p className="text-xl text-slate-600">Now we have:</p>
              <div className="flex items-center justify-center space-x-4 text-5xl font-mono font-bold">
                <span className="text-red-500">-1</span>
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 180 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  className="text-slate-800"
                >
                  &lt;
                </motion.div>
                <span className="text-red-500">-2</span>
              </div>
              <p className="text-slate-500">Wait! -1 is GREATER than -2.</p>
              <div className="text-5xl font-mono font-bold text-indigo-600">
                -1 &gt; -2
              </div>
              <p className="text-lg font-bold text-slate-800 bg-yellow-100 p-4 rounded-lg inline-block">
                When multiplying or dividing by a negative, FLIP the sign!
              </p>
              <button
                onClick={() => setStep(2)}
                className="mt-4 px-6 py-3 bg-indigo-600 text-white rounded-full font-bold shadow-lg hover:bg-indigo-700 transition-colors"
              >
                Try an Equation
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="space-y-6"
            >
              <p className="text-xl text-slate-600">Solve for x:</p>
              <div className="text-4xl font-mono font-bold text-slate-800">
                -0.5x ≤ 7.5
              </div>
              <p className="text-slate-500">Divide by -0.5 (or multiply by -2)</p>
              <button
                onClick={() => setStep(3)}
                className="px-6 py-3 bg-indigo-600 text-white rounded-full font-bold shadow-lg hover:bg-indigo-700 transition-colors"
              >
                Solve & Flip
              </button>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="space-y-6"
            >
              <div className="text-4xl font-mono font-bold text-indigo-600">
                x ≥ -15
              </div>
              <p className="text-slate-600">
                The ≤ became ≥ because we divided by a negative number.
              </p>
              <div className="w-full h-16 bg-slate-100 rounded-lg relative flex items-center px-4">
                <div className="w-full h-1 bg-slate-300 absolute"></div>
                <div className="w-4 h-4 bg-indigo-600 rounded-full absolute left-1/4 z-10"></div>
                <div className="absolute left-1/4 top-8 font-mono text-sm font-bold">-15</div>
                <div className="h-1 bg-indigo-500 absolute left-1/4 right-4 z-0"></div>
                <ArrowRight className="absolute right-2 text-indigo-500" size={16} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
          disabled={step < 3}
          className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium shadow-lg transition-colors
            ${step < 3
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
