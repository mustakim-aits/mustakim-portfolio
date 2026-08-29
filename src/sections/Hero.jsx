import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Download, Github, Linkedin, Mail, Rocket, Smartphone, UserRound, Zap } from "lucide-react";
import profileImg from "../assets/profile.jpg";
import "./Hero.css";

const fadeUp = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } };
const featureCards = [
  { title: "Clean Code", description: "Writing maintainable and scalable code following best practices.", icon: Code2, tone: "purple" }, { title: "Performance", description: "Building high performance apps with optimized architecture.", icon: Rocket, tone: "blue" },
  { title: "Responsive", description: "Creating seamless experiences across all devices.", icon: Smartphone, tone: "cyan" }, { title: "Problem Solver", description: "Turning complex problems into simple and elegant solutions.", icon: Zap, tone: "amber" }, { title: "User Focused", description: "Designing with user needs in mind to deliver real value.", icon: UserRound, tone: "rose" },
];
const socials = [
  { label: "GitHub", href: "https://github.com/MustakimMunna", icon: Github }, { label: "LinkedIn", href: "https://linkedin.com/in/mustakimpathan", icon: Linkedin }, { label: "Email", href: "mailto:mustakimpathan748@gmail.com", icon: Mail },
];
export const Hero = () => <section id="home" className="portfolio-home">
  <div className="portfolio-home__grid" aria-hidden="true" /><div className="portfolio-home__glow portfolio-home__glow--left" aria-hidden="true" /><div className="portfolio-home__glow portfolio-home__glow--right" aria-hidden="true" />
  <div className="portfolio-home__inner"><div className="hero-layout">
    <motion.div className="hero-copy" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: .1, delayChildren: .08 } } }}>
      <motion.div variants={fadeUp} transition={{ duration: .5 }} className="availability"><span className="availability__dot" /> Available for Work</motion.div>
      <motion.h1 variants={fadeUp} transition={{ duration: .55 }} className="hero-title">Hi, I&apos;m <span>Mustakim <em>Pathan</em></span></motion.h1>
      <motion.p variants={fadeUp} transition={{ duration: .55 }} className="hero-role">React Native Developer</motion.p>
      <motion.p variants={fadeUp} transition={{ duration: .55 }} className="hero-description">I build scalable, efficient and user-friendly web &amp; mobile applications using React Native, React.js and modern technologies. Passionate about clean code, performance and creating impactful digital experiences.</motion.p>
      <motion.div variants={fadeUp} transition={{ duration: .55 }} className="hero-actions"><a href="#projects" className="button button--primary">View My Work <ArrowUpRight size={18} /></a><a href="/resume.pdf" download className="button button--secondary"><Download size={17} /> Download Resume</a></motion.div>
    </motion.div>
    <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .75, delay: .15 }} className="hero-portrait"><div className="hero-portrait__glow" aria-hidden="true" /><img src={profileImg} alt="Mustakim Pathan" className="hero-portrait__image" /></motion.div>
  </div></div>
</section>;
