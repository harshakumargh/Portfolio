export type ExpertiseDomain = {
  id: string;
  title: string;
  summary: string;
  items: string[];
};

export const expertiseDomains: ExpertiseDomain[] = [
  {
    id: "backend",
    title: "Backend Engineering",
    summary: "Production APIs and services in C# and .NET, structured to stay clear as they grow.",
    items: [".NET 8", "ASP.NET Core", "C#", "REST APIs", "Entity Framework Core", "LINQ", "CQRS", "Clean Architecture"],
  },
  {
    id: "distributed",
    title: "Distributed Systems",
    summary: "Services that cooperate over networks, queues and caches, and keep working when parts of them don't.",
    items: [
      "Microservices",
      "Distributed Caching",
      "Event-Driven Architecture",
      "Fault Tolerance",
      "Async Processing",
      "Messaging",
      "Kafka",
      "SQS",
      "Service Bus",
    ],
  },
  {
    id: "cloud",
    title: "Cloud Engineering",
    summary: "Shipping and running workloads on Azure and AWS with repeatable, automated delivery.",
    items: ["Azure", "AWS", "Docker", "Kubernetes", "Helm", "CI/CD"],
  },
  {
    id: "reliability",
    title: "Reliability & Performance",
    summary: "Resilience by design, and optimization driven by telemetry rather than guesswork.",
    items: [
      "Polly",
      ".NET Resilience Engine",
      "OpenTelemetry",
      "Grafana",
      "Application Insights",
      "AppDynamics",
      "Performance Engineering",
    ],
  },
  {
    id: "ai",
    title: "AI Engineering",
    summary: "LLM applications, retrieval and agent orchestration, built with the same production discipline.",
    items: [
      "Azure OpenAI",
      "OpenAI",
      "Claude",
      "Microsoft Agent Framework",
      "Semantic Kernel",
      "LangChain",
      "RAG",
      "Vector Search",
      "Multi-Agent Systems",
      "AI Foundry",
    ],
  },
];

/** Shown as a quiet line under the domains: the rest of the toolbox. */
export const supportingStack = {
  languages: ["C#", "TypeScript", "JavaScript", "Python", "T-SQL"],
  frontend: ["Angular", "Vue.js", "Ionic"],
  data: ["SQL Server", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
};
