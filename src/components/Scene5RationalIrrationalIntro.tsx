import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Scene5RationalIrrationalIntro({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Rational vs. Irrational Numbers</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Rational Card */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-8 rounded-2xl shadow-sm border-2 border-green-200 flex flex-col items-center space-y-4"
        >
          <h3 className="text-2xl font-bold text-green-600">Rational Numbers</h3>
          <p className="text-slate-600">Can be written as a ratio (fraction) of two integers.</p>
          <div className="bg-green-50 p-4 rounded-xl w-full text-left space-y-2 font-mono text-green-800">
            <p>• 5 (5/1)</p>
            <p>• -7 (-7/1)</p>
            <p>• 3.75 (15/4)</p>
            <p>• 0.333... (1/3)</p>
            <p>• √16 (4)</p>
          </div>
        </motion.div>

        {/* Irrational Card */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-8 rounded-2xl shadow-sm border-2 border-red-200 flex flex-col items-center space-y-4"
        >
          <h3 className="text-2xl font-bold text-red-600">Irrational Numbers</h3>
          <p className="text-slate-600">Cannot be written as a simple fraction. Decimals go on forever without repeating.</p>
          <div className="bg-red-50 p-4 rounded-xl w-full text-left space-y-2 font-mono text-red-800">
            <p>• π (3.14159...)</p>
            <p>• √2 (1.4142...)</p>
            <p>• √3</p>
            <p>• e (2.718...)</p>
          </div>
        </motion.div>
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
