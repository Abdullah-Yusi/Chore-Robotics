"use client";

import Link from "next/link";
import { reserveSection } from "@/data/landing";
import { useInView } from "@/hooks/useInView";

export default function ReserveSection() {
  const { ref, isVisible } = useInView<HTMLElement>();

  return (
    <section
      ref={ref}
      id="reserve"
      className={`border-y border-white/10 bg-background px-6 py-16 lg:px-10 lg:py-20 ${
        isVisible ? "reveal is-visible" : "reveal"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        <div className="max-w-xl">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.22em] text-[#ff8400]">
            {reserveSection.eyebrow}
          </p>
          <h2 className="mt-3 font-heading text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-tight text-white">
            {reserveSection.title}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-white/70 sm:text-base">
            {reserveSection.description}
          </p>
        </div>

        <Link href={reserveSection.cta.href} className="btn-reserve group shrink-0">
          <span>{reserveSection.cta.label}</span>
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
    </section>
  );
}
