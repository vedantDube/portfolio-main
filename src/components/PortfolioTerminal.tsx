"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { profile, projects, skills, experience } from "@/content/profile";

type Entry = {
  id: number;
  command: string;
  path: string;
  output: string;
  link?: { label: string; href: string };
};

const commands = [
  "help",
  "draw cat",
  "draw dog",
  "draw vedant",
  "draw robot",
  "draw system",
  "art",
  "ls",
  "pwd",
  "whoami",
  "cd vedant",
  "cd projects",
  "cd ..",
  "cat about.txt",
  "cat vision.txt",
  "cat contact.txt",
  "projects",
  "experience",
  "skills",
  "education",
  "achievements",
  "contact",
  "resume",
  "open flowops",
  "open cookgpt",
  "open devflow",
  "history",
  "clear",
];

const drawings: Record<string, string> = {
  cat: String.raw` /\_/\
( o.o )
 > ^ <
 /| |\
(_| |_)`,
  dog: String.raw` / \__
(    @\___
 /         O
/   (_____/
/_____/   U`,
  vedant: String.raw`V   V  EEEEE  DDDD    A    N   N  TTTTT
V   V  E      D   D  A A   NN  N    T  
V   V  EEEE   D   D AAAAA  N N N    T  
 V V   E      D   D A   A  N  NN    T  
  V    EEEEE  DDDD  A   A  N   N    T  

     < build. scale. automate. />`,
  robot: String.raw`    [o_o]
   /|___|\
  / |   | \
    d   b`,
  system: String.raw`[ Client ] --> [ API ] --> [ Webhooks ]
                 |              |
                 v              v
             [ Redis ]     [ AI Worker ]
                                |
                                v
                           [ PostgreSQL ]`,
};

export default function PortfolioTerminal() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [input, setInput] = useState("");
  const [path, setPath] = useState("~");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const output = useRef<HTMLDivElement>(null);
  const field = useRef<HTMLInputElement>(null);

  const about =
    "Vedant Dubey — Full Stack Developer & AI/ML Engineer (NIT Raipur ECE ’27).\nBuilding real-time distributed platforms, multimodal AI systems, and automated developer tooling.";

  useEffect(() => {
    output.current?.scrollTo({
      top: output.current.scrollHeight,
      behavior: "smooth",
    });
  }, [entries]);

  const execute = (raw: string) => {
    const trimmed = raw.trim();
    if (!trimmed) return;
    setHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);
    const [verb, ...rest] = trimmed.split(/\s+/);
    const arg = rest.join(" ");
    let text = "";
    let link: Entry["link"];

    switch (verb) {
      case "help":
        text =
          "NAVIGATE\n  ls · pwd · cd vedant · cd projects · cd ..\nEXPLORE\n  whoami · cat about.txt · cat vision.txt\n  projects · skills · education · achievements\nCONNECT\n  contact · resume · open <project-slug>\nASCII STUDIO\n  draw cat · draw dog · draw vedant\n  draw robot · draw system · art\nSHELL\n  history · clear\n\nUse ↑ / ↓ for history and Tab for command completion.";
        break;
      case "art":
        text =
          "ASCII STUDIO\nAvailable drawings: cat, dog, vedant, robot, system\nTry: draw cat (or ascii cat).";
        break;
      case "draw":
      case "ascii":
        text =
          drawings[arg.toLowerCase()] ||
          "Choose a drawing: draw cat, draw dog, draw vedant, draw robot, draw system.";
        break;
      case "dog":
      case "vedant":
        text = drawings[verb];
        break;
      case "pwd":
        text =
          path === "~"
            ? "/home/visitor"
            : path === "~/vedant"
              ? "/home/vedant"
              : "/home/vedant/projects";
        break;
      case "ls":
        text =
          path === "~"
            ? "vedant/"
            : path === "~/vedant"
              ? "about.txt  vision.txt  contact.txt  projects/  skills.json  resume.pdf"
              : "flowops/  cookgpt/  devflow/";
        break;
      case "cd": {
        if (!arg || arg === "~" || arg === "/home/visitor") {
          setPath("~");
          text = "Returned to /home/visitor.";
        } else if (
          arg === "vedant" ||
          arg === "/home/vedant" ||
          arg === "~/vedant"
        ) {
          setPath("~/vedant");
          text =
            about +
            "\n\nAvailable: about.txt, vision.txt, contact.txt, projects/, skills.json, resume.pdf.\nTry: projects";
        } else if (
          arg === "projects" ||
          arg === "vedant/projects" ||
          arg === "~/vedant/projects"
        ) {
          setPath("~/vedant/projects");
          text = "Project directory opened. Type ls or projects.";
        } else if (arg === "..") {
          setPath(path === "~/vedant/projects" ? "~/vedant" : "~");
          text = "Moved up one directory.";
        } else text = `cd: ${arg}: directory not found. Try cd vedant.`;
        break;
      }
      case "whoami":
        text = "Vedant Dubey\n" + about;
        break;
      case "cat":
        if (!arg) text = drawings.cat;
        else if (arg === "about.txt") text = about;
        else if (arg === "vision.txt") text = profile.vision;
        else if (arg === "contact.txt") text = profile.email;
        else if (arg === "skills.json")
          text = JSON.stringify(
            Object.fromEntries(
              skills.map((s) => [s.name, s.items.split(" · ")]),
            ),
            null,
            2,
          );
        else
          text = `cat: ${arg || "(missing file)"}: file not found. Try cat about.txt.`;
        break;
      case "projects":
        text = projects
          .map(
            (p) =>
              `${p.number} / ${p.name.toUpperCase()} [${p.category}]\n${p.description}\nStack: ${p.stack.join(", ")}`,
          )
          .join("\n\n");
        break;
      case "experience":
        text = experience
          .map((e) => `[${e.date}] ${e.role}\n${e.title}\n${e.text}`)
          .join("\n\n");
        break;
      case "skills":
        text = skills.map((s) => `${s.name}:\n  ${s.items}`).join("\n\n");
        break;
      case "education":
        text =
          "B.Tech in Electronics & Communication Engineering\nNational Institute of Technology Raipur (2023 — 2027)\nFocus: Algorithms, Distributed Systems, Digital Communication, Networks.";
        break;
      case "achievements":
        text =
          "• 1st Place Winner, AI Hackathon (CookGPT Multimodal AI)\n• AI & Operations Developer, Cubelelo\n• Open Source Contributor, FOSSEE CFD (IIT Bombay)\n• FlowOps SaaS Platform Developer";
        break;
      case "contact":
        text = `Email: ${profile.email}\nGitHub: ${profile.github}\nLinkedIn: ${profile.linkedin}\nLocation: ${profile.location}`;
        break;
      case "resume":
        text = "Resume file available for download.";
        link = { label: "Download resume.pdf ↗", href: "/resume.pdf" };
        break;
      case "open": {
        const target = projects.find(
          (p) =>
            p.slug === arg.toLowerCase() ||
            p.name.toLowerCase() === arg.toLowerCase(),
        );
        if (target) {
          text = `Opening ${target.name} case study…`;
          link = {
            label: `Read ${target.name} Case Study ↗`,
            href: `/projects/${target.slug}`,
          };
        } else {
          text = `Unknown project "${arg}". Available: ${projects.map((p) => p.slug).join(", ")}.`;
        }
        break;
      }
      case "clear":
        setEntries([]);
        return;
      case "history":
        text = history.map((cmd, i) => `${i + 1}  ${cmd}`).join("\n");
        break;
      default:
        text = `Command not recognized: "${trimmed}". Type "help" for a list of available commands.`;
    }

    setEntries((prev) => [
      ...prev,
      { id: Date.now(), command: trimmed, path, output: text, link },
    ]);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    execute(input);
    setInput("");
  };

  const keydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!history.length) return;
      const next =
        historyIndex === -1
          ? history.length - 1
          : Math.max(0, historyIndex - 1);
      setHistoryIndex(next);
      setInput(history[next]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === -1) return;
      const next = historyIndex + 1;
      if (next >= history.length) {
        setHistoryIndex(-1);
        setInput("");
      } else {
        setHistoryIndex(next);
        setInput(history[next]);
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const match = commands.find((c) =>
        c.startsWith(input.trim().toLowerCase()),
      );
      if (match) setInput(match);
    }
  };

  return (
    <div className="portfolio-terminal">
      <div className="terminal-bar">
        <span className="terminal-lights" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span>visitor@vedant / portfolio</span>
        <span>INTERACTIVE SHELL</span>
      </div>
      <div
        className="terminal-output"
        ref={output}
        role="log"
        aria-label="Portfolio terminal output"
        aria-live="polite"
        aria-relevant="additions"
      >
        <div className="terminal-welcome">
          <span>Explore the work from a different prompt.</span>
          <p>
            Start with <code>cd vedant</code> or <code>help</code>.
          </p>
        </div>
        {entries.map((entry) => (
          <div className="terminal-entry" key={entry.id}>
            <div className="terminal-command">
              <span>visitor:{entry.path} $</span> {entry.command}
            </div>
            <pre>{entry.output}</pre>
            {entry.link && (
              <Link className="terminal-result-link" href={entry.link.href}>
                {entry.link.label}
              </Link>
            )}
          </div>
        ))}
      </div>
      <form className="terminal-input-row" onSubmit={submit}>
        <label htmlFor="portfolio-command">
          <span>visitor:{path}</span> $
        </label>
        <input
          id="portfolio-command"
          ref={field}
          aria-label="Terminal command"
          autoComplete="off"
          spellCheck={false}
          autoCapitalize="none"
          value={input}
          maxLength={200}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={keydown}
          placeholder="Type a command…"
        />
        <button type="submit" aria-label="Run terminal command">
          ↵
        </button>
      </form>
      <div className="terminal-shortcuts" aria-label="Suggested commands">
        {[
          "help",
          "cd vedant",
          "projects",
          "draw cat",
          "draw vedant",
          "draw system",
          "clear",
        ].map((command) => (
          <button
            key={command}
            onClick={() => {
              execute(command);
              field.current?.focus();
            }}
          >
            {command}
          </button>
        ))}
      </div>
      <p className="terminal-note">
        Portfolio simulation · commands explore profile data and never execute
        on a server.
      </p>
    </div>
  );
}
