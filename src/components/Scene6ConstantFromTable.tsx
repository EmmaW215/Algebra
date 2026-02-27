import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowRight, ArrowLeft, CheckCircle, XCircle } from "lucide-react";

export default function Scene6ConstantFromTable({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [selectedTable, setSelectedTable] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);

  // Target k = 0.6
  // Table A: 4->7 (k=1.75), 6->10 (k=1.66) - Not proportional
  // Table B: 4->2.4 (k=0.6), 9->5.4 (k=0.6), 14->8.4 (k=0.6) - Correct
  // Table C: 3->2 (k=0.66), 9->6 (k=0.66) - k=2/3

  const checkAnswer = (id: string) => {
    setSelectedTable(id);
    if (id === "B") {
      setIsCorrect(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Constant from Tables</h2>
      <p className="text-lg text-slate-600">Which table has a constant of proportionality of <span className="font-bold text-indigo-600">0.6</span>?</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {/* Table A */}
        <button 
          onClick={() => checkAnswer("A")}
          className={`bg-white p-4 rounded-xl border-2 transition-all ${selectedTable === "A" ? "border-red-500 bg-red-50" : "border-slate-200 hover:border-indigo-200"}`}
        >
          <h3 className="font-bold text-slate-500 mb-2">Table A</h3>
          <table className="w-full text-center text-sm">
            <thead className="bg-slate-100"><tr><th className="p-2">x</th><th className="p-2">y</th></tr></thead>
            <tbody>
              <tr><td>4</td><td>7</td></tr>
              <tr><td>6</td><td>10</td></tr>
              <tr><td>8</td><td>13</td></tr>
            </tbody>
          </table>
          {selectedTable === "A" && <p className="text-red-600 text-sm mt-2 font-bold">7/4 = 1.75 (Not 0.6)</p>}
        </button>

        {/* Table B */}
        <button 
          onClick={() => checkAnswer("B")}
          className={`bg-white p-4 rounded-xl border-2 transition-all ${selectedTable === "B" ? "border-green-500 bg-green-50" : "border-slate-200 hover:border-indigo-200"}`}
        >
          <h3 className="font-bold text-slate-500 mb-2">Table B</h3>
          <table className="w-full text-center text-sm">
            <thead className="bg-slate-100"><tr><th className="p-2">x</th><th className="p-2">y</th></tr></thead>
            <tbody>
              <tr><td>4</td><td>2.4</td></tr>
              <tr><td>9</td><td>5.4</td></tr>
              <tr><td>14</td><td>8.4</td></tr>
            </tbody>
          </table>
          {selectedTable === "B" && <p className="text-green-600 text-sm mt-2 font-bold">2.4/4 = 0.6 (Correct!)</p>}
        </button>

        {/* Table C */}
        <button 
          onClick={() => checkAnswer("C")}
          className={`bg-white p-4 rounded-xl border-2 transition-all ${selectedTable === "C" ? "border-red-500 bg-red-50" : "border-slate-200 hover:border-indigo-200"}`}
        >
          <h3 className="font-bold text-slate-500 mb-2">Table C</h3>
          <table className="w-full text-center text-sm">
            <thead className="bg-slate-100"><tr><th className="p-2">x</th><th className="p-2">y</th></tr></thead>
            <tbody>
              <tr><td>3</td><td>2</td></tr>
              <tr><td>6</td><td>4</td></tr>
              <tr><td>9</td><td>6</td></tr>
            </tbody>
          </table>
          {selectedTable === "C" && <p className="text-red-600 text-sm mt-2 font-bold">2/3 ≈ 0.66... (Not 0.6)</p>}
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
