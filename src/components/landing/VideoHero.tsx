"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { landingHeroSlides } from "@/data/landing";
import { ChevronLeft, ChevronRight } from "@/components/icons";

const AUTO_MS = 6000;

export default function VideoHero() {
  const [active, setActive] = useState(0);
  const slide = landingHeroSlides[active];
  const isPrimarySlide = slide.id === "one-robot-every-chore";

  const goPrev = useCallback(() => {
    setActive((i) => (i === 0 ? landingHeroSlides.length - 1 : i - 1));
  }, []);

  const goNext = useCallback(() => {
    setActive((i) => (i === landingHeroSlides.length - 1 ? 0 : i + 1));
  }, []);

  useEffect(() => {
    const id = window.setInterval(goNext, AUTO_MS);
    return () => window.clearInterval(id);
  }, [goNext, active]);

  return (
    <section
      id="hero"
      className="relative flex w-full items-end overflow-hidden bg-background h-[clamp(320px,58vw,460px)] sm:h-[clamp(440px,72vh,100svh)] sm:min-h-[520px] lg:h-screen lg:min-h-[560px]"
      aria-roledescription="carousel"
      aria-label="CHORE product highlights"
    >
      {landingHeroSlides.map((item, index) => (
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
            quality={80}
            className={item.imageClassName}
            sizes="100vw"
          />
        </div>
      ))}

      <div className="pointer-events-none absolute inset-0 z-[3] bg-gradient-to-t from-black/75 via-black/25 to-black/35 sm:from-black/70 sm:via-black/20 sm:to-black/30" />
      <div className="pointer-events-none absolute inset-0 z-[3] bg-gradient-to-b from-black/45 via-transparent to-transparent sm:from-black/40" />

      <div className="pointer-events-none absolute inset-0 z-[4] flex items-center justify-center px-4 pb-20 pt-12 sm:translate-y-[4%] sm:px-6 sm:pb-0 sm:pt-0 lg:translate-y-[6%] lg:px-16">
        <h1
          key={slide.id}
          className="showcase-text-enter hero-slide-headline text-center font-heading text-[clamp(1.4rem,6.5vw,4.5rem)] font-bold uppercase leading-[1.05] tracking-[0.03em] sm:text-[clamp(2rem,5.5vw,4.5rem)] sm:leading-[1.02]"
        >
          {slide.headline.lines.map((line) => (
            <span
              key={line.text}
              className={`block ${
                isPrimarySlide && "accent" in line && line.accent
                  ? "text-orange"
                  : "text-white"
              }`}
            >
              {line.text}
            </span>
          ))}
        </h1>
      </div>

      <div className="absolute bottom-4 left-4 z-10 sm:bottom-10 sm:left-6 lg:left-16">
        <div className="flex h-[32px] items-center gap-2 rounded-full bg-black/40 px-2.5 backdrop-blur-sm sm:h-[36px] sm:gap-3 sm:px-3">
          <button
            type="button"
            onClick={goPrev}
            className="flex h-6 w-6 items-center justify-center opacity-80 transition-opacity hover:opacity-100"
            aria-label="Previous slide"
          >
            <ChevronLeft />
          </button>
          <div className="relative h-[3px] w-[72px] overflow-hidden rounded-full bg-white/30 sm:w-[120px]">
            <div
              className="absolute top-0 h-full w-[23%] rounded-full bg-[#ff8400] transition-[left] duration-300 ease-out"
              style={{
                left: `${(active / Math.max(landingHeroSlides.length - 1, 1)) * 77}%`,
              }}
            />
          </div>
          <button
            type="button"
            onClick={goNext}
            className="flex h-6 w-6 items-center justify-center opacity-80 transition-opacity hover:opacity-100"
            aria-label="Next slide"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      <div className="absolute bottom-4 right-4 z-10 flex gap-1.5 sm:bottom-10 sm:right-6 sm:gap-2 lg:right-16">
        {landingHeroSlides.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActive(index)}
            className={`h-1.5 w-1.5 rounded-full transition-colors sm:h-2 sm:w-2 ${
              index === active ? "bg-white" : "bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === active}
          />
        ))}
      </div>
    </section>
  );
}
