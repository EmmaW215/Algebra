import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle, Divide, X } from "lucide-react";

type Operation = "multiply" | "divide";

interface Problem {
  id: number;
  equation: string;
  variable: string;
  val: number; // The number to operate with
  correctOp: Operation;
  startLeft: string; // e.g. "6t"
  startRight: string; // e.g. "54"
  result: number;
}

const problems: Problem[] = [
  {
    id: 1,
    equation: "6t = 54",
    variable: "t",
    val: 6,
    correctOp: "divide",
    startLeft: "6t",
    startRight: "54",
    result: 9
  },
  {
    id: 2,
    equation: "x / 5 = 7",
    variable: "x",
    val: 5,
    correctOp: "multiply",
    startLeft: "x / 5",
    startRight: "7",
    result: 35
  },
  {
    id: 3,
    equation: "8w = 72",
    variable: "w",
    val: 8,
    correctOp: "divide",
    startLeft: "8w",
    startRight: "72",
    result: 9
  }
];

export default function Scene7MultDiv({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [problemIdx, setProblemIdx] = useState(0);
  const [step, setStep] = useState<"ask" | "animating" | "solved">("ask");
  const [feedback, setFeedback] = useState<string | null>(null);

  const problem = problems[problemIdx];

  const handleOp = (op: Operation) => {
    if (op === problem.correctOp) {
      setStep("animating");
      setFeedback(null);
      // Animation sequence handled by render logic, but we wait to show "solved"
      setTimeout(() => setStep("solved"), 2500);
    } else {
      setFeedback(`Incorrect. To undo ${problem.correctOp === 'divide' ? 'multiplication' : 'division'}, use ${problem.correctOp}.`);
    }
  };

  const nextProblem = () => {
    if (problemIdx < problems.length - 1) {
      setProblemIdx(p => p + 1);
      setStep("ask");
      setFeedback(null);
    } else {
      onNext();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8">
      <motion.h2 
        key={problem.id}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-slate-800"
      >
        Inverse Operations: Mult & Div
      </motion.h2>
      
      <p className="text-lg text-slate-600 max-w-md">
        To isolate the variable, we must perform the <strong>inverse</strong> (opposite) operation on both sides.
      </p>

      {/* Equation Display */}
      <div className="h-48 flex items-center justify-center w-full">
        <div className="text-4xl font-mono font-bold text-slate-800 flex flex-col items-center justify-center bg-white p-8 rounded-2xl shadow-sm border border-slate-200 min-w-[300px]">
          
          <div className="flex items-center space-x-4 relative">
            {/* Left Side */}
            <div className="flex items-center space-x-2">
              <span>{problem.startLeft}</span>
              <AnimatePresence>
                {step !== "ask" && (
                  <motion.span
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-indigo-600"
                  >
                    {problem.correctOp === "multiply" ? ` • ${problem.val}` : ` / ${problem.val}`}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>

            <span>=</span>

            {/* Right Side */}
            <div className="flex items-center space-x-2">
              <span>{problem.startRight}</span>
              <AnimatePresence>
                {step !== "ask" && (
                  <motion.span
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-indigo-600"
                  >
                    {problem.correctOp === "multiply" ? ` • ${problem.val}` : ` / ${problem.val}`}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Result Line */}
          <AnimatePresence>
            {step === "solved" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mt-4 border-t-2 border-slate-800 pt-4 w-full flex justify-center text-emerald-600"
              >
                {problem.variable} = {problem.result}
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>

      {/* Controls */}
      <div className="h-32 flex flex-col items-center justify-center space-y-4">
        {step === "ask" && (
          <>
            <p className="text-slate-500 font-medium">How do we isolate {problem.variable}?</p>
            <div className="flex space-x-4">
              <button
                onClick={() => handleOp("multiply")}
                className="flex items-center space-x-2 px-6 py-3 bg-white border-2 border-slate-200 rounded-xl hover:bg-indigo-50 hover:border-indigo-200 transition-colors font-bold text-slate-700"
              >
                <X size={20} />
                <span>Multiply by {problem.val}</span>
              </button>
              <button
                onClick={() => handleOp("divide")}
                className="flex items-center space-x-2 px-6 py-3 bg-white border-2 border-slate-200 rounded-xl hover:bg-indigo-50 hover:border-indigo-200 transition-colors font-bold text-slate-700"
              >
                <Divide size={20} />
                <span>Divide by {problem.val}</span>
              </button>
            </div>
            {feedback && <p className="text-red-500 font-medium">{feedback}</p>}
          </>
        )}

        {step === "solved" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center space-y-4"
          >
            <div className="flex items-center space-x-2 text-green-600 font-bold text-lg">
              <CheckCircle size={24} />
              <span>Correct!</span>
            </div>
            <button
              onClick={nextProblem}
              className="px-8 py-3 bg-slate-900 text-white rounded-full font-bold shadow-lg hover:bg-slate-800 transition-colors flex items-center space-x-2"
            >
              <span>{problemIdx < problems.length - 1 ? "Next Equation" : "Finished one-step equations, Now test your knowledge"}</span>
              <ArrowRight size={18} />
            </button>
          </motion.div>
        )}
      </div>

      {/* Nav */}
      <div className="flex space-x-4 mt-auto w-full justify-start">
        <button
          onClick={onPrev}
          className="flex items-center space-x-2 px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-full font-medium shadow-sm hover:bg-slate-50 transition-colors"
        >
          <ArrowLeft size={18} />
          <span>Back</span>
        </button>
      </div>
    </div>
  );
}
