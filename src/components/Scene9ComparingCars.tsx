import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowRight, ArrowLeft, CheckCircle, XCircle } from "lucide-react";

export default function Scene9ComparingCars({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [selectedCar, setSelectedCar] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);

  // Car A: 50 km/h
  // Car B: 55h = D -> 55 km/h (Fastest)
  // Car C: 135 km in 3 h -> 45 km/h

  const checkAnswer = (id: string) => {
    setSelectedCar(id);
    if (id === "B") {
      setIsCorrect(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Which Car is Fastest?</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {/* Car A */}
        <button 
          onClick={() => checkAnswer("A")}
          className={`bg-white p-6 rounded-xl border-2 transition-all flex flex-col items-center ${selectedCar === "A" ? "border-red-500 bg-red-50" : "border-slate-200 hover:border-indigo-200"}`}
        >
          <div className="text-4xl mb-4">🚗</div>
          <h3 className="font-bold text-slate-800 mb-2">Car A</h3>
          <p className="text-lg font-mono text-slate-600">50 km/h</p>
          {selectedCar === "A" && <p className="text-red-600 text-sm mt-4 font-bold">Speed: 50 km/h</p>}
        </button>

        {/* Car B */}
        <button 
          onClick={() => checkAnswer("B")}
          className={`bg-white p-6 rounded-xl border-2 transition-all flex flex-col items-center ${selectedCar === "B" ? "border-green-500 bg-green-50" : "border-slate-200 hover:border-indigo-200"}`}
        >
          <div className="text-4xl mb-4">🚙</div>
          <h3 className="font-bold text-slate-800 mb-2">Car B</h3>
          <p className="text-lg font-mono text-slate-600">55h = D</p>
          {selectedCar === "B" && <p className="text-green-600 text-sm mt-4 font-bold">Speed: 55 km/h (Fastest!)</p>}
        </button>

        {/* Car C */}
        <button 
          onClick={() => checkAnswer("C")}
          className={`bg-white p-6 rounded-xl border-2 transition-all flex flex-col items-center ${selectedCar === "C" ? "border-red-500 bg-red-50" : "border-slate-200 hover:border-indigo-200"}`}
        >
          <div className="text-4xl mb-4">🏎️</div>
          <h3 className="font-bold text-slate-800 mb-2">Car C</h3>
          <p className="text-lg font-mono text-slate-600">135 km in 3 h</p>
          {selectedCar === "C" && <p className="text-red-600 text-sm mt-4 font-bold">135/3 = 45 km/h</p>}
        </button>
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
          disabled={!isCorrect}
          className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium shadow-lg transition-colors
            ${!isCorrect
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
