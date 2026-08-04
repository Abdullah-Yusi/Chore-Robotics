"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PRODUCT_SLUGS, ProductDetailData } from "@/data/product-details";

interface ProductDetailProps {
  product: ProductDetailData;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"desc" | "specs" | "whats-included">("desc");

  const activeImage = product.images[activeImageIdx] || "/images/hero.jpg";
  const reservationHref = `/reservation?product=${PRODUCT_SLUGS[product.id] ?? product.id}`;

  const handlePrevImage = () => {
    setActiveImageIdx((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setActiveImageIdx((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-white min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1440px]">
        {/* Breadcrumb Navigation */}
        <nav className="mb-6 flex items-center gap-2 text-xs text-black/50 font-medium tracking-wide">
          <Link href="/" className="hover:text-black hover:underline transition-all">Home</Link>
          <span>/</span>
          <span className="capitalize">{product.category}</span>
          <span>/</span>
          <span className="text-black font-semibold">{product.name}</span>
        </nav>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16">
          
          {/* LEFT COLUMN: Media Gallery */}
          <div className="lg:col-span-7 flex flex-col lg:flex-row gap-4">
            {/* Vertical Thumbnails List (Desktop) */}
            <div className="hidden lg:flex flex-col gap-3 shrink-0 w-[92px]">
              {product.images.map((img, idx) => (
                <button
                  key={img}
                  onClick={() => setActiveImageIdx(idx)}
                  className={`relative aspect-square w-full overflow-hidden rounded-xl border-2 bg-gradient-to-br from-[#f7f7f7] to-[#eeeeee] transition-all duration-300 cursor-pointer ${
                    activeImageIdx === idx
                      ? "border-[#ff8400] shadow-[0_0_0_3px_rgba(255,132,0,0.18)] scale-[1.02]"
                      : "border-black/5 hover:border-black/15"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} view ${idx + 1}`}
                    fill
                    sizes="92px"
                    className="object-contain p-2"
                  />
                </button>
              ))}
            </div>

            {/* Main Image Viewport */}
            <div className="relative flex flex-1 aspect-square items-center justify-center overflow-hidden rounded-2xl border border-black/5 bg-gradient-to-br from-[#fafafa] via-[#f3f3f3] to-[#eaeaea] shadow-[0_12px_40px_rgba(0,0,0,0.06)] group">
              {/* Expand/Zoom Button */}
              <button
                onClick={() => setIsZoomOpen(true)}
                className="absolute top-4 right-4 z-10 cursor-pointer rounded-full border border-black/5 bg-white/85 p-2.5 text-black shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white active:scale-95"
                aria-label="Zoom Image"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Main Image */}
              <div className="relative h-full w-full p-6 transition-transform duration-500 group-hover:scale-[1.02] sm:p-10 md:p-14">
                <Image
                  src={activeImage}
                  alt={product.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 700px"
                  className="object-contain drop-shadow-[0_18px_35px_rgba(0,0,0,0.12)]"
                />
              </div>

              {/* Prev/Next arrows overlay */}
              <button
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 -translate-x-2 cursor-pointer items-center justify-center rounded-full border border-black/5 bg-white/80 text-black shadow-md backdrop-blur-md opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 hover:bg-white hover:border-black/10"
                aria-label="Previous Image"
              >
                <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 1L2 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 translate-x-2 cursor-pointer items-center justify-center rounded-full border border-black/5 bg-white/80 text-black shadow-md backdrop-blur-md opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 hover:bg-white hover:border-black/10"
                aria-label="Next Image"
              >
                <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 1L8 8L2 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-full bg-black/55 px-3 py-1 text-[11px] font-semibold tracking-wide text-white backdrop-blur-sm">
                {activeImageIdx + 1} / {product.images.length}
              </div>
            </div>

            {/* Horizontal Thumbnails List (Mobile) */}
            <div className="flex shrink-0 flex-row gap-2.5 overflow-x-auto py-2 pr-4 lg:hidden">
              {product.images.map((img, idx) => (
                <button
                  key={img}
                  onClick={() => setActiveImageIdx(idx)}
                  className={`relative aspect-square w-[72px] shrink-0 overflow-hidden rounded-xl border-2 bg-gradient-to-br from-[#f7f7f7] to-[#eeeeee] transition-all duration-300 cursor-pointer ${
                    activeImageIdx === idx
                      ? "border-[#ff8400] shadow-[0_0_0_3px_rgba(255,132,0,0.18)] scale-[1.03]"
                      : "border-black/5"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} view ${idx + 1}`}
                    fill
                    sizes="72px"
                    className="object-contain p-1.5"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Settings and Information */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            {/* Tag / Category */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs text-black/40 font-semibold tracking-wide uppercase">{product.category}</span>
            </div>

            {/* Product Title */}
            <h1 className="font-body text-3xl sm:text-4xl font-extrabold uppercase leading-none tracking-wide text-black mb-2.5">
              {product.name}
            </h1>

            {/* Key Bullet Features */}
            <ul className="my-6 space-y-3 border-t border-b border-black/5 py-5">
              {product.features.map((f, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-[#ff8400] shrink-0 mt-0.5">
                    <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <p className="text-[13.5px] leading-relaxed text-black/75">
                    <span className="font-bold text-black">{f.title}:</span> {f.description}
                  </p>
                </li>
              ))}
            </ul>

            {/* CTA MAKE RESERVATION */}
            <div className="mt-4">
              <Link
                href={reservationHref}
                className="w-full bg-[#ff8400] hover:bg-[#e67500] text-white py-4 px-6 rounded-xl font-body text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer hover:scale-[1.01] active:scale-95 text-center flex items-center justify-center gap-2 group"
              >
                <span>Make a Reservation</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

          </div>
        </div>

        {/* Tabbed Section (Bottom Section) */}
        <div className="mt-16 border-t border-black/5 pt-10">
          <div className="flex border-b border-black/5 gap-8 overflow-x-auto pb-px">
            {(["desc", "specs", "whats-included"] as const).map((tab) => {
              const isActive = activeTab === tab;
              const label = tab === "desc" ? "Description" : tab === "specs" ? "Specifications" : "What's Included";
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 text-[13px] font-bold uppercase tracking-wider transition-all border-b-2 cursor-pointer whitespace-nowrap ${
                    isActive 
                      ? "border-black text-black" 
                      : "border-transparent text-black/45 hover:text-black/75"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          <div className="py-6 min-h-[160px]">
            {activeTab === "desc" && (
              <div className="max-w-3xl">
                <p className="text-sm leading-relaxed text-black/70 font-medium mb-4">{product.description}</p>
                <p className="text-sm leading-relaxed text-black/70 font-medium">
                  Designed, assembled, and optimized in America, the modular toolkit is built with precision, durability, and standard weatherproofing to withstand harsh elements year-round.
                </p>
              </div>
            )}

            {activeTab === "specs" && (
              <div className="max-w-2xl overflow-hidden rounded-xl border border-black/5 bg-[#fafafa]">
                <table className="min-w-full divide-y divide-black/5">
                  <tbody className="divide-y divide-black/5">
                    {Object.entries(product.specs).map(([key, val]) => (
                      <tr key={key}>
                        <td className="px-5 py-4 text-xs font-bold text-black uppercase tracking-wider bg-black/[0.01] w-1/3">{key}</td>
                        <td className="px-5 py-4 text-[13.5px] font-medium text-black/75">{val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === "whats-included" && (
              <ul className="max-w-lg space-y-3">
                {product.whatsIncluded.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-medium text-black/75">
                    <span className="w-1.5 h-1.5 rounded-full bg-black/60 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

      </div>

      {/* FULL SCREEN ZOOM MODAL */}
      {isZoomOpen && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4">
          <button
            onClick={() => setIsZoomOpen(false)}
            className="absolute top-6 right-6 text-white hover:opacity-60 transition-opacity p-2 border border-white/10 rounded-full cursor-pointer bg-white/5"
            aria-label="Close Zoom"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          
          <button
            onClick={handlePrevImage}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 border border-white/10 text-white h-12 w-12 flex items-center justify-center rounded-full shadow-lg transition-all cursor-pointer"
            aria-label="Previous Image"
          >
            <svg width="12" height="20" viewBox="0 0 10 16" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M8 1L2 8L8 15" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="relative w-full max-w-5xl aspect-square max-h-[85vh]">
            <Image
              src={activeImage}
              alt={product.name}
              fill
              className="object-contain"
            />
          </div>

          <button
            onClick={handleNextImage}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 border border-white/10 text-white h-12 w-12 flex items-center justify-center rounded-full shadow-lg transition-all cursor-pointer"
            aria-label="Next Image"
          >
            <svg width="12" height="20" viewBox="0 0 10 16" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M2 1L8 8L2 15" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-xs font-semibold">
            {activeImageIdx + 1} / {product.images.length}
          </div>
        </div>
      )}

    </div>
  );
}
