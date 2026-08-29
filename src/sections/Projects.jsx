import { useState } from "react";
import { ArrowRight, Layers, LayoutGrid, Sliders } from "lucide-react";
import { projectsData } from "../data/projects";
import { CoverflowCarousel } from "@/components/ui/coverflow-carousel";
import { CardsParallax } from "@/components/ui/scroll-cards";

// Mock CSS components for the device representations
const PhoneMockup = () => (
  <div className="w-24 h-40 bg-slate-950 border-[3.5px] border-slate-800 rounded-[20px] relative shadow-lg overflow-hidden flex flex-col p-1.5 select-none scale-[1.05]">
    <div className="absolute top-1 left-1/2 -translate-x-1/2 w-10 h-2 bg-slate-800 rounded-full z-20" />
    <div className="flex-1 flex flex-col space-y-1.5 pt-2">
      <div className="w-6 h-1.5 bg-indigo-primary/40 rounded-full" />
      <div className="flex items-center space-x-1">
        <div className="w-3 h-3 rounded-full bg-slate-800" />
        <div className="w-8 h-1.5 bg-slate-800 rounded-full" />
      </div>
      <div className="flex-1 bg-slate-900/60 rounded p-1 space-y-1">
        <div className="h-1 bg-slate-800 rounded-full w-full" />
        <div className="h-1 bg-slate-800 rounded-full w-4/5" />
        <div className="h-1 bg-slate-800 rounded-full w-3/5" />
        <div className="flex justify-between items-center pt-2">
          <div className="w-4 h-4 bg-indigo-primary/30 rounded-full" />
          <div className="w-6 h-1.5 bg-indigo-primary/40 rounded-full" />
        </div>
      </div>
    </div>
  </div>
);

const BrowserMockup = () => (
  <div className="w-36 h-28 bg-slate-950 border border-slate-800 rounded-lg shadow-lg overflow-hidden flex flex-col select-none scale-[1.05]">
    <div className="px-2 py-1 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
      <div className="flex space-x-1">
        <div className="w-1.5 h-1.5 rounded-full bg-[#ff5f56]" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#ffbd2e]" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#27c93f]" />
      </div>
      <div className="w-20 h-1.5 bg-slate-800 rounded-full" />
      <div className="w-2" />
    </div>
    <div className="flex-1 flex p-1.5 gap-1.5">
      <div className="w-8 bg-slate-900/50 rounded flex flex-col space-y-1 p-0.5">
        <div className="h-1 bg-slate-800 rounded-full w-full" />
        <div className="h-1 bg-slate-800 rounded-full w-4/5" />
        <div className="h-1 bg-slate-800 rounded-full w-2/3" />
      </div>
      <div className="flex-1 bg-slate-900/30 rounded p-1 flex flex-col justify-between">
        <div className="flex justify-between items-center mb-1">
          <div className="w-10 h-1.5 bg-indigo-primary/30 rounded-full" />
          <div className="w-4 h-1.5 bg-emerald-500/30 rounded-full" />
        </div>
        <div className="flex items-end gap-1.5 flex-1 pt-1">
          <div className="h-3 w-1.5 bg-slate-800 rounded-sm" />
          <div className="h-6 w-1.5 bg-indigo-primary/40 rounded-sm animate-pulse" />
          <div className="h-4 w-1.5 bg-slate-800 rounded-sm" />
          <div className="h-8 w-1.5 bg-violet-secondary/40 rounded-sm" />
          <div className="h-5 w-1.5 bg-slate-800 rounded-sm" />
        </div>
      </div>
    </div>
  </div>
);

export const Projects = ({ onSelectProject }) => {
  const [filter, setFilter] = useState("all");
  const [viewMode, setViewMode] = useState("coverflow"); // "coverflow" | "scroll"

  const filterOptions = [
    { label: "All", value: "all" },
    { label: "Mobile Apps", value: "mobile" },
    { label: "Web Applications", value: "web" },
    { label: "Full Stack", value: "fullstack" },
    { label: "Other", value: "other" },
  ];

  const filteredProjects = projectsData.filter(
    (project) => filter === "all" || project.type === filter
  );

  // Coverflow slides
  const coverflowSlides = filteredProjects.map((project) => ({
    id: project.id,
    project: project,
    content: (
      <div
        className="group h-full w-full bg-card/65 backdrop-blur-md border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-indigo-primary/5 hover:border-indigo-primary/45 transition-all duration-300 flex flex-col text-left cursor-pointer"
        onClick={() => onSelectProject(project)}
      >
        <div className={`h-48 bg-gradient-to-tr ${project.imageColor} relative flex items-center justify-center overflow-hidden pt-4`}>
          <div className="absolute top-3 left-4 flex items-center space-x-1 z-20">
            <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
          </div>
          
          {project.type === "mobile" ? <PhoneMockup /> : <BrowserMockup />}

          <div className="absolute bottom-3 left-4 text-[9px] text-white/70 font-mono tracking-wider uppercase font-bold bg-black/25 backdrop-blur-sm px-2 py-0.5 rounded border border-white/10 select-none">
            {project.type === "mobile" ? "iOS | Android" : "Web | Responsive"}
          </div>

          <div className="absolute top-3 right-4 text-[9px] text-white/50 font-mono tracking-wider uppercase font-semibold">
            {project.type}
          </div>
        </div>

        <div className="p-5 flex flex-col flex-1 space-y-3">
          <div className="space-y-1">
            <span className="text-[9px] uppercase font-black tracking-widest text-indigo-primary">
              {project.type === "mobile" ? "Mobile App" : project.type === "web" ? "Web App" : "AI / Web App"}
            </span>
            
            <h3 className="text-base font-bold font-display text-text group-hover:text-indigo-primary transition-colors flex items-center justify-between">
              {project.name}
              <span className="p-1 rounded bg-bg-sec border border-border text-text-muted group-hover:text-indigo-primary opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </h3>
            
            <p className="text-text-muted text-xs leading-relaxed line-clamp-2">
              {project.shortDescription}
            </p>
          </div>

          <div className="flex flex-wrap gap-1 select-none pt-0.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-[9px] font-bold bg-bg-sec border border-border/80 text-text-muted rounded"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-border/80 mt-auto">
            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="px-2.5 py-1 bg-bg-sec border border-border hover:border-indigo-primary/45 rounded-lg text-xs font-bold text-text hover:text-indigo-primary transition-all duration-300 flex items-center gap-1 shadow-sm"
                >
                  GitHub
                </a>
              )}
              
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectProject(project);
                }}
                className="px-2.5 py-1 bg-indigo-primary/10 hover:bg-indigo-primary text-indigo-primary hover:text-white rounded-lg text-xs font-bold transition-all duration-300 flex items-center gap-1 shadow-sm border border-indigo-primary/20 cursor-pointer"
              >
                Live Demo
              </button>
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onSelectProject(project);
              }}
              className="text-[10px] font-extrabold uppercase text-indigo-primary tracking-widest flex items-center gap-0.5 opacity-80 group-hover:opacity-100 transition-opacity cursor-pointer"
            >
              Case Study
            </button>
          </div>
        </div>
      </div>
    ),
  }));

  // Scroll Cards Parallax Items
  const scrollCardItems = filteredProjects.map((project, idx) => ({
    id: project.id,
    title: project.name,
    description: project.shortDescription,
    tag: project.type === "mobile" ? "Mobile App" : project.type === "web" ? "Web App" : "AI / Web",
    src: project.type === "mobile"
      ? "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop"
      : "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    link: "#",
    color: idx % 2 === 0 ? "#0c1322" : "#090d16",
    textColor: "#ffffff",
    project: project,
  }));

  return (
    <section id="projects" className="py-20 bg-bg-sec/30 border-y border-border font-sans relative overflow-x-clip">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-border/50 pb-8">
          <div className="lg:col-span-7 text-left space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-primary flex items-center gap-1.5 select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-primary" />
              My Projects
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text font-display leading-tight">
              Real Projects. <span className="bg-gradient-to-r from-[#00A3FF] via-[#70C8FF] to-white bg-clip-text text-transparent">Real Impact.</span>
            </h2>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed max-w-xl">
              Here are some of the projects I've built, showcasing my skills in web & mobile development, problem solving and creativity.
            </p>
          </div>

          {/* Quick Metrics Subheader right */}
          <div className="lg:col-span-5 bg-card border border-border/80 rounded-3xl p-6 shadow-md flex items-center justify-between text-left">
            <div className="flex flex-col">
              <span className="text-lg font-black text-text font-display">5+</span>
              <span className="text-[9px] font-bold text-text-muted uppercase tracking-wider">Projects Completed</span>
            </div>
            <div className="w-px h-8 bg-border/60" />
            <div className="flex flex-col">
              <span className="text-lg font-black text-text font-display">1+</span>
              <span className="text-[9px] font-bold text-text-muted uppercase tracking-wider">Years Exp</span>
            </div>
            <div className="w-px h-8 bg-border/60" />
            <div className="flex flex-col">
              <span className="text-lg font-black text-text font-display">10+</span>
              <span className="text-[9px] font-bold text-text-muted uppercase tracking-wider">Techs Used</span>
            </div>
            <div className="w-px h-8 bg-border/60" />
            <div className="flex flex-col">
              <span className="text-lg font-black text-text font-display">100%</span>
              <span className="text-[9px] font-bold text-text-muted uppercase tracking-wider">Commitment</span>
            </div>
          </div>
        </div>

        {/* Filter & View Mode Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 select-none border-b border-border/30 pb-6">
          <div className="flex flex-wrap items-center gap-2">
            {filterOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setFilter(opt.value)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 border cursor-pointer ${
                  filter === opt.value
                    ? "bg-gradient-to-r from-[#00A3FF] to-[#70C8FF] border-transparent text-white shadow-md shadow-[#00A3FF]/25"
                    : "bg-card border-border text-text-muted hover:text-text hover:border-[#00A3FF]/45"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center gap-1.5 p-1 bg-card border border-border rounded-xl">
            <button
              onClick={() => setViewMode("coverflow")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
                viewMode === "coverflow"
                  ? "bg-gradient-to-r from-[#00A3FF] to-[#70C8FF] text-white"
                  : "text-text-muted hover:text-text"
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              3D Coverflow
            </button>
            
            <button
              onClick={() => setViewMode("scroll")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
                viewMode === "scroll"
                  ? "bg-gradient-to-r from-[#00A3FF] to-[#70C8FF] text-white"
                  : "text-text-muted hover:text-text"
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              Scroll Parallax
            </button>
          </div>
        </div>

        {/* Dynamic Project Display */}
        {filteredProjects.length > 0 ? (
          viewMode === "coverflow" ? (
            <div className="w-full relative">
              <CoverflowCarousel
                key={filter}
                slides={coverflowSlides}
                cardWidth="clamp(280px, 80vw, 350px)"
                showNavigation={true}
                showPagination={true}
                onCardClick={(slide) => {
                  if (slide.project) {
                    onSelectProject(slide.project);
                  }
                }}
              />
            </div>
          ) : (
            <div className="w-full relative">
              <CardsParallax
                items={scrollCardItems}
                onCardClick={(item) => {
                  if (item.project) {
                    onSelectProject(item.project);
                  }
                }}
              />
            </div>
          )
        ) : (
          <div className="py-16 text-center text-text-muted text-sm">
            No projects found in this category.
          </div>
        )}

        {/* Bottom CTA banner */}
        <div className="bg-[#0b101b] border border-border rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-left relative overflow-hidden mt-8">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-indigo-primary/10 to-transparent rounded-bl-full pointer-events-none" />
          
          <div className="flex items-center gap-4 z-10">
            <div className="p-3 bg-indigo-primary/10 text-indigo-primary rounded-full animate-pulse flex-shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-text">
                Have a project in mind?
              </h4>
              <p className="text-[11px] sm:text-xs text-text-muted leading-normal mt-0.5">
                Let's build something amazing together and scale your workflow.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="px-6 py-3 bg-gradient-to-r from-[#00A3FF] to-[#70C8FF] hover:opacity-95 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 transition-all duration-300 transform hover:-translate-y-0.5 z-10 flex-shrink-0 shadow-md shadow-[#00A3FF]/25 cursor-pointer"
          >
            Get in Touch
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
