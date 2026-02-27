import { motion } from "motion/react";
import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function Scene11ProportionalTables({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [showRatios, setShowRatios] = useState(false);

  // Table 1: Proportional (y=3x)
  const table1 = [
    { x: 1, y: 3 },
    { x: 2, y: 6 },
    { x: 9, y: 27 },
  ];

  // Table 2: Not Proportional (b = 3a?) No, 1->3, 2->6, 10->35 (3.5)
  const table2 = [
    { a: 1, b: 3 },
    { a: 2, b: 6 },
    { a: 10, b: 35 },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Proportional Tables</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {/* Table 1 */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-xl font-bold text-blue-600 mb-4">Table 1</h3>
          <table className="w-full text-center mb-4">
            <thead className="bg-slate-100"><tr><th className="p-2">x</th><th className="p-2">y</th></tr></thead>
            <tbody>
              {table1.map((row, i) => (
                <tr key={i} className="border-t border-slate-100">
                  <td className="p-2">{row.x}</td>
                  <td className="p-2">{row.y}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {showRatios && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-slate-600 space-y-1">
              <p>3/1 = 3</p>
              <p>6/2 = 3</p>
              <p>27/9 = 3</p>
              <p className="font-bold text-blue-600 mt-2">Proportional (k=3)</p>
            </motion.div>
          )}
        </div>

        {/* Table 2 */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-xl font-bold text-red-600 mb-4">Table 2</h3>
          <table className="w-full text-center mb-4">
            <thead className="bg-slate-100"><tr><th className="p-2">a</th><th className="p-2">b</th></tr></thead>
            <tbody>
              {table2.map((row, i) => (
                <tr key={i} className="border-t border-slate-100">
                  <td className="p-2">{row.a}</td>
                  <td className="p-2">{row.b}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {showRatios && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-slate-600 space-y-1">
              <p>3/1 = 3</p>
              <p>6/2 = 3</p>
              <p className="text-red-500 font-bold">35/10 = 3.5</p>
              <p className="font-bold text-red-600 mt-2">Not Proportional</p>
            </motion.div>
          )}
        </div>
      </div>

      <button
        onClick={() => setShowRatios(!showRatios)}
        className="px-8 py-3 bg-indigo-600 text-white rounded-full font-bold shadow-lg hover:bg-indigo-700 transition-colors"
      >
        {showRatios ? "Hide Ratios" : "Check Ratios"}
      </button>

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
          className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-full font-medium shadow-lg hover:bg-blue-700 transition-colors"
        >
          <span>Next Lesson</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
