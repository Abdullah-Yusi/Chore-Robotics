"use client";

import Image from "next/image";
import Link from "next/link";
import {
  landingFeaturedProducts,
  landingProductsSection,
} from "@/data/landing-products";
import { useInView } from "@/hooks/useInView";

export default function LandingProductsSection() {
  const { ref, isVisible } = useInView<HTMLElement>();

  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none relative z-[5] -mt-12 h-12 bg-gradient-to-b from-transparent to-background sm:-mt-28 sm:h-28"
      />

      <section
        ref={ref}
        id="products"
        className={`relative z-[6] bg-background px-4 pb-16 pt-4 sm:px-6 sm:pb-20 lg:px-10 lg:pb-28 lg:pt-6 2xl:px-16 ${
          isVisible ? "reveal is-visible" : "reveal"
        }`}
      >
        <div className="landing-container">
          <div className="mb-12 flex justify-end border-b border-border pb-8">
            <Link
              href={landingProductsSection.viewAllHref}
              className="btn-explore shrink-0"
            >
              {landingProductsSection.viewAllLabel}
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {landingFeaturedProducts.map((product, index) => (
              <Link
                key={product.id}
                href={product.href}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface-elevated transition-all duration-500 hover:border-orange/35 hover:shadow-[0_24px_60px_rgba(255,132,0,0.08),0_8px_32px_rgba(0,0,0,0.15)]"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--media-well)]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-6 transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />

                  <div className="absolute left-5 top-5 flex items-center gap-2">
                    <span className="font-body text-[10px] font-bold tabular-nums text-subtle">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="rounded-full border border-orange/35 bg-background/90 px-3 py-1 font-body text-[10px] font-bold uppercase tracking-[0.14em] text-orange backdrop-blur-md">
                      {product.category}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6 lg:p-7">
                  <h3 className="font-heading text-xl font-semibold uppercase tracking-[0.03em] text-foreground transition-colors duration-300 group-hover:text-orange lg:text-[1.35rem]">
                    {product.name}
                  </h3>

                  <p className="mt-3 flex-1 font-body text-[13.5px] leading-relaxed text-muted lg:text-sm">
                    {product.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                    <span className="inline-flex items-center gap-2 font-body text-[11px] font-bold uppercase tracking-[0.14em] text-subtle transition-colors duration-300 group-hover:text-foreground">
                      View Product
                      <svg
                        className="h-4 w-4 text-orange transition-transform duration-300 group-hover:translate-x-1"
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
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-foreground/5 text-subtle transition-all duration-300 group-hover:border-orange/50 group-hover:bg-orange/10 group-hover:text-orange">
                      <svg
                        className="h-4 w-4"
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
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
