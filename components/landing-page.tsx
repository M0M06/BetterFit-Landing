"use client";

import { useEffect, useRef } from "react";

import { SiteNav } from "@/components/landing/site-nav";
import { Hero } from "@/components/landing/hero";
import { SystemMap } from "@/components/landing/system-map";
import { Lifecycle } from "@/components/landing/lifecycle";
import { Multisede } from "@/components/landing/multisede";
import { OpenSource } from "@/components/landing/open-source";
import { Pilot } from "@/components/landing/pilot";
import { Faq } from "@/components/landing/faq";
import { FinalCta } from "@/components/landing/final-cta";
import { Footer } from "@/components/landing/footer";

/**
 * Scroll reveals via IntersectionObserver + CSS transitions (see globals.css).
 * - No animation library: the only JS is the observer below.
 * - Content is hidden only after `.reveal-ready` is set from JS, so users
 *   without JavaScript see the full page.
 * - With `prefers-reduced-motion`, the class is never added: no motion at all.
 */
export function LandingPage() {
  const scope = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = scope.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const els = root.querySelectorAll<HTMLElement>("[data-reveal], [data-hero]");
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px" }
    );

    root.classList.add("reveal-ready");
    els.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return (
    <div ref={scope} className="relative">
      <SiteNav />
      <main id="main">
        <Hero />
        <SystemMap />
        <Lifecycle />
        <Multisede />
        <OpenSource />
        <Pilot />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
