import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Scene15ParenthesesPropertyIntro({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Power of a Power Property</h2>
      
      <div className="w-full max-w-3xl bg-white p-10 rounded-2xl shadow-sm border border-slate-200 space-y-8">
        <p className="text-xl text-slate-600">
          To find a power of a power, <span className="font-bold text-blue-600">multiply</span> the exponents.
        </p>

        <div className="bg-blue-50 p-8 rounded-xl border-2 border-blue-100">
          <div className="text-4xl font-mono font-bold text-blue-800 mb-4">
            (xᵃ)ᵇ = xᵃ·ᵇ
          </div>
          <div className="text-lg text-blue-600 font-mono">
            Example: (5⁴)³ = 5⁴·³ = 5¹²
          </div>
        </div>

        <div className="text-left space-y-4 text-slate-600">
          <p><span className="font-bold">Why?</span></p>
          <div className="font-mono bg-slate-50 p-4 rounded-lg">
            (5⁴)³ = 5⁴ · 5⁴ · 5⁴
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 5⁴⁺⁴⁺⁴
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 5¹²
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
