import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { HomeScreen } from "@/components/landing/product-fragments";
import { GitHubIcon } from "@/components/landing/site-nav";
import { GITHUB_URL } from "@/lib/utils";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-28 sm:pt-36">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="mx-auto max-w-3xl text-center">
          {/* honest status chip */}
          <p
            data-hero="badge"
            className="inline-flex items-center gap-2.5 rounded-full border border-bf-border bg-white py-1.5 pl-3 pr-4 shadow-[0_1px_2px_rgba(12,20,36,0.05)]"
          >
            <span className="bf-pulse h-2 w-2 rounded-full bg-bf-success" />
            <span className="font-mono text-[0.66rem] uppercase tracking-[0.13em] text-bf-ink-700">
              Open source · in sviluppo attivo · cerca palestre pilota
            </span>
          </p>

          <h1
            data-hero="title"
            className="mt-8 text-[clamp(2.2rem,5.6vw,3.9rem)] font-bold leading-[1.06] text-bf-ink"
          >
            Il gestionale open source
            <br />
            per palestre e centri fitness.
          </h1>

          <p
            data-hero="lead"
            className="mx-auto mt-6 max-w-xl text-[1.05rem] leading-relaxed text-bf-ink-700"
          >
            Utenti, abbonamenti, accessi, vendite, CRM, training e report in un
            unico sistema multi-sede. Il codice è pubblico; il prodotto cresce
            testandolo in palestre vere.
          </p>

          <div
            data-hero="cta"
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href="#pilota">
                Candidati come palestra pilota
                <ArrowRight className="size-4 transition-transform group-hover/button:translate-x-0.5" />
              </a>
            </Button>
            <Button asChild variant="ink" size="lg" className="w-full sm:w-auto">
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                <GitHubIcon className="size-4" />
                Vedi il codice
              </a>
            </Button>
          </div>

          <p
            data-hero="trust"
            className="mt-7 font-mono text-[0.66rem] uppercase tracking-[0.13em] text-bf-ink-500"
          >
            Gratuito durante il pilota · Nessuna carta richiesta · Feedback diretto col team
          </p>
        </div>

        {/* the real Home screen */}
        <div data-hero="product" className="mx-auto mt-14 max-w-[1080px]">
          <HomeScreen />
        </div>
      </div>
    </section>
  );
}
