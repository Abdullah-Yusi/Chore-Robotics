"use client";

import { aboutPage } from "@/data/about";
import { useInView } from "@/hooks/useInView";

export default function AboutHero() {
  const { ref, isVisible } = useInView<HTMLElement>();

  return (
    <section
      ref={ref}
      className={`border-b border-border bg-background px-4 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-28 ${
        isVisible ? "reveal is-visible" : "reveal"
      }`}
    >
      <div className="mx-auto max-w-[1440px]">
        <p className="text-center font-body text-xs font-bold uppercase tracking-[0.28em] text-[#ff8400] sm:text-sm">
          {aboutPage.intro.eyebrow}
        </p>
      </div>
    </section>
  );
}
