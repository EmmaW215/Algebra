import { motion } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Scene3ToothpickPattern({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [houses, setHouses] = useState(1);
  const [toothpicks, setToothpicks] = useState(6);

  // Pattern: 5n + 1
  // 1 house = 6 (5*1 + 1)
  // 2 houses = 11 (5*2 + 1)
  // 3 houses = 16 (5*3 + 1)

  const addHouse = () => {
    if (houses < 5) {
      setHouses(houses + 1);
      setToothpicks(5 * (houses + 1) + 1);
    }
  };

  const removeHouse = () => {
    if (houses > 1) {
      setHouses(houses - 1);
      setToothpicks(5 * (houses - 1) + 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Math Patterns: Toothpicks</h2>
      
      <div className="w-full max-w-3xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
        <p className="text-lg text-slate-600">
          How many toothpicks are needed to build <span className="font-bold text-purple-600">{houses}</span> connected townhouses?
        </p>

        <div className="flex items-center justify-center space-x-4 mb-8">
          <button onClick={removeHouse} className="px-4 py-2 bg-slate-200 rounded hover:bg-slate-300">- House</button>
          <span className="text-2xl font-bold w-12">{houses}</span>
          <button onClick={addHouse} className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">+ House</button>
        </div>

        {/* Visual Representation */}
        <div className="flex items-center justify-center space-x-0 relative h-32">
          {Array.from({ length: houses }, (_, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="relative w-16 h-24 border-l-4 border-b-4 border-r-4 border-amber-500 flex items-center justify-center"
              style={{ 
                borderLeftColor: i > 0 ? 'transparent' : '#f59e0b', // Only first house has left wall
                marginLeft: i > 0 ? '-4px' : '0' // Overlap shared wall
              }}
            >
              {/* Roof */}
              <div className="absolute -top-8 left-0 w-0 h-0 border-l-[30px] border-r-[30px] border-b-[30px] border-l-transparent border-r-transparent border-b-amber-600"></div>
              
              {/* Toothpick visual count */}
              <span className="text-xs text-slate-400 absolute bottom-2">{i === 0 ? "6" : "+5"}</span>
            </motion.div>
          ))}
        </div>

        <div className="text-2xl font-bold text-slate-800 mt-8">
          Total Toothpicks: <span className="text-purple-600">{toothpicks}</span>
        </div>
        
        <div className="text-sm text-slate-500 font-mono bg-slate-100 p-2 rounded inline-block">
          Formula: Toothpicks = 5 × Houses + 1
        </div>
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
          className="flex items-center space-x-2 px-6 py-3 bg-purple-600 text-white rounded-full font-medium shadow-lg hover:bg-purple-700 transition-colors"
        >
          <span>Next Lesson</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
