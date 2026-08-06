"use client";

import { useEffect, useRef } from "react";
import { obstacleNavigationSection } from "@/data/landing";
import { useInView } from "@/hooks/useInView";

export default function ObstacleNavigationSection() {
  const { ref, isVisible } = useInView<HTMLElement>();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    el.play().catch(() => undefined);
  }, []);

  const videoSrc = `/${encodeURIComponent(obstacleNavigationSection.video)}`;

  return (
    <section
      ref={ref}
      id="obstacle-navigation"
      className="border-t border-border bg-background px-4 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px]">
        <p
          className={`text-center font-body text-xs font-bold uppercase tracking-[0.28em] text-[#ff8400] sm:text-sm ${
            isVisible ? "reveal is-visible" : "reveal"
          }`}
        >
          {obstacleNavigationSection.eyebrow}
        </p>

        <div
          className={`relative mt-8 overflow-hidden rounded-2xl border border-border shadow-[0_24px_80px_rgba(0,0,0,0.45)] sm:mt-12 ${
            isVisible ? "reveal is-visible" : "reveal"
          }`}
          style={{ transitionDelay: "80ms" }}
        >
          <div className="relative aspect-[16/10] min-h-[280px] w-full sm:min-h-[440px] lg:aspect-[21/9] lg:min-h-[520px]">
            <video
              ref={videoRef}
              src={videoSrc}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="absolute inset-0 h-full w-full object-cover object-center"
              aria-label="CHORE robot navigating dynamic obstacles in real time"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#161616]/92 via-[#161616]/45 to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#161616]/55 via-transparent to-[#161616]/30" />

            <div className="absolute inset-0 flex items-start p-4 sm:p-10 lg:p-14">
              <div className="max-w-xl lg:max-w-2xl">
                <h2 className="font-heading text-[clamp(1.1rem,2.8vw,2.25rem)] font-semibold uppercase leading-[1.08] tracking-[0.03em] text-white sm:text-[clamp(1.35rem,3.2vw,2.5rem)]">
                  {obstacleNavigationSection.headline}
                </h2>

                <p className="mt-5 max-w-lg font-body text-[15px] leading-relaxed text-white/80 sm:text-base sm:leading-relaxed">
                  {obstacleNavigationSection.description}
                </p>
              </div>
            </div>

            <div className="pointer-events-none absolute bottom-0 right-0 h-px w-2/3 bg-gradient-to-l from-[#ff8400]/60 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
