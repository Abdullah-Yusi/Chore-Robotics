"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { navLinks } from "@/data/landing";
import ProductsMegaMenu from "./ProductsMegaMenu";

function resolveNavHref(href: string, isLanding: boolean) {
  if (href.startsWith("/")) return href;
  if (href.startsWith("#")) return isLanding ? href : `/${href}`;
  return isLanding ? href : `/${href}`;
}

export default function Navbar() {
  const pathname = usePathname();
  const isLanding = pathname === "/";
  const isProductPage = pathname.startsWith("/product");
  const useDarkNav = !isProductPage;
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  const openProducts = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setProductsOpen(true);
  }, []);

  const scheduleCloseProducts = useCallback(() => {
    closeTimer.current = setTimeout(() => {
      setProductsOpen(false);
    }, 120);
  }, []);

  const isSolid = isProductPage || scrolled || productsOpen;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ease-out ${
        isSolid
          ? useDarkNav
            ? "nav-glass-dark"
            : "nav-glass-light"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="relative" onMouseLeave={scheduleCloseProducts}>
        <nav className="mx-auto flex h-[88px] max-w-[1440px] items-center justify-between px-6 lg:px-10">
          <Link href="/" className="relative flex shrink-0 items-center">
            <Image
              src={
                useDarkNav
                  ? "/svgs/final monogram.svg"
                  : "/svgs/final monogram black.svg"
              }
              alt="CHORE"
              width={120}
              height={120}
              className="h-[72px] w-auto object-contain sm:h-[80px]"
              priority
            />
          </Link>

          <ul className="hidden flex-1 items-center justify-center gap-10 lg:flex">
            <li
              className="relative flex h-[88px] items-center"
              onMouseEnter={openProducts}
            >
              <button
                type="button"
                className={`relative font-body text-[16px] font-medium tracking-[0.06em] transition-opacity hover:opacity-70 cursor-pointer ${
                  useDarkNav ? "text-white" : "text-black"
                }`}
                aria-expanded={productsOpen}
                aria-haspopup="true"
              >
                Products
              </button>
              <span
                className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ease-out ${
                  useDarkNav ? "bg-white" : "bg-black"
                } ${productsOpen ? "w-full opacity-100" : "w-0 opacity-0"}`}
              />
            </li>

            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={resolveNavHref(link.href, isLanding)}
                  className={`font-body text-[16px] font-medium tracking-[0.06em] transition-opacity hover:opacity-70 ${
                    useDarkNav ? "text-white" : "text-black"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <Link
              href="/reservation"
              className={`hidden sm:inline-flex items-center justify-center h-10 px-6 rounded-full font-body text-[14px] font-semibold tracking-[0.06em] uppercase transition-opacity hover:opacity-85 ${
                useDarkNav
                  ? "bg-white text-black"
                  : "bg-black text-white"
              }`}
            >
              Order
            </Link>

            <button
              type="button"
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
              aria-label="Open menu"
              onClick={() => setProductsOpen((v) => !v)}
            >
              <span
                className={`block h-px w-5 ${useDarkNav ? "bg-white" : "bg-black"}`}
              />
              <span
                className={`block h-px w-5 ${useDarkNav ? "bg-white" : "bg-black"}`}
              />
            </button>
          </div>
        </nav>

        <div className="hidden lg:block" onMouseEnter={openProducts}>
          <ProductsMegaMenu open={productsOpen} dark={useDarkNav} />
        </div>

        {productsOpen && (
          <div
            className={`border-t lg:hidden ${
              useDarkNav
                ? "nav-glass-dark-panel border-white/10"
                : "nav-glass-light-panel border-black/10"
            }`}
          >
            <ul className="px-6 py-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={resolveNavHref(link.href, isLanding)}
                    className={`block py-3 font-body text-base ${
                      useDarkNav ? "text-white/80" : "text-black/80"
                    }`}
                    onClick={() => setProductsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/reservation"
                  className={`block py-3 font-body text-base font-medium ${
                    useDarkNav ? "text-white" : "text-black"
                  }`}
                  onClick={() => setProductsOpen(false)}
                >
                  Order
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
