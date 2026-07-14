import type { MetadataRoute } from "next";

const SITE = "https://getbetterfit-m0m06s-projects.vercel.app";

/**
 * Sitemap conforme allo standard. Il sito e' one-page, quindi elenchiamo
 * solo la root: i fragment (#sezione) non sono URL validi in sitemap.xml
 * e Google li ignora silenziosamente.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
