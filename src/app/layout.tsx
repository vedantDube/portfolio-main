import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const display = localFont({
  src: "./fonts/display.woff2",
  variable: "--font-display",
  display: "swap",
});
const body = localFont({
  src: "./fonts/body.woff2",
  variable: "--font-body",
  display: "swap",
});
const mono = localFont({
  src: "./fonts/mono.woff2",
  variable: "--font-mono",
  display: "swap",
  preload: false,
});

import { Navigation, MotionSystem } from "@/components/Experience";

const base = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  metadataBase: new URL(base || "http://localhost:3010"),
  title: {
    default: "Vedant Dubey | Full Stack Developer & AI/ML Engineer",
    template: "%s | Vedant Dubey",
  },
  description:
    "Vedant Dubey, NIT Raipur ECE 2027. Full stack engineering, real-time distributed platforms, multimodal AI systems and developer tooling.",
  ...(base ? { alternates: { canonical: "/" } } : {}),
  openGraph: {
    title: "Vedant Dubey — Full Stack Developer & AI/ML Engineer",
    description:
      "Full stack platforms. Multimodal AI architectures. Intelligent software.",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vedant Dubey — Full Stack & AI/ML Developer",
    images: ["/opengraph-image"],
  },
  icons: { icon: "/icon.svg" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structured = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Vedant Dubey",
    jobTitle: "Full Stack Developer & AI/ML Engineer",
    email: "vedhem999@gmail.com",
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: "National Institute of Technology Raipur",
    },
    sameAs: [
      "https://github.com/vedantDube",
      "https://www.linkedin.com/in/vedant-dubey-55a934287/",
    ],
    ...(base ? { url: base } : {}),
  };

  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Navigation />
        <main id="main">{children}</main>
        <MotionSystem />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structured).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
