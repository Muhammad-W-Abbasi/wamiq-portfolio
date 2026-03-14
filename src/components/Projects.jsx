import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../content/portfolioContent";
import { cardVariants, sectionVariants } from "../lib/animations";

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="section-shell"
      aria-labelledby="projects-title"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="shell">
        <motion.header className="section-header" variants={cardVariants}>
          <p className="eyebrow">Projects</p>
          <h2 id="projects-title" className="section-title">
            Additional projects and software work
          </h2>
        </motion.header>

        <motion.div className="projects-grid" variants={sectionVariants}>
          {projects.map((project, index) => (
            <motion.article
              className={`project-card card-surface${project.confidential ? " project-card--confidential" : ""}${index === 0 ? " project-card--featured" : ""}`}
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.01 }}
            >
              <p className="project-kicker">{project.category}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="tag-list" role="list">
                {project.tech.map((item) => (
                  <li className="tag" key={item}>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="project-links">
                {project.confidential ? (
                  <span className="muted">Private government project (code and demo unavailable)</span>
                ) : (
                  <>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ x: 2 }}
                    >
                      <ExternalLink size={15} /> Live Demo
                    </motion.a>
                    <motion.a
                      href={project.code}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ x: 2 }}
                    >
                      <Github size={15} /> Source
                    </motion.a>
                  </>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
