import { motion } from "framer-motion";
import { Atom, Code2, Server, Cpu, Database, Cloud } from "lucide-react";

export const TechEcosystem = () => {
  const nodes = [
    {
      id: "react",
      name: "React & Native",
      icon: Atom,
      color: "text-sky-400 border-sky-400/25 bg-sky-950/10 dark:bg-sky-950/20",
      description: "Frontend & Mobile",
    },
    {
      id: "ts",
      name: "TypeScript",
      icon: Code2,
      color: "text-blue-500 border-blue-500/25 bg-blue-950/10 dark:bg-blue-950/20",
      description: "Type Safety",
    },
    {
      id: "node",
      name: "Node.js",
      icon: Server,
      color: "text-green-500 border-green-500/25 bg-green-950/10 dark:bg-green-950/20",
      description: "Runtime Engine",
    },
    {
      id: "express",
      name: "Express.js",
      icon: Cpu,
      color: "text-slate-400 border-slate-400/25 bg-slate-900/10 dark:bg-slate-900/20",
      description: "RESTful Service",
    },
    {
      id: "mongodb",
      name: "MongoDB",
      icon: Database,
      color: "text-emerald-600 border-emerald-600/25 bg-emerald-950/10 dark:bg-emerald-950/20",
      description: "NoSQL DB",
    },
    {
      id: "aws",
      name: "AWS Cloud",
      icon: Cloud,
      color: "text-amber-500 border-amber-500/25 bg-amber-950/10 dark:bg-amber-950/20",
      description: "Infrastructure",
    },
  ];

  return (
    <div className="py-12 bg-bg-sec/30 rounded-2xl border border-border px-4 sm:px-6 lg:px-8 relative overflow-hidden font-sans">
      {/* Background Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <h4 className="text-center text-sm font-semibold uppercase tracking-wider text-indigo-primary mb-12">
          Technical Ecosystem Workflow
        </h4>

        {/* Desktop Timeline Flow */}
        <div className="hidden md:flex items-center justify-between relative px-4">
          {/* Connector Line SVG */}
          <div className="absolute top-[40px] left-0 w-full h-[2px] z-0 px-24 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <line
                x1="0"
                y1="50"
                x2="100"
                y2="50"
                stroke="currentColor"
                strokeWidth="2"
                className="text-border"
                strokeDasharray="4 4"
              />
              <motion.line
                x1="0"
                y1="50"
                x2="100"
                y2="50"
                stroke="url(#pulse-grad)"
                strokeWidth="2"
                strokeDasharray="4 4"
                animate={{ strokeDashoffset: [-20, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <defs>
                <linearGradient id="pulse-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0" />
                  <stop offset="50%" stopColor="#6366F1" />
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {nodes.map((node, index) => {
            const Icon = node.icon;
            return (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex flex-col items-center relative z-10 w-28 group"
              >
                {/* Node bubble */}
                <div
                  className={`w-20 h-20 rounded-2xl border flex items-center justify-center transition-all duration-300 shadow-md group-hover:scale-105 group-hover:shadow-indigo-primary/10 group-hover:border-indigo-primary ${node.color}`}
                >
                  <Icon className="w-8 h-8 transition-transform group-hover:rotate-12 duration-300" />
                </div>
                
                {/* Connector Node Indicator */}
                <div className="w-3.5 h-3.5 rounded-full border-2 border-bg-base bg-border group-hover:bg-indigo-primary transition-colors my-3 z-20" />

                {/* Node info */}
                <span className="text-sm font-semibold text-text text-center transition-colors group-hover:text-indigo-primary">
                  {node.name}
                </span>
                <span className="text-[10px] text-text-muted text-center mt-0.5">
                  {node.description}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile / Vertical List Flow */}
        <div className="flex md:hidden flex-col items-center space-y-8 relative">
          {/* Vertical Connecting Line */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] z-0 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <line
                x1="50"
                y1="0"
                x2="50"
                y2="100"
                stroke="currentColor"
                strokeWidth="2"
                className="text-border"
                strokeDasharray="4 4"
              />
            </svg>
          </div>

          {nodes.map((node, index) => {
            const Icon = node.icon;
            return (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-4 relative z-10 w-full max-w-xs p-3 rounded-xl bg-card border border-border shadow-sm"
              >
                <div
                  className={`w-12 h-12 rounded-xl border flex items-center justify-center flex-shrink-0 ${node.color}`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-text">{node.name}</div>
                  <div className="text-xs text-text-muted">{node.description}</div>
                </div>
                {index < nodes.length - 1 && (
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-border border-4 border-bg-base z-20 flex items-center justify-center text-[8px] text-text" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
