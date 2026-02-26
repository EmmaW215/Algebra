import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import Scene1SameToBothSides from "./Scene1SameToBothSides";
import Scene2IntroTwoStep from "./Scene2IntroTwoStep";
import Scene3TwoStepIntuition from "./Scene3TwoStepIntuition";
import Scene4WorkedExample from "./Scene4WorkedExample";
import Scene5FindMistake from "./Scene5FindMistake";
import Scene6Review from "./Scene6Review";
import Scene7InequalitiesIntro from "./Scene7InequalitiesIntro";
import Scene8InequalitiesPractice from "./Scene8InequalitiesPractice";
import Scene9TwoStepInequalities from "./Scene9TwoStepInequalities";
import Scene10IntroRatios from "./Scene10IntroRatios";
import Scene11EquivalentRatios from "./Scene11EquivalentRatios";
import Scene12RatioWordProblems from "./Scene12RatioWordProblems";
import Scene13ComparingRatios from "./Scene13ComparingRatios";
import Scene14RatiosCoordinatePlane from "./Scene14RatiosCoordinatePlane";
import Scene15MeasurementRatios from "./Scene15MeasurementRatios";
import Scene16PartToWhole from "./Scene16PartToWhole";
import Scene17IntroRates from "./Scene17IntroRates";

export default function Unit2({ onBack }: { onBack: () => void }) {
  const [scene, setScene] = useState(1);

  const nextScene = () => setScene((s) => Math.min(s + 1, 17));
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
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              2
            </div>
            <h1 className="text-xl font-bold text-slate-800">Unit 2: Two-Step Equations & Units</h1>
          </div>
        </div>
        <div className="flex space-x-2 overflow-x-auto max-w-md no-scrollbar">
          {Array.from({ length: 17 }, (_, i) => i + 1).map((s) => (
            <button
              key={s}
              onClick={() => setScene(s)}
              className={`w-3 h-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 flex-shrink-0 ${
                scene === s ? "bg-emerald-600" : "bg-slate-300 hover:bg-slate-400"
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
              <Scene1SameToBothSides onNext={nextScene} />
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
              <Scene2IntroTwoStep onNext={nextScene} onPrev={prevScene} />
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
              <Scene3TwoStepIntuition onNext={nextScene} onPrev={prevScene} />
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
              <Scene4WorkedExample onNext={nextScene} onPrev={prevScene} />
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
              <Scene5FindMistake onNext={nextScene} onPrev={prevScene} />
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
              <Scene6Review onNext={nextScene} onPrev={prevScene} />
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
              <Scene7InequalitiesIntro onNext={nextScene} onPrev={prevScene} />
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
              <Scene8InequalitiesPractice onNext={nextScene} onPrev={prevScene} />
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
              <Scene9TwoStepInequalities onNext={nextScene} onPrev={prevScene} />
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
              <Scene10IntroRatios onNext={nextScene} onPrev={prevScene} />
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
              <Scene11EquivalentRatios onNext={nextScene} onPrev={prevScene} />
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
              <Scene12RatioWordProblems onNext={nextScene} onPrev={prevScene} />
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
              <Scene13ComparingRatios onNext={nextScene} onPrev={prevScene} />
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
              <Scene14RatiosCoordinatePlane onNext={nextScene} onPrev={prevScene} />
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
              <Scene15MeasurementRatios onNext={nextScene} onPrev={prevScene} />
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
              <Scene16PartToWhole onNext={nextScene} onPrev={prevScene} />
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
              <Scene17IntroRates onNext={onBack} onPrev={prevScene} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
