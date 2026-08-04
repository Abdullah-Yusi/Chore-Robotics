"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type MediaHeroBlockProps = {
  video?: string;
  image?: string;
  imageAlt?: string;
  headline: string;
  description?: string;
  ariaLabel?: string;
  className?: string;
  compact?: boolean;
};

export default function MediaHeroBlock({
  video,
  image,
  imageAlt,
  headline,
  description,
  ariaLabel,
  className = "",
  compact = false,
}: MediaHeroBlockProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoSrc = video ? `/${encodeURIComponent(video.replace(/^\//, ""))}` : null;

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    el.play().catch(() => undefined);
  }, [video]);

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.45)] ${className}`}
    >
      <div
        className={
          compact
            ? "relative aspect-[16/9] min-h-[260px] w-full sm:min-h-[320px] lg:aspect-[21/9] lg:min-h-[360px]"
            : "relative aspect-[16/10] min-h-[360px] w-full sm:min-h-[420px] lg:aspect-[21/9] lg:min-h-[480px]"
        }
      >
        {videoSrc ? (
          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover object-center"
            aria-label={ariaLabel ?? headline}
          />
        ) : image ? (
          <Image
            src={image}
            alt={imageAlt ?? headline}
            fill
            className="object-cover object-center"
            sizes="(max-width: 1440px) 100vw, 1440px"
            priority
          />
        ) : null}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#161616]/92 via-[#161616]/55 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#161616]/50 via-transparent to-[#161616]/25" />

        <div className="absolute inset-0 flex items-start p-6 sm:p-10 lg:p-14">
          <div className="max-w-xl lg:max-w-2xl">
            <h2
              className={
                compact
                  ? "font-heading text-[clamp(1.35rem,3.5vw,2.5rem)] font-semibold uppercase leading-[1.05] tracking-[0.03em] text-white"
                  : "font-heading text-[clamp(1.75rem,4.5vw,3.25rem)] font-semibold uppercase leading-[1.05] tracking-[0.03em] text-white"
              }
            >
              {headline}
            </h2>

            {description ? (
              <p className="mt-5 max-w-lg font-body text-[15px] leading-relaxed text-white/75 sm:text-base sm:leading-relaxed">
                {description}
              </p>
            ) : null}
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 right-0 h-px w-2/3 bg-gradient-to-l from-[#ff8400]/60 to-transparent" />
      </div>
    </div>
  );
}
