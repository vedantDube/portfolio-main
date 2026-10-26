import type { MetadataRoute } from "next";
import { projects } from "@/content/profile";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL;
  return base
    ? [
        { url: base, changeFrequency: "monthly", priority: 1 },
        ...projects.map((p) => ({
          url: `${base}/projects/${p.slug}`,
          changeFrequency: "monthly" as const,
          priority: 0.8,
        })),
      ]
    : [];
}
