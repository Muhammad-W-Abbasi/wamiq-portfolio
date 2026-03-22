import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Book,
  Code2,
  Github,
  Layers,
  LayoutDashboard,
  Linkedin,
  Mail,
  MapPin,
  School,
  Settings,
  Users,
} from "lucide-react";
import {
  aboutBio,
  aboutCapabilities,
  contactLinks,
  featuredProject,
  heroHighlights,
  projects,
  skillGroups,
  skillHighlights,
} from "./content/portfolioContent";

const navLinks = [
  { href: "#about", label: "About me" },
  { href: "#brightpath", label: "BrightPath" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
];

const codeSample = [
  [{ color: "app-code-accent", text: "@Bean" }],
  [
    { color: "app-code-accent", text: "public" },
    { color: "app-code-plain", text: " SecurityFilterChain " },
    { color: "app-code-value", text: "filterChain" },
    { color: "app-code-plain", text: "(HttpSecurity http) {" },
  ],
  [{ color: "app-code-muted", text: "    return" }, { color: "app-code-plain", text: " http" }],
  [{ color: "app-code-plain", text: "        .csrf(csrf -> csrf.disable())" }],
  [{ color: "app-code-plain", text: "        .authorizeHttpRequests(auth -> auth" }],
  [
    { color: "app-code-plain", text: "            .requestMatchers(" },
    { color: "app-code-value", text: "\"/api/v1/auth/**\"" },
    { color: "app-code-plain", text: ").permitAll()" },
  ],
  [{ color: "app-code-plain", text: "            .anyRequest().authenticated()" }],
  [{ color: "app-code-plain", text: "        )" }],
  [{ color: "app-code-plain", text: "        .sessionManagement(sess -> sess" }],
  [{ color: "app-code-plain", text: "            .sessionCreationPolicy(STATELESS))" }],
  [{ color: "app-code-plain", text: "        .build();" }],
  [{ color: "app-code-plain", text: "}" }],
];

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Book, label: "Courses" },
  { icon: Users, label: "Students" },
  { icon: Layers, label: "Assignments" },
  { icon: Settings, label: "Settings", footer: true },
];

const browserStats = [
  { label: "Active Courses", value: "4" },
  { label: "Enrolled Students", value: "23" },
  { label: "Pending Tasks", value: "7" },
];

const browserCourses = [
  { title: "COMP 101: Java Basics", detail: "12 Students Enrolled" },
  { title: "MATH 202: Calculus II", detail: "11 Students Enrolled" },
];

const browserActivity = ["Student joined COMP 101", "Task completed Jane D.", "New enrollment MATH 202"];

function ContactIcon({ label }) {
  if (label === "Email") {
    return <Mail size={28} strokeWidth={1.8} />;
  }

  if (label === "GitHub") {
    return <Github size={28} strokeWidth={1.8} />;
  }

  return <Linkedin size={28} strokeWidth={1.8} />;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutView, setAboutView] = useState("experience");

  const closeMenu = () => setMenuOpen(false);
  const experienceProjectSummary =
    "Production workflow systems used across 5 government departments, replacing manual tracking and email-based approvals. Confidential codebase.";
  const educationItems = [
    {
      label: "Institution",
      value: "University of Manitoba",
    },
    {
      label: "Program",
      value: "Computer Science",
    },
    {
      label: "Focus",
      value: "Software development, product thinking, and backend systems",
    },
  ];

  return (
    <div className="app-shell">
      <header className="app-header">
        <nav className="app-nav app-container">
          <a className="app-brand" href="#hero" onClick={closeMenu}>
            Wamiq.
          </a>

          <div className={`app-nav-links${menuOpen ? " is-open" : ""}`}>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            ))}
            <a className="app-nav-cta" href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </div>

          <button
            type="button"
            className={`app-menu-button${menuOpen ? " is-open" : ""}`}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </header>

      <main>
        <section className="hero-section" id="hero">
          <div className="grain-overlay" aria-hidden="true" />
          <div className="hero-blob hero-blob-left" aria-hidden="true" />
          <div className="hero-blob hero-blob-right" aria-hidden="true" />

          <div className="app-container hero-grid">
            <div className="hero-copy">
              <h1>
                <span className="hero-line">Production Software,</span>{" "}
                <span className="hero-line hero-line-accent">Shipped and Built</span>{" "}
                <span className="hero-line">to Last.</span>
              </h1>
              <p className="hero-description">
                I build maintainable applications and production systems with an emphasis on problem
                solving, clean implementation, and software that helps real users do meaningful work.
              </p>
              <div className="hero-actions">
                <a className="hero-primary-action" href="#brightpath">
                  Featured Project
                  <ArrowRight size={18} />
                </a>
                <a className="hero-secondary-action" href="#contact">
                  Contact
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="editor-mockup">
                <div className="editor-topbar">
                  <span className="editor-dot editor-dot-red" />
                  <span className="editor-dot editor-dot-amber" />
                  <span className="editor-dot editor-dot-blue" />
                  <span className="editor-file">SecurityConfig.java</span>
                </div>
                <div className="editor-body">
                  <pre>
                    <code>
                      {codeSample.map((line, lineIndex) => (
                        <div className="editor-line" key={`line-${lineIndex}`}>
                          {line.map((segment, segmentIndex) => (
                            <span className={segment.color} key={`${lineIndex}-${segmentIndex}-${segment.text}`}>
                              {segment.text}
                            </span>
                          ))}
                        </div>
                      ))}
                    </code>
                  </pre>
                </div>
              </div>

              <div className="hero-pills">
                {heroHighlights.map((item) => (
                  <div className="hero-pill" key={item.label}>
                    <span className="hero-pill-dot" />
                    <span>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="app-container about-grid">
            <div className="about-copy">
              <h2>Grounded in Engineering Precision</h2>
              <div className="about-panel">
                {aboutView === "experience" ? (
                  <div className="about-text">
                    <p>{aboutBio}</p>
                  </div>
                ) : (
                  <div className="education-panel">
                    <div className="education-intro">
                      <p>
                        Computer Science student at the University of Manitoba, building a foundation
                        in software engineering through academic study and hands-on product work.
                      </p>
                    </div>
                    <div className="education-list">
                      {educationItems.map((item) => (
                        <article className="education-card" key={item.label}>
                          <span>{item.label}</span>
                          <h3>{item.value}</h3>
                        </article>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="about-tabs" role="tablist" aria-label="About section views">
                <button
                  className={aboutView === "experience" ? "about-tab-active" : ""}
                  type="button"
                  role="tab"
                  aria-selected={aboutView === "experience"}
                  onClick={() => setAboutView("experience")}
                >
                  Experience
                </button>
                <button
                  className={aboutView === "education" ? "about-tab-active" : ""}
                  type="button"
                  role="tab"
                  aria-selected={aboutView === "education"}
                  onClick={() => setAboutView("education")}
                >
                  Education
                </button>
              </div>
            </div>

            {aboutView === "experience" ? (
              <div className="about-capabilities-grid">
                {aboutCapabilities.map(({ icon: Icon, title }) => (
                  <article className="about-capability-card" key={title}>
                    <Icon className="about-capability-icon" size={30} strokeWidth={1.8} />
                    <h3>{title}</h3>
                  </article>
                ))}
              </div>
            ) : (
              <article className="education-visual-card">
                <div className="education-visual-icon">
                  <School size={42} strokeWidth={1.8} />
                </div>
                <div className="education-visual-copy">
                  <span className="education-visual-eyebrow">Education</span>
                  <h3>University of Manitoba</h3>
                  <p>Bachelor of Science in Computer Science</p>
                  <span className="education-status">Currently in progress</span>
                </div>
                <div className="education-visual-meta">
                  <div className="education-meta-chip">
                    <MapPin size={16} strokeWidth={1.8} />
                    <span>Winnipeg, Manitoba</span>
                  </div>
                  <div className="education-meta-chip">
                    <School size={16} strokeWidth={1.8} />
                    <span>Software engineering foundation</span>
                  </div>
                </div>
              </article>
            )}
          </div>
        </section>

        <section className="brightpath-section" id="brightpath">
          <div className="app-container">
            <div className="section-intro section-intro-centered">
              <span className="section-eyebrow">{featuredProject.eyebrow}</span>
              <h2>{featuredProject.title}</h2>
              <p>{featuredProject.subtitle}</p>
            </div>

            <div className="brightpath-grid">
              <div className="brightpath-details-grid">
                {featuredProject.highlights.map(({ icon: Icon, title, text }) => (
                  <article className="detail-card" key={title}>
                    <Icon className="detail-icon" size={22} strokeWidth={1.8} />
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </article>
                ))}
              </div>

              <div className="brightpath-showcase">
                <div className="browser-mockup">
                  <div className="browser-topbar">
                    <div className="browser-dots">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="browser-address">brightpath.amiq.dev/instructor/dashboard</div>
                    <div className="browser-spacer" />
                  </div>

                  <div className="browser-body">
                    <aside className="browser-sidebar">
                      <div className="sidebar-brand">
                        <div className="sidebar-brand-icon">
                          <School size={14} strokeWidth={2} />
                        </div>
                        <span>BrightPath</span>
                      </div>

                      <nav className="sidebar-nav">
                        {sidebarItems.map(({ icon: Icon, label, active, footer }) => (
                          <div className={`sidebar-item${active ? " is-active" : ""}${footer ? " is-footer" : ""}`} key={label}>
                            <Icon size={15} strokeWidth={1.8} />
                            <span>{label}</span>
                          </div>
                        ))}
                      </nav>
                    </aside>

                    <div className="browser-content">
                      <header className="browser-content-header">
                        <span>BrightPath LMS</span>
                        <div className="browser-user-chip">
                          <div className="browser-user-avatar">WA</div>
                          <span>Instructor</span>
                        </div>
                      </header>

                      <div className="browser-main">
                        <div>
                          <h3>Welcome back, Instructor</h3>
                          <p>{featuredProject.summary}</p>
                        </div>

                        <div className="browser-stats">
                          {browserStats.map((stat) => (
                            <div className="browser-stat-card" key={stat.label}>
                              <div>{stat.label}</div>
                              <strong>{stat.value}</strong>
                            </div>
                          ))}
                        </div>

                        <div className="browser-split">
                          <div className="browser-courses">
                            <h4>My Courses</h4>
                            <div className="browser-course-list">
                              {browserCourses.map((course) => (
                                <div className="browser-course-card" key={course.title}>
                                  <div>
                                    <strong>{course.title}</strong>
                                    <span>{course.detail}</span>
                                  </div>
                                  <span className="browser-course-status">Active</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <aside className="browser-activity">
                            <h4>Recent Activity</h4>
                            <div className="browser-activity-list">
                              {browserActivity.map((activity) => (
                                <div className="browser-activity-item" key={activity}>
                                  <span className="browser-activity-dot" />
                                  <p>{activity}</p>
                                </div>
                              ))}
                            </div>
                          </aside>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="brightpath-footer-row">
                  <div className="brightpath-tags">
                    {featuredProject.stats.map((stat) => (
                      <span className="brightpath-tag" key={stat.label}>
                        {stat.value} {stat.label}
                      </span>
                    ))}
                  </div>

                  <div className="brightpath-links">
                    <a href={featuredProject.demoUrl} target="_blank" rel="noreferrer">
                      Live Demo <ArrowUpRight size={16} />
                    </a>
                    <a href={featuredProject.codeUrl} target="_blank" rel="noreferrer">
                      Source <Code2 size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="projects-section" id="projects">
          <div className="app-container">
            <div className="section-row">
              <h2>Supplemental Works</h2>
              <a className="section-link" href="https://github.com/Muhammad-W-Abbasi" target="_blank" rel="noreferrer">
                Explore Github <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.confidential ? experienceProjectSummary : project.description}</p>
                  <div className="project-tech">
                    {[
                      ...project.tech,
                      ...(project.title === "Weather application" ? ["Responsive UI", "Error States"] : []),
                    ].map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  {!project.confidential ? (
                    <div className="project-links-inline">
                      <a href={project.demo} target="_blank" rel="noreferrer">
                        Live Demo <ArrowUpRight size={16} />
                      </a>
                      <a href={project.code} target="_blank" rel="noreferrer">
                        Source <Code2 size={16} />
                      </a>
                    </div>
                  ) : (
                    <div className="project-links-inline">
                      <span className="project-note">Links unavailable due to confidentiality.</span>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="skills-section" id="skills">
          <div className="app-container">
            <h2 className="skills-heading">Software strengths aligned with product-focused engineering work</h2>

            <div className="skills-highlight-card">
              <div className="skills-highlight-copy">
                <h3>{skillGroups[2].title}</h3>
                <p>{skillGroups[2].summary}</p>
              </div>

              <div className="skills-highlight-pills">
                {skillHighlights.map((item) => (
                  <span key={item.label}>{item.value}</span>
                ))}
              </div>
            </div>

            <div className="skills-grid">
              {skillGroups.map((group) => (
                <article className="skill-card" key={group.title}>
                  <h3>{group.title}</h3>
                  <p>{group.summary}</p>
                  <div className="skill-items">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="app-container contact-wrap">
            <div className="contact-copy">
              <h2>
                Let&apos;s build something
                <br />
                remarkable.
              </h2>
              <p>
                Currently open to software engineering opportunities and collaborations focused on
                product impact.
              </p>
            </div>

            <div className="contact-links">
              {contactLinks.map(({ label, href }) => (
                <a
                  aria-label={label}
                  className="contact-link"
                  href={href}
                  key={label}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  target={href.startsWith("http") ? "_blank" : undefined}
                >
                  <ContactIcon label={label} />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <div className="app-container footer-content">
          <div className="footer-links">
            {contactLinks.map(({ label, href }) => (
              <a
                href={href}
                key={label}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                target={href.startsWith("http") ? "_blank" : undefined}
              >
                {label}
              </a>
            ))}
          </div>
          <p>© 2026 Muhammad Wamiq Abbasi. Built with precision.</p>
        </div>
      </footer>
    </div>
  );
}
