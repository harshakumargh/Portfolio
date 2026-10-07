export const engineeringPrinciples: { title: string; body: string }[] = [
  {
    title: "Design for failure",
    body: "Distributed systems fail. Build retry, timeout, circuit-breaker and fallback strategies intentionally.",
  },
  {
    title: "Measure before optimizing",
    body: "Use telemetry, profiling and observability to find actual bottlenecks.",
  },
  {
    title: "Build for scale",
    body: "Design APIs, caching, messaging and data-access patterns with future load in mind.",
  },
  {
    title: "Keep systems maintainable",
    body: "Prefer clear boundaries, clean architecture, reusable components and pragmatic engineering.",
  },
];
