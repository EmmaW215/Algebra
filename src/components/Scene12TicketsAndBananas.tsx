import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function Scene12TicketsAndBananas({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [step, setStep] = useState(0);

  // Step 0: Movie Tickets ($10.50/ticket, ignore popcorn) -> Proportional
  // Step 1: Bananas (100 total, eats 2/day) -> Remaining = 100 - 2d -> Not Proportional

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Real-World Examples</h2>
      
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="tickets"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6"
          >
            <h3 className="text-2xl font-bold text-indigo-600">Movie Tickets</h3>
            <p className="text-lg text-slate-600">
              Tickets are <span className="font-bold">$10.50</span> each. Popcorn is $5 (but you never buy it).
            </p>
            <p className="text-lg text-slate-600">
              Is the <span className="font-bold">Total Cost</span> proportional to <span className="font-bold">Tickets</span>?
            </p>
            
            <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
              <table className="w-full text-center">
                <thead><tr><th className="p-2">Tickets</th><th className="p-2">Cost</th><th className="p-2">Ratio</th></tr></thead>
                <tbody>
                  <tr><td>1</td><td>$10.50</td><td>10.50</td></tr>
                  <tr><td>2</td><td>$21.00</td><td>10.50</td></tr>
                  <tr><td>3</td><td>$31.50</td><td>10.50</td></tr>
                </tbody>
              </table>
            </div>

            <p className="text-green-600 font-bold text-xl">Yes! Constant Ratio = 10.50</p>

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
            key="bananas"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6"
          >
            <h3 className="text-2xl font-bold text-yellow-600">Bananas Remaining</h3>
            <p className="text-lg text-slate-600">
              Start with <span className="font-bold">100</span> bananas. Eat <span className="font-bold">2</span> per day.
            </p>
            <p className="text-lg text-slate-600">
              Is <span className="font-bold">Bananas Left</span> proportional to <span className="font-bold">Days Passed</span>?
            </p>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
              <table className="w-full text-center">
                <thead><tr><th className="p-2">Days</th><th className="p-2">Left</th><th className="p-2">Ratio</th></tr></thead>
                <tbody>
                  <tr><td>1</td><td>98</td><td>98</td></tr>
                  <tr><td>2</td><td>96</td><td>48</td></tr>
                  <tr><td>3</td><td>94</td><td>31.3</td></tr>
                </tbody>
              </table>
            </div>

            <p className="text-red-600 font-bold text-xl">No! Ratio changes.</p>
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
