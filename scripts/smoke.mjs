import assert from "node:assert/strict";
import fs from "node:fs/promises";

const base = process.env.TEST_BASE_URL || "http://localhost:3010";

const routes = [
  ["/", 200],
  ["/projects/flowops", 200],
  ["/projects/cookgpt", 200],
  // ["/projects/devflow", 200], // commented out per user request
  ["/projects/devflow", 404],
  ["/projects/unknown", 404],
  ["/resume.pdf", 200],
  ["/robots.txt", 200],
  ["/sitemap.xml", 200],
  ["/opengraph-image", 200],
  ["/icon.svg", 200],
];

for (const [route, status] of routes) {
  const r = await fetch(new URL(route, base));
  assert.equal(r.status, status, route);
  if (route === "/resume.pdf") {
    assert.match(r.headers.get("content-type"), /application\/pdf/);
  } else if (route === "/") {
    const html = await r.text();
    for (const text of [
      "VEDANT",
      "DUBEY",
      "FlowOps",
      "CookGPT",
      // "DevFlow", // commented out per user request
      "vedhem999@gmail.com",
      "NIT Raipur ECE",
      "application/ld+json",
      "project-laptop",
    ]) {
      assert.ok(html.includes(text), `Missing server-rendered ${text}`);
    }
    for (const id of ["work", "about", "experience", "skills", "contact"]) {
      assert.ok(html.includes(`id="${id}"`), `Missing anchor ${id}`);
    }
    assert.equal(
      (html.match(/class="hero-tagline"/g) || []).length,
      1,
      "One professional introduction",
    );
    assert.equal((html.match(/<h1[ >]/g) || []).length, 1, "one homepage h1");
  } else if (route.startsWith("/projects/") && status === 200) {
    const html = await r.text();
    for (const text of [
      "The problem",
      "My contribution",
      "Architecture",
      "Tradeoffs",
      "Results",
      "SoftwareSourceCode",
    ]) {
      assert.ok(html.includes(text), `${route}: ${text}`);
    }
  }
  console.log(`PASS ${status} ${route}`);
}
console.log("Production smoke checks passed.");

const ascii = JSON.parse(
  await fs.readFile(
    new URL("../src/content/ascii-frames.json", import.meta.url),
    "utf8",
  ),
);
assert.ok(
  ascii.generated && ascii.frames.length >= 2,
  "Generated pose frames must be integrated",
);
for (const frame of ascii.frames) {
  assert.equal(
    frame.length,
    ascii.columns * ascii.rows,
    "Complete character sampling grid",
  );
}
console.log("ASCII assets and content regressions passed.");
