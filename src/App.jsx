import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import FeaturedProject from "./components/FeaturedProject";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { pageVariants } from "./lib/animations";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.div className="app" variants={pageVariants} initial="hidden" animate="visible">
      <header className="site-header">
        <div className="shell nav-row">
          <a className="brand" href="#hero" onClick={closeMenu}>
            <span className="brand-mark">WA</span>
            <span className="brand-text">
              <strong>Muhammad Wamiq Abbasi</strong>
              <small>Software Developer · Project Support & Infrastructure Analyst</small>
            </span>
          </a>

          <button
            type="button"
            className={`menu-toggle${menuOpen ? " is-open" : ""}`}
            aria-label="Toggle navigation menu"
            aria-controls="primary-nav"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav id="primary-nav" className={`nav-links${menuOpen ? " is-open" : ""}`} aria-label="Primary navigation">
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#featured-project" onClick={closeMenu}>BrightPath LMS</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#contact" className="nav-cta" onClick={closeMenu}>
              Contact <ArrowUpRight size={14} />
            </a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Skills />
        <FeaturedProject />
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
