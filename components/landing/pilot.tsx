import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/landing/section-heading";
import { PILOT_CONTACT_URL } from "@/lib/utils";

/*
 * Pilot program — the honest offer: the product is young, pilot gyms use it
 * for free and shape the roadmap. No invented pricing tiers.
 */

const terms = [
  "Accesso gratuito per tutta la fase pilota",
  "Setup guidato insieme al team di sviluppo",
  "Nessuna carta, nessun vincolo, nessun rinnovo automatico",
  "Feedback raccolti direttamente su desk, vendite, CRM e report",
] as const;

const phases = [
  {
    step: "Adesso",
    title: "Palestre pilota",
    body: "BetterFit entra in poche strutture vere, gratuitamente, per capire cosa regge nella giornata reale e cosa va migliorato.",
    active: true,
  },
  {
    step: "Poi",
    title: "Prodotto consolidato",
    body: "I feedback del pilota diventano priorità di sviluppo, in pubblico sul repository: meno teoria, più flussi che funzionano al desk.",
    active: false,
  },
  {
    step: "Dopo",
    title: "Prezzi accessibili",
    body: "Solo quando il prodotto sarà solido verranno introdotti abbonamenti, partendo da chi lo ha testato per primo.",
    active: false,
  },
] as const;

export function Pilot() {
  return (
    <section id="pilota" className="relative scroll-mt-24 border-t border-bf-border py-24">
      <div className="mx-auto max-w-[1180px] px-6">
        <SectionHeading
          eyebrow="Programma pilota"
          align="center"
          title="Gratis adesso, per costruire il prodotto giusto."
          lead="BetterFit è giovane: prima di chiedere un abbonamento deve dimostrare di reggere l'operatività vera. Per questo cerchiamo palestre disposte a provarlo e a dirci cosa non va."
        />

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          {/* offer */}
          <div data-reveal className="bf-card p-7 sm:p-8">
            <p className="font-mono text-[0.64rem] uppercase tracking-[0.15em] text-bf-blue">
              Per le palestre pilota
            </p>
            <div className="mt-4 flex items-baseline gap-3">
              <span className="text-[3.4rem] font-bold leading-none tracking-tight text-bf-ink">
                0 €
              </span>
              <span className="font-mono text-[0.66rem] uppercase tracking-[0.12em] text-bf-ink-500">
                durante il pilota
              </span>
            </div>
            <ul className="mt-6 space-y-3">
              {terms.map((t) => (
                <li key={t} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-bf-lime-100">
                    <Check className="size-3 text-bf-success" />
                  </span>
                  <span className="text-[0.92rem] leading-relaxed text-bf-ink-700">{t}</span>
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="mt-7 w-full">
              <a href={PILOT_CONTACT_URL} target="_blank" rel="noopener noreferrer">
                Candidati come palestra pilota
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <p className="mt-3 text-center text-[0.72rem] text-bf-ink-500">
              La candidatura passa da GitHub: apri una issue e ti rispondiamo lì, in pubblico.
            </p>
          </div>

          {/* phases — vertical steps, not cards */}
          <ol className="flex flex-col justify-center gap-2" data-reveal>
            {phases.map((p, i) => (
              <li key={p.step} className="relative pl-10">
                {i < phases.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute left-[11px] top-8 h-[calc(100%-16px)] w-px bg-bf-border"
                  />
                )}
                <span
                  className={
                    p.active
                      ? "absolute left-0 top-1.5 h-[23px] w-[23px] rounded-full border-[7px] border-bf-blue bg-white"
                      : "absolute left-0 top-1.5 h-[23px] w-[23px] rounded-full border-2 border-bf-border bg-white"
                  }
                />
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-bf-ink-500">
                  {p.step}
                </p>
                <h3 className="mt-0.5 text-[1.02rem] font-bold text-bf-ink">{p.title}</h3>
                <p className="mb-5 mt-1.5 max-w-md text-[0.9rem] leading-relaxed text-bf-ink-700">
                  {p.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
