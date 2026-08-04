"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PRODUCT_SLUGS } from "@/data/product-details";
import { productCategories } from "@/data/products-menu";
import { ArrowUpRightIcon, ChevronSmallRight } from "./icons";

type ProductsMegaMenuProps = {
  open: boolean;
  dark?: boolean;
};

export default function ProductsMegaMenu({
  open,
  dark = false,
}: ProductsMegaMenuProps) {
  const [activeCategoryId, setActiveCategoryId] = useState("base");
  const activeCategory =
    productCategories.find((c) => c.id === activeCategoryId) ??
    productCategories[0];

  const bg = dark ? "bg-[#141414]" : "bg-white";
  const border = dark ? "border-white/10" : "border-black/10";
  const text = dark ? "text-white" : "text-black";
  const textMuted = dark ? "text-white/60" : "text-black/60";
  const activeBg = dark ? "bg-white/10" : "bg-[#fff4c2]";
  const hoverBg = dark ? "hover:bg-white/5" : "hover:bg-[#fff9e6]";
  const cardBg = dark ? "bg-white/5" : "bg-[#f2f2f2]";

  return (
    <div
      className={`absolute left-0 right-0 top-full overflow-hidden border-t ${border} ${bg} transition-[max-height,opacity] duration-300 ease-out ${
        open
          ? "pointer-events-auto max-h-[520px] opacity-100"
          : "pointer-events-none max-h-0 opacity-0"
      }`}
      aria-hidden={!open}
    >
      <div
        className={`mx-auto max-w-[1440px] px-6 pb-10 pt-2 transition-transform duration-300 ease-out lg:px-10 ${
          open ? "translate-y-0" : "-translate-y-2"
        }`}
      >
        <div className="flex min-h-[380px]">
          <aside
            className={`w-[220px] shrink-0 border-r ${border} pr-2 pt-2 xl:w-[260px]`}
          >
            <ul className="flex flex-col">
              {productCategories.map((category) => {
                const isActive = category.id === activeCategoryId;
                return (
                  <li key={category.id}>
                    <button
                      type="button"
                      onMouseEnter={() => setActiveCategoryId(category.id)}
                      onFocus={() => setActiveCategoryId(category.id)}
                      className={`flex w-full items-center justify-between px-4 py-3.5 text-left font-body text-[14px] font-medium ${text} transition-colors duration-200 ${
                        isActive ? activeBg : hoverBg
                      }`}
                    >
                      <span>{category.label}</span>
                      <ChevronSmallRight />
                    </button>
                  </li>
                );
              })}
            </ul>

            <Link
              href="/products"
              className={`mt-6 inline-flex items-center gap-1.5 px-4 font-body text-[13px] font-medium ${text} underline-offset-4 transition-opacity hover:opacity-70 hover:underline`}
            >
              View All Products
              <ArrowUpRightIcon />
            </Link>
          </aside>

          <div className="min-w-0 flex-1 pl-8 pt-4 xl:pl-12">
            <div className="mb-6 flex items-baseline gap-3">
              <h3 className={`font-body text-[15px] font-semibold ${text}`}>
                {activeCategory.label}
              </h3>
              <Link
                href="/products"
                className={`inline-flex items-center gap-1 font-body text-[13px] font-medium ${textMuted} underline-offset-4 transition-opacity hover:opacity-70 hover:underline`}
              >
                View All
                <ArrowUpRightIcon />
              </Link>
            </div>

            <div
              key={activeCategoryId}
              className="mega-menu-content-enter grid grid-cols-2 gap-4 xl:grid-cols-4 xl:gap-5"
            >
              {activeCategory.products.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${PRODUCT_SLUGS[product.id] ?? product.id}`}
                  className={`group flex flex-col ${cardBg} transition-opacity hover:opacity-90`}
                >
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain object-center p-4 transition-transform duration-300 group-hover:scale-[1.03]"
                      sizes="(max-width: 1280px) 25vw, 280px"
                    />
                  </div>
                  <p
                    className={`px-3 pb-4 pt-2 text-center font-body text-[10px] font-bold uppercase leading-snug tracking-[0.04em] ${text} sm:text-[11px]`}
                  >
                    {product.name}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
