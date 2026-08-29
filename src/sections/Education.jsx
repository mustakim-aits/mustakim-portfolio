import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, BookmarkCheck } from "lucide-react";
import { educationData, certificationsData } from "../data/education";

export const Education = () => {
  return (
    <section id="education" className="py-20 bg-bg-sec/30 border-y border-border font-sans relative">
      {/* Decorative Blur */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text font-display"
          >
            Education & Certifications
          </motion.h2>
          <p className="text-text-muted mt-2 text-sm sm:text-base">
            My academic foundation and continuous professional learning.
          </p>
          <div className="w-16 h-1 bg-indigo-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Two-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Education Timeline */}
          <div className="lg:col-span-6 space-y-8">
            <h3 className="text-xl font-bold font-display text-text flex items-center gap-2 mb-6 text-left">
              <GraduationCap className="w-5 h-5 text-indigo-primary" />
              Academic History
            </h3>
            
            <div className="relative border-l border-border pl-6 space-y-8 text-left ml-3">
              {educationData.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline node */}
                  <span className="absolute -left-[35px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-card border border-border text-indigo-primary shadow-sm transition-all duration-300 group-hover:border-indigo-primary group-hover:shadow-lg group-hover:shadow-indigo-primary/20">
                    <GraduationCap className="w-3 h-3 transition-transform group-hover:scale-110" />
                    <span className="absolute inset-0 rounded-full bg-indigo-primary/10 animate-ping opacity-0 group-hover:opacity-100 duration-1000" />
                  </span>
                  
                  <div className="p-5 bg-card/75 backdrop-blur-md border border-border/70 rounded-xl shadow-sm hover:scale-[1.01] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-primary/5 hover:border-indigo-primary/45 transition-all duration-300">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-primary mb-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.duration}
                    </span>
                    <h4 className="text-base font-bold font-display text-text">
                      {edu.degree}
                    </h4>
                    <div className="text-xs font-semibold text-text-muted mt-0.5">
                      {edu.institution} {edu.affiliation ? `• ${edu.affiliation}` : ""}
                    </div>
                    <p className="text-text-muted text-xs leading-relaxed mt-3">
                      {edu.description}
                    </p>
                    {edu.highlights && (
                      <ul className="mt-3 space-y-1 text-[11px] text-text-muted">
                        {edu.highlights.map((hl, hlIdx) => (
                          <li key={hlIdx} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-primary" />
                            {hl}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl font-bold font-display text-text flex items-center gap-2 mb-6 text-left">
              <Award className="w-5 h-5 text-violet-secondary" />
              Certifications & Core Training
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certificationsData.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-4 bg-card border border-border rounded-xl text-left shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 border-b border-border/60 pb-2 mb-2">
                      <span className="text-[10px] font-bold text-violet-secondary uppercase tracking-wider">
                        {cert.provider}
                      </span>
                      <BookmarkCheck className="w-4 h-4 text-violet-secondary flex-shrink-0" />
                    </div>
                    <h4 className="text-sm font-bold font-display text-text">
                      {cert.title}
                    </h4>
                    <p className="text-text-muted text-[11px] leading-relaxed mt-2">
                      {cert.description}
                    </p>
                  </div>
                  
                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1 mt-4 pt-2 border-t border-border/40">
                    {cert.skillsCovered.map((skill) => (
                      <span
                        key={skill}
                        className="px-1.5 py-0.5 text-[9px] font-semibold bg-bg-sec text-text-muted border border-border/80 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
