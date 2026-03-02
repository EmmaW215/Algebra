import { motion } from "motion/react";

export default function ScenePlaceholder({ title, description, onNext, onPrev }: { title: string, description: string, onNext: () => void, onPrev: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">{title}</h2>
      <p className="text-lg text-slate-600 max-w-2xl">{description}</p>
      
      <div className="flex items-center justify-center w-full h-64 bg-slate-100 rounded-2xl border-2 border-dashed border-slate-300">
        <span className="text-slate-400 font-medium">Interactive Scene Coming Soon</span>
      </div>

      <div className="flex space-x-4 mt-auto pt-8">
        <button
          onClick={onPrev}
          className="px-6 py-2 bg-white border border-slate-200 text-slate-700 rounded-full font-medium hover:bg-slate-50 transition-colors"
        >
          Back
        </button>
        <button
          onClick={onNext}
          className="px-6 py-2 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors"
        >
          Next Scene
        </button>
      </div>
    </div>
  );
}
