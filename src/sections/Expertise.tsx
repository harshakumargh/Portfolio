import type { CSSProperties } from "react";
import { Section } from "@/components/Section";
import { expertiseDomains, supportingStack } from "@/data/expertise";

export function Expertise() {
  return (
    <Section
      id="engineering"
      eyebrow="Engineering Expertise"
      title="Depth across the stack that keeps production running."
      intro="Grouped by the problems they solve rather than listed as keywords."
    >
      <ul className="border-t border-border">
        {expertiseDomains.map((domain, index) => (
          <li
            key={domain.id}
            data-reveal
            style={{ "--reveal-delay": `${index * 60}ms` } as CSSProperties}
            className="group grid gap-4 border-b border-border py-8 transition-colors md:grid-cols-[3rem_minmax(0,16rem)_1fr] md:gap-8 md:py-10"
          >
            <span className="type-label pt-1.5 transition-colors group-hover:text-accent">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="type-h3">{domain.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-subtle">{domain.summary}</p>
            </div>
            <ul aria-label={`${domain.title} technologies`} className="flex flex-wrap content-start gap-x-2 gap-y-2.5 md:pt-1">
              {domain.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border px-3 py-1.5 text-sm text-fg-muted transition-colors hover:border-accent-line hover:text-fg"
                >
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <dl className="mt-10 grid gap-6 text-sm sm:grid-cols-3" data-reveal>
        {Object.entries({
          Languages: supportingStack.languages,
          Frontend: supportingStack.frontend,
          Data: supportingStack.data,
        }).map(([label, items]) => (
          <div key={label}>
            <dt className="type-label">{label}</dt>
            <dd className="mt-2 leading-relaxed text-fg-muted">{items.join(" · ")}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
