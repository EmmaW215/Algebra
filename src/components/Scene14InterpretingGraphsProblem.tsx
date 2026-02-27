import { motion } from "motion/react";
import { useState } from "react";
import { ArrowLeft, CheckCircle } from "lucide-react";

export default function Scene14InterpretingGraphsProblem({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);

  // Alberto (Green) vs Bianca (Blue)
  // Green line is steeper initially -> Alberto runs faster early.
  // Green line flat -> Alberto stops.
  // Blue line passes Green -> Bianca wins.
  
  // Question: Who crosses the finish line first?
  // Answer: Bianca.

  const checkAnswer = (id: string) => {
    setSelected(id);
    if (id === "Bianca") {
      setIsCorrect(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Race Analysis</h2>
      
      <div className="flex flex-col md:flex-row gap-8 items-center w-full">
        {/* Graph Visualization */}
        <div className="relative w-64 h-64 bg-white border-2 border-slate-300 rounded-lg">
          <div className="absolute left-8 bottom-8 w-[calc(100%-32px)] h-0.5 bg-slate-800"></div>
          <div className="absolute left-8 bottom-8 w-0.5 h-[calc(100%-32px)] bg-slate-800"></div>
          
          {/* Alberto (Green) */}
          {/* Fast start, then stop, then slow */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 256 256">
            <polyline points="32,224 96,96 128,96 192,32" fill="none" stroke="#22c55e" strokeWidth="3" />
            
            {/* Bianca (Blue) */}
            {/* Constant speed */}
            <polyline points="32,224 192,64 224,32" fill="none" stroke="#3b82f6" strokeWidth="3" />
          </svg>
          
          <div className="absolute top-4 right-4 text-xs font-bold text-green-600">Alberto</div>
          <div className="absolute bottom-12 right-4 text-xs font-bold text-blue-600">Bianca</div>
        </div>

        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
          <p className="text-lg text-slate-600 font-bold">Who crosses the finish line first?</p>
          
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => checkAnswer("Alberto")}
              className={`px-8 py-3 rounded-full font-bold shadow-lg transition-colors flex items-center space-x-2
                ${selected === "Alberto" ? "bg-green-100 text-green-700 border-2 border-green-500" : "bg-white border-2 border-slate-200 hover:bg-slate-50"}
              `}
            >
              <span>Alberto</span>
              {selected === "Alberto" && <CheckCircle size={20} />}
            </button>

            <button
              onClick={() => checkAnswer("Bianca")}
              className={`px-8 py-3 rounded-full font-bold shadow-lg transition-colors flex items-center space-x-2
                ${selected === "Bianca" ? "bg-blue-100 text-blue-700 border-2 border-blue-500" : "bg-white border-2 border-slate-200 hover:bg-slate-50"}
              `}
            >
              <span>Bianca</span>
              {selected === "Bianca" && <CheckCircle size={20} />}
            </button>
          </div>

          {isCorrect && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 font-bold text-lg mt-4">
              Correct! Bianca maintains a steady pace and overtakes Alberto while he is resting.
            </motion.div>
          )}
        </div>
      </div>

      <div className="flex space-x-4 mt-auto w-full justify-between items-center pt-8 border-t border-slate-100">
        <button onClick={onPrev} className="flex items-center space-x-2 px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-full font-medium shadow-sm hover:bg-slate-50 transition-colors">
          <ArrowLeft size={18} /> <span>Back</span>
        </button>
        <button onClick={onNext} className="flex items-center space-x-2 px-6 py-3 bg-rose-600 text-white rounded-full font-medium shadow-lg hover:bg-rose-700 transition-colors">
          <span>Finish Unit</span> <CheckCircle size={18} />
        </button>
      </div>
    </div>
  );
}
