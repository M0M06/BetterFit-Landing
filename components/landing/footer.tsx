import { Logo } from "@/components/landing/logo";
import { GITHUB_ISSUES_URL, GITHUB_URL } from "@/lib/utils";

/*
 * Footer — only links that exist. No fake legal pages, no fake socials.
 */

const columns = [
  {
    title: "Prodotto",
    links: [
      { label: "Moduli", href: "#prodotto" },
      { label: "Come funziona", href: "#percorso" },
      { label: "Programma pilota", href: "#pilota" },
    ],
  },
  {
    title: "Progetto",
    links: [
      { label: "Codice sorgente", href: GITHUB_URL, external: true },
      { label: "Segnala un problema", href: GITHUB_ISSUES_URL, external: true },
      { label: "Open source", href: "#open-source" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="relative border-t border-bf-border py-14">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="grid gap-10 sm:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-[0.88rem] leading-relaxed text-bf-ink-500">
              Gestionale open source per palestre e centri fitness. In sviluppo
              attivo, alla ricerca di palestre pilota.
            </p>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="font-mono text-[0.64rem] uppercase tracking-[0.15em] text-bf-ink-500">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...("external" in link && link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="text-[0.88rem] text-bf-ink-700 transition-colors hover:text-bf-blue"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-bf-border pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-[0.64rem] uppercase tracking-[0.13em] text-bf-ink-500">
            © 2026 BetterFit · progetto open source
          </p>
          <p className="font-mono text-[0.64rem] uppercase tracking-[0.13em] text-bf-ink-500">
            In sviluppo attivo — non ancora production-ready
          </p>
        </div>
      </div>
    </footer>
  );
}
