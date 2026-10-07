import { ButtonLink } from "@/components/Button";
import { MobileArchitecture, ReadPathArchitecture, TriageArchitecture } from "@/components/diagrams/Diagrams";
import { ArrowRightIcon, ArrowUpRightIcon } from "@/components/Icons";
import { Section } from "@/components/Section";
import { TagList } from "@/components/Tag";
import { projects, type Project } from "@/data/projects";
import { cn } from "@/lib/cn";

const visuals: Record<Project["visual"], () => React.JSX.Element> = {
  platform: ReadPathArchitecture,
  triage: TriageArchitecture,
  mobile: MobileArchitecture,
};

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured Projects"
      title="Selected case studies."
      intro="Professional platform work and personal AI engineering, labelled clearly as each."
    >
      <div className="space-y-24 sm:space-y-32">
        {projects.map((project, index) => {
          const Visual = visuals[project.visual];
          const reversed = index % 2 === 1;
          return (
            <article
              key={project.id}
              id={project.id}
              aria-labelledby={`${project.id}-title`}
              className="grid scroll-mt-24 items-start gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <div className={cn("lg:pt-4", reversed && "lg:order-2")} data-reveal>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <span className="type-label">
                    {String(index + 1).padStart(2, "0")} · {project.category}
                  </span>
                </div>
                <h3 id={`${project.id}-title`} className="type-h2 mt-4 text-[clamp(1.75rem,1.4rem+1.4vw,2.5rem)]">
                  {project.title}
                </h3>
                <p
                  className={cn(
                    "mt-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs",
                    project.kind === "Personal"
                      ? "border-dashed border-accent-line text-accent"
                      : "border-border text-fg-muted",
                  )}
                >
                  <span className="font-semibold">{project.kind}</span>
                  <span aria-hidden>·</span>
                  {project.kindNote}
                </p>
                <p className="type-body mt-6">{project.summary}</p>

                <ul className="mt-6 space-y-2.5">
                  {project.focus.map((point) => (
                    <li key={point} className="flex gap-3 text-[0.9375rem] leading-relaxed text-fg">
                      <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>

                <TagList items={project.stack} label={`${project.title} stack`} className="mt-8" />

                {project.links.length > 0 && (
                  <div className="mt-8 flex flex-wrap gap-3">
                    {project.links.map((link) => {
                      const external = link.href.startsWith("http");
                      return (
                        <ButtonLink key={link.href} href={link.href} external={external} size="sm">
                          {link.label}
                          {external ? <ArrowUpRightIcon width={15} height={15} /> : <ArrowRightIcon width={15} height={15} />}
                          {external && <span className="sr-only">(opens in a new tab)</span>}
                        </ButtonLink>
                      );
                    })}
                  </div>
                )}
              </div>

              <div className={cn(reversed && "lg:order-1")} data-reveal>
                <Visual />
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
