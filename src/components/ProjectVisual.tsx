import type { Project } from "@/content/profile";

export default function ProjectVisual({ project }: { project: Project }) {
  return (
    <div
      className={`project-visual visual-${project.visual}`}
      aria-label={`${project.name} conceptual architecture illustration`}
    >
      <div className="visual-topline">
        <span>
          {project.slug === "flowops"
            ? "INTELLIGENCE / SAAS PIPELINE"
            : project.slug === "cookgpt"
              ? "MULTIMODAL / VECTOR RAG"
              : "WORKFLOW / ORCHESTRATION"}
        </span>
        <span className="visual-dots">● ● ●</span>
      </div>

      {project.visual === "flow" ? (
        <div className="forge-art">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="forge-core">
            <span>
              f<span>o</span>
            </span>
            <small>FLOWOPS</small>
          </div>
          <div className="float-node n1">
            <i />
            WEBHOOK <span>↗</span>
          </div>
          <div className="float-node n2">
            <i />
            PR DIFF <span>≋</span>
          </div>
          <div className="float-node n3">
            <i />
            AI REVIEW <span>⚙</span>
          </div>
          <div className="float-node n4">
            <i />
            SOCKET.IO <span>⌁</span>
          </div>
          <svg className="forge-lines" viewBox="0 0 500 320" aria-hidden="true">
            <path d="M100 95 250 160 400 90M100 240 250 160 410 245" />
          </svg>
        </div>
      ) : project.visual === "chat" ? (
        <div className="chat-art">
          <div className="chat-person">
            <span className="avatar-letter">c</span>
            <div>
              <b>CookGPT · Multimodal Vision</b>
              <small>
                <i />
                Active · Sub-Second Latency
              </small>
            </div>
            <span>↗</span>
          </div>
          <div className="chat-bubble incoming">
            Here are the ingredients in my fridge. What can I make in 20 mins?
          </div>
          <div className="chat-bubble outgoing">
            Analyzing 3 ingredients with Gemini + Pinecone: Mediterranean Bowl ready in 15 mins!
          </div>
          <div className="ai-suggestion">
            <span>✧ PINECONE 10K+ EMBEDDINGS</span>
            <p>Sub-second RAG retrieval &amp; verified nutrition facts.</p>
          </div>
          <div className="typing">
            <i />
            <i />
            <i />
          </div>
        </div>
      ) : (
        <div className="research-art">
          <div className="research-query">
            <span>⌕</span> Automated CI/CD &amp; Developer Workflows
          </div>
          <div className="research-branch">
            <i />
            <i />
            <i />
          </div>
          <div className="agent-row">
            {["INGEST", "ANALYZE", "DEPLOY"].map((s, i) => (
              <div key={s}>
                <span>{["⌕", "≡", "✧"][i]}</span>
                <small>{s}</small>
              </div>
            ))}
          </div>
          <div className="research-report">
            <span>▤</span>
            <div>
              <b>Unified Developer Workspace</b>
              <small>REPO INSIGHTS → REPRODUCIBLE BUILDS</small>
            </div>
            <span>↗</span>
          </div>
        </div>
      )}

      <div className="visual-caption">
        <span>CONCEPTUAL SYSTEM ARCHITECTURE</span>
        <span>0{Number(project.number)} / VEDANT DUBEY</span>
      </div>
    </div>
  );
}
