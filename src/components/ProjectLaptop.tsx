"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Play, ImageIcon } from "lucide-react";
import type { Project } from "@/content/profile";
export default function ProjectLaptop({ project }: { project: Project }) {
  const root = useRef<HTMLDivElement>(null);
  const display = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [live, setLive] = useState(false);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (!root.current) return;
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setOpen(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 },
    );
    observer.observe(root.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!display.current) return;
    const observer = new ResizeObserver(([e]) =>
      display.current?.style.setProperty(
        "--screen-scale",
        String(e.contentRect.width / 1280),
      ),
    );
    observer.observe(display.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div
      className={`project-laptop ${open ? "lid-open" : ""} laptop-${project.color}`}
      ref={root}
    >
      <div className="laptop-stage">
        <div className="macbook-screen">
          <div className="macbook-camera" aria-hidden="true" />
          <a
            className="laptop-browser"
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            title={`Open ${project.name} live website in a new tab`}
          >
            <span aria-hidden="true">● ● ●</span>
            <span>{new URL(project.demo).hostname}</span>
            <ArrowUpRight size={9} />
          </a>
          <div className="laptop-display" ref={display}>
            <Image
              src={`/images/projects/${project.slug}.webp`}
              alt={`${project.name}: application dashboard interface shown inside a MacBook-style laptop`}
              width={1280}
              height={800}
              sizes="(max-width:700px) 85vw, 48vw"
            />
            <>
              {live && (
                <iframe
                  className={loaded ? "live-loaded" : ""}
                  title={`${project.name} live website preview`}
                  src={project.demo}
                  loading="lazy"
                  allow="camera; microphone; clipboard-write;"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
                  referrerPolicy="no-referrer"
                  onLoad={() => setLoaded(true)}
                />
              )}
            </>
            {live && !loaded && (
              <span className="laptop-loading" role="status">
                Loading live website into laptop…
              </span>
            )}
          </div>
          <div className="macbook-brand">MacBook Pro</div>
        </div>
        <div className="macbook-base" aria-hidden="true">
          <span />
        </div>
        <div className="laptop-shadow" aria-hidden="true" />
      </div>
      <div className="laptop-actions">
        <a
          className="laptop-btn-primary"
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          title={`Open ${project.name} live website in a new tab`}
        >
          Open live website <ArrowUpRight size={13} />
        </a>
        <button
          className="laptop-btn-secondary"
          aria-pressed={live}
          onClick={() => {
            setLive(!live);
            setLoaded(false);
          }}
          title={
            live
              ? "Switch back to static capture"
              : "Embed and interact with live website directly inside this laptop"
          }
        >
          {live ? <ImageIcon size={13} /> : <Play size={13} />}{" "}
          {live ? "Show screenshot" : "Interactive iframe"}
        </button>
      </div>
      <div className="laptop-source">
        <span>
          {live
            ? "LIVE IFRAME ACTIVE · USE 'OPEN LIVE WEBSITE' FOR FULL BROWSER TAB"
            : "ACTUAL WEBSITE CAPTURE / OCT 2026"}
        </span>
        <Link href={`/projects/${project.slug}`} data-view>
          Case study <ArrowUpRight size={12} />
        </Link>
      </div>
    </div>
  );
}
