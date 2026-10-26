# Vedant Dubey — Engineering Portfolio

A cinematic, responsive engineering portfolio built with Next.js App Router, TypeScript, Tailwind CSS, and GSAP.

## Run

Use Node.js 22+ or Node.js 24:

```sh
npm install
npm run dev
```

Open http://localhost:3010.

## Validate

```sh
npm run lint
npm run typecheck
npm run build
npm test
```

## Structure & Customization

- `src/content/profile.ts`: Central profile configuration containing Vedant's personal bio, vision, links, projects (FlowOps, CookGPT, DevFlow), experience, and skills.
- `src/app/page.tsx`: Homepage narrative, interactive hero with ASCII portrait and HD photo toggle, project highlights, and contact section.
- `src/app/projects/[slug]/page.tsx`: In-depth engineering case studies with system architecture diagrams, tradeoffs, and verified benchmarks.
- `src/components/AsciiPortrait.tsx`: Scroll-reactive ASCII canvas animation generated from Vedant's portrait photo with live Photo/ASCII toggle.
- `src/components/GrowthJourney.tsx`: Interactive milestone explorer and CookGPT query latency chart.
- `src/components/PortfolioTerminal.tsx`: Interactive retro-modern terminal shell with commands like `cd vedant`, `projects`, `experience`, `draw vedant`, `draw system`, and `help`.
- `public/images/vedant.jpg`: Source portrait photograph.
- `public/images/projects/`: Project previews for FlowOps, CookGPT, and DevFlow.
- `public/resume.pdf`: Resume file for download.
