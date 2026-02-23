import { motion } from "framer-motion";
import { ArrowUpRight, Database, Layers, ShieldCheck } from "lucide-react";

const container = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const wordContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

const wordItem = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

const metrics = [
  { icon: ShieldCheck, label: "Current Focus", value: "Government IT Solutions" },
  { icon: Database, label: "Platform Strength", value: "Power BI · SSIS · SSRS" },
  { icon: Layers, label: "Delivery Model", value: "Agile · Multi-Client" },
];

const headlineWords = [
  "Modern",
  "Software",
  "Solutions",
  "for",
  "Public-Sector",
  "Delivery",
];

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="hero section-shell"
      variants={container}
      initial="hidden"
      animate="visible"
      aria-labelledby="hero-title"
    >
      <div className="hero-bg" aria-hidden="true">
        <span className="hero-blob hero-blob-a" />
        <span className="hero-blob hero-blob-b" />
        <span className="hero-blob hero-blob-c" />
      </div>
      <div className="shell hero-grid">
        <motion.article className="hero-main card-surface" variants={item}>
          <motion.p className="eyebrow" variants={item}>
            IT Analyst · Software Solutions
          </motion.p>

          <motion.h1
            id="hero-title"
            className="hero-title"
            variants={wordContainer}
            initial="hidden"
            animate="visible"
          >
            {headlineWords.map((word) => (
              <motion.span className="headline-word" key={word} variants={wordItem}>
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p className="hero-subtitle" variants={item}>
            Building resilient digital tools, data products, and automation systems with a strong
            focus on clarity, reliability, and service outcomes.
          </motion.p>

          <motion.div className="hero-actions" variants={item}>
            <motion.a
              className="btn btn-primary"
              href="#projects"
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              View Work <ArrowUpRight size={16} />
            </motion.a>
            <motion.a
              className="btn btn-secondary"
              href="#contact"
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              Contact
            </motion.a>
          </motion.div>
        </motion.article>

        <motion.aside className="hero-panel card-surface" variants={item} aria-label="Professional highlights">
          <h2 className="panel-title">Highlights</h2>
          <ul className="metric-list" role="list">
            {metrics.map(({ icon: Icon, label, value }, index) => (
              <motion.li
                className="metric-card"
                key={label}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.25 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <p className="metric-label">
                  <Icon size={14} />
                  {label}
                </p>
                <p className="metric-value">{value}</p>
              </motion.li>
            ))}
          </ul>
        </motion.aside>
      </div>
    </motion.section>
  );
}
