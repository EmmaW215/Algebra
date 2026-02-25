import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, AlertTriangle } from "lucide-react";

type StepStatus = "correct" | "incorrect" | "none";

interface Scenario {
  id: number;
  student: string;
  equation: string;
  steps: {
    id: number;
    latex: string; // Using simple text representation for now
    description: string;
    status: StepStatus;
    feedback: string;
  }[];
  correctAnalysis: "no_mistake" | "step_1" | "step_2";
  successMessage: string;
}

const scenarios: Scenario[] = [
  {
    id: 1,
    student: "Lisa",
    equation: "42 = 6a",
    steps: [
      {
        id: 1,
        latex: "42 / 6 = 6a / a",
        description: "Divided left side by 6, right side by a",
        status: "incorrect",
        feedback: "You must do the SAME thing to both sides. Dividing by 6 and a is not allowed."
      },
      {
        id: 2,
        latex: "7 = 6",
        description: "Simplified result",
        status: "none", // Dependent on previous error
        feedback: "This result is incorrect because the previous step was invalid."
      }
    ],
    correctAnalysis: "step_1",
    successMessage: "Correct! Lisa divided by different terms on each side."
  },
  {
    id: 2,
    student: "Jin",
    equation: "x + 4.7 = 11.2",
    steps: [
      {
        id: 1,
        latex: "x + 4.7 - 4.7 = 11.2 - 4.7",
        description: "Subtract 4.7 from both sides",
        status: "correct",
        feedback: "This step is correct! He used the inverse operation on both sides."
      },
      {
        id: 2,
        latex: "x = 7.5",
        description: "Calculate the result",
        status: "incorrect",
        feedback: "Calculation error! 11.2 - 4.7 is 6.5, not 7.5."
      }
    ],
    correctAnalysis: "step_2",
    successMessage: "Right! Jin set it up correctly but made a subtraction error."
  },
  {
    id: 3,
    student: "Ofra",
    equation: "3x = 4.5",
    steps: [
      {
        id: 1,
        latex: "3x / 3 = 4.5 / 3",
        description: "Divide both sides by 3",
        status: "correct",
        feedback: "Correct setup. Dividing by the coefficient isolates x."
      },
      {
        id: 2,
        latex: "x = 1.5",
        description: "Calculate the result",
        status: "correct",
        feedback: "Correct calculation. 4.5 divided by 3 is 1.5."
      }
    ],
    correctAnalysis: "no_mistake",
    successMessage: "Spot on! Ofra solved the equation perfectly."
  }
];

export default function Scene8Mistakes({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [scenarioIdx, setScenarioIdx] = useState(0);
  const [selectedAnalysis, setSelectedAnalysis] = useState<"no_mistake" | "step_1" | "step_2" | null>(null);
  const [isResolved, setIsResolved] = useState(false);

  const scenario = scenarios[scenarioIdx];

  const handleSelect = (selection: "no_mistake" | "step_1" | "step_2") => {
    if (isResolved) return;
    setSelectedAnalysis(selection);
    
    if (selection === scenario.correctAnalysis) {
      setIsResolved(true);
    }
  };

  const nextScenario = () => {
    if (scenarioIdx < scenarios.length - 1) {
      setScenarioIdx(s => s + 1);
      setSelectedAnalysis(null);
      setIsResolved(false);
    } else {
      onNext();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-2"
      >
        <h2 className="text-3xl font-bold text-slate-800">Spot the Mistake</h2>
        <p className="text-slate-600">Analyze {scenario.student}'s work. Click the step where the <strong>first</strong> mistake occurs, or select "No Mistake".</p>
      </motion.div>

      {/* Work Card */}
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
        <div className="bg-slate-100 px-6 py-4 border-b border-slate-200 flex justify-between items-center">
          <span className="font-bold text-slate-700">{scenario.student}'s Solution</span>
          <span className="font-mono bg-white px-3 py-1 rounded border border-slate-300 text-slate-800">{scenario.equation}</span>
        </div>
        
        <div className="p-6 space-y-4">
          {scenario.steps.map((step, idx) => {
            const stepKey = idx === 0 ? "step_1" : "step_2";
            const isSelected = selectedAnalysis === stepKey;
            const isCorrectChoice = scenario.correctAnalysis === stepKey;
            
            let borderClass = "border-slate-200 hover:border-indigo-300";
            if (isSelected) {
              borderClass = isCorrectChoice ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50";
            } else if (isResolved && isCorrectChoice) {
              borderClass = "border-green-500 bg-green-50";
            }

            return (
              <motion.button
                key={step.id}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => handleSelect(stepKey as any)}
                disabled={isResolved}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all ${borderClass}`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-mono text-lg font-bold text-slate-800 mb-1">{step.latex}</div>
                    <div className="text-sm text-slate-500">{step.description}</div>
                  </div>
                  {isSelected && (
                    <div>
                      {isCorrectChoice ? <CheckCircle className="text-green-600" /> : <XCircle className="text-red-600" />}
                    </div>
                  )}
                </div>
                {isSelected && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className={`mt-2 text-sm font-medium ${isCorrectChoice ? "text-green-700" : "text-red-700"}`}
                  >
                    {isCorrectChoice ? scenario.successMessage : step.feedback}
                  </motion.div>
                )}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* No Mistake Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => handleSelect("no_mistake")}
        disabled={isResolved}
        className={`px-8 py-3 rounded-full font-bold shadow-sm border-2 transition-colors flex items-center space-x-2
          ${selectedAnalysis === "no_mistake" 
            ? (scenario.correctAnalysis === "no_mistake" ? "bg-green-100 border-green-500 text-green-800" : "bg-red-100 border-red-500 text-red-800")
            : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
          }`}
      >
        <span>No Mistake</span>
        {selectedAnalysis === "no_mistake" && (
          scenario.correctAnalysis === "no_mistake" ? <CheckCircle size={18} /> : <XCircle size={18} />
        )}
      </motion.button>

      {/* Feedback for No Mistake */}
      {selectedAnalysis === "no_mistake" && (
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`text-sm font-medium ${scenario.correctAnalysis === "no_mistake" ? "text-green-600" : "text-red-600"}`}
        >
          {scenario.correctAnalysis === "no_mistake" 
            ? scenario.successMessage 
            : "Actually, there is a mistake. Look closely at the steps!"}
        </motion.p>
      )}

      {/* Navigation */}
      <div className="flex space-x-4 mt-auto w-full justify-between items-center pt-4">
        <button
          onClick={onPrev}
          className="flex items-center space-x-2 px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-full font-medium shadow-sm hover:bg-slate-50 transition-colors"
        >
          <ArrowLeft size={18} />
          <span>Back</span>
        </button>

        {isResolved && (
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextScenario}
            className="flex items-center space-x-2 px-6 py-3 bg-slate-900 text-white rounded-full font-medium shadow-lg hover:bg-slate-800 transition-colors"
          >
            <span>{scenarioIdx < scenarios.length - 1 ? "Next Scenario" : "Next Scene"}</span>
            <ArrowRight size={18} />
          </motion.button>
        )}
      </div>
    </div>
  );
}
