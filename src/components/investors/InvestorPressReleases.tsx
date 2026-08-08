"use client";

import { investorsPage } from "@/data/investors";
import { useInView } from "@/hooks/useInView";

function formatReleaseDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${date}T12:00:00`));
}

export default function InvestorPressReleases() {
  const { ref, isVisible } = useInView<HTMLElement>();
  const { pressReleases } = investorsPage;

  return (
    <section
      ref={ref}
      id="press-releases"
      className={`scroll-mt-28 bg-background px-4 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-24 ${
        isVisible ? "reveal is-visible" : "reveal"
      }`}
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-10 max-w-2xl lg:mb-12">
          <p className="font-body text-[11px] font-bold uppercase tracking-[0.24em] text-orange">
            Newsroom
          </p>
          <h2 className="mt-2 font-heading text-[clamp(1.35rem,3vw,2.25rem)] font-semibold uppercase leading-tight tracking-[0.03em] text-foreground">
            {pressReleases.title}
          </h2>
          <p className="mt-3 font-body text-[15px] leading-relaxed text-muted sm:text-base">
            {pressReleases.description}
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
          {pressReleases.items.map((release, index) => (
            <article
              key={release.id}
              className="group flex flex-col rounded-2xl border border-border bg-surface-elevated p-6 transition-all duration-300 hover:border-border sm:p-7"
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <time
                dateTime={release.date}
                className="font-body text-[11px] font-bold uppercase tracking-[0.16em] text-orange"
              >
                {formatReleaseDate(release.date)}
              </time>
              <h3 className="mt-3 font-heading text-lg font-semibold leading-snug tracking-[0.01em] text-foreground transition-colors group-hover:text-orange sm:text-xl">
                {release.title}
              </h3>
              <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-muted sm:text-[15px]">
                {release.summary}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
