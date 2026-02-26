import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import FrontPage from "./components/FrontPage";
import Unit1 from "./components/Unit1";
import Unit2 from "./components/Unit2";

export default function App() {
  const [view, setView] = useState<"home" | "unit1" | "unit2">("home");

  const handleSelectUnit = (id: number) => {
    if (id === 1) {
      setView("unit1");
    } else if (id === 2) {
      setView("unit2");
    }
  };

  const handleBackToHome = () => {
    setView("home");
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <AnimatePresence mode="wait">
        {view === "home" && (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FrontPage onSelectUnit={handleSelectUnit} />
          </motion.div>
        )}
        {view === "unit1" && (
          <motion.div
            key="unit1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className="absolute inset-0"
          >
            <Unit1 onBack={handleBackToHome} />
          </motion.div>
        )}
        {view === "unit2" && (
          <motion.div
            key="unit2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className="absolute inset-0"
          >
            <Unit2 onBack={handleBackToHome} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
