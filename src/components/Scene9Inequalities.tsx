import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle, Circle, Dot, MoveRight, MoveLeft } from "lucide-react";

type Step = "intro_pierre" | "intro_gumbo" | "intro_x_less_4" | "quiz_identify" | "quiz_graph";

export default function Scene9Inequalities({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [step, setStep] = useState<Step>("intro_pierre");
  
  // Quiz Identify State
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isIdentifyCorrect, setIsIdentifyCorrect] = useState(false);

  // Quiz Graph State
  const [graphValue, setGraphValue] = useState(0);
  const [isClosed, setIsClosed] = useState(true);
  const [direction, setDirection] = useState<"left" | "right">("left"); // "left" for <=, "right" for >=
  const [isGraphCorrect, setIsGraphCorrect] = useState(false);
  const [showGraphFeedback, setShowGraphFeedback] = useState(false);

  const handleNextStep = () => {
    if (step === "intro_pierre") setStep("intro_gumbo");
    else if (step === "intro_gumbo") setStep("intro_x_less_4");
    else if (step === "intro_x_less_4") setStep("quiz_identify");
    else if (step === "quiz_identify") setStep("quiz_graph");
    else onNext();
  };

  const checkIdentify = (option: string) => {
    setSelectedOption(option);
    if (option === "x > -2") {
      setIsIdentifyCorrect(true);
    }
  };

  const checkGraph = () => {
    // Target: x <= 3
    // Value: 3, Closed: true, Direction: left
    const isCorrect = graphValue === 3 && isClosed === true && direction === "left";
    setIsGraphCorrect(isCorrect);
    setShowGraphFeedback(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-6 w-full max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        {step === "intro_pierre" && (
          <motion.div
            key="pierre"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8 w-full"
          >
            <h2 className="text-3xl font-bold text-slate-800">Plotting Inequalities</h2>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-left space-y-4">
              <p className="text-lg text-slate-700">
                <strong>Pierre's Dance Lesson:</strong> Pierre has 48 minutes until he needs to get ready. 
                Let <span className="font-mono font-bold text-indigo-600">m</span> be the minutes he plays.
              </p>
              <p className="text-slate-600">
                He can play for 48 minutes or less. So, <span className="font-mono font-bold bg-indigo-50 px-2 py-1 rounded">m ≤ 48</span>.
              </p>
            </div>

            {/* Number Line Visualization */}
            <div className="relative h-24 w-full flex items-center justify-center bg-slate-50 rounded-xl border border-slate-200">
              <div className="absolute w-[90%] h-1 bg-slate-300 rounded-full"></div>
              {/* Ticks */}
              {[0, 10, 20, 30, 40, 50, 60, 70].map((val, i) => (
                <div key={val} className="absolute h-4 w-0.5 bg-slate-400 top-1/2 -translate-y-1/2" style={{ left: `${(i / 7) * 90 + 5}%` }}>
                  <span className="absolute top-6 left-1/2 -translate-x-1/2 text-xs text-slate-500">{val}</span>
                </div>
              ))}
              
              {/* Inequality Graph */}
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${(48 / 70) * 90}%` }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute h-2 bg-indigo-500 top-1/2 -translate-y-1/2 left-[5%] rounded-l-full"
              />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute w-4 h-4 bg-indigo-500 rounded-full top-1/2 -translate-y-1/2 border-2 border-white shadow-sm"
                style={{ left: `${(48 / 70) * 90 + 5}%`, transform: 'translate(-50%, -50%)' }}
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.7 }}
                className="absolute top-[-20px] text-indigo-600 font-bold text-sm"
                style={{ left: `${(48 / 70) * 90 + 5}%`, transform: 'translateX(-50%)' }}
              >
                48 (Closed Circle)
              </motion.div>
            </div>
          </motion.div>
        )}

        {step === "intro_gumbo" && (
          <motion.div
            key="gumbo"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8 w-full"
          >
            <h2 className="text-3xl font-bold text-slate-800">Plotting Inequalities</h2>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-left space-y-4">
              <p className="text-lg text-slate-700">
                <strong>Gumbo Safety:</strong> The gumbo needs to be heated to a minimum of 74°C.
                Let <span className="font-mono font-bold text-red-600">t</span> be the temperature.
              </p>
              <p className="text-slate-600">
                It must be at least 74°C. So, <span className="font-mono font-bold bg-red-50 px-2 py-1 rounded">t ≥ 74</span>.
              </p>
            </div>

            {/* Number Line Visualization */}
            <div className="relative h-24 w-full flex items-center justify-center bg-slate-50 rounded-xl border border-slate-200">
              <div className="absolute w-[90%] h-1 bg-slate-300 rounded-full"></div>
              {/* Ticks - Range 60 to 90 */}
              {[60, 65, 70, 75, 80, 85, 90].map((val, i) => (
                <div key={val} className="absolute h-4 w-0.5 bg-slate-400 top-1/2 -translate-y-1/2" style={{ left: `${(i / 6) * 90 + 5}%` }}>
                  <span className="absolute top-6 left-1/2 -translate-x-1/2 text-xs text-slate-500">{val}</span>
                </div>
              ))}
              
              {/* Inequality Graph */}
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${((90 - 74) / 30) * 90}%` }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute h-2 bg-red-500 top-1/2 -translate-y-1/2 right-[5%] rounded-r-full"
              />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute w-4 h-4 bg-red-500 rounded-full top-1/2 -translate-y-1/2 border-2 border-white shadow-sm"
                style={{ left: `${((74 - 60) / 30) * 90 + 5}%`, transform: 'translate(-50%, -50%)' }}
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.7 }}
                className="absolute top-[-20px] text-red-600 font-bold text-sm"
                style={{ left: `${((74 - 60) / 30) * 90 + 5}%`, transform: 'translateX(-50%)' }}
              >
                74 (Closed Circle)
              </motion.div>
            </div>
          </motion.div>
        )}

        {step === "intro_x_less_4" && (
          <motion.div
            key="x_less_4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8 w-full"
          >
            <h2 className="text-3xl font-bold text-slate-800">Strict Inequalities</h2>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-left space-y-4">
              <p className="text-lg text-slate-700">
                <strong>Example:</strong> Graph <span className="font-mono font-bold bg-blue-50 px-2 py-1 rounded">x &lt; 4</span>.
              </p>
              <p className="text-slate-600">
                Since x cannot be equal to 4, we use an <strong>open circle</strong>.
              </p>
            </div>

            {/* Number Line Visualization */}
            <div className="relative h-24 w-full flex items-center justify-center bg-slate-50 rounded-xl border border-slate-200">
              <div className="absolute w-[90%] h-1 bg-slate-300 rounded-full"></div>
              {/* Ticks - Range -2 to 6 */}
              {[-2, -1, 0, 1, 2, 3, 4, 5, 6].map((val, i) => (
                <div key={val} className="absolute h-4 w-0.5 bg-slate-400 top-1/2 -translate-y-1/2" style={{ left: `${(i / 8) * 90 + 5}%` }}>
                  <span className="absolute top-6 left-1/2 -translate-x-1/2 text-xs text-slate-500">{val}</span>
                </div>
              ))}
              
              {/* Inequality Graph */}
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${((4 - (-2)) / 8) * 90}%` }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute h-2 bg-blue-500 top-1/2 -translate-y-1/2 left-[5%] rounded-l-full"
              />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute w-4 h-4 bg-white rounded-full top-1/2 -translate-y-1/2 border-2 border-blue-500 shadow-sm"
                style={{ left: `${((4 - (-2)) / 8) * 90 + 5}%`, transform: 'translate(-50%, -50%)' }}
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.7 }}
                className="absolute top-[-20px] text-blue-600 font-bold text-sm"
                style={{ left: `${((4 - (-2)) / 8) * 90 + 5}%`, transform: 'translateX(-50%)' }}
              >
                4 (Open Circle)
              </motion.div>
            </div>
          </motion.div>
        )}

        {step === "quiz_identify" && (
          <motion.div
            key="quiz_identify"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8 w-full"
          >
            <h2 className="text-3xl font-bold text-slate-800">Quiz: Identify the Graph</h2>
            <p className="text-slate-600">Which inequality does this graph represent?</p>

            {/* Number Line Visualization - x > -2 */}
            <div className="relative h-24 w-full flex items-center justify-center bg-slate-50 rounded-xl border border-slate-200">
              <div className="absolute w-[90%] h-1 bg-slate-300 rounded-full"></div>
              {/* Ticks - Range -5 to 5 */}
              {[-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5].map((val, i) => (
                <div key={val} className="absolute h-4 w-0.5 bg-slate-400 top-1/2 -translate-y-1/2" style={{ left: `${(i / 10) * 90 + 5}%` }}>
                  <span className="absolute top-6 left-1/2 -translate-x-1/2 text-xs text-slate-500">{val}</span>
                </div>
              ))}
              
              {/* Inequality Graph: x > -2 */}
              <div 
                className="absolute h-2 bg-purple-500 top-1/2 -translate-y-1/2 right-[5%] rounded-r-full"
                style={{ width: `${((5 - (-2)) / 10) * 90}%` }}
              />
              <div
                className="absolute w-4 h-4 bg-white rounded-full top-1/2 -translate-y-1/2 border-2 border-purple-500 shadow-sm"
                style={{ left: `${((-2 - (-5)) / 10) * 90 + 5}%`, transform: 'translate(-50%, -50%)' }}
              />
            </div>

            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
              {["x < -2", "x <= -2", "x > -2", "x >= -2"].map((opt) => (
                <button
                  key={opt}
                  onClick={() => checkIdentify(opt)}
                  disabled={isIdentifyCorrect}
                  className={`p-4 rounded-xl border-2 font-mono font-bold text-lg transition-all
                    ${selectedOption === opt 
                      ? (opt === "x > -2" ? "bg-green-100 border-green-500 text-green-800" : "bg-red-100 border-red-500 text-red-800")
                      : "bg-white border-slate-200 hover:border-indigo-300 text-slate-700"
                    }
                  `}
                >
                  {opt.replace("<=", "≤").replace(">=", "≥")}
                </button>
              ))}
            </div>
            {isIdentifyCorrect && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 font-bold">
                Correct! Open circle at -2 and arrow to the right means x &gt; -2.
              </motion.div>
            )}
          </motion.div>
        )}

        {step === "quiz_graph" && (
          <motion.div
            key="quiz_graph"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8 w-full"
          >
            <h2 className="text-3xl font-bold text-slate-800">Quiz: Graph the Inequality</h2>
            <p className="text-slate-600">Graph <span className="font-mono font-bold bg-slate-100 px-2 py-1 rounded">x ≤ 3</span> on the number line.</p>

            {/* Interactive Number Line */}
            <div className="relative h-32 w-full flex items-center justify-center bg-slate-50 rounded-xl border border-slate-200 select-none">
              <div className="absolute w-[90%] h-1 bg-slate-300 rounded-full"></div>
              {/* Ticks - Range -5 to 5 */}
              {[-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5].map((val, i) => (
                <div 
                  key={val} 
                  onClick={() => !isGraphCorrect && setGraphValue(val)}
                  className="absolute h-full top-0 cursor-pointer group"
                  style={{ left: `${(i / 10) * 90 + 5}%`, width: '40px', transform: 'translateX(-50%)' }}
                >
                  <div className="absolute h-4 w-0.5 bg-slate-400 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 group-hover:bg-indigo-400 transition-colors" />
                  <span className="absolute top-[60%] left-1/2 -translate-x-1/2 text-xs text-slate-500 font-medium">{val}</span>
                </div>
              ))}
              
              {/* Interactive Graph */}
              <motion.div 
                layout
                className={`absolute h-2 top-1/2 -translate-y-1/2 ${isGraphCorrect ? "bg-green-500" : "bg-indigo-500"}`}
                style={{ 
                  left: direction === "left" ? "5%" : `${((graphValue - (-5)) / 10) * 90 + 5}%`,
                  width: direction === "left" 
                    ? `${((graphValue - (-5)) / 10) * 90}%` 
                    : `${((5 - graphValue) / 10) * 90}%`,
                  borderRadius: direction === "left" ? "999px 0 0 999px" : "0 999px 999px 0"
                }}
              />
              <motion.div
                layout
                className={`absolute w-6 h-6 rounded-full top-1/2 -translate-y-1/2 border-4 shadow-sm z-10 cursor-grab active:cursor-grabbing
                  ${isClosed 
                    ? (isGraphCorrect ? "bg-green-500 border-white" : "bg-indigo-500 border-white") 
                    : (isGraphCorrect ? "bg-white border-green-500" : "bg-white border-indigo-500")
                  }`}
                style={{ left: `${((graphValue - (-5)) / 10) * 90 + 5}%`, transform: 'translate(-50%, -50%)' }}
              />
            </div>

            {/* Controls */}
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setIsClosed(!isClosed)}
                disabled={isGraphCorrect}
                className="px-4 py-2 bg-white border border-slate-300 rounded-lg text-sm font-medium hover:bg-slate-50 flex items-center space-x-2"
              >
                {isClosed ? <Circle size={16} fill="currentColor" /> : <Circle size={16} />}
                <span>{isClosed ? "Closed Circle" : "Open Circle"}</span>
              </button>
              <button
                onClick={() => setDirection(direction === "left" ? "right" : "left")}
                disabled={isGraphCorrect}
                className="px-4 py-2 bg-white border border-slate-300 rounded-lg text-sm font-medium hover:bg-slate-50 flex items-center space-x-2"
              >
                {direction === "left" ? <MoveLeft size={16} /> : <MoveRight size={16} />}
                <span>Flip Direction</span>
              </button>
            </div>

            <button
              onClick={checkGraph}
              disabled={isGraphCorrect}
              className={`px-8 py-3 rounded-full font-bold shadow-md transition-colors
                ${isGraphCorrect 
                  ? "bg-green-600 text-white cursor-default" 
                  : "bg-indigo-600 text-white hover:bg-indigo-700"
                }`}
            >
              {isGraphCorrect ? "Correct!" : "Check Answer"}
            </button>

            {showGraphFeedback && !isGraphCorrect && (
              <p className="text-red-600 font-medium">Not quite. Check the circle type, direction, and value.</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Footer */}
      <div className="flex space-x-4 mt-auto w-full justify-between items-center pt-8 border-t border-slate-100">
        <button
          onClick={onPrev}
          className="flex items-center space-x-2 px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-full font-medium shadow-sm hover:bg-slate-50 transition-colors"
        >
          <ArrowLeft size={18} />
          <span>Back</span>
        </button>

        <button
          onClick={handleNextStep}
          disabled={step === "quiz_identify" && !isIdentifyCorrect || step === "quiz_graph" && !isGraphCorrect}
          className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium shadow-lg transition-colors
            ${(step === "quiz_identify" && !isIdentifyCorrect) || (step === "quiz_graph" && !isGraphCorrect)
              ? "bg-slate-200 text-slate-400 cursor-not-allowed"
              : "bg-slate-900 text-white hover:bg-slate-800"
            }`}
        >
          <span>{step === "quiz_graph" ? "Next" : "Next"}</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
