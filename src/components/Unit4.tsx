import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import Scene1DaysOfWeek from "./Scene1DaysOfWeek";
import Scene2TablesPattern from "./Scene2TablesPattern";
import Scene3ToothpickPattern from "./Scene3ToothpickPattern";
import Scene4GraphingPatterns from "./Scene4GraphingPatterns";
import Scene5InterpretingPatterns from "./Scene5InterpretingPatterns";
import Scene6OrderedPairs from "./Scene6OrderedPairs";
import Scene7GraphingSequences from "./Scene7GraphingSequences";
import Scene8TablesFromRules from "./Scene8TablesFromRules";
import Scene9WhatIsAFunction from "./Scene9WhatIsAFunction";
import Scene10EvalFunctionEq from "./Scene10EvalFunctionEq";
import Scene11FunctionNotation from "./Scene11FunctionNotation";
import Scene12EvalFunctionGraph from "./Scene12EvalFunctionGraph";
import Scene13EqVsFunc from "./Scene13EqVsFunc";
import Scene14ManipulatingFormulas from "./Scene14ManipulatingFormulas";
import Scene15FunctionFromEq from "./Scene15FunctionFromEq";
import Scene16LinearEarnings from "./Scene16LinearEarnings";
import Scene17SnowModel from "./Scene17SnowModel";
import Scene18SpendingMoney from "./Scene18SpendingMoney";
import Scene19Iceberg from "./Scene19Iceberg";
import Scene20PaintRoom from "./Scene20PaintRoom";
import Scene21RecognizingLinear from "./Scene21RecognizingLinear";
import Scene22LinearNonLinearTable from "./Scene22LinearNonLinearTable";
import Scene23LinearNonLinearWord from "./Scene23LinearNonLinearWord";
import Scene24LinearMissingValue from "./Scene24LinearMissingValue";
import Scene25InterpretingGraph from "./Scene25InterpretingGraph";

export default function Unit4({ onBack }: { onBack: () => void }) {
  const [scene, setScene] = useState(1);
  const totalScenes = 25;

  const nextScene = () => {
    if (scene < totalScenes) {
      setScene(scene + 1);
    } else {
      onBack();
    }
  };

  const prevScene = () => {
    if (scene > 1) {
      setScene(scene - 1);
    } else {
      onBack();
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between shadow-sm z-10">
        <div className="flex items-center space-x-4">
          <button 
            onClick={onBack}
            className="p-2 rounded-full hover:bg-slate-100 transition-colors text-slate-500 hover:text-slate-800"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              4
            </div>
            <h1 className="text-xl font-bold text-slate-800">Unit 4: Functions & Sequences</h1>
          </div>
        </div>
        
        {/* Progress Bar (Dots) */}
        <div className="flex space-x-1 overflow-x-auto max-w-md no-scrollbar items-center">
          {Array.from({ length: totalScenes }, (_, i) => i + 1).map((s) => (
            <button
              key={s}
              onClick={() => setScene(s)}
              className={`w-2 h-2 rounded-full transition-all focus:outline-none flex-shrink-0 ${
                scene === s ? "bg-purple-600 w-4" : "bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to scene ${s}`}
            />
          ))}
        </div>
      </header>

      <main className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={scene}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 overflow-y-auto"
          >
            {scene === 1 && <Scene1DaysOfWeek onNext={nextScene} onPrev={prevScene} />}
            {scene === 2 && <Scene2TablesPattern onNext={nextScene} onPrev={prevScene} />}
            {scene === 3 && <Scene3ToothpickPattern onNext={nextScene} onPrev={prevScene} />}
            {scene === 4 && <Scene4GraphingPatterns onNext={nextScene} onPrev={prevScene} />}
            {scene === 5 && <Scene5InterpretingPatterns onNext={nextScene} onPrev={prevScene} />}
            {scene === 6 && <Scene6OrderedPairs onNext={nextScene} onPrev={prevScene} />}
            {scene === 7 && <Scene7GraphingSequences onNext={nextScene} onPrev={prevScene} />}
            {scene === 8 && <Scene8TablesFromRules onNext={nextScene} onPrev={prevScene} />}
            {scene === 9 && <Scene9WhatIsAFunction onNext={nextScene} onPrev={prevScene} />}
            {scene === 10 && <Scene10EvalFunctionEq onNext={nextScene} onPrev={prevScene} />}
            {scene === 11 && <Scene11FunctionNotation onNext={nextScene} onPrev={prevScene} />}
            {scene === 12 && <Scene12EvalFunctionGraph onNext={nextScene} onPrev={prevScene} />}
            {scene === 13 && <Scene13EqVsFunc onNext={nextScene} onPrev={prevScene} />}
            {scene === 14 && <Scene14ManipulatingFormulas onNext={nextScene} onPrev={prevScene} />}
            {scene === 15 && <Scene15FunctionFromEq onNext={nextScene} onPrev={prevScene} />}
            {scene === 16 && <Scene16LinearEarnings onNext={nextScene} onPrev={prevScene} />}
            {scene === 17 && <Scene17SnowModel onNext={nextScene} onPrev={prevScene} />}
            {scene === 18 && <Scene18SpendingMoney onNext={nextScene} onPrev={prevScene} />}
            {scene === 19 && <Scene19Iceberg onNext={nextScene} onPrev={prevScene} />}
            {scene === 20 && <Scene20PaintRoom onNext={nextScene} onPrev={prevScene} />}
            {scene === 21 && <Scene21RecognizingLinear onNext={nextScene} onPrev={prevScene} />}
            {scene === 22 && <Scene22LinearNonLinearTable onNext={nextScene} onPrev={prevScene} />}
            {scene === 23 && <Scene23LinearNonLinearWord onNext={nextScene} onPrev={prevScene} />}
            {scene === 24 && <Scene24LinearMissingValue onNext={nextScene} onPrev={prevScene} />}
            {scene === 25 && <Scene25InterpretingGraph onNext={nextScene} onPrev={prevScene} />}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
