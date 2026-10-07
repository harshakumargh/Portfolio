# Design system

The site is written for recruiters and engineering leaders, so the design aims for
"senior engineer's architecture review", not "developer template": restrained,
typographic, lots of whitespace, and diagrams instead of decoration.

All tokens live in `src/app/globals.css`.

## Color

One neutral scale and one accent. Dark is the default; light is opt-in through the
toggle and remembered in `localStorage`.

| Token | Dark | Light | Use |
| --- | --- | --- | --- |
| `--bg` | `#0a0b0d` | `#fafaf9` | Page background |
| `--bg-elevated` | `#101216` | `#ffffff` | Diagram nodes, hovered panels |
| `--surface` / `--surface-strong` | 2.5% / 5% white | 2% / 4.5% ink | Quiet fills, hover |
| `--border` / `--border-strong` | 8% / 14% white | 9% / 16% ink | Hairlines, node borders |
| `--fg` | `#ecedef` | `#0d0f12` | Headings, key text |
| `--fg-muted` | `#a1a6b0` | `#4a505a` | Body copy |
| `--fg-subtle` | `#8a909a` | `#5d636d` | Labels, captions |
| `--accent` | `#7aa2ff` | `#2f5bd3` | The single accent: eyebrows, metrics, focus, flow pulses |

Every text color meets WCAG AA (4.5:1) against its background in both themes.
No neon, no second accent, no colored gradients beyond a faint accent glow.

## Typography

- **Geist Sans** for everything readable, **Geist Mono** for labels, tags and diagram
  annotations (the "engineering" voice). Both load through `next/font`.
- Fluid scale (`clamp`) defined as component classes:

| Class | Size (min → max) | Notes |
| --- | --- | --- |
| `type-display` | 38 → 64px | Hero and contact headlines, −0.038em tracking |
| `type-h2` | 30 → 48px | Section titles |
| `type-h3` | 20 → 24px | Sub-sections |
| `type-lead` | 17 → 20px | Section intros, 1.6 line height, muted |
| `type-body` | 16px | Body copy, 1.7 line height, muted |
| `type-eyebrow` | 12px mono, uppercase, accent | Section kicker |
| `type-label` | 11px mono, uppercase, subtle | Metadata, numbering |

Headings use `text-wrap: balance`; paragraphs use `text-wrap: pretty`.

## Spacing and layout

- Container: `max-w-6xl` with `px-5` (mobile) / `px-8` (≥640px). See `Container`.
- Section rhythm: `py-24` → `py-32`, heading block → content `mt-14` → `mt-20`.
- Sections are separated by a centered gradient hairline instead of boxes.
- Content prefers divided rows and hairlines over cards; cards (`DiagramFrame`,
  principles grid, contact panel) are used only where grouping adds meaning.

## Radii

Three steps only: `rounded-sm` 6px (tags, chips), `rounded-md` 10px (buttons, nodes),
`rounded-lg` 16px (frames and panels). Pills (`rounded-full`) are reserved for
skill items and status badges.

## Elevation and texture

No drop shadows on content. Depth comes from borders, a 1px inset highlight on
frames, a very faint 64px grid masked to the top of the page, a soft accent glow and
an SVG noise layer at 2.5–3.5% opacity. The navbar is the only glass element.

## Motion

- Easing `cubic-bezier(0.2, 0.7, 0.2, 1)`; durations 200ms (hover), 700ms (reveal),
  1.4s (counters), 2.8s loop (diagram pulses).
- Section content fades up 14px once, via a single shared `IntersectionObserver`
  (`RevealObserver`). Content is visible without JavaScript.
- Impact numbers count up the first time they enter the viewport (`CountUp`); the
  real value is server-rendered and announced to screen readers.
- Diagram connectors carry a travelling pulse built from `transform` only, so it stays
  on the compositor.
- `prefers-reduced-motion: reduce` disables reveals, counters, pulses and smooth
  scrolling.

## Responsive behavior

- **Navigation:** full link row at ≥1024px; below that a menu button opens a
  full-height panel (Escape closes it, body scroll locks).
- **Hero:** two columns at ≥1024px (copy + architecture diagram); stacked below, with
  the diagram after the CTAs so the pitch reads first.
- **Diagrams:** built from HTML grid/flex, not fixed SVG, so nodes reflow and text
  stays legible at 320px. Branches use a tree layout rather than wide fan-outs.
- **Impact:** 5 columns → 3 → 2.
- **Case study:** chapter list + sticky diagram at ≥1024px; stacked below.
- **Timeline:** dates in a right-aligned rail at ≥768px; inline above each entry on
  mobile.

## Accessibility

Landmarks (`header`/`nav`/`main`/`footer`), one `h1`, sections labelled by their `h2`,
skip link, visible `:focus-visible` ring in the accent color, `aria-current` on the
active nav item, labelled icon buttons, and diagrams exposed as a single image with a
full text description.
