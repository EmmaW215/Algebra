import { motion } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Scene1DaysOfWeek({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [day, setDay] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  // Day 1 = Monday.
  // Day n = ?
  // (n - 1) % 7 gives offset from Monday.
  // 0 -> Mon, 1 -> Tue, 2 -> Wed, 3 -> Thu, 4 -> Fri, 5 -> Sat, 6 -> Sun.
  
  const calculateDay = () => {
    const n = parseInt(day);
    if (isNaN(n) || n < 1) return;

    const offset = (n - 1) % 7;
    // Map offset to day name starting from Monday (index 1 in our array if we shift)
    // Let's just use a direct map for clarity
    const map = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    setResult(map[offset]);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Factors and Multiples: Days of the Week</h2>
      
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
        <p className="text-lg text-slate-600">
          If <span className="font-bold text-purple-600">Day 1</span> is a <span className="font-bold">Monday</span>, what day of the week is Day <span className="font-bold text-purple-600">300</span>?
        </p>

        <div className="grid grid-cols-7 gap-2 text-sm font-bold text-slate-500 mb-4">
          {days.map(d => <div key={d}>{d.slice(0, 3)}</div>)}
        </div>
        
        {/* Visual Calendar Grid (First few weeks) */}
        <div className="grid grid-cols-7 gap-2 mb-8">
           {/* Empty slot for Sunday since Day 1 is Monday */}
           <div className="p-2 border border-slate-100 rounded bg-slate-50"></div>
           {Array.from({ length: 20 }, (_, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: i * 0.05 }}
               className={`p-2 border rounded font-mono ${
                 (i + 1) === 1 ? "bg-purple-100 border-purple-300 text-purple-700 font-bold" : 
                 (i + 1) % 7 === 0 ? "bg-slate-100 text-slate-400" : "border-slate-200 text-slate-600"
               }`}
             >
               {i + 1}
             </motion.div>
           ))}
           <div className="col-span-7 text-center text-slate-400 text-xs mt-2">... pattern repeats every 7 days ...</div>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-4">
            <label className="font-bold text-slate-700">Enter Day Number:</label>
            <input
              type="number"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              className="w-24 p-2 border-2 border-purple-200 rounded-lg text-center font-mono text-lg focus:border-purple-500 focus:outline-none"
              placeholder="300"
            />
          </div>
          
          <button
            onClick={calculateDay}
            className="px-6 py-2 bg-purple-600 text-white rounded-full font-bold hover:bg-purple-700 transition-colors"
          >
            Calculate
          </button>
        </div>

        {result && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-purple-50 rounded-xl border border-purple-100"
          >
            <p className="text-lg text-slate-700">
              Day {day} is a <span className="font-bold text-purple-700 text-2xl block mt-2">{result}</span>
            </p>
            <p className="text-sm text-slate-500 mt-2">
              (Remainder of {day} ÷ 7 determines the position in the week)
            </p>
          </motion.div>
        )}
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
