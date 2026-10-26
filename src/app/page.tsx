import AsciiPortrait from "@/components/AsciiPortrait";
import PortfolioTerminal from "@/components/PortfolioTerminal";
import ProjectLaptop from "@/components/ProjectLaptop";
import GrowthJourney from "@/components/GrowthJourney";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowDown,
  ArrowRight,
  Download,
  GitPullRequest,
  Check,
  Github,
} from "lucide-react";
import { profile, projects, experience } from "@/content/profile";
import { CopyEmail, Toolkit, SocialLinks } from "@/components/Experience";

function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <p className="section-label">
      <span>{number} /</span> {children}
    </p>
  );
}

export default function Home() {
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-grid" />
        <div className="hero-orbit" />
        <div className="hero-image-wrap">
          <AsciiPortrait />
        </div>
        <div className="hero-shade" />
        <div className="hero-content">
          <div className="hero-topline">
            <span className="eyebrow">
              <i className="status-dot" /> ENGINEERING PORTFOLIO / 2026
            </span>
            <span className="edition">PORTFOLIO — VOL. 2026</span>
          </div>
          <h1 className="hero-title">
            <span className="line">VEDANT</span>
            <span className="line surname">
              DUBEY<span className="title-period">.</span>
            </span>
          </h1>
          <div className="hero-description">
            <span className="tiny-cross">+</span>
            <h2>
              I engineer the systems
              <br />
              behind the <em>experience.</em>
            </h2>
            <p className="hero-tagline">{profile.tagline}</p>
            <div className="hero-vision">
              <span className="eyebrow">THE VISION</span>
              <p>{profile.vision}</p>
            </div>
            <div className="button-row">
              <a className="button primary magnetic" href="#work">
                Explore my work <ArrowUpRight size={18} />
              </a>
              <a className="button ghost magnetic" href="/resume.pdf" download>
                Download resume <Download size={16} />
              </a>
            </div>
          </div>
        </div>
        <div className="hero-bottom">
          <a className="scroll-cue" href="#work">
            <span className="scroll-line" />
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={13} />
          </a>
          <span className="hero-location">
            BASED IN INDIA · OPEN TO REMOTE &amp; RELOCATION
          </span>
          <SocialLinks />
        </div>
      </section>

      <section className="section work-section" id="work">
        <div className="section-heading reveal">
          <div>
            <SectionLabel number="01">SELECTED WORK</SectionLabel>
            <h2>
              Ideas into
              <br />
              <em>working systems.</em>
            </h2>
          </div>
          <div className="heading-aside">
            <p>
              Not just the interface.
              <br />
              Everything that makes it work.
            </p>
            <a className="text-link" href={profile.github} target="_blank" rel="noopener noreferrer">
              More on GitHub <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
        <div className="project-list">
          {projects.map((p) => (
            <div key={p.slug} style={{ display: "contents" }}>
              {p.slug === "devflow" && (
                <div
                  className="experience-spotlight reveal"
                  style={{
                    gridColumn: "1 / -1",
                    margin: "50px 0 30px",
                    borderTop: "1px solid var(--line)",
                    paddingTop: "50px",
                  }}
                >
                  <div style={{ marginBottom: "28px" }}>
                    <span className="eyebrow" style={{ color: "var(--accent)" }}>
                      ● PRODUCTION SYSTEMS &amp; OPEN SOURCE ENGINEERING
                    </span>
                    <h3 style={{ fontSize: "clamp(26px, 3.2vw, 40px)", fontWeight: 500, margin: "10px 0 0", letterSpacing: "-1.5px" }}>
                      Engineering at <em>Cubelelo &amp; FOSSEE (IIT Bombay).</em>
                    </h3>
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
                      gap: "24px",
                    }}
                  >
                    {/* Cubelelo Card */}
                    <article
                      style={{
                        background: "rgba(17, 19, 22, 0.7)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        borderRadius: "8px",
                        padding: "32px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "18px",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px" }}>
                        <div>
                          <span className="eyebrow" style={{ color: "#7de4eb", fontSize: "9px" }}>
                            MARKETPLACE AUTOMATION &amp; DATA INFRASTRUCTURE
                          </span>
                          <h4 style={{ fontSize: "20px", fontWeight: 500, margin: "6px 0 2px", color: "var(--ink)" }}>
                            Cubelelo
                          </h4>
                          <p style={{ fontSize: "12px", color: "var(--muted)" }}>
                            Software Engineer Intern (Part-Time) · Raipur, India
                          </p>
                        </div>
                        <span style={{ fontSize: "10px", color: "#626871", fontFamily: "var(--font-mono)", whiteSpace: "nowrap" }}>
                          MAY 2026 — PRESENT
                        </span>
                      </div>

                      <div style={{ fontSize: "13px", lineHeight: "1.7", color: "#b9bec4", display: "flex", flexDirection: "column", gap: "10px" }}>
                        <p style={{ margin: 0 }}>
                          • Built a <strong>rules-based classification engine</strong> to auto-categorise returns across 10+ marketplace integrations, replacing manual triage.
                        </p>
                        <p style={{ margin: 0 }}>
                          • Designed a <strong>normalised Postgres schema (Supabase)</strong> to reconcile order and inventory state across 12+ marketplace APIs with idempotent upsert jobs preventing duplicate records.
                        </p>
                        <p style={{ margin: 0 }}>
                          • Engineered <strong>Playwright automation</strong> for marketplaces lacking public APIs, handling session persistence and scheduled polling to save <strong>~25 hours/week</strong> of manual work.
                        </p>
                        <p style={{ margin: 0 }}>
                          • Deployed <strong>15+ backend services</strong> in Next.js and Supabase for real-time warehouse ops, barcode scanning, and inventory tracking.
                        </p>
                      </div>

                      <div className="tags" style={{ marginTop: "auto", paddingTop: "12px" }}>
                        {["Next.js", "TypeScript", "SQL", "Supabase", "Playwright", "REST APIs", "GraphQL"].map((s) => (
                          <span key={s}>{s}</span>
                        ))}
                      </div>

                      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontSize: "11px", color: "#7de4eb", fontFamily: "var(--font-mono)" }}>
                          ⚡ ~25 hrs/week manual triage saved
                        </span>
                        <span style={{ fontSize: "10px", color: "#818d96", fontFamily: "var(--font-mono)" }}>
                          12+ Marketplace APIs
                        </span>
                      </div>
                    </article>

                    {/* FOSSEE IIT Bombay Card */}
                    <article
                      style={{
                        background: "rgba(17, 19, 22, 0.7)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        borderRadius: "8px",
                        padding: "32px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "18px",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px" }}>
                        <div>
                          <span className="eyebrow" style={{ color: "#cba481", fontSize: "9px" }}>
                            CFD (OPENFOAM) &amp; LLM INTEGRATION
                          </span>
                          <h4 style={{ fontSize: "20px", fontWeight: 500, margin: "6px 0 2px", color: "var(--ink)" }}>
                            FOSSEE, IIT Bombay
                          </h4>
                          <p style={{ fontSize: "12px", color: "var(--muted)" }}>
                            Part-Time Software Developer · Remote
                          </p>
                        </div>
                        <span style={{ fontSize: "10px", color: "#626871", fontFamily: "var(--font-mono)", whiteSpace: "nowrap" }}>
                          MAY 2025 — PRESENT
                        </span>
                      </div>

                      <div style={{ fontSize: "13px", lineHeight: "1.7", color: "#b9bec4", display: "flex", flexDirection: "column", gap: "10px" }}>
                        <p style={{ margin: 0 }}>
                          • Built a <strong>grammar-based extraction parser</strong> converting 100+ OpenFOAM case configurations into structured PyVNT trees, achieving <strong>100% data fidelity</strong> across inconsistent formats.
                        </p>
                        <p style={{ margin: 0 }}>
                          • Implemented <strong>bi-directional translation</strong> across 5+ OpenFOAM configuration formats.
                        </p>
                        <p style={{ margin: 0 }}>
                          • Engineered an <strong>RAG pipeline</strong> to interpret free-form CFD config comments and map them to structured PyVNT fields, boosting extraction accuracy by <strong>35%</strong> over regex baselines.
                        </p>
                        <p style={{ margin: 0 }}>
                          • Automated CFD workflow generation, cutting simulation setup time by <strong>50%</strong> and eliminating configuration errors.
                        </p>
                      </div>

                      <div className="tags" style={{ marginTop: "auto", paddingTop: "12px" }}>
                        {["Python", "OpenFOAM", "PyQt", "PyVNT", "Transformers", "RAG", "LLMs"].map((s) => (
                          <span key={s}>{s}</span>
                        ))}
                      </div>

                      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontSize: "11px", color: "#cba481", fontFamily: "var(--font-mono)" }}>
                          ⚡ 50% setup time reduction · +35% accuracy
                        </span>
                        <span style={{ fontSize: "10px", color: "#818d96", fontFamily: "var(--font-mono)" }}>
                          100+ Case Configs
                        </span>
                      </div>
                    </article>
                  </div>
                </div>
              )}

              <article
                className={`project project-${p.color} reveal`}
              >
                <ProjectLaptop project={p} />
                <div className="project-info">
                  <div className="project-meta">
                    <span>
                      {p.number} / {p.category}
                    </span>
                    <Link
                      href={`/projects/${p.slug}`}
                      aria-label={`Read ${p.name} case study`}
                      className="circle-link"
                    >
                      <ArrowUpRight />
                    </Link>
                  </div>
                  <Link href={`/projects/${p.slug}`}>
                    <h3>{p.name}</h3>
                  </Link>
                  <h4>{p.description}</h4>
                  <p>{p.summary}</p>
                  <div className="tags">
                    {p.stack.slice(0, 5).map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <Link href={`/projects/${p.slug}`}>
                      Explore case study <ArrowRight size={16} />
                    </Link>
                    <a href={p.github} aria-label={`${p.name} source on GitHub`} target="_blank" rel="noopener noreferrer">
                      <Github size={17} />
                    </a>
                    <a href={p.demo} aria-label={`${p.name} live demo`} target="_blank" rel="noopener noreferrer">
                      <ArrowUpRight size={19} />
                    </a>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
        <div className="secondary-project reveal">
          <span className="eyebrow">ALSO BUILT / SCIENTIFIC &amp; OPS TOOLING</span>
          <p>
            Data workflows for FOSSEE CFD (IIT Bombay), operational AI tooling at Cubelelo, and developer automation platforms.
          </p>
          <a
            href={profile.github}
            className="text-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View repositories <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      <section className="section open-source-section" id="open-source">
        <div className="section-heading reveal">
          <div>
            <SectionLabel number="02">BUILT IN PUBLIC</SectionLabel>
            <h2>
              Good code.
              <br />
              <em>Proven impact.</em>
            </h2>
          </div>
          <p className="heading-aside">
            Engineered with clear interfaces.
            <br />
            Measurable latency, security &amp; reliability.
          </p>
        </div>
        <div className="contribution-list">
          {[
            {
              id: "flowops-pipeline",
              repo: "vedantDube / flowops",
              badge: "PRODUCTION",
              title: "Automate code reviews & anti-pattern detection.",
              desc: "Engineered GitHub webhook ingestion, background workers for PR analytics, and an automated anti-pattern scanner.",
              tests: "Sub-second event ingestion · 4-tier RBAC validated",
              checks: "Real-time Socket.io state sync across teams",
              code: [
                "+ ingest GitHub webhooks with cryptographic verification",
                "+ detect security anti-patterns in incoming diffs",
                "+ stream real-time metric updates via Socket.io",
              ],
              link: "https://github.com/vedantDube/flowops",
            },
            {
              id: "cookgpt-rag",
              repo: "vedantDube / cookgpt",
              badge: "HACKATHON WINNER",
              title: "Sub-second multimodal RAG across 10,000+ embeddings.",
              desc: "Built multimodal vision-to-recipe pipeline using Google Gemini and Pinecone vector retrieval with metadata filtering.",
              tests: "10,000+ Pinecone vectors indexed · 73% latency reduction",
              checks: "1st Place AI Hackathon Awarded",
              code: [
                "+ extract visual ingredient features via Gemini Vision",
                "+ query Pinecone with dietary metadata filters",
                "+ stream grounded recipe steps with sub-second latency",
              ],
              link: "https://github.com/vedantDube/cookgpt",
            },
          ].map((p) => (
            <article className="contribution reveal" key={p.id}>
              <div className="pr-icon">
                <GitPullRequest size={24} />
              </div>
              <div className="pr-body">
                <div className="pr-repo">
                  {p.repo}{" "}
                  <span className="merged">{p.badge}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <small>
                  <Check size={13} />
                  {p.tests}
                </small>
                <small>
                  <Check size={13} />
                  {p.checks}
                </small>
                <a
                  href={p.link}
                  className="text-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore repository <ArrowUpRight size={15} />
                </a>
              </div>
              <div className="diff">
                <span>SYSTEM IMPLEMENTATION HIGHLIGHTS</span>
                {p.code.map((line) => (
                  <code key={line}>{line}</code>
                ))}
              </div>
            </article>
          ))}
        </div>
        <p className="source-note">
          Systems and metrics verified from public repositories and competition milestones.
        </p>
      </section>

      <section className="section experience-section" id="experience">
        <div className="section-heading reveal">
          <div>
            <SectionLabel number="03">THE JOURNEY</SectionLabel>
            <h2>
              Built one
              <br />
              <em>decision at a time.</em>
            </h2>
          </div>
          <p className="heading-aside">
            Learning in public.
            <br />
            Taking ownership of the details.
          </p>
        </div>
        <GrowthJourney />
        <div className="timeline">
          {[...experience]
            .reverse()
            .concat([
              {
                date: "2027 / EXPECTED",
                title: "The next chapter.",
                role: "NIT Raipur · ECE ’27",
                text: "Expected B.Tech graduation. Continuing to build distributed full-stack systems, multimodal AI tooling, and explore SDE opportunities.",
              },
            ])
            .map((e, i) => (
              <article key={e.title} className="timeline-item reveal">
                <span className="timeline-date">{e.date}</span>
                <div className="timeline-point">
                  <i />
                </div>
                <div>
                  <p className="eyebrow">{e.role}</p>
                  <h3>{e.title}</h3>
                  <p>{e.text}</p>
                </div>
                <span className="timeline-index">0{i + 1}</span>
              </article>
            ))}
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="about-photo reveal">
          <AsciiPortrait variant="study" />
          <div className="photo-caption">
            <span>CHARACTER STUDY / 02</span>
            <span>CURIOSITY. SYSTEMS. CRAFT.</span>
          </div>
        </div>
        <div className="about-copy reveal">
          <SectionLabel number="04">BEHIND THE BUILD</SectionLabel>
          <h2>
            Curiosity, then execution.
            <br />
            <em>A builder’s perspective.</em>
          </h2>
          <p className="large-copy">
            Studying Electronics &amp; Communication Engineering at NIT Raipur (Class of ’27), my path has always centered around understanding systems from first principles—from hardware logic to high-level distributed architectures.
          </p>
          <p>
            Whether developing data pipelines and operations automation at Cubelelo or contributing to open-source engineering workflows with FOSSEE CFD at IIT Bombay, I take pride in making technical processes faster, more reliable, and completely reproducible.
          </p>
          <p>
            Winning 1st place in the AI Hackathon with CookGPT demonstrated the power of coupling sub-second vector search with multimodal reasoning. With FlowOps, I applied that same philosophy to engineering productivity and developer tooling.
          </p>
          <div className="about-vision">
            <span className="eyebrow">MY VISION / IN PRACTICE</span>
            <p>
              Bridging robust full-stack architecture with intelligent AI/ML workflows to create software that accelerates teams and solves real-world bottlenecks.
            </p>
          </div>
          <div className="about-facts">
            <div>
              <strong>2027</strong>
              <span>
                EXPECTED GRADUATION
                <br />
                NIT RAIPUR ECE
              </span>
            </div>
            <div>
              <strong>1st Place</strong>
              <span>
                AI HACKATHON WINNER
                <br />
                COOKGPT MULTIMODAL
              </span>
            </div>
            <div>
              <strong>10,000+</strong>
              <span>
                VECTORS INDEXED
                <br />
                PINECONE &amp; GEMINI
              </span>
            </div>
          </div>
          <a className="text-link" href={`mailto:${profile.email}`}>
            Let’s talk engineering <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="section-heading reveal">
          <div>
            <SectionLabel number="05">MY TOOLKIT</SectionLabel>
            <h2>
              Tools for the <em>work.</em>
            </h2>
          </div>
          <p className="heading-aside">From the first commit to production.</p>
        </div>
        <div className="reveal">
          <Toolkit />
        </div>
      </section>

      <section className="section personal-section" id="personal">
        <div className="personal-text reveal">
          <SectionLabel number="06">OFF THE CLOCK</SectionLabel>
          <h2>
            Curious by nature.
            <br />
            <em>Always building forward.</em>
          </h2>
          <p>
            Away from the terminal, I stay energized by exploring new AI research papers, tinkering with hardware and electronics, and staying active. Having balance keeps my focus sharp and my code deliberate.
          </p>
          <span className="eyebrow">LEARN. BUILD. COME BACK CURIOUS.</span>
        </div>
        <div className="hobby-studies reveal">
          <article className="hobby-study gym-study">
            <div className="hobby-glyph" aria-hidden="true">
              <span>||||</span>
              <b>━━━━</b>
              <span>||||</span>
            </div>
            <div>
              <span className="eyebrow">01 / DISCIPLINE &amp; FOCUS</span>
              <h3>Fitness &amp; Training</h3>
              <p>Consistent sessions. Building resilience day by day.</p>
            </div>
          </article>
          <article className="hobby-study swim-study">
            <div className="water-glyph" aria-hidden="true">
              {["~ ~ ~ ~ ~ ~ ~", " ~ ~ ~ ~ ~ ~ ", "~ ~ ~ ~ ~ ~ ~"].map(
                (line, i) => (
                  <span key={i}>{line}</span>
                ),
              )}
            </div>
            <div>
              <span className="eyebrow">02 / EXPLORATION &amp; PERSPECTIVE</span>
              <h3>Tech &amp; AI Research</h3>
              <p>Following new multimodal models and open-source breakthroughs.</p>
            </div>
          </article>
          <p className="hobby-footnote">
            OFFLINE INTERESTS / ONLINE IN CHARACTERS
          </p>
        </div>
      </section>

      <section className="section terminal-section" id="terminal">
        <div className="section-heading reveal">
          <div>
            <SectionLabel number="07">THE COMMAND LINE</SectionLabel>
            <h2>
              A different way
              <br />
              <em>to get to know the work.</em>
            </h2>
          </div>
          <p className="heading-aside">
            A few familiar commands.
            <br />
            The same engineer behind them.
          </p>
        </div>
        <div className="reveal">
          <PortfolioTerminal />
        </div>
      </section>

      <section className="contact-section contact-refined" id="contact">
        <div className="section">
          <SectionLabel number="08">LET’S CONNECT</SectionLabel>
          <div className="contact-top">
            <h2>
              Good engineering starts
              <br />
              with <em>a conversation.</em>
            </h2>
            <div className="contact-aside">
              <p>{profile.contactPrompt}</p>
              <a
                href={`mailto:${profile.email}`}
                className="contact-arrow magnetic"
                aria-label="Email Vedant"
              >
                <span>Start a conversation</span>
                <ArrowUpRight size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>
          <div className="contact-email-row">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <CopyEmail />
          </div>
          <footer>
            <Link href="/" className="footer-wordmark">
              Vedant Dubey<span>© 2026</span>
            </Link>
            <div>
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                GitHub <ArrowUpRight size={13} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn <ArrowUpRight size={13} />
              </a>
              <a href="/resume.pdf" download>
                Resume <Download size={13} />
              </a>
            </div>
            <a href="#home" className="back-top">
              BACK TO TOP ↑
            </a>
          </footer>
        </div>
      </section>
    </>
  );
}
