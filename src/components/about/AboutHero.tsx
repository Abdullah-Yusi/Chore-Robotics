"use client";

import { aboutPage } from "@/data/about";
import { useInView } from "@/hooks/useInView";

export default function AboutHero() {
  const { ref, isVisible } = useInView<HTMLElement>();

  return (
    <section
      ref={ref}
      className={`border-b border-white/10 bg-background px-6 py-16 lg:px-10 lg:py-24 ${
        isVisible ? "reveal is-visible" : "reveal"
      }`}
    >
      <div className="mx-auto max-w-[1440px]">
        <p className="font-body text-[11px] font-bold uppercase tracking-[0.24em] text-[#ff8400]">
          {aboutPage.intro.eyebrow}
        </p>
        <h1 className="mt-4 font-heading text-[clamp(2rem,5vw,3.5rem)] font-semibold uppercase leading-[1.05] tracking-[0.04em] text-white">
          {aboutPage.intro.headline}
        </h1>
      </div>
    </section>
  );
}
