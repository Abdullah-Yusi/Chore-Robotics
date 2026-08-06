"use client";

import { patentedSecureLockSection } from "@/data/landing";
import { useInView } from "@/hooks/useInView";
import MediaHeroBlock from "@/components/MediaHeroBlock";

export default function PatentedSecureLockSection() {
  const { ref, isVisible } = useInView<HTMLElement>();

  return (
    <section
      ref={ref}
      id="patented-secure-lock"
      className="border-t border-border bg-background px-4 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px]">
        <p
          className={`text-center font-body text-xs font-bold uppercase tracking-[0.28em] text-orange sm:text-sm ${
            isVisible ? "reveal is-visible" : "reveal"
          }`}
        >
          {patentedSecureLockSection.eyebrow}
        </p>

        <div
          className={`mt-10 sm:mt-12 ${isVisible ? "reveal is-visible" : "reveal"}`}
          style={{ transitionDelay: "80ms" }}
        >
          <MediaHeroBlock
            video={patentedSecureLockSection.video}
            headline={patentedSecureLockSection.headline}
            description={patentedSecureLockSection.description}
            ariaLabel="CHORE patented secure lock module swap"
            headlineClassName="whitespace-nowrap"
          />
        </div>
      </div>
    </section>
  );
}
