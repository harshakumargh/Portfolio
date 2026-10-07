import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/cn";

/*
 * Diagram primitives. Diagrams are built from HTML rather than fixed-size SVG
 * so they reflow on small screens and keep text crisp and selectable.
 * Flow animation is pure CSS (see globals.css) and stops under reduced motion.
 */

type Tone = "default" | "accent" | "muted";

const toneClasses: Record<Tone, string> = {
  default: "border-border-strong bg-bg-elevated",
  accent: "border-accent-line bg-accent-soft",
  muted: "border-dashed border-border-strong bg-transparent",
};

export function FlowNode({
  label,
  detail,
  tone = "default",
  className,
  children,
}: {
  label: ReactNode;
  detail?: ReactNode;
  tone?: Tone;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={cn("relative rounded-md border px-3 py-2.5 text-center", toneClasses[tone], className)}>
      <div className="text-[0.8125rem] font-medium leading-snug text-fg">{label}</div>
      {detail && <div className="mt-0.5 font-mono text-[0.6875rem] leading-snug text-fg-subtle">{detail}</div>}
      {children}
    </div>
  );
}

function delayStyle(delay: number): CSSProperties {
  return { "--flow-delay": `${delay}s` } as CSSProperties;
}

/** Vertical connector with a travelling pulse. */
export function FlowConnector({ delay = 0, className }: { delay?: number; className?: string }) {
  return (
    <div aria-hidden className={cn("flex justify-center", className)}>
      <div className="flow-line relative h-6 w-px" style={delayStyle(delay)} />
    </div>
  );
}

/**
 * Connector from one node to `count` evenly spaced columns (fan-out), or from
 * `count` columns back to one (fan-in). Column centres match a CSS grid with
 * the same number of equal columns.
 */
export function FlowFan({
  count,
  direction = "out",
  delay = 0,
}: {
  count: number;
  direction?: "out" | "in";
  delay?: number;
}) {
  const centres = Array.from({ length: count }, (_, i) => ((i + 0.5) / count) * 100);
  const first = centres[0] ?? 50;
  const last = centres[centres.length - 1] ?? 50;
  const single = direction === "out" ? "top-0" : "bottom-0";
  const many = direction === "out" ? "bottom-0" : "top-0";
  return (
    <div aria-hidden className="relative h-8">
      <div className={cn("flow-line absolute left-1/2 h-1/2 w-px -translate-x-1/2", single)} style={delayStyle(delay)} />
      <div className="absolute top-1/2 h-px bg-border-strong" style={{ left: `${first}%`, right: `${100 - last}%` }} />
      {centres.map((centre, i) => (
        <div
          key={centre}
          className={cn("flow-line absolute h-1/2 w-px -translate-x-1/2", many)}
          style={{ left: `${centre}%`, ...delayStyle(delay + 0.35 + i * 0.15) }}
        />
      ))}
    </div>
  );
}

/** A simple top-to-bottom flow of labelled steps. */
export function FlowStack({
  steps,
  accentIndex,
  label,
  baseDelay = 0,
}: {
  steps: { label: string; detail?: string }[];
  accentIndex?: number;
  label: string;
  baseDelay?: number;
}) {
  return (
    <ol aria-label={label} className="flex flex-col">
      {steps.map((step, index) => (
        <li key={step.label}>
          {index > 0 && <FlowConnector delay={baseDelay + index * 0.45} />}
          <FlowNode label={step.label} detail={step.detail} tone={index === accentIndex ? "accent" : "default"} />
        </li>
      ))}
    </ol>
  );
}

/** Frame that holds a diagram: subtle glass surface, caption and title. */
export function DiagramFrame({
  title,
  caption,
  children,
  className,
}: {
  title: string;
  caption?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "relative rounded-lg border border-border bg-surface p-4 shadow-[inset_0_1px_0_0_var(--surface-strong)] sm:p-6",
        className,
      )}
    >
      <div className="mb-5 flex items-center justify-between gap-3">
        <span className="type-label">{title}</span>
        <span aria-hidden className="flex gap-1">
          <span className="size-1.5 rounded-full bg-border-strong" />
          <span className="size-1.5 rounded-full bg-border-strong" />
          <span className="node-pulse size-1.5 rounded-full bg-accent" />
        </span>
      </div>
      {children}
      {caption && <figcaption className="mt-5 text-xs leading-relaxed text-fg-subtle">{caption}</figcaption>}
    </figure>
  );
}
