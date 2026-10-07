import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
  /** Adds a hairline above the section to separate it from the previous one. */
  divider?: boolean;
};

/**
 * Standard section shell: landmark, anchor, eyebrow + h2 heading and the
 * vertical spacing scale (py-24 → py-32).
 */
export function Section({ id, eyebrow, title, intro, children, className, divider = true }: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} aria-labelledby={headingId} className={cn("relative py-24 sm:py-32", className)}>
      {divider && (
        <div aria-hidden className="absolute inset-x-0 top-0">
          <Container>
            <div className="h-px bg-linear-to-r from-transparent via-border-strong to-transparent" />
          </Container>
        </div>
      )}
      <Container>
        <header className="max-w-3xl" data-reveal>
          <p className="type-eyebrow">{eyebrow}</p>
          <h2 id={headingId} className="type-h2 mt-5">
            {title}
          </h2>
          {intro && <div className="type-lead mt-6 max-w-2xl">{intro}</div>}
        </header>
        <div className="mt-14 sm:mt-20">{children}</div>
      </Container>
    </section>
  );
}
