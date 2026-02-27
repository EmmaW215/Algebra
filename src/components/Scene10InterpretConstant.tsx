import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function Scene10InterpretConstant({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [step, setStep] = useState(0);

  // Step 0: Snow (d = 5h) -> 5 cm/hour
  // Step 1: Cupcakes (d = 2c) -> $2/cupcake

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Interpreting the Constant</h2>
      
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="snow"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6"
          >
            <h3 className="text-2xl font-bold text-blue-600">Snow Accumulation</h3>
            <p className="text-lg text-slate-600">
              The depth of snow <span className="font-bold">d</span> (cm) after <span className="font-bold">h</span> hours is given by:
            </p>
            <div className="text-4xl font-mono font-bold text-slate-800 bg-slate-100 p-4 rounded-lg">
              d = 5h
            </div>
            
            <div className="text-left space-y-4 bg-blue-50 p-6 rounded-xl border border-blue-100">
              <p className="font-bold text-blue-800">What does 5 mean?</p>
              <ul className="list-disc list-inside space-y-2 text-blue-900">
                <li>It snows <span className="font-bold">5 cm</span> per hour.</li>
                <li>In 1 hour, 5 cm accumulates.</li>
                <li>Constant of Proportionality = 5 cm/h</li>
              </ul>
            </div>

            <button
              onClick={() => setStep(1)}
              className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold shadow-lg hover:bg-blue-700 transition-colors"
            >
              Next Example
            </button>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            key="cupcakes"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6"
          >
            <h3 className="text-2xl font-bold text-pink-600">Cupcake Cost</h3>
            <p className="text-lg text-slate-600">
              The cost <span className="font-bold">d</span> (dollars) for <span className="font-bold">c</span> cupcakes is given by:
            </p>
            <div className="text-4xl font-mono font-bold text-slate-800 bg-slate-100 p-4 rounded-lg">
              d = 2c
            </div>
            
            <div className="text-left space-y-4 bg-pink-50 p-6 rounded-xl border border-pink-100">
              <p className="font-bold text-pink-800">What does 2 mean?</p>
              <ul className="list-disc list-inside space-y-2 text-pink-900">
                <li>Each cupcake costs <span className="font-bold">$2</span>.</li>
                <li>The price is $2 per cupcake.</li>
                <li>Constant of Proportionality = $2/cupcake</li>
              </ul>
            </div>
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
          disabled={step < 1}
          className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium shadow-lg transition-colors
            ${step < 1
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
