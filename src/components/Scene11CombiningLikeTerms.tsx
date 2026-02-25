import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight, User, Grape } from "lucide-react";

export default function Scene11CombiningLikeTerms({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [step, setStep] = useState(0);

  const steps = [
    {
      id: "chuck",
      title: "Combining Objects",
      content: (
        <div className="space-y-6">
          <p className="text-lg">If I have <strong>2 Chucks</strong> and I add <strong>3 Chucks</strong>...</p>
          <div className="flex items-center justify-center space-x-4 text-4xl">
            <div className="flex space-x-1 bg-orange-100 p-2 rounded-xl">
              <span role="img" aria-label="chuck">🤠</span>
              <span role="img" aria-label="chuck">🤠</span>
            </div>
            <span>+</span>
            <div className="flex space-x-1 bg-orange-100 p-2 rounded-xl">
              <span role="img" aria-label="chuck">🤠</span>
              <span role="img" aria-label="chuck">🤠</span>
              <span role="img" aria-label="chuck">🤠</span>
            </div>
            <span>=</span>
            <div className="flex space-x-1 bg-orange-200 p-2 rounded-xl border-2 border-orange-400">
              <span role="img" aria-label="chuck">🤠</span>
              <span role="img" aria-label="chuck">🤠</span>
              <span role="img" aria-label="chuck">🤠</span>
              <span role="img" aria-label="chuck">🤠</span>
              <span role="img" aria-label="chuck">🤠</span>
            </div>
          </div>
          <p className="text-2xl font-bold text-orange-600">5 Chucks</p>
        </div>
      )
    },
    {
      id: "vars",
      title: "Abstracting to Variables",
      content: (
        <div className="space-y-6">
          <p className="text-lg">In algebra, we use variables like <span className="font-mono font-bold text-indigo-600">x</span>.</p>
          <div className="flex items-center justify-center space-x-4 text-3xl font-mono">
            <div className="bg-indigo-50 p-4 rounded-xl">2x</div>
            <span>+</span>
            <div className="bg-indigo-50 p-4 rounded-xl">3x</div>
            <span>=</span>
            <div className="bg-indigo-100 p-4 rounded-xl border-2 border-indigo-400 font-bold text-indigo-700">5x</div>
          </div>
          <p className="text-slate-600">We just add the <strong>coefficients</strong> (2 + 3).</p>
        </div>
      )
    },
    {
      id: "mixed",
      title: "Different Terms",
      content: (
        <div className="space-y-6">
          <p className="text-lg">What if we add different things? <br/>2 Chucks + 3 Chucks + 7 Plums + 2 Plums</p>
          
          <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
            <div className="bg-orange-50 p-4 rounded-xl border border-orange-200">
              <div className="text-sm text-orange-800 mb-2 font-bold">Chucks</div>
              <div className="flex flex-wrap justify-center gap-1 text-2xl">
                <span>🤠🤠</span> <span>+</span> <span>🤠🤠🤠</span>
              </div>
              <div className="mt-2 font-bold text-orange-600">= 5 Chucks</div>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
              <div className="text-sm text-purple-800 mb-2 font-bold">Plums</div>
              <div className="flex flex-wrap justify-center gap-1 text-2xl">
                <span>🍑x7</span> <span>+</span> <span>🍑x2</span>
              </div>
              <div className="mt-2 font-bold text-purple-600">= 9 Plums</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "algebra_mixed",
      title: "Algebraic Terms",
      content: (
        <div className="space-y-6">
          <p className="text-lg">Simplify: <span className="font-mono">7y + 2x + 3x + 2y</span></p>
          
          <div className="flex flex-col space-y-4 items-center">
            <div className="flex space-x-2 font-mono text-2xl">
              <motion.div 
                initial={{ y: 0 }} animate={{ y: [0, -10, 0] }} transition={{ delay: 0.5 }}
                className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded"
              >
                2x + 3x
              </motion.div>
              <span>+</span>
              <motion.div 
                initial={{ y: 0 }} animate={{ y: [0, -10, 0] }} transition={{ delay: 1.0 }}
                className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded"
              >
                7y + 2y
              </motion.div>
            </div>
            
            <div className="text-3xl font-bold">=</div>
            
            <div className="flex space-x-4 font-mono text-3xl font-bold">
              <span className="text-indigo-600">5x</span>
              <span>+</span>
              <span className="text-emerald-600">9y</span>
            </div>
          </div>
          <p className="text-slate-600 text-sm">We can only combine <strong>like terms</strong> (same variable).</p>
        </div>
      )
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-6 w-full max-w-4xl mx-auto">
      <motion.div
        key={step}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="w-full"
      >
        <h2 className="text-3xl font-bold text-slate-800 mb-8">{steps[step].title}</h2>
        {steps[step].content}
      </motion.div>

      <div className="flex space-x-4 mt-auto w-full justify-between items-center pt-8 border-t border-slate-100">
        <button
          onClick={() => step > 0 ? setStep(s => s - 1) : onPrev()}
          className="flex items-center space-x-2 px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-full font-medium shadow-sm hover:bg-slate-50 transition-colors"
        >
          <ArrowLeft size={18} />
          <span>Back</span>
        </button>

        <button
          onClick={() => step < steps.length - 1 ? setStep(s => s + 1) : onNext()}
          className="flex items-center space-x-2 px-6 py-3 bg-slate-900 text-white rounded-full font-medium shadow-lg hover:bg-slate-800 transition-colors"
        >
          <span>{step < steps.length - 1 ? "Next Step" : "Next Lesson"}</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
