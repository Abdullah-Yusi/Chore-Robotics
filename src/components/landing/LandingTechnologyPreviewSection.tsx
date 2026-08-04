"use client";

import Image from "next/image";
import Link from "next/link";
import { landingTechnologyPreview, technologySection } from "@/data/landing";
import { useInView } from "@/hooks/useInView";

export default function LandingTechnologyPreviewSection() {
  const { ref, isVisible } = useInView<HTMLElement>();

  return (
    <section
      ref={ref}
      className={`border-t border-white/10 bg-background px-6 py-20 lg:px-10 lg:py-28 ${
        isVisible ? "reveal is-visible" : "reveal"
      }`}
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-10 lg:mb-12">
          <p className="font-body text-[11px] font-bold uppercase tracking-[0.24em] text-[#ff8400]">
            {landingTechnologyPreview.eyebrow}
          </p>
          <h2 className="mt-2 whitespace-nowrap font-heading text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-tight text-white">
            {landingTechnologyPreview.title}
          </h2>
          <h2 className="mt-1 font-heading text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-tight text-white">
            {landingTechnologyPreview.titleLine2}
          </h2>
        </div>

        <div
          className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
          style={{ transitionDelay: "80ms" }}
        >
          <div className="relative aspect-[16/10] min-h-[320px] w-full sm:min-h-[400px] lg:aspect-[21/9] lg:min-h-[440px]">
            <Image
              src={technologySection.image}
              alt={technologySection.imageAlt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1440px) 100vw, 1440px"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#161616]/92 via-[#161616]/50 to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#161616]/60 via-transparent to-[#161616]/20" />

            <div className="absolute inset-0 flex items-end p-6 sm:p-10 lg:p-12">
              <div className="max-w-lg">
                <span className="inline-flex items-center rounded-full border border-[#ff8400]/35 bg-[#ff8400]/10 px-3 py-1 font-body text-[10px] font-bold uppercase tracking-[0.18em] text-[#ff8400] backdrop-blur-sm">
                  {technologySection.tag}
                </span>
                <h3 className="mt-4 font-heading text-[clamp(1.35rem,3vw,2rem)] font-semibold uppercase leading-[1.08] tracking-[0.03em] text-white">
                  {technologySection.headline}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-white/70 sm:text-[15px]">
                  {technologySection.description}
                </p>

                <Link
                  href={landingTechnologyPreview.cta.href}
                  className="btn-reserve group mt-6 inline-flex"
                >
                  <span>{landingTechnologyPreview.cta.label}</span>
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
