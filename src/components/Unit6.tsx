import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import Scene1IntroSquareRoots from "./Scene1IntroSquareRoots";
import Scene2IntroCubeRoots from "./Scene2IntroCubeRoots";
import Scene3CubeRootNegative from "./Scene3CubeRootNegative";
import Scene4SquareRootDecimal from "./Scene4SquareRootDecimal";
import Scene5CubeDimensions from "./Scene5CubeDimensions";
import Scene6IntroCombiningLikeTerms from "./Scene6IntroCombiningLikeTerms";
import Scene7CombiningLikeTermsNegative from "./Scene7CombiningLikeTermsNegative";
import Scene8CombiningLikeTermsRational from "./Scene8CombiningLikeTermsRational";
import Scene9DistributivePropertyVariables from "./Scene9DistributivePropertyVariables";
import Scene10FactoringDistributive from "./Scene10FactoringDistributive";
import Scene11CombiningNegativeDistribution from "./Scene11CombiningNegativeDistribution";
import Scene12EquivalentExpressions from "./Scene12EquivalentExpressions";
import Scene13InterpretingGraphExample from "./Scene13InterpretingGraphExample";
import Scene14InterpretingGraphsProblem from "./Scene14InterpretingGraphsProblem";

export default function Unit6({ onBack }: { onBack: () => void }) {
  const [scene, setScene] = useState(1);
  const totalScenes = 14;

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
            <div className="w-8 h-8 bg-rose-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              6
            </div>
            <h1 className="text-xl font-bold text-slate-800">Unit 6: Quadratics</h1>
          </div>
        </div>
        
        <div className="flex space-x-1 overflow-x-auto max-w-md no-scrollbar items-center">
          {Array.from({ length: totalScenes }, (_, i) => i + 1).map((s) => (
            <button
              key={s}
              onClick={() => setScene(s)}
              className={`w-2 h-2 rounded-full transition-all focus:outline-none flex-shrink-0 ${
                scene === s ? "bg-rose-600 w-4" : "bg-slate-300 hover:bg-slate-400"
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
            {scene === 1 && <Scene1IntroSquareRoots onNext={nextScene} onPrev={prevScene} />}
            {scene === 2 && <Scene2IntroCubeRoots onNext={nextScene} onPrev={prevScene} />}
            {scene === 3 && <Scene3CubeRootNegative onNext={nextScene} onPrev={prevScene} />}
            {scene === 4 && <Scene4SquareRootDecimal onNext={nextScene} onPrev={prevScene} />}
            {scene === 5 && <Scene5CubeDimensions onNext={nextScene} onPrev={prevScene} />}
            {scene === 6 && <Scene6IntroCombiningLikeTerms onNext={nextScene} onPrev={prevScene} />}
            {scene === 7 && <Scene7CombiningLikeTermsNegative onNext={nextScene} onPrev={prevScene} />}
            {scene === 8 && <Scene8CombiningLikeTermsRational onNext={nextScene} onPrev={prevScene} />}
            {scene === 9 && <Scene9DistributivePropertyVariables onNext={nextScene} onPrev={prevScene} />}
            {scene === 10 && <Scene10FactoringDistributive onNext={nextScene} onPrev={prevScene} />}
            {scene === 11 && <Scene11CombiningNegativeDistribution onNext={nextScene} onPrev={prevScene} />}
            {scene === 12 && <Scene12EquivalentExpressions onNext={nextScene} onPrev={prevScene} />}
            {scene === 13 && <Scene13InterpretingGraphExample onNext={nextScene} onPrev={prevScene} />}
            {scene === 14 && <Scene14InterpretingGraphsProblem onNext={nextScene} onPrev={prevScene} />}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
