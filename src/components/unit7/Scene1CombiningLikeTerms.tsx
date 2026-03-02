import { motion } from "motion/react";
import { useState } from "react";
import { User, X, Plus, Equal } from "lucide-react";

export default function Scene1CombiningLikeTerms({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [step, setStep] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Combining Like Terms</h2>

      {step === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <p className="text-xl text-slate-600">
            Let's say I've got 2 Chuck Norrises...
          </p>
          <div className="flex items-center justify-center space-x-4 text-4xl font-bold text-slate-800">
            <div className="flex flex-col items-center">
              <div className="flex space-x-2">
                <User size={48} className="text-orange-600" />
                <User size={48} className="text-orange-600" />
              </div>
              <span className="text-sm mt-2 text-slate-500">2 Chucks</span>
            </div>
            <Plus size={32} className="text-slate-400" />
            <div className="flex flex-col items-center">
              <div className="flex space-x-2">
                <User size={48} className="text-orange-600" />
                <User size={48} className="text-orange-600" />
                <User size={48} className="text-orange-600" />
              </div>
              <span className="text-sm mt-2 text-slate-500">3 Chucks</span>
            </div>
            <Equal size={32} className="text-slate-400" />
            <div className="flex flex-col items-center">
              <div className="flex space-x-2">
                <User size={48} className="text-orange-600" />
                <User size={48} className="text-orange-600" />
                <User size={48} className="text-orange-600" />
                <User size={48} className="text-orange-600" />
                <User size={48} className="text-orange-600" />
              </div>
              <span className="text-sm mt-2 text-slate-500">5 Chucks</span>
            </div>
          </div>
          <p className="text-lg text-slate-600">
            2 Chucks + 3 Chucks = 5 Chucks
          </p>
        </motion.div>
      )}

      {step === 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <p className="text-xl text-slate-600">
            Now let's get abstract. Instead of Chucks, let's use <span className="font-mono font-bold text-indigo-600">x</span>.
          </p>
          <div className="flex items-center justify-center space-x-4 text-4xl font-bold text-slate-800 font-mono">
            <div className="flex flex-col items-center">
              <span className="text-indigo-600">2x</span>
              <span className="text-sm mt-2 text-slate-500 font-sans">2 times x</span>
            </div>
            <Plus size={32} className="text-slate-400" />
            <div className="flex flex-col items-center">
              <span className="text-indigo-600">3x</span>
              <span className="text-sm mt-2 text-slate-500 font-sans">3 times x</span>
            </div>
            <Equal size={32} className="text-slate-400" />
            <div className="flex flex-col items-center">
              <span className="text-indigo-600">5x</span>
              <span className="text-sm mt-2 text-slate-500 font-sans">5 times x</span>
            </div>
          </div>
          <p className="text-lg text-slate-600">
            We just add the coefficients: <span className="font-bold">2 + 3 = 5</span>.
          </p>
        </motion.div>
      )}

      {step === 2 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <p className="text-xl text-slate-600">
            What if we add different things?
          </p>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <p className="text-lg text-slate-500 mb-4 font-mono">7 Plums + 2 Chucks + 3 Chucks + 2 Plums</p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xl font-bold text-slate-800">
              <div className="bg-purple-100 p-3 rounded-xl border border-purple-200">
                <span className="text-purple-700">7 Plums</span>
              </div>
              <Plus size={20} className="text-slate-400" />
              <div className="bg-orange-100 p-3 rounded-xl border border-orange-200">
                <span className="text-orange-700">2 Chucks</span>
              </div>
              <Plus size={20} className="text-slate-400" />
              <div className="bg-orange-100 p-3 rounded-xl border border-orange-200">
                <span className="text-orange-700">3 Chucks</span>
              </div>
              <Plus size={20} className="text-slate-400" />
              <div className="bg-purple-100 p-3 rounded-xl border border-purple-200">
                <span className="text-purple-700">2 Plums</span>
              </div>
            </div>
            <div className="flex items-center justify-center my-4">
              <Equal size={24} className="text-slate-400" />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xl font-bold text-slate-800">
              <div className="bg-orange-100 p-3 rounded-xl border border-orange-200">
                <span className="text-orange-700">5 Chucks</span>
              </div>
              <Plus size={20} className="text-slate-400" />
              <div className="bg-purple-100 p-3 rounded-xl border border-purple-200">
                <span className="text-purple-700">9 Plums</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mt-6">
             <p className="text-lg text-slate-500 mb-4 font-mono">7y + 2x + 3x + 2y</p>
             <div className="flex flex-wrap items-center justify-center gap-4 text-xl font-bold font-mono">
               <span className="text-purple-600">7y</span>
               <span className="text-slate-400">+</span>
               <span className="text-indigo-600">2x</span>
               <span className="text-slate-400">+</span>
               <span className="text-indigo-600">3x</span>
               <span className="text-slate-400">+</span>
               <span className="text-purple-600">2y</span>
             </div>
             <div className="flex items-center justify-center my-4">
               <Equal size={24} className="text-slate-400" />
             </div>
             <div className="flex flex-wrap items-center justify-center gap-4 text-xl font-bold font-mono">
               <span className="text-indigo-600">5x</span>
               <span className="text-slate-400">+</span>
               <span className="text-purple-600">9y</span>
             </div>
          </div>
        </motion.div>
      )}

      {step === 3 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <p className="text-xl text-slate-600">
            Let's try with variables: <span className="font-mono">2x + 1 + 7x + 5</span>
          </p>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <div className="flex flex-wrap items-center justify-center gap-4 text-3xl font-mono font-bold">
              <motion.span 
                className="text-indigo-600 bg-indigo-50 px-2 py-1 rounded"
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                2x
              </motion.span>
              <span className="text-slate-400">+</span>
              <span className="text-slate-600 bg-slate-100 px-2 py-1 rounded">1</span>
              <span className="text-slate-400">+</span>
              <motion.span 
                className="text-indigo-600 bg-indigo-50 px-2 py-1 rounded"
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
              >
                7x
              </motion.span>
              <span className="text-slate-400">+</span>
              <span className="text-slate-600 bg-slate-100 px-2 py-1 rounded">5</span>
            </div>
            
            <div className="my-8 border-t border-slate-100 w-full"></div>

            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="flex flex-col items-center">
                <span className="text-sm text-slate-500 mb-2">Combine x's</span>
                <span className="text-3xl font-mono font-bold text-indigo-600">9x</span>
              </div>
              <Plus size={24} className="text-slate-300" />
              <div className="flex flex-col items-center">
                <span className="text-sm text-slate-500 mb-2">Combine numbers</span>
                <span className="text-3xl font-mono font-bold text-slate-700">6</span>
              </div>
            </div>
          </div>
          <p className="text-lg text-slate-600">
            Result: <span className="font-mono font-bold">9x + 6</span>
          </p>
        </motion.div>
      )}

      <div className="flex space-x-4 mt-8">
        <button
          onClick={() => {
            if (step === 0) onPrev();
            else setStep(step - 1);
          }}
          className="px-6 py-2 bg-white border border-slate-200 text-slate-700 rounded-full font-medium hover:bg-slate-50 transition-colors"
        >
          Back
        </button>
        {step < 3 ? (
          <button
            onClick={() => setStep(step + 1)}
            className="px-6 py-2 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors"
          >
            Next
          </button>
        ) : (
          <button
            onClick={onNext}
            className="px-6 py-2 bg-emerald-600 text-white rounded-full font-medium hover:bg-emerald-700 transition-colors"
          >
            Next Scene
          </button>
        )}
      </div>
    </div>
  );
}
