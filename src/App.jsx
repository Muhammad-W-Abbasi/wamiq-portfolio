import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Hero from "./components/Hero";
import About from "./components/About";
import CaseStudy from "./components/CaseStudy";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const pageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function App() {
  return (
    <motion.div className="app" variants={pageVariants} initial="hidden" animate="visible">
      <header className="site-header">
        <div className="shell nav-row">
          <a className="brand" href="#hero">
            <span className="brand-mark">WA</span>
            <span className="brand-text">
              <strong>Muhammad Wamiq Abbasi</strong>
              <small>IT Analyst · Software Solutions</small>
            </span>
          </a>

          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#case-study">Case Study</a>
            <a href="#projects">Projects</a>
            <a href="#contact" className="nav-cta">
              Contact <ArrowUpRight size={14} />
            </a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <CaseStudy />
        <Projects />
        <Contact />
      </main>

      <footer className="site-footer">
        <div className="shell footer-row">
          <p>© 2026 Muhammad Wamiq Abbasi</p>
          <p>Winnipeg, Manitoba · Canada</p>
        </div>
      </footer>
    </motion.div>
  );
}
