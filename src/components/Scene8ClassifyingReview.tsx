import { motion } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";

export default function Scene8ClassifyingReview({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<string | null>(null);

  // Q1: sqrt(5) -> Irrational
  // Q2: 101,323 -> Whole, Integer, Rational
  // Q3: 3 2/3 -> Rational

  const questions = [
    { num: "√5", correct: ["Irrational"] },
    { num: "101,323", correct: ["Whole Number", "Integer", "Rational"] },
    { num: "3 ⅔", correct: ["Rational"] }
  ];

  const toggleSelection = (id: string) => {
    if (selected.includes(id)) {
      setSelected(selected.filter(s => s !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  const checkAnswer = () => {
    const currentQ = questions[step];
    const isCorrect = 
      selected.length === currentQ.correct.length && 
      selected.every(s => currentQ.correct.includes(s));

    if (isCorrect) {
      setFeedback("Correct!");
      setTimeout(() => {
        if (step < questions.length - 1) {
          setStep(step + 1);
          setSelected([]);
          setFeedback(null);
        } else {
          onNext();
        }
      }, 1500);
    } else {
      setFeedback("Try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Classifying Numbers Review</h2>
      
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
        <p className="text-lg text-slate-600 font-bold">Classify the number:</p>
        
        <div className="text-5xl font-mono font-bold text-slate-800 py-4">
          {questions[step].num}
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {["Whole Number", "Integer", "Rational", "Irrational"].map((type) => (
            <button
              key={type}
              onClick={() => toggleSelection(type)}
              className={`p-4 rounded-xl border-2 transition-all flex items-center justify-between
                ${selected.includes(type) ? "bg-blue-50 border-blue-500" : "border-slate-200 hover:border-blue-200"}
              `}
            >
              <span>{type}</span>
              {selected.includes(type) && <CheckCircle size={20} className="text-blue-600" />}
            </button>
          ))}
        </div>

        <button onClick={checkAnswer} className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold shadow-lg hover:bg-blue-700 transition-colors">
          Check Answer
        </button>

        {feedback && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`font-bold ${feedback === "Correct!" ? "text-green-600" : "text-red-500"}`}>
            {feedback}
          </motion.p>
        )}
      </div>

      <div className="flex space-x-4 mt-auto w-full justify-between items-center pt-8 border-t border-slate-100">
        <button onClick={onPrev} className="flex items-center space-x-2 px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-full font-medium shadow-sm hover:bg-slate-50 transition-colors">
          <ArrowLeft size={18} /> <span>Back</span>
        </button>
        <div className="flex-1"></div>
      </div>
    </div>
  );
}
