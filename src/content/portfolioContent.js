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
    label: "Current Role",
    value: "Government of Manitoba · CPPD",
  },
  {
    icon: Database,
    label: "Build Focus",
    value: "Full-stack apps, APIs, and workflow systems",
  },
  {
    icon: Layers,
    label: "Strength",
    value: "Readable software with practical business impact",
  },
];

export const aboutCapabilities = [
  {
    icon: Database,
    title: "Data and reporting systems",
    text: "Designing internal reporting and workflow tools that help teams make decisions with cleaner, more reliable operational data.",
  },
  {
    icon: Server,
    title: "Automation and delivery",
    text: "Reducing manual coordination through pragmatic automation, structured processes, and systems that fit how teams already work.",
  },
  {
    icon: Code2,
    title: "Software engineering",
    text: "Building maintainable frontend and full-stack applications with clear boundaries, predictable behavior, and clean implementation.",
  },
  {
    icon: Cloud,
    title: "Stakeholder collaboration",
    text: "Translating requirements into practical technical solutions for non-technical users, managers, and cross-functional partners.",
  },
];

export const featuredProject = {
  eyebrow: "Featured Project",
  title: "BrightPath LMS",
  subtitle:
    "A full-stack learning management system built to demonstrate product thinking, backend design, and polished user workflows.",
  summary:
    "BrightPath is a portfolio-grade LMS inspired by platforms like D2L. It supports instructor and student experiences through secure authentication, role-based access control, course enrollment, and live instructor-managed course tasks with per-student completion tracking.",
  stats: [
    { value: "React", label: "Frontend application" },
    { value: "Spring Boot", label: "Backend API" },
    { value: "PostgreSQL", label: "Persistence and migrations" },
  ],
  highlights: [
    {
      icon: BriefcaseBusiness,
      title: "Product scope",
      text: "Supports the core workflows an instructor and student actually need: authentication, course access, communication, and task tracking.",
    },
    {
      icon: Code2,
      title: "Engineering focus",
      text: "Built with JWT auth, protected API endpoints, Flyway migrations, explicit role handling, and a maintainable React component structure.",
    },
    {
      icon: ArrowRightLeft,
      title: "Recent enhancement",
      text: "Replaced hard-coded assignments with a live reminder system that instructors manage and students complete individually.",
    },
    {
      icon: CheckCircle2,
      title: "Production polish",
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
      "Internal work supporting production systems used by teams planning and delivering public infrastructure projects, with a focus on clearer workflows, reporting, and maintainable implementation.",
    tech: ["Government IT", "Workflow Design", "Reporting", "Automation"],
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
