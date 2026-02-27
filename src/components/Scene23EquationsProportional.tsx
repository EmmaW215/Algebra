import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function Scene23EquationsProportional({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [step, setStep] = useState(0);

  // Example 1: y = 4x
  const data1 = [
    { x: 1, y: 4 },
    { x: 2, y: 8 },
    { x: 3, y: 12 },
  ];

  // Example 2: y = 7x (Meters per second)
  const data2 = [
    { x: 1, y: 7 },
    { x: 2, y: 14 },
    { x: 3, y: 21 },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Equations for Proportional Relationships</h2>
      
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="ex1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6"
          >
            <h3 className="text-2xl font-bold text-indigo-600">Finding the Equation</h3>
            
            <div className="flex justify-center">
              <table className="w-full max-w-md text-center border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="p-3 border border-slate-200">x</th>
                    <th className="p-3 border border-slate-200">y</th>
                    <th className="p-3 border border-slate-200 text-indigo-600">y / x</th>
                  </tr>
                </thead>
                <tbody>
                  {data1.map((row, i) => (
                    <tr key={i}>
                      <td className="p-3 border border-slate-200">{row.x}</td>
                      <td className="p-3 border border-slate-200">{row.y}</td>
                      <td className="p-3 border border-slate-200 font-bold text-indigo-600">
                        {row.y} / {row.x} = 4
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
              <p className="text-lg text-slate-700">
                Since <span className="font-mono font-bold">y / x = 4</span>, we can multiply both sides by <span className="font-mono font-bold">x</span>:
              </p>
              <div className="mt-2 text-3xl font-mono font-bold text-indigo-700">
                y = 4x
              </div>
              <p className="text-sm text-slate-500 mt-2">4 is the Constant of Proportionality (k)</p>
            </div>

            <button
              onClick={() => setStep(1)}
              className="px-8 py-3 bg-indigo-600 text-white rounded-full font-bold shadow-lg hover:bg-indigo-700 transition-colors"
            >
              Next Example
            </button>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            key="ex2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6"
          >
            <h3 className="text-2xl font-bold text-blue-600">Rate of Change (Speed)</h3>
            <p className="text-slate-600">x = Time (seconds), y = Distance (meters)</p>
            
            <div className="flex justify-center">
              <table className="w-full max-w-md text-center border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="p-3 border border-slate-200">Time (x)</th>
                    <th className="p-3 border border-slate-200">Distance (y)</th>
                    <th className="p-3 border border-slate-200 text-blue-600">Rate (y/x)</th>
                  </tr>
                </thead>
                <tbody>
                  {data2.map((row, i) => (
                    <tr key={i}>
                      <td className="p-3 border border-slate-200">{row.x}</td>
                      <td className="p-3 border border-slate-200">{row.y}</td>
                      <td className="p-3 border border-slate-200 font-bold text-blue-600">
                        {row.y}/{row.x} = 7 m/s
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
              <p className="text-lg text-slate-700">
                The rate is constant at <span className="font-bold">7 m/s</span>.
              </p>
              <div className="mt-2 text-3xl font-mono font-bold text-blue-700">
                y = 7x
              </div>
              <p className="text-sm text-slate-500 mt-2">Distance = 7 × Time</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
          disabled={step < 1}
          className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium shadow-lg transition-colors
            ${step < 1
              ? "bg-slate-200 text-slate-400 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
        >
          <span>Next Lesson</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
