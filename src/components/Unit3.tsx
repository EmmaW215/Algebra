import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import Scene1IntroProportional from "./Scene1IntroProportional";
import Scene2ConstantGraphically from "./Scene2ConstantGraphically";
import Scene3ConstantFromGraph from "./Scene3ConstantFromGraph";
import Scene4ConstantFromEquation from "./Scene4ConstantFromEquation";
import Scene5ConstantEquationPractice from "./Scene5ConstantEquationPractice";
import Scene6ConstantFromTable from "./Scene6ConstantFromTable";
import Scene7ConstantTableEquation from "./Scene7ConstantTableEquation";
import Scene8ComparingConstants from "./Scene8ComparingConstants";
import Scene9ComparingCars from "./Scene9ComparingCars";
import Scene10InterpretConstant from "./Scene10InterpretConstant";
import Scene11ProportionalTables from "./Scene11ProportionalTables";
import Scene12TicketsAndBananas from "./Scene12TicketsAndBananas";
import Scene13BleachAndWater from "./Scene13BleachAndWater";
import Scene14IdentifyGraphs from "./Scene14IdentifyGraphs";
import Scene15GraphExamples from "./Scene15GraphExamples";
import Scene16GraphQuiz from "./Scene16GraphQuiz";
import Scene17InterpretGraph from "./Scene17InterpretGraph";
import Scene18SolvingProportions from "./Scene18SolvingProportions";
import Scene19WritingProportions from "./Scene19WritingProportions";
import Scene20Cookies from "./Scene20Cookies";
import Scene21HotDogs from "./Scene21HotDogs";
import Scene22MultiStep from "./Scene22MultiStep";
import Scene23EquationsProportional from "./Scene23EquationsProportional";
import Scene24WritingEquationsTable from "./Scene24WritingEquationsTable";
import Scene25WritingEquations from "./Scene25WritingEquations";
import Scene26CompareRates from "./Scene26CompareRates";
import Scene27CompareSpeeds from "./Scene27CompareSpeeds";
import Scene28GraphUnitRate from "./Scene28GraphUnitRate";
import Scene29GraphFromTable from "./Scene29GraphFromTable";
import Scene30GraphFromEquation from "./Scene30GraphFromEquation";

export default function Unit3({ onBack }: { onBack: () => void }) {
  const [scene, setScene] = useState(1);

  const nextScene = () => setScene((s) => Math.min(s + 1, 30));
  const prevScene = () => setScene((s) => Math.max(s - 1, 1));

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between shadow-sm z-10">
        <div className="flex items-center space-x-4">
          <button 
            onClick={onBack}
            className="p-2 rounded-full hover:bg-slate-100 transition-colors text-slate-500 hover:text-slate-800"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              3
            </div>
            <h1 className="text-xl font-bold text-slate-800">Unit 3: Linear Relationships</h1>
          </div>
        </div>
        <div className="flex space-x-2 overflow-x-auto max-w-md no-scrollbar">
          {Array.from({ length: 30 }, (_, i) => i + 1).map((s) => (
            <button
              key={s}
              onClick={() => setScene(s)}
              className={`w-3 h-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex-shrink-0 ${
                scene === s ? "bg-blue-600" : "bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to scene ${s}`}
            />
          ))}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait">
          {scene === 1 && (
            <motion.div
              key="scene1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="absolute inset-0"
            >
              <Scene1IntroProportional onNext={nextScene} onPrev={prevScene} />
            </motion.div>
          )}
          {scene === 2 && (
            <motion.div
              key="scene2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="absolute inset-0"
            >
              <Scene2ConstantGraphically onNext={nextScene} onPrev={prevScene} />
            </motion.div>
          )}
          {scene === 3 && (
            <motion.div
              key="scene3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="absolute inset-0"
            >
              <Scene3ConstantFromGraph onNext={nextScene} onPrev={prevScene} />
            </motion.div>
          )}
          {scene === 4 && (
            <motion.div
              key="scene4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="absolute inset-0"
            >
              <Scene4ConstantFromEquation onNext={nextScene} onPrev={prevScene} />
            </motion.div>
          )}
          {scene === 5 && (
            <motion.div
              key="scene5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="absolute inset-0"
            >
              <Scene5ConstantEquationPractice onNext={nextScene} onPrev={prevScene} />
            </motion.div>
          )}
          {scene === 6 && (
            <motion.div
              key="scene6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="absolute inset-0"
            >
              <Scene6ConstantFromTable onNext={nextScene} onPrev={prevScene} />
            </motion.div>
          )}
          {scene === 7 && (
            <motion.div
              key="scene7"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="absolute inset-0"
            >
              <Scene7ConstantTableEquation onNext={nextScene} onPrev={prevScene} />
            </motion.div>
          )}
          {scene === 8 && (
            <motion.div
              key="scene8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="absolute inset-0"
            >
              <Scene8ComparingConstants onNext={nextScene} onPrev={prevScene} />
            </motion.div>
          )}
          {scene === 9 && (
            <motion.div
              key="scene9"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="absolute inset-0"
            >
              <Scene9ComparingCars onNext={nextScene} onPrev={prevScene} />
            </motion.div>
          )}
          {scene === 10 && (
            <motion.div
              key="scene10"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="absolute inset-0"
            >
              <Scene10InterpretConstant onNext={nextScene} onPrev={prevScene} />
            </motion.div>
          )}
          {scene === 11 && (
            <motion.div
              key="scene11"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="absolute inset-0"
            >
              <Scene11ProportionalTables onNext={nextScene} onPrev={prevScene} />
            </motion.div>
          )}
          {scene === 12 && (
            <motion.div
              key="scene12"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="absolute inset-0"
            >
              <Scene12TicketsAndBananas onNext={nextScene} onPrev={prevScene} />
            </motion.div>
          )}
          {scene === 13 && (
            <motion.div
              key="scene13"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="absolute inset-0"
            >
              <Scene13BleachAndWater onNext={nextScene} onPrev={prevScene} />
            </motion.div>
          )}
          {scene === 14 && (
            <motion.div
              key="scene14"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="absolute inset-0"
            >
              <Scene14IdentifyGraphs onNext={nextScene} onPrev={prevScene} />
            </motion.div>
          )}
          {scene === 15 && (
            <motion.div
              key="scene15"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="absolute inset-0"
            >
              <Scene15GraphExamples onNext={nextScene} onPrev={prevScene} />
            </motion.div>
          )}
          {scene === 16 && (
            <motion.div
              key="scene16"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="absolute inset-0"
            >
              <Scene16GraphQuiz onNext={nextScene} onPrev={prevScene} />
            </motion.div>
          )}
          {scene === 17 && (
            <motion.div
              key="scene17"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="absolute inset-0"
            >
              <Scene17InterpretGraph onNext={nextScene} onPrev={prevScene} />
            </motion.div>
          )}
          {scene === 18 && (
            <motion.div
              key="scene18"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="absolute inset-0"
            >
              <Scene18SolvingProportions onNext={nextScene} onPrev={prevScene} />
            </motion.div>
          )}
          {scene === 19 && (
            <motion.div
              key="scene19"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="absolute inset-0"
            >
              <Scene19WritingProportions onNext={nextScene} onPrev={prevScene} />
            </motion.div>
          )}
          {scene === 20 && (
            <motion.div
              key="scene20"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="absolute inset-0"
            >
              <Scene20Cookies onNext={nextScene} onPrev={prevScene} />
            </motion.div>
          )}
          {scene === 21 && (
            <motion.div
              key="scene21"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="absolute inset-0"
            >
              <Scene21HotDogs onNext={nextScene} onPrev={prevScene} />
            </motion.div>
          )}
          {scene === 22 && (
            <motion.div
              key="scene22"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="absolute inset-0"
            >
              <Scene22MultiStep onNext={nextScene} onPrev={prevScene} />
            </motion.div>
          )}
          {scene === 23 && (
            <motion.div
              key="scene23"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="absolute inset-0"
            >
              <Scene23EquationsProportional onNext={nextScene} onPrev={prevScene} />
            </motion.div>
          )}
          {scene === 24 && (
            <motion.div
              key="scene24"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="absolute inset-0"
            >
              <Scene24WritingEquationsTable onNext={nextScene} onPrev={prevScene} />
            </motion.div>
          )}
          {scene === 25 && (
            <motion.div
              key="scene25"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="absolute inset-0"
            >
              <Scene25WritingEquations onNext={nextScene} onPrev={prevScene} />
            </motion.div>
          )}
          {scene === 26 && (
            <motion.div
              key="scene26"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="absolute inset-0"
            >
              <Scene26CompareRates onNext={nextScene} onPrev={prevScene} />
            </motion.div>
          )}
          {scene === 27 && (
            <motion.div
              key="scene27"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="absolute inset-0"
            >
              <Scene27CompareSpeeds onNext={nextScene} onPrev={prevScene} />
            </motion.div>
          )}
          {scene === 28 && (
            <motion.div
              key="scene28"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="absolute inset-0"
            >
              <Scene28GraphUnitRate onNext={nextScene} onPrev={prevScene} />
            </motion.div>
          )}
          {scene === 29 && (
            <motion.div
              key="scene29"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="absolute inset-0"
            >
              <Scene29GraphFromTable onNext={nextScene} onPrev={prevScene} />
            </motion.div>
          )}
          {scene === 30 && (
            <motion.div
              key="scene30"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="absolute inset-0"
            >
              <Scene30GraphFromEquation onNext={onBack} onPrev={prevScene} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
