import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { heroHighlights } from "../content/portfolioContent";
import { cardVariants, easing, sectionVariants } from "../lib/animations";

const wordContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

const wordItem = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: easing } },
};

const headlineWords = [
  "Production",
  "Software,",
  "Shipped",
  "and",
  "Built",
  "to",
  "Last",
];

const buildSignals = [
  "Java and backend-focused project work",
  "Role-based product workflows",
  "Collaboration-driven delivery",
];

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="hero section-shell"
      variants={sectionVariants}
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
        <motion.article className="hero-main card-surface" variants={cardVariants}>
          <motion.p className="eyebrow" variants={cardVariants}>
            Software Developer · Java, React, and Product-Focused Systems
          </motion.p>

          <motion.p className="hero-status" variants={cardVariants}>
            Open to software roles · Full-stack, backend, and interface focused
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

          <motion.p className="hero-subtitle" variants={cardVariants}>
            I build maintainable applications and production systems with an emphasis on problem
            solving, clean implementation, and software that helps real users do meaningful work.
          </motion.p>

          <motion.div className="hero-actions" variants={cardVariants}>
            <motion.a
              className="btn btn-primary"
              href="#featured-project"
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              View BrightPath <ArrowUpRight size={16} />
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

        <motion.aside className="hero-panel card-surface" variants={cardVariants} aria-label="Professional highlights">
          <div className="hero-panel-header">
            <p className="panel-kicker">How I build</p>
            <h2 className="panel-title">Software that balances backend thinking, usable interfaces, and practical delivery</h2>
          </div>

          <div className="hero-signal card-surface" aria-hidden="true">
            <div className="hero-signal-window">
              <span />
              <span />
              <span />
            </div>
            <div className="hero-signal-body">
              {buildSignals.map((signal) => (
                <div className="hero-signal-row" key={signal}>
                  <span className="hero-signal-dot" />
                  <span>{signal}</span>
                </div>
              ))}
            </div>
          </div>

          <ul className="metric-list" role="list">
            {heroHighlights.map(({ icon: Icon, label, value }, index) => (
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
