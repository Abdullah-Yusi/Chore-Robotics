import {
  ACTIVE_PRODUCT_IDS,
  getProductMenuImage,
  MOWER_FEATURED_IMAGE,
  PRODUCT_SLUGS,
  productDetails,
  SNOW_BLOWER_FEATURED_IMAGE,
} from "./product-details";

export type LandingFeaturedProduct = {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  imageClassName?: string;
  href: string;
};

const featuredProductIds = ["p10", "p6", "p5"] as const;

const featuredDescriptions: Record<(typeof featuredProductIds)[number], string> = {
  p10: "Maintain a perfectly manicured lawn with complete reliability. This intelligent module seamlessly navigates your property to deliver a precise, even cut, adapting to complex outdoor terrain to keep your grass pristine without the manual effort.",
  p6: "Keep outdoor areas perfectly clear of debris. This intelligent module smoothly maps and sweeps large spaces, adapting to the environment to ensure your grounds remain pristine throughout the changing seasons.",
  p5: "Conquer winter weather before it disrupts your day. Powered by a high-capacity 108Ah architecture and efficient brushless DC motors, this direct-drive blower effortlessly clears heavy snow from walkways and lots.",
};

const featuredImages: Partial<Record<(typeof featuredProductIds)[number], string>> = {
  p10: MOWER_FEATURED_IMAGE,
  p5: SNOW_BLOWER_FEATURED_IMAGE,
};

export const landingFeaturedProducts: LandingFeaturedProduct[] = featuredProductIds.map(
  (id) => {
    const product = productDetails[id];
    return {
      id,
      name: product.name,
      category: product.category,
      tagline: product.tagline,
      description: featuredDescriptions[id],
      image: featuredImages[id] ?? getProductMenuImage(id),
      imageClassName:
        id === "p5"
          ? "object-contain p-1 sm:p-3 lg:p-5"
          : "object-contain p-5 sm:p-6",
      href: `/product/${PRODUCT_SLUGS[id]}`,
    };
  },
);

export const allProducts = ACTIVE_PRODUCT_IDS.map((id) => {
  const product = productDetails[id];
  return {
    id,
    name: product.name,
    category: product.category,
    tagline: product.tagline,
    image: product.images[0] ?? getProductMenuImage(id),
    href: `/product/${PRODUCT_SLUGS[id]}`,
  };
});

export const landingProductsSection = {
  viewAllHref: "/products",
  viewAllLabel: "View All Products",
};
