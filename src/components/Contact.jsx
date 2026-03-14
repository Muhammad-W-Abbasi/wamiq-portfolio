import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { contactLinks } from "../content/portfolioContent";
import { compactItemVariants, sectionVariants } from "../lib/animations";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="section-shell"
      aria-labelledby="contact-title"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="shell">
        <motion.div className="contact-wrap card-surface" variants={compactItemVariants}>
          <motion.header className="section-header" variants={compactItemVariants}>
            <p className="eyebrow">Contact</p>
            <h2 id="contact-title" className="section-title">
              Let&apos;s build meaningful systems together
            </h2>
            <p className="section-copy">
              Open to software roles where I can contribute to practical products, internal systems, and teams that care about clean implementation.
            </p>
          </motion.header>

          <motion.nav className="contact-links" aria-label="Contact links" variants={sectionVariants}>
            {contactLinks.map(({ icon: Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                variants={compactItemVariants}
                whileHover={{ y: -3, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <span>
                  <Icon size={16} /> {label}
                </span>
                <ArrowUpRight size={16} />
              </motion.a>
            ))}
          </motion.nav>
        </motion.div>
      </div>
    </motion.section>
  );
}
