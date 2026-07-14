import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://getbetterfit-m0m06s-projects.vercel.app"),
  verification: {
    google: "h3z0_YoL6j7c5jnySkl0oEod6",
  },
  title: "BetterFit — Gestionale open source per palestre",
  description:
    "Gestionale open source per palestre e centri fitness: utenti, abbonamenti, accessi, vendite, CRM, training e report in un unico sistema. In sviluppo attivo, in cerca di palestre pilota.",
  openGraph: {
    title: "BetterFit — Gestionale open source per palestre",
    description:
      "Utenti, abbonamenti, accessi, vendite, CRM, training e report in un unico sistema open source. In sviluppo attivo.",
    locale: "it_IT",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "BetterFit — gestionale open source per palestre" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BetterFit — Gestionale open source per palestre",
    description:
      "Utenti, abbonamenti, accessi, vendite, CRM, training e report in un unico sistema open source.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${inter.variable} ${mono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-bf-blue focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
        >
          Salta al contenuto
        </a>
        {children}
      </body>
    </html>
  );
}
