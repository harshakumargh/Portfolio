import { profile } from "@/data/profile";
import { siteConfig } from "./site";

/** schema.org Person + WebSite graph for search engines. */
export function buildStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#person`,
        name: profile.name,
        jobTitle: profile.headline,
        description: siteConfig.description,
        url: siteConfig.url,
        email: `mailto:${profile.email}`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dallas",
          addressRegion: "TX",
          addressCountry: "US",
        },
        sameAs: [profile.links.linkedin, profile.links.github],
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: profile.education.school,
        },
        knowsAbout: [
          "C#",
          ".NET",
          "ASP.NET Core",
          "Distributed Systems",
          "Microservices",
          "Microsoft Azure",
          "Amazon Web Services",
          "Performance Engineering",
          "Retrieval-Augmented Generation",
          "Agentic AI",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.shortTitle,
        description: siteConfig.description,
        publisher: { "@id": `${siteConfig.url}/#person` },
      },
    ],
  };
}
