import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const projectData = [
  {
    category: "Government Automation",
    title: "Capital Projects Automation Suite",
    description:
      "Internal automation toolkit that streamlined reporting workflows and reduced repetitive data handling in large infrastructure delivery programs.",
    tech: ["MS Fabric", "Power BI", "MS Data Platform", "Power Apps"],
    confidential: true,
  },
  {
    category: "Data Applications",
    title: "Live Data Dashboard",
    description:
      "Responsive analytics interface integrating external APIs, geolocation, and data visualizations with clean component architecture.",
    tech: ["JavaScript", "REST APIs", "Data Visualization"],
    demo: "https://wamiq-weather.netlify.app",
    code: "https://github.com/Muhammad-W-Abbasi/weather-app",
  },
  {
    category: "Productivity Systems",
    title: "Operations Task Manager",
    description:
      "Modular task-management system with persistent state, full CRUD interactions, and optimized rendering performance.",
    tech: ["JavaScript", "localStorage", "UI Architecture"],
    demo: "https://task-manager-wamiq.netlify.app",
    code: "https://github.com/Muhammad-W-Abbasi/task-manager-app",
  },
];

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
            Selected software and data delivery work
          </h2>
        </motion.header>

        <motion.div className="projects-grid" variants={sectionVariants}>
          {projectData.map((project) => (
            <motion.article
              className="project-card card-surface"
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
