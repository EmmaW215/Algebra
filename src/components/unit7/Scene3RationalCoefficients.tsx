import { motion } from "motion/react";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function Scene3RationalCoefficients({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [problem, setProblem] = useState(0);
  const [step, setStep] = useState(0);

  const problems = [
    {
      id: 0,
      title: "Decimals",
      expr: "-5.55 - 8.55c + 4.35c",
      steps: [
        { text: "Identify like terms (c terms)", val: "-8.55c + 4.35c" },
        { text: "Combine coefficients (-8.55 + 4.35)", val: "-4.20c" },
        { text: "Final Expression", val: "-5.55 - 4.2c" }
      ]
    },
    {
      id: 1,
      title: "Fractions",
      expr: "2/5m - 4/5 - 3/5m",
      steps: [
        { text: "Group m terms", val: "2/5m - 3/5m" },
        { text: "Combine coefficients (2/5 - 3/5)", val: "-1/5m" },
        { text: "Final Expression", val: "-1/5m - 4/5" }
      ]
    },
    {
      id: 2,
      title: "Distribution & Fractions",
      expr: "2(1/5m - 2/5) + 3/5",
      steps: [
        { text: "Distribute the 2", val: "2/5m - 4/5 + 3/5" },
        { text: "Combine constants (-4/5 + 3/5)", val: "-1/5" },
        { text: "Final Expression", val: "2/5m - 1/5" }
      ]
    },
    {
      id: 3,
      title: "Complex Fractions",
      expr: "9/8m + 9/10 - 2m - 3/5",
      steps: [
        { text: "Group m terms: 9/8m - 2m", val: "9/8m - 16/8m = -7/8m" },
        { text: "Group constants: 9/10 - 3/5", val: "9/10 - 6/10 = 3/10" },
        { text: "Final Expression", val: "-7/8m + 3/10" }
      ]
    }
  ];

  const currentProblem = problems[problem];

  const handleNextStep = () => {
    if (step < currentProblem.steps.length - 1) {
      setStep(step + 1);
    } else if (problem < problems.length - 1) {
      setProblem(problem + 1);
      setStep(0);
    } else {
      onNext();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Rational Coefficients</h2>
      
      <div className="flex space-x-2 mb-4">
        {problems.map((p, i) => (
          <button
            key={i}
            onClick={() => { setProblem(i); setStep(0); }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              problem === i ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-500 hover:bg-slate-200"
            }`}
          >
            {p.title}
          </button>
        ))}
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 w-full max-w-2xl min-h-[400px] flex flex-col">
        <div className="mb-8">
          <h3 className="text-lg font-medium text-slate-500 mb-2">Simplify:</h3>
          <p className="text-4xl font-mono font-bold text-slate-800">{currentProblem.expr}</p>
        </div>

        <div className="space-y-4 flex-1">
          {currentProblem.steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: step >= i ? 1 : 0.3, x: step >= i ? 0 : -20 }}
              className={`flex items-center space-x-4 p-4 rounded-xl border ${
                step === i ? "bg-indigo-50 border-indigo-200 ring-2 ring-indigo-100" : "bg-slate-50 border-slate-100"
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                step > i ? "bg-emerald-100 text-emerald-600" : step === i ? "bg-indigo-600 text-white" : "bg-slate-200 text-slate-400"
              }`}>
                {step > i ? <Check size={16} /> : <span>{i + 1}</span>}
              </div>
              <div className="text-left flex-1">
                <p className="text-sm text-slate-500">{s.text}</p>
                <p className="text-xl font-mono font-bold text-slate-800">{s.val}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex space-x-4 mt-auto pt-8">
        <button
          onClick={onPrev}
          className="px-6 py-2 bg-white border border-slate-200 text-slate-700 rounded-full font-medium hover:bg-slate-50 transition-colors"
        >
          Back
        </button>
        <button
          onClick={handleNextStep}
          className="flex items-center space-x-2 px-6 py-2 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors"
        >
          <span>{step < currentProblem.steps.length - 1 ? "Next Step" : problem < problems.length - 1 ? "Next Problem" : "Finish"}</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
