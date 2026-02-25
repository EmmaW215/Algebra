import { motion } from "motion/react";
import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function Scene2Expressions({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [value, setValue] = useState<number | null>(null);

  const numbers = [2, 5, 10, 7];

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-slate-800"
      >
        What is an Expression?
      </motion.h2>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-lg text-slate-600 max-w-md"
      >
        An expression combines variables and numbers. It's like a phrase.
        Here is the expression <span className="font-mono font-bold text-emerald-600">x + 5</span>.
      </motion.p>

      <div className="flex items-center justify-center space-x-8 min-h-[200px]">
        {/* The Variable Box */}
        <div className="relative">
          <motion.div
            className="w-32 h-32 border-4 border-indigo-500 rounded-xl flex items-center justify-center bg-indigo-50 shadow-lg"
            layout
          >
            {value === null ? (
              <span className="text-6xl font-mono text-indigo-300">x</span>
            ) : (
              <motion.span 
                key={value}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-5xl font-bold text-indigo-700"
              >
                {value}
              </motion.span>
            )}
          </motion.div>
          <div className="absolute -bottom-8 left-0 right-0 text-center font-mono text-indigo-600 font-bold">
            Variable x
          </div>
        </div>

        {/* The Operation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="text-6xl font-bold text-slate-400"
        >
          +
        </motion.div>

        {/* The Constant */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="w-32 h-32 border-4 border-emerald-500 rounded-xl flex items-center justify-center bg-emerald-50 shadow-lg"
        >
          <span className="text-6xl font-bold text-emerald-700">5</span>
        </motion.div>
      </div>

      {/* Number Options */}
      <div className="flex flex-col space-y-4">
        <p className="text-sm text-slate-500 font-medium">Set x to evaluate the expression:</p>
        <div className="flex space-x-4">
          {numbers.map((num) => (
            <motion.button
              key={num}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setValue(num)}
              className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-md transition-colors
                ${value === num 
                  ? "bg-indigo-600 text-white" 
                  : "bg-white text-slate-700 hover:bg-indigo-50 border border-slate-200"
                }`}
            >
              {num}
            </motion.button>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: value !== null ? 1 : 0 }}
        className="h-24 flex flex-col items-center justify-center space-y-2"
      >
        {value !== null && (
          <>
            <p className="text-xl font-medium text-slate-800">
              If <span className="font-mono text-indigo-600">x = {value}</span>, then:
            </p>
            <motion.div 
              key={value}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-4xl font-bold text-slate-900 bg-slate-100 px-6 py-2 rounded-lg shadow-inner"
            >
              {value} + 5 = <span className="text-emerald-600">{value + 5}</span>
            </motion.div>
          </>
        )}
      </motion.div>

      <div className="flex space-x-4">
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
          <span>Next: Equations</span>
          <ArrowRight size={18} />
        </motion.button>
      </div>
    </div>
  );
}
