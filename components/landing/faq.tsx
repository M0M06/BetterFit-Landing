import { SectionHeading } from "@/components/landing/section-heading";
import { GITHUB_URL } from "@/lib/utils";

/*
 * FAQ — only questions with answers verifiable in the repository or in the
 * pilot terms stated on this page. Native <details>: accessible, zero JS.
 */

const faqs = [
  {
    q: "BetterFit è pronto per la produzione?",
    a: "Non ancora. È in sviluppo attivo e sta entrando nelle prime palestre pilota. Il footer e la hero di questa pagina lo dichiarano esplicitamente: preferiamo dirlo chiaro piuttosto che scoprirlo insieme dopo.",
  },
  {
    q: "Quanto costa?",
    a: "Durante la fase pilota niente: nessuna carta, nessun vincolo, nessun rinnovo automatico. Gli abbonamenti arriveranno solo quando il prodotto sarà solido, partendo da chi lo ha testato per primo.",
  },
  {
    q: "Posso installarlo per conto mio?",
    a: "Sì. Il codice è pubblico su GitHub: backend .NET con Docker Compose per l'ambiente locale e dashboard SvelteKit. Le istruzioni di setup sono nel repository.",
  },
  {
    q: "Che stack tecnologico usa?",
    a: "Backend .NET 10 con API REST documentate via OpenAPI/Swagger, dashboard SvelteKit + TypeScript + Tailwind, interfaccia in italiano e inglese. Questa landing è Next.js statico.",
  },
  {
    q: "Come gestite i dati di più palestre?",
    a: "Il modello è multi-tenant: ogni struttura vede solo i propri dati, lo staff ha ruoli con scope (tutto il tenant o singola sede) e l'identità della persona è separata dalla membership. Il modello completo è documentato nel repository.",
  },
  {
    q: "Come candido la mia palestra al pilota?",
    a: "Dal pulsante \"Candidati come palestra pilota\" qui sopra: apre una issue GitHub precompilata con le informazioni che ci servono. Rispondiamo lì, in pubblico.",
  },
] as const;

export function Faq() {
  return (
    <section id="faq" className="relative scroll-mt-24 border-t border-bf-border bg-white py-24">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Domande frequenti"
              title="Risposte dirette, senza reparto marketing."
              lead="Se non trovi la risposta, il posto giusto per chiedere è il repository: ogni domanda e ogni risposta restano pubbliche."
            />
            <a
              data-reveal
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block font-mono text-[0.72rem] uppercase tracking-[0.14em] text-bf-blue underline-offset-4 hover:underline"
            >
              Chiedi su GitHub →
            </a>
          </div>

          <div data-reveal className="divide-y divide-bf-border border-t border-bf-border">
            {faqs.map((item, i) => (
              <details key={item.q} className="group" name="faq">
                <summary className="flex cursor-pointer list-none items-center gap-4 py-5 [&::-webkit-details-marker]:hidden">
                  <span className="w-7 shrink-0 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-bf-ink-500">
                    0{i + 1}
                  </span>
                  <span className="flex-1 text-[1rem] font-semibold text-bf-ink">
                    {item.q}
                  </span>
                  <span
                    aria-hidden="true"
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-bf-border text-bf-ink-500 transition-transform duration-200 group-open:rotate-45 group-open:border-bf-blue/40 group-open:text-bf-blue"
                  >
                    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                      <path d="M8 3v10M3 8h10" />
                    </svg>
                  </span>
                </summary>
                <p className="pb-6 pl-11 pr-12 text-[0.94rem] leading-relaxed text-bf-ink-700">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
