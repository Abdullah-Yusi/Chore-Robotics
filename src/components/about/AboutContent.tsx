"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { aboutPage, type AboutSection, type AboutSectionWithVideo } from "@/data/about";
import { useInView } from "@/hooks/useInView";
import AboutTimelineVideo from "@/components/about/AboutTimelineVideo";

function SectionText({
  section,
  children,
}: {
  section: AboutSection;
  children: ReactNode;
}) {
  const { ref, isVisible } = useInView<HTMLElement>();

  return (
    <article
      ref={ref}
      id={`section-${section.id}`}
      className={`scroll-mt-28 ${isVisible ? "reveal is-visible" : "reveal"}`}
    >
      {"sectionLabel" in section && section.sectionLabel ? (
        <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.24em] text-orange sm:text-[13px]">
          {section.sectionLabel}
        </p>
      ) : null}

      <h2 className="font-heading text-[clamp(1.35rem,3vw,2rem)] font-semibold uppercase leading-[1.1] tracking-[0.03em] text-foreground">
        {section.title}
      </h2>

      <div className="mt-5 space-y-5 font-body text-[15px] leading-relaxed text-muted sm:text-base sm:leading-relaxed">
        {children}
      </div>
    </article>
  );
}

function hasSectionVideo(section: AboutSection): section is AboutSectionWithVideo {
  return "video" in section && Boolean(section.video);
}

function renderSectionContent(section: AboutSection) {
  if ("bullets" in section) {
    return (
      <SectionText section={section}>
        <ul className="space-y-3">
          {section.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </SectionText>
    );
  }

  if ("paragraphs" in section) {
    return (
      <SectionText section={section}>
        {section.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </SectionText>
    );
  }

  return null;
}

export default function AboutContent() {
  const { ref: ctaRef, isVisible: ctaVisible } = useInView<HTMLDivElement>();

  return (
    <section className="bg-background px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[900px]">
        <div className="relative">
          <div
            className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-orange/40 via-border to-transparent sm:left-[19px]"
            aria-hidden
          />

          <div className="space-y-20 lg:space-y-28">
            {aboutPage.sections.map((section) => (
              <div key={section.id} className="relative pl-10 sm:pl-16">
                <div
                  className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-orange/40 bg-background sm:h-10 sm:w-10"
                  aria-hidden
                >
                  <span className="font-body text-xs font-bold text-orange sm:text-[13px]">
                    {section.chapter}
                  </span>
                </div>

                <div className="space-y-8">
                  {renderSectionContent(section)}
                  {hasSectionVideo(section) ? (
                    <AboutTimelineVideo
                      item={{
                        id: section.id,
                        chapter: section.chapter,
                        title: section.title,
                        video: section.video,
                      }}
                    />
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          ref={ctaRef}
          className={`mt-20 rounded-2xl border border-border bg-surface-elevated p-8 sm:p-10 lg:mt-28 lg:p-12 ${
            ctaVisible ? "reveal is-visible" : "reveal"
          }`}
        >
          <p className="font-body text-xs font-bold uppercase tracking-[0.24em] text-orange sm:text-[13px]">
            {aboutPage.cta.eyebrow}
          </p>
          <h2 className="mt-3 font-heading text-[clamp(1.35rem,3vw,2.25rem)] font-semibold uppercase leading-tight tracking-[0.03em] text-foreground">
            {aboutPage.cta.headline}
          </h2>
          <p className="mt-4 max-w-xl font-body text-[15px] leading-relaxed text-muted">
            {aboutPage.cta.description}
          </p>
          <Link href={aboutPage.cta.href} className="btn-reserve group mt-8 inline-flex">
            <span>{aboutPage.cta.label}</span>
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
    </section>
  );
}
