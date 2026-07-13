import { StaffRolesFragment } from "@/components/landing/product-fragments";
import { SectionHeading } from "@/components/landing/section-heading";

/*
 * Multi-tenant, roles and data separation. Claims here reflect the account
 * model documented in docs/betterfit-architettura-privacy.md (PersonAccount,
 * GymTenant, GymMembership, GymRole) and the settings screens in the product.
 */

const principles = [
  {
    title: "Tenant separati",
    body: "Ogni palestra o gruppo è un tenant: i dati di una struttura non sono visibili alle altre.",
  },
  {
    title: "Ruoli con scope",
    body: "Owner, manager, reception e coach: ogni assegnazione vale per tutto il tenant o per una singola sede.",
  },
  {
    title: "Identità separata dalla membership",
    body: "L'account della persona è distinto dal rapporto con la palestra: il modello dati nasce pensando alla portabilità.",
  },
] as const;

export function Multisede() {
  return (
    <section className="relative border-t border-bf-border bg-white py-24">
      <div className="mx-auto max-w-[1180px] px-6">
        <SectionHeading
          eyebrow="Multi-sede e permessi"
          title="Più sedi, un gruppo. Ruoli chiari, dati separati."
          lead="BetterFit nasce multi-tenant: sedi sotto lo stesso gruppo, staff assegnato con ruolo e scope, e una separazione dei dati progettata prima del codice."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <ul className="space-y-6" data-reveal>
            {principles.map((p) => (
              <li key={p.title} className="border-l-2 border-bf-blue pl-5">
                <h3 className="text-[1rem] font-bold text-bf-ink">{p.title}</h3>
                <p className="mt-1.5 text-[0.92rem] leading-relaxed text-bf-ink-700">{p.body}</p>
              </li>
            ))}
          </ul>

          <div data-reveal>
            <StaffRolesFragment />
          </div>
        </div>
      </div>
    </section>
  );
}
