import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Scene22QuotientPropertyReview({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Review: Quotient of Powers</h2>
      
      <div className="w-full max-w-3xl bg-white p-10 rounded-2xl shadow-sm border border-slate-200 space-y-8">
        <p className="text-xl text-slate-600">
          Remember the rule for dividing powers with the same base:
        </p>

        <div className="bg-red-50 p-8 rounded-xl border-2 border-red-100">
          <div className="text-5xl font-mono font-bold text-red-800 mb-4">
            xⁿ / xᵐ = xⁿ⁻ᵐ
          </div>
        </div>

        <div className="text-left space-y-4 text-slate-600">
          <p className="text-lg">Example:</p>
          <div className="font-mono bg-slate-50 p-6 rounded-lg text-xl">
            3⁸ / 3² = 3⁸⁻² = 3⁶
          </div>
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
