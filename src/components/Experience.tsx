"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  Menu,
  X,
  Copy,
  Check,
  Play,
  RotateCcw,
  AlertTriangle,
  Download,
  Github,
  Linkedin,
  Code2,
  Database,
  Cloud,
  BrainCircuit,
  Network,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { profile, skills } from "@/content/profile";
const nav = [
  ["About", "about"],
  ["Work", "work"],
  ["Experience", "experience"],
  ["Skills", "skills"],
  ["Contact", "contact"],
];
export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-15% 0px -55% 0px" },
    );
    document
      .querySelectorAll("section[id]")
      .forEach((e) => observer.observe(e));
    return () => observer.disconnect();
  }, [pathname]);
  useEffect(() => {
    if (open) {
      const close = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setOpen(false);
          document.querySelector<HTMLButtonElement>(".menu-button")?.focus();
        }
      };
      window.addEventListener("keydown", close);
      return () => window.removeEventListener("keydown", close);
    }
  }, [open]);
  return (
    <>
      <header className="nav-shell">
        <Link className="wordmark" href="/" aria-label="Vedant Dubey home">
          v<span>d</span>
          <i />
        </Link>
        <nav
          aria-label="Main navigation"
          className={open ? "nav-links is-open" : "nav-links"}
        >
          {nav.map(([label, id]) => (
            <Link
              href={`/#${id}`}
              key={id}
              className={active === id ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          <button
            className="quick-button"
            onClick={() => dialog.current?.showModal()}
          >
            Quick view <span>↗</span>
          </button>
          <a className="nav-resume" href="/resume.pdf" download>
            Resume <Download size={13} />
          </a>
          <button
            className="menu-button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <dialog
        ref={dialog}
        className="quick-dialog"
        onClick={(e) => {
          if (e.target === e.currentTarget) dialog.current?.close();
        }}
      >
        <button
          className="dialog-close"
          aria-label="Close quick view"
          onClick={() => dialog.current?.close()}
        >
          <X />
        </button>
        <p className="eyebrow">THE 30-SECOND VERSION</p>
        <h2>Meet Vedant.</h2>
        <p>
          Full Stack Developer &amp; AI/ML Engineer.
          <br />
          NIT Raipur · ECE 2027
        </p>
        <dl>
          <dt>Builds with</dt>
          <dd>Next.js, React, TypeScript, Node.js, Python, Flask, LangChain, Pinecone, PostgreSQL, Docker</dd>
          <dt>Experience</dt>
          <dd>
            AI &amp; Operations at Cubelelo · FOSSEE CFD (IIT Bombay) · 1st Place Hackathon Winner
          </dd>
          <dt>Selected work</dt>
          <dd>FlowOps · CookGPT</dd>
          <dt>Proof of work</dt>
          <dd>
            Hackathon 1st Place · 10,000+ Vector RAG Index · Real-Time Webhooks &amp; RBAC
          </dd>
        </dl>
        <div className="button-row">
          <a className="button primary" href="/resume.pdf" download>
            Download resume <Download size={16} />
          </a>
          <a className="button" href={`mailto:${profile.email}`}>
            Say hello <ArrowUpRight size={16} />
          </a>
        </div>
      </dialog>
    </>
  );
}
export function MotionSystem() {
  const pathname = usePathname();
  const cursor = useRef<HTMLDivElement>(null);
  const intro = useRef<HTMLDivElement>(null);
  const [view, setView] = useState(false);
  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const pointer = window.matchMedia("(pointer: fine)").matches;
    gsap.registerPlugin(ScrollTrigger);
    let seen = true;
    try {
      seen = sessionStorage.getItem("vedant-intro") === "1";
      sessionStorage.setItem("vedant-intro", "1");
    } catch {}
    const ctx = gsap.context(() => {
      if (!reduce && !seen && pathname === "/" && intro.current) {
        gsap.set(intro.current, { display: "flex" });
        gsap
          .timeline()
          .fromTo(
            ".intro-name",
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6 },
          )
          .to(".intro-line", { scaleX: 1, duration: 0.45 })
          .to(intro.current, {
            yPercent: -100,
            duration: 0.65,
            ease: "power3.inOut",
            onComplete: () => {
              if (intro.current) intro.current.style.display = "none";
            },
          });
      }
      if (!reduce && document.querySelector(".hero")) {
        gsap.from(".hero-title .line", {
          y: 65,
          opacity: 0,
          stagger: 0.12,
          duration: 1,
          ease: "power3.out",
          delay: seen ? 0.1 : 1.1,
        });
        document.querySelectorAll(".reveal").forEach((el) =>
          gsap.from(el, {
            y: 35,
            opacity: 0,
            duration: 0.8,
            scrollTrigger: { trigger: el, start: "top 94%", once: true },
          }),
        );
      }
    });
    const hero = document.querySelector<HTMLElement>(".hero");
    const portrait = document.querySelector<HTMLElement>(".hero-image-wrap");
    const portraitObserver =
      hero && portrait
        ? new IntersectionObserver(
            ([entry]) => {
              const visibleAtTop = Math.min(
                1,
                window.innerHeight / entry.boundingClientRect.height,
              );
              const amount = Math.max(
                0,
                Math.min(1, entry.intersectionRatio / visibleAtTop),
              );
              portrait.style.opacity = String(amount);
              portrait.style.transform = reduce
                ? "none"
                : `translateY(${(1 - amount) * -36}px) scale(${0.94 + amount * 0.06})`;
            },
            { threshold: Array.from({ length: 21 }, (_, i) => i / 20) },
          )
        : null;
    if (hero) portraitObserver?.observe(hero);
    const move = (e: PointerEvent) => {
      if (!pointer || reduce) return;
      document.documentElement.style.setProperty(
        "--pointer-x",
        `${e.clientX}px`,
      );
      document.documentElement.style.setProperty(
        "--pointer-y",
        `${e.clientY}px`,
      );
      if (cursor.current) {
        cursor.current.style.transform = `translate3d(${e.clientX}px,${e.clientY}px,0)`;
        cursor.current.style.opacity = "1";
      }
      setView(!!(e.target as Element).closest("[data-view]"));
      const hero = document.querySelector<HTMLElement>(".hero-image");
      if (hero)
        hero.style.transform = `translate3d(${(e.clientX / window.innerWidth - 0.5) * 9}px,${(e.clientY / window.innerHeight - 0.5) * 7}px,0)`;
    };
    const magnetic = (e: PointerEvent) => {
      if (!pointer || reduce) return;
      const target = (e.target as Element).closest<HTMLElement>(".magnetic");
      if (target) {
        const r = target.getBoundingClientRect();
        target.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.09}px,${(e.clientY - r.top - r.height / 2) * 0.09}px)`;
      }
    };
    const reset = (e: PointerEvent) => {
      const target = (e.target as Element).closest<HTMLElement>(".magnetic");
      if (target) target.style.transform = "";
    };
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointermove", magnetic, { passive: true });
    window.addEventListener("pointerout", reset);
    return () => {
      ctx.revert();
      portraitObserver?.disconnect();
      if (portrait) {
        portrait.style.opacity = "";
        portrait.style.transform = "";
      }
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointermove", magnetic);
      window.removeEventListener("pointerout", reset);
    };
  }, [pathname]);
  return (
    <>
      <div
        className={`cursor-halo ${view ? "is-view" : ""}`}
        ref={cursor}
        aria-hidden="true"
      >
        {view ? "VIEW" : ""}
      </div>
      <div className="intro" ref={intro} aria-label="Introduction animation">
        <span className="eyebrow">INITIALIZING EXPERIENCE</span>
        <div className="intro-name">
          VEDANT DUBEY<span>_</span>
        </div>
        <div className="intro-line" />
        <button
          onClick={() => {
            if (intro.current) {
              gsap.killTweensOf(intro.current);
              intro.current.style.display = "none";
            }
          }}
          tabIndex={0}
        >
          Skip intro ↗
        </button>
      </div>
    </>
  );
}
const steps = [
  "Client",
  "Ingestion API",
  "MongoDB",
  "Redis / BullMQ",
  "Worker",
  "Dashboard",
];
const descriptions = [
  "A client sends an event with a project key and idempotency key.",
  "The API checks authorization, project limits and duplicate ingestion.",
  "Event state is persisted in MongoDB for visibility.",
  "BullMQ uses Redis to queue background work.",
  "A separate worker executes the handler; failures can be retried.",
  "Job state is reflected in the dashboard. Webhooks have independent delivery retries.",
];
export function EngineeringFlow() {
  const [step, setStep] = useState(-1);
  const [running, setRunning] = useState(false);
  const [fail, setFail] = useState(false);
  const [retried, setRetried] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );
  const run = () => {
    if (timer.current) clearTimeout(timer.current);
    setRunning(true);
    setRetried(false);
    setStep(0);
    let i = 0;
    let retry = false;
    const advance = () => {
      if (i === 4 && fail && !retry) {
        retry = true;
        setRetried(true);
        timer.current = setTimeout(advance, 1100);
        return;
      }
      i++;
      if (i < steps.length) {
        setStep(i);
        timer.current = setTimeout(advance, 850);
      } else setRunning(false);
    };
    timer.current = setTimeout(advance, 850);
  };
  return (
    <div className="engineering-console">
      <div className="console-top">
        <span>
          <i className="status-dot" /> EVENTFORGE / EVENT LIFECYCLE
        </span>
        <span>INTERACTIVE SIMULATION</span>
      </div>
      <div className="flow-nodes">
        {steps.map((s, i) => (
          <div
            className={`flow-node ${step === i && running ? "current" : ""} ${step > i || (step === 5 && !running) ? "complete" : ""} ${i === 4 && retried && step === 4 ? "retrying" : ""}`}
            key={s}
          >
            <div className="node-symbol">
              {["↗", "{ }", "▤", "≋", "⚙", "◷"][i]}
            </div>
            <span>{s}</span>
            <small>
              {i === 4 && retried && step === 4
                ? "RETRY + BACKOFF"
                : step > i || (step === 5 && !running)
                  ? "PROCESSED"
                  : step === i
                    ? "PROCESSING"
                    : "WAITING"}
            </small>
            {i < 5 && (
              <span className="node-line" aria-hidden="true">
                <i />
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="flow-description" role="status" aria-live="polite">
        <span className="terminal-prompt">→</span>
        <span>
          {step < 0
            ? "Send an event. Follow the work behind the response."
            : retried && step === 4
              ? "Simulated first-attempt failure → backoff → retry."
              : descriptions[step]}
          {step === 5 && !running ? " Lifecycle complete." : ""}
        </span>
      </div>
      <div className="console-bottom">
        <button className="button primary" disabled={running} onClick={run}>
          {running ? "Processing…" : step >= 0 ? "Run again" : "Trigger event"}
          {step >= 0 ? <RotateCcw size={15} /> : <Play size={15} />}
        </button>
        <label className="toggle-label">
          <input
            type="checkbox"
            checked={fail}
            disabled={running}
            onChange={(e) => setFail(e.target.checked)}
          />
          <AlertTriangle size={14} /> Simulate worker failure
        </label>
        <span className="flow-hint">
          Illustrative timing · no live requests
        </span>
      </div>
    </div>
  );
}
export function CopyEmail() {
  const [phase, setPhase] = useState<"idle" | "copied" | "leaving" | "error">(
    "idle",
  );
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  useEffect(() => () => timers.current.forEach(clearTimeout), []);
  const copy = async () => {
    timers.current.forEach(clearTimeout);
    try {
      await navigator.clipboard.writeText(profile.email);
      setPhase("copied");
      timers.current = [
        setTimeout(() => setPhase("leaving"), 2000),
        setTimeout(() => setPhase("idle"), 2300),
      ];
    } catch {
      setPhase("error");
      timers.current = [setTimeout(() => setPhase("idle"), 3000)];
    }
  };
  return (
    <button
      className={`copy-email copy-${phase}`}
      aria-label="Copy email address"
      onClick={copy}
    >
      <span className="copy-default" aria-hidden="true">
        <Copy size={18} />
        <span>Copy email</span>
      </span>
      <span className="copy-success" aria-hidden="true">
        <Check size={18} />
        <span>Copied!</span>
      </span>
      <span className="sr-only" role="status">
        {phase === "copied"
          ? "Email copied to clipboard."
          : phase === "error"
            ? "Copy unavailable. Please use the email link."
            : ""}
      </span>
      {phase === "error" && (
        <span className="copy-error">Use the email link</span>
      )}
    </button>
  );
}
export function Toolkit() {
  const icons = [Code2, Database, Cloud, BrainCircuit, Network];
  return (
    <div className="toolkit-console">
      <div className="toolkit-console-bar">
        <span>
          <i /> ENGINEERING STACK
        </span>
        <span>05 SPECIALTIES / ONE TOOLBOX</span>
      </div>
      {skills.map((skill, i) => {
        const Icon = icons[i];
        return (
          <article className="toolkit-row" key={skill.name}>
            <div className="toolkit-category">
              <span className="toolkit-icon">
                <Icon size={22} strokeWidth={1.5} />
              </span>
              <h3>{skill.name}</h3>
            </div>
            <div className="toolkit-tags">
              {skill.items.split(" · ").map((item) => (
                <span key={item}>{item}</span>
              ))}
              {skill.name === "Cloud & DevOps" && (
                <span className="toolkit-cert">
                  <Check size={11} /> OCI AI Certified
                </span>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}
export function SocialLinks() {
  return (
    <div className="social-links">
      <a href={profile.github} aria-label="GitHub">
        <Github size={18} />
      </a>
      <a href={profile.linkedin} aria-label="LinkedIn">
        <Linkedin size={18} />
      </a>
      <a href={`mailto:${profile.email}`} aria-label="Email Vedant">
        <ArrowUpRight size={20} />
      </a>
    </div>
  );
}
