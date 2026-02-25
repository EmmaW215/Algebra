import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, RefreshCcw } from "lucide-react";

type ProblemPart = 
  | { type: 'constant', val: string | number }
  | { type: 'op', val: string }
  | { type: 'var', val: string };

interface Problem {
  id: number;
  instruction: string;
  variable: string;
  parts: ProblemPart[];
  target: number;
  targetPosition: 'left' | 'right'; // Is the target on the left or right side of '='?
  options: number[];
  correctAnswer: number;
  explanation: (val: number) => string;
}

const problems: Problem[] = [
  {
    id: 1,
    instruction: "Select the solution to the equation.",
    variable: "g",
    // 3 + g = 10
    parts: [
      { type: 'constant', val: 3 },
      { type: 'op', val: '+' },
      { type: 'var', val: 'g' }
    ],
    target: 10,
    targetPosition: 'right',
    options: [6, 7, 8],
    correctAnswer: 7,
    explanation: (val) => `3 + ${val} = ${3 + val}`,
  },
  {
    id: 2,
    instruction: "Select the solution to the equation.",
    variable: "k",
    // 3 = k - 2
    parts: [
      { type: 'var', val: 'k' },
      { type: 'op', val: '-' },
      { type: 'constant', val: 2 }
    ],
    target: 3,
    targetPosition: 'left',
    options: [3, 4, 5],
    correctAnswer: 5,
    explanation: (val) => `${val} - 2 = ${val - 2}`,
  },
  {
    id: 3,
    instruction: "Select the solution to the equation.",
    variable: "w",
    // 10 = 2w
    parts: [
      { type: 'constant', val: 2 },
      { type: 'var', val: 'w' }
    ],
    target: 10,
    targetPosition: 'left',
    options: [4, 5, 6],
    correctAnswer: 5,
    explanation: (val) => `2 • ${val} = ${2 * val}`,
  },
  {
    id: 4,
    instruction: "Select the solution to the equation.",
    variable: "e",
    // e / 2 = 6
    parts: [
      { type: 'var', val: 'e' },
      { type: 'op', val: '/' },
      { type: 'constant', val: 2 }
    ],
    target: 6,
    targetPosition: 'right',
    options: [12, 15, 18],
    correctAnswer: 12,
    explanation: (val) => `${val} / 2 = ${val / 2}`,
  }
];

export default function Scene5Practice({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
  const [selectedVal, setSelectedVal] = useState<number | null>(null);
  const [isChecking, setIsChecking] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const problem = problems[currentProblemIndex];
  const isCorrect = selectedVal === problem.correctAnswer;

  const handleSelect = (val: number) => {
    if (isChecking || showResult) return;
    setSelectedVal(val);
    setIsChecking(true);
    
    // Animation sequence
    setTimeout(() => {
      setIsChecking(false);
      setShowResult(true);
    }, 1500);
  };

  const nextProblem = () => {
    setSelectedVal(null);
    setShowResult(false);
    setIsChecking(false);
    if (currentProblemIndex < problems.length - 1) {
      setCurrentProblemIndex(prev => prev + 1);
    } else {
      onNext();
    }
  };

  const retry = () => {
    setSelectedVal(null);
    setShowResult(false);
    setIsChecking(false);
  };

  // Helper to render the equation parts
  const renderEquation = () => {
    const equationContent = (
      <div className="flex items-center space-x-2 text-4xl font-mono font-bold text-slate-800">
        {problem.parts.map((part, idx) => {
          if (part.type === 'var') {
            return (
              <div key={idx} className="relative min-w-[1.5em] text-center">
                <AnimatePresence mode="wait">
                  {selectedVal === null ? (
                    <motion.span 
                      key="var"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-indigo-600"
                    >
                      {part.val}
                    </motion.span>
                  ) : (
                    <motion.span 
                      key="val"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-indigo-600 inline-block bg-indigo-50 px-2 rounded border border-indigo-200"
                    >
                      {selectedVal}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            );
          }
          return <span key={idx}>{part.val}</span>;
        })}
      </div>
    );

    const targetContent = <span className="text-4xl font-mono font-bold text-slate-800">{problem.target}</span>;
    const equals = <span className="text-4xl font-mono font-bold text-slate-400 mx-4">=</span>;

    return (
      <div className="flex items-center justify-center bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
        {problem.targetPosition === 'left' ? (
          <>
            {targetContent}
            {equals}
            {equationContent}
          </>
        ) : (
          <>
            {equationContent}
            {equals}
            {targetContent}
          </>
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8">
      <div className="w-full max-w-2xl flex justify-between items-center text-slate-400 text-sm font-medium uppercase tracking-wider">
        <span>Problem {currentProblemIndex + 1} of {problems.length}</span>
        <span>Solve for {problem.variable}</span>
      </div>

      <motion.h2 
        key={problem.id}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold text-slate-800"
      >
        {problem.instruction}
      </motion.h2>

      {/* Equation Display */}
      <div className="h-32 flex items-center justify-center w-full">
        {renderEquation()}
      </div>

      {/* Feedback Area */}
      <div className="h-24 w-full max-w-md flex items-center justify-center">
        <AnimatePresence mode="wait">
          {showResult && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`flex flex-col items-center p-4 rounded-xl w-full ${isCorrect ? "bg-green-50" : "bg-red-50"}`}
            >
              <div className={`flex items-center space-x-2 font-bold text-lg ${isCorrect ? "text-green-700" : "text-red-700"}`}>
                {isCorrect ? <CheckCircle size={24} /> : <XCircle size={24} />}
                <span>
                  {isCorrect 
                    ? "Correct! It matches." 
                    : `Incorrect. ${problem.explanation(selectedVal!)} ≠ ${problem.target}`}
                </span>
              </div>
              
              {!isCorrect && (
                <button 
                  onClick={retry}
                  className="mt-2 flex items-center space-x-1 text-sm text-slate-500 hover:text-slate-800 underline"
                >
                  <RefreshCcw size={14} />
                  <span>Try again</span>
                </button>
              )}
            </motion.div>
          )}
          {isChecking && (
            <motion.div
              key="checking"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-slate-500 font-mono"
            >
              Checking...
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Options */}
      <div className="flex space-x-6">
        {problem.options.map((opt) => (
          <motion.button
            key={opt}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleSelect(opt)}
            disabled={isChecking || (showResult && isCorrect)}
            className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold shadow-md transition-all
              ${selectedVal === opt 
                ? "bg-indigo-600 text-white ring-4 ring-indigo-200" 
                : "bg-white text-slate-700 hover:bg-indigo-50 border-2 border-slate-200"
              }
              ${(showResult && isCorrect && selectedVal !== opt) ? "opacity-50 cursor-not-allowed" : ""}
            `}
          >
            {opt}
          </motion.button>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex space-x-4 mt-auto pt-8">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onPrev}
          className="flex items-center space-x-2 px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-full font-medium shadow-sm hover:bg-slate-50 transition-colors"
        >
          <ArrowLeft size={18} />
          <span>Back</span>
        </motion.button>
        
        {showResult && isCorrect && (
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextProblem}
            className="flex items-center space-x-2 px-6 py-3 bg-slate-900 text-white rounded-full font-medium shadow-lg hover:bg-slate-800 transition-colors"
          >
            <span>{currentProblemIndex < problems.length - 1 ? "Next Problem" : "Next Lesson"}</span>
            <ArrowRight size={18} />
          </motion.button>
        )}
      </div>
    </div>
  );
}
