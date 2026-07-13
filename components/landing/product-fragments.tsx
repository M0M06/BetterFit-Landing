import {
  BarChart3,
  Bell,
  Building2,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  ChevronsUpDown,
  Cpu,
  CreditCard,
  Download,
  Dumbbell,
  Home,
  Megaphone,
  ScanLine,
  Settings,
  TrendingUp,
  UserMinus,
  UsersRound,
} from "lucide-react";

import { cn } from "@/lib/utils";

/*
 * Product fragments — accurate reproductions of real BetterFit screens.
 * Data mirrors the development seed ("FitUp") used in the actual product;
 * every fragment is labelled as demo data where numbers appear.
 */

/* ── shared chrome ─────────────────────────────────────────── */

const nav = [
  { label: "Home", icon: Home },
  { label: "Utenti", icon: UsersRound },
  { label: "Accessi", icon: ScanLine },
  { label: "Vendite", icon: CreditCard },
  { label: "Dispositivi", icon: Cpu },
  { label: "Attività", icon: CalendarDays },
  { label: "Training", icon: Dumbbell },
  { label: "CRM", icon: Megaphone },
  { label: "Report", icon: BarChart3 },
  { label: "Impostazioni", icon: Settings },
] as const;

type NavKey = (typeof nav)[number]["label"];

function Sidebar({ active }: { active: NavKey }) {
  return (
    <aside className="hidden shrink-0 flex-col bg-bf-ink p-3 lg:flex">
      <div className="flex items-center gap-2.5 rounded-xl bg-white/[0.06] px-2.5 py-2">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-bf-blue text-white">
          <Building2 className="size-4" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block truncate text-[0.78rem] font-semibold text-white">
            FitUp Legacy 1
          </span>
          <span className="block text-[0.6rem] text-white/50">Tutte le sedi</span>
        </span>
        <ChevronsUpDown className="size-3.5 shrink-0 text-white/40" />
      </div>

      <div className="mt-3 flex flex-col gap-0.5">
        {nav.map((item) => {
          const isActive = item.label === active;
          return (
            <span
              key={item.label}
              className={cn(
                "flex items-center gap-2.5 rounded-lg px-3 py-[7px] text-[0.78rem] font-medium",
                isActive ? "bg-bf-blue text-white" : "text-white/60"
              )}
            >
              <item.icon className="size-3.5 shrink-0" />
              <span className="flex-1">{item.label}</span>
              {!isActive && <ChevronRight className="size-3 text-white/25" />}
            </span>
          );
        })}
      </div>
    </aside>
  );
}

function TopBar() {
  return (
    <div className="flex items-center gap-3 border-b border-bf-border bg-white px-4 py-2.5">
      <span className="text-[0.86rem] font-bold tracking-tight text-bf-ink">BetterFit</span>
      <span className="hidden rounded-full bg-bf-blue-100 px-2.5 py-1 text-[0.6rem] font-semibold text-bf-blue sm:block">
        FitUp Legacy 1
      </span>
      <span className="hidden rounded-full border border-bf-border bg-white px-2.5 py-1 text-[0.6rem] font-medium text-bf-ink-700 md:block">
        Tutte le sedi
      </span>
      <div className="ml-auto flex items-center gap-2">
        <span className="hidden rounded-lg border border-bf-border bg-white px-3 py-1.5 text-[0.66rem] font-semibold text-bf-ink md:block">
          Sblocca tornello
        </span>
        <span className="rounded-lg bg-bf-blue px-3 py-1.5 text-[0.66rem] font-semibold text-white">
          Nuova vendita
        </span>
        <span className="relative flex h-7 w-7 items-center justify-center rounded-lg border border-bf-border bg-white text-bf-ink-500">
          <Bell className="size-3.5" />
        </span>
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-bf-lime text-[0.58rem] font-bold text-bf-ink">
          FM
        </span>
      </div>
    </div>
  );
}

/* ── HERO: Home dashboard (full shell, used once) ──────────── */

const kpis = [
  { label: "Accessi consentiti oggi", value: "0", note: "Nessun accesso negato registrato oggi", border: "border-l-bf-blue", noteClass: "text-bf-blue" },
  { label: "Incassi di oggi", value: "0,00 €", note: "699,00 € ancora da incassare", border: "border-l-bf-warning", noteClass: "text-bf-warning" },
  { label: "Rinnovi in scadenza", value: "0", note: "Nessuna scadenza critica nella finestra corrente", border: "border-l-bf-blue", noteClass: "text-bf-blue" },
  { label: "Attivazioni da chiudere", value: "2", note: "Preregistrazioni desk ancora aperte", border: "border-l-bf-warning", noteClass: "text-bf-warning" },
] as const;

const homeStats = [
  { label: "Profili nel perimetro", value: "14", desc: "Membership visibili nel tenant o nella sede selezionata.", icon: UsersRound, iconClass: "bg-slate-100 text-slate-600" },
  { label: "Membri attivi", value: "10", desc: "Clienti con membership attiva in questo momento.", icon: TrendingUp, iconClass: "bg-emerald-100 text-emerald-600" },
  { label: "Accesso basso 30 giorni", value: "0", desc: "Membri attivi con al massimo due accessi negli ultimi 30 giorni.", icon: UserMinus, iconClass: "bg-rose-100 text-rose-600" },
] as const;

export function HomeScreen() {
  return (
    <figure className="m-0">
      <div className="overflow-hidden rounded-xl border border-bf-border bg-bf-bg shadow-[0_24px_60px_-24px_rgba(12,20,36,0.25)]">
        <div className="grid lg:grid-cols-[196px_minmax(0,1fr)]">
          <Sidebar active="Home" />
          <div className="flex min-h-[440px] flex-col">
            <TopBar />
            <div className="flex flex-1 flex-col gap-3 p-4">
              <div className="flex items-center gap-2.5 rounded-xl bg-bf-error px-4 py-2.5 text-[0.76rem] font-semibold text-white">
                <span className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-white text-[0.6rem]">!</span>
                <span className="truncate">
                  Pagamenti falliti da gestire: 1 vendita risulta con pagamento fallito o da recuperare.
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
                {kpis.map((kpi) => (
                  <div
                    key={kpi.label}
                    className={cn(
                      "rounded-xl border border-bf-border border-l-4 bg-white px-3.5 py-3 shadow-[0_1px_3px_rgba(12,20,36,0.05)]",
                      kpi.border
                    )}
                  >
                    <p className="text-[0.66rem] font-medium text-bf-ink-700">{kpi.label}</p>
                    <p className="mt-1 text-xl font-bold tracking-tight text-bf-ink">{kpi.value}</p>
                    <p className={cn("mt-1.5 truncate text-[0.6rem] font-medium", kpi.noteClass)}>
                      {kpi.note}
                    </p>
                  </div>
                ))}
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {homeStats.map((s) => (
                  <div
                    key={s.label}
                    className="flex flex-col rounded-xl border border-bf-border bg-white p-3.5 shadow-[0_1px_3px_rgba(12,20,36,0.05)]"
                  >
                    <span className={cn("flex h-8 w-8 items-center justify-center rounded-lg", s.iconClass)}>
                      <s.icon className="size-4" />
                    </span>
                    <p className="mt-2.5 text-[0.68rem] font-medium text-bf-ink-700">{s.label}</p>
                    <p className="mt-0.5 text-2xl font-bold tracking-tight text-bf-ink">{s.value}</p>
                    <p className="mt-1 line-clamp-2 text-[0.6rem] leading-snug text-bf-ink-500">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-center font-mono text-[0.62rem] uppercase tracking-[0.14em] text-bf-ink-500">
        La Home reale del gestionale · dati di sviluppo (seed FitUp)
      </figcaption>
    </figure>
  );
}

/* ── CRM: pipeline kanban fragment ─────────────────────────── */

const pipelineCols = [
  {
    stage: "Nuovi", chip: "Nuovo", chipCls: "border border-bf-border bg-white text-bf-ink-700",
    accent: "",
    lead: { name: "Federico Alberti", sede: "FitUp Verona Centro", source: "Sito", interest: "Abbonamento annuale sala", meta: "Sara Rinaldi · 1 task aperte", follow: "Follow-up 19 apr, 12:23" },
  },
  {
    stage: "Contattati", chip: "Contattato", chipCls: "bg-bf-blue text-white",
    accent: "ring-1 ring-bf-blue/40 border-bf-blue/40",
    lead: { name: "Chiara Venturi", sede: "FitUp Verona Centro", source: "Ads Meta", interest: "Percorso dimagrimento", meta: "Giulia Conti · 0 task aperte", follow: "Follow-up 17 apr, 12:23" },
  },
  {
    stage: "Trial", chip: "Trial", chipCls: "bg-amber-100 text-amber-700",
    accent: "border-amber-300",
    lead: { name: "Tommaso Leoni", sede: "FitUp San Zeno", source: "Walk-in", interest: "Sala pesi + corso mobility", meta: "Sara Rinaldi · 1 task aperte", follow: "Follow-up 20 apr, 12:23" },
  },
  {
    stage: "Trattativa", chip: "Trattativa", chipCls: "bg-bf-blue-100 text-bf-blue-700",
    accent: "",
    lead: { name: "Valentina Serra", sede: "FitUp Borgo Roma", source: "Referral", interest: "Pacchetto PT", meta: "Giulia Conti · 1 task aperte", follow: "Follow-up 21 apr, 12:23" },
  },
] as const;

export function CrmPipelineFragment() {
  return (
    <figure className="m-0">
      <div className="overflow-hidden rounded-xl border border-bf-border bg-white shadow-[0_16px_44px_-20px_rgba(12,20,36,0.25)]">
        <div className="flex items-center justify-between border-b border-bf-border px-4 py-3">
          <p className="text-[0.86rem] font-bold text-bf-ink">CRM · Pipeline lead</p>
          <span className="rounded-full bg-bf-blue-100 px-2.5 py-1 text-[0.6rem] font-semibold text-bf-blue">
            6 stage: Nuovi → Persi
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3 bg-bf-bg p-4 lg:grid-cols-4">
          {pipelineCols.map((col) => (
            <div
              key={col.stage}
              className={cn(
                "flex flex-col rounded-xl border border-bf-border bg-white p-3 shadow-[0_1px_3px_rgba(12,20,36,0.05)]",
                col.accent
              )}
            >
              <div className="flex items-center justify-between gap-2">
                <p className="text-[0.82rem] font-bold text-bf-ink">{col.stage}</p>
                <span className={cn("rounded-full px-2 py-0.5 text-[0.54rem] font-semibold", col.chipCls)}>
                  {col.chip}
                </span>
              </div>
              <p className="mt-0.5 text-[0.6rem] text-bf-ink-500">1 lead</p>
              <div className="mt-2.5 rounded-lg border border-bf-border bg-white p-2.5">
                <p className="text-[0.74rem] font-semibold text-bf-ink">{col.lead.name}</p>
                <p className="text-[0.58rem] text-bf-ink-500">{col.lead.sede}</p>
                <span className="mt-1.5 inline-block rounded-full border border-bf-border px-2 py-0.5 text-[0.54rem] font-medium text-bf-ink-700">
                  {col.lead.source}
                </span>
                <p className="mt-1.5 line-clamp-2 text-[0.64rem] leading-snug text-bf-ink-700">
                  {col.lead.interest}
                </p>
                <div className="mt-2 border-t border-bf-border pt-1.5">
                  <p className="text-[0.56rem] text-bf-ink-500">{col.lead.meta}</p>
                  <p className="mt-0.5 text-[0.56rem] font-medium text-bf-ink-700">{col.lead.follow}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <figcaption className="mt-3 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-bf-ink-500">
        Pipeline reale del CRM · dati di sviluppo
      </figcaption>
    </figure>
  );
}

/* ── ACCESSI: storico + check-in desk ──────────────────────── */

const accessRows = [
  { time: "24 apr, 09:43", who: "Alice Greco", where: "FitUp Borgo Roma · Desk check-in", esito: "Negato", why: "Membership has expired." },
  { time: "24 apr, 00:10", who: "Luca Rossi", where: "FitUp San Zeno · Desk check-in", esito: "Consentito", why: "" },
  { time: "24 apr, 00:09", who: "Alice Greco", where: "FitUp Borgo Roma · Desk check-in", esito: "Negato", why: "Membership has expired." },
  { time: "23 apr, 14:03", who: "Alice Greco", where: "FitUp Borgo Roma · Desk check-in", esito: "Negato", why: "Membership has expired." },
] as const;

export function AccessiFragment() {
  return (
    <figure className="m-0">
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
        {/* storico */}
        <div className="overflow-hidden rounded-xl border border-bf-border bg-white shadow-[0_16px_44px_-20px_rgba(12,20,36,0.25)]">
          <div className="flex items-center justify-between border-b border-bf-border px-4 py-3">
            <p className="text-[0.86rem] font-bold text-bf-ink">Storico accessi</p>
            <span className="rounded-full border border-bf-border px-2.5 py-1 text-[0.6rem] font-medium text-bf-ink-700">
              10 eventi
            </span>
          </div>
          <div className="divide-y divide-bf-border">
            <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)_auto] gap-3 px-4 py-2 font-mono text-[0.56rem] uppercase tracking-[0.12em] text-bf-ink-500">
              <span>Ora</span>
              <span>Membro · Sede / Gate</span>
              <span>Esito</span>
            </div>
            {accessRows.map((r, i) => (
              <div
                key={i}
                className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)_auto] items-center gap-3 px-4 py-2.5"
              >
                <div>
                  <p className="text-[0.72rem] font-semibold text-bf-ink">{r.time}</p>
                  {r.why && <p className="text-[0.58rem] text-bf-ink-500">{r.why}</p>}
                </div>
                <div className="min-w-0">
                  <p className="truncate text-[0.72rem] font-medium text-bf-ink">{r.who}</p>
                  <p className="truncate text-[0.58rem] text-bf-ink-500">{r.where}</p>
                </div>
                <span
                  className={cn(
                    "rounded-full px-2.5 py-1 text-[0.56rem] font-semibold",
                    r.esito === "Consentito"
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-rose-100 text-rose-700"
                  )}
                >
                  {r.esito}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* check-in desk */}
        <div className="flex flex-col rounded-xl border border-bf-border bg-white p-4 shadow-[0_16px_44px_-20px_rgba(12,20,36,0.25)]">
          <p className="text-[0.86rem] font-bold text-bf-ink">Check-in desk</p>
          <p className="mt-0.5 text-[0.64rem] text-bf-ink-500">
            Registra un ingresso reale su membro e sede.
          </p>
          <div className="mt-4 space-y-3">
            {[
              ["Membro", "Alice Greco"],
              ["Sede", "FitUp Borgo Roma"],
              ["Gate / canale", "Desk check-in"],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="text-[0.62rem] font-semibold text-bf-ink-700">{label}</p>
                <div className="mt-1 flex items-center justify-between rounded-lg border border-bf-border bg-white px-3 py-2">
                  <span className="text-[0.72rem] text-bf-ink">{value}</span>
                  <ChevronDown className="size-3.5 text-bf-ink-500" />
                </div>
              </div>
            ))}
          </div>
          <span className="mt-4 flex items-center justify-center gap-1.5 rounded-lg bg-bf-blue py-2.5 text-[0.7rem] font-semibold text-white">
            <ScanLine className="size-3.5" />
            Registra ingresso
          </span>
        </div>
      </div>
      <figcaption className="mt-3 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-bf-ink-500">
        Storico accessi e check-in desk reali · dati di sviluppo
      </figcaption>
    </figure>
  );
}

/* ── REPORT: KPI e reporting operativo ─────────────────────── */

const reportCards = [
  { label: "Ricavi mese", value: "0,00 €", note: "699,00 € ancora da incassare", action: "Apri incassi", icon: BarChart3 },
  { label: "Traffico di oggi", value: "0", note: "10 membri attivi nel perimetro visibile", action: "Apri check-in", icon: ScanLine },
  { label: "Funnel CRM", value: "4", note: "Conversione ultimi 90 giorni: 16.7%", action: "Apri CRM", icon: Megaphone },
  { label: "Training attivo", value: "3", note: "0 prenotazioni attività nei prossimi 7 giorni", action: "Apri training", icon: Dumbbell },
] as const;

export function ReportFragment() {
  return (
    <figure className="m-0">
      <div className="overflow-hidden rounded-xl border border-bf-border bg-white shadow-[0_16px_44px_-20px_rgba(12,20,36,0.25)]">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-bf-border px-4 py-3">
          <div>
            <p className="text-[0.86rem] font-bold text-bf-ink">KPI e reporting operativo</p>
            <p className="text-[0.62rem] text-bf-ink-500">
              Vista manageriale su vendite, accessi, attività, training e CRM.
            </p>
          </div>
          <span className="flex items-center gap-1.5 rounded-lg border border-bf-border px-3 py-1.5 text-[0.64rem] font-semibold text-bf-ink">
            <Download className="size-3" />
            Scarica PDF
          </span>
        </div>

        <div className="flex gap-1.5 border-b border-bf-border px-4 py-2.5">
          {["KPI", "Pipeline", "Attività", "Operatività sedi"].map((t, i) => (
            <span
              key={t}
              className={cn(
                "rounded-full px-3 py-1 text-[0.62rem] font-medium",
                i === 0
                  ? "border border-bf-blue/40 bg-bf-blue-100 text-bf-blue"
                  : "border border-bf-border text-bf-ink-700"
              )}
            >
              {t}
            </span>
          ))}
        </div>

        <div className="bg-bf-bg p-4">
          <div className="rounded-xl border border-bf-border bg-white px-4 py-3">
            <p className="text-[0.74rem] font-bold text-bf-ink">Perimetro KPI</p>
            <p className="text-[0.62rem] text-bf-ink-500">
              Stai leggendo i dati di <span className="font-semibold text-bf-ink">Tutte le sedi</span> · 4 sedi visibili
            </p>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3 xl:grid-cols-4">
            {reportCards.map((c) => (
              <div key={c.label} className="flex flex-col rounded-xl border border-bf-border bg-white p-3.5">
                <span className="flex items-center gap-1.5 text-[0.64rem] font-medium text-bf-ink-700">
                  <c.icon className="size-3.5 text-bf-ink-500" />
                  {c.label}
                </span>
                <p className="mt-1.5 text-2xl font-bold tracking-tight text-bf-ink">{c.value}</p>
                <p className="mt-1 line-clamp-2 flex-1 text-[0.58rem] leading-snug text-bf-ink-500">{c.note}</p>
                <span className="mt-2.5 self-start rounded-lg border border-bf-border px-2.5 py-1 text-[0.6rem] font-semibold text-bf-ink">
                  {c.action}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <figcaption className="mt-3 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-bf-ink-500">
        Dashboard KPI reale · dati di sviluppo
      </figcaption>
    </figure>
  );
}

/* ── IMPOSTAZIONI: staff, ruoli e scope ─────────────────────── */

export function StaffRolesFragment() {
  return (
    <figure className="m-0">
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
        {/* sedi */}
        <div className="rounded-xl border border-bf-border bg-white p-4 shadow-[0_16px_44px_-20px_rgba(12,20,36,0.25)]">
          <div className="flex items-center justify-between">
            <p className="text-[0.86rem] font-bold text-bf-ink">Sedi</p>
            <span className="rounded-full border border-bf-border px-2.5 py-1 text-[0.6rem] font-medium text-bf-ink-700">
              4 sedi
            </span>
          </div>
          <p className="mt-0.5 text-[0.62rem] text-bf-ink-500">
            Elenco sedi attive per desk, training, corsi e vendite.
          </p>
          <div className="mt-3 space-y-2.5">
            {[
              { name: "FitUp", city: "Bra – IT", code: "BRA-CENTRO" },
              { name: "FitUp Borgo Roma", city: "Verona – IT", code: "VR-ROMA" },
              { name: "FitUp San Zeno", city: "Verona – IT", code: "VR-SANZENO" },
            ].map((s) => (
              <div key={s.code} className="rounded-lg border border-bf-border p-3">
                <div className="flex items-center justify-between">
                  <p className="text-[0.74rem] font-semibold text-bf-ink">{s.name}</p>
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[0.54rem] font-semibold text-emerald-700">
                    Attiva
                  </span>
                </div>
                <p className="mt-0.5 text-[0.6rem] text-bf-ink-500">
                  {s.city} · Codice: {s.code}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* assegna staff */}
        <div className="rounded-xl border border-bf-border bg-white p-4 shadow-[0_16px_44px_-20px_rgba(12,20,36,0.25)]">
          <p className="text-[0.86rem] font-bold text-bf-ink">Assegna staff</p>
          <p className="mt-0.5 text-[0.62rem] text-bf-ink-500">
            Collega un account BetterFit esistente a ruolo, scope e profilo operativo.
          </p>
          <div className="mt-3 grid grid-cols-2 gap-2.5">
            {[
              ["Ruolo", "Coach"],
              ["Stato", "Attivo"],
              ["Scope", "Tutto il tenant"],
              ["Job title", "Personal trainer"],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="text-[0.6rem] font-semibold text-bf-ink-700">{label}</p>
                <div className="mt-1 flex items-center justify-between rounded-lg border border-bf-border px-2.5 py-1.5">
                  <span className="text-[0.68rem] text-bf-ink">{value}</span>
                  <ChevronDown className="size-3 text-bf-ink-500" />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-lg border border-bf-border bg-bf-bg px-3 py-2.5">
            <p className="text-[0.6rem] leading-relaxed text-bf-ink-700">
              Servono account BetterFit già esistenti: il form non crea un nuovo utente
              globale, ma assegna un account al tenant.
            </p>
          </div>
          <div className="mt-3 flex justify-end gap-2">
            <span className="rounded-lg border border-bf-border px-3 py-1.5 text-[0.64rem] font-semibold text-bf-ink">
              Annulla
            </span>
            <span className="rounded-lg bg-bf-blue px-3 py-1.5 text-[0.64rem] font-semibold text-white">
              Salva assegnazione
            </span>
          </div>
        </div>
      </div>
      <figcaption className="mt-3 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-bf-ink-500">
        Impostazioni · sedi, team e ruoli reali · dati di sviluppo
      </figcaption>
    </figure>
  );
}

export { nav as productNav };
