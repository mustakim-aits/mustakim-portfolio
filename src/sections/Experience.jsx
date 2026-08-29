import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2, BookmarkCheck, Smartphone, Code2, Database, Users, Download, ArrowUpRight, GraduationCap } from "lucide-react";
import { experienceData } from "../data/experience";
import { educationData } from "../data/education";

export const Experience = () => {
  const highlights = [
    {
      title: "Cross-Platform Development",
      desc: "Built high-performance mobile apps using React Native for Android & iOS.",
      icon: Smartphone,
      color: "text-blue-400 bg-blue-500/10",
    },
    {
      title: "API Integration",
      desc: "Experience in building and consuming RESTful APIs.",
      icon: Code2,
      color: "text-purple-400 bg-purple-500/10",
    },
    {
      title: "Database Management",
      desc: "Skilled in designing and integrating MySQL databases.",
      icon: Database,
      color: "text-emerald-400 bg-emerald-500/10",
    },
    {
      title: "Agile Collaboration",
      desc: "Worked in Agile teams using Git for version control and collaboration.",
      icon: Users,
      color: "text-amber-500 bg-amber-500/10",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-bg-base font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-border/50 pb-8">
          <div className="lg:col-span-7 text-left space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-primary flex items-center gap-1.5 select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-primary" />
              My Journey
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text font-display leading-tight">
              My <span className="text-white">Experience</span>
            </h2>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed max-w-xl">
              A timeline of my professional journey and the impact I've created through the work I do.
            </p>
          </div>

          {/* Right quick stats panel */}
          <div className="lg:col-span-5 bg-card border border-border/80 rounded-3xl p-6 shadow-md flex items-center justify-between text-left">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-indigo-500/10 text-indigo-primary rounded-2xl">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <div className="text-lg font-black text-text font-display">1+</div>
                <div className="text-[10px] font-bold text-text-muted uppercase tracking-wider">Years of Experience</div>
              </div>
            </div>
            <div className="w-px h-10 bg-border/60" />
            <div>
              <div className="text-lg font-black text-text font-display">5+</div>
              <div className="text-[10px] font-bold text-text-muted uppercase tracking-wider">Projects Delivered</div>
            </div>
            <div className="w-px h-10 bg-border/60" />
            <div>
              <div className="text-lg font-black text-text font-display">100%</div>
              <div className="text-[10px] font-bold text-text-muted uppercase tracking-wider">Commitment</div>
            </div>
          </div>
        </div>

        {/* Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Experience Timeline List (8/12 width) */}
          <div className="lg:col-span-8 relative border-l border-border pl-6 sm:pl-8 space-y-12 ml-4">
            {experienceData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative group text-left"
              >
                {/* Timeline connector circle node */}
                <span className="absolute -left-[35px] sm:-left-[43px] top-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-card border border-border text-indigo-primary shadow-sm transition-all duration-300 group-hover:border-indigo-primary group-hover:shadow-lg group-hover:shadow-indigo-primary/20">
                  <Briefcase className="w-3 h-3 transition-transform group-hover:scale-110" />
                  <span className="absolute inset-0 rounded-full bg-indigo-primary/10 animate-ping opacity-0 group-hover:opacity-100 duration-1000" />
                </span>

                <div className="p-6 bg-card border border-border rounded-3xl shadow-sm hover:border-indigo-primary/30 transition-all duration-300">
                  
                  {/* Header info */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/60 pb-4 mb-4">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-text">
                        {item.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1 text-xs">
                        <span className="font-bold text-indigo-primary select-none">{item.company}</span>
                        <span className="text-text-muted">•</span>
                        <span className="flex items-center gap-1 text-text-muted">
                          <MapPin className="w-3.5 h-3.5" />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:items-end gap-1.5 flex-shrink-0">
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-indigo-primary bg-indigo-500/10 px-2 py-0.5 rounded">
                        {item.duration}
                      </span>
                      {item.typeTag && (
                        <span className="inline-flex items-center text-[9px] font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/10 select-none">
                          {item.typeTag}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Bullet Pointers */}
                  <ul className="space-y-2 mb-6">
                    {item.description.map((bullet, bIdx) => (
                      <li key={bIdx} className="text-xs sm:text-sm text-text-muted flex items-start gap-2.5 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-primary mt-2 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Used Tag list */}
                  <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border/40 text-[10px] font-bold">
                    <span className="text-text-muted uppercase tracking-wider select-none mr-1">Tech Used:</span>
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-bg-sec border border-border/80 text-text rounded-lg hover:border-indigo-primary/45 transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side: Sidebar Cards (4/12 width) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Sidebar Card 1: Experience Highlights */}
            <div className="bg-card border border-border rounded-3xl p-6 shadow-md hover:border-indigo-primary/30 transition-colors text-left">
              <h3 className="text-sm font-bold uppercase tracking-wider text-text border-b border-border/50 pb-4 mb-4 flex items-center gap-2">
                <BookmarkCheck className="w-4 h-4 text-indigo-primary" />
                Experience Highlights
              </h3>
              
              <div className="space-y-4">
                {highlights.map((hl) => {
                  const Icon = hl.icon;
                  return (
                    <div key={hl.title} className="flex gap-3.5">
                      <div className={`p-2 rounded-xl border border-border/60 flex-shrink-0 flex items-center justify-center h-10 w-10 ${hl.color}`}>
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-text">{hl.title}</h4>
                        <p className="text-[11px] text-text-muted mt-0.5 leading-relaxed">
                          {hl.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Sidebar Card 2: Education Widget */}
            <div className="bg-card border border-border rounded-3xl p-6 shadow-md hover:border-indigo-primary/30 transition-colors text-left">
              <h3 className="text-sm font-bold uppercase tracking-wider text-text border-b border-border/50 pb-4 mb-4 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-indigo-primary" />
                Education
              </h3>

              <div className="relative border-l border-border pl-4 space-y-4 ml-1">
                {educationData.map((edu, idx) => (
                  <div key={idx} className="relative">
                    <span className="absolute -left-[21px] top-1 flex h-3 w-3 items-center justify-center rounded-full bg-card border border-border">
                      <span className="h-1 w-1 rounded-full bg-indigo-primary" />
                    </span>
                    <div className="space-y-0.5 text-left">
                      <span className="text-[9px] font-bold text-indigo-primary select-none">
                        {edu.duration} • {edu.status}
                      </span>
                      <h4 className="text-xs font-bold text-text">{edu.degree}</h4>
                      <p className="text-[10px] text-text-muted leading-tight">
                        {edu.institution.split(" ").slice(0, 4).join(" ")}...
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Banner Ribbon */}
        <div className="bg-card/45 backdrop-blur-md border border-border/85 rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-indigo-primary/10 text-indigo-primary rounded-full animate-bounce flex-shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-text">
                Let's build something amazing together!
              </h4>
              <p className="text-[11px] sm:text-xs text-text-muted leading-normal mt-0.5">
                I'm always open to discussing new opportunities and interesting projects.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="px-5 py-2.5 bg-indigo-primary hover:bg-indigo-primary/95 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              Let's Connect
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            
            <a
              href="/resume.pdf"
              download
              className="px-5 py-2.5 bg-bg-sec/80 border border-border/80 hover:border-indigo-primary rounded-xl text-xs font-bold text-text flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5 text-indigo-primary" />
              Download Resume
            </a>
            
            <div className="w-px h-6 bg-border/60 hidden sm:block" />

            <div className="flex items-center gap-2">
              <a
                href="https://github.com/MustakimMunna"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-bg-sec border border-border/80 text-text-muted hover:text-indigo-primary hover:border-indigo-primary rounded-lg transition-colors"
                aria-label="GitHub Profile"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              
              <a
                href="https://linkedin.com/in/mustakimpathan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-bg-sec border border-border/80 text-text-muted hover:text-indigo-primary hover:border-indigo-primary rounded-lg transition-colors"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
