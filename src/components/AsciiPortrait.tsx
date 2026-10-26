"use client";
import { useEffect, useRef, useState } from "react";
import source from "@/content/ascii-frames.json";

const ramp = " .,:;irsXA253hMHGS#9B&@";

export default function AsciiPortrait({
  variant = "hero",
}: {
  variant?: "hero" | "study";
}) {
  const root = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const [paused, setPaused] = useState(false);
  const [showPhoto, setShowPhoto] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const element = root.current,
      target = canvas.current;
    if (!element || !target) return;
    const ctx = target.getContext("2d");
    if (!ctx) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    let raf = 0,
      last = 0,
      visible = true,
      width = 0,
      height = 0,
      progress = 0;

    const draw = (time: number) => {
      const still = paused || reduced.matches || showPhoto;
      if (visible && (time - last > (variant === "hero" ? 80 : 140) || still)) {
        last = time;
        const rect = element.getBoundingClientRect();
        progress =
          variant === "hero"
            ? Math.max(0, Math.min(1, -rect.top / (rect.height * 0.75)))
            : Math.max(
                0,
                Math.min(
                  1,
                  (innerHeight - rect.top) / (innerHeight + rect.height),
                ),
              );
        const phase = still ? 0 : progress * (source.frames.length - 1);
        const frame = Math.floor(phase),
          mix = phase - frame;
        const a = source.frames[frame] || source.frames[0],
          b = source.frames[Math.min(frame + 1, source.frames.length - 1)] || a;
        ctx.clearRect(0, 0, width, height);
        const artWidth = Math.min(width, height * 0.765);
        const artHeight = artWidth / 0.765;
        const offsetX = (width - artWidth) / 2;
        const offsetY = (height - artHeight) / 2;
        const cw = artWidth / source.columns,
          ch = artHeight / source.rows;
        ctx.font = `${Math.max(4, cw * 1.7)}px monospace`;
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
        const dissolve = still ? 0 : Math.max(0, progress - 0.25) * 0.8;
        for (let y = 0; y < source.rows; y++)
          for (let x = 0; x < source.columns; x++) {
            const i = y * source.columns + x;
            let l =
              ((a.charCodeAt(i) - 33) * (1 - mix) +
                (b.charCodeAt(i) - 33) * mix) /
              90;
            l = Math.max(0, Math.min(1, (l - 0.055) * 1.5));
            if (l < 0.035) continue;
            const noise = Math.sin(x * 127.1 + y * 311.7);
            const wave = still
              ? 0
              : Math.sin(y * 0.17 + time * 0.0008) * (0.35 + dissolve * 16);
            const glint = still
              ? 0
              : Math.max(
                  0,
                  1 - Math.abs(((time * 0.014) % source.rows) - y) / 5,
                ) * 0.28;
            const symbol =
              ramp[
                Math.min(ramp.length - 1, Math.floor(l * (ramp.length - 1)))
              ];
            const scattered =
              !still && noise > dissolve
                ? 0
                : Math.sin(time * 0.0005 + x) * dissolve * 24;
            ctx.fillStyle = `rgba(${Math.round(155 + l * 90)},${Math.round(188 + l * 55)},${Math.round(193 + l * 48)},${Math.min(1, 0.2 + l * 0.9 + glint)})`;
            ctx.fillText(
              symbol,
              offsetX + (x + 0.5) * cw + wave + scattered,
              offsetY + (y + 0.5) * ch,
            );
          }
        element.dataset.pose = String(frame + 1);
        element.dataset.progress = progress.toFixed(2);
        setReady(true);
      }
      if (!still) raf = requestAnimationFrame(draw);
    };

    const resize = () => {
      cancelAnimationFrame(raf);
      const r = element.getBoundingClientRect();
      width = r.width;
      height = r.height;
      const dpr = Math.min(devicePixelRatio || 1, 1.5);
      target.width = width * dpr;
      target.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw(performance.now());
    };

    const observer = new ResizeObserver(resize);
    observer.observe(element);
    const intersection = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
    });
    intersection.observe(element);
    const change = () => {
      cancelAnimationFrame(raf);
      draw(performance.now());
    };
    reduced.addEventListener("change", change);
    resize();
    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      intersection.disconnect();
      reduced.removeEventListener("change", change);
    };
  }, [paused, variant, showPhoto]);

  return (
    <div
      className={`ascii-portrait ascii-${variant} ${ready ? "ascii-ready" : ""}`}
      ref={root}
      role="group"
      aria-label="Vedant Dubey rendered in ASCII characters and portrait photo. Scroll to turn the portrait and disperse its characters."
    >
      <pre aria-hidden="true" className="ascii-fallback">
        {source.text}
      </pre>
      <canvas ref={canvas} aria-hidden="true" style={{ opacity: showPhoto ? 0 : 1, transition: "opacity 0.3s ease" }} />
      {showPhoto && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            borderRadius: "8px",
            zIndex: 1,
            animation: "fadeIn 0.3s ease forwards",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/vedant.jpg"
            alt="Vedant Dubey"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.05) brightness(0.92)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(8,9,11,0.85) 0%, rgba(8,9,11,0.2) 60%, transparent 100%)",
              pointerEvents: "none",
            }}
          />
        </div>
      )}
      <div className="ascii-crosshair crosshair-top" />
      <div className="ascii-crosshair crosshair-bottom" />
      <div className="ascii-caption">
        <span>VEDANT DUBEY / {showPhoto ? "HD PORTRAIT" : "CHARACTER STUDY"}</span>
        <span>{showPhoto ? "ORIGINAL CAPTURE" : "SCROLL TO TRANSFORM ↓"}</span>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "16px",
          right: "16px",
          display: "flex",
          gap: "8px",
          zIndex: 12,
        }}
      >
        <button
          className="ascii-pause"
          style={{ position: "static" }}
          onClick={() => setShowPhoto(!showPhoto)}
          aria-pressed={showPhoto}
          aria-label={showPhoto ? "Switch to ASCII canvas" : "Switch to real photo"}
        >
          {showPhoto ? "ASCII ⌁" : "PHOTO 📷"}
        </button>
        <button
          className="ascii-pause"
          style={{ position: "static" }}
          onClick={() => setPaused(!paused)}
          aria-pressed={paused}
          aria-label={paused ? "Play ASCII animation" : "Pause ASCII animation"}
        >
          {paused ? "PLAY ↗" : "PAUSE Ⅱ"}
        </button>
      </div>
    </div>
  );
}
