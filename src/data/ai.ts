export type FlowStep = {
  label: string;
  detail?: string;
};

export const agentFlow: FlowStep[] = [
  { label: "User", detail: "Request or task" },
  { label: "AI Application", detail: "API, auth, guardrails" },
  { label: "Agent / Orchestrator", detail: "Plans, routes, delegates" },
  { label: "Tools / MCP", detail: "Typed, permissioned actions" },
  { label: "Enterprise Systems", detail: "Services, data, workflows" },
];

export const ragFlow: FlowStep[] = [
  { label: "Knowledge Sources", detail: "Docs, tickets, runbooks" },
  { label: "Embeddings", detail: "Chunk and encode" },
  { label: "Vector Database", detail: "Similarity search" },
  { label: "RAG", detail: "Retrieve and ground" },
  { label: "LLM", detail: "Answer with context" },
];

export const aiTechnologies: string[] = [
  "Microsoft Agent Framework",
  "Microsoft Foundry",
  "Azure OpenAI",
  "OpenAI API",
  "Claude API",
  "Semantic Kernel",
  "LangChain",
  "RAG",
  "Vector Search",
  "Multi-Agent Workflows",
  "MCP concepts",
];

export const aiPrinciples: { title: string; body: string }[] = [
  {
    title: "Agents inside real architecture",
    body: "Models get bounded tools, explicit contracts and the same resilience, observability and security controls as any other service.",
  },
  {
    title: "Grounded, not guessed",
    body: "Retrieval over an organization's own knowledge keeps answers specific and traceable to their sources.",
  },
  {
    title: "Humans stay in the loop",
    body: "Agents investigate and recommend; consequential actions wait for a person to approve them.",
  },
];

export type AiProjectRef = {
  title: string;
  status: string;
  summary: string;
  href: string;
};

/**
 * Personal AI engineering work. Add entries here as projects are published;
 * the AI section renders whatever this list contains.
 */
export const aiProjects: AiProjectRef[] = [
  {
    title: "AI Incident Triage Platform",
    status: "Personal project",
    summary:
      "Multi-agent incident investigation across observability, documentation, code and issue tracking, ending in a human-approved recommendation.",
    href: "#project-incident-triage",
  },
];
