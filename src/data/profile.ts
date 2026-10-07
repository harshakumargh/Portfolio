import { siteConfig } from "@/lib/site";

export const profile = {
  name: "Harsha Kumar",
  initials: "HK",
  headline: "Senior Software Engineer",
  focus: "Distributed Systems · Cloud · AI & Agentic Systems",
  yearsOfExperience: 12,
  location: "Dallas, TX, United States",
  locationShort: "Dallas, TX",
  relocation: "Open to relocation within the United States",
  email: "harshakumargh@gmail.com",
  links: {
    github: "https://github.com/harshakumargh",
    linkedin: "https://www.linkedin.com/in/harshakumargh/",
    resume: siteConfig.resumePath,
  },
  education: {
    degree: "Bachelor of Engineering in Computer Science",
    school: "Visvesvaraya Technological University",
    year: "2014",
  },
} as const;

export type NavItem = { id: string; label: string };

/** Navigation order mirrors the page order. Each id is a section anchor. */
export const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "engineering", label: "Engineering" },
  { id: "ai", label: "AI" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];
