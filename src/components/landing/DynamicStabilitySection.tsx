"use client";

import { dynamicStabilitySection } from "@/data/landing";
import { useInView } from "@/hooks/useInView";
import MediaHeroBlock from "@/components/MediaHeroBlock";

export default function DynamicStabilitySection() {
  const { ref, isVisible } = useInView<HTMLElement>();

  return (
    <section
      ref={ref}
      id="dynamic-stability"
      className="border-t border-border bg-background px-4 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px]">
        <p
          className={`text-center font-body text-xs font-bold uppercase tracking-[0.28em] text-orange sm:text-sm ${
            isVisible ? "reveal is-visible" : "reveal"
          }`}
        >
          {dynamicStabilitySection.eyebrow}
        </p>

        <div
          className={`mt-10 sm:mt-12 ${isVisible ? "reveal is-visible" : "reveal"}`}
          style={{ transitionDelay: "80ms" }}
        >
          <MediaHeroBlock
            video={dynamicStabilitySection.video}
            headline={dynamicStabilitySection.headline}
            description={dynamicStabilitySection.description}
            ariaLabel="CHORE dynamic stability suspension system"
            headlineClassName="whitespace-nowrap"
          />
        </div>
      </div>
    </section>
  );
}
