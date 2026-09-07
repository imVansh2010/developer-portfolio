# Vansh-Portfolio

Portfolio site for Vansh Agarwal — high school software developer & algorithmic problem solver. A sleek one-page React app with subtle code-editor flavor (OLED dark theme, terminal card, monospace accents), built with **React + Tailwind CSS v4 + Framer Motion** on **Vite**. Design system persisted in `design-system/`.

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
```

Production build & local preview:

```bash
npm run build     # outputs static site to dist/
npm run preview
```

Deploy: push `dist/` to any static host — Vercel, Netlify, or GitHub Pages all work with zero config.

## Structure

```
index.html                 Vite entry (fonts, meta, #root)
src/
  main.jsx                 React mount point
  App.jsx                  Section order + reduced-motion config
  index.css                Tailwind v4 @theme tokens (palette, fonts) + base styles
  data/content.js          All copy: profile, codebases, leadership, skills
  components/
    Navbar.jsx             Sticky glassmorphism top navbar + mobile hamburger drawer (active-section highlight)
    Hero.jsx               Greeting, description, social badges, animated terminal card
    AboutMe.jsx            "// 01. About Me" content card + quick facts
    Codebases.jsx          "// 02. Active Codebases" project cards
    Leadership.jsx         "// 03. Leadership & Impact" timeline
    Achievements.jsx       "// 04. Achievements" highlight card
    Interests.jsx          "// 05. Interests" 4-card grid (Lucide icons)
    Skills.jsx             "// 06. Skills" wrap-safe chip groups
    Contact.jsx            "// 07. Contact" email CTA + socials
    Footer.jsx             IDE-style status bar
    ui.jsx                 FadeIn / SectionHeading / Chip / FileTag primitives
    icons.jsx              Inline SVG icons
```

## Editing content

- **Copy, tags, links, timeline entries** — `src/data/content.js` (single source of truth)
- **About Me paragraph** — `src/components/AboutMe.jsx` (styled with keyword highlights)
- **Design tokens** (colors, fonts) — `@theme` block at the top of `src/index.css`
- **Social links & email** — `profile` in `src/data/content.js` — ⚠️ placeholders (`vansh@example.com`, `https://github.com/`) still need real URLs

## Notes

- Icons via **lucide-react** (brand marks are inline SVGs); Framer Motion drives scroll reveals and the mobile drawer; `MotionConfig reducedMotion="user"` respects OS-level reduced-motion preferences.
- Anchor navigation: `#home`, `#about`, `#codebases`, `#leadership`, `#achievements`, `#interests`, `#skills`, `#contact` — sections carry `scroll-mt-20` so the sticky navbar never covers headings
- Accessibility kept: SVG-only icons, visible focus rings, semantic landmarks, 4.5:1+ contrast.
