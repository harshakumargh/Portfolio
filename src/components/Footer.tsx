import { profile } from "@/data/profile";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col gap-4 text-sm text-fg-subtle sm:flex-row sm:items-center sm:justify-between">
        <p>
          {profile.name} · {profile.headline} · {profile.locationShort}
        </p>
        <ul className="flex gap-5">
          <li>
            <a href={`mailto:${profile.email}`} className="transition-colors hover:text-fg">
              Email
            </a>
          </li>
          <li>
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-fg">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-fg">
              GitHub
            </a>
          </li>
          <li>
            <a href="#home" className="transition-colors hover:text-fg">
              Back to top
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
}
