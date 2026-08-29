import { motion } from "framer-motion";
import { Rocket, Code, Users, Calendar, Layout, Code2, Coffee, User, MapPin, Mail, Phone, Download, GraduationCap, Smartphone, Server, Cloud } from "lucide-react";
import profileImg from "../assets/profile.jpg";
import { educationData } from "../data/education";

export const About = () => {
  const bulletPointers = [
    {
      title: "Problem Solver",
      description: "I enjoy solving complex problems and turning ideas into efficient digital solutions.",
      icon: Rocket,
      color: "text-blue-400 bg-blue-500/10",
    },
    {
      title: "Clean Code",
      description: "I follow best practices and write clean, maintainable and scalable code.",
      icon: Code,
      color: "text-purple-400 bg-purple-500/10",
    },
    {
      title: "Team Player",
      description: "I love collaborating with teams, sharing ideas and building great products together.",
      icon: Users,
      color: "text-emerald-400 bg-emerald-500/10",
    },
  ];

  const whatIDo = [
    {
      title: "Mobile App Development",
      description: "Building cross-platform mobile apps using React Native with great performance.",
      icon: Smartphone,
      color: "text-[#61dafb] bg-[#61dafb]/10",
    },
    {
      title: "Web Development",
      description: "Creating responsive and interactive web apps using React.js and modern tools.",
      icon: Layout,
      color: "text-purple-400 bg-purple-500/10",
    },
    {
      title: "Backend & APIs",
      description: "Developing RESTful APIs and integrating frontend with robust backend services.",
      icon: Server,
      color: "text-emerald-400 bg-emerald-500/10",
    },
    {
      title: "Cloud Deployment",
      description: "Deploying applications on AWS infrastructure for scalability and reliability.",
      icon: Cloud,
      color: "text-amber-500 bg-amber-500/10",
    },
  ];

  return (
    <section id="about" className="py-20 bg-bg-base font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Row Grid (3 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: Introduction text and Pointers (5/12 width) */}
          <div className="lg:col-span-5 text-left flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-primary flex items-center gap-1.5 select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-primary" />
                About Me
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text font-display leading-tight">
                Get to know <br />
                me <span className="bg-gradient-to-r from-sky-400 to-indigo-primary bg-clip-text text-transparent">better</span>
              </h2>
              <p className="text-text-muted text-sm sm:text-base leading-relaxed">
                I'm a passionate React Native Developer who loves building scalable, user-friendly web & mobile applications.
              </p>
            </div>

            {/* Bullets */}
            <div className="space-y-4">
              {bulletPointers.map((bullet) => {
                const Icon = bullet.icon;
                return (
                  <div key={bullet.title} className="flex gap-4">
                    <div className={`p-2.5 rounded-xl border border-border flex-shrink-0 flex items-center justify-center ${bullet.color} h-11 w-11`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-text">{bullet.title}</h4>
                      <p className="text-xs text-text-muted mt-0.5 leading-normal max-w-sm">
                        {bullet.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quote Box (4/12 width) */}
          <div className="lg:col-span-4 bg-card/60 backdrop-blur-md border border-border/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl text-left hover:border-indigo-primary/30 transition-colors">
            <div className="space-y-4">
              <span className="text-4xl text-indigo-primary font-serif select-none">“</span>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-normal italic">
                I'm Mustakim Munna Pathan, a React Native Developer with strong experience in building cross-platform mobile applications and modern web solutions. I focus on creating products that are fast, reliable and provide real value to users.
              </p>
              
              {/* Handwritten Signature */}
              <div className="pt-2">
                <div className="text-lg font-serif italic text-indigo-primary font-semibold select-none">
                  Mustakim Pathan
                </div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-text-muted mt-0.5">
                  React Native Developer
                </div>
              </div>
           </div>

            {/* Mini metrics horizontal grid */}
            <div className="grid grid-cols-4 gap-2 pt-6 border-t border-border/60 mt-8 text-center">
              <div className="space-y-1">
                <Calendar className="w-4 h-4 text-indigo-primary mx-auto" />
                <div className="text-sm font-black text-text font-display">1+</div>
                <div className="text-[9px] text-text-muted whitespace-nowrap">Years Exp</div>
              </div>
              <div className="space-y-1">
                <Layout className="w-4 h-4 text-violet-secondary mx-auto" />
                <div className="text-sm font-black text-text font-display">5+</div>
                <div className="text-[9px] text-text-muted whitespace-nowrap">Projects</div>
              </div>
              <div className="space-y-1">
                <Code2 className="w-4 h-4 text-emerald-500 mx-auto" />
                <div className="text-sm font-black text-text font-display">10+</div>
                <div className="text-[9px] text-text-muted whitespace-nowrap">Techs</div>
              </div>
              <div className="space-y-1">
                <Coffee className="w-4 h-4 text-amber-500 mx-auto" />
                <div className="text-sm font-black text-text font-display">∞</div>
                <div className="text-[9px] text-text-muted whitespace-nowrap">Learning</div>
              </div>
            </div>
          </div>

          {/* Column 3: Profile Identity Card (3/12 width) */}
          <div className="lg:col-span-3 bg-card border border-border rounded-3xl p-6 shadow-xl flex flex-col justify-between text-left hover:border-indigo-primary/30 transition-colors">
            <div className="space-y-6">
              {/* Small portrait image centered */}
              <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden border border-border/80 shadow-md bg-bg-sec flex items-center justify-center">
                <img
                  src={profileImg}
                  alt="Mustakim Pathan"
                  className="w-full h-full object-cover scale-[1.08]"
                />
                <span className="absolute bottom-1 right-2 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-emerald-500 border-2 border-card shadow-sm" title="Available" />
              </div>
              
              {/* Profile metadata list */}
              <div className="space-y-3.5">
                <div className="flex items-center gap-3">
                  <User className="w-4 h-4 text-indigo-primary flex-shrink-0" />
                  <div className="min-w-0">
                    <span className="block text-[9px] uppercase font-bold text-text-muted tracking-wider">Name</span>
                    <span className="text-xs font-semibold text-text truncate block">Mustakim Munna Pathan</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-violet-secondary flex-shrink-0" />
                  <div className="min-w-0">
                    <span className="block text-[9px] uppercase font-bold text-text-muted tracking-wider">Location</span>
                    <span className="text-xs font-semibold text-text block">Ahmednagar, India</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <div className="min-w-0">
                    <span className="block text-[9px] uppercase font-bold text-text-muted tracking-wider">Email</span>
                    <a href="mailto:mustakimpathan748@gmail.com" className="text-xs font-semibold text-text hover:text-indigo-primary block truncate">
                      mustakimpathan748@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <div className="min-w-0">
                    <span className="block text-[9px] uppercase font-bold text-text-muted tracking-wider">Phone</span>
                    <span className="text-xs font-semibold text-text block">7774930920</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Resume button */}
            <a
              href="/resume.pdf"
              download
              className="mt-6 w-full py-2.5 bg-bg-sec border border-border/80 hover:border-indigo-primary rounded-xl text-xs font-bold text-text flex items-center justify-center gap-2 shadow-sm transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Download className="w-3.5 h-3.5 text-indigo-primary" />
              Download Resume
            </a>
          </div>

        </div>

        {/* Bottom Row Grid (2 Columns: Education on left, What I Do on right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-6">
          
          {/* Bottom Left Card: Education Timeline (6/12 width) */}
          <div className="lg:col-span-6 bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-lg hover:border-indigo-primary/30 transition-colors flex flex-col justify-between text-left">
            <div>
              <h3 className="text-lg font-bold font-display text-text flex items-center gap-2 mb-6 border-b border-border/50 pb-4">
                <GraduationCap className="w-5 h-5 text-indigo-primary" />
                Education
              </h3>
              
              {/* Timeline list */}
              <div className="relative border-l border-border pl-5 space-y-6 ml-2 text-left">
                {educationData.map((edu, idx) => (
                  <div key={idx} className="relative">
                    {/* Circle timeline dot */}
                    <span className="absolute -left-[27px] top-1 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-card border border-border text-indigo-primary">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-primary" />
                    </span>
                    
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold text-indigo-primary uppercase bg-indigo-500/10 px-2 py-0.5 rounded">
                          {edu.duration}
                        </span>
                        <span className="text-[10px] font-semibold text-text-muted">
                          {edu.status}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-text">
                        {edu.degree}
                      </h4>
                      <div className="text-[11px] font-semibold text-text-muted">
                        {edu.institution} {edu.grade ? `• ${edu.grade}` : ""}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Right Card: What I Do Grid (6/12 width) */}
          <div className="lg:col-span-6 bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-lg hover:border-indigo-primary/30 transition-colors flex flex-col justify-between text-left">
            <div>
              <h3 className="text-lg font-bold font-display text-text flex items-center gap-2 mb-6 border-b border-border/50 pb-4">
                <Code className="w-5 h-5 text-indigo-primary" />
                What I Do
              </h3>

              {/* Grid 2x2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whatIDo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="p-4 bg-bg-sec/55 border border-border/75 rounded-2xl flex flex-col justify-between hover:border-indigo-primary/40 transition-colors group cursor-default"
                    >
                      <div>
                        <div className={`p-2 rounded-xl w-fit flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform ${item.color}`}>
                          <Icon className="w-4.5 h-4.5" />
                        </div>
                        <h4 className="text-xs sm:text-sm font-bold text-text">
                          {item.title}
                        </h4>
                        <p className="text-[11px] text-text-muted mt-1 leading-normal">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
