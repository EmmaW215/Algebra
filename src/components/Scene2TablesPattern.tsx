import { motion } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Scene2TablesPattern({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [tables, setTables] = useState(1);
  const [people, setPeople] = useState(6);

  // Pattern: 4n + 2
  // 1 table = 6 (4*1 + 2)
  // 2 tables = 10 (4*2 + 2)
  // 3 tables = 14 (4*3 + 2)

  const addTable = () => {
    if (tables < 5) {
      setTables(tables + 1);
      setPeople(4 * (tables + 1) + 2);
    }
  };

  const removeTable = () => {
    if (tables > 1) {
      setTables(tables - 1);
      setPeople(4 * (tables - 1) + 2);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Math Patterns: Tables</h2>
      
      <div className="w-full max-w-3xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
        <p className="text-lg text-slate-600">
          How many people can sit around <span className="font-bold text-purple-600">{tables}</span> tables pushed together?
        </p>

        <div className="flex items-center justify-center space-x-4 mb-8">
          <button onClick={removeTable} className="px-4 py-2 bg-slate-200 rounded hover:bg-slate-300">- Table</button>
          <span className="text-2xl font-bold w-12">{tables}</span>
          <button onClick={addTable} className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">+ Table</button>
        </div>

        {/* Visual Representation */}
        <div className="flex items-center justify-center space-x-0 relative h-32">
          {Array.from({ length: tables }, (_, i) => (
            <motion.div 
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="w-24 h-16 bg-amber-100 border-2 border-amber-300 relative flex items-center justify-center"
            >
              <span className="text-amber-800 font-bold text-xs">Table {i+1}</span>
              
              {/* Top Seats (2 per table) */}
              <div className="absolute -top-6 left-2 w-4 h-4 bg-slate-400 rounded-full"></div>
              <div className="absolute -top-6 right-2 w-4 h-4 bg-slate-400 rounded-full"></div>

              {/* Bottom Seats (2 per table) */}
              <div className="absolute -bottom-6 left-2 w-4 h-4 bg-slate-400 rounded-full"></div>
              <div className="absolute -bottom-6 right-2 w-4 h-4 bg-slate-400 rounded-full"></div>

              {/* Left End Seat (Only for first table) */}
              {i === 0 && (
                <div className="absolute top-1/2 -left-6 -translate-y-1/2 w-4 h-4 bg-purple-500 rounded-full"></div>
              )}

              {/* Right End Seat (Only for last table) */}
              {i === tables - 1 && (
                <div className="absolute top-1/2 -right-6 -translate-y-1/2 w-4 h-4 bg-purple-500 rounded-full"></div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="text-2xl font-bold text-slate-800 mt-8">
          Total People: <span className="text-purple-600">{people}</span>
        </div>
        
        <div className="text-sm text-slate-500 font-mono bg-slate-100 p-2 rounded inline-block">
          Formula: People = 4 × Tables + 2
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
