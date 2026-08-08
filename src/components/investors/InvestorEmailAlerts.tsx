"use client";

import { FormEvent, useState } from "react";
import { investorsPage } from "@/data/investors";
import { isValidEmail } from "@/data/reservation";
import { useInView } from "@/hooks/useInView";

export default function InvestorEmailAlerts() {
  const { ref, isVisible } = useInView<HTMLElement>();
  const { emailAlerts } = investorsPage;
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isValidEmail(email)) {
      setError("Enter a valid email address.");
      return;
    }

    setError("");
    setSubmitted(true);
  };

  return (
    <section
      ref={ref}
      id="email-alerts"
      className={`scroll-mt-28 border-t border-border bg-background px-4 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-24 ${
        isVisible ? "reveal is-visible" : "reveal"
      }`}
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="relative overflow-hidden rounded-2xl border border-orange/25 bg-[linear-gradient(135deg,rgba(255,132,0,0.12)_0%,rgba(255,132,0,0.04)_45%,transparent_100%)] px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-orange/10 blur-3xl"
          />

          <div className="relative mx-auto max-w-2xl text-center">
            <p className="font-body text-[11px] font-bold uppercase tracking-[0.24em] text-orange">
              Investor Updates
            </p>
            <h2 className="mt-3 font-heading text-[clamp(1.35rem,3vw,2.25rem)] font-semibold uppercase leading-tight tracking-[0.03em] text-foreground">
              {emailAlerts.title}
            </h2>
            <p className="mt-4 font-body text-[15px] leading-relaxed text-muted sm:text-base">
              {emailAlerts.description}
            </p>

            {submitted ? (
              <p className="mt-8 font-body text-sm text-foreground">
                {emailAlerts.successMessage}
              </p>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row sm:items-start"
                noValidate
              >
                <div className="flex-1 text-left">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      setError("");
                    }}
                    placeholder={emailAlerts.placeholder}
                    className="form-input h-12 w-full text-sm"
                  />
                  {error ? (
                    <p className="mt-2 font-body text-xs text-red-400">{error}</p>
                  ) : null}
                </div>
                <button type="submit" className="btn-primary h-12 shrink-0 px-8">
                  {emailAlerts.buttonLabel}
                </button>
              </form>
            )}

            <p className="mt-6 font-body text-xs leading-relaxed text-subtle">
              {emailAlerts.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
