import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowRight, Scale } from "lucide-react";

export default function Scene2IntroTwoStep({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [step, setStep] = useState(0);

  // Steps:
  // 0: Initial state (3x + 2 = 14)
  // 1: Remove 2 from both sides (3x = 12)
  // 2: Divide by 3 (x = 4)

  const handleStep1 = () => setStep(1);
  const handleStep2 = () => setStep(2);

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Two-Step Equations</h2>
      
      <div className="relative w-full max-w-2xl h-64 bg-slate-50 rounded-xl border-b-4 border-slate-300 flex items-end justify-center pb-4 overflow-hidden">
        {/* Scale Base */}
        <div className="absolute bottom-0 w-4 h-32 bg-slate-400 rounded-t-lg"></div>
        <div className="absolute bottom-32 w-full h-2 bg-slate-400"></div>
        
        {/* Left Pan */}
        <motion.div 
          className="absolute left-1/4 bottom-16 w-32 h-32 flex flex-col items-center justify-end"
        >
          <div className="w-full h-2 bg-slate-600 mb-1"></div>
          <div className="w-2 h-16 bg-slate-400"></div>
          <div className="w-32 h-4 bg-slate-600 rounded-b-full"></div>
          
          {/* Objects on Left */}
          <div className="absolute bottom-8 flex items-end space-x-1">
            <AnimatePresence>
              {step < 2 ? (
                // 3 X's
                <div className="flex space-x-1">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md">x</div>
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md">x</div>
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md">x</div>
                </div>
              ) : (
                // 1 X left
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md">x</div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {step === 0 && (
                <motion.div 
                  initial={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0, y: -50 }}
                  className="flex space-x-1"
                >
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
          <div className="absolute bottom-8 flex flex-wrap justify-center w-32 gap-1 content-end">
             <AnimatePresence>
               {/* Always visible 4 blocks (final answer) */}
               {Array.from({ length: 4 }).map((_, i) => (
                  <div key={`perm-${i}`} className="w-8 h-8 bg-amber-400 rounded border border-amber-600 shadow-sm"></div>
               ))}
               
               {/* 8 blocks removed in step 2 (divide by 3) */}
               {step < 2 && Array.from({ length: 8 }).map((_, i) => (
                  <motion.div 
                    key={`div-${i}`}
                    initial={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0, y: -50 }}
                    className="w-8 h-8 bg-amber-400 rounded border border-amber-600 shadow-sm"
                  ></motion.div>
               ))}

               {/* 2 blocks removed in step 1 (subtract 2) */}
               {step === 0 && Array.from({ length: 2 }).map((_, i) => (
                  <motion.div 
                    key={`sub-${i}`}
                    initial={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0, y: -50 }}
                    className="w-8 h-8 bg-amber-400 rounded border border-amber-600 shadow-sm"
                  ></motion.div>
               ))}
             </AnimatePresence>
          </div>
        </motion.div>
      </div>

      <div className="space-y-4 max-w-lg">
        <div className="text-2xl font-mono font-bold text-slate-800 bg-slate-100 px-4 py-2 rounded-lg inline-block">
          {step === 0 && "3x + 2 = 14"}
          {step === 1 && "3x = 12"}
          {step === 2 && "x = 4"}
        </div>

        <p className="text-lg text-slate-600">
          {step === 0 && "First, let's isolate the x terms. Remove the 2 extra blocks."}
          {step === 1 && "Now we have 3x balanced with 12 blocks. Divide both sides into 3 groups."}
          {step === 2 && "Each x is balanced with 4 blocks!"}
        </p>
        
        {step === 0 && (
          <button
            onClick={handleStep1}
            className="px-6 py-3 bg-indigo-600 text-white rounded-full font-bold shadow-lg hover:bg-indigo-700 transition-colors"
          >
            Subtract 2 from Both Sides
          </button>
        )}

        {step === 1 && (
          <button
            onClick={handleStep2}
            className="px-6 py-3 bg-indigo-600 text-white rounded-full font-bold shadow-lg hover:bg-indigo-700 transition-colors"
          >
            Divide Both Sides by 3
          </button>
        )}
      </div>

      {step === 2 && (
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
