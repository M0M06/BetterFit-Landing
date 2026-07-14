import type { MetadataRoute } from "next";

/**
 * Next.js genera /robots.txt da questo file. Consenti tutto: il sito è
 * pubblico, non c'è nulla di riservato.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://getbetterfit.vercel.app/sitemap.xml",
    host: "https://getbetterfit.vercel.app",
  };
}
