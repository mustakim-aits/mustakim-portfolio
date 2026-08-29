import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, FileText, Terminal as TerminalIcon, Code, ArrowRight } from "lucide-react";

export const Navbar = ({ currentTheme, toggleTheme, onOpenConsole }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "Home", href: "#home", id: "home" },
    { label: "About", href: "#about", id: "about" },
    { label: "Services", href: "#services", id: "services" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Education", href: "#education", id: "education" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
      setScrolled(window.scrollY > 20);

      // Section scroll tracking
      const scrollPosition = window.scrollY + 200;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.querySelector(navItems[i].href);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080d16]/90 backdrop-blur-md border-b border-white/10 shadow-xl"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      {/* Scroll Progress Line */}
      <div
        className="h-[3px] bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 transition-all duration-75 origin-left"
        style={{ width: `${scrollProgress}%` }}
      />
      <div className="max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <a
              href="#home"
              className="flex items-center gap-4 text-text hover:opacity-90 transition-all"
            >
              <div className="text-5xl leading-none tracking-[-0.12em] bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent font-black font-display select-none">
                MP
              </div>
              <span className="font-extrabold text-lg tracking-tight text-white font-display select-none">
                Mustakim Pathan
              </span>
            </a>
          </motion.div>

          {/* Center Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Action Bar */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* GitHub Button */}
            <a
              href="https://github.com/MustakimMunna"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all duration-300 shadow-sm"
              aria-label="GitHub Profile"
            >
              <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>

            {/* LinkedIn Button */}
            <a
              href="https://linkedin.com/in/mustakimpathan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all duration-300 shadow-sm"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            {/* Code Console Button </> */}
            <button
              onClick={onOpenConsole}
              className="p-2.5 rounded-xl bg-indigo-950/60 border border-indigo-800/60 text-indigo-400 hover:text-indigo-300 hover:border-indigo-600 transition-all duration-300 cursor-pointer flex items-center justify-center shadow-sm"
              title="Open Command Terminal"
              aria-label="Open Command Terminal"
            >
              <Code className="w-4.5 h-4.5" />
            </button>

            {/* Theme Toggle Sun Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-amber-400 hover:text-amber-300 hover:border-slate-700 transition-all duration-300 cursor-pointer shadow-sm"
              aria-label="Toggle Theme"
            >
              {currentTheme === "dark" ? (
                <Sun className="w-4.5 h-4.5 text-amber-400" />
              ) : (
                <Moon className="w-4.5 h-4.5 text-slate-300" />
              )}
            </button>

            {/* Gradient Contact Me CTA */}
            <a
              href="#contact"
              className="px-5 py-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-indigo-600/30 flex items-center gap-1.5 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Contact Me
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Right Tools */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={onOpenConsole}
              className="p-2 rounded-xl bg-indigo-950/60 border border-indigo-800/60 text-indigo-400"
              aria-label="Open Command Terminal"
            >
              <Code className="w-4 h-4" />
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-amber-400"
              aria-label="Toggle Theme"
            >
              <Sun className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#0a0f1d] border-b border-slate-800 shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 rounded-lg text-base font-semibold text-slate-300 hover:text-white hover:bg-slate-900 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div className="flex space-x-3">
                  <a
                    href="https://github.com/MustakimMunna"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-900 text-slate-300 hover:text-white"
                    aria-label="GitHub Profile"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/in/mustakimpathan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-900 text-slate-300 hover:text-white"
                    aria-label="LinkedIn Profile"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                </div>

                <a
                  href="#contact"
                  className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl text-xs font-bold shadow-md"
                >
                  Contact Me →
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
