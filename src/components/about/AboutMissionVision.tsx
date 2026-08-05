"use client";

import { aboutPage } from "@/data/about";
import { useInView } from "@/hooks/useInView";

export default function AboutMissionVision() {
  const { ref, isVisible } = useInView<HTMLElement>();
  const { mission, vision } = aboutPage.missionVision;

  return (
    <section
      ref={ref}
      className={`border-b border-border bg-background px-4 py-10 sm:px-6 sm:py-14 lg:px-10 lg:py-20 ${
        isVisible ? "reveal is-visible" : "reveal"
      }`}
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          <article className="max-w-xl">
            <p className="font-body text-xs font-bold uppercase tracking-[0.24em] text-orange sm:text-[13px]">
              {mission.eyebrow}
            </p>
            <h2 className="mt-3 font-heading text-[clamp(1.35rem,2.5vw,1.75rem)] font-semibold uppercase leading-tight tracking-[0.03em] text-foreground">
              {mission.title}
            </h2>
            <p className="mt-4 font-body text-[15px] leading-relaxed text-muted sm:text-base sm:leading-relaxed">
              {mission.text}
            </p>
          </article>

          <article className="max-w-xl lg:border-l lg:border-border lg:pl-16 xl:pl-24">
            <p className="font-body text-xs font-bold uppercase tracking-[0.24em] text-orange sm:text-[13px]">
              {vision.eyebrow}
            </p>
            <h2 className="mt-3 font-heading text-[clamp(1.35rem,2.5vw,1.75rem)] font-semibold uppercase leading-tight tracking-[0.03em] text-foreground">
              {vision.title}
            </h2>
            <p className="mt-4 font-body text-[15px] leading-relaxed text-muted sm:text-base sm:leading-relaxed">
              {vision.text}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
