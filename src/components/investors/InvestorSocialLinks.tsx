"use client";

import SocialLinks from "@/components/SocialLinks";
import { investorsPage } from "@/data/investors";
import { useInView } from "@/hooks/useInView";

export default function InvestorSocialLinks() {
  const { ref, isVisible } = useInView<HTMLElement>();
  const { social } = investorsPage;

  return (
    <section
      ref={ref}
      className={`rounded-2xl border border-border bg-surface-elevated p-6 sm:p-8 lg:p-10 ${
        isVisible ? "reveal is-visible" : "reveal"
      }`}
    >
      <p className="font-body text-[11px] font-bold uppercase tracking-[0.24em] text-orange">
        Stay Connected
      </p>
      <h2 className="mt-2 font-heading text-[clamp(1.35rem,3vw,2rem)] font-semibold uppercase leading-tight tracking-[0.03em] text-foreground">
        {social.title}
      </h2>
      <p className="mt-3 max-w-md font-body text-[15px] leading-relaxed text-muted">
        {social.description}
      </p>

      <SocialLinks size="lg" className="mt-8" />

      <ul className="mt-8 space-y-3 border-t border-border pt-8">
        {[
          "Product launches and field demonstrations",
          "Company milestones and press coverage",
          "Industry events and partnership announcements",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange/15 text-orange">
              <svg
                className="h-3 w-3"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8l3 3 5-6" />
              </svg>
            </span>
            <span className="font-body text-sm leading-relaxed text-muted">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
