# QA record — 21 October 2026

## Executed

- `npm run lint`: passed, zero warnings/errors on the final sources.
- `npm run typecheck`: passed in strict TypeScript mode.
- `npm run build`: passed. Homepage and three project case studies are prerendered. The dynamic Open Graph image uses the edge runtime, which produces the expected Next.js static-generation notice for that image route.
- `npm test` against the final production server: all ten route/asset checks passed. Includes server-rendered content, required anchors, a single homepage H1, case-study sections, SoftwareSourceCode JSON-LD and a valid PDF signature.
- `/`, all three `/projects/*` routes, `/resume.pdf`, `/robots.txt`, `/sitemap.xml`, `/opengraph-image` and `/icon.svg`: HTTP 200. Unknown project slug: expected HTTP 404.
- Supplied EventForge, Chatty AI and Pharma repositories and demo URLs, NewsNavigator repository, and Endora PRs #328/#266: HTTP 200. This verifies URL reachability, not the deployed demos' full workflows or their backend health.

## Browser verification

Production Next.js server, in-app browser:

- Reviewed desktop hero (1280 × 720), work composition, event console and mobile case study layout.
- Reviewed mobile hero and contact (390 × 844), navigation and capability categories.
- Checked document width at 1280px, 390px and 320px. Final `scrollWidth` equals viewport width. A 4px overflow in the narrow achievement grid was fixed using minmax(0, 1fr).
- No broken loaded images in the inspected homepage DOM.
- Quick view opens as a native modal; Escape closes it and restores the trigger's focus.
- Mobile menu opens and closes when a navigation link is chosen.
- Skill categories respond to keyboard arrows. Frontend panel selection was observed after ArrowRight from Backend & data.
- Event simulation reaches lifecycle completion with failure disabled and with simulated worker failure enabled. The transient backoff message was not reliably captured by the browser tool's bounded selector wait; final completion was observed. Retry branching was also reviewed in source.
- Copy email reports “Copied!” after a browser clipboard write succeeds. No external email was sent.
- Direct navigation to EventForge, Chatty AI and Pharma renders the correct title, content and links.
- Fresh final EventForge tab: no console warnings or errors. Earlier GSAP warnings on case-study routes were corrected by guarding homepage-specific targets.
- Saved and visually inspected `screenshots/desktop-hero.png` and `screenshots/mobile-hero.png`.

## Verification limits

- Lighthouse/Core Web Vitals were not measured; no performance or accessibility score is claimed.
- Reduced-motion CSS and effect guards were reviewed in source; OS-level motion emulation was not available through the browser capability used here.
- No full screen-reader audit, physical device test or cross-browser matrix was performed.
- Original application screenshots were not supplied. The site uses labeled conceptual visuals, not invented screenshots or production telemetry.
- Only the observed Behfar desktop reference was visually reviewed. Pinterest access/media was unreliable; details are in DESIGN_DIRECTION.md.
- No Vercel deployment was performed. Set NEXT_PUBLIC_SITE_URL to the actual production origin before deploying to emit canonical URLs and populate the sitemap. Local builds intentionally have an empty sitemap instead of a fabricated public hostname.

The owned preview server was used only for QA. Run `npm run dev` to reopen the portfolio locally.

## ASCII revision checks

- Latest total is 2,200+; CGPA removed from homepage, quick view and journey content. The original PDF download is unchanged.
- `npm run lint`, `npm run typecheck`, `npm run build`: passed after the ASCII update.
- Final production tests on port 3010: all ten route checks passed, plus assertions for 2,200+, hobbies, no direct `<img>` elements, no CGPA in homepage HTML, two distinct generated pose frames, and complete frame dimensions.
- Browser DOM: zero raw image elements; two character-rendering canvases.
- Scroll changed hero character progress from 0.00 to 0.35; the pose blend and dispersion were visually inspected.
- Pause control toggled to Play with aria-pressed=true.
- Selecting journey year 2023 changed the milestone to Computer Science, NIT Raipur.
- Mobile widths 390px and 320px: document scrollWidth equals viewport width.
- Fresh production browser tab: no warning/error logs.
- Saved new production screenshots: ascii-desktop-hero.png, ascii-mobile-hero.png, growth-journey.png. Older screenshots retain the prior design for reference.
- The generated pose contact sheet and exact built-in imagegen prompt are documented in ASCII_MOTION.md. Only character grids ship to the browser; portrait source files have been moved outside public assets.

## Hero, dashboard and contact refinement

- Production build, lint/type checks and all route/content smoke checks passed.
- Hero name measured at 71.68px on a 1280px viewport and 48px on a 390px viewport. Exact requested tagline and vision copy are server-rendered.
- Intersection Observer normalizes hero visibility for tall mobile sections. Portrait opacity was 1 at the top and 0 after scrolling away, with a -36px translation and 0.94 scale; return scrolling restored visibility. Reduced motion removes the transition/translation.
- Removed the entire standalone Under the Hood homepage section. The EventForge case study retains its architecture simulation.
- Dashboard has four unified metrics, the rank progression graph, milestones through expected graduation in 2027, and a chronological timeline beginning with KVPY 2022. The 2027 milestone button rendered the expected-graduation text when clicked.
- All five requested toolkit categories are visible as cards; OCI AI Certified is included with its full credential name in the Cloud & DevOps description.
- Website email, mailto links, copy action and Person JSON-LD use abhaykumar.official101@gmail.com. The supplied resume PDF is unchanged.
- Copy click entered copy-copied and announced successful copying, then returned to copy-idle after the fade interval.
- Mobile 390px and 320px checks found no horizontal overflow. Desktop and mobile screenshots were reviewed; saved refined-hero.png, refined-mobile-hero.png and journey-dashboard.png.
- Browser error log was empty after these checks. The local production server remains available on port 3010 per the user's preview request.


## MacBook displays, biography and terminal revision

- Lint, TypeScript, production build and all ten route smoke checks passed. Content checks include one hero tagline, removal of repeated identity strips, the new biography, and laptop/terminal markup.
- Captured the three actual public demo sites and optimized them as WebP; no authenticated screens were invented. These replace the earlier conceptual project visuals. Personal portraits remain ASCII canvases.
- Browser tested cd abhay and projects: profile, virtual directory and all three project outputs rendered correctly.
- EventForge live preview toggled on and rendered its actual sign-in screen inside the laptop iframe. Full-demo links remain available for sites that restrict framing.
- Desktop viewport 1280px had no horizontal overflow, and browser error logs were empty. Latest mobile interactions were not rerun; earlier mobile checks are recorded above.
- Saved macbook-projects.png and portfolio-terminal.png in docs/screenshots.
- Production preview remains running at http://localhost:3010/ per user request.


## Compact toolkit and ASCII studio

- Toolkit replaced with five compact icon rows. Category icons lift/rotate/glow on hover; tags lift subtly; reduced-motion disables transformations. All requested technologies remain visible.
- Contact replaced the oversized headline/star with a smaller two-column conversation invitation, text CTA, and retained email/copy feedback.
- Added draw/ascii commands for cat, dog, abhay, robot and a system diagram; art lists options. Standalone cat, dog and abhay aliases also work. Help, shortcuts and completion include drawing commands.
- Browser executed all five draw commands and verified character outputs. Desktop screenshots saved as compact-toolkit.png and compact-contact.png. Mobile viewport 390px: document width 390px, no horizontal overflow. Copy action entered copy-copied.
- ESLint, production build/type validation and all route/content smoke checks passed. Local preview remains running on port 3010.
