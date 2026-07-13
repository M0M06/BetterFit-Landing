import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { GitHubIcon } from "@/components/landing/site-nav";
import { GITHUB_URL } from "@/lib/utils";

export function FinalCta() {
  return (
    <section className="relative border-t border-bf-border bg-white py-24">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            data-reveal
            className="text-[clamp(1.9rem,4.4vw,3rem)] font-bold leading-[1.08] text-bf-ink"
          >
            Provalo nella tua palestra,
            <br />o aprilo nel tuo editor.
          </h2>
          <p data-reveal className="mx-auto mt-5 max-w-lg text-[1rem] leading-relaxed text-bf-ink-700">
            Due modi onesti per valutare BetterFit: candidarsi al programma pilota
            oppure leggere il codice e farlo girare in locale.
          </p>
          <div
            data-reveal
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href="#pilota">
                Candidati al pilota
                <ArrowRight className="size-4 transition-transform group-hover/button:translate-x-0.5" />
              </a>
            </Button>
            <Button asChild variant="ink" size="lg" className="w-full sm:w-auto">
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                <GitHubIcon className="size-4" />
                Esegui in locale
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
