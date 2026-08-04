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
        className={`relative z-[6] bg-background px-6 pb-20 pt-4 lg:px-10 lg:pb-28 lg:pt-6 ${
          isVisible ? "reveal is-visible" : "reveal"
        }`}
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12 flex justify-end border-b border-white/10 pb-8">
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
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[var(--surface-elevated)] transition-all duration-500 hover:border-[#ff8400]/35 hover:shadow-[0_24px_60px_rgba(255,132,0,0.08),0_8px_32px_rgba(0,0,0,0.4)]"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-white">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-6 transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />

                  <div className="absolute left-5 top-5 flex items-center gap-2">
                    <span className="font-body text-[10px] font-bold tabular-nums text-white/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="rounded-full border border-[#ff8400]/35 bg-[#161616]/90 px-3 py-1 font-body text-[10px] font-bold uppercase tracking-[0.14em] text-[#ff8400] backdrop-blur-md">
                      {product.category}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6 lg:p-7">
                  <h3 className="font-heading text-xl font-semibold uppercase tracking-[0.03em] text-white transition-colors duration-300 group-hover:text-[#ff8400] lg:text-[1.35rem]">
                    {product.name}
                  </h3>

                  <p className="mt-3 flex-1 font-body text-[13.5px] leading-relaxed text-white/55 lg:text-sm">
                    {product.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-white/8 pt-5">
                    <span className="inline-flex items-center gap-2 font-body text-[11px] font-bold uppercase tracking-[0.14em] text-white/45 transition-colors duration-300 group-hover:text-white">
                      View Product
                      <svg
                        className="h-4 w-4 text-[#ff8400] transition-transform duration-300 group-hover:translate-x-1"
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
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 transition-all duration-300 group-hover:border-[#ff8400]/50 group-hover:bg-[#ff8400]/10 group-hover:text-[#ff8400]">
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
