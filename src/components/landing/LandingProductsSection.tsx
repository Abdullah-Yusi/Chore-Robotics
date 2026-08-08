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
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface-elevated transition-all duration-500 hover:border-border hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--media-well)]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className={`transition-transform duration-700 ease-out group-hover:scale-[1.06] ${
                      product.imageClassName ?? "object-contain p-5 sm:p-6"
                    }`}
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />

                  <div className="absolute left-5 top-5 flex items-center gap-2">
                    <span className="font-body text-[10px] font-bold tabular-nums text-subtle">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="rounded-full border border-border bg-background/90 px-3 py-1 font-body text-[10px] font-bold uppercase tracking-[0.14em] text-orange backdrop-blur-md">
                      {product.category}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6 lg:p-7">
                  <h3 className="font-heading text-lg font-semibold tracking-[0.01em] text-foreground transition-colors duration-300 group-hover:text-orange lg:text-xl">
                    {product.name}
                  </h3>

                  <p className="mt-3 flex-1 font-body text-[13.5px] leading-relaxed text-muted lg:text-sm">
                    {product.description}
                  </p>

                  <div className="mt-6 border-t border-border pt-5">
                    <span className="font-body text-[11px] font-bold uppercase tracking-[0.14em] text-subtle transition-colors duration-300 group-hover:text-foreground">
                      View Product
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
