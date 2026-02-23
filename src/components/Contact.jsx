import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

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

const links = [
  { icon: Mail, label: "Email", href: "mailto:muhammadabbasi1020@gmail.com" },
  { icon: Github, label: "GitHub", href: "https://github.com/Muhammad-W-Abbasi" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/wamiqabbasi/" },
];

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
        <motion.div className="contact-wrap card-surface" variants={item}>
          <motion.header className="section-header" variants={item}>
            <p className="eyebrow">Contact</p>
            <h2 id="contact-title" className="section-title">
              Let&apos;s build meaningful systems together
            </h2>
            <p className="section-copy">
              Available for conversations around IT analyst and software solutions roles in public-sector and enterprise environments.
            </p>
          </motion.header>

          <motion.nav className="contact-links" aria-label="Contact links" variants={sectionVariants}>
            {links.map(({ icon: Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                variants={item}
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
