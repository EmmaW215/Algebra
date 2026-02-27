import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Scene9WhatIsAFunction({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<number | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  // Function:
  // If x is even -> x^2
  // If x is odd -> x + 5

  const processFunction = () => {
    const x = parseInt(input);
    if (isNaN(x)) return;

    setIsProcessing(true);
    setOutput(null);

    setTimeout(() => {
      if (x % 2 === 0) {
        setOutput(x * x);
      } else {
        setOutput(x + 5);
      }
      setIsProcessing(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">What is a Function?</h2>
      
      <div className="w-full max-w-3xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-left space-y-2">
          <h3 className="font-bold text-purple-600 text-xl mb-4">The Function Machine</h3>
          <p className="font-mono text-lg">Rule:</p>
          <ul className="list-disc list-inside font-mono text-slate-700 ml-4">
            <li>If input (<span className="font-bold">x</span>) is <span className="font-bold text-blue-600">EVEN</span>: Output = x²</li>
            <li>If input (<span className="font-bold">x</span>) is <span className="font-bold text-orange-600">ODD</span>: Output = x + 5</li>
          </ul>
        </div>

        <div className="flex items-center justify-center space-x-8 py-8">
          {/* Input */}
          <div className="flex flex-col items-center space-y-2">
            <span className="font-bold text-slate-500">Input (x)</span>
            <input
              type="number"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-20 p-3 border-2 border-slate-300 rounded-lg text-center font-mono text-xl focus:border-purple-500 focus:outline-none"
              placeholder="?"
            />
          </div>

          {/* Machine Animation */}
          <div className="relative">
            <motion.div
              animate={isProcessing ? { scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] } : {}}
              transition={{ repeat: isProcessing ? Infinity : 0, duration: 0.5 }}
              className="w-32 h-32 bg-purple-600 rounded-2xl flex items-center justify-center shadow-lg z-10 relative"
            >
              <span className="text-white font-bold text-2xl">f(x)</span>
            </motion.div>
            
            {/* Arrow In */}
            <motion.div 
              initial={{ x: -40, opacity: 0 }}
              animate={isProcessing ? { x: 0, opacity: 1 } : { x: -40, opacity: 0 }}
              className="absolute top-1/2 -left-12 -translate-y-1/2 text-purple-600"
            >
              <ArrowRight size={32} />
            </motion.div>

            {/* Arrow Out */}
            <motion.div 
              initial={{ x: 0, opacity: 0 }}
              animate={output !== null ? { x: 40, opacity: 1 } : { x: 0, opacity: 0 }}
              className="absolute top-1/2 -right-12 -translate-y-1/2 text-purple-600"
            >
              <ArrowRight size={32} />
            </motion.div>
          </div>

          {/* Output */}
          <div className="flex flex-col items-center space-y-2">
            <span className="font-bold text-slate-500">Output f(x)</span>
            <div className="w-20 h-14 border-2 border-dashed border-slate-300 rounded-lg flex items-center justify-center bg-slate-50">
              <AnimatePresence mode="wait">
                {output !== null && (
                  <motion.span
                    key={output}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="font-mono text-xl font-bold text-purple-700"
                  >
                    {output}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <button
          onClick={processFunction}
          disabled={!input || isProcessing}
          className={`px-8 py-3 rounded-full font-bold shadow-lg transition-colors
            ${!input || isProcessing ? "bg-slate-200 text-slate-400" : "bg-purple-600 text-white hover:bg-purple-700"}
          `}
        >
          {isProcessing ? "Processing..." : "Run Function"}
        </button>
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
          className="flex items-center space-x-2 px-6 py-3 bg-purple-600 text-white rounded-full font-medium shadow-lg hover:bg-purple-700 transition-colors"
        >
          <span>Next Lesson</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
