import { cn } from "@/lib/cn";
import { DiagramFrame, FlowConnector, FlowFan, FlowNode } from "./Flow";

function NodeRow({ children, cols }: { children: React.ReactNode; cols: 2 | 3 | 4 }) {
  const grid = { 2: "grid-cols-2", 3: "grid-cols-3", 4: "grid-cols-4" }[cols];
  return <div className={cn("grid gap-2 sm:gap-3", grid)}>{children}</div>;
}

/** Hero: request path from client to AI agents through a distributed backend. */
export function HeroArchitecture() {
  return (
    <DiagramFrame title="request path" className="mx-auto w-full max-w-md">
      <div role="img" aria-label="Architecture flow: user or app, to API gateway, to distributed services, to cache, messaging and database, to AI agents.">
        <FlowNode label="User / App" detail="web · mobile" />
        <FlowConnector delay={0} />
        <FlowNode label="API Gateway" detail="auth · routing · throttling" />
        <FlowFan count={3} delay={0.4} />
        <NodeRow cols={3}>
          <FlowNode label="Service" detail="svc-a" />
          <FlowNode label="Service" detail="svc-b" />
          <FlowNode label="Service" detail="svc-c" />
        </NodeRow>
        <FlowConnector delay={1.1} className="[&>div]:h-5" />
        <NodeRow cols={3}>
          <FlowNode label="Cache" detail="redis" />
          <FlowNode label="Messaging" detail="queue · topic" />
          <FlowNode label="Database" detail="sql · nosql" />
        </NodeRow>
        <FlowFan count={3} direction="in" delay={1.5} />
        <FlowNode label="AI / Agents" detail="llm · rag · tools" tone="accent" />
      </div>
    </DiagramFrame>
  );
}

/** Verizon Home platform: simplified service architecture. */
export function PlatformArchitecture() {
  const capabilities = ["Router status", "Connected devices", "Wi-Fi settings", "Parental controls", "QoS", "Internet Backup"];
  return (
    <DiagramFrame
      title="verizon home · backend"
      caption="Simplified, illustrative view of the platform's main building blocks."
    >
      <div
        role="img"
        aria-label="Verizon Home App calls Azure API Management, which routes to .NET microservices on Azure App Service. Calls pass through Polly resilience policies to an in-memory and Redis cache, MongoDB and SQL Server, and BCS and Bitdefender integrations. Key Vault and Application Insights support the platform."
      >
        <FlowNode label="Verizon Home App" detail="Angular 18" />
        <FlowConnector />
        <FlowNode label="Azure API Management" detail="gateway · policies" />
        <FlowConnector delay={0.4} />
        <div className="rounded-md border border-accent-line bg-accent-soft p-3 sm:p-4">
          <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
            <span className="text-[0.8125rem] font-medium">.NET 6/8 microservices</span>
            <span className="font-mono text-[0.6875rem] text-fg-subtle">Azure App Service</span>
          </div>
          <ul className="mt-3 grid grid-cols-2 gap-1.5 sm:grid-cols-3">
            {capabilities.map((capability) => (
              <li
                key={capability}
                className="rounded-sm border border-border bg-bg-elevated px-2 py-1.5 text-center font-mono text-[0.6875rem] leading-tight text-fg-muted"
              >
                {capability}
              </li>
            ))}
          </ul>
          <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 rounded-sm border border-dashed border-accent-line px-2.5 py-2 font-mono text-[0.6875rem] text-fg-muted">
            <span className="text-accent">Polly / .NET 8 resilience</span>
            <span aria-hidden>·</span>retry<span aria-hidden>·</span>circuit breaker<span aria-hidden>·</span>timeout
            <span aria-hidden>·</span>fallback
          </div>
        </div>
        <FlowFan count={3} delay={0.8} />
        <NodeRow cols={3}>
          <FlowNode label="Cache" detail="in-memory + Redis" />
          <FlowNode label="Data" detail="MongoDB · SQL Server" />
          <FlowNode label="Integrations" detail="BCS · Bitdefender" />
        </NodeRow>
        <div className="mt-4 grid grid-cols-2 gap-2 sm:gap-3">
          <FlowNode label="Key Vault" detail="secrets" tone="muted" />
          <FlowNode label="Application Insights" detail="telemetry" tone="muted" />
        </div>
      </div>
    </DiagramFrame>
  );
}

/** Personal project: multi-agent incident triage, drawn as a tree. */
export function TriageArchitecture() {
  const agents = [
    { label: "Observability Agent", detail: "logs · metrics · traces" },
    { label: "Knowledge Agent", detail: "runbooks · docs (RAG)" },
    { label: "Code / Repository Agent", detail: "recent changes" },
    { label: "Jira Agent", detail: "related issues" },
  ];
  return (
    <DiagramFrame title="incident triage · agents">
      <div
        role="img"
        aria-label="An incident goes to an orchestrator agent, which delegates to observability, knowledge, code and Jira agents. Their findings produce a root cause hypothesis and recommended actions, which wait for human approval."
      >
        <FlowNode label="Incident" detail="alert · ticket" />
        <FlowConnector />
        <FlowNode label="Orchestrator Agent" detail="plans · delegates · merges" tone="accent" />
        <ul className="relative ml-6 mt-0 border-l border-border-strong pl-5 pt-3 sm:ml-10">
          {agents.map((agent, index) => (
            <li key={agent.label} className="relative pb-2.5 last:pb-0">
              <span aria-hidden className="absolute -left-5 top-1/2 h-px w-5 bg-border-strong" />
              <span
                aria-hidden
                className="node-pulse absolute -left-[22.5px] top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-accent"
                style={{ ["--flow-delay" as string]: `${index * 0.4}s` }}
              />
              <FlowNode label={agent.label} detail={agent.detail} className="text-left" />
            </li>
          ))}
        </ul>
        <FlowConnector delay={0.6} className="mt-1" />
        <FlowNode label="Root Cause Hypothesis" />
        <FlowConnector delay={1} />
        <FlowNode label="Recommended Actions" />
        <FlowConnector delay={1.4} />
        <FlowNode label="Human Approval" detail="nothing runs without sign-off" tone="muted" />
      </div>
    </DiagramFrame>
  );
}

/** Bill Scanner: device capabilities, offline storage and release pipeline. */
export function MobileArchitecture() {
  return (
    <DiagramFrame title="bill scanner · app + delivery">
      <div
        role="img"
        aria-label="Camera and file access through Capacitor plugins feed an Ionic and Angular app that stores data offline in SQLite. GitHub Actions and Ionic Appflow build and release to the Apple App Store and Google Play Store."
      >
        <NodeRow cols={2}>
          <FlowNode label="Camera" detail="Capacitor" />
          <FlowNode label="File access" detail="Capacitor" />
        </NodeRow>
        <FlowFan count={2} direction="in" />
        <FlowNode label="Ionic + Angular app" detail="cross-platform UI" tone="accent" />
        <FlowConnector delay={0.5} />
        <FlowNode label="SQLite" detail="offline-first storage" />
        <div aria-hidden className="my-5 h-px bg-border" />
        <FlowNode label="GitHub Actions + Ionic Appflow" detail="automated build & release" tone="muted" />
        <FlowFan count={2} delay={1} />
        <NodeRow cols={2}>
          <FlowNode label="App Store" detail="iOS" />
          <FlowNode label="Google Play" detail="Android" />
        </NodeRow>
      </div>
    </DiagramFrame>
  );
}

/** Verizon Home platform: the resilient, cached read path. */
export function ReadPathArchitecture() {
  const policies = ["Retry", "Circuit breaker", "Timeout", "Fallback"];
  return (
    <DiagramFrame
      title="read path · resilience + caching"
      caption="Illustrative request path: outbound calls run through resilience policies; reads are served from cache before the database."
    >
      <div
        role="img"
        aria-label="An API request passes through retry, circuit breaker, timeout and fallback policies, then reads from an in-memory cache, then Redis, and only then from MongoDB or SQL Server."
      >
        <FlowNode label="API request" detail="router · devices · Wi-Fi" />
        <FlowConnector />
        <div className="rounded-md border border-accent-line bg-accent-soft p-3">
          <div className="text-center text-[0.8125rem] font-medium">Resilience pipeline</div>
          <div className="mt-0.5 text-center font-mono text-[0.6875rem] text-fg-subtle">Polly · .NET 8 resilience</div>
          <ul className="mt-3 grid grid-cols-2 gap-1.5 sm:grid-cols-4">
            {policies.map((policy) => (
              <li
                key={policy}
                className="rounded-sm border border-border bg-bg-elevated px-2 py-1.5 text-center font-mono text-[0.6875rem] text-fg-muted"
              >
                {policy}
              </li>
            ))}
          </ul>
        </div>
        <FlowConnector delay={0.5} />
        <NodeRow cols={2}>
          <FlowNode label="L1 cache" detail="in-memory" />
          <FlowNode label="L2 cache" detail="Redis" />
        </NodeRow>
        <FlowConnector delay={1} />
        <FlowNode label="Database" detail="MongoDB · SQL Server" tone="muted" />
        <div className="mt-5 grid grid-cols-3 gap-2 text-center">
          {[
            ["50%", "fewer disruptions"],
            ["60%", "lower DB load"],
            ["40%", "faster at peak"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-md border border-border py-3">
              <div className="text-lg font-semibold tracking-tight text-accent">{value}</div>
              <div className="mt-0.5 text-[0.6875rem] leading-tight text-fg-subtle">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </DiagramFrame>
  );
}
