import { motion } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Scene13InterpretingGraphExample({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [step, setStep] = useState(0);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState<string | null>(null);

  // Graph: 
  // x=0 to 3: y decreases (slope -1)
  // x=3 to 5: y increases (slope 3)
  
  // Q1: Slope between x=0 and x=3? (-1)
  // Q2: Slope between x=3 and x=5? (3)

  const checkAnswer = () => {
    if (step === 0) {
      if (answer === "-1") {
        setFeedback("Correct!");
        setTimeout(() => {
          setStep(1);
          setAnswer("");
          setFeedback(null);
        }, 1000);
      } else {
        setFeedback("Try again. Change in y / Change in x.");
      }
    } else {
      if (answer === "3") {
        setFeedback("Correct!");
        setTimeout(() => {
          onNext();
        }, 1000);
      } else {
        setFeedback("Try again.");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Interpreting Graphs</h2>
      
      <div className="flex flex-col md:flex-row gap-8 items-center w-full">
        {/* Graph Visualization */}
        <div className="relative w-64 h-64 bg-white border-2 border-slate-300 rounded-lg">
          {/* Grid lines */}
          <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 pointer-events-none">
            {Array.from({ length: 64 }).map((_, i) => (
              <div key={i} className="border border-slate-100"></div>
            ))}
          </div>
          
          {/* Axes */}
          <div className="absolute left-8 bottom-8 w-[calc(100%-32px)] h-0.5 bg-slate-800"></div>
          <div className="absolute left-8 bottom-8 w-0.5 h-[calc(100%-32px)] bg-slate-800"></div>

          {/* Line Segments */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 256 256">
            {/* Scale: 32px per unit. Origin at (32, 224). */}
            {/* (0, 4) -> (32, 224 - 4*32) = (32, 96) */}
            {/* (3, 1) -> (32 + 3*32, 224 - 1*32) = (128, 192) */}
            {/* (5, 7) -> (32 + 5*32, 224 - 7*32) = (192, 0) - wait, too high. Let's adjust scale. */}
            {/* Let's say 1 unit = 20px. Origin (20, 236). */}
            {/* (0,4) -> (20, 236-80) = (20, 156) */}
            {/* (3,1) -> (20+60, 236-20) = (80, 216) */}
            {/* (5,7) -> (20+100, 236-140) = (120, 96) */}
            <line x1="32" y1="96" x2="128" y2="192" stroke="#3b82f6" strokeWidth="3" />
            <line x1="128" y1="192" x2="192" y2="0" stroke="#ef4444" strokeWidth="3" />
            
            {/* Points */}
            <circle cx="32" cy="96" r="4" fill="#3b82f6" />
            <circle cx="128" cy="192" r="4" fill="#3b82f6" />
            <circle cx="192" cy="0" r="4" fill="#ef4444" />
          </svg>
          
          <div className="absolute bottom-0 left-8 translate-y-full pt-2 text-xs">0</div>
          <div className="absolute bottom-0 left-[128px] translate-y-full pt-2 text-xs">3</div>
          <div className="absolute bottom-0 left-[192px] translate-y-full pt-2 text-xs">5</div>
        </div>

        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
          {step === 0 ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <p className="text-lg font-bold text-blue-600">Blue Segment (x = 0 to 3)</p>
              <p>What is the slope?</p>
              <div className="flex items-center justify-center gap-2">
                <input 
                  type="number" 
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  className="w-20 border-b-2 border-blue-500 text-center focus:outline-none"
                  placeholder="?"
                />
              </div>
              <button onClick={checkAnswer} className="px-6 py-2 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700">Check</button>
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <p className="text-lg font-bold text-red-600">Red Segment (x = 3 to 5)</p>
              <p>What is the slope?</p>
              <div className="flex items-center justify-center gap-2">
                <input 
                  type="number" 
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  className="w-20 border-b-2 border-red-500 text-center focus:outline-none"
                  placeholder="?"
                />
              </div>
              <button onClick={checkAnswer} className="px-6 py-2 bg-red-600 text-white rounded-full font-bold hover:bg-red-700">Check</button>
            </motion.div>
          )}

          {feedback && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`font-bold ${feedback === "Correct!" ? "text-green-600" : "text-red-500"}`}>
              {feedback}
            </motion.p>
          )}
        </div>
      </div>

      <div className="flex space-x-4 mt-auto w-full justify-between items-center pt-8 border-t border-slate-100">
        <button onClick={onPrev} className="flex items-center space-x-2 px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-full font-medium shadow-sm hover:bg-slate-50 transition-colors">
          <ArrowLeft size={18} /> <span>Back</span>
        </button>
        <button onClick={onNext} className="flex items-center space-x-2 px-6 py-3 bg-slate-800 text-white rounded-full font-medium shadow-lg hover:bg-slate-900 transition-colors">
          <span>Next Lesson</span> <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
