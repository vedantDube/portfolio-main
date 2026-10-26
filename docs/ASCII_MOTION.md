# ASCII motion update

## Content

The user updated the solved-problem total to 2,200+, removed CGPA from the site, and confirmed gymming and swimming. Those corrections override the earlier content brief. The supplied PDF download remains unchanged; this task modifies the website, not the source resume.

## Character portrait pipeline

No direct portrait images are rendered on the homepage. Original supplied portraits are retained under `assets/portraits/`, outside the publicly served folder. The generated studio contact sheet lives at `assets/generated/pose-studies.png`, also outside public assets. The first two distinct panels are sampled into 132 × 105 luminance grids in `src/content/ascii-frames.json` by `node scripts/build-ascii.mjs`. The third panel is not used because its pose was too similar to the second.

`AsciiPortrait.tsx` draws real ASCII glyphs on canvas. Scrolling morphs the two sampled poses, varies row displacement and disperses the characters. A moving scan highlight and subtle glyph motion continue while the portrait is visible. The hero renderer is capped at approximately 12fps; the secondary study at approximately 7fps, with capped pixel ratio. No bitmap image is drawn on canvas or displayed beneath the glyphs. The server-rendered preformatted ASCII portrait provides a no-JavaScript fallback. A pause toggle is keyboard accessible. Reduced-motion users receive a static character portrait. ResizeObserver, IntersectionObserver and animation frames are cleaned up when the component unmounts.

The growth chart plots only the supplied Amazon ML Challenge AIRs, 818 in 2025 and 545 in 2026. The vertical scale is inverted so better ranks appear higher. The improvement is 273 places. Milestone buttons show the actual 2022, 2023, 2025 and 2026 stages. There is no invented coding-rating time series or problem-count history.

## References

- https://in.pinterest.com/pin/898468194437755866/ loaded browser metadata titled “ASCII | Editable ASCII Art Filter” by Butter Studio. The embedded video was not reliably available for visual inspection. The implementation follows the user's explicit character-motion direction, without claiming exact reference fidelity.
- https://in.pinterest.com/pin/1094937728175942049/ failed browser navigation with a network/protocol error. Both URLs were inaccessible to web extraction.

## Image generation provenance

Built-in imagegen was used, with the supplied warm portrait as the identity reference. The contact sheet is a creative studio derivative, not evidence of a real event. It is used only to derive character frames.

Final prompt:

> Use case: identity-preserve. Create a studio pose contact sheet of this exact person for conversion into ASCII motion graphics on his personal portfolio. Preserve his facial identity, hair, age and dark jacket. Three equally sized vertical panels side by side: front-facing portrait, slight three-quarter turn looking left, slight three-quarter turn looking right. Same head scale, same centered eye line and shoulders, chest-up framing, consistent lighting across panels. Matte near-black seamless background and soft silver key light, high-contrast monochrome. No letters, text, borders, accessories, props, environments or invented workplace. Clean realistic studio pose studies, not documentary photos.
