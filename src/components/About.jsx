import { motion } from "framer-motion";
import { aboutBio, aboutCapabilities } from "../content/portfolioContent";
import { cardVariants, sectionVariants } from "../lib/animations";

export default function About() {
  return (
    <motion.section
      id="about"
      className="section-shell"
      aria-labelledby="about-title"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="shell">
        <motion.header className="section-header" variants={cardVariants}>
          <p className="eyebrow">About</p>
          <h2 id="about-title" className="section-title">
            Software engineering grounded in product thinking and real user needs
          </h2>
          <p className="section-copy">{aboutBio}</p>
        </motion.header>

        <motion.div className="feature-grid" variants={sectionVariants}>
          {aboutCapabilities.map(({ icon: Icon, title, text }) => (
            <motion.article
              className="feature-card card-surface"
              key={title}
              variants={cardVariants}
              whileHover={{ y: -4, scale: 1.01 }}
            >
              <div className="feature-icon">
                <Icon size={20} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
