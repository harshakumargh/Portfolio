import type { CSSProperties } from "react";
import { Section } from "@/components/Section";
import { careerTimeline } from "@/data/experience";

export function Journey() {
  return (
    <Section
      id="journey"
      eyebrow="Career Journey"
      title="Twelve years, six companies, one throughline."
      intro="From enterprise .NET applications to distributed cloud platforms, performance engineering and AI."
    >
      <div className="relative">
        <span aria-hidden className="absolute bottom-2 left-[5px] top-2 w-px bg-linear-to-b from-accent via-border-strong to-transparent md:left-[calc(12rem+5px)]" />
        <ol>
        {careerTimeline.map((entry, index) => (
          <li
            key={entry.company + entry.period}
            data-reveal
            style={{ "--reveal-delay": `${index * 70}ms` } as CSSProperties}
            className="relative grid gap-2 pb-12 pl-8 last:pb-0 md:grid-cols-[12rem_1fr] md:gap-0 md:pl-0"
          >
            <span
              aria-hidden
              className={
                "absolute left-0 top-1.5 size-[11px] rounded-full border-2 md:left-48 " +
                (index === 0 ? "border-accent bg-accent" : "border-border-strong bg-bg")
              }
            />
            <p className="font-mono text-xs leading-6 text-fg-subtle md:pr-8 md:text-right">{entry.period}</p>
            <div className="md:pl-10">
              <h3 className="text-lg font-semibold tracking-tight">
                {entry.company}
                {entry.context && <span className="font-normal text-fg-subtle"> · {entry.context}</span>}
              </h3>
              <p className="mt-0.5 text-[0.9375rem] text-fg-muted">{entry.role}</p>
              <p className="mt-3 max-w-2xl text-[0.9375rem] leading-relaxed text-fg-muted">{entry.summary}</p>
              <p className="mt-3 font-mono text-xs text-fg-subtle">{entry.stack.join(" · ")}</p>
            </div>
          </li>
        ))}
        </ol>
      </div>
    </Section>
  );
}
