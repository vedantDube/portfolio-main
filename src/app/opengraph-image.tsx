import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Vedant Dubey — Full Stack Developer & AI/ML Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 70,
        width: "100%",
        height: "100%",
        background: "#08090b",
        color: "#f4f1ea",
      }}
    >
      <div style={{ fontSize: 22, color: "#7de4eb" }}>
        NIT RAIPUR · ECE 2027
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 100, letterSpacing: -6 }}>VEDANT DUBEY</div>
        <div style={{ fontSize: 35, color: "#aaa" }}>
          Full stack platforms. Multimodal AI architectures.
        </div>
      </div>
      <div style={{ fontSize: 20 }}>
        FULL STACK / MULTIMODAL AI & RAG / DISTRIBUTED SYSTEMS
      </div>
    </div>,
    size,
  );
}
