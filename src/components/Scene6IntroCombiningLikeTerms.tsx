import { motion } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Scene6IntroCombiningLikeTerms({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [answer, setAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  // 2x + 3x = 5x

  const checkAnswer = () => {
    if (answer === "5") {
      setIsCorrect(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Combining Like Terms</h2>
      
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
        <div className="flex justify-center space-x-8 text-4xl font-bold text-slate-700">
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 p-4 rounded-xl text-blue-600 mb-2">2x</div>
            <span className="text-sm text-slate-400 font-normal">x + x</span>
          </div>
          <div className="flex items-center text-slate-400">+</div>
          <div className="flex flex-col items-center">
            <div className="bg-green-100 p-4 rounded-xl text-green-600 mb-2">3x</div>
            <span className="text-sm text-slate-400 font-normal">x + x + x</span>
          </div>
          <div className="flex items-center text-slate-400">=</div>
          <div className="flex flex-col items-center">
            <div className="bg-purple-100 p-4 rounded-xl text-purple-600 mb-2 flex items-center">
              <input 
                type="number" 
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="w-16 bg-transparent border-b-2 border-purple-500 text-center focus:outline-none mr-1"
                placeholder="?"
              />
              <span>x</span>
            </div>
          </div>
        </div>

        <button onClick={checkAnswer} className="px-6 py-2 bg-purple-600 text-white rounded-full font-bold hover:bg-purple-700">Check</button>
        
        {isCorrect && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 font-bold space-y-2">
            <p>Correct!</p>
            <p className="text-sm text-slate-500">2x + 3x = (2 + 3)x = 5x</p>
          </motion.div>
        )}
      </div>

      <div className="flex space-x-4 mt-auto w-full justify-between items-center pt-8 border-t border-slate-100">
        <button onClick={onPrev} className="flex items-center space-x-2 px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-full font-medium shadow-sm hover:bg-slate-50 transition-colors">
          <ArrowLeft size={18} /> <span>Back</span>
        </button>
        <button onClick={onNext} disabled={!isCorrect} className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium shadow-lg transition-colors ${!isCorrect ? "bg-slate-200 text-slate-400" : "bg-purple-600 text-white hover:bg-purple-700"}`}>
          <span>Next Lesson</span> <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
