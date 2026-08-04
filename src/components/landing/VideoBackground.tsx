"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type VideoBackgroundProps = {
  video: string;
  poster: string;
  overlay?: "hero" | "subtle" | "dark";
  priority?: boolean;
  className?: string;
};

const overlayClasses = {
  hero: "bg-gradient-to-b from-black/50 via-black/30 to-black/70",
  subtle: "bg-black/25",
  dark: "bg-black/55",
};

export default function VideoBackground({
  video,
  poster,
  overlay = "hero",
  priority = false,
  className = "",
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const play = () => {
      el.play().catch(() => {
        setVideoReady(false);
      });
    };

    el.addEventListener("canplay", () => setVideoReady(true));
    play();

    return () => {
      el.removeEventListener("canplay", () => setVideoReady(true));
    };
  }, [video]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <Image
        src={poster}
        alt=""
        fill
        priority={priority}
        className={`object-cover object-center transition-opacity duration-700 ${
          videoReady ? "opacity-0" : "opacity-100"
        }`}
        sizes="100vw"
      />
      <video
        ref={videoRef}
        src={video}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload={priority ? "auto" : "none"}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          videoReady ? "opacity-100" : "opacity-0"
        }`}
      />
      <div className={`absolute inset-0 ${overlayClasses[overlay]}`} />
    </div>
  );
}
