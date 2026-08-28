import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/config/site";
import { getAllInsights } from "@/lib/insights/content";
import { INSIGHTS_CATEGORIES } from "@/lib/insights/constants";
import { solutions } from "@/data/solutions";
import { projects } from "@/data/projects";
import { techGuides } from "@/data/tech-hub";

export const dynamic = "force-static";

const base = SITE_CONFIG.url;
const now = new Date().toISOString();

export default function sitemap(): MetadataRoute.Sitemap {
  // ── Static pages ──
  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/solutions/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/projects/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/process/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/get-started/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/tech-hub/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
  ];

  // ── Solution pages ──
  const solutionPages: MetadataRoute.Sitemap = solutions
    .filter((s) => s.status === "published")
    .map((s) => ({
      url: `${base}/solutions/${s.slug}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  // ── Project pages ──
  const projectPages: MetadataRoute.Sitemap = projects
    .filter((p) => p.status === "published")
    .map((p) => ({
      url: `${base}/projects/${p.slug}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  // ── Tech Hub guide pages ──
  const techHubPages: MetadataRoute.Sitemap = techGuides.map((g) => ({
    url: `${base}/tech-hub/${g.slug}/`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // ── Insight pages ──
  const insights = getAllInsights();
  const insightPages: MetadataRoute.Sitemap = [
    {
      url: `${base}/insights/`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...insights.map((a) => ({
      url: `${base}/insights/${a.slug}/`,
      lastModified: a.updatedAt || a.publishedAt,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  // ── Insight category pages ──
  const catPages: MetadataRoute.Sitemap = INSIGHTS_CATEGORIES.filter((c) =>
    insights.some((a) => a.category === c.slug)
  ).map((c) => ({
    url: `${base}/insights/category/${c.slug}/`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...solutionPages,
    ...projectPages,
    ...techHubPages,
    ...insightPages,
    ...catPages,
  ];
}