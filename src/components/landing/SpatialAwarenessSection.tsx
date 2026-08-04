"use client";

import { spatialAwarenessSection } from "@/data/landing";
import { useInView } from "@/hooks/useInView";
import MediaHeroBlock from "@/components/MediaHeroBlock";

export default function SpatialAwarenessSection() {
  const { ref, isVisible } = useInView<HTMLElement>();

  return (
    <section
      ref={ref}
      id="spatial-awareness"
      className="border-t border-white/10 bg-background px-6 py-20 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px]">
        <p
          className={`text-center font-body text-xs font-bold uppercase tracking-[0.28em] text-[#ff8400] sm:text-sm ${
            isVisible ? "reveal is-visible" : "reveal"
          }`}
        >
          {spatialAwarenessSection.eyebrow}
        </p>

        <div
          className={`mt-10 sm:mt-12 ${isVisible ? "reveal is-visible" : "reveal"}`}
          style={{ transitionDelay: "80ms" }}
        >
          <MediaHeroBlock
            image={spatialAwarenessSection.image}
            imageAlt={spatialAwarenessSection.imageAlt}
            headline={spatialAwarenessSection.headline}
            description={spatialAwarenessSection.description}
            ariaLabel="CHORE 360 degree spatial awareness sensor stack"
          />
        </div>
      </div>
    </section>
  );
}
