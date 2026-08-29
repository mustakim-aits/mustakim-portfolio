import { motion } from "framer-motion";
import { Star, GitFork, BookOpen, ExternalLink } from "lucide-react";

export const GitHubSection = () => {
  // Mock repository data
  const repos = [
    {
      name: "edunovaa-app",
      description: "Education management mobile application built using React Native and Expo.",
      language: "TypeScript",
      langColor: "bg-blue-500",
      stars: 12,
      forks: 4,
      url: "https://github.com/MustakimMunna/edunovaa-app",
    },
    {
      name: "workdesk-platform",
      description: "Business and workforce management platform featuring full admin and employee functionality.",
      language: "JavaScript",
      langColor: "bg-amber-400",
      stars: 18,
      forks: 3,
      url: "https://github.com/MustakimMunna/workdesk-platform",
    },
    {
      name: "gupta-sandwich-app",
      description: "Mobile sandwich ordering client with API integration and real-time operations dashboard.",
      language: "TypeScript",
      langColor: "bg-blue-500",
      stars: 8,
      forks: 2,
      url: "https://github.com/MustakimMunna/gupta-sandwich-app",
    },
  ];

  // Helper to generate contributions calendar blocks (18 columns, 7 rows)
  const columns = 28;
  const rows = 7;
  const contributionGrid = Array.from({ length: columns * rows }, () => {
    // Generate a random intensity (0 = empty, 1 = low, 2 = medium, 3 = high)
    const rand = Math.random();
    if (rand < 0.3) return 0;
    if (rand < 0.6) return 1;
    if (rand < 0.85) return 2;
    return 3;
  });

  const getIntensityColor = (val) => {
    switch (val) {
      case 0: return "bg-border/40 dark:bg-border/20";
      case 1: return "bg-emerald-500/30";
      case 2: return "bg-emerald-500/60";
      case 3: return "bg-emerald-500";
      default: return "bg-border/40";
    }
  };

  return (
    <section className="py-20 bg-bg-base font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text font-display"
          >
            GitHub Activity
          </motion.h2>
          <p className="text-text-muted mt-2 text-sm sm:text-base">
            Open-source contribution graph and featured repositories.
          </p>
          <div className="w-16 h-1 bg-indigo-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Profile Card & Stats Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* GitHub Identity Card (4/12 width) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 bg-card border border-border rounded-2xl p-6 flex flex-col justify-between text-left relative overflow-hidden"
          >
            {/* Background grid */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-indigo-primary/5 to-transparent rounded-bl-full pointer-events-none" />
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-indigo-primary text-white flex items-center justify-center font-extrabold text-xl shadow-md border border-border/80">
                  M
                </div>
                <div>
                  <h3 className="font-bold text-text font-display text-base">
                    Mustakim Munna Pathan
                  </h3>
                  <a
                    href="https://github.com/MustakimMunna"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-indigo-primary hover:underline flex items-center gap-1 mt-0.5"
                  >
                    @MustakimMunna
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
              
              <p className="text-xs text-text-muted leading-relaxed">
                Software Developer building responsive web & mobile apps. Specialize in React, React Native, TypeScript, Node.js.
              </p>

              <div className="flex gap-4 text-xs font-semibold text-text">
                <div>
                  <span className="text-text-muted mr-1 font-normal">Followers</span>
                  <span>45</span>
                </div>
                <div>
                  <span className="text-text-muted mr-1 font-normal">Following</span>
                  <span>38</span>
                </div>
                <div>
                  <span className="text-text-muted mr-1 font-normal">Repos</span>
                  <span>24</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-border flex justify-between items-center">
              <a
                href="https://github.com/MustakimMunna"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-indigo-primary hover:text-violet-secondary transition-colors inline-flex items-center gap-1.5"
              >
                View GitHub Profile
                <span>→</span>
              </a>
              <svg className="w-5 h-5 text-text-muted/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </div>
          </motion.div>

          {/* Contributions Calendar Card (8/12 width) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-8 bg-card border border-border rounded-2xl p-6 flex flex-col justify-between text-left"
          >
            <div>
              <div className="flex items-center justify-between border-b border-border/80 pb-4 mb-6">
                <h3 className="font-bold text-text font-display text-sm flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-indigo-primary" />
                  Contributions Activity
                </h3>
                <span className="text-[11px] font-semibold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                  1,482 Contributions this Year
                </span>
              </div>

              {/* Grid Box */}
              <div className="overflow-x-auto pb-2">
                <div className="min-w-[400px]">
                  <div className="grid grid-flow-col grid-rows-7 gap-[3px] w-full aspect-[28/7]">
                    {contributionGrid.map((val, idx) => (
                      <div
                        key={idx}
                        className={`rounded-[1px] transition-colors duration-300 hover:scale-110 ${getIntensityColor(val)}`}
                        title={`${val === 0 ? "No" : val * 3} contributions`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Legend info */}
            <div className="flex items-center justify-between text-[10px] text-text-muted mt-4 pt-2 border-t border-border/40">
              <span>Contribution rate based on public commits & issues.</span>
              <div className="flex items-center gap-1">
                <span>Less</span>
                <div className="w-2.5 h-2.5 rounded-[1px] bg-border/40 dark:bg-border/20" />
                <div className="w-2.5 h-2.5 rounded-[1px] bg-emerald-500/30" />
                <div className="w-2.5 h-2.5 rounded-[1px] bg-emerald-500/60" />
                <div className="w-2.5 h-2.5 rounded-[1px] bg-emerald-500" />
                <span>More</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Repositories showcase */}
        <h4 className="text-left font-bold text-text font-display text-sm uppercase tracking-wider mb-6">
          Featured Repositories
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {repos.map((repo, idx) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-5 bg-card border border-border rounded-xl text-left hover:border-indigo-primary/45 transition-colors flex flex-col justify-between"
            >
              <div>
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-text hover:text-indigo-primary transition-colors flex items-center gap-1.5 font-display text-sm"
                >
                  <BookOpen className="w-4 h-4 text-indigo-primary flex-shrink-0" />
                  {repo.name}
                </a>
                <p className="text-text-muted text-[11px] leading-relaxed mt-2 line-clamp-3">
                  {repo.description}
                </p>
              </div>

              <div className="flex items-center gap-4 text-[10px] font-semibold text-text-muted mt-6 pt-3 border-t border-border/50">
                <div className="flex items-center gap-1.5">
                  <span className={`w-2.5 h-2.5 rounded-full ${repo.langColor}`} />
                  <span>{repo.language}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-amber-400" />
                  <span>{repo.stars}</span>
                </div>
                <div className="flex items-center gap-1">
                  <GitFork className="w-3.5 h-3.5 text-violet-secondary" />
                  <span>{repo.forks}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
