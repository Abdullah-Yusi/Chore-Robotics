"use client";

import Image from "next/image";
import Link from "next/link";
import { allProducts } from "@/data/landing-products";
import { useInView } from "@/hooks/useInView";

export default function ProductShowcase() {
  const { ref, isVisible } = useInView<HTMLElement>();

  return (
    <section
      ref={ref}
      id="products"
      className={`bg-background px-6 py-16 lg:px-10 lg:py-24 ${
        isVisible ? "reveal is-visible" : "reveal"
      }`}
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 max-w-2xl">
          <p className="font-body text-[11px] font-bold uppercase tracking-[0.24em] text-[#ff8400]">
            Modular Attachments
          </p>
          <h1 className="mt-2 font-heading text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold uppercase tracking-[0.03em] text-white">
            CHORE Products
          </h1>
          <p className="mt-3 font-body text-[15px] leading-relaxed text-white/55 sm:text-base">
            One platform, every chore — explore our modular attachments.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {allProducts.map((product, index) => (
            <Link
              key={product.id}
              href={product.href}
              id={product.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[var(--surface-elevated)] transition-all duration-300 hover:border-[#ff8400]/35"
              style={{ transitionDelay: `${index * 40}ms` }}
            >
              <div className="relative aspect-[4/3] bg-gradient-to-br from-[#222] via-[#1a1a1a] to-[#121212]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-6 transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="border-t border-white/8 p-5">
                <p className="font-body text-[10px] font-bold uppercase tracking-[0.16em] text-[#ff8400]">
                  {product.category}
                </p>
                <h2 className="mt-2 font-heading text-lg font-semibold uppercase tracking-[0.03em] text-white transition-colors group-hover:text-[#ff8400]">
                  {product.name}
                </h2>
                <p className="mt-2 font-body text-[13px] leading-relaxed text-white/50">
                  {product.tagline}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
