# Implementation notes

## Scope and source

The parent workspace contains an unrelated Airbnb assessment and other projects. This Next.js application lives in `abhay-portfolio/` to preserve those working sources. The supplied 21 October 2026 content brief is authoritative. The resume is distributed unchanged as the requested download; website copy uses the newer corrections.

No backend, contact-form delivery, live GitHub statistics or analytics is implied. Contact uses mailto and a clipboard button with visible fallback. Project displays now use real public website captures from October 2026 in CSS laptop frames, with opt-in live iframe previews and full-demo links. EventForge and Chatty AI open to sign-in screens; Pharma opens to its research homepage. Captures are optimized WebP assets. PR diff panels summarize changes and are labeled illustrative, not reproduced source diffs. Benchmarks retain the local environment and reference-handler limitations.

## Architecture

Next.js App Router, React, strict TypeScript, Tailwind CSS v4, CSS variables, GSAP with ScrollTrigger and Lucide. Core page content and case studies are server-rendered. Client components own only navigation, native dialog, animation, skills tabs, clipboard and simulation. Content is typed in `src/content/profile.ts`. Dynamic project routes are generated for EventForge, Chatty AI and Pharma. Unknown slugs return 404.

The simulation is explanatory and performs no requests. It models ingestion checks, persisted state, BullMQ/Redis, separate execution and dashboard visibility, with optional simulated first-attempt failure and backoff. It does not promise exactly-once execution or verified external webhook success.

## Motion and accessibility

A short GSAP intro plays once per browser session, has a skip control and does not wait on arbitrary network delays. Content is present before enhancement. Scroll animations use transforms and opacity. OS reduced-motion disables intro, parallax, custom cursor and decorative animations. Native dialog manages keyboard focus and Escape. Tab controls support arrow keys. Mobile navigation supports Escape and closes on navigation. Focus styles, skip navigation, semantic sections and descriptive image text are included.

## Deployment

The user requested a Vercel-ready implementation. No Sites registration or publication is performed. Import this folder as the Vercel root directory. Set `NEXT_PUBLIC_SITE_URL` to the actual HTTPS production origin before the production build. This drives metadata base, canonical URLs and sitemap entries; no fictional public domain is included. Without it, the sitemap has no URLs. Set it and rebuild before publishing.

Social sharing image and favicon are generated locally. Portraits now render exclusively as canvas ASCII glyphs with server-rendered character fallbacks. Original portraits and generated pose studies remain in non-public assets folders. See ASCII_MOTION.md for the current pipeline. No Lighthouse scores are claimed without measurement.

## Content intentionally omitted

Phone, unconfirmed location, unknown graduation month, missing certificate links, unsupported impact statistics, older ratings, unsupported DeepVerify speed claims, and unverified NewsNavigator shortened demo. CGPA is omitted per the latest user update. The illustrated desk's labels, cat and belongings do not establish real-life interests or ownership.

## Current refinement

The homepage now uses compact hero typography, centralized tagline/vision/contact copy in profile.ts, and an Intersection Observer for reversible portrait exit/entry. Stats are unified with the growth dashboard; the timeline runs chronologically from 2022 to expected graduation in 2027. Toolkit categories are fully visible cards. CopyEmail separates clipboard state from CSS transitions, announces success and cleans up its timers. The standalone homepage architecture section was removed; case-study architecture remains intact.


## Latest portfolio revision

Removed duplicate credential strips and vertical identity labels. The core vision appears once below the professional hero tagline. Behind the Build uses the latest user-supplied Chhapra/Patna narrative and 2027, 2,200+, 94.6% highlights. The interactive terminal is a local React simulation with a bounded history, accessible input, navigation, profile files, project links, arrow-key history and tab completion; it never executes host commands.
