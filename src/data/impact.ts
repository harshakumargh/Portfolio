export type ImpactMetric = {
  value: number;
  /** Rendered after the number, e.g. "%" or "+". */
  suffix: string;
  label: string;
  detail: string;
};

/**
 * Every metric here comes from the resume. Do not add numbers that are not
 * backed by it.
 */
export const impactMetrics: ImpactMetric[] = [
  {
    value: 12,
    suffix: "+",
    label: "Years engineering experience",
    detail: "Telecom, banking, financial services, performance engineering and enterprise platforms.",
  },
  {
    value: 50,
    suffix: "%",
    label: "Fewer production disruptions",
    detail: "Retry, circuit-breaker, timeout and fallback policies with Polly and the .NET 8 resilience engine.",
  },
  {
    value: 60,
    suffix: "%",
    label: "Lower database load",
    detail: "In-memory and Redis distributed caching in front of the database.",
  },
  {
    value: 40,
    suffix: "%",
    label: "Faster API responses",
    detail: "Under peak load conditions, delivered by the same distributed caching layer.",
  },
  {
    value: 25,
    suffix: "%",
    label: "Faster integration layer",
    detail: "A high-performance wrapper library around downstream BCS services.",
  },
];
