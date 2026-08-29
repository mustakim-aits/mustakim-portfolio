import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Terminal as TerminalIcon, X, CornerDownLeft } from "lucide-react";
import { projectsData } from "../data/projects";
import { skillCategories } from "../data/skills";

export const CommandConsole = ({ isOpen, onClose, toggleTheme, currentTheme }) => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { text: "Mustakim Pathan Command Terminal [Version 1.0.0]", type: "system" },
    { text: "Type '/help' to discover available portfolio operations.", type: "system" },
    { text: "", type: "empty" }
  ]);
  
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  // Auto-focus input when open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Auto-scroll to bottom of terminal when history changes
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    // Echo input
    const newHistory = [...history, { text: `guest@mustakim.dev:~$ ${input}`, type: "input" }];

    switch (cmd) {
      case "/help":
        newHistory.push(
          { text: "Available commands:", type: "output" },
          { text: "  /about     - Print a typewriter professional biography summary.", type: "output" },
          { text: "  /projects  - List active portfolio projects with source quicklinks.", type: "output" },
          { text: "  /skills    - Display technical skill matrices as text.", type: "output" },
          { text: "  /theme     - Toggle light and dark modes.", type: "output" },
          { text: "  /clear     - Clear terminal history logs.", type: "output" },
          { text: "  /exit      - Close the terminal window.", type: "output" }
        );
        break;
      
      case "/about":
        newHistory.push(
          { text: "BIOGRAPHY:", type: "info" },
          { text: "Mustakim Munna Pathan is a Computer Science Graduate and MCA student based in India. Specializing in frontend engineering (React, React Native) and full-stack API systems (Node.js, Express, MongoDB, AWS). Focuses on building scalable digital products and cross-platform applications.", type: "output" }
        );
        break;

      case "/projects":
        newHistory.push({ text: "PORTFOLIO PROJECTS:", type: "info" });
        projectsData.forEach((p) => {
          newHistory.push({
            text: `• ${p.name} (${p.type.toUpperCase()}) - ${p.shortDescription}\n  Repo: ${p.githubUrl || "Private"}`,
            type: "output"
          });
        });
        break;

      case "/skills":
        newHistory.push({ text: "TECHNICAL SKILL MATRIX:", type: "info" });
        skillCategories.forEach((cat) => {
          const names = cat.skills.map((s) => s.name).join(", ");
          newHistory.push({
            text: `[${cat.category}]: ${names}`,
            type: "output"
          });
        });
        break;

      case "/theme":
        toggleTheme();
        newHistory.push({ text: `Theme successfully toggled to ${currentTheme === "dark" ? "light" : "dark"} mode.`, type: "system" });
        break;

      case "/clear":
        setHistory([]);
        setInput("");
        return;

      case "/exit":
        onClose();
        setInput("");
        return;

      default:
        newHistory.push({
          text: `bash: command not found: '${input}'. Type '/help' to see valid operations.`,
          type: "error"
        });
    }

    setHistory(newHistory);
    setInput("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div onClick={onClose} className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" />

      {/* Terminal Window Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-2xl bg-[#090d16] border border-border rounded-xl shadow-2xl z-10 overflow-hidden font-mono flex flex-col h-[450px] text-left text-slate-300"
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#111827] border-b border-border select-none flex-shrink-0">
          <div className="flex items-center space-x-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <div className="text-xs text-text-muted flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-indigo-primary" />
            guest@mustakim.dev:~ (sh)
          </div>
          <button onClick={onClose} className="text-text-muted hover:text-text cursor-pointer">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Console Logs Area */}
        <div
          ref={containerRef}
          className="flex-1 p-4 overflow-y-auto space-y-2 text-xs md:text-sm bg-[#070a12]/95"
        >
          {history.map((line, idx) => (
            <div
              key={idx}
              className={`leading-relaxed whitespace-pre-wrap ${
                line.type === "input"
                  ? "text-white font-semibold"
                  : line.type === "system"
                  ? "text-indigo-400 font-medium"
                  : line.type === "info"
                  ? "text-violet-secondary font-bold"
                  : line.type === "error"
                  ? "text-rose-400"
                  : "text-slate-400"
              }`}
            >
              {line.text}
            </div>
          ))}
        </div>

        {/* Command Input Prompt Form */}
        <form
          onSubmit={handleCommandSubmit}
          className="flex items-center gap-2 px-4 py-3 bg-[#111827] border-t border-border flex-shrink-0"
        >
          <span className="text-emerald-400 font-bold text-xs md:text-sm select-none">
            guest@mustakim.dev:~$
          </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a command (e.g. /help, /about)..."
            className="flex-1 bg-transparent border-none text-white outline-none focus:ring-0 text-xs md:text-sm p-0 placeholder-slate-600 font-mono"
            aria-label="Terminal input"
          />
          <button type="submit" className="text-indigo-primary hover:text-white transition-colors cursor-pointer">
            <CornerDownLeft className="w-4 h-4" />
          </button>
        </form>
      </motion.div>
    </div>
  );
};
