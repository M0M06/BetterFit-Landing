import { ArrowUpRight, BookOpen, Bug, GitFork, Scale } from "lucide-react";

import { Button } from "@/components/ui/button";
import { GitHubIcon } from "@/components/landing/site-nav";
import { GITHUB_ISSUES_URL, GITHUB_URL } from "@/lib/utils";

/*
 * Open-source section. Every claim is verifiable in the repository:
 * SvelteKit dashboard, .NET backend with tests and Docker Compose,
 * IT/EN i18n, design docs under /docs.
 */

const stack = [
  { area: "Dashboard staff", tech: "SvelteKit · TypeScript · Tailwind CSS" },
  { area: "Backend e API", tech: ".NET 10 · REST con OpenAPI/Swagger" },
  { area: "Ambiente locale", tech: "Docker Compose per il backend" },
  { area: "Lingue", tech: "Italiano e inglese (i18n integrata)" },
  { area: "Test", tech: "Progetto di test dedicato sul backend" },
  { area: "Documentazione", tech: "Architettura, brand e prodotto in /docs" },
] as const;

const actions = [
  {
    icon: BookOpen,
    title: "Leggi il codice",
    body: "Backend, dashboard e documentazione di progetto sono nello stesso repository pubblico.",
    href: GITHUB_URL,
    label: "Apri il repository",
  },
  {
    icon: Bug,
    title: "Segnala un problema",
    body: "Bug, idee o domande passano dalle issue di GitHub: ogni segnalazione è tracciata in pubblico.",
    href: GITHUB_ISSUES_URL,
    label: "Apri una issue",
  },
  {
    icon: GitFork,
    title: "Contribuisci",
    body: "Fork, branch e pull request: il flusso è quello standard di GitHub, documentato nel repository.",
    href: GITHUB_URL,
    label: "Inizia da un fork",
  },
] as const;

export function OpenSource() {
  return (
    <section id="open-source" className="relative scroll-mt-24 bg-bf-ink py-24 text-white">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="max-w-2xl">
          <p data-reveal className="bf-eyebrow before:bg-bf-lime" style={{ color: "rgba(255,255,255,0.55)" }}>
            Open source
          </p>
          <h2
            data-reveal
            className="mt-4 text-[clamp(1.7rem,3.6vw,2.5rem)] font-bold leading-[1.12] text-white"
          >
            Il codice è pubblico. Puoi leggerlo, eseguirlo e migliorarlo.
          </h2>
          <p data-reveal className="mt-4 max-w-xl text-[1rem] leading-relaxed text-white/70">
            BetterFit nasce come progetto open source: chi lo valuta può ispezionare
            come vengono gestiti dati, permessi e flussi — non deve fidarsi di una
            brochure. È anche il modo più diretto per farlo crescere con feedback reali.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          {/* stack table */}
          <div data-reveal className="overflow-hidden rounded-xl border border-white/12">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">Stack tecnico di BetterFit</caption>
              <tbody className="divide-y divide-white/10">
                {stack.map((row) => (
                  <tr key={row.area}>
                    <th
                      scope="row"
                      className="w-2/5 bg-white/[0.04] px-5 py-3.5 text-[0.82rem] font-semibold text-white"
                    >
                      {row.area}
                    </th>
                    <td className="px-5 py-3.5 text-[0.82rem] text-white/70">{row.tech}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* actions */}
          <div className="space-y-5">
            {actions.map((a) => (
              <div key={a.title} data-reveal className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/[0.08] text-bf-lime">
                  <a.icon className="size-4.5" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-[0.98rem] font-bold text-white">{a.title}</h3>
                  <p className="mt-1 text-[0.88rem] leading-relaxed text-white/65">{a.body}</p>
                  <a
                    href={a.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1.5 inline-flex items-center gap-1 text-[0.82rem] font-semibold text-bf-lime underline-offset-4 hover:underline"
                  >
                    {a.label}
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </div>
              </div>
            ))}

            {/* licence status — honest */}
            <div data-reveal className="flex gap-4 rounded-xl border border-white/12 bg-white/[0.04] p-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/[0.08] text-white/70">
                <Scale className="size-4.5" />
              </span>
              <div>
                <h3 className="text-[0.9rem] font-bold text-white">Licenza in definizione</h3>
                <p className="mt-1 text-[0.84rem] leading-relaxed text-white/65">
                  La licenza open source definitiva è in corso di scelta e sarà
                  pubblicata nel repository. Fino ad allora, fai riferimento a
                  quanto indicato su GitHub.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div data-reveal className="mt-12">
          <Button asChild variant="outline" size="lg" className="border-white/20 bg-transparent text-white hover:border-bf-lime/60 hover:bg-white/[0.05] hover:text-white">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              <GitHubIcon className="size-4" />
              github.com/GPOI-2526-5E/BetterFit
              <ArrowUpRight className="size-3.5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
