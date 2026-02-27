import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Scene31NegativeExponentIntuition2({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Another Way to Think About It</h2>
      
      <div className="w-full max-w-3xl bg-white p-10 rounded-2xl shadow-sm border border-slate-200 space-y-8">
        <p className="text-xl text-slate-600">
          Using the Quotient Property:
        </p>

        <div className="bg-blue-50 p-8 rounded-xl border-2 border-blue-100 font-mono text-lg text-left space-y-4">
          <div className="flex justify-between items-center border-b border-blue-200 pb-2">
            <span>2² / 2³</span>
            <span>= 2²⁻³ = 2⁻¹</span>
          </div>
          
          <div className="text-slate-500 text-sm">But also...</div>

          <div className="flex justify-between items-center border-b border-blue-200 pb-2">
            <span>2² / 2³</span>
            <span>= (2·2) / (2·2·2) = 1/2</span>
          </div>

          <div className="text-center font-bold text-blue-800 pt-4 text-2xl">
            So, 2⁻¹ = 1/2
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
