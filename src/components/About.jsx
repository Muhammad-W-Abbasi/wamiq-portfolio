import { motion } from "framer-motion";
import { Cloud, Code2, Database, Server } from "lucide-react";

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

const capabilities = [
  {
    icon: Database,
    title: "Data Platforms",
    text: "Designing and implementing reporting and data workflows with SQL Server, SSIS, SSRS, Power BI, and Fabric.",
  },
  {
    icon: Server,
    title: "Automation",
    text: "Shipping pragmatic automation tools that reduce manual effort and improve consistency in operational teams.",
  },
  {
    icon: Code2,
    title: "Software Delivery",
    text: "Building maintainable web applications and internal tools with clear architecture and predictable behavior.",
  },
  {
    icon: Cloud,
    title: "Advisory & Collaboration",
    text: "Translating technical complexity into clear decisions for management, stakeholders, and cross-functional partners.",
  },
];

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
            Practical engineering with measurable operational impact
          </h2>
        </motion.header>

        <motion.div className="feature-grid" variants={sectionVariants}>
          {capabilities.map(({ icon: Icon, title, text }) => (
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
