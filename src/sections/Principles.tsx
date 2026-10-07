import type { CSSProperties } from "react";
import { Section } from "@/components/Section";
import { engineeringPrinciples } from "@/data/principles";

export function Principles() {
  return (
    <Section id="approach" eyebrow="System Design" title="How I approach engineering.">
      <ol className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
        {engineeringPrinciples.map((principle, index) => (
          <li
            key={principle.title}
            data-reveal
            style={{ "--reveal-delay": `${index * 80}ms` } as CSSProperties}
            className="group relative bg-bg p-8 transition-colors hover:bg-bg-elevated sm:p-10"
          >
            <span className="type-label transition-colors group-hover:text-accent">
              Principle {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="type-h3 mt-6">{principle.title}</h3>
            <p className="type-body mt-3 max-w-md">{principle.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
