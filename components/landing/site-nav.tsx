"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/landing/logo";
import { cn, GITHUB_URL } from "@/lib/utils";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.72.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.9-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.36 9.36 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.28 10.28 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

const links = [
  { href: "#prodotto", label: "Prodotto" },
  { href: "#percorso", label: "Come funziona" },
  { href: "#open-source", label: "Open source" },
  { href: "#pilota", label: "Programma pilota" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header data-nav className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "border-b transition-all duration-300",
          scrolled || open
            ? "border-bf-border bg-white/90 shadow-[0_2px_16px_rgba(12,20,36,0.06)] backdrop-blur-md"
            : "border-transparent bg-transparent"
        )}
      >
        <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-between px-6">
          <a
            href="#top"
            aria-label="BetterFit — torna all'inizio"
            className="transition-opacity hover:opacity-80"
          >
            <Logo markClassName="h-8 w-8" />
          </a>

          <nav aria-label="Principale" className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3.5 py-2 text-[0.88rem] font-medium text-bf-ink-700 transition-colors hover:bg-bf-blue-100/60 hover:text-bf-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Button asChild variant="outline" size="sm">
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                <GitHubIcon className="size-4" />
                GitHub
              </a>
            </Button>
            <Button asChild size="sm">
              <a href="#pilota">
                Candidati al pilota
                <ArrowRight className="size-3.5 transition-transform group-hover/button:translate-x-0.5" />
              </a>
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Chiudi menu" : "Apri menu"}
            className="flex h-11 w-11 items-center justify-center rounded-lg text-bf-ink-700 transition-colors hover:bg-bf-blue-100/60 lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {/* mobile panel */}
        <div
          id="mobile-nav"
          inert={!open || undefined}
          className={cn(
            "overflow-hidden border-t transition-all duration-300 lg:hidden",
            open
              ? "max-h-[420px] border-bf-border opacity-100"
              : "pointer-events-none max-h-0 border-transparent opacity-0"
          )}
        >
          <nav aria-label="Menu mobile" className="flex flex-col bg-white p-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-[0.95rem] font-medium text-bf-ink-700 transition-colors hover:bg-bf-blue-100/60 hover:text-bf-ink"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-bf-border p-3">
              <Button asChild variant="outline">
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                  <GitHubIcon className="size-4" />
                  Vedi il codice su GitHub
                </a>
              </Button>
              <Button asChild>
                <a href="#pilota" onClick={() => setOpen(false)}>
                  Candidati al pilota
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export { GitHubIcon };
