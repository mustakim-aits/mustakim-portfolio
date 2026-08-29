import { motion } from "framer-motion";
import { BriefcaseBusiness, HeartHandshake, Layers3, Timer } from "lucide-react";
import "./Hero.css";
const stats = [{ value: "10+", label: "Projects Completed", icon: Layers3, tone: "blue" }, { value: "2+", label: "Years Experience", icon: Timer, tone: "purple" }, { value: "5+", label: "Happy Clients", icon: HeartHandshake, tone: "pink" }, { value: "100%", label: "Dedication", icon: BriefcaseBusiness, tone: "green" }];
export const HeroStats = () => <section className="home-stats"><motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .4 }} transition={{ duration: .55 }} className="home-stats__inner">{stats.map(({ value, label, icon: Icon, tone }) => <div className="stat-item" key={label}><Icon className={`stat-item__icon stat-item__icon--${tone}`} size={19} /><div><strong>{value}</strong><span>{label}</span></div></div>)}</motion.div></section>;
