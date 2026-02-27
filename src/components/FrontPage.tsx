import { motion } from "motion/react";
import { ArrowRight, BookOpen, Calculator, FunctionSquare, Grid, Hash, LineChart, Pi, Sigma, Variable, X } from "lucide-react";

const units = [
  { id: 1, title: "Equations & Inequalities", icon: Variable, color: "bg-indigo-100 text-indigo-600", available: true },
  { id: 2, title: "Two-step equations & Units", icon: Hash, color: "bg-emerald-100 text-emerald-600", available: true },
  { id: 3, title: "Linear Relationships", icon: LineChart, color: "bg-blue-100 text-blue-600", available: true },
  { id: 4, title: "Functions & Sequences", icon: FunctionSquare, color: "bg-purple-100 text-purple-600", available: true },
  { id: 5, title: "Exponents & Radicals", icon: X, color: "bg-orange-100 text-orange-600", available: true },
  { id: 6, title: "Quadratics", icon: Grid, color: "bg-rose-100 text-rose-600", available: false },
  { id: 7, title: "Polynomials", icon: Sigma, color: "bg-cyan-100 text-cyan-600", available: false },
  { id: 8, title: "Systems of Equations", icon: Grid, color: "bg-teal-100 text-teal-600", available: false },
  { id: 9, title: "Transformations", icon: LineChart, color: "bg-fuchsia-100 text-fuchsia-600", available: false },
  { id: 10, title: "Exponential & Logarithmic", icon: LineChart, color: "bg-yellow-100 text-yellow-600", available: false },
  { id: 11, title: "Trigonometry", icon: Pi, color: "bg-violet-100 text-violet-600", available: false },
  { id: 12, title: "Rational Functions", icon: Calculator, color: "bg-lime-100 text-lime-600", available: false },
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl font-bold text-slate-900 tracking-tight"
            >
              Master Algebra <br />
              <span className="text-indigo-600">Visually</span>
            </motion.h1>
            
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
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm w-full max-w-md h-64 flex flex-col items-center justify-center space-y-6">
              <p className="text-slate-500 font-medium uppercase tracking-wider text-sm">What is Algebra?</p>
              
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

      {/* Units Grid */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-8">Course Curriculum</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {units.map((unit) => (
            <motion.button
              key={unit.id}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => unit.available && onSelectUnit(unit.id)}
              className={`text-left p-6 rounded-xl border transition-all ${
                unit.available 
                  ? "bg-white border-slate-200 shadow-sm hover:shadow-md cursor-pointer" 
                  : "bg-slate-50 border-slate-100 opacity-60 cursor-not-allowed"
              }`}
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${unit.color}`}>
                <unit.icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-1">Unit {unit.id}</h3>
              <p className="text-slate-600 font-medium">{unit.title}</p>
              
              {unit.available ? (
                <div className="mt-4 flex items-center text-indigo-600 text-sm font-bold">
                  <span>Start Unit</span>
                  <ArrowRight size={16} className="ml-1" />
                </div>
              ) : (
                <div className="mt-4 flex items-center text-slate-400 text-sm font-medium">
                  <span>Coming Soon</span>
                </div>
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
