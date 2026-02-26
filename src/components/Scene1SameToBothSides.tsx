import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowRight, Scale } from "lucide-react";

export default function Scene1SameToBothSides({ onNext }: { onNext: () => void }) {
  const [step, setStep] = useState(0);

  // Steps:
  // 0: Initial state (Scale balanced, Mystery + 3 = 10)
  // 1: User removes 3 from left (Scale unbalanced? No, must remove from both)
  // 2: User removes 3 from both (Scale balanced, Mystery = 7)

  const handleRemove = () => {
    setStep(1);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Same Thing to Both Sides</h2>
      
      <div className="relative w-full max-w-2xl h-64 bg-slate-50 rounded-xl border-b-4 border-slate-300 flex items-end justify-center pb-4 overflow-hidden">
        {/* Scale Base */}
        <div className="absolute bottom-0 w-4 h-32 bg-slate-400 rounded-t-lg"></div>
        <div className="absolute bottom-32 w-full h-2 bg-slate-400"></div>
        
        {/* Left Pan */}
        <motion.div 
          className="absolute left-1/4 bottom-16 w-32 h-32 flex flex-col items-center justify-end"
          animate={{ y: step === 0 ? 0 : 0 }} // Always balanced if we do it right
        >
          <div className="w-full h-2 bg-slate-600 mb-1"></div>
          <div className="w-2 h-16 bg-slate-400"></div>
          <div className="w-32 h-4 bg-slate-600 rounded-b-full"></div>
          
          {/* Objects on Left */}
          <div className="absolute bottom-8 flex items-end space-x-1">
            <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-2xl shadow-md">
              ?
            </div>
            <AnimatePresence>
              {step === 0 && (
                <motion.div 
                  initial={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0, y: -50 }}
                  className="flex space-x-1"
                >
                  <div className="w-8 h-8 bg-amber-400 rounded border border-amber-600 shadow-sm"></div>
                  <div className="w-8 h-8 bg-amber-400 rounded border border-amber-600 shadow-sm"></div>
                  <div className="w-8 h-8 bg-amber-400 rounded border border-amber-600 shadow-sm"></div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Right Pan */}
        <motion.div 
          className="absolute right-1/4 bottom-16 w-32 h-32 flex flex-col items-center justify-end"
        >
          <div className="w-full h-2 bg-slate-600 mb-1"></div>
          <div className="w-2 h-16 bg-slate-400"></div>
          <div className="w-32 h-4 bg-slate-600 rounded-b-full"></div>

          {/* Objects on Right */}
          <div className="absolute bottom-8 flex flex-wrap justify-center w-32 gap-1">
             {/* 7 permanent blocks */}
             {Array.from({ length: 7 }).map((_, i) => (
                <div key={`perm-${i}`} className="w-8 h-8 bg-amber-400 rounded border border-amber-600 shadow-sm"></div>
             ))}
             {/* 3 removable blocks */}
             <AnimatePresence>
              {step === 0 && (
                 Array.from({ length: 3 }).map((_, i) => (
                  <motion.div 
                    key={`rem-${i}`}
                    initial={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0, y: -50 }}
                    className="w-8 h-8 bg-amber-400 rounded border border-amber-600 shadow-sm"
                  ></motion.div>
                 ))
              )}
             </AnimatePresence>
          </div>
        </motion.div>
      </div>

      <div className="space-y-4 max-w-lg">
        <p className="text-lg text-slate-600">
          {step === 0 
            ? "We have a mystery mass (?) and 3 kg weights on the left. On the right, we have 10 kg weights. The scale is balanced." 
            : "We removed 3 kg from BOTH sides. The scale remains balanced, and now we know the mystery mass!"}
        </p>
        
        {step === 0 ? (
          <button
            onClick={handleRemove}
            className="px-6 py-3 bg-indigo-600 text-white rounded-full font-bold shadow-lg hover:bg-indigo-700 transition-colors"
          >
            Remove 3kg from Both Sides
          </button>
        ) : (
          <div className="text-2xl font-bold text-blue-600">
            Mystery Mass = 7 kg
          </div>
        )}
      </div>

      {step === 1 && (
        <button
          onClick={onNext}
          className="mt-8 flex items-center space-x-2 px-6 py-3 bg-slate-900 text-white rounded-full font-bold shadow-lg hover:bg-slate-800 transition-colors"
        >
          <span>Next Concept</span>
          <ArrowRight size={18} />
        </button>
      )}
    </div>
  );
}
