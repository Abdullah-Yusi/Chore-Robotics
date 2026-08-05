"use client";

import Image from "next/image";
import Link from "next/link";
import { storiesSection } from "@/data/landing";
import { useInView } from "@/hooks/useInView";

export default function StoriesSection() {
  const { ref, isVisible } = useInView<HTMLElement>();

  return (
    <section
      ref={ref}
      id="stories"
      className={`bg-surface-dark px-6 py-20 lg:px-10 lg:py-28 ${
        isVisible ? "reveal is-visible" : "reveal"
      }`}
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-10 flex items-end justify-between gap-4">
          <h2 className="font-heading text-[clamp(1.5rem,3vw,2.25rem)] font-semibold text-foreground">
            {storiesSection.title}
          </h2>
          <Link
            href={storiesSection.viewAllHref}
            className="shrink-0 font-body text-sm text-muted transition-colors hover:text-foreground"
          >
            View All
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {storiesSection.stories.map((story) => (
            <Link
              key={story.id}
              href="#"
              className="group overflow-hidden bg-surface-elevated"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <time className="font-body text-xs text-subtle">
                  {story.date}
                </time>
                <h3 className="mt-2 font-heading text-lg font-medium text-foreground transition-opacity group-hover:opacity-70">
                  {story.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
