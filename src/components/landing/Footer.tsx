import Image from "next/image";
import Link from "next/link";
import { footerAddress, footerLinks } from "@/data/landing";

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
        {title}
      </h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="font-body text-sm text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background px-6 py-16 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div>
            <Image
              src="/svgs/final monogram.svg"
              alt="CHORE"
              width={48}
              height={48}
              className="h-10 w-auto opacity-90"
            />
            <p className="mt-6 font-body text-sm text-white/50">
              CHORE &copy; {new Date().getFullYear()}
            </p>
            <p className="mt-3 max-w-xs font-body text-sm leading-relaxed text-white/50">
              {footerAddress}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:gap-16">
            <FooterColumn title="Products" links={footerLinks.products} />
            <FooterColumn title="Company" links={footerLinks.company} />
            <FooterColumn title="Support" links={footerLinks.support} />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-4">
            {footerLinks.social.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-xs text-white/50 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-body text-xs text-white/50 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
