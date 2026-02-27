import { motion } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Scene3IntroCubeRoots({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [answer, setAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  // cbrt(8) = 2

  const checkAnswer = () => {
    if (answer === "2") {
      setIsCorrect(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Intro to Cube Roots</h2>
      
      <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* Visual Cube */}
        <div className="relative w-32 h-32">
          {/* Front Face */}
          <div className="absolute inset-0 bg-blue-200 border-2 border-blue-400 grid grid-cols-2 grid-rows-2 z-10">
            <div className="border border-blue-300/50"></div><div className="border border-blue-300/50"></div>
            <div className="border border-blue-300/50"></div><div className="border border-blue-300/50"></div>
          </div>
          {/* Top Face */}
          <div className="absolute -top-8 left-4 w-32 h-8 bg-blue-300 border-2 border-blue-400 skew-x-[-45deg] origin-bottom-left grid grid-cols-2">
             <div className="border border-blue-400/30"></div><div className="border border-blue-400/30"></div>
          </div>
          {/* Side Face */}
          <div className="absolute top-0 -right-8 w-8 h-32 bg-blue-400 border-2 border-blue-500 skew-y-[-45deg] origin-top-left grid grid-rows-2">
             <div className="border border-blue-500/30"></div><div className="border border-blue-500/30"></div>
          </div>
          
          <div className="absolute -bottom-8 w-full text-center font-bold text-blue-600">Volume = 8</div>
        </div>

        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
          <p className="text-xl text-slate-600">
            Finding <span className="font-mono font-bold">∛8</span> is like finding the side length of a cube with volume 8.
          </p>
          
          <div className="flex items-center justify-center gap-4 text-2xl font-bold">
            <span>∛8 = </span>
            <input 
              type="number" 
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="w-20 border-b-2 border-blue-500 text-center focus:outline-none"
              placeholder="?"
            />
          </div>

          <button onClick={checkAnswer} className="px-6 py-2 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700">Check</button>
          
          {isCorrect && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 font-bold">
              Correct! 2 × 2 × 2 = 8.
            </motion.p>
          )}
        </div>
      </div>

      <div className="flex space-x-4 mt-auto w-full justify-between items-center pt-8 border-t border-slate-100">
        <button onClick={onPrev} className="flex items-center space-x-2 px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-full font-medium shadow-sm hover:bg-slate-50 transition-colors">
          <ArrowLeft size={18} /> <span>Back</span>
        </button>
        <button onClick={onNext} disabled={!isCorrect} className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium shadow-lg transition-colors ${!isCorrect ? "bg-slate-200 text-slate-400" : "bg-blue-600 text-white hover:bg-blue-700"}`}>
          <span>Next Lesson</span> <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
