"use client";

import { useEffect, useRef } from "react";
import { useInView } from "@/hooks/useInView";

type AboutTimelineVideoProps = {
  item: {
    id: string;
    chapter: string;
    title: string;
    video: string | null;
  };
  linkedTitle: string;
};

export default function AboutTimelineVideo({
  item,
  linkedTitle,
}: AboutTimelineVideoProps) {
  const { ref, isVisible } = useInView<HTMLDivElement>();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el || !item.video) return;

    el.play().catch(() => undefined);
  }, [item.video]);

  const videoSrc = item.video
    ? `/${encodeURIComponent(item.video.replace(/^\//, ""))}`
    : null;

  return (
    <div
      ref={ref}
      id={`video-${item.id}`}
      className={`scroll-mt-28 ${isVisible ? "reveal is-visible" : "reveal"}`}
      aria-labelledby={`section-${item.id}`}
    >
      <p className="mb-3 font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-subtle">
        Linked to: {linkedTitle}
      </p>

      <div className="relative overflow-hidden rounded-2xl border border-border shadow-[0_16px_48px_rgba(0,0,0,0.12)] dark:shadow-[0_16px_48px_rgba(0,0,0,0.35)]">
        <div className="relative aspect-[16/10] min-h-[220px] w-full sm:min-h-[280px]">
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
              aria-label={linkedTitle}
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-surface-elevated">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-foreground/5">
                <svg
                  className="h-5 w-5 text-subtle"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="mt-3 font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-subtle">
                Video coming soon
              </p>
            </div>
          )}

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#161616]/70 via-transparent to-[#161616]/20" />

          <div className="absolute bottom-0 left-0 p-4 sm:p-5">
            <p className="font-body text-xs font-bold uppercase tracking-[0.22em] text-orange sm:text-[13px]">
              Chapter {item.chapter}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
