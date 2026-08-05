"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { productTabShowcase } from "@/data/landing";
import { ChevronRight } from "@/components/icons";
import { useInView } from "@/hooks/useInView";

export default function ProductTabShowcaseSection() {
  const { ref, isVisible } = useInView<HTMLElement>();
  const [active, setActive] = useState(0);
  const current = productTabShowcase[active];

  const goNext = useCallback(() => {
    setActive((i) => (i === productTabShowcase.length - 1 ? 0 : i + 1));
  }, []);

  return (
    <section
      ref={ref}
      id="product-showcase"
      className={`w-full bg-background px-4 pt-6 pb-10 sm:px-6 lg:px-10 lg:pt-8 lg:pb-14 ${
        isVisible ? "reveal is-visible" : "reveal"
      }`}
    >
      <div className="mx-auto max-w-[1440px]">
        <article className="relative h-[460px] overflow-hidden rounded-2xl border border-border sm:h-[520px] lg:h-[580px]">
          {productTabShowcase.map((item, index) => (
            <div
              key={item.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === active ? "z-[2] opacity-100" : "z-[1] opacity-0"
              }`}
              aria-hidden={index !== active}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                priority={index === 0}
                className="object-cover object-[72%_center] sm:object-[68%_center]"
                sizes="(max-width: 768px) 100vw, 1440px"
              />
            </div>
          ))}

          <div className="pointer-events-none absolute inset-0 z-[3] bg-gradient-to-r from-black/55 via-black/15 to-transparent" />
          <div className="pointer-events-none absolute inset-0 z-[3] bg-gradient-to-t from-black/65 via-black/15 to-transparent" />

          <div
            className="absolute left-0 top-0 z-[30] max-w-full overflow-x-auto sm:overflow-visible"
            style={{ clipPath: "polygon(0 0, calc(100% - 32px) 0, 100% 100%, 0 100%)" }}
          >
            <div className="pointer-events-auto flex h-[38px] min-w-max items-center gap-2 bg-[#4a4a4a]/90 px-2 backdrop-blur-sm sm:h-[42px] sm:gap-5 sm:px-5">
              {productTabShowcase.map((item, index) => {
                const isActive = index === active;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActive(index)}
                    className={`relative h-full cursor-pointer font-body text-[10px] font-black uppercase tracking-[0.14em] transition-colors sm:text-[11px] sm:tracking-[0.16em] ${
                      isActive
                        ? "text-[#ff8400]"
                        : "text-white hover:text-white"
                    }`}
                    aria-pressed={isActive}
                    aria-label={`Show ${item.tabLabel}`}
                  >
                    {index > 0 && (
                      <span
                        className="pointer-events-none absolute -left-2 top-1/2 h-4 w-px -translate-y-1/2 bg-white/20 sm:-left-3"
                        aria-hidden
                      />
                    )}
                    {item.tabLabel}
                  </button>
                );
              })}
            </div>
          </div>

          <Link
            href={current.href}
            className="absolute bottom-3 left-3 right-12 z-[20] max-w-[calc(100%-3.5rem)] sm:bottom-4 sm:left-4 sm:right-16 sm:max-w-none"
          >
            <div key={current.id} className="showcase-text-enter group">
              <h2
                className="font-heading text-[clamp(0.95rem,2.8vw,2.25rem)] font-bold uppercase leading-[0.95] tracking-[0.02em] text-white sm:whitespace-nowrap"
                aria-label={`${current.titleBrand} ${current.titleName}`}
              >
                {current.titleBrand}&nbsp;{current.titleName}
              </h2>
              <p className="mt-1.5 max-w-[240px] font-heading text-[clamp(0.6rem,1.2vw,0.8rem)] font-semibold uppercase leading-snug tracking-[0.06em] text-white sm:mt-2 sm:max-w-[260px]">
                {current.subtitle}
              </p>
            </div>
          </Link>

          <button
            type="button"
            onClick={goNext}
            className="absolute right-3 top-1/2 z-[30] flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/45 backdrop-blur-sm transition-colors hover:bg-black/65 sm:right-5 lg:right-6"
            aria-label="Next product view"
          >
            <ChevronRight />
          </button>
        </article>
      </div>
    </section>
  );
}
