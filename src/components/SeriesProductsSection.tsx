import Image from "next/image";
import Link from "next/link";
import { coreSeriesProducts } from "@/data/series-products";

function StarRating({ rating, reviewsCount }: { rating: number; reviewsCount: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, index) => (
          <svg
            key={index}
            width="14"
            height="14"
            viewBox="0 0 20 20"
            fill={index < Math.round(rating) ? "#f5c518" : "#e5e5e5"}
            aria-hidden
          >
            <path d="M10 1.5l2.47 5.01 5.53.8-4 3.994 5.5L10 14.77l-4.94 2.94.94-5.5-4-3.9 5.53-8L10 1.5z" />
          </svg>
        ))}
      </div>
      <span className="font-body text-xs text-black/55">
        {reviewsCount} Reviews
      </span>
    </div>
  );
}

function formatPrice(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(value);
}

function ProductCard({
  product,
}: {
  product: (typeof coreSeriesProducts)[number];
}) {
  return (
    <article className="flex flex-col">
      <div className="relative aspect-[4/3] w-full bg-[#f2f2f2]">
        {product.bestSeller && (
          <span className="absolute left-4 top-4 z-10 bg-[#ffdd21] px-3 py-1 font-body text-[10px] font-bold uppercase tracking-[0.04em] text-black">
            Best Seller
          </span>
        )}
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain object-center p-6"
          sizes="(max-width: 768px) 50vw, (max-width: 1280px) 25vw, 320px"
        />
      </div>

      <div className="mt-5 flex flex-1 flex-col">
        <h3 className="font-body text-[clamp(1.125rem,2vw,1.5rem)] font-bold leading-tight text-black">
          {product.name}
        </h3>

        <div className="mt-3">
          <StarRating rating={product.rating} reviewsCount={product.reviewsCount} />
        </div>

        <p className="mt-4 font-body text-lg font-bold text-black">
          {formatPrice(product.price)}
        </p>

        <p className="mt-2 font-body text-xs leading-relaxed text-black/55">
          {formatPrice(product.monthlyPayment)}/mo for 12 months at 0% APR with Chore Pay
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <Link
            href={`/product/${product.id}`}
            className="inline-flex h-11 items-center justify-center border border-black bg-white px-3 font-body text-[11px] font-semibold text-black transition-colors hover:bg-black/5 sm:text-xs"
          >
            Learn More
          </Link>
          <Link
            href={`/product/${product.id}`}
            className="inline-flex h-11 items-center justify-center bg-black px-3 font-body text-[11px] font-semibold text-white transition-opacity hover:opacity-85 sm:text-xs"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function SeriesProductsSection() {
  return (
    <div id="products" className="mt-10 lg:mt-12">
      <div className="flex items-center gap-6">
        <h3 className="shrink-0 font-body text-sm font-bold uppercase tracking-[0.12em] text-black">
          Core Series
        </h3>
        <div className="h-px flex-1 bg-black/15" />
      </div>

      <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {coreSeriesProducts.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
}
