export const profile = {
  name: "Vedant Dubey",
  tagline:
    "NIT Raipur ECE ’27 | Full Stack Developer & AI/ML Engineer | Building Scalable Systems, Autonomous RAG & High-Throughput Pipelines",
  vision:
    "Engineering high-throughput full-stack platforms, autonomous agent workflows, and intelligent developer tools that deliver real-world impact.",
  contactPrompt:
    "Have a software engineering challenge, an AI/ML collaboration, or an SDE opportunity to discuss? Let’s connect.",
  email: "vedhem999@gmail.com",
  phone: "+91-8770824276",
  github: "https://github.com/vedantDube",
  linkedin: "https://www.linkedin.com/in/vedant-dubey-55a934287/",
  codeforces: "https://github.com/vedantDube",
  leetcode: "https://leetcode.com/u/vedantDube/",
  codechef: "https://www.codechef.com/users/vedantDube",
  location: "Raipur, India · Open to Remote & Relocation",
  college: "National Institute of Technology Raipur",
};

export const projects = [
  {
    slug: "flowops",
    name: "FlowOps",
    category: "ENGINEERING INTELLIGENCE & SAAS",
    number: "01",
    color: "cyan",
    description: "Real-time engineering intelligence, automated PR reviews & Git analytics.",
    summary:
      "A multi-tenant SaaS platform ingesting GitHub commits, pull requests, and reviews via OAuth and webhooks to surface 10+ real-time engineering metrics, detect anti-patterns, and automate code reviews.",
    stack: [
      "Next.js",
      "Express",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Docker",
      "Socket.io",
      "GitHub OAuth",
    ],
    github: "https://github.com/vedantDube/flowops",
    demo: "https://flow-ops-liard.vercel.app/",
    problem:
      "Engineering teams suffer velocity bottlenecks from delayed reviews, unmonitored stale PRs, and lack of real-time visibility into developer throughput across repositories.",
    contribution:
      "Engineered the GitHub webhook ingestion pipeline, automated AI review pipeline (Gemini/LangChain) with security & anti-pattern detection, PR automation engine with Slack/email nudges reducing turnaround by 40%, 4-tier RBAC, and real-time dashboard updates via Socket.io.",
    flow: [
      "GitHub Webhooks",
      "Express Ingestion",
      "PostgreSQL + Prisma",
      "Gemini AI Review Engine",
      "Live Dashboard / Socket.io",
    ],
    details: [
      [
        "Real-Time Webhook Ingestion",
        "Ingests GitHub commits, PRs, and comments with cryptographic signature verification and idempotent processing.",
      ],
      [
        "Automated AI Review Pipeline",
        "Detects security vulnerabilities and anti-patterns in diffs, suggests automated refactors, and auto-approves verified low-risk changes.",
      ],
      [
        "4-Tier RBAC & Real-Time Sync",
        "Multi-tenant organization architecture with secure httpOnly cookie session auth and live WebSocket event streams.",
      ],
    ],
    tradeoff:
      "Decoupling webhook acknowledgment from deep LLM diff analysis prevents GitHub timeouts while background workers handle intensive refactor generation.",
    result:
      "Reduced PR turnaround time by 40% with real-time Slack/email nudges, 10+ live metrics, and weekly 'time saved' impact digests for engineering managers.",
    visual: "flow",
  },
  {
    slug: "cookgpt",
    name: "CookGPT",
    category: "MULTIMODAL AI & RAG",
    number: "02",
    color: "blue",
    description: "Multimodal culinary intelligence with sub-second RAG retrieval.",
    summary:
      "A 1st-place hackathon winning multimodal culinary chatbot that answers complex recipe and nutrition queries from text and images using Pinecone vector search and Google Gemini.",
    stack: [
      "Python",
      "Flask",
      "LangChain",
      "Pinecone",
      "Google Gemini",
      "React",
      "TailwindCSS",
      "Clerk",
    ],
    github: "https://github.com/vedantDube/cookgpt",
    demo: "https://cook-gpt-azure.vercel.app/",
    problem:
      "Cooking assistants struggle with photo queries of raw ingredients, fail to offer sub-second latency, and lack grounded dietary reasoning over large recipe collections.",
    contribution:
      "Built multimodal vision-to-recipe pipeline using Google Gemini, scaled vector retrieval over 10,000+ embeddings in Pinecone, implemented Flask streaming responses with 30% higher response accuracy, and integrated Clerk user authentication.",
    flow: [
      "User Image / Query",
      "Flask API",
      "Pinecone Semantic Retrieval",
      "Gemini Multimodal Reasoning",
      "React Streaming UI",
    ],
    details: [
      [
        "Sub-Second Multimodal RAG",
        "Combines image ingredient recognition with dense vector embeddings to deliver personalized culinary recommendations in sub-second latency.",
      ],
      [
        "10,000+ Vector Scalability",
        "Pinecone index optimized with custom metadata filtering for dietary restrictions, preparation time, and cuisine categories.",
      ],
      [
        "Grounded LLM Reasoning",
        "Strict prompt boundaries prevent recipe hallucinations and provide structured step-by-step guides with exact nutritional breakdowns.",
      ],
    ],
    tradeoff:
      "Pure vector similarity can overlook exact ingredient quantity constraints; hybrid retrieval with metadata filtering ensures nutritional precision while preserving conversational fluency.",
    result:
      "Awarded 1st place in Hack-o-Harbour / AI Hackathon for best multimodal execution, sub-second latency streaming responses, and 30% accuracy boost.",
    visual: "chat",
  },
  {
    slug: "devflow",
    name: "DevFlow",
    category: "SYSTEMS & AUTOMATION",
    number: "03",
    color: "warm",
    description: "Streamlined developer workflows and collaborative tooling.",
    summary:
      "An integrated platform for developers to orchestrate pipelines, collaborate across repositories, and automate routine build and deployment workflows.",
    stack: [
      "TypeScript",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "Tailwind CSS",
    ],
    github: "https://github.com/vedantDube",
    demo: "https://devflow-six-gamma.vercel.app/",
    problem:
      "Developers lose hours each week switching context between fragmented tools for issue tracking, branch coordination, and deployment visibility.",
    contribution:
      "Built modern full-stack web interface, REST APIs, PostgreSQL data models, and automated CI/CD pipelines with containerized Docker deployments.",
    flow: [
      "Developer Action",
      "Next.js App",
      "Node.js Core API",
      "PostgreSQL",
      "Docker Deployment",
    ],
    details: [
      [
        "Unified Workflow Dashboard",
        "Aggregates repository statuses, active tasks, and team milestones in one reactive interface.",
      ],
      [
        "Automated Pipeline Triggers",
        "Configurable triggers execute build and deployment workflows with end-to-end audit logs.",
      ],
      [
        "Containerized Reproducibility",
        "Docker setups guarantee development and production parity across services.",
      ],
    ],
    tradeoff:
      "Monolithic developer tooling often bloats client bundle size; modular code splitting and Next.js server components preserve fast page loads.",
    result:
      "High performance developer portal featured on Devpost, with rapid response times and consistent developer-first ergonomics.",
    visual: "research",
  },
] as const;

export type Project = (typeof projects)[number];

export const experience = [
  {
    date: "MAY 2026 — PRESENT",
    title: "Reconciliation, automation & marketplace integrations.",
    role: "Software Engineer Intern (Part-Time) · Cubelelo",
    text: "Built rules-based classification engine for returns across 10+ marketplaces, normalized Supabase Postgres schemas with idempotent upserts, and built Playwright session automations saving ~25 hrs/week.",
  },
  {
    date: "MAY 2025 — PRESENT",
    title: "CFD (OpenFOAM) parser & RAG integration.",
    role: "Software Developer (Part-Time) · FOSSEE, IIT Bombay",
    text: "Engineered grammar-based extraction parser converting 100+ OpenFOAM case configs to PyVNT with 100% fidelity, and built RAG pipeline improving CFD comment extraction by 35% and cutting setup time by 50%.",
  },
  {
    date: "2025 — 2026",
    title: "Hackathons, research & high-speed RAG.",
    role: "Winner · Hack-o-Harbour & Runner-Up · Codeutsav 8.0",
    text: "Won 1st Place at Hack-o-Harbour (150+ teams) with CookGPT; Runner-Up at Codeutsav 8.0 (300+ teams); Co-authored IEEE paper on Multi-Actor DRL with LLM for Sparse Hybrid RIS-IAB Networks.",
  },
  {
    date: "2023 — 2027",
    title: "Foundations in electronics, algorithms and systems.",
    role: "B.Tech Electronics & Communication Engineering · NIT Raipur",
    text: "Algorithms, distributed systems, digital communication, and computer networks. Expected graduation in 2027. Selected for Amazon ML Summer School 2026.",
  },
];

export const skills = [
  {
    name: "Languages",
    items: "TypeScript · JavaScript · Python · C/C++ · SQL · HTML/CSS",
    use: "Full-stack web engineering, distributed systems, and AI/ML model pipelines.",
  },
  {
    name: "Frameworks & Backend",
    items:
      "Next.js · React.js · Node.js · Express.js · Flask · Supabase · PostgreSQL · Prisma · MongoDB · GraphQL · REST APIs",
    use: "FlowOps SaaS architecture, Cubelelo warehouse systems, and CookGPT services.",
  },
  {
    name: "AI / ML & Retrieval",
    items:
      "LangChain · HuggingFace Transformers · PyTorch · Pinecone · RAG Architectures · Google Gemini API · LLMs · Vector Search",
    use: "CookGPT multimodal vision, sub-second vector RAG, and FOSSEE CFD config extraction.",
  },
  {
    name: "DevOps & Developer Tools",
    items:
      "Docker · CI/CD Pipelines · Playwright · Git & GitHub · Linux · AWS (EC2, S3) · OpenFOAM · Jest · Pytest",
    use: "Playwright session automation, containerized microservices, and automated testing.",
  },
  {
    name: "Achievements & Honors",
    items:
      "Winner, Hack-o-Harbour 2025 (150+ teams) · Runner-Up, Codeutsav 8.0 (300+ teams) · Selected for Amazon ML Summer School 2026 · IEEE Research Paper Under Review",
    use: "Proven execution in high-pressure hackathons and rigorous academic research.",
  },
];
