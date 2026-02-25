import { motion } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle, XCircle } from "lucide-react";

export default function Scene3Equations({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [value, setValue] = useState<number | null>(null);

  const numbers = [2, 5, 10, 7];
  const target = 10;
  const expression = "x + 5";

  const isCorrect = value !== null && value + 5 === target;
  const isTooSmall = value !== null && value + 5 < target;
  const isTooBig = value !== null && value + 5 > target;

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-slate-800"
      >
        What is an Equation?
      </motion.h2>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-lg text-slate-600 max-w-md"
      >
        An equation says two expressions are equal.
        Find the value of <span className="font-mono font-bold text-indigo-600">x</span> that makes this true:
        <br />
        <span className="font-mono text-2xl font-bold text-slate-900 bg-yellow-100 px-2 rounded mt-2 inline-block">x + 5 = 10</span>
      </motion.p>

      <div className="flex items-center justify-center space-x-12 min-h-[250px] relative">
        {/* Balance Scale Visualization */}
        <div className="relative w-64 h-40 border-b-4 border-slate-800 flex justify-center items-end">
          {/* Fulcrum */}
          <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[40px] border-b-slate-800 absolute bottom-0 left-1/2 -translate-x-1/2"></div>
          
          {/* Beam */}
          <motion.div 
            className="absolute top-0 w-full h-2 bg-slate-800 rounded-full origin-center"
            animate={{ 
              rotate: isTooSmall ? -15 : isTooBig ? 15 : 0 
            }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          >
            {/* Left Pan (Expression) */}
            <motion.div 
              className="absolute left-0 top-2 w-24 h-24 border-2 border-slate-400 rounded-b-full bg-slate-100 flex flex-col items-center justify-center shadow-inner origin-top"
              animate={{ 
                rotate: isTooSmall ? 15 : isTooBig ? -15 : 0 
              }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
            >
              <span className="text-sm font-bold text-slate-500 mb-1">x + 5</span>
              <div className="flex items-center space-x-1">
                <div className="w-8 h-8 bg-indigo-100 border-2 border-indigo-500 rounded flex items-center justify-center text-indigo-700 font-bold">
                  {value ?? "?"}
                </div>
                <span className="font-bold text-slate-400">+</span>
                <div className="w-8 h-8 bg-emerald-100 border-2 border-emerald-500 rounded flex items-center justify-center text-emerald-700 font-bold">
                  5
                </div>
              </div>
            </motion.div>

            {/* Right Pan (Target) */}
            <motion.div 
              className="absolute right-0 top-2 w-24 h-24 border-2 border-slate-400 rounded-b-full bg-slate-100 flex flex-col items-center justify-center shadow-inner origin-top"
              animate={{ 
                rotate: isTooSmall ? 15 : isTooBig ? -15 : 0 
              }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
            >
              <span className="text-sm font-bold text-slate-500 mb-1">Target</span>
              <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                10
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Number Options */}
      <div className="flex flex-col space-y-4">
        <p className="text-sm text-slate-500 font-medium">Solve for x:</p>
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
          <motion.div 
            key={value}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg shadow-md ${
              isCorrect ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
            }`}
          >
            {isCorrect ? <CheckCircle size={24} /> : <XCircle size={24} />}
            <span className="text-lg font-bold">
              {isCorrect 
                ? "Correct! The equation is balanced." 
                : `Incorrect. ${value} + 5 is ${value + 5}, not 10.`}
            </span>
          </motion.div>
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
          <span>Next: Testing Solutions</span>
          <ArrowRight size={18} />
        </motion.button>
      </div>
    </div>
  );
}
