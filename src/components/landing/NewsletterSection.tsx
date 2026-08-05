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
      className={`border-t border-border bg-surface-dark px-4 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-28 2xl:px-16 ${
        isVisible ? "reveal is-visible" : "reveal"
      }`}
    >
      <div className="mx-auto max-w-[640px] text-center">
        <h2 className="font-heading text-[clamp(1.25rem,3vw,2rem)] font-medium text-foreground">
          {newsletterSection.title}
        </h2>

        {submitted ? (
          <p className="mt-8 font-body text-sm text-muted">
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
              className="form-input h-12 flex-1 text-sm"
            />
            <button type="submit" className="btn-primary w-full shrink-0 sm:w-auto">
              {newsletterSection.buttonLabel}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
