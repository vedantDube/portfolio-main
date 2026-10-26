export const profile = {
  name: "Vedant Dubey",
  tagline:
    "NIT Raipur ECE ’27 | Full Stack Developer & AI/ML Engineer | Building Scalable Systems & Multimodal AI Tooling",
  vision:
    "Engineering high-throughput full-stack platforms, autonomous agent workflows, and intelligent developer tools that deliver real-world impact.",
  contactPrompt:
    "Have a software engineering challenge, an AI/ML collaboration, or an SDE opportunity to discuss? Let’s connect.",
  email: "vedhem999@gmail.com",
  github: "https://github.com/vedantDube",
  linkedin: "https://www.linkedin.com/in/vedant-dubey-55a934287/",
  codeforces: "https://github.com/vedantDube",
  leetcode: "https://github.com/vedantDube",
  codechef: "https://github.com/vedantDube",
  location: "Based in India · Open to Remote & Relocation",
  college: "National Institute of Technology Raipur",
};

export const projects = [
  {
    slug: "flowops",
    name: "FlowOps",
    category: "ENGINEERING INTELLIGENCE & SAAS",
    number: "01",
    color: "cyan",
    description: "Real-time engineering intelligence and automated PR reviews.",
    summary:
      "A multi-tenant SaaS platform ingesting GitHub commits, pull requests, and code reviews via OAuth and webhooks to surface real-time metrics, detect anti-patterns, and automate approvals.",
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
    demo: "https://github.com/vedantDube/flowops",
    problem:
      "Engineering teams suffer velocity bottlenecks from delayed code reviews, missed security vulnerabilities, and lack of live visibility into team workflows.",
    contribution:
      "Engineered the GitHub webhook ingestion pipeline, automated AI review system for security/anti-pattern detection, 4-tier Role-Based Access Control (RBAC), and real-time dashboard updates over Socket.io.",
    flow: [
      "GitHub Webhooks",
      "Express Ingestion",
      "PostgreSQL + Prisma",
      "AI Review Pipeline",
      "Live Dashboard / Socket.io",
    ],
    details: [
      [
        "Real-time Ingestion & Webhooks",
        "Secure GitHub OAuth and webhook listeners ingest PRs, commits, and comments with deduplication and verified payloads.",
      ],
      [
        "Automated AI Review Engine",
        "Scans incoming PR diffs for security anti-patterns, potential regressions, and automatically nudges stale reviews while auto-approving low-risk changes.",
      ],
      [
        "Multi-Tenant RBAC & Live Sync",
        "4-tier role-based access control with live WebSocket event streaming keeps distributed teams synchronized without polling.",
      ],
    ],
    tradeoff:
      "Synchronous webhook processing creates latency bottlenecks; decoupling ingestion from AI evaluation enables instant GitHub acknowledgment while background workers process intensive diff analyses.",
    result:
      "Production-ready architecture handling concurrent webhooks with sub-second event ingestion, real-time WebSocket broadcasting, and automated security checks across repositories.",
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
      "React",
      "Flask",
      "Python",
      "LangChain",
      "Pinecone",
      "Google Gemini",
      "Clerk",
    ],
    github: "https://github.com/vedantDube/cookgpt",
    demo: "https://github.com/vedantDube/cookgpt",
    problem:
      "Cooking assistants struggle with photo queries of raw ingredients, fail to offer sub-second latency, and lack grounded dietary reasoning over large recipe collections.",
    contribution:
      "Built multimodal vision-to-recipe pipeline using Google Gemini, scaled vector retrieval over 10,000+ embeddings in Pinecone, implemented Flask streaming responses, and integrated Clerk user authentication.",
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
      "Awarded 1st place in hackathon competition for best multimodal execution, low latency streaming responses, and seamless photo-based ingredient analysis.",
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
    demo: "https://github.com/vedantDube",
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
    date: "2024 — PRESENT",
    title: "Data pipelines & automation at scale.",
    role: "AI & Operations Developer · Cubelelo",
    text: "Building automated data processing pipelines, integrating LLM-assisted tools for operations, and optimizing internal engineering workflows.",
  },
  {
    date: "2024",
    title: "Open-source engineering tools.",
    role: "Software Developer · FOSSEE CFD, IIT Bombay",
    text: "Contributed to open-source scientific computation workflows, developing robust data processing pipelines and engineering software tools.",
  },
  {
    date: "2024",
    title: "1st Place Winner.",
    role: "Hackathon Winner · CookGPT",
    text: "Won 1st place building CookGPT, a multimodal culinary AI engine utilizing Google Gemini, Pinecone vector search, and streaming RAG.",
  },
  {
    date: "2023 — 2027",
    title: "Foundations in systems and communication.",
    role: "B.Tech Electronics & Communication Engineering · NIT Raipur",
    text: "Algorithms, distributed systems, digital communication, and computer networks. Expected graduation in 2027.",
  },
];

export const skills = [
  {
    name: "Languages",
    items: "TypeScript · JavaScript · Python · C++ · SQL · HTML/CSS",
    use: "Full-stack engineering, algorithms, and AI/ML pipeline development.",
  },
  {
    name: "Full Stack & Backend",
    items:
      "Next.js · React · Node.js · Express · Flask · PostgreSQL · Prisma · MongoDB · Socket.io",
    use: "FlowOps real-time intelligence, CookGPT backend services, and scalable web apps.",
  },
  {
    name: "AI / ML & Retrieval",
    items:
      "LangChain · Pinecone · Google Gemini APIs · Vector Databases · Multimodal Reasoning · RAG Architectures",
    use: "CookGPT culinary intelligence, sub-second vector search, and LLM automation.",
  },
  {
    name: "DevOps & Cloud",
    items: "Docker · Git · GitHub Actions · CI/CD Pipelines · Linux · REST APIs",
    use: "Containerized deployments, automated PR review workflows, and repeatable environments.",
  },
  {
    name: "Engineering Practices",
    items:
      "Systems Thinking · Problem Decomposition · Cross-Functional Collaboration · Real-Time Event Handling",
    use: "Building clean, maintainable systems with robust testing and real-time observability.",
  },
];
