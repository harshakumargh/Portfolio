import type { CSSProperties } from "react";
import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";
import { HeroArchitecture } from "@/components/diagrams/Diagrams";
import { ArrowRightIcon, DownloadIcon, GitHubIcon, LinkedInIcon, MapPinIcon } from "@/components/Icons";
import { profile } from "@/data/profile";
import { siteConfig } from "@/lib/site";

const delay = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

const proofPoints = ["C# / .NET 8", "Azure & AWS", "Distributed systems", "LLMs · RAG · Agents"];

export function Hero() {
  return (
    <section id="home" aria-labelledby="home-heading" className="relative pb-12 pt-28 sm:pb-16 sm:pt-36 lg:pt-36">
      <Container className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <p className="hero-enter flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs text-fg-muted">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5">
              <span aria-hidden className="node-pulse size-1.5 rounded-full bg-accent" />
              {profile.name} · {profile.headline}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPinIcon width={14} height={14} />
              {profile.locationShort}
            </span>
          </p>

          <h1 id="home-heading" className="type-display mt-8 max-w-[20ch]">
            Building resilient distributed systems and{" "}
            <span className="bg-linear-to-r from-fg via-accent-strong to-accent bg-clip-text text-transparent">
              intelligent software.
            </span>
          </h1>

          <p className="type-lead hero-enter mt-7 max-w-[58ch]" style={delay(80)}>
            Senior Software Engineer with {profile.yearsOfExperience} years of experience designing cloud-native platforms,
            high-performance APIs, distributed systems, and AI-powered applications using .NET, Azure, AWS and modern LLM
            technologies.
          </p>

          <ul aria-label="Core strengths" className="hero-enter mt-7 flex flex-wrap gap-x-5 gap-y-2" style={delay(140)}>
            {proofPoints.map((point) => (
              <li key={point} className="flex items-center gap-2 font-mono text-[0.8125rem] text-fg-muted">
                <span aria-hidden className="h-px w-3 bg-accent" />
                {point}
              </li>
            ))}
          </ul>

          <div className="hero-enter mt-10 flex flex-wrap items-center gap-3" style={delay(200)}>
            <ButtonLink href="#experience" variant="primary">
              View My Work
              <ArrowRightIcon className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </ButtonLink>
            <ButtonLink href={siteConfig.resumePath} download={siteConfig.resumeFileName}>
              <DownloadIcon />
              Download Resume
            </ButtonLink>
          </div>

          <div className="hero-enter mt-6 flex items-center gap-1" style={delay(260)}>
            <ButtonLink href={profile.links.github} external variant="ghost" size="sm" className="-ml-3.5">
              <GitHubIcon width={16} height={16} />
              GitHub
            </ButtonLink>
            <ButtonLink href={profile.links.linkedin} external variant="ghost" size="sm">
              <LinkedInIcon width={16} height={16} />
              LinkedIn
            </ButtonLink>
          </div>
        </div>

        <div className="hero-enter" style={delay(300)}>
          <HeroArchitecture />
        </div>
      </Container>
    </section>
  );
}
