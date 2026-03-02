import { useState } from "react";
import { motion } from "motion/react";
import ReactMarkdown from "react-markdown";
import { Check, X, ArrowRight, ArrowLeft } from "lucide-react";

interface Problem {
  question: string;
  options?: string[];
  answer?: string; // For multiple choice, the correct option text or index
  type: "multiple-choice" | "text";
  explanation?: string;
}

interface SceneData {
  title: string;
  content: string[]; // Array of markdown strings for step-by-step display
  problem?: Problem;
}

export default function GenericScene({ 
  data, 
  onNext, 
  onPrev 
}: { 
  data: SceneData; 
  onNext: () => void; 
  onPrev: () => void;
}) {
  const [step, setStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const totalSteps = data.content.length + (data.problem ? 1 : 0);
  const isProblemStep = step === data.content.length;

  const handleNext = () => {
    if (step < totalSteps - 1) {
      setStep(step + 1);
    } else {
      onNext();
    }
  };

  const handleOptionClick = (index: number) => {
    if (showExplanation) return;
    setSelectedOption(index);
    setShowExplanation(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800 text-center">{data.title}</h2>

      <div className="flex-1 w-full overflow-y-auto space-y-6">
        {data.content.map((text, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: step >= index ? 1 : 0, 
              y: step >= index ? 0 : 20,
              display: step >= index ? "block" : "none"
            }}
            className="prose prose-slate max-w-none bg-white p-6 rounded-xl shadow-sm border border-slate-100"
          >
            <ReactMarkdown>{text}</ReactMarkdown>
          </motion.div>
        ))}

        {isProblemStep && data.problem && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-indigo-50 p-8 rounded-2xl border border-indigo-100 mt-8"
          >
            <h3 className="text-xl font-bold text-indigo-900 mb-4">Practice Problem</h3>
            <div className="prose prose-indigo mb-6">
              <ReactMarkdown>{data.problem.question}</ReactMarkdown>
            </div>

            {data.problem.type === "multiple-choice" && data.problem.options && (
              <div className="space-y-3">
                {data.problem.options.map((option, idx) => {
                  const isSelected = selectedOption === idx;
                  // Simple check: if the option text contains the answer key or matches exactly
                  // For this implementation, let's assume data.problem.answer is the index or exact text
                  // But the prompt data is loose. Let's assume the prompt provides the correct answer index or we infer it.
                  // Actually, for now, let's just show the explanation on click regardless of correctness, 
                  // or we need the data to specify the correct index.
                  // I'll update the interface to include correctIndex.
                  
                  return (
                    <button
                      key={idx}
                      onClick={() => handleOptionClick(idx)}
                      disabled={showExplanation}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center justify-between ${
                        isSelected
                          ? "border-indigo-600 bg-indigo-100 text-indigo-900"
                          : "border-white bg-white hover:border-indigo-200 text-slate-700"
                      }`}
                    >
                      <span className="flex-1"><ReactMarkdown>{option}</ReactMarkdown></span>
                      {isSelected && <Check size={20} className="text-indigo-600 ml-2" />}
                    </button>
                  );
                })}
              </div>
            )}

            {showExplanation && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mt-6 p-4 bg-white rounded-xl border border-slate-200 text-slate-700"
              >
                <p className="font-bold mb-2">Explanation:</p>
                <ReactMarkdown>{data.problem.explanation || "Great job practicing!"}</ReactMarkdown>
              </motion.div>
            )}
          </motion.div>
        )}
      </div>

      <div className="flex space-x-4 pt-4">
        <button
          onClick={() => {
            if (step > 0) setStep(step - 1);
            else onPrev();
          }}
          className="px-6 py-2 bg-white border border-slate-200 text-slate-700 rounded-full font-medium hover:bg-slate-50 transition-colors flex items-center"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back
        </button>
        <button
          onClick={handleNext}
          className="px-6 py-2 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors flex items-center"
        >
          {step < totalSteps - 1 ? "Next" : "Next Scene"}
          <ArrowRight size={16} className="ml-2" />
        </button>
      </div>
    </div>
  );
}
