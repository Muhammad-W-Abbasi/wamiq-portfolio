import {
  ArrowRightLeft,
  BriefcaseBusiness,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  Github,
  Layers,
  Linkedin,
  Mail,
  Server,
  ShieldCheck,
} from "lucide-react";

export const heroHighlights = [
  {
    icon: ShieldCheck,
    label: "Current Focus",
    value: "Production software and workflow systems",
  },
  {
    icon: Database,
    label: "Build Focus",
    value: "Java backends, React interfaces, and practical APIs",
  },
  {
    icon: Layers,
    label: "Strength",
    value: "Problem solving, collaboration, and maintainable delivery",
  },
];

export const aboutCapabilities = [
  {
    icon: Database,
    title: "Breaking down complex problems",
    text: "Breaking complex operational needs into practical technical solutions with clear boundaries, reliable behavior, and maintainable implementation.",
  },
  {
    icon: Server,
    title: "Backend systems and APIs",
    text: "Building production workflow systems and full-stack projects that strengthen my foundation in Java, APIs, data handling, and application logic.",
  },
  {
    icon: Code2,
    title: "Frontend and product interfaces",
    text: "Creating interfaces and product flows that feel clear to use, with a focus on readable frontend structure and features that reflect real user needs.",
  },
  {
    icon: Cloud,
    title: "Stakeholder and team collaboration",
    text: "Working closely with stakeholders to gather requirements, refine workflows, and translate business context into software that teams can actually rely on.",
  },
];

export const aboutBio =
  "I’m Muhammad Wamiq Abbasi, a software developer and Computer Science student at the University of Manitoba with experience building production software and workflow systems for the Government of Manitoba. I enjoy analyzing problems, turning them into clear technical solutions, and building software that is reliable, maintainable, and useful to the people working with it every day. Alongside production systems work, I build full-stack projects that deepen my experience with Java backend development, user-facing applications, and collaborative product thinking. That perspective fits education technology well, where strong software can help create learning experiences that are flexible, dependable, and student-centered.";

export const skillHighlights = [
  {
    label: "Best aligned for",
    value: "Product-focused software developer roles",
  },
  {
    label: "Core strengths",
    value: "Problem decomposition, OO thinking, and maintainable code",
  },
  {
    label: "Demonstrated through",
    value: "Government production systems and BrightPath LMS",
  },
];

export const skillGroups = [
  {
    title: "Core Development Foundations",
    summary: "Computer science fundamentals and day-to-day engineering habits that map well to product software work.",
    items: ["Java", "JavaScript", "SQL", "Object-Oriented Programming", "Debugging", "Refactoring"],
  },
  {
    title: "Application & Interface Work",
    summary: "Frontend and product-facing technologies demonstrated across portfolio projects and interface-focused development.",
    items: ["React", "TypeScript", "HTML5", "CSS3", "REST APIs", "State Management"],
  },
  {
    title: "Backend & Product Architecture",
    summary: "Full-stack technologies showcased in BrightPath LMS to highlight backend design, security, and data persistence.",
    items: ["Spring Boot", "PostgreSQL", "JWT Authentication", "Role-Based Access Control", "Flyway", "Rate Limiting"],
  },
  {
    title: "Delivery, Data & Collaboration",
    summary: "Production-oriented tools and practices shaped by real stakeholder work, operational data, and iterative delivery.",
    items: ["Power Apps", "Power Automate", "Dataverse", "SharePoint", "Git", "GitHub", "Requirements Analysis", "Iterative Delivery"],
  },
];

export const featuredProject = {
  eyebrow: "Featured Project",
  title: "BrightPath LMS",
  subtitle:
    "A full-stack learning management system built to demonstrate Java backend design, product thinking, and polished student and instructor workflows.",
  summary:
    "BrightPath is a portfolio-grade LMS inspired by platforms like D2L. It supports student and instructor experiences through JWT authentication, role-based access control, rate-limited APIs, course enrollment, and instructor-managed course tasks with per-student completion tracking.",
  stats: [
    { value: "React", label: "Frontend application" },
    { value: "Spring Boot", label: "Backend API" },
    { value: "PostgreSQL", label: "Persistence and migrations" },
  ],
  highlights: [
    {
      icon: BriefcaseBusiness,
      title: "Product scope",
      text: "Models the core workflows a learning product needs: secure access, course enrollment, role-aware experiences, and student task tracking.",
    },
    {
      icon: Code2,
      title: "Engineering focus",
      text: "Built with JWT auth, rate limiting, protected API endpoints, Flyway migrations, explicit role-based access control, and a maintainable React component structure.",
    },
    {
      icon: ArrowRightLeft,
      title: "User workflow design",
      text: "Replaced hard-coded assignments with a live reminder system that instructors manage directly and students complete individually.",
    },
    {
      icon: CheckCircle2,
      title: "Delivery mindset",
      text: "Improved local dev resilience, fixed deployment-safe migrations, tightened dependency security, and documented setup for reviewers.",
    },
  ],
  stack: ["React", "Java", "Spring Boot", "JWT", "PostgreSQL", "Flyway"],
  demoUrl: "https://brightpath-lms.netlify.app/",
  codeUrl: "https://github.com/Muhammad-W-Abbasi/brightpath-lms",
};

export const projects = [
  {
    category: "Internal Systems",
    title: "Capital project workflow tooling",
    description:
      "Production workflow systems now used by 30+ people across 5 government departments, replacing manual Excel tracking, email-based approvals, and spreadsheet reporting. Work expanded organically after a director-led show-and-tell across branches. Confidential codebase.",
    tech: ["Power Apps", "Power Automate", "SharePoint", "Dataverse"],
    confidential: true,
  },
  {
    category: "Frontend Engineering",
    title: "Personal portfolio site",
    description:
      "A responsive React portfolio emphasizing clean section structure, fluid layouts, accessible motion, and presentation that feels intentional rather than template-driven.",
    tech: ["React", "Vite", "Framer Motion", "CSS"],
    demo: "https://wamiq-portfolio.netlify.app",
    code: "https://github.com/Muhammad-W-Abbasi/wamiq-portfolio",
  },
  {
    category: "API Integration",
    title: "Weather application",
    description:
      "A real-time weather interface that practices asynchronous API handling, loading and error states, and separating data-fetching concerns from rendering logic.",
    tech: ["JavaScript", "REST APIs", "Async UI"],
    demo: "https://wamiq-weather.netlify.app",
    code: "https://github.com/Muhammad-W-Abbasi/weather-app",
  },
  {
    category: "Client-side State",
    title: "Task manager application",
    description:
      "A browser-based task manager with CRUD operations and persistent local state, designed around predictable updates and maintainable DOM interactions.",
    tech: ["JavaScript", "localStorage", "State Management"],
    demo: "https://task-manager-wamiq.netlify.app",
    code: "https://github.com/Muhammad-W-Abbasi/task-manager-app",
  },
];

export const contactLinks = [
  { icon: Mail, label: "Email", href: "mailto:muhammadabbasi1020@gmail.com" },
  { icon: Github, label: "GitHub", href: "https://github.com/Muhammad-W-Abbasi" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/wamiqabbasi/" },
];
