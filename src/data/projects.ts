export type ProjectLink = { label: string; href: string };

export type Project = {
  id: string;
  title: string;
  category: string;
  /** "Professional" work vs. "Personal" projects are always labelled. */
  kind: "Professional" | "Personal";
  kindNote: string;
  summary: string;
  focus: string[];
  stack: string[];
  links: ProjectLink[];
  visual: "platform" | "triage" | "mobile";
};

export const projects: Project[] = [
  {
    id: "project-verizon-home",
    title: "Verizon Home Platform",
    category: "Distributed Systems / Cloud",
    kind: "Professional",
    kindNote: "Diaspark · Client: Verizon",
    summary:
      "Backend platform for the Verizon Home App: large-scale .NET APIs for router management, built for resilience and performance under peak load.",
    focus: [
      "Router management, connected devices, Wi-Fi, parental controls, QoS and Internet Backup APIs",
      "Polly and .NET 8 resilience policies: 50% fewer production disruptions",
      "In-memory and Redis caching: 60% lower database load, 40% faster at peak",
    ],
    stack: [".NET 8", "Angular", "Azure", "AWS", "Redis", "MongoDB", "SQL Server"],
    links: [{ label: "Read the case study", href: "#experience" }],
    visual: "platform",
  },
  {
    id: "project-incident-triage",
    title: "AI Incident Triage Platform",
    category: "Agentic AI / Developer Productivity",
    kind: "Personal",
    kindNote: "AI engineering project, not production work",
    summary:
      "An intelligent incident investigation system that coordinates AI agents across observability, documentation and issue-management systems, then hands a root-cause hypothesis and recommended actions to a human for approval.",
    focus: [
      "Orchestrator agent delegates to observability, knowledge, code/repository and Jira agents",
      "Retrieval over runbooks and documentation grounds each hypothesis",
      "Recommended actions require explicit human approval",
    ],
    stack: [".NET", "Python", "Microsoft Agent Framework", "Semantic Kernel / LangChain", "LLMs", "RAG", "Vector Database", "MCP"],
    links: [],
    visual: "triage",
  },
  {
    id: "project-bill-scanner",
    title: "Bill Scanner",
    category: "Mobile / Full Stack",
    kind: "Professional",
    kindNote: "Eurofins",
    summary:
      "Cross-platform receipt digitization app built with Ionic and Angular, with offline SQLite storage and native camera and file integrations. Shipped to both the Apple App Store and Google Play Store.",
    focus: [
      "Led requirements, technical analysis and architecture",
      "Offline-first storage with SQLite; camera and file access through Capacitor plugins",
      "Automated build and release with GitHub Actions and Ionic Appflow",
    ],
    stack: ["Ionic", "Angular", "SQLite", "Capacitor", "GitHub Actions", "Ionic Appflow"],
    links: [
      { label: "App Store", href: "https://apps.apple.com/in/app/eurofins-bill-scanner/id1558402224" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.eurofins.billscanner" },
    ],
    visual: "mobile",
  },
];
