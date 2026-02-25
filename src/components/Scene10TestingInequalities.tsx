import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, RefreshCcw } from "lucide-react";

type Section = "explore" | "quiz";

export default function Scene10TestingInequalities({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [section, setSection] = useState<Section>("explore");

  // Explore State
  const [testValue, setTestValue] = useState<number | null>(null);

  // Quiz State
  const [selectedK, setSelectedK] = useState<number[]>([]);
  const [isQuizSubmitted, setIsQuizSubmitted] = useState(false);
  const [quizFeedback, setQuizFeedback] = useState<string | null>(null);

  const testValues = [0, 1, 2, 5];

  const checkInequality1 = (x: number) => x + 2 <= 2 * x;
  const checkInequality2 = (x: number) => 3 * x + 4 > 5 * x;

  const toggleK = (k: number) => {
    if (isQuizSubmitted) return;
    setSelectedK(prev => 
      prev.includes(k) ? prev.filter(v => v !== k) : [...prev, k]
    );
  };

  const submitQuiz = () => {
    // Problem: 6 > 2k + 4
    // k=0: 6 > 4 (True)
    // k=1: 6 > 6 (False)
    // k=2: 6 > 8 (False)
    // Correct answer: Only k=0
    
    const correct = [0];
    const isCorrect = 
      selectedK.length === correct.length && 
      selectedK.every(val => correct.includes(val));

    setIsQuizSubmitted(true);
    if (isCorrect) {
      setQuizFeedback("Correct! Only k=0 makes the inequality true.");
    } else {
      setQuizFeedback("Not quite. Let's check each value.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-6 w-full max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        {section === "explore" && (
          <motion.div
            key="explore"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8 w-full"
          >
            <h2 className="text-3xl font-bold text-slate-800">Testing Solutions</h2>
            <p className="text-slate-600">Select a value for <span className="font-mono font-bold text-indigo-600">x</span> to see if it satisfies the inequalities.</p>

            <div className="flex justify-center space-x-4">
              {testValues.map(val => (
                <button
                  key={val}
                  onClick={() => setTestValue(val)}
                  className={`w-12 h-12 rounded-full font-bold text-lg transition-all ${
                    testValue === val 
                      ? "bg-indigo-600 text-white scale-110 shadow-lg" 
                      : "bg-white border-2 border-slate-200 text-slate-600 hover:border-indigo-300"
                  }`}
                >
                  {val}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Inequality 1 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <div className="text-2xl font-mono font-bold text-blue-600 mb-4">
                  x + 2 ≤ 2x
                </div>
                <AnimatePresence mode="wait">
                  {testValue !== null ? (
                    <motion.div
                      key={testValue}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-2"
                    >
                      <div className="text-lg text-slate-700">
                        <span className="font-bold">{testValue}</span> + 2 ≤ 2(<span className="font-bold">{testValue}</span>)
                      </div>
                      <div className="text-lg text-slate-700">
                        {testValue + 2} ≤ {2 * testValue}
                      </div>
                      <div className={`font-bold flex items-center justify-center space-x-2 ${checkInequality1(testValue) ? "text-green-600" : "text-red-600"}`}>
                        {checkInequality1(testValue) ? <CheckCircle size={20} /> : <XCircle size={20} />}
                        <span>{checkInequality1(testValue) ? "True (Satisfies)" : "False (Does not satisfy)"}</span>
                      </div>
                    </motion.div>
                  ) : (
                    <div className="text-slate-400 italic">Select a value above</div>
                  )}
                </AnimatePresence>
              </div>

              {/* Inequality 2 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <div className="text-2xl font-mono font-bold text-purple-600 mb-4">
                  3x + 4 &gt; 5x
                </div>
                <AnimatePresence mode="wait">
                  {testValue !== null ? (
                    <motion.div
                      key={testValue}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-2"
                    >
                      <div className="text-lg text-slate-700">
                        3(<span className="font-bold">{testValue}</span>) + 4 &gt; 5(<span className="font-bold">{testValue}</span>)
                      </div>
                      <div className="text-lg text-slate-700">
                        {3 * testValue} + 4 &gt; {5 * testValue}
                      </div>
                      <div className="text-lg text-slate-700">
                        {3 * testValue + 4} &gt; {5 * testValue}
                      </div>
                      <div className={`font-bold flex items-center justify-center space-x-2 ${checkInequality2(testValue) ? "text-green-600" : "text-red-600"}`}>
                        {checkInequality2(testValue) ? <CheckCircle size={20} /> : <XCircle size={20} />}
                        <span>{checkInequality2(testValue) ? "True (Satisfies)" : "False (Does not satisfy)"}</span>
                      </div>
                    </motion.div>
                  ) : (
                    <div className="text-slate-400 italic">Select a value above</div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}

        {section === "quiz" && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8 w-full"
          >
            <h2 className="text-3xl font-bold text-slate-800">Practice Problem</h2>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 max-w-2xl mx-auto">
              <p className="text-lg text-slate-700 mb-6">
                Which of the <span className="font-mono font-bold">k</span>-values satisfy the following inequality?
              </p>
              <div className="text-3xl font-mono font-bold text-slate-800 mb-8 bg-slate-50 p-4 rounded-xl inline-block">
                6 &gt; 2k + 4
              </div>
              
              <p className="text-slate-500 mb-4 text-sm uppercase tracking-wide font-bold">Choose all answers that apply:</p>

              <div className="space-y-3">
                {[0, 1, 2].map(k => (
                  <button
                    key={k}
                    onClick={() => toggleK(k)}
                    disabled={isQuizSubmitted}
                    className={`w-full p-4 rounded-xl border-2 flex items-center justify-between transition-all ${
                      selectedK.includes(k) 
                        ? "border-indigo-500 bg-indigo-50 text-indigo-900" 
                        : "border-slate-200 hover:border-indigo-200 text-slate-700"
                    }`}
                  >
                    <span className="font-mono font-bold text-lg">k = {k}</span>
                    {isQuizSubmitted && (
                      <span className="text-sm font-medium">
                        {6 > 2 * k + 4 ? <span className="text-green-600">True (6 &gt; {2*k+4})</span> : <span className="text-red-500">False (6 ngtr; {2*k+4})</span>}
                      </span>
                    )}
                  </button>
                ))}
              </div>

              {quizFeedback && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className={`mt-6 font-bold ${quizFeedback.includes("Correct") ? "text-green-600" : "text-amber-600"}`}
                >
                  {quizFeedback}
                </motion.div>
              )}

              {!isQuizSubmitted && (
                <button
                  onClick={submitQuiz}
                  className="mt-8 px-8 py-3 bg-indigo-600 text-white rounded-full font-bold shadow-lg hover:bg-indigo-700 transition-colors"
                >
                  Check Answer
                </button>
              )}
            </div>
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
          onClick={() => {
            if (section === "explore") setSection("quiz");
            else onNext();
          }}
          className="flex items-center space-x-2 px-6 py-3 bg-slate-900 text-white rounded-full font-medium shadow-lg hover:bg-slate-800 transition-colors"
        >
          <span>{section === "explore" ? "Try Practice Problem" : "Next"}</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
