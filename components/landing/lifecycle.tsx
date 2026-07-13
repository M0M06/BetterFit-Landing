import { CreditCard, Receipt, UserRound } from "lucide-react";

import {
  AccessiFragment,
  CrmPipelineFragment,
  ReportFragment,
} from "@/components/landing/product-fragments";
import { SectionHeading } from "@/components/landing/section-heading";

/*
 * "Il percorso di un iscritto" — the one product-derived idea of the page.
 * The member lifecycle maps 1:1 onto the product's real modules and the real
 * CRM stages (Nuovi → Contattati → Trial → Trattativa → Chiusi → Persi).
 * Each stage uses a different composition and a different real screen.
 */

const stages = [
  { n: 1, label: "Lead", module: "CRM" },
  { n: 2, label: "Vendita", module: "Vendite" },
  { n: 3, label: "Iscritto", module: "Accessi" },
  { n: 4, label: "Fidelizzato", module: "Report" },
] as const;

function StageMarker({ n, label, module }: { n: number; label: string; module: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-bf-blue font-mono text-[0.78rem] font-semibold text-white">
        {n}
      </span>
      <div>
        <p className="text-[0.95rem] font-bold text-bf-ink">{label}</p>
        <p className="font-mono text-[0.6rem] uppercase tracking-[0.13em] text-bf-ink-500">
          Modulo {module}
        </p>
      </div>
    </div>
  );
}

/* compact sale card — mirrors the product's "Nuova vendita" flow (demo data) */
function VenditaCard() {
  return (
    <figure className="m-0">
      <div className="rounded-xl border border-bf-border bg-white p-4 shadow-[0_16px_44px_-20px_rgba(12,20,36,0.25)]">
        <div className="flex items-center justify-between">
          <p className="text-[0.86rem] font-bold text-bf-ink">Nuova vendita</p>
          <span className="rounded-full bg-bf-blue-100 px-2.5 py-1 text-[0.6rem] font-semibold text-bf-blue">
            Rinnovo
          </span>
        </div>
        <div className="mt-3 flex items-center gap-3 rounded-lg border border-bf-border px-3 py-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-bf-blue-100 text-bf-blue">
            <UserRound className="size-4" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[0.78rem] font-semibold text-bf-ink">Chiara Venturi</p>
            <p className="text-[0.6rem] text-bf-ink-500">FitUp Verona Centro · da lead CRM</p>
          </div>
        </div>
        <div className="mt-2.5 rounded-lg border border-bf-border px-3 py-2.5">
          <div className="flex items-center justify-between text-[0.78rem]">
            <span className="text-bf-ink-700">Abbonamento annuale sala</span>
            <span className="font-bold text-bf-ink">540,00 €</span>
          </div>
          <div className="mt-2 flex items-center justify-between border-t border-bf-border pt-2">
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-bf-ink-500">
              Totale
            </span>
            <span className="text-[0.95rem] font-bold text-bf-ink">540,00 €</span>
          </div>
        </div>
        <div className="mt-2.5 grid grid-cols-2 gap-2">
          <span className="flex items-center justify-center gap-1.5 rounded-lg bg-bf-blue py-2 text-[0.7rem] font-semibold text-white">
            <CreditCard className="size-3.5" />
            Registra pagamento
          </span>
          <span className="flex items-center justify-center gap-1.5 rounded-lg border border-bf-border py-2 text-[0.7rem] font-medium text-bf-ink-700">
            <Receipt className="size-3.5" />
            Ricevuta
          </span>
        </div>
      </div>
      <figcaption className="mt-3 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-bf-ink-500">
        Flusso vendita · dati di sviluppo
      </figcaption>
    </figure>
  );
}

export function Lifecycle() {
  return (
    <section id="percorso" className="relative scroll-mt-24 py-24">
      <div className="mx-auto max-w-[1180px] px-6">
        <SectionHeading
          eyebrow="Come funziona"
          align="center"
          title="Il percorso di un iscritto, in un solo sistema."
          lead="Dal primo contatto al report di fine mese: le stesse quattro tappe che una palestra gestisce ogni giorno, viste nelle schermate reali del prodotto."
        />

        {/* stage strip */}
        <div data-reveal className="mx-auto mt-12 max-w-3xl">
          <ol className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
            {stages.map((s, i) => (
              <li key={s.n} className="relative">
                <StageMarker {...s} />
                {i < stages.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute -right-4 top-[18px] hidden h-px w-8 bg-bf-border sm:block"
                  />
                )}
              </li>
            ))}
          </ol>
        </div>

        {/* 1 — Lead: full-width pipeline */}
        <div className="mt-20 space-y-20">
          <article>
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:items-end lg:gap-14">
              <div data-reveal>
                <p className="bf-eyebrow">Tappa 01 · CRM</p>
                <h3 className="mt-3 text-[1.45rem] font-bold leading-snug text-bf-ink">
                  Il lead entra in pipeline, con owner e follow-up.
                </h3>
              </div>
              <p data-reveal className="max-w-xl text-[0.95rem] leading-relaxed text-bf-ink-700 lg:pb-1">
                Sei stage reali — da Nuovi a Persi — con sorgente, interesse, task
                aperte e prossimo follow-up. Ogni lead ha un owner: nessuno resta
                dimenticato in un foglio a parte.
              </p>
            </div>
            <div data-reveal className="mt-8">
              <CrmPipelineFragment />
            </div>
          </article>

          {/* 2 — Vendita: asymmetric split, small card */}
          <article className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-20">
            <div data-reveal>
              <p className="bf-eyebrow">Tappa 02 · Vendite</p>
              <h3 className="mt-3 text-[1.45rem] font-bold leading-snug text-bf-ink">
                Il lead chiuso diventa una vendita, senza ricopiare nulla.
              </h3>
              <p className="mt-4 max-w-lg text-[0.95rem] leading-relaxed text-bf-ink-700">
                Dal profilo si apre la vendita: piano, importo, pagamento e
                ricevuta. La membership si aggiorna da sola e la scadenza entra
                nel radar dei rinnovi — la stessa &ldquo;Nuova vendita&rdquo; che
                vedi in alto in ogni pagina del gestionale.
              </p>
            </div>
            <div data-reveal className="mx-auto w-full max-w-sm">
              <VenditaCard />
            </div>
          </article>

          {/* 3 — Accessi: two-column fragment */}
          <article>
            <div data-reveal className="max-w-2xl">
              <p className="bf-eyebrow">Tappa 03 · Accessi</p>
              <h3 className="mt-3 text-[1.45rem] font-bold leading-snug text-bf-ink">
                Ogni ingresso è verificato contro la membership.
              </h3>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-bf-ink-700">
                Check-in dal desk o dal tornello: se la membership è scaduta,
                l&apos;esito è <span className="font-semibold text-bf-error">Negato</span> con
                la motivazione; se è valida, <span className="font-semibold text-bf-success">Consentito</span>.
                Tutto resta nello storico, filtrabile per sede e membro.
              </p>
            </div>
            <div data-reveal className="mt-8">
              <AccessiFragment />
            </div>
          </article>

          {/* 4 — Report: full-width, direzione */}
          <article>
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:items-end lg:gap-14">
              <div data-reveal>
                <p className="bf-eyebrow">Tappa 04 · Report</p>
                <h3 className="mt-3 text-[1.45rem] font-bold leading-snug text-bf-ink">
                  La direzione legge il quadro, per sede o per gruppo.
                </h3>
              </div>
              <p data-reveal className="max-w-xl text-[0.95rem] leading-relaxed text-bf-ink-700 lg:pb-1">
                Ricavi, traffico, funnel CRM e training in un&apos;unica vista con
                perimetro esplicito. Gli export PDF si generano dai dati correnti,
                filtrati sulla sede attiva.
              </p>
            </div>
            <div data-reveal className="mt-8">
              <ReportFragment />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
