import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import Scene1Variables from "./Scene1Variables";
import Scene2Expressions from "./Scene2Expressions";
import Scene3Equations from "./Scene3Equations";
import Scene4TestingSolutions from "./Scene4TestingSolutions";
import Scene5Practice from "./Scene5Practice";
import Scene6AddSub from "./Scene6AddSub";
import Scene7MultDiv from "./Scene7MultDiv";
import Scene8Mistakes from "./Scene8Mistakes";
import Scene9Inequalities from "./Scene9Inequalities";
import Scene10TestingInequalities from "./Scene10TestingInequalities";
import Scene11CombiningLikeTerms from "./Scene11CombiningLikeTerms";
import Scene12NegativeCoeffs from "./Scene12NegativeCoeffs";
import Scene13RationalCoeffs from "./Scene13RationalCoeffs";
import Scene14DistributiveIntro from "./Scene14DistributiveIntro";
import Scene15Factoring from "./Scene15Factoring";
import Scene16DistributionCombine from "./Scene16DistributionCombine";
import Scene17EquivalentExpressions from "./Scene17EquivalentExpressions";

export default function Unit1({ onBack }: { onBack: () => void }) {
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
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              1
            </div>
            <h1 className="text-xl font-bold text-slate-800">Unit 1: Equations & Inequalities</h1>
          </div>
        </div>
        <div className="flex space-x-2 overflow-x-auto max-w-md no-scrollbar">
          {Array.from({ length: 17 }, (_, i) => i + 1).map((s) => (
            <button
              key={s}
              onClick={() => setScene(s)}
              className={`w-3 h-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex-shrink-0 ${
                scene === s ? "bg-indigo-600" : "bg-slate-300 hover:bg-slate-400"
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
              <Scene1Variables onNext={nextScene} />
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
              <Scene2Expressions onNext={nextScene} onPrev={prevScene} />
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
              <Scene3Equations onNext={nextScene} onPrev={prevScene} />
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
              <Scene4TestingSolutions onNext={nextScene} onPrev={prevScene} />
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
              <Scene5Practice onNext={nextScene} onPrev={prevScene} />
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
              <Scene6AddSub onNext={nextScene} onPrev={prevScene} />
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
              <Scene7MultDiv onNext={nextScene} onPrev={prevScene} />
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
              <Scene8Mistakes onNext={nextScene} onPrev={prevScene} />
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
              <Scene9Inequalities onNext={nextScene} onPrev={prevScene} />
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
              <Scene10TestingInequalities onNext={nextScene} onPrev={prevScene} />
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
              <Scene11CombiningLikeTerms onNext={nextScene} onPrev={prevScene} />
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
              <Scene12NegativeCoeffs onNext={nextScene} onPrev={prevScene} />
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
              <Scene13RationalCoeffs onNext={nextScene} onPrev={prevScene} />
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
              <Scene14DistributiveIntro onNext={nextScene} onPrev={prevScene} />
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
              <Scene15Factoring onNext={nextScene} onPrev={prevScene} />
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
              <Scene16DistributionCombine onNext={nextScene} onPrev={prevScene} />
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
              <Scene17EquivalentExpressions onNext={onBack} onPrev={prevScene} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
