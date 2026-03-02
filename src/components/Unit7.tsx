import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Menu, ArrowRight } from "lucide-react";
import Scene1CombiningLikeTerms from "./unit7/Scene1CombiningLikeTerms";
import Scene2NegativeCoefficients from "./unit7/Scene2NegativeCoefficients";
import Scene3RationalCoefficients from "./unit7/Scene3RationalCoefficients";
import ScenePlaceholder from "./unit7/ScenePlaceholder";
import GenericScene from "./unit7/GenericScene";
import { sceneData } from "./unit7/sceneData";

export default function Unit7({ onBack }: { onBack: () => void }) {
  const [scene, setScene] = useState(1);
  const [showMenu, setShowMenu] = useState(false);

  const scenes = [
    { id: 1, title: "Intro to Combining Like Terms", component: Scene1CombiningLikeTerms },
    { id: 2, title: "Negative Coefficients", component: Scene2NegativeCoefficients },
    { id: 3, title: "Rational Coefficients", component: Scene3RationalCoefficients },
    ...sceneData.map(data => ({
      id: data.id,
      title: data.title,
      component: GenericScene,
      data: data
    }))
  ];

  const currentSceneData = scenes.find(s => s.id === scene) as any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const CurrentSceneComponent = currentSceneData?.component;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm">
        <div className="flex items-center space-x-4">
          <button 
            onClick={onBack}
            className="p-2 rounded-full hover:bg-slate-100 transition-colors text-slate-500 hover:text-slate-800"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-cyan-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              7
            </div>
            <h1 className="text-xl font-bold text-slate-800 hidden md:block">Unit 7: Polynomial Operations</h1>
            <h1 className="text-xl font-bold text-slate-800 md:hidden">Unit 7</h1>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex-1 mx-4 flex justify-center overflow-hidden">
          <div className="flex space-x-1 overflow-x-auto no-scrollbar items-center px-2 py-1 max-w-full">
            {scenes.map((s) => (
              <button
                key={s.id}
                onClick={() => setScene(s.id)}
                className={`w-2 h-2 rounded-full transition-all focus:outline-none flex-shrink-0 ${
                  scene === s.id ? "bg-cyan-600 w-4" : "bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to scene ${s.id}`}
                title={s.title}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium text-slate-500 hidden lg:inline-block whitespace-nowrap">Scene {scene} of {scenes.length}</span>
          <button 
            onClick={() => setShowMenu(!showMenu)}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Menu Overlay */}
      <AnimatePresence>
        {showMenu && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowMenu(false)}
              className="fixed inset-0 bg-black/20 z-40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              className="fixed inset-y-0 right-0 w-80 bg-white shadow-2xl z-50 border-l border-slate-200 overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-bold text-slate-800">Scenes</h2>
                  <button 
                    onClick={() => setShowMenu(false)}
                    className="p-2 hover:bg-slate-100 rounded-full text-slate-500"
                  >
                    <ArrowRight size={20} />
                  </button>
                </div>
                <div className="space-y-1">
                  {scenes.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => {
                        setScene(s.id);
                        setShowMenu(false);
                      }}
                      className={`w-full text-left p-3 rounded-lg transition-colors text-sm ${
                        scene === s.id 
                          ? "bg-indigo-50 text-indigo-700 font-bold border border-indigo-100" 
                          : "hover:bg-slate-50 text-slate-600 border border-transparent"
                      }`}
                    >
                      <span className="mr-2 opacity-50 font-mono">{s.id.toString().padStart(2, '0')}.</span>
                      {s.title}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 overflow-hidden relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={scene}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 overflow-y-auto"
          >
            {CurrentSceneComponent ? (
              <CurrentSceneComponent 
                onNext={() => setScene(Math.min(scenes.length, scene + 1))}
                onPrev={() => setScene(Math.max(1, scene - 1))}
                data={currentSceneData?.data}
              />
            ) : (
              <ScenePlaceholder 
                title={currentSceneData?.title || ""}
                description={currentSceneData?.description || currentSceneData?.title || ""}
                onNext={() => setScene(Math.min(scenes.length, scene + 1))}
                onPrev={() => setScene(Math.max(1, scene - 1))}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
