"use client";

import { useEffect, useRef, useState } from "react";
import { navItems, profile } from "@/data/profile";
import { cn } from "@/lib/cn";
import { ButtonLink } from "./Button";
import { CloseIcon, GitHubIcon, LinkedInIcon, MenuIcon } from "./Icons";
import { ThemeToggle } from "./ThemeToggle";

const iconLink =
  "inline-flex size-9 items-center justify-center rounded-md text-fg-muted transition-colors hover:bg-surface-strong hover:text-fg";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Header surface appears once the page scrolls.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll spy: the section crossing the upper third of the viewport is active.
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-30% 0px -65% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Mobile menu: Escape closes it, and the page behind it doesn't scroll.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled || open
          ? "border-b border-border bg-bg/75 backdrop-blur-xl backdrop-saturate-150"
          : "border-b border-transparent",
      )}
    >
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#home" className="group flex items-center gap-2.5 rounded-md">
          <span
            aria-hidden
            className="flex size-8 items-center justify-center rounded-md border border-border-strong bg-surface font-mono text-[0.75rem] font-medium tracking-tight text-fg transition-colors group-hover:border-accent-line"
          >
            {profile.initials}
          </span>
          <span className="sr-only text-[0.9375rem] font-medium tracking-tight sm:not-sr-only">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={active === item.id ? "location" : undefined}
                className={cn(
                  "relative rounded-md px-3 py-2 text-sm transition-colors",
                  active === item.id ? "text-fg" : "text-fg-muted hover:text-fg",
                )}
              >
                {item.label}
                <span
                  aria-hidden
                  className={cn(
                    "absolute inset-x-3 -bottom-px h-px bg-accent transition-opacity duration-300",
                    active === item.id ? "opacity-100" : "opacity-0",
                  )}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className={iconLink}>
            <GitHubIcon />
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className={iconLink}>
            <LinkedInIcon />
          </a>
          <ThemeToggle />
          <ButtonLink href={profile.links.resume} external variant="primary" size="sm" className="ml-1.5 max-[359px]:hidden">
            Resume
          </ButtonLink>
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className={cn(iconLink, "lg:hidden")}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-border bg-bg/95 backdrop-blur-xl lg:hidden"
      >
        <div className="mx-auto flex max-w-6xl flex-col px-5 pb-10 pt-4 sm:px-8">
          <ul className="flex flex-col">
            {navItems.map((item, index) => (
              <li key={item.id} className="border-b border-border">
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={active === item.id ? "location" : undefined}
                  className="flex items-baseline gap-4 py-4 text-xl font-medium tracking-tight"
                >
                  <span className="type-label w-6">{String(index + 1).padStart(2, "0")}</span>
                  <span className={active === item.id ? "text-fg" : "text-fg-muted"}>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={profile.links.resume} external variant="primary">
              Resume
            </ButtonLink>
            <ButtonLink href={profile.links.github} external>
              <GitHubIcon /> GitHub
            </ButtonLink>
            <ButtonLink href={profile.links.linkedin} external>
              <LinkedInIcon /> LinkedIn
            </ButtonLink>
          </div>
        </div>
      </div>
    </header>
  );
}
