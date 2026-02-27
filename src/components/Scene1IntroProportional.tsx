import { motion } from "motion/react";
import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function Scene1IntroProportional({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [step, setStep] = useState(0);

  // Data for Proportional (Eggs & Milk)
  const proportionalData = [
    { eggs: 1, milk: 2 },
    { eggs: 3, milk: 6 },
    { eggs: 12, milk: 24 },
  ];

  // Data for Non-Proportional (Servings & Cost)
  const nonProportionalData = [
    { servings: 10, cost: 20 },
    { servings: 20, cost: 30 },
    { servings: 40, cost: 40 },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Introduction to Proportional Relationships</h2>
      
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Proportional Example */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200"
        >
          <h3 className="text-xl font-bold text-blue-600 mb-4">Recipe: Eggs & Milk</h3>
          <div className="space-y-4">
            {proportionalData.map((row, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-slate-700">{row.eggs}</span>
                  <span className="text-sm text-slate-500">Eggs</span>
                </div>
                <div className="text-blue-400 font-bold">→</div>
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-slate-700">{row.milk}</span>
                  <span className="text-sm text-slate-500">Cups Milk</span>
                </div>
                <div className="text-xs font-mono text-slate-400">
                  Ratio: {row.milk}/{row.eggs} = 2
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-600">
            The ratio is always <span className="font-bold text-blue-600">2</span>. This is <span className="font-bold text-green-600">Proportional</span>.
          </p>
        </motion.div>

        {/* Non-Proportional Example */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200"
        >
          <h3 className="text-xl font-bold text-red-600 mb-4">Cake Cost</h3>
          <div className="space-y-4">
            {nonProportionalData.map((row, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-slate-700">{row.servings}</span>
                  <span className="text-sm text-slate-500">Servings</span>
                </div>
                <div className="text-red-400 font-bold">→</div>
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-slate-700">${row.cost}</span>
                  <span className="text-sm text-slate-500">Cost</span>
                </div>
                <div className="text-xs font-mono text-slate-400">
                  Ratio: {row.cost}/{row.servings} = {row.cost / row.servings}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-600">
            The ratio changes (2, 1.5, 1). This is <span className="font-bold text-red-600">Not Proportional</span>.
          </p>
        </motion.div>
      </div>

      <div className="bg-slate-100 p-6 rounded-xl max-w-2xl">
        <p className="text-lg font-medium text-slate-800">
          In a proportional relationship, one variable is always a constant multiple of the other.
        </p>
        <div className="mt-2 font-mono text-xl text-blue-600 font-bold">
          y = kx
        </div>
        <p className="text-sm text-slate-500 mt-1">k is the "Constant of Proportionality"</p>
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
          className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-full font-medium shadow-lg hover:bg-blue-700 transition-colors"
        >
          <span>Next Lesson</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
