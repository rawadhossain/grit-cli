You are building the grít marketing + docs website in an existing Next.js app (already initialized at repo root). Use aboutSite.md as the single source of truth for information architecture, required sections, trust/safety messaging, and component inventory. to know about the actual project for which we are building website read plan.md and expansion-plan.md, we built a prootype website in html css in abrar, go through it to know about project and goal. 

## Goal
Implement a production-quality site with two routes:
- `/` (Home/Landing)
- `/docs` (Docs)

Match the look/feel described in `aboutSite.md`: dark theme, subtle grid/glow hero background, neon green accent, terminal visuals, Inter + JetBrains Mono, premium dev-tool aesthetic (better than geminicli.com).

## Hard requirements (must)
- Build EXACT sections from `aboutSite.md` for Home:
  - Sticky Nav (anchors + Docs + GitHub external)
  - Hero (badge, headline, subtitle, 2 CTAs, TerminalDemo transcript)
  - Problem pain grid (6 cards)
  - Purposeful Friction philosophy section (Pause → Reflect → Grow visual)
  - How it works (3 steps)
  - Features grid (includes snooze/disable/resume, exports, stats, decisions, reverts, watcher, reflection)
  - Friction signals table (signals, triggers, questions)
  - Quickstart (4 steps; include Windows GCC/MSYS2 note)
  - GitHub star CTA
  - Footer (tagline + links)
- Docs page:
  - Two-column docs layout with sticky sidebar built from headings
  - Markdown-rendered content with tables + code blocks + heading anchor IDs
  - Mobile-friendly (sidebar hidden/collapsible)
- Trust & safety messaging appears clearly on both Home and Docs:
  - hooks always exit 0 (never block commits)
  - local-first SQLite, no network by default
  - watcher opt-in (not a daemon)
- Accessibility: keyboard nav, focus states, AA contrast, reduced-motion support
- Performance: keep it lightweight, avoid heavy dependencies unless needed

## Implementation instructions
- Create a component structure that mirrors the component inventory in `aboutSite.md`.
- Use CSS variables or a theme file to mirror the palette in the prototype (`--bg-color`, `--accent`, etc.).
- Implement animations similar to the prototype (scroll-based reveals), but respect `prefers-reduced-motion`.
- TerminalDemo should be data-driven (an array of lines) so content can be edited easily.
- Docs content: start by porting the existing docs text into a markdown source (inline string or `content/docs.md`) and render it.

## Output expectations
- Provide the full file tree of what you changed/added.
- Produce clean, idiomatic Next.js code.
- Ensure the site runs with `npm run dev` and has no TypeScript/lint errors.
- Do not invent new pages beyond what the spec calls for (only `/` and `/docs`).

## Input spec
Read and follow `aboutSite.md` (in repo root). Treat it as authoritative.