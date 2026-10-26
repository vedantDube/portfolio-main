import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { projects, profile } from "@/content/profile";
import ProjectLaptop from "@/components/ProjectLaptop";
import { EngineeringFlow } from "@/components/Experience";
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} — Engineering Case Study`,
    description: project.summary,
    ...(process.env.NEXT_PUBLIC_SITE_URL
      ? { alternates: { canonical: `/projects/${project.slug}` } }
      : {}),
    openGraph: {
      title: `${project.name} — Vedant Dubey`,
      description: project.summary,
      images: ["/opengraph-image"],
    },
  };
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return (
    <div className="section case-page">
      <Link className="case-breadcrumb" href="/#work">
        <ArrowLeft size={14} /> BACK TO SELECTED WORK
      </Link>
      <header className="case-hero-title">
        <div>
          <p className="eyebrow">
            PROJECT {project.number} / {project.category}
          </p>
          <h1>{project.name}</h1>
          <p>{project.description}</p>
        </div>
        <div className="button-row">
          <a className="button primary" href={project.demo}>
            Live demo <ArrowUpRight size={16} />
          </a>
          <a className="button" href={project.github}>
            Source <Github size={16} />
          </a>
        </div>
      </header>
      <div className="tags">
        {project.stack.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>
      <div className="case-visual">
        <ProjectLaptop project={project} />
      </div>
      <div className="case-summary">
        <h2>The short version.</h2>
        <p>{project.summary}</p>
      </div>
      <section className="case-block">
        <h2>01 / The problem</h2>
        <p>{project.problem}</p>
      </section>
      <section className="case-block">
        <h2>02 / My contribution</h2>
        <p>{project.contribution}</p>
      </section>
      <section className="case-block">
        <h2>03 / Architecture</h2>
        <div>
          <div className="case-flow">
            {project.flow.map((s, i) => (
              <span key={s}>
                {s}
                {i < project.flow.length - 1 && " →"}
              </span>
            ))}
          </div>
          <p>
            {project.slug === "flowops"
              ? "GitHub OAuth and webhooks stream commits and pull requests. Background workers analyze diffs for security anti-patterns while Socket.io synchronizes real-time metrics across team dashboards."
              : "User image and text queries are processed through Gemini multimodal vision and matched against 10,000+ Pinecone recipe vectors with sub-second streaming answers."}
          </p>
        </div>
      </section>
      {project.slug === "flowops" && (
        <div className="case-visual">
          <EngineeringFlow />
        </div>
      )}
      <section className="case-block">
        <h2>04 / Decisions in code</h2>
        <div className="case-details">
          {project.details.map(([title, text]) => (
            <div key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="case-block">
        <h2>05 / Tradeoffs</h2>
        <p>{project.tradeoff}</p>
      </section>
      <section className="case-block">
        <h2>06 / Results &amp; limits</h2>
        <div>
          <p>{project.result}</p>
          <p className="source-note">
            Details verified from public GitHub repositories and architecture design briefs. The laptop preview displays the operational interface. See the repository for setup instructions.
          </p>
        </div>
      </section>
      <div className="case-next">
        <Link href={`/projects/${next.slug}`}>
          <div>
            <p className="eyebrow">NEXT CASE STUDY</p>
            <h2>{next.name}</h2>
          </div>
          <ArrowRight size={30} />
        </Link>
        <Link className="text-link" href="/#contact">
          Let’s talk <ArrowUpRight size={16} />
        </Link>
      </div>
      <div className="case-footer">
        Vedant Dubey / Full Stack Developer &amp; AI/ML Engineer ·{" "}
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareSourceCode",
            name: project.name,
            description: project.summary,
            codeRepository: project.github,
            programmingLanguage: [...project.stack],
            author: { "@type": "Person", name: "Vedant Dubey" },
          }).replace(/</g, "\\u003c"),
        }}
      />
    </div>
  );
}
