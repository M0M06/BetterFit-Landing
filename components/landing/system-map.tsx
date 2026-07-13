import {
  BarChart3,
  CalendarDays,
  CreditCard,
  Dumbbell,
  Home,
  Megaphone,
  ScanLine,
  Settings,
  UsersRound,
} from "lucide-react";

import { SectionHeading } from "@/components/landing/section-heading";

/*
 * "Un solo sistema" — the module map. This is the product's real top-level
 * navigation (see docs/betterfit-sezioni-prodotto-reali.md in the main repo),
 * not an invented feature list.
 */

const modules = [
  { icon: Home, name: "Home", desc: "KPI del giorno, alert e attività da chiudere" },
  { icon: UsersRound, name: "Utenti", desc: "Anagrafiche, membership e profilo 360" },
  { icon: CreditCard, name: "Vendite", desc: "Nuova vendita, rinnovi, pagamenti e listino" },
  { icon: ScanLine, name: "Accessi", desc: "Check-in desk, storico e regole di ingresso" },
  { icon: CalendarDays, name: "Attività", desc: "Corsi, prenotazioni, sale e presenze" },
  { icon: Dumbbell, name: "Training", desc: "Schede, modelli e assegnazione ai membri" },
  { icon: Megaphone, name: "CRM", desc: "Lead, pipeline, campagne e automazioni" },
  { icon: BarChart3, name: "Report", desc: "KPI operativi, retention ed export" },
  { icon: Settings, name: "Impostazioni", desc: "Sedi, team, ruoli e permessi" },
] as const;

export function SystemMap() {
  return (
    <section id="prodotto" className="relative scroll-mt-24 border-t border-bf-border bg-white py-24">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Il prodotto"
              title="Nove moduli, un unico dato condiviso."
              lead="Ogni modulo corrisponde a un flusso reale della palestra. Reception, coach e direzione lavorano sulla stessa anagrafica: niente doppi inserimenti tra sistemi separati."
            />
            <ul data-reveal className="mt-8 space-y-3 text-[0.92rem] text-bf-ink-700">
              <li className="flex gap-3">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-bf-blue" />
                Una vendita aggiorna membership, scadenze e report senza passaggi manuali.
              </li>
              <li className="flex gap-3">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-bf-blue" />
                Un check-in verifica la membership e finisce nello storico accessi.
              </li>
              <li className="flex gap-3">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-bf-blue" />
                Un lead chiuso nel CRM diventa un utente, senza ricopiare i dati.
              </li>
            </ul>
          </div>

          {/* module list — mirrors the real sidebar, not a card grid */}
          <div data-reveal className="overflow-hidden rounded-xl border border-bf-border">
            <ul className="divide-y divide-bf-border">
              {modules.map((m) => (
                <li
                  key={m.name}
                  className="flex items-center gap-4 bg-white px-5 py-3.5 transition-colors hover:bg-bf-bg"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-bf-ink text-white">
                    <m.icon className="size-4" />
                  </span>
                  <span className="w-32 shrink-0 text-[0.9rem] font-semibold text-bf-ink">
                    {m.name}
                  </span>
                  <span className="hidden min-w-0 flex-1 truncate text-[0.82rem] text-bf-ink-500 sm:block">
                    {m.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
