import { ArrowRightIcon } from "@/components/Icons";
import { DiagramFrame, FlowStack } from "@/components/diagrams/Flow";
import { Section } from "@/components/Section";
import { aiPrinciples, aiProjects, aiTechnologies, agentFlow, ragFlow } from "@/data/ai";

export function AIEngineering() {
  return (
    <Section
      id="ai"
      eyebrow="AI Engineering"
      title="Building the next generation of agentic software."
      intro={
        <>
          I combine traditional software engineering with modern AI architecture: LLM applications, retrieval-augmented
          generation and multi-agent workflows, held to the same standards of reliability, observability and security as
          any production service. Agents are only as dependable as the systems around them.
        </>
      }
    >
      <div className="grid gap-6 md:grid-cols-2" data-reveal>
        <DiagramFrame title="agentic flow" caption="Agents act through bounded, permissioned tools rather than direct system access.">
          <FlowStack steps={agentFlow} accentIndex={2} label="Agentic application flow" />
        </DiagramFrame>
        <DiagramFrame title="retrieval flow" caption="Retrieval grounds model output in an organization's own knowledge.">
          <FlowStack steps={ragFlow} accentIndex={3} label="Retrieval-augmented generation flow" baseDelay={0.6} />
        </DiagramFrame>
      </div>

      <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div data-reveal>
          <h3 className="type-label">How I build with AI</h3>
          <ul className="mt-6 space-y-6">
            {aiPrinciples.map((principle) => (
              <li key={principle.title} className="border-l border-accent-line pl-5">
                <h4 className="font-semibold tracking-tight">{principle.title}</h4>
                <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-fg-muted">{principle.body}</p>
              </li>
            ))}
          </ul>
        </div>

        <div data-reveal>
          <h3 className="type-label">Technologies</h3>
          <ul aria-label="AI technologies" className="mt-6 flex flex-wrap gap-2">
            {aiTechnologies.map((tech) => (
              <li key={tech} className="rounded-full border border-border px-3 py-1.5 text-sm text-fg-muted">
                {tech}
              </li>
            ))}
          </ul>

          <h3 className="type-label mt-12">AI projects</h3>
          <ul className="mt-4 divide-y divide-border border-y border-border">
            {aiProjects.map((project) => (
              <li key={project.title}>
                <a href={project.href} className="group flex items-start justify-between gap-6 py-5">
                  <span>
                    <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="font-semibold tracking-tight transition-colors group-hover:text-accent">
                        {project.title}
                      </span>
                      <span className="rounded-sm border border-border px-1.5 py-0.5 font-mono text-[0.6875rem] text-fg-subtle">
                        {project.status}
                      </span>
                    </span>
                    <span className="mt-1.5 block text-sm leading-relaxed text-fg-muted">{project.summary}</span>
                  </span>
                  <ArrowRightIcon className="mt-1 shrink-0 text-fg-subtle transition-transform group-hover:translate-x-0.5 group-hover:text-accent" />
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-fg-subtle">More AI engineering work will be added here as it is published.</p>
        </div>
      </div>
    </Section>
  );
}
