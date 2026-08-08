"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "./icons";

const slides = [
  {
    image: "/images/hero.jpg",
    title: "THE MODULAR YARD ROBOT FOR EVERY SEASON",
    subtitle: "Smart, automated mowing keeps your lawn clean as it grows",
  },
  {
    image: "/images/hero.jpg",
    title: "ONE PLATFORM EVERY OUTDOOR TASK",
    subtitle: "Swap modules in seconds — mow, blow, plow, and more",
  },
  {
    image: "/images/hero.jpg",
    title: "BUILT FOR YEAR-ROUND PERFORMANCE",
    subtitle: "Weather-ready robotics designed for your entire property",
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = slides[activeSlide];

  const goPrev = () =>
    setActiveSlide((i) => (i === 0 ? slides.length - 1 : i - 1));
  const goNext = () =>
    setActiveSlide((i) => (i === slides.length - 1 ? 0 : i + 1));

  return (
    <section className="relative h-[calc(100vh-72px)] min-h-[560px] w-full overflow-hidden">
      <Image
        src={slide.image}
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-center px-6 pb-24 pt-12 lg:px-16">
        <div className="max-w-[640px]">
          <h1 className="font-body text-[clamp(2rem,4.5vw,3.5rem)] font-bold uppercase leading-[1.08] tracking-[0.02em] text-white">
            THE MODULAR ROBOT FOR EVERY SEASON
          </h1>
          <p className="mt-5 max-w-[480px] font-body text-[15px] leading-relaxed text-white/95 sm:text-base">
            smart, automated attachment/tools for your outdoor and indoor chores
          </p>
          <div className="mt-8 flex flex-col items-start gap-2">
            <a
              href="#reservation"
              className="inline-flex h-[48px] min-w-[148px] items-center justify-center bg-white px-8 font-body text-[13px] font-semibold tracking-wide text-black transition-opacity hover:opacity-90"
            >
              Make a Reservation
            </a>
            <span className="font-body text-[12px] text-white/80">
              Minimum reservation amount is $50
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-6 z-10 lg:left-16">
        <div className="flex h-[36px] items-center gap-3 rounded-full bg-black/35 px-3 backdrop-blur-sm">
          <button
            type="button"
            onClick={goPrev}
            className="flex h-6 w-6 items-center justify-center opacity-80 transition-opacity hover:opacity-100"
            aria-label="Previous slide"
          >
            <ChevronLeft />
          </button>
          <div className="relative h-[3px] w-[120px] overflow-hidden rounded-full bg-white/30">
            <div
              className="absolute top-0 h-full w-[38px] rounded-full bg-[#ff8400] transition-[left] duration-300 ease-out"
              style={{
                left: `${(activeSlide / Math.max(slides.length - 1, 1)) * (120 - 38)}px`,
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
    </section>
  );
}
