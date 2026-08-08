"use client";

import { technologyPageHero } from "@/data/landing";
import { useInView } from "@/hooks/useInView";
import MediaHeroBlock from "@/components/MediaHeroBlock";

export default function TechnologySection() {
  const { ref, isVisible } = useInView<HTMLElement>();

  return (
    <section
      ref={ref}
      id="technology"
      className="bg-background px-4 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px]">
        <p
          className={`text-center font-body text-xs font-bold uppercase tracking-[0.28em] text-[#ff8400] sm:text-sm ${
            isVisible ? "reveal is-visible" : "reveal"
          }`}
        >
          {technologyPageHero.eyebrow}
        </p>

        <div
          className={`mt-10 sm:mt-12 ${isVisible ? "reveal is-visible" : "reveal"}`}
          style={{ transitionDelay: "80ms" }}
        >
          <MediaHeroBlock
            video={technologyPageHero.video}
            headline={technologyPageHero.headline}
            description={technologyPageHero.description}
            ariaLabel="CHORE Ground Penetrating Radar mapping"
            compact
          />
        </div>
      </div>
    </section>
  );
}
