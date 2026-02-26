import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight, RefreshCcw } from "lucide-react";

export default function Scene10IntroRatios({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [mode, setMode] = useState<"count" | "simplify" | "flip">("count");

  // 6 Apples, 9 Oranges
  const apples = Array(6).fill("🍎");
  const oranges = Array(9).fill("🍊");

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Introduction to Ratios</h2>
      
      <div className="w-full max-w-3xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 min-h-[400px] flex flex-col justify-between">
        
        {/* Visuals */}
        <div className="flex flex-col items-center space-y-6">
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-red-50 p-4 rounded-xl border border-red-100 w-full md:w-auto">
              <h3 className="text-red-800 font-bold mb-2">Apples</h3>
              <div className="grid grid-cols-3 gap-2 justify-items-center">
                {apples.map((emoji, i) => (
                  <motion.div 
                    key={`apple-${i}`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-4xl"
                  >
                    {emoji}
                  </motion.div>
                ))}
              </div>
              <p className="mt-2 font-mono font-bold text-xl text-red-600">{apples.length}</p>
            </div>

            <div className="bg-orange-50 p-4 rounded-xl border border-orange-100 w-full md:w-auto">
              <h3 className="text-orange-800 font-bold mb-2">Oranges</h3>
              <div className="grid grid-cols-3 gap-2 justify-items-center">
                {oranges.map((emoji, i) => (
                  <motion.div 
                    key={`orange-${i}`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-4xl"
                  >
                    {emoji}
                  </motion.div>
                ))}
              </div>
              <p className="mt-2 font-mono font-bold text-xl text-orange-600">{oranges.length}</p>
            </div>
          </div>

          {/* Explanation */}
          <AnimatePresence mode="wait">
            {mode === "count" && (
              <motion.div 
                key="count"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-xl text-slate-700"
              >
                <p>The ratio of <span className="font-bold text-red-600">Apples</span> to <span className="font-bold text-orange-500">Oranges</span> is:</p>
                <div className="text-4xl font-bold mt-2">6 : 9</div>
                <p className="text-slate-500 text-sm mt-1">(6 to 9)</p>
              </motion.div>
            )}

            {mode === "simplify" && (
              <motion.div 
                key="simplify"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-xl text-slate-700"
              >
                <p>Both numbers are divisible by 3.</p>
                <div className="flex items-center justify-center space-x-4 mt-2">
                  <div className="text-center">
                    <div className="text-sm text-slate-400">6 ÷ 3</div>
                    <div className="text-4xl font-bold text-red-600">2</div>
                  </div>
                  <div className="text-4xl font-bold text-slate-300">:</div>
                  <div className="text-center">
                    <div className="text-sm text-slate-400">9 ÷ 3</div>
                    <div className="text-4xl font-bold text-orange-500">3</div>
                  </div>
                </div>
                <p className="text-slate-500 text-sm mt-2">For every 2 apples, there are 3 oranges.</p>
              </motion.div>
            )}

            {mode === "flip" && (
              <motion.div 
                key="flip"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-xl text-slate-700"
              >
                <p>Order matters! Ratio of <span className="font-bold text-orange-500">Oranges</span> to <span className="font-bold text-red-600">Apples</span>:</p>
                <div className="text-4xl font-bold mt-2">9 : 6</div>
                <div className="text-2xl font-bold mt-1 text-slate-400">or 3 : 2</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex justify-center space-x-4 mt-8">
          <button
            onClick={() => setMode("count")}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${mode === "count" ? "bg-slate-800 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
          >
            Count
          </button>
          <button
            onClick={() => setMode("simplify")}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${mode === "simplify" ? "bg-slate-800 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
          >
            Simplify
          </button>
          <button
            onClick={() => setMode("flip")}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${mode === "flip" ? "bg-slate-800 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
          >
            Flip Order
          </button>
        </div>
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
          className="flex items-center space-x-2 px-6 py-3 bg-slate-900 text-white rounded-full font-medium shadow-lg hover:bg-slate-800 transition-colors"
        >
          <span>Next Lesson</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
