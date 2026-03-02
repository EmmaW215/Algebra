import { motion } from "motion/react";
import { ArrowRight, BookOpen } from "lucide-react";

const Unit1Icon = () => <span className="text-2xl font-bold">≜</span>;
const Unit2Icon = () => <span className="text-3xl font-bold leading-none">≡</span>;
const Unit3Icon = () => <span className="text-sm font-bold font-mono">[a,b]</span>;
const Unit4Icon = () => <span className="text-lg font-bold font-serif italic">f(x)</span>;
const Unit5Icon = () => <span className="text-lg font-bold font-serif">√x</span>;
const Unit6Icon = () => <span className="text-xl font-bold">Δ</span>;
const Unit7Icon = () => <span className="text-xl font-bold">∑</span>;
const Unit8Icon = () => <span className="text-xl font-bold tracking-widest">{`{ }`}</span>;
const Unit9Icon = () => <span className="text-lg font-bold font-serif">A<sup className="text-xs">T</sup></span>;
const Unit10Icon = () => <span className="text-2xl font-bold font-serif italic">e</span>;
const Unit11Icon = () => <span className="text-2xl font-bold font-serif">π</span>;
const Unit12Icon = () => <span className="text-3xl font-bold">∞</span>;

const units = [
  { id: 1, title: "Equations & Inequalities", icon: Unit1Icon, color: "bg-indigo-100 text-indigo-600", available: true },
  { id: 2, title: "Two-step equations & Units", icon: Unit2Icon, color: "bg-emerald-100 text-emerald-600", available: true },
  { id: 3, title: "Linear Relationships", icon: Unit3Icon, color: "bg-blue-100 text-blue-600", available: true },
  { id: 4, title: "Functions & Sequences", icon: Unit4Icon, color: "bg-purple-100 text-purple-600", available: true },
  { id: 5, title: "Exponents & Radicals", icon: Unit5Icon, color: "bg-orange-100 text-orange-600", available: true },
  { id: 6, title: "Quadratics", icon: Unit6Icon, color: "bg-rose-100 text-rose-600", available: true },
  { id: 7, title: "Polynomial Operations & Complex Numbers", icon: Unit7Icon, color: "bg-cyan-100 text-cyan-600", available: true },
  { id: 8, title: "Systems of Equations", icon: Unit8Icon, color: "bg-teal-100 text-teal-600", available: false },
  { id: 9, title: "Transformations of Functions & Modeling with Functions", icon: Unit9Icon, color: "bg-fuchsia-100 text-fuchsia-600", available: false },
  { id: 10, title: "Exponential & Logarithmic relationships", icon: Unit10Icon, color: "bg-yellow-100 text-yellow-600", available: false },
  { id: 11, title: "Trigonometry", icon: Unit11Icon, color: "bg-violet-100 text-violet-600", available: false },
  { id: 12, title: "Rational Functions", icon: Unit12Icon, color: "bg-lime-100 text-lime-600", available: false },
];

export default function FrontPage({ onSelectUnit }: { onSelectUnit: (id: number) => void }) {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Hero Section */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-2 bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium"
            >
              <BookOpen size={16} />
              <span>Interactive Algebra Course</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                textShadow: [
                  "0px 0px 10px rgba(79, 70, 229, 0.2), 0px 0px 20px rgba(79, 70, 229, 0.1)",
                  "0px 0px 20px rgba(79, 70, 229, 0.4), 0px 0px 40px rgba(79, 70, 229, 0.2)",
                  "0px 0px 10px rgba(79, 70, 229, 0.2), 0px 0px 20px rgba(79, 70, 229, 0.1)"
                ]
              }}
              transition={{ 
                opacity: { duration: 0.8, delay: 0.1 },
                y: { duration: 0.8, delay: 0.1 },
                textShadow: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
              className="text-6xl font-bold text-slate-900 tracking-tight mb-2"
            >
              Algebra Basic
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                textShadow: [
                  "0px 0px 5px rgba(79, 70, 229, 0.2), 0px 0px 10px rgba(79, 70, 229, 0.1)",
                  "0px 0px 15px rgba(79, 70, 229, 0.4), 0px 0px 30px rgba(79, 70, 229, 0.2)",
                  "0px 0px 5px rgba(79, 70, 229, 0.2), 0px 0px 10px rgba(79, 70, 229, 0.1)"
                ]
              }}
              transition={{ 
                opacity: { duration: 0.8, delay: 0.3 },
                y: { duration: 0.8, delay: 0.3 },
                textShadow: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
              }}
              className="text-3xl font-bold text-indigo-600 mb-6"
            >
              Master Algebra Visually
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600 max-w-md"
            >
              Algebra is the language of finding the unknown. Instead of just numbers, we use symbols to solve problems.
            </motion.p>
          </div>

          {/* Intro Animation */}
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <div className="relative bg-slate-50 rounded-2xl border border-slate-200 shadow-sm w-full max-w-md h-64 overflow-hidden">
              {/* Background Image */}
              <div 
                className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage: `url('https://cdn.vectorstock.com/i/preview-1x/77/98/maths-symbols-icon-set-algebra-or-mathematics-vector-41127798.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              
              <div className="relative z-10 w-full h-full p-8 flex flex-col items-center justify-center space-y-6">
                <p className="text-slate-600 font-bold uppercase tracking-wider text-2xl">What is Algebra?</p>
                
                <div className="text-4xl font-mono font-bold flex items-center space-x-4">
                  <span>2</span>
                  <span>+</span>
                  <div className="relative w-12 h-12 flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 1, scale: 1 }}
                      animate={{ opacity: 0, scale: 0.5 }}
                      transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
                      className="absolute inset-0 bg-slate-200 rounded-lg border-2 border-slate-300 flex items-center justify-center text-slate-400"
                    >
                      ?
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
                      className="absolute inset-0 bg-indigo-100 rounded-lg border-2 border-indigo-500 flex items-center justify-center text-indigo-600"
                    >
                      x
                    </motion.div>
                  </div>
                  <span>=</span>
                  <span>5</span>
                </div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 1, 0] }}
                  transition={{ duration: 4, repeat: Infinity, repeatDelay: 0 }}
                  className="text-indigo-600 font-medium"
                >
                  We use 'x' to represent the unknown
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Units Grid */}
      <div className="relative w-full py-16 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: "url('https://c7.alamy.com/comp/2H6RF0T/maths-symbols-icon-set-algebra-or-mathematics-subject-doodle-design-education-and-study-concept-back-to-school-background-for-notebook-not-pad-2H6RF0T.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.05
          }}
        />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-8">Course Curriculum</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {units.map((unit) => (
              <motion.button
                key={unit.id}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => unit.available && onSelectUnit(unit.id)}
                className={`text-left p-6 rounded-xl border transition-all backdrop-blur-md shadow-lg ${
                  unit.available 
                    ? "bg-white/40 border-white/50 hover:shadow-2xl hover:bg-white/60 cursor-pointer" 
                    : "bg-slate-50/40 border-slate-100/50 opacity-60 cursor-not-allowed"
                }`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${unit.color} bg-opacity-80 backdrop-blur-sm`}>
                  <unit.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-1">{unit.id}. {unit.title}</h3>
                
                {unit.available ? (
                  <div className="mt-4 flex items-center text-indigo-700 text-sm font-bold">
                    <span>Start Unit</span>
                    <ArrowRight size={16} className="ml-1" />
                  </div>
                ) : (
                  <div className="mt-4 flex items-center text-slate-500 text-sm font-medium">
                    <span>Coming Soon</span>
                  </div>
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
