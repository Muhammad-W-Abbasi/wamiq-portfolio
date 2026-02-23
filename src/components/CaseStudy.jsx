import { motion } from "framer-motion";
import { BriefcaseBusiness, CheckCircle2, Layers3, Wrench } from "lucide-react";

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

const highlights = [
  {
    icon: Layers3,
    title: "Scope",
    text: "Enabled oversight across a portfolio of more than 150 projects, supporting 10 project managers, one portfolio manager, and one director.",
  },
  {
    icon: Wrench,
    title: "Problem",
    text: "Project tracking relied on manually updated spreadsheets and email-heavy admin workflows, leading to stale data and missed requests.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Solution",
    text: "Designed and delivered a full-featured SharePoint site that directed users into the appropriate solution stream, including portfolio tracking dashboards and administrative service requests.",
  },
  {
    icon: CheckCircle2,
    title: "Outcome",
    text: "Significantly improved reporting accuracy, portfolio health visibility, and on-time administrative delivery for 20+ staff users.",
  },
];

export default function CaseStudy() {
  return (
    <motion.section
      id="case-study"
      className="section-shell"
      aria-labelledby="case-study-title"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="shell">
        <motion.header className="section-header" variants={item}>
          <p className="eyebrow">Case Study</p>
          <h2 id="case-study-title" className="section-title">
            Portfolio tracking and admin automation transformation
          </h2>
          <p className="section-copy">
            Delivered end-to-end as a solo builder from discovery and design through testing, deployment, and post-launch bug fixes.
          </p>
        </motion.header>

        <motion.article className="case-study case-banner card-surface" variants={item}>
          <div className="case-banner-top">
            <div className="case-lead">
              <p className="case-kicker">Flagship Delivery</p>
              <h3>From fragmented tracking to portfolio-level visibility</h3>
              <p>
                Replaced disconnected spreadsheets and inbox-driven coordination with a centralized Microsoft solution.
                The SharePoint front end served as a single intake and navigation layer, guiding users to either
                portfolio tracking capabilities or administrative request workflows.
              </p>
            </div>
            <div className="case-stats" role="list" aria-label="Case study key metrics">
              <div className="case-stat" role="listitem">
                <span>150+</span>
                <small>Projects in portfolio</small>
              </div>
              <div className="case-stat" role="listitem">
                <span>12</span>
                <small>Leadership stakeholders</small>
              </div>
              <div className="case-stat" role="listitem">
                <span>20+</span>
                <small>Admin users</small>
              </div>
            </div>
          </div>

          <div className="case-study-grid">
            {highlights.map(({ icon: Icon, title, text }) => (
              <motion.section className="case-item" key={title} variants={item} whileHover={{ y: -4 }}>
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
