import type { MetadataRoute } from "next";

const SITE = "https://getbetterfit-m0m06s-projects.vercel.app";

/**
 * Next.js genera automaticamente /sitemap.xml da questo file al build.
 * Poche pagine (siamo one-page): elenchiamo la home e le ancore principali
 * come utility per i crawler che li leggono.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE}/#prodotto`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/#percorso`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/#open-source`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/#pilota`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/#faq`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];
}
