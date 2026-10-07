import { Section } from "@/components/Section";
import { profile } from "@/data/profile";

const facts = [
  { label: "Experience", value: `${profile.yearsOfExperience} years` },
  { label: "Based in", value: profile.locationShort },
  { label: "Industries", value: "Telecom, banking, financial services, enterprise" },
  { label: "Education", value: `${profile.education.degree}, ${profile.education.school}` },
];

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Production engineering, now meeting AI.">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
        <div className="space-y-6 text-[1.0625rem] leading-[1.75] text-fg-muted" data-reveal>
          <p>
            I&apos;ve spent the past {profile.yearsOfExperience} years building software across telecommunications, banking,
            financial services, performance engineering and enterprise platforms.
          </p>
          <p>
            My background started with .NET application development and evolved into distributed systems, cloud
            architecture, performance engineering and technical leadership: leading backend development, mentoring
            engineers, driving architectural decisions and setting the bar in code review.
          </p>
          <p className="text-fg">
            Today I&apos;m particularly interested in the intersection of traditional distributed systems and AI: building
            software where LLMs and agents operate safely within well-designed production architectures.
          </p>
        </div>

        <dl className="divide-y divide-border self-start border-y border-border" data-reveal>
          {facts.map((fact) => (
            <div key={fact.label} className="grid grid-cols-[7rem_1fr] gap-4 py-4">
              <dt className="type-label pt-1">{fact.label}</dt>
              <dd className="text-[0.9375rem] leading-relaxed text-fg">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
