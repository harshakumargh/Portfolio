# Harsha Kumar · Portfolio

Personal portfolio for Harsha Kumar, Senior Software Engineer (distributed systems,
cloud, AI and agentic systems). Single-page site built with Next.js, TypeScript and
Tailwind CSS, statically prerendered and ready for Vercel.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack, static prerendering)
- React 19 and TypeScript
- Tailwind CSS 4 (design tokens in `src/app/globals.css`)
- `next/font` (Geist Sans and Geist Mono)
- No animation library: reveals, counters and diagram pulses are CSS plus two
  small client components, which keeps JavaScript minimal

## Getting started

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build (also generates route types)
npm run start      # serve the production build
npm run lint       # ESLint (next/core-web-vitals + TypeScript rules)
npm run typecheck  # tsc --noEmit (run after a build or `npx next typegen`)
```

## Project structure

```
src/
  app/          layout, page, metadata routes (sitemap, robots, OG image, icon), global CSS
  sections/     one component per page section (Hero, Impact, FeaturedExperience, …)
  components/   reusable UI: Navbar, Section, Container, Button, Tag, CountUp, ThemeToggle
    diagrams/   architecture diagram primitives (Flow.tsx) and the diagrams themselves
  data/         all content as typed TypeScript objects
  lib/          site config, theme helpers, structured data, cn()
public/
  Harsha_Kumar_Resume.pdf
```

The design system (color, type, spacing, radii, motion, responsive rules) is
documented in [DESIGN.md](./DESIGN.md).

## Editing content

All copy lives in `src/data`, so most updates never touch a component:

| File | What it holds |
| --- | --- |
| `profile.ts` | Name, title, location, email, GitHub/LinkedIn URLs, education, nav items |
| `impact.ts` | Headline metrics in the Engineering Impact strip |
| `experience.ts` | Verizon case study chapters and highlights, career timeline |
| `expertise.ts` | Engineering domains and supporting stack |
| `ai.ts` | AI architecture flows, technologies, principles and the AI projects list |
| `projects.ts` | Featured project case studies (each labelled Professional or Personal) |
| `principles.ts` | "How I approach engineering" |

To add an AI project, append an entry to `aiProjects` in `src/data/ai.ts`; for a full
case study, add it to `projects.ts` as well (set `kind: "Personal"` for personal work).

**Content rule:** every employer, date, technology and metric on the site comes from
the resume. Don't add metrics or claims the resume doesn't support, and keep personal
projects labelled as personal.

### Resume

The Resume and Download Resume buttons serve `public/Harsha_Kumar_Resume.pdf`. To
update it, replace that file and keep the same name (or change `resumePath` and
`resumeFileName` in `src/lib/site.ts`).

## SEO

- Title, description, Open Graph and Twitter metadata in `src/app/layout.tsx`
- Generated Open Graph image: `src/app/opengraph-image.tsx`
- `sitemap.xml` and `robots.txt` from `src/app/sitemap.ts` and `src/app/robots.ts`
- schema.org `Person` + `WebSite` JSON-LD from `src/lib/structured-data.ts`

The canonical URL defaults to `https://www.harshakumargh.com` (the portfolio URL on the
resume). Override it per environment with `NEXT_PUBLIC_SITE_URL`.

## Deploying to Vercel

1. Push this repository to GitHub.
2. In Vercel, choose **Add New → Project** and import `harshakumargh/Portfolio`.
3. Vercel detects Next.js automatically. Keep the defaults:
   - Framework preset: **Next.js**
   - Build command: `next build`
   - Output: handled by Vercel
   - Node.js version: 20.x or newer (Project Settings → General)
4. Under **Environment Variables**, add `NEXT_PUBLIC_SITE_URL` with the production URL
   (for example `https://www.harshakumargh.com`). Without it, the canonical URL,
   sitemap and Open Graph links default to that same address.
5. Click **Deploy**. Every push to the default branch redeploys production, and every
   pull request gets a preview URL.

### Custom domain

In the Vercel project, open **Settings → Domains**, add `harshakumargh.com` and
`www.harshakumargh.com`, then create the DNS records Vercel shows at your registrar
(an `A` record for the apex and a `CNAME` for `www`). Vercel issues the TLS
certificate automatically.

### Deploying from the CLI (optional)

```bash
npm i -g vercel
vercel          # first run links the project and creates a preview deployment
vercel --prod   # production deployment
```

## Quality targets

Measured locally with Lighthouse 12 against `next start`:

| | Performance | Accessibility | Best Practices | SEO |
| --- | --- | --- | --- | --- |
| Desktop | 100 | 100 | 100 | 100 |
| Mobile (simulated Moto G, slow 4G) | 91–94 | 100 | 100 | 100 |

Vercel's CDN typically improves the mobile figure over a local server; re-run
Lighthouse against the deployed URL to confirm.
