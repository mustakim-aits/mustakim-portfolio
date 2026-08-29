import { useEffect } from "react";
import { motion } from "framer-motion";
import { X, ExternalLink, Shield, Cpu, HelpCircle, Layers } from "lucide-react";

export const Modal = ({ project, onClose }) => {
  // Disable body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  // Handle escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
      />

      {/* Modal Dialog Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto bg-card border border-border rounded-2xl shadow-2xl z-10 font-sans"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        {/* Header Visual Backdrop */}
        <div className={`h-48 w-full bg-gradient-to-r ${project.imageColor} relative flex items-end p-6`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-slate-900/60 text-white rounded-full hover:bg-slate-900/80 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="text-white z-10">
            <span className="px-2.5 py-1 text-xs font-semibold uppercase tracking-wider bg-white/20 rounded-full backdrop-blur-sm">
              {project.type === "mobile" ? "Mobile App" : project.type === "web" ? "Web App" : "Full Stack Platform"}
            </span>
            <h3 id="modal-project-title" className="text-2xl sm:text-3xl font-extrabold font-display mt-2 drop-shadow-md">
              {project.name}
            </h3>
          </div>
          {/* Subtle decorative grid/overlay */}
          <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Action Links & Tech Stack */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-border">
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium bg-bg-sec border border-border text-text rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-text-muted hover:text-text bg-bg-sec border border-border rounded-lg transition-all hover:bg-border"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  GitHub Repository
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-indigo-primary hover:bg-indigo-primary/90 rounded-lg shadow-md shadow-indigo-primary/15 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Preview
                </a>
              )}
            </div>
          </div>

          {/* Grid Layout for details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Col (2/3 width) - Project Description, Problems, Solutions */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-indigo-primary mb-2">
                  Project Overview
                </h4>
                <p className="text-text-muted text-base leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="p-4 bg-bg-sec/50 border border-border rounded-xl">
                  <div className="flex items-center gap-2 mb-2 text-text">
                    <HelpCircle className="w-4 h-4 text-violet-secondary" />
                    <h5 className="font-semibold text-sm">The Problem</h5>
                  </div>
                  <p className="text-text-muted text-xs leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div className="p-4 bg-bg-sec/50 border border-border rounded-xl">
                  <div className="flex items-center gap-2 mb-2 text-text">
                    <Shield className="w-4 h-4 text-emerald-500" />
                    <h5 className="font-semibold text-sm">The Solution</h5>
                  </div>
                  <p className="text-text-muted text-xs leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-indigo-primary mb-3">
                  Key Features
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-text-muted">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-primary mt-1.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Col (1/3 width) - Role & Development Challenges */}
            <div className="space-y-6">
              <div className="p-5 bg-bg-sec border border-border rounded-xl">
                <div className="flex items-center gap-2 mb-3 text-text">
                  <Cpu className="w-4 h-4 text-indigo-primary" />
                  <h4 className="font-bold text-sm uppercase tracking-wider text-indigo-primary">
                    My Role
                  </h4>
                </div>
                <p className="text-text-muted text-xs leading-relaxed">
                  {project.role}
                </p>
              </div>

              <div className="p-5 bg-bg-sec border border-border rounded-xl">
                <div className="flex items-center gap-2 mb-3 text-text">
                  <Layers className="w-4 h-4 text-violet-secondary" />
                  <h4 className="font-bold text-sm uppercase tracking-wider text-violet-secondary">
                    Challenges & Learning
                  </h4>
                </div>
                <p className="text-text-muted text-xs leading-relaxed">
                  {project.challenges}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
