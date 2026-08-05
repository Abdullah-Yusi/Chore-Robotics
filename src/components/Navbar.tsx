"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useRef, useState } from "react";
import { PRODUCT_SLUGS } from "@/data/product-details";
import { navLinks } from "@/data/landing";
import { productCategories } from "@/data/products-menu";
import ProductsMegaMenu from "./ProductsMegaMenu";
import ThemeToggle from "./ThemeToggle";

function resolveNavHref(href: string, isLanding: boolean) {
  if (href.startsWith("/")) return href;
  if (href.startsWith("#")) return isLanding ? href : `/${href}`;
  return isLanding ? href : `/${href}`;
}

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const isLanding = pathname === "/";
  const isProductPage = pathname.startsWith("/product");
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileProductsOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

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

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
    setMobileProductsOpen(false);
  }, []);

  const goHome = useCallback(() => {
    closeMobileMenu();
    setProductsOpen(false);
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    router.push("/");
  }, [closeMobileMenu, pathname, router]);

  const isSolid = isProductPage || scrolled || productsOpen || mobileMenuOpen;
  const isLightTheme = mounted && resolvedTheme === "light";
  const useDarkNav = !isLightTheme;
  const pageContainer = isLanding
    ? "landing-container"
    : "mx-auto max-w-[1440px]";
  const navText = useDarkNav ? "text-white" : "text-foreground";
  const navTextMuted = useDarkNav ? "text-white/75" : "text-muted";
  const navBorder = useDarkNav ? "border-white/10" : "border-border-strong";
  const mobilePanelClass = useDarkNav
    ? "nav-glass-dark-panel"
    : "nav-glass-light-panel";
  const headerSurface = isLightTheme
    ? "nav-glass-light"
    : isSolid
      ? "nav-glass-dark"
      : "border-b border-transparent bg-transparent";

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ease-out ${headerSurface}`}
    >
      <div className="relative" onMouseLeave={scheduleCloseProducts}>
        <nav
          className={`${pageContainer} flex h-[88px] items-center justify-between px-4 sm:px-6 lg:px-10 2xl:px-16`}
        >
          <Link
            href="/"
            aria-label="Go to CHORE homepage"
            onClick={(event) => {
              event.preventDefault();
              goHome();
            }}
            className="relative z-[60] flex shrink-0 items-center pointer-events-auto"
          >
            <Image
              src={
                useDarkNav
                  ? "/svgs/final monogram.svg"
                  : "/svgs/final monogram black.svg"
              }
              alt="CHORE"
              width={120}
              height={120}
              className="h-14 w-auto object-contain sm:h-[72px] lg:h-[80px]"
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
                className={`relative cursor-pointer font-body text-[16px] font-medium tracking-[0.06em] transition-opacity hover:opacity-70 ${navText}`}
                aria-expanded={productsOpen}
                aria-haspopup="true"
              >
                Products
              </button>
              <span
                className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ease-out ${
                  useDarkNav ? "bg-white" : "bg-foreground"
                } ${productsOpen ? "w-full opacity-100" : "w-0 opacity-0"}`}
              />
            </li>

            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={resolveNavHref(link.href, isLanding)}
                  className={`font-body text-[16px] font-medium tracking-[0.06em] transition-opacity hover:opacity-70 ${navText}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="relative z-[60] flex items-center gap-3 sm:gap-4">
            <ThemeToggle darkChrome={useDarkNav} />

            <Link
              href="/reservation"
              className={`hidden h-10 items-center justify-center rounded-full px-6 font-body text-[14px] font-semibold uppercase tracking-[0.06em] transition-opacity hover:opacity-85 sm:inline-flex ${
                useDarkNav
                  ? "bg-white text-black"
                  : "bg-foreground text-background"
              }`}
            >
              Order
            </Link>

            <button
              type="button"
              className="relative flex h-10 w-10 flex-col items-center justify-center lg:hidden"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-menu"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => {
                setMobileMenuOpen((open) => !open);
                setMobileProductsOpen(false);
              }}
            >
              <span
                className={`absolute block h-px w-5 transition-all duration-300 ${
                  useDarkNav ? "bg-white" : "bg-foreground"
                } ${mobileMenuOpen ? "translate-y-0 rotate-45" : "-translate-y-[5px]"}`}
              />
              <span
                className={`absolute block h-px w-5 transition-all duration-300 ${
                  useDarkNav ? "bg-white" : "bg-foreground"
                } ${mobileMenuOpen ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`absolute block h-px w-5 transition-all duration-300 ${
                  useDarkNav ? "bg-white" : "bg-foreground"
                } ${mobileMenuOpen ? "translate-y-0 -rotate-45" : "translate-y-[5px]"}`}
              />
            </button>
          </div>
        </nav>

        <div className="hidden lg:block" onMouseEnter={openProducts}>
          <ProductsMegaMenu
            open={productsOpen}
            dark={useDarkNav}
            wideContainer={isLanding}
          />
        </div>

        {mobileMenuOpen ? (
          <>
            <button
              type="button"
              className="fixed inset-0 top-[88px] z-40 bg-black/50 lg:hidden"
              aria-label="Close menu"
              onClick={closeMobileMenu}
            />

            <div
              id="mobile-nav-menu"
              className={`fixed inset-x-0 top-[88px] z-50 max-h-[calc(100dvh-88px)] overflow-y-auto border-t pb-[max(2rem,env(safe-area-inset-bottom))] lg:hidden ${mobilePanelClass} ${navBorder}`}
            >
              <div className="px-6 py-4 pb-8">
                <ul className="divide-y divide-border">
                  <li>
                    <button
                      type="button"
                      className={`flex w-full items-center justify-between py-4 font-body text-base font-medium ${navText}`}
                      aria-expanded={mobileProductsOpen}
                      onClick={() => setMobileProductsOpen((open) => !open)}
                    >
                      Products
                      <svg
                        className={`h-4 w-4 shrink-0 transition-transform duration-300 ${
                          mobileProductsOpen ? "rotate-180" : ""
                        }`}
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden
                      >
                        <path
                          d="M4 6l4 4 4-4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>

                    {mobileProductsOpen ? (
                      <div className="pb-4 pl-1">
                        {productCategories.map((category) => (
                          <div key={category.id} className="mb-4 last:mb-2">
                            <p
                              className={`mb-2 font-body text-[11px] font-bold uppercase tracking-[0.16em] ${navTextMuted}`}
                            >
                              {category.label}
                            </p>
                            <ul className="space-y-1">
                              {category.products.map((product) => (
                                <li key={product.id}>
                                  <Link
                                    href={`/product/${PRODUCT_SLUGS[product.id] ?? product.id}`}
                                    className={`block rounded-lg py-2.5 pl-3 font-body text-sm ${navTextMuted} transition-colors hover:bg-[color-mix(in_srgb,var(--foreground)_6%,transparent)] hover:text-foreground`}
                                    onClick={closeMobileMenu}
                                  >
                                    {product.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                        <Link
                          href="/products"
                          className={`mt-2 inline-flex items-center gap-1.5 py-2 font-body text-sm font-medium text-orange`}
                          onClick={closeMobileMenu}
                        >
                          View All Products
                          <svg
                            className="h-3.5 w-3.5"
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
                        </Link>
                      </div>
                    ) : null}
                  </li>

                  {navLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={resolveNavHref(link.href, isLanding)}
                        className={`block py-4 font-body text-base font-medium ${navText}`}
                        onClick={closeMobileMenu}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/reservation"
                  className={`mt-6 flex h-12 w-full items-center justify-center rounded-full font-body text-sm font-semibold uppercase tracking-[0.06em] ${
                    useDarkNav
                      ? "bg-white text-black"
                      : "bg-foreground text-background"
                  }`}
                  onClick={closeMobileMenu}
                >
                  Order
                </Link>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </header>
  );
}
