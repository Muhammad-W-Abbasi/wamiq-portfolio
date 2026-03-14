import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { featuredProject } from "../content/portfolioContent";
import { cardVariants, compactItemVariants, sectionVariants } from "../lib/animations";

export default function FeaturedProject() {
  return (
    <motion.section
      id="featured-project"
      className="section-shell"
      aria-labelledby="featured-project-title"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="shell">
        <motion.header className="section-header" variants={cardVariants}>
          <p className="eyebrow">{featuredProject.eyebrow}</p>
          <h2 id="featured-project-title" className="section-title">
            {featuredProject.title}
          </h2>
          <p className="section-copy">{featuredProject.subtitle}</p>
        </motion.header>

        <motion.article className="featured-project featured-banner card-surface" variants={cardVariants}>
          <div className="featured-banner-top">
            <div className="featured-lead">
              <p className="featured-kicker">Portfolio-Grade Full-Stack Application</p>
              <h3>Designed to showcase clean architecture, thoughtful product scope, and end-to-end delivery</h3>
              <p>{featuredProject.summary}</p>

              <ul className="tag-list featured-tag-list" role="list" aria-label="BrightPath technology stack">
                {featuredProject.stack.map((technology) => (
                  <li className="tag featured-tag" key={technology}>
                    {technology}
                  </li>
                ))}
              </ul>

              <div className="project-links featured-links">
                <motion.a href={featuredProject.demoUrl} target="_blank" rel="noreferrer" whileHover={{ x: 2 }}>
                  <ExternalLink size={15} /> Live Demo
                </motion.a>
                <motion.a href={featuredProject.codeUrl} target="_blank" rel="noreferrer" whileHover={{ x: 2 }}>
                  <Github size={15} /> Source
                </motion.a>
              </div>
            </div>

            <div className="featured-side">
              <div className="featured-preview" aria-hidden="true">
                <div className="featured-preview-topbar">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="featured-preview-shell">
                  <div className="featured-preview-header">
                    <div className="featured-preview-badge">BRIGHTPATH LMS</div>
                    <div className="featured-preview-pill">Instructor / Student</div>
                  </div>
                  <div className="featured-preview-grid">
                    <div className="featured-preview-card featured-preview-card--wide">
                      <strong>Course tasks</strong>
                      <small>Live reminders with per-student completion</small>
                    </div>
                    <div className="featured-preview-card">
                      <strong>JWT auth</strong>
                    </div>
                    <div className="featured-preview-card">
                      <strong>Flyway</strong>
                    </div>
                    <div className="featured-preview-card featured-preview-card--muted">
                      <small>Deploy-safe migrations and local dev fixes</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="featured-stats" role="list" aria-label="BrightPath project summary">
                {featuredProject.stats.map(({ value, label }) => (
                  <div className="featured-stat" role="listitem" key={label}>
                    <span>{value}</span>
                    <small>{label}</small>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="featured-grid">
            {featuredProject.highlights.map(({ icon: Icon, title, text }) => (
              <motion.section className="featured-item" key={title} variants={compactItemVariants} whileHover={{ y: -4 }}>
                <h3>
                  <Icon size={17} />
                  {title}
                </h3>
                <p>{text}</p>
              </motion.section>
            ))}
          </div>
        </motion.article>
      </div>
    </motion.section>
  );
}
