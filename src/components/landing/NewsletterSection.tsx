"use client";

import { FormEvent, useState } from "react";
import { newsletterSection } from "@/data/landing";
import { useInView } from "@/hooks/useInView";

export default function NewsletterSection() {
  const { ref, isVisible } = useInView<HTMLElement>();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      ref={ref}
      className={`border-t border-white/10 bg-[var(--surface-dark)] px-6 py-20 lg:px-10 lg:py-28 ${
        isVisible ? "reveal is-visible" : "reveal"
      }`}
    >
      <div className="mx-auto max-w-[640px] text-center">
        <h2 className="font-heading text-[clamp(1.25rem,3vw,2rem)] font-medium text-white">
          {newsletterSection.title}
        </h2>

        {submitted ? (
          <p className="mt-8 font-body text-sm text-white/70">
            Thanks — you&apos;re on the list.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <input
              type="email"
              required
              placeholder={newsletterSection.placeholder}
              className="h-12 flex-1 border border-white/20 bg-transparent px-4 font-body text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-white/50"
            />
            <button type="submit" className="btn-primary shrink-0">
              {newsletterSection.buttonLabel}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
