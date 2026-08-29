import { Code, Layers, Cloud, Wrench } from "lucide-react";
import { CircularCarousel } from "@/components/ui/circular-carousel";

export const Skills = () => {
  const stats = [
    { value: "10+", label: "Technologies", icon: Code },
    { value: "5+", label: "Frameworks", icon: Layers },
    { value: "2+", label: "Cloud Services", icon: Cloud },
    { value: "8+", label: "Tools", icon: Wrench },
  ];

  // Carousel items representing key skill categories
  const featuredSkillCarouselItems = [
    {
      id: "1",
      title: "React Native & Expo",
      description: "Cross-platform mobile apps for Android & iOS with native performance.",
      tag: "Mobile",
    },
    {
      id: "2",
      title: "React.js & Tailwind",
      description: "Scalable, modern frontend web solutions and interactive UIs.",
      tag: "Frontend",
    },
    {
      id: "3",
      title: "Node.js & Express",
      description: "RESTful APIs, authentication, microservices, and server logic.",
      tag: "Backend",
    },
    {
      id: "4",
      title: "MySQL & Database",
      description: "Relational database design, schemas, and SQL query optimization.",
      tag: "Database",
    },
    {
      id: "5",
      title: "AWS & Cloud",
      description: "EC2, S3, Linux infrastructure setup, and cloud deployments.",
      tag: "Cloud",
    },
    {
      id: "6",
      title: "Git & DevOps",
      description: "Version control workflows, Postman API testing, and tooling.",
      tag: "DevOps",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-bg-sec/30 border-y border-border font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Row Grid (Title left, stats right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-border/50 pb-8">
          {/* Header left */}
          <div className="lg:col-span-7 text-left space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-primary flex items-center gap-1.5 select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-primary" />
              My Skills
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text font-display leading-tight">
              Technologies I <span className="text-white">work with</span>
            </h2>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed max-w-xl">
              I enjoy working with modern technologies and tools to build efficient, scalable and user-friendly applications.
            </p>
          </div>

          {/* Metrics right panel */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="p-4 bg-card border border-border/80 rounded-2xl text-left flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-bg-sec border border-border text-indigo-primary">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-lg font-black text-text font-display">{stat.value}</div>
                    <div className="text-[10px] font-bold text-text-muted uppercase tracking-wider">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Circular Carousel Showcase */}
        <div className="py-6 rounded-3xl bg-zinc-950/90 border border-border/80 shadow-2xl overflow-hidden">
          <div className="text-center mb-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-primary">Featured Expertise</span>
            <h3 className="text-lg font-bold text-white font-display">Interactive Tech Carousel</h3>
          </div>
          <CircularCarousel items={featuredSkillCarouselItems} />
        </div>

      </div>
    </section>
  );
};
