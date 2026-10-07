export type CaseStudyChapter = {
  id: string;
  title: string;
  body: string;
  points?: string[];
};

export type CaseStudyHighlight = {
  title: string;
  summary: string;
  results: { value: string; label: string }[];
  tags: string[];
};

export const featuredExperience = {
  name: "Verizon Home Platform",
  employer: "Diaspark",
  client: "Verizon",
  role: "Senior Software Engineer",
  period: "2022 – Present",
  summary:
    "I lead backend development for the services behind the Verizon Home App, the product Verizon home internet customers use to see and control their router and home network. The work spans API design, resilience, caching, third-party integrations and cloud deployment, along with mentoring engineers, driving architectural decisions and reviewing code.",
  stack: [".NET 6/8", "ASP.NET Core", "Angular 18", "Azure", "AWS", "MongoDB", "SQL Server", "Redis", "Polly", "Jenkins"],
  chapters: [
    {
      id: "problem",
      title: "Problem",
      body: "Customers expect router controls to respond immediately, but each request depends on downstream router-management (BCS) and security (Bitdefender) services the platform does not own. Those dependencies, together with peak-hour traffic and database pressure, are where latency and failures come from.",
    },
    {
      id: "architecture",
      title: "Architecture",
      body: ".NET microservices expose RESTful APIs for each capability of the home network, fronted by Azure API Management and deployed to Azure App Service.",
      points: [
        "Router status and connected devices",
        "Wi-Fi configuration and parental controls",
        "QoS and Internet Backup",
        "Bitdefender and BCS integrations behind dedicated service boundaries",
      ],
    },
    {
      id: "engineering",
      title: "Engineering",
      body: "Third-party REST integrations are wrapped so the rest of the platform depends on stable, testable contracts rather than vendor APIs. I am the go-to engineer for complex .NET issues and hold the bar on scalability, performance and secure coding in code review.",
    },
    {
      id: "reliability",
      title: "Reliability",
      body: "Outbound calls run through explicit resilience policies: retry for transient faults, timeouts to bound latency, circuit breakers to stop cascading failures and fallbacks to degrade gracefully. Application Insights provides diagnostics and operational visibility.",
    },
    {
      id: "performance",
      title: "Performance",
      body: "A two-tier cache (in-memory plus Redis) absorbs repeated reads before they reach the database, and a purpose-built client library reduces the overhead of BCS calls.",
    },
    {
      id: "impact",
      title: "Impact",
      body: "Fewer production disruptions, less load on the database, and faster responses when traffic peaks.",
      points: [
        "50% reduction in production service disruptions",
        "60% reduction in database load",
        "40% faster API responses under peak load",
        "25% faster responses through the BCS integration library",
      ],
    },
  ] satisfies CaseStudyChapter[],
  highlights: [
    {
      title: "Resilience architecture",
      summary:
        "Retry, circuit breaker, timeout and fallback strategies implemented with Polly and the .NET 8 resilience engine.",
      results: [{ value: "50%", label: "fewer production service disruptions" }],
      tags: ["Polly", ".NET 8 Resilience", "Fault tolerance"],
    },
    {
      title: "Caching architecture",
      summary: "A distributed caching layer combining in-memory and Redis caches in front of the database.",
      results: [
        { value: "60%", label: "lower database load" },
        { value: "40%", label: "faster API responses at peak" },
      ],
      tags: ["Redis", "In-memory cache", "Distributed caching"],
    },
    {
      title: "Integration performance",
      summary: "A high-performance wrapper library for interfacing with BCS router-management services.",
      results: [{ value: "25%", label: "faster API response time" }],
      tags: ["C#", "Library design", "BCS"],
    },
    {
      title: "Cloud architecture",
      summary:
        "Cloud-native APIs designed and deployed on Azure, with secrets in Key Vault and telemetry in Application Insights.",
      results: [],
      tags: ["Azure App Service", "Azure API Management", "Key Vault", "Application Insights"],
    },
  ] satisfies CaseStudyHighlight[],
};

export type TimelineEntry = {
  company: string;
  context?: string;
  role: string;
  period: string;
  summary: string;
  stack: string[];
};

export const careerTimeline: TimelineEntry[] = [
  {
    company: "Diaspark",
    context: "Client: Verizon",
    role: "Senior Software Engineer",
    period: "Apr 2022 – Present",
    summary:
      "Backend lead for the .NET microservices behind the Verizon Home App: router management APIs, resilience, caching and Azure deployment.",
    stack: [".NET 6/8", "Angular 18", "Azure", "AWS", "MongoDB", "SQL Server"],
  },
  {
    company: "Wells Fargo",
    role: "Senior Software Engineer",
    period: "Sep 2021 – Apr 2022",
    summary:
      "Full-stack modules for an internal ad campaign management platform, including campaign scheduling, targeting and secure asset storage.",
    stack: [".NET 5", "Angular 12", "SQL Server", "Azure"],
  },
  {
    company: "Eurofins",
    role: "Technology Specialist – Performance Engineering",
    period: "Feb 2020 – Sep 2021",
    summary:
      "Diagnosed memory leaks, CPU spikes and thread contention across .NET applications and delivered RCA and tuning plans, improving response times by up to 50%. Led the Bill Scanner mobile app.",
    stack: [".NET", "AppDynamics", "dotTrace", "SQL Profiler", "Ionic"],
  },
  {
    company: "Ernst & Young",
    role: "Senior Software Engineer",
    period: "Aug 2018 – Jan 2020",
    summary:
      "Workflow automation platform for tax and audit teams, including a reusable Exchange Web Services library and stakeholder dashboards.",
    stack: [".NET Core", "Angular", "SQL Server", "Azure"],
  },
  {
    company: "Arcadix",
    role: "Software Engineer",
    period: "Jan 2017 – Aug 2018",
    summary:
      "School management and assessment platform with a learning content management system for building tests.",
    stack: [".NET Core", "Angular", "SQL Server"],
  },
  {
    company: "Intellileap",
    role: "Software Developer",
    period: "Dec 2014 – Dec 2016",
    summary:
      "Business process management system with a drag-and-drop workflow designer, rule engine and third-party integrations.",
    stack: ["ASP.NET", "Web API", "SQL Server", "WinForms"],
  },
];
