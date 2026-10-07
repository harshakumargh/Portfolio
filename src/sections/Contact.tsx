import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from "@/components/Icons";
import { profile } from "@/data/profile";
import { siteConfig } from "@/lib/site";

const stripProtocol = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

export function Contact() {
  const details = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { label: "LinkedIn", value: stripProtocol(profile.links.linkedin), href: profile.links.linkedin, external: true },
    { label: "GitHub", value: stripProtocol(profile.links.github), href: profile.links.github, external: true },
    { label: "Location", value: `${profile.locationShort} · ${profile.relocation}` },
  ];

  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative py-24 sm:py-32">
      <Container>
        <div
          className="relative overflow-hidden rounded-lg border border-border bg-surface px-6 py-14 sm:px-12 sm:py-20"
          data-reveal
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-[radial-gradient(closest-side,var(--glow),transparent)]"
          />
          <p className="type-eyebrow">Contact</p>
          <h2 id="contact-heading" className="type-display mt-6 max-w-[16ch] text-[clamp(2.25rem,1.5rem+3.2vw,3.75rem)]">
            Let&apos;s build something that scales.
          </h2>
          <p className="type-lead mt-6 max-w-2xl">
            Interested in discussing Senior, Lead or Staff Software Engineering opportunities involving distributed systems,
            cloud platforms or AI engineering.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href={`mailto:${profile.email}`} variant="primary">
              <MailIcon />
              Email Me
            </ButtonLink>
            <ButtonLink href={profile.links.linkedin} external>
              <LinkedInIcon width={16} height={16} />
              LinkedIn
            </ButtonLink>
            <ButtonLink href={profile.links.github} external>
              <GitHubIcon width={16} height={16} />
              GitHub
            </ButtonLink>
            <ButtonLink href={siteConfig.resumePath} download={siteConfig.resumeFileName}>
              <DownloadIcon />
              Download Resume
            </ButtonLink>
          </div>

          <dl className="mt-14 grid gap-x-10 gap-y-6 border-t border-border pt-10 sm:grid-cols-2">
            {details.map((detail) => (
              <div key={detail.label}>
                <dt className="type-label">{detail.label}</dt>
                <dd className="mt-2 break-words text-[0.9375rem] text-fg">
                  {detail.href ? (
                    <a
                      href={detail.href}
                      {...(detail.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="underline decoration-border-strong underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    detail.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
