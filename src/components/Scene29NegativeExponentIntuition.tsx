import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Scene29NegativeExponentIntuition({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Why Negative Exponents?</h2>
      
      <div className="w-full max-w-3xl bg-white p-10 rounded-2xl shadow-sm border border-slate-200 space-y-8">
        <p className="text-xl text-slate-600">
          Look at the pattern when we decrease the exponent:
        </p>

        <div className="grid grid-cols-2 gap-8 text-left max-w-md mx-auto">
          <div className="space-y-4 font-mono text-xl">
            <div className="flex justify-between border-b pb-2"><span>2³</span> <span>= 8</span></div>
            <div className="flex justify-between border-b pb-2"><span>2²</span> <span>= 4</span></div>
            <div className="flex justify-between border-b pb-2"><span>2¹</span> <span>= 2</span></div>
            <div className="flex justify-between border-b pb-2"><span>2⁰</span> <span>= 1</span></div>
            <div className="flex justify-between border-b pb-2 text-purple-600 font-bold"><span>2⁻¹</span> <span>= 1/2</span></div>
            <div className="flex justify-between border-b pb-2 text-purple-600 font-bold"><span>2⁻²</span> <span>= 1/4</span></div>
          </div>
          
          <div className="flex flex-col justify-around text-slate-500 text-sm italic">
            <div>(Divide by 2)</div>
            <div>(Divide by 2)</div>
            <div>(Divide by 2)</div>
            <div>(Divide by 2)</div>
            <div>(Divide by 2)</div>
          </div>
        </div>

        <p className="text-lg text-slate-600">
          Each step down divides the value by the base.
        </p>
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
