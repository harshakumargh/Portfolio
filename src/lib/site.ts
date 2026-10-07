/**
 * Site-wide configuration. Override the canonical URL per environment with
 * NEXT_PUBLIC_SITE_URL (e.g. a Vercel preview URL).
 */
export const siteConfig = {
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.harshakumargh.com").replace(/\/$/, ""),
  title: "Harsha Kumar | Senior Software Engineer – .NET, Distributed Systems & AI",
  shortTitle: "Harsha Kumar",
  description:
    "Senior Software Engineer with 12 years of experience building scalable .NET platforms, distributed systems, cloud-native applications and AI-powered software.",
  resumePath: "/Harsha_Kumar_Resume.pdf",
  resumeFileName: "Harsha_Kumar_Resume.pdf",
} as const;
