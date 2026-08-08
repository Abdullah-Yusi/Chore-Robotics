import Image from "next/image";
import SeriesProductsSection from "@/components/SeriesProductsSection";

const categories = [
  {
    label: "ALL PRODUCTS",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80",
  },
  {
    label: "ROBOTS",
    image:
      "https://images.unsplash.com/photo-1535378620163-79bacd4edf24?w=400&q=80",
  },
  {
    label: "BUNDLES",
    image:
      "https://images.unsplash.com/photo-1607083206869-4c9d5a59aaec?w=400&q=80",
  },
  {
    label: "MODULES",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80",
  },
  {
    label: "ACCESSORIES",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&q=80",
  },
];

const seriesCards = [
  {
    eyebrow: "Multi-Seasonal",
    title: "ChoreCore Series",
    description: "The heavy-duty modular yard robot for larger properties",
    cta: "Shop Now",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=85",
  },
  {
    eyebrow: "Available for Reservation",
    title: "ChoreBot Series",
    description: "The essential modular yard robot for every home",
    cta: "Pre-Order Now",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=85",
  },
];

function CategoryImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[200px]">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain object-center p-2"
        sizes="(max-width: 768px) 40vw, 200px"
      />
    </div>
  );
}

function SeriesCard({
  card,
}: {
  card: (typeof seriesCards)[number];
}) {
  return (
    <article className="group relative min-h-[340px] overflow-hidden rounded-[3px] bg-black sm:min-h-[380px] lg:min-h-[430px]">
      <Image
        src={card.image}
        alt=""
        fill
        className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
        sizes="(max-width: 1024px) 100vw, 640px"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#008bd2]/80 via-[#008bd2]/35 to-black/25" />
      <div className="relative z-10 flex h-full min-h-[340px] flex-col items-start p-6 text-white sm:min-h-[380px] sm:p-8 lg:min-h-[430px]">
        <span className="inline-flex bg-[#ffdd21] px-3 py-1 font-body text-[10px] font-bold text-black">
          {card.eyebrow}
        </span>
        <h3 className="mt-5 font-body text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-none tracking-[0.01em]">
          {card.title}
        </h3>
        <p className="mt-3 max-w-[420px] font-body text-sm font-semibold leading-relaxed text-white sm:text-base">
          {card.description}
        </p>
        <a
          href="/products"
          className="mt-auto inline-flex h-12 items-center justify-center bg-[#ffdd21] px-7 font-body text-xs font-semibold text-black transition-colors hover:bg-white"
        >
          {card.cta}
        </a>
      </div>
    </article>
  );
}

export default function ExploreSection() {
  return (
    <section id="explore" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <h2 className="text-center font-body text-[clamp(1.125rem,2.2vw,1.625rem)] font-bold uppercase tracking-[0.06em] text-black">
          Explore the Chore System
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-10 lg:mt-16 lg:grid-cols-5 lg:gap-6">
          {categories.map((cat) => (
            <a
              key={cat.label}
              href="#"
              className="group flex flex-col items-center text-center transition-opacity hover:opacity-75"
            >
              <CategoryImage src={cat.image} alt={cat.label} />
              <span className="mt-4 font-body text-[11px] font-bold tracking-[0.1em] text-black sm:text-xs">
                {cat.label}
              </span>
            </a>
          ))}
        </div>

        <div className="mt-14 grid gap-5 lg:mt-16 lg:grid-cols-2">
          {seriesCards.map((card) => (
            <SeriesCard key={card.title} card={card} />
          ))}
        </div>

        <h2 className="mt-14 font-body text-[clamp(1.75rem,4vw,3.5rem)] font-bold uppercase leading-none tracking-[-0.03em] text-black lg:mt-16">
          Spring Into Effortless Yard Care
        </h2>

        <SeriesProductsSection />
      </div>
    </section>
  );
}
