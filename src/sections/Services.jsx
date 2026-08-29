import { motion } from "framer-motion";
import { Globe, Smartphone, Layout, Server, Link2, Eye } from "lucide-react";

export const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Build highly responsive and scalable modern web applications utilizing modern component frameworks.",
      icon: Globe,
      color: "text-indigo-primary bg-indigo-500/10",
    },
    {
      title: "Mobile App Development",
      description: "Build cross-platform Android and iOS applications using React Native and lightweight Expo wrappers.",
      icon: Smartphone,
      color: "text-violet-secondary bg-violet-500/10",
    },
    {
      title: "Frontend Engineering",
      description: "Create clean, highly optimized, and responsive user interfaces with focus on usability and accessibility.",
      icon: Layout,
      color: "text-sky-500 bg-sky-500/10",
    },
    {
      title: "Backend Development",
      description: "Build structured REST APIs, token-based authentication modules, and scalable background services.",
      icon: Server,
      color: "text-green-500 bg-green-500/10",
    },
    {
      title: "API Integration",
      description: "Connect application layers with reliable third-party service endpoints and custom database feeds.",
      icon: Link2,
      color: "text-amber-500 bg-amber-500/10",
    },
    {
      title: "UI Development",
      description: "Convert Figma mockup grids and layout designs directly into clean, responsive, and functional codes.",
      icon: Eye,
      color: "text-rose-500 bg-rose-500/10",
    },
  ];

  return (
    <section id="services" className="py-20 bg-bg-base font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text font-display"
          >
            Services Offered
          </motion.h2>
          <p className="text-text-muted mt-2 text-sm sm:text-base">
            Technical solutions and professional consulting services I provide to companies and clients.
          </p>
          <div className="w-16 h-1 bg-indigo-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 bg-card/65 backdrop-blur-md border border-border/80 rounded-2xl text-left shadow-sm hover:shadow-2xl hover:shadow-indigo-primary/5 hover:border-indigo-primary/45 hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300 group"
              >
                <div className={`p-3 rounded-xl inline-flex mb-5 transition-transform duration-300 group-hover:scale-110 ${service.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                
                <h3 className="text-lg font-bold font-display text-text mb-3">
                  {service.title}
                </h3>
                
                <p className="text-text-muted text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
