import type { CSSProperties } from "react";
import { PlatformArchitecture } from "@/components/diagrams/Diagrams";
import { Section } from "@/components/Section";
import { TagList } from "@/components/Tag";
import { featuredExperience as fx } from "@/data/experience";

export function FeaturedExperience() {
  return (
    <Section
      id="experience"
      eyebrow="Featured Experience"
      title={fx.name}
      intro={
        <>
          <span className="text-fg">{fx.role}</span> · {fx.employer} (client: {fx.client}) · {fx.period}
          <span className="mt-4 block">{fx.summary}</span>
        </>
      }
    >
      <div className="grid gap-14 lg:grid-cols-[1fr_minmax(0,28rem)] lg:gap-16">
        <ol className="relative">
          {fx.chapters.map((chapter, index) => (
            <li
              key={chapter.id}
              data-reveal
              className="grid gap-3 border-t border-border py-8 first:border-t-0 first:pt-0 sm:grid-cols-[9rem_1fr] sm:gap-8"
            >
              <h3 className="flex items-baseline gap-3 sm:block">
                <span className="type-label block">{String(index + 1).padStart(2, "0")}</span>
                <span className="text-base font-semibold tracking-tight sm:mt-2 sm:block">{chapter.title}</span>
              </h3>
              <div>
                <p className="type-body">{chapter.body}</p>
                {chapter.points && (
                  <ul className="mt-4 space-y-2">
                    {chapter.points.map((point) => (
                      <li key={point} className="flex gap-3 text-[0.9375rem] leading-relaxed text-fg">
                        <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>

        <div className="lg:sticky lg:top-24 lg:self-start" data-reveal>
          <PlatformArchitecture />
          <TagList items={fx.stack} label="Technologies used on the platform" className="mt-5" />
        </div>
      </div>

      <div className="mt-20 sm:mt-24">
        <h3 className="type-label" data-reveal>
          Engineering highlights
        </h3>
        <ul className="mt-6 grid border-t border-border md:grid-cols-2">
          {fx.highlights.map((highlight, index) => (
            <li
              key={highlight.title}
              data-reveal
              style={{ "--reveal-delay": `${(index % 2) * 90}ms` } as CSSProperties}
              className="flex flex-col gap-5 border-b border-border py-8 md:odd:border-r md:odd:pr-10 md:even:pl-10"
            >
              <div>
                <h4 className="type-h3">{highlight.title}</h4>
                <p className="type-body mt-3">{highlight.summary}</p>
              </div>
              {highlight.results.length > 0 && (
                <dl className="flex flex-wrap gap-x-10 gap-y-4">
                  {highlight.results.map((result) => (
                    <div key={result.label}>
                      <dt className="sr-only">Result</dt>
                      <dd className="text-3xl font-semibold tracking-[-0.03em] text-accent">{result.value}</dd>
                      <dd className="mt-1 text-sm text-fg-muted">{result.label}</dd>
                    </div>
                  ))}
                </dl>
              )}
              <TagList items={highlight.tags} label={`${highlight.title} technologies`} className="mt-auto" />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
