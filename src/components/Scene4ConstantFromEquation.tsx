import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function Scene4ConstantFromEquation({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [example, setExample] = useState(0);

  const examples = [
    { eq: "y = 5x", k: "5", desc: "Multiply x by 5 to get y" },
    { eq: "a = 2b", k: "2", desc: "Multiply b by 2 to get a" },
    { eq: "y = πx", k: "π", desc: "Multiply x by pi to get y" },
    { eq: "y = 0.5x", k: "0.5", desc: "Multiply x by 0.5 to get y" },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Constant of Proportionality from Equation</h2>
      
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 w-full max-w-2xl">
        <p className="text-xl text-slate-600 mb-8">
          In the equation <span className="font-mono font-bold text-slate-800">y = kx</span>, 
          <br/><span className="font-mono font-bold text-indigo-600">k</span> is the constant of proportionality.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {examples.map((ex, i) => (
            <button
              key={i}
              onClick={() => setExample(i)}
              className={`p-4 rounded-xl border-2 transition-all ${
                example === i 
                  ? "border-indigo-500 bg-indigo-50" 
                  : "border-slate-200 hover:border-indigo-200"
              }`}
            >
              <div className="font-mono text-xl font-bold text-slate-800">{ex.eq}</div>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={example}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-slate-50 p-6 rounded-xl border border-slate-200"
          >
            <div className="text-sm text-slate-500 mb-2">Constant of Proportionality</div>
            <div className="text-4xl font-mono font-bold text-indigo-600 mb-2">k = {examples[example].k}</div>
            <p className="text-slate-600">{examples[example].desc}</p>
          </motion.div>
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
          className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-full font-medium shadow-lg hover:bg-blue-700 transition-colors"
        >
          <span>Next Lesson</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
