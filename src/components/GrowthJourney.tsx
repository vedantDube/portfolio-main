"use client";
import { useState } from "react";
import { profile } from "@/content/profile";

const stages = [
  {
    year: "2023",
    title: "Electronics & Communication, NIT Raipur",
    body: "Began the B.Tech journey at NIT Raipur. Strong focus on algorithms, distributed networks, and modern software development.",
  },
  {
    year: "2024",
    title: "Open Source Tooling, FOSSEE CFD (IIT Bombay)",
    body: "Developed computational data processing pipelines and tooling for open-source engineering workflows.",
  },
  {
    year: "2024",
    title: "1st Place Hackathon Winner · CookGPT",
    body: "Engineered CookGPT, a multimodal AI culinary intelligence chatbot with sub-second RAG retrieval across 10,000+ embeddings, winning 1st place.",
  },
  {
    year: "2024 — PRESENT",
    title: "AI & Operations Developer, Cubelelo",
    body: "Architecting automated data workflows, building operations pipelines, and integrating LLM-assisted systems.",
  },
  {
    year: "2026",
    title: "FlowOps & Scalable Architecture",
    body: "Designed FlowOps: real-time GitHub metrics ingestion, automated PR security reviews, and multi-tenant RBAC.",
  },
  {
    year: "2027",
    title: "NIT Raipur ECE ’27",
    body: "Expected B.Tech graduation. Building high-impact systems, advancing multimodal AI tools, and exploring SDE roles.",
  },
];

export default function GrowthJourney() {
  const [selected, setSelected] = useState(4);

  return (
    <div className="journey-dashboard reveal">
      <header className="journey-dashboard-header">
        <span className="eyebrow">ENGINEERING / PROGRESS OVERVIEW</span>
        <span className="dashboard-status">
          <i className="status-dot" /> 2026 ACTIVE
        </span>
      </header>

      <div className="journey-metrics">
        <a className="metric-pill" href={profile.github} target="_blank" rel="noopener noreferrer">
          <span>
            Hackathon Winner <span aria-hidden="true">↗</span>
          </span>
          <strong>1st Place</strong>
          <small>COOKGPT MULTIMODAL AI</small>
        </a>

        <a className="metric-pill" href={profile.github} target="_blank" rel="noopener noreferrer">
          <span>
            GitHub Repositories <span aria-hidden="true">↗</span>
          </span>
          <strong>vedantDube</strong>
          <small>OPEN SOURCE & SAAS PLATFORMS</small>
        </a>

        <a className="metric-pill" href="#work">
          <span>
            Vector Search RAG <span aria-hidden="true">↓</span>
          </span>
          <strong>10,000+</strong>
          <small>PINECONE EMBEDDINGS INDEXED</small>
        </a>

        <a className="metric-pill" href="#contact">
          <span>
            NIT Raipur ECE <span aria-hidden="true">↗</span>
          </span>
          <strong>’27</strong>
          <small>GRADUATION EXPECTED</small>
        </a>
      </div>

      <div className="growth-journey">
        <div className="growth-chart" id="rank-progression">
          <div className="growth-top">
            <p className="eyebrow">COOKGPT MULTIMODAL RAG / QUERY LATENCY</p>
            <span>SUB-SECOND RESPONSE ↗</span>
          </div>

          <svg
            viewBox="0 0 600 290"
            role="img"
            aria-labelledby="growth-title growth-desc"
          >
            <title id="growth-title">
              Query latency reduced from 1200ms to 320ms via streaming RAG
            </title>
            <desc id="growth-desc">
              Benchmark comparing unoptimized baseline (1200ms) with optimized streaming Pinecone + Gemini pipeline (320ms).
            </desc>
            <defs>
              <linearGradient id="growth-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7de4eb" stopOpacity=".15" />
                <stop offset="100%" stopColor="#7de4eb" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[65, 125, 185, 245].map((y, i) => (
              <g key={y}>
                <path
                  d={`M65 ${y} H550`}
                  stroke="#ffffff13"
                  strokeDasharray="3 7"
                />
                <text x="14" y={y + 4} fill="#7d8992" fontSize="10">
                  {["1200ms", "900ms", "600ms", "300ms"][i]}
                </text>
              </g>
            ))}
            <path
              d="M95 92 L510 240 L510 266 L95 266Z"
              fill="url(#growth-fill)"
            />
            <path
              className="growth-line"
              d="M95 92 L510 240"
              fill="none"
              stroke="#7de4eb"
              strokeWidth="2"
            />
            {[
              [95, 92, "1,200ms", "BASELINE"],
              [510, 240, "320ms", "OPTIMIZED"],
            ].map(([x, y, latency, label]) => (
              <g key={label}>
                <circle
                  cx={x}
                  cy={y}
                  r="6"
                  fill="#08090b"
                  stroke="#7de4eb"
                  strokeWidth="2"
                />
                <text
                  x={Number(x) - 25}
                  y={Number(y) - 16}
                  fill="#f4f1ea"
                  fontSize="21"
                >
                  {latency}
                </text>
                <text x={Number(x) - 18} y="286" fill="#9ba6ad" fontSize="10">
                  {label}
                </text>
              </g>
            ))}
          </svg>

          <div className="growth-foot">
            <strong>
              73% <span>latency reduction</span>
            </strong>
            <p>
              Sub-second multimodal query responses.
              <br />
              Streaming tokens &amp; Pinecone vector metadata caching.
            </p>
          </div>
        </div>

        <div className="milestone-explorer">
          <p className="eyebrow">THE GROWTH IS IN THE WORK</p>
          <div
            className="milestone-tabs"
            role="group"
            aria-label="Explore journey milestones"
          >
            {stages.map((s, i) => (
              <button
                key={s.year + s.title}
                aria-pressed={selected === i}
                onClick={() => setSelected(i)}
              >
                {s.year.split(" ")[0]}
              </button>
            ))}
          </div>

          <div className="milestone-detail" aria-live="polite">
            <span>0{selected + 1} / MILESTONE</span>
            <h3>{stages[selected].title}</h3>
            <p>{stages[selected].body}</p>
          </div>

          <div className="growth-solved">
            <strong>’23 → ’27</strong>
            <span>
              NIT RAIPUR ECE
              <br />
              2027 GRADUATION EXPECTED
            </span>
          </div>
        </div>
      </div>

      <div className="dashboard-footnote">
        <span>Winner · Hack-o-Harbour (150+ teams)</span>
        <span>Runner-Up · Codeutsav 8.0 (300+ teams)</span>
        <span>Selected · Amazon ML Summer School 2026</span>
      </div>
    </div>
  );
}
