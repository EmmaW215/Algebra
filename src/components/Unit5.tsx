import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import Scene1IntroSquareRoots from "./Scene1IntroSquareRoots";
import Scene2PerfectSquares from "./Scene2PerfectSquares";
import Scene3IntroCubeRoots from "./Scene3IntroCubeRoots";
import Scene4DecimalRoots from "./Scene4DecimalRoots";
import Scene5RationalIrrationalIntro from "./Scene5RationalIrrationalIntro";
import Scene6ClassifyingNumbers1 from "./Scene6ClassifyingNumbers1";
import Scene7ClassifyingNumbers2 from "./Scene7ClassifyingNumbers2";
import Scene8ClassifyingReview from "./Scene8ClassifyingReview";
import Scene9NegativeBases from "./Scene9NegativeBases";
import Scene10ZeroAndFirstPower from "./Scene10ZeroAndFirstPower";
import Scene11EvenOddNegatives from "./Scene11EvenOddNegatives";
import Scene12OneAndNegativeOne from "./Scene12OneAndNegativeOne";
import Scene13ProductPropertyIntro from "./Scene13ProductPropertyIntro";
import Scene14MultiplyPowersPractice from "./Scene14MultiplyPowersPractice";
import Scene15ParenthesesPropertyIntro from "./Scene15ParenthesesPropertyIntro";
import Scene16QuotientPropertyIntro from "./Scene16QuotientPropertyIntro";
import Scene17PowersProductQuotientPractice from "./Scene17PowersProductQuotientPractice";
import Scene18ParenthesesPropertyPractice from "./Scene18ParenthesesPropertyPractice";
import Scene19QuotientPropertyPractice from "./Scene19QuotientPropertyPractice";
import Scene20PowersProductQuotientPractice2 from "./Scene20PowersProductQuotientPractice2";
import Scene21ProductPropertyReview from "./Scene21ProductPropertyReview";
import Scene22QuotientPropertyReview from "./Scene22QuotientPropertyReview";
import Scene23ProductPowersPractice from "./Scene23ProductPowersPractice";
import Scene24QuotientPowersPractice from "./Scene24QuotientPowersPractice";
import Scene25PowerOfPowerProperty from "./Scene25PowerOfPowerProperty";
import Scene26PowerOfProduct from "./Scene26PowerOfProduct";
import Scene27PowerOfQuotient from "./Scene27PowerOfQuotient";
import Scene28NegativeExponentsIntro from "./Scene28NegativeExponentsIntro";
import Scene29NegativeExponentIntuition from "./Scene29NegativeExponentIntuition";
import Scene30NegativeExponentsReview from "./Scene30NegativeExponentsReview";
import Scene31NegativeExponentIntuition2 from "./Scene31NegativeExponentIntuition2";
import Scene32NegativeExponentsPractice from "./Scene32NegativeExponentsPractice";
import Scene33MultiplyDivideIntegerExponents from "./Scene33MultiplyDivideIntegerExponents";
import Scene34PowersProductsQuotientsInteger from "./Scene34PowersProductsQuotientsInteger";

export default function Unit5({ onBack }: { onBack: () => void }) {
  const [scene, setScene] = useState(1);
  const totalScenes = 34;

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
            <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              5
            </div>
            <h1 className="text-xl font-bold text-slate-800">Unit 5: Exponents & Radicals</h1>
          </div>
        </div>
        
        <div className="flex space-x-1 overflow-x-auto max-w-md no-scrollbar items-center">
          {Array.from({ length: totalScenes }, (_, i) => i + 1).map((s) => (
            <button
              key={s}
              onClick={() => setScene(s)}
              className={`w-2 h-2 rounded-full transition-all focus:outline-none flex-shrink-0 ${
                scene === s ? "bg-orange-600 w-4" : "bg-slate-300 hover:bg-slate-400"
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
            {scene === 2 && <Scene2PerfectSquares onNext={nextScene} onPrev={prevScene} />}
            {scene === 3 && <Scene3IntroCubeRoots onNext={nextScene} onPrev={prevScene} />}
            {scene === 4 && <Scene4DecimalRoots onNext={nextScene} onPrev={prevScene} />}
            {scene === 5 && <Scene5RationalIrrationalIntro onNext={nextScene} onPrev={prevScene} />}
            {scene === 6 && <Scene6ClassifyingNumbers1 onNext={nextScene} onPrev={prevScene} />}
            {scene === 7 && <Scene7ClassifyingNumbers2 onNext={nextScene} onPrev={prevScene} />}
            {scene === 8 && <Scene8ClassifyingReview onNext={nextScene} onPrev={prevScene} />}
            {scene === 9 && <Scene9NegativeBases onNext={nextScene} onPrev={prevScene} />}
            {scene === 10 && <Scene10ZeroAndFirstPower onNext={nextScene} onPrev={prevScene} />}
            {scene === 11 && <Scene11EvenOddNegatives onNext={nextScene} onPrev={prevScene} />}
            {scene === 12 && <Scene12OneAndNegativeOne onNext={nextScene} onPrev={prevScene} />}
            {scene === 13 && <Scene13ProductPropertyIntro onNext={nextScene} onPrev={prevScene} />}
            {scene === 14 && <Scene14MultiplyPowersPractice onNext={nextScene} onPrev={prevScene} />}
            {scene === 15 && <Scene15ParenthesesPropertyIntro onNext={nextScene} onPrev={prevScene} />}
            {scene === 16 && <Scene16QuotientPropertyIntro onNext={nextScene} onPrev={prevScene} />}
            {scene === 17 && <Scene17PowersProductQuotientPractice onNext={nextScene} onPrev={prevScene} />}
            {scene === 18 && <Scene18ParenthesesPropertyPractice onNext={nextScene} onPrev={prevScene} />}
            {scene === 19 && <Scene19QuotientPropertyPractice onNext={nextScene} onPrev={prevScene} />}
            {scene === 20 && <Scene20PowersProductQuotientPractice2 onNext={nextScene} onPrev={prevScene} />}
            {scene === 21 && <Scene21ProductPropertyReview onNext={nextScene} onPrev={prevScene} />}
            {scene === 22 && <Scene22QuotientPropertyReview onNext={nextScene} onPrev={prevScene} />}
            {scene === 23 && <Scene23ProductPowersPractice onNext={nextScene} onPrev={prevScene} />}
            {scene === 24 && <Scene24QuotientPowersPractice onNext={nextScene} onPrev={prevScene} />}
            {scene === 25 && <Scene25PowerOfPowerProperty onNext={nextScene} onPrev={prevScene} />}
            {scene === 26 && <Scene26PowerOfProduct onNext={nextScene} onPrev={prevScene} />}
            {scene === 27 && <Scene27PowerOfQuotient onNext={nextScene} onPrev={prevScene} />}
            {scene === 28 && <Scene28NegativeExponentsIntro onNext={nextScene} onPrev={prevScene} />}
            {scene === 29 && <Scene29NegativeExponentIntuition onNext={nextScene} onPrev={prevScene} />}
            {scene === 30 && <Scene30NegativeExponentsReview onNext={nextScene} onPrev={prevScene} />}
            {scene === 31 && <Scene31NegativeExponentIntuition2 onNext={nextScene} onPrev={prevScene} />}
            {scene === 32 && <Scene32NegativeExponentsPractice onNext={nextScene} onPrev={prevScene} />}
            {scene === 33 && <Scene33MultiplyDivideIntegerExponents onNext={nextScene} onPrev={prevScene} />}
            {scene === 34 && <Scene34PowersProductsQuotientsInteger onNext={nextScene} onPrev={prevScene} />}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
