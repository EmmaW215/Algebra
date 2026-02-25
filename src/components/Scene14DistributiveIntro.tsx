import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Scene14DistributiveIntro({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: "Factoring Numbers",
      content: (
        <div className="space-y-6">
          <p className="text-lg">We can break a number into its factors.</p>
          <div className="flex items-center justify-center space-x-4 text-4xl font-mono">
            <div className="bg-slate-100 p-4 rounded-xl">12</div>
            <span>=</span>
            <div className="bg-indigo-50 p-4 rounded-xl border-2 border-indigo-400 text-indigo-700">2 × 6</div>
          </div>
          <p className="text-slate-600">2 and 6 are factors of 12.</p>
        </div>
      )
    },
    {
      title: "Factoring Expressions",
      content: (
        <div className="space-y-6">
          <p className="text-lg">We can do the same with algebraic expressions.</p>
          <div className="flex flex-col items-center space-y-4">
            <div className="text-3xl font-mono font-bold bg-slate-50 p-4 rounded-xl">2 + 4x</div>
            <ArrowRight className="rotate-90 text-slate-400" />
            <div className="flex items-center space-x-2 text-2xl font-mono">
              <span className="text-indigo-600 font-bold">2</span>(1 + 2x)
            </div>
          </div>
          <p className="text-slate-600">We "factored out" the 2. This is the reverse of the distributive property!</p>
        </div>
      )
    },
    {
      title: "Another Example",
      content: (
        <div className="space-y-6">
          <p className="text-lg">Factor out 6 from <span className="font-mono font-bold">6x + 30</span>.</p>
          <div className="flex flex-col items-center space-y-4">
            <div className="text-3xl font-mono font-bold bg-slate-50 p-4 rounded-xl">6x + 30</div>
            <div className="text-slate-400 text-sm">6x = 6·x, 30 = 6·5</div>
            <ArrowRight className="rotate-90 text-slate-400" />
            <div className="flex items-center space-x-2 text-2xl font-mono">
              <span className="text-indigo-600 font-bold">6</span>(x + 5)
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Abstract Factoring",
      content: (
        <div className="space-y-6">
          <p className="text-lg">Factor out <span className="font-mono font-bold">a</span> from <span className="font-mono font-bold">ax + ay</span>.</p>
          <div className="flex flex-col items-center space-y-4">
            <div className="text-3xl font-mono font-bold bg-slate-50 p-4 rounded-xl">ax + ay</div>
            <ArrowRight className="rotate-90 text-slate-400" />
            <div className="flex items-center space-x-2 text-2xl font-mono">
              <span className="text-purple-600 font-bold">a</span>(x + y)
            </div>
          </div>
          <p className="text-slate-600">Both terms share a factor of 'a'.</p>
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
