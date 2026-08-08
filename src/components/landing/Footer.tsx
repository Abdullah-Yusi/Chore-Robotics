"use client";

import Link from "next/link";
import { aboutPage } from "@/data/about";
import { footerLinks } from "@/data/landing";
import SocialLinks from "@/components/SocialLinks";

type FooterProps = {
  showAddress?: boolean;
};

function FooterColumn({
  title,
  links,
  orangeHover = false,
}: {
  title: string;
  links: { label: string; href: string }[];
  orangeHover?: boolean;
}) {
  return (
    <div>
      <h3 className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-subtle">
        {title}
      </h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className={`font-body text-sm text-muted transition-colors ${
                orangeHover ? "hover:text-orange" : "hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer({ showAddress = false }: FooterProps) {
  const copyrightYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20 2xl:px-16">
      <div className="landing-container">
        <div className="grid grid-cols-2 gap-6 sm:gap-10 lg:grid-cols-2 lg:gap-16">
          <FooterColumn title="Products" links={footerLinks.products} orangeHover />
          <FooterColumn title="Company" links={footerLinks.company} />
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <SocialLinks />

            <div className="flex flex-col items-start gap-3 lg:items-end lg:text-right">
              {showAddress ? (
                <p className="max-w-xs font-body text-sm leading-relaxed text-subtle">
                  {aboutPage.intro.address}
                </p>
              ) : null}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                <span className="font-body text-sm text-muted">
                  Chore Robotics, Inc. (C) {copyrightYear}
                </span>
                {footerLinks.legal.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="font-body text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
