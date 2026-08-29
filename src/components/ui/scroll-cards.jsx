import React from "react";
import { motion } from "framer-motion";

export const CardsParallax = ({ items, onCardClick }) => {
  return (
    <div className="relative py-4 space-y-6 max-w-4xl mx-auto">
      {items.map((project, i) => {
        return (
          <motion.div
            key={project.id || `p_${i}`}
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            onClick={() => onCardClick?.(project, i)}
            className="sticky top-24 relative flex flex-col min-h-[300px] sm:min-h-[360px] w-full py-8 px-6 md:px-12
            rounded-3xl border border-white/10 overflow-hidden shadow-2xl items-center justify-center mx-auto 
            cursor-pointer group hover:scale-[1.015] transition-all duration-300 transform-gpu"
            style={{
              backgroundColor: project.color || "#090d16",
              zIndex: i + 1,
              marginTop: i > 0 ? "-20px" : "0px",
            }}
          >
            {/* Background Image overlay */}
            {project.src && (
              <div className="absolute inset-0 z-0 opacity-35 group-hover:opacity-50 transition-opacity">
                <img
                  className="w-full h-full object-cover"
                  src={project.src}
                  alt={project.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
              </div>
            )}

            {/* Tag */}
            {project.tag && (
              <span className="relative z-10 text-[11px] font-bold uppercase tracking-widest px-3.5 py-1 bg-indigo-500/20 border border-indigo-500/30 text-indigo-400 rounded-full mb-3 select-none">
                {project.tag}
              </span>
            )}

            {/* Title */}
            <h3 className="font-bold relative text-3xl sm:text-4xl md:text-5xl text-center z-10 tracking-tight font-display text-white">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-base font-medium text-center z-10 mt-3 tracking-wide max-w-lg text-slate-300 leading-relaxed">
              {project.description}
            </p>

            {/* Action CTA */}
            <div className="relative z-10 mt-6 flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs sm:text-sm font-bold rounded-xl shadow-lg transition-all">
              View Project Details ↗
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
