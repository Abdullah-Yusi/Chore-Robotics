"use client";

import { investorsPage } from "@/data/investors";
import { useInView } from "@/hooks/useInView";

export default function InvestorHero() {
  const { ref, isVisible } = useInView<HTMLElement>();

  return (
    <section
      ref={ref}
      className={`relative overflow-hidden border-b border-border bg-background px-4 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-28 ${
        isVisible ? "reveal is-visible" : "reveal"
      }`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,132,0,0.12),transparent)]"
      />

      <div className="relative mx-auto max-w-[1440px] text-center">
        <p className="font-body text-xs font-bold uppercase tracking-[0.28em] text-[#ff8400] sm:text-sm">
          {investorsPage.eyebrow}
        </p>
        <h1 className="mt-6 font-heading text-[clamp(1.75rem,4.5vw,3.25rem)] font-semibold uppercase leading-[1.05] tracking-[0.03em] text-foreground">
          {investorsPage.headline}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl font-body text-[15px] leading-relaxed text-muted sm:text-base">
          {investorsPage.description}
        </p>
      </div>
    </section>
  );
}
