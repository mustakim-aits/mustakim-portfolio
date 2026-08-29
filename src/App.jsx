import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import { useTheme } from "./hooks/useTheme";
import { Navbar } from "./components/Navbar";
import { Modal } from "./components/Modal";
import { CommandConsole } from "./components/CommandConsole";
import { ParallaxSection } from "./components/SectionParallax";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Services } from "./sections/Services";
import { Skills } from "./sections/Skills";
import { Education } from "./sections/Education";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import { GitHubSection } from "./sections/GitHubSection";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";

function App() {
  const { theme, toggleTheme } = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);
  const [isConsoleOpen, setIsConsoleOpen] = useState(false);

  // Initialize Lenis Smooth Scroll Engine
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Global mouse coordinates listener for hardware accelerated spotlight trail
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // All Sections in Parallax Stack Order
  const sections = [
    { id: "home", component: <Hero /> },
    { id: "about", component: <About /> },
    { id: "services", component: <Services /> },
    { id: "skills", component: <Skills /> },
    { id: "education", component: <Education /> },
    { id: "experience", component: <Experience /> },
    { id: "projects", component: <Projects onSelectProject={setSelectedProject} /> },
    { id: "github", component: <GitHubSection /> },
    { id: "contact", component: <Contact /> },
  ];

  return (
    <div className="min-h-screen bg-bg-base text-text selection:bg-indigo-primary/25 relative">
      {/* Sticky Top Navigation */}
      <Navbar
        currentTheme={theme}
        toggleTheme={toggleTheme}
        onOpenConsole={() => setIsConsoleOpen(true)}
      />

      {/* Main Section Parallax Stacking Cards Container */}
      <main className="relative">
        {sections.map((sec, idx) => (
          <ParallaxSection
            key={sec.id}
            index={idx}
            isLast={idx === sections.length - 1}
          >
            {sec.component}
          </ParallaxSection>
        ))}
      </main>

      {/* Footer Branding */}
      <Footer />

      {/* Animated Project Details Overlay Modal */}
      <AnimatePresence>
        {selectedProject && (
          <Modal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

      {/* Animated Interactive Terminal Shell */}
      <AnimatePresence>
        {isConsoleOpen && (
          <CommandConsole
            isOpen={isConsoleOpen}
            onClose={() => setIsConsoleOpen(false)}
            toggleTheme={toggleTheme}
            currentTheme={theme}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
