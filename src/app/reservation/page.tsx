import type { Metadata } from "next";
import { Suspense } from "react";
import Footer from "@/components/landing/Footer";
import ReservationForm from "@/components/reservation/ReservationForm";
import Navbar from "@/components/Navbar";
import { reservationPage } from "@/data/reservation";

export const metadata: Metadata = {
  title: "Reservation — CHORE",
  description:
    "Pre-order your CHORE modular robot. Reserve your module with a refundable deposit.",
};

function ReservationFormFallback() {
  return (
    <div className="rounded-2xl border border-border bg-surface-elevated p-10">
      <div className="skeleton-pulse h-8 w-48 rounded-lg" />
      <div className="mt-6 space-y-4">
        <div className="skeleton-pulse-subtle h-12 rounded-xl" />
        <div className="skeleton-pulse-subtle h-12 rounded-xl" />
        <div className="skeleton-pulse-subtle h-12 rounded-xl" />
      </div>
    </div>
  );
}

export default function ReservationPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background pt-[88px]">
        <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,132,0,0.12),transparent)]"
          />

          <div className="relative mx-auto max-w-[1440px]">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16 xl:gap-20">
              <div className="max-w-xl lg:sticky lg:top-32 lg:self-start">
                <p className="font-body text-[11px] font-bold uppercase tracking-[0.24em] text-orange">
                  {reservationPage.eyebrow}
                </p>
                <h1 className="mt-4 font-heading text-[clamp(2rem,4.5vw,3.5rem)] font-semibold uppercase leading-[1.05] tracking-[0.03em] text-foreground">
                  {reservationPage.headline}
                </h1>
                <p className="mt-5 font-body text-[15px] leading-relaxed text-muted sm:text-base">
                  {reservationPage.description}
                </p>

                <ul className="mt-10 space-y-4 border-t border-border pt-8">
                  {[
                    "Refundable deposit — no payment collected today",
                    "Priority access when your module ships",
                    "Dedicated support for configuration & delivery",
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
                      <span className="font-body text-sm leading-relaxed text-muted">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <Suspense fallback={<ReservationFormFallback />}>
                <ReservationForm />
              </Suspense>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
