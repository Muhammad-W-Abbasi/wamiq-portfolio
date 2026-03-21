import { motion } from "framer-motion";
import { skillGroups, skillHighlights } from "../content/portfolioContent";
import { cardVariants, sectionVariants } from "../lib/animations";

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="section-shell"
      aria-labelledby="skills-title"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="shell">
        <motion.header className="section-header" variants={cardVariants}>
          <p className="eyebrow">Skills</p>
          <h2 id="skills-title" className="section-title">
            Software strengths aligned with product-focused engineering work
          </h2>
          <p className="section-copy">
            A blend of production experience and portfolio technologies that best reflects how I build, solve problems, and ship software.
          </p>
        </motion.header>

        <motion.article className="skills-spotlight card-surface" variants={cardVariants}>
          <div className="skills-spotlight-copy">
            <p className="panel-kicker">Developer Fit</p>
            <h3>Built around the software engineering strengths that matter most in product-focused roles</h3>
            <p>
              The emphasis here is on problem solving, object-oriented development, backend foundations,
              user-facing product work, and production delivery rather than automation alone.
            </p>
          </div>

          <div className="skills-spotlight-grid" role="list" aria-label="Software developer strengths">
            {skillHighlights.map(({ label, value }) => (
              <div className="skills-pill" role="listitem" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </motion.article>

        <motion.div className="skills-grid" variants={sectionVariants}>
          {skillGroups.map(({ title, summary, items }) => (
            <motion.article
              className="skill-card card-surface"
              key={title}
              variants={cardVariants}
              whileHover={{ y: -4, scale: 1.01 }}
            >
              <p className="project-kicker">Skill Area</p>
              <h3>{title}</h3>
              <p className="skill-card-copy">{summary}</p>
              <ul className="tag-list" role="list" aria-label={title}>
                {items.map((item) => (
                  <li className="tag" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
