import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Calendar, Zap, ShieldCheck, Users, Send, CheckCircle2, AlertCircle, ArrowUpRight, Rocket, Check } from "lucide-react";

export const Contact = () => {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");

  const pointers = [
    { title: "Quick Response", desc: "I usually reply within 24 hours", icon: Zap, color: "text-purple-400" },
    { title: "Quality Work", desc: "High quality solutions that scale", icon: ShieldCheck, color: "text-blue-400" },
    { title: "Collaborative", desc: "I believe in clear communication", icon: Users, color: "text-emerald-400" },
  ];

  const infoList = [
    { label: "Email", val: "mustakimpathan748@gmail.com", desc: "Drop me an email anytime", icon: Mail },
    { label: "Phone", val: "7774930920", desc: "Mon - Sat (9AM - 8PM IST)", icon: Phone },
    { label: "Location", val: "Ahmednagar, India", desc: "Available for remote work", icon: MapPin },
    { label: "Availability", val: "Open for opportunities", desc: "Full-time / Contract", icon: Calendar },
  ];

  const validateForm = () => {
    const tempErrors = {};
    let isValid = true;

    if (!fields.name.trim()) {
      tempErrors.name = "Name is required.";
      isValid = false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!fields.email.trim()) {
      tempErrors.email = "Email is required.";
      isValid = false;
    } else if (!emailRegex.test(fields.email)) {
      tempErrors.email = "Enter a valid email.";
      isValid = false;
    }
    if (!fields.subject.trim()) {
      tempErrors.subject = "Subject is required.";
      isValid = false;
    }
    if (!fields.message.trim()) {
      tempErrors.message = "Message is required.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setFields({ name: "", email: "", subject: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-bg-sec/30 border-y border-border font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column (5/12 width) */}
          <div className="lg:col-span-5 text-left flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-primary flex items-center gap-1.5 select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-primary" />
                Get in Touch
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text font-display leading-tight">
                Let's Build Something <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-[#00A3FF] via-[#70C8FF] to-white bg-clip-text text-transparent">Amazing Together</span>
              </h2>
              <p className="text-text-muted text-xs sm:text-sm leading-relaxed max-w-md">
                Have a project in mind or want to collaborate? I'm always open to discussing new opportunities and business ideas.
              </p>
            </div>

            {/* Quick Pointers */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {pointers.map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.title} className="p-3.5 bg-card/40 border border-border/80 rounded-2xl">
                    <Icon className={`w-5 h-5 mb-2 ${p.color}`} />
                    <h4 className="text-[11px] font-bold text-text">{p.title}</h4>
                    <p className="text-[10px] text-text-muted mt-0.5 leading-normal">{p.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Contact info grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {infoList.map((info) => {
                const Icon = info.icon;
                return (
                  <div key={info.label} className="p-4 bg-card border border-border/80 rounded-2xl flex items-center gap-3.5">
                    <div className="p-2.5 bg-bg-sec border border-border text-indigo-primary rounded-xl flex-shrink-0">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[9px] uppercase font-bold text-text-muted tracking-wider">{info.label}</span>
                      <span className="text-xs font-semibold text-text truncate block">{info.val}</span>
                      <span className="text-[9px] text-text-muted block mt-0.5">{info.desc}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Let's Connect On channels */}
            <div className="space-y-3">
              <div className="text-[10px] font-bold text-text-muted uppercase tracking-wider">
                Let's Connect On
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {/* Github */}
                <a
                  href="https://github.com/MustakimMunna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card border border-border/80 hover:border-indigo-primary rounded-2xl text-left block transition-colors group"
                >
                  <span className="text-[9px] uppercase font-bold text-text-muted group-hover:text-indigo-primary block transition-colors select-none">GitHub</span>
                  <span className="text-[11px] font-semibold text-text truncate block mt-0.5">@MustakimPathan</span>
                </a>
                
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/mustakimpathan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card border border-border/80 hover:border-indigo-primary rounded-2xl text-left block transition-colors group"
                >
                  <span className="text-[9px] uppercase font-bold text-text-muted group-hover:text-indigo-primary block transition-colors select-none">LinkedIn</span>
                  <span className="text-[11px] font-semibold text-text truncate block mt-0.5">/mustakim-pathan</span>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/917774930920"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card border border-border/80 hover:border-indigo-primary rounded-2xl text-left block transition-colors group"
                >
                  <span className="text-[9px] uppercase font-bold text-text-muted group-hover:text-indigo-primary block transition-colors select-none">WhatsApp</span>
                  <span className="text-[11px] font-semibold text-text truncate block mt-0.5">Chat on WA</span>
                </a>

                {/* Email */}
                <a
                  href="mailto:mustakimpathan748@gmail.com"
                  className="p-3 bg-card border border-border/80 hover:border-indigo-primary rounded-2xl text-left block transition-colors group"
                >
                  <span className="text-[9px] uppercase font-bold text-text-muted group-hover:text-indigo-primary block transition-colors select-none">Email</span>
                  <span className="text-[11px] font-semibold text-text truncate block mt-0.5">Send an Email</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column (7/12 width, includes Form and Pitch Card) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            
            {/* Form Card */}
            <div className="bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-xl text-left">
              <h3 className="text-base font-bold font-display text-text flex items-center gap-2 mb-6 border-b border-border/60 pb-3.5 select-none">
                Send Me a Message
                <span className="text-xs text-text-muted font-normal">(I usually reply quickly)</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="input-name" className="block text-[10px] font-bold text-text mb-1 uppercase tracking-wider select-none">Your Name</label>
                    <input
                      id="input-name"
                      type="text"
                      name="name"
                      value={fields.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      disabled={isSubmitting}
                      className={`w-full px-4 py-2.5 bg-bg-sec border rounded-xl text-text placeholder-text-muted/50 text-xs transition-all focus:outline-none focus:border-indigo-primary ${
                        errors.name ? "border-rose-500/50 focus:border-rose-500" : "border-border/80"
                      }`}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="input-email" className="block text-[10px] font-bold text-text mb-1 uppercase tracking-wider select-none">Your Email</label>
                    <input
                      id="input-email"
                      type="email"
                      name="email"
                      value={fields.email}
                      onChange={handleInputChange}
                      placeholder="johndoe@example.com"
                      disabled={isSubmitting}
                      className={`w-full px-4 py-2.5 bg-bg-sec border rounded-xl text-text placeholder-text-muted/50 text-xs transition-all focus:outline-none focus:border-indigo-primary ${
                        errors.email ? "border-rose-500/50 focus:border-rose-500" : "border-border/80"
                      }`}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="input-subject" className="block text-[10px] font-bold text-text mb-1 uppercase tracking-wider select-none">Subject</label>
                  <input
                    id="input-subject"
                    type="text"
                    name="subject"
                    value={fields.subject}
                    onChange={handleInputChange}
                    placeholder="Freelance Project Opportunity"
                    disabled={isSubmitting}
                    className={`w-full px-4 py-2.5 bg-bg-sec border rounded-xl text-text placeholder-text-muted/50 text-xs transition-all focus:outline-none focus:border-indigo-primary ${
                      errors.subject ? "border-rose-500/50 focus:border-rose-500" : "border-border/80"
                    }`}
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="input-message" className="block text-[10px] font-bold text-text mb-1 uppercase tracking-wider select-none">Your Message</label>
                  <textarea
                    id="input-message"
                    name="message"
                    rows={4}
                    value={fields.message}
                    onChange={handleInputChange}
                    placeholder="Provide details about your project or job description..."
                    disabled={isSubmitting}
                    className={`w-full px-4 py-2.5 bg-bg-sec border rounded-xl text-text placeholder-text-muted/50 text-xs transition-all focus:outline-none focus:border-indigo-primary resize-none ${
                      errors.message ? "border-rose-500/50 focus:border-rose-500" : "border-border/80"
                    }`}
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 bg-gradient-to-r from-sky-500 via-indigo-primary to-violet-secondary hover:opacity-95 text-white font-semibold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-indigo-primary/10 transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-75 disabled:hover:translate-y-0 cursor-pointer text-xs"
                >
                  {isSubmitting ? (
                    <span className="w-4 h-4 border-2 border-white/35 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>

              {/* Status Alert Panels */}
              <AnimatePresence>
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="mt-4 p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 rounded-xl flex items-start gap-2 text-xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-emerald-700">Message Dispatched!</h4>
                      <p className="text-[10px] text-emerald-600/90 leading-tight mt-0.5">
                        Thank you. I have received your request and will get back to you shortly.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bottom Rocket Card */}
            <div className="bg-card border border-border rounded-3xl p-5 shadow-lg flex items-center justify-between text-left hover:border-indigo-primary/30 transition-colors">
              <div className="flex items-start gap-5">
                <div className="p-3 bg-indigo-primary/10 text-indigo-primary rounded-2xl flex-shrink-0">
                  <Rocket className="w-6 h-6 animate-pulse" />
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-xs sm:text-sm font-bold text-text">
                    Looking for a Developer?
                  </h4>
                  <p className="text-[11px] text-text-muted leading-relaxed max-w-sm">
                    I help businesses and startups turn ideas into powerful web and mobile applications.
                  </p>
                  
                  {/* Bullets */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 pt-1 text-[10px] text-text-muted font-semibold">
                    <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-indigo-primary" /> React Native App Dev</span>
                    <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-indigo-primary" /> Web App Development</span>
                    <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-indigo-primary" /> API Integration & Backend</span>
                    <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-indigo-primary" /> Cloud Deployment (AWS)</span>
                  </div>
                </div>
              </div>

              {/* View work button */}
              <a
                href="#projects"
                className="px-4 py-2 border border-border/80 hover:border-indigo-primary rounded-xl text-xs font-bold text-text-muted hover:text-text transition-colors flex items-center gap-1 flex-shrink-0 shadow-sm ml-4"
              >
                View My Work
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
