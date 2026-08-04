"use client";

import Image from "next/image";
import { fleetManagementSection } from "@/data/landing";
import { useInView } from "@/hooks/useInView";

export default function FleetManagementSection() {
  const { ref, isVisible } = useInView<HTMLElement>();
  const { highlights } = fleetManagementSection;

  return (
    <section
      ref={ref}
      id="fleet-management"
      className="border-t border-white/10 bg-background px-6 py-20 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px]">
        <p
          className={`text-center font-body text-xs font-bold uppercase tracking-[0.28em] text-[#ff8400] sm:text-sm ${
            isVisible ? "reveal is-visible" : "reveal"
          }`}
        >
          {fleetManagementSection.eyebrow}
        </p>

        <div
          className={`relative mt-10 overflow-hidden rounded-2xl border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.45)] sm:mt-12 ${
            isVisible ? "reveal is-visible" : "reveal"
          }`}
          style={{ transitionDelay: "80ms" }}
        >
          <div className="relative aspect-[4/3] min-h-[420px] w-full sm:aspect-[16/10] sm:min-h-[480px] lg:aspect-[21/9] lg:min-h-[520px]">
            <Image
              src={fleetManagementSection.image}
              alt={fleetManagementSection.imageAlt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1440px) 100vw, 1440px"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#161616]/88 via-[#161616]/25 to-[#161616]/65" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#161616]/90 via-[#161616]/40 to-transparent" />

            <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-10 lg:p-14">
              <div className="max-w-xl lg:max-w-2xl">
                <h2 className="font-heading text-[clamp(1.75rem,4.5vw,3rem)] font-semibold uppercase leading-[1.05] tracking-[0.03em] text-white">
                  {fleetManagementSection.headline}
                </h2>

                <p className="mt-5 max-w-lg font-body text-[15px] leading-relaxed text-white/80 sm:text-base">
                  {fleetManagementSection.description}
                </p>
              </div>

              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 lg:mt-0">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff8400]" />
                    <span className="font-body text-[11px] font-semibold uppercase tracking-[0.1em] text-white/60">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pointer-events-none absolute bottom-0 left-0 h-px w-1/2 bg-gradient-to-r from-[#ff8400]/60 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
