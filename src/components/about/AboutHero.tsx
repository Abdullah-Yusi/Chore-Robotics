"use client";

import { aboutPage } from "@/data/about";
import { useInView } from "@/hooks/useInView";

export default function AboutHero() {
  const { ref, isVisible } = useInView<HTMLElement>();

  return (
    <section
      ref={ref}
      className={`border-b border-border bg-background px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-24 ${
        isVisible ? "reveal is-visible" : "reveal"
      }`}
    >
      <div className="mx-auto max-w-[1440px]">
        <p className="font-body text-xs font-bold uppercase tracking-[0.24em] text-orange sm:text-[13px]">
          {aboutPage.intro.eyebrow}
        </p>
        <h1 className="mt-4 font-heading text-[clamp(1.65rem,5vw,3.5rem)] font-semibold uppercase leading-[1.05] tracking-[0.04em] text-foreground sm:text-[clamp(2rem,5vw,3.5rem)]">
          {aboutPage.intro.headline}
        </h1>
      </div>
    </section>
  );
}
