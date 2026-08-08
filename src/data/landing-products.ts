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
  p10: "Flawless lawn care without the manual labor This intelligent mower smoothly navigates your property, delivering a pristine, even cut while instantly adapting to your unique outdoor terrain",
  p6: "Keep your grounds perfectly clear all year This high-capacity sweeper maps your property to autonomously collect heavy leaves and debris, leaving nothing but an immaculate landscape behind",
  p5: "Conquer winter weather before it slows you down This powerful attachment effortlessly clears heavy snow from your walkways, safely navigating freezing temperatures and unpredictable frozen ground",
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

const productPageAsset = (filename: string) =>
  `/product-page-images/${encodeURIComponent(filename)}`;

const productPageImages: Record<(typeof ACTIVE_PRODUCT_IDS)[number], string> = {
  p10: productPageAsset("Chore Mower.jpg.jpeg"),
  p2: productPageAsset("Chore Collector.jpg.jpeg"),
  p4: productPageAsset("Chore Plow.jpg.jpeg"),
  p5: productPageAsset("Chore Blower.jpg.jpeg"),
  p6: productPageAsset("Chore Collector.jpg.jpeg"),
  p9: productPageAsset("Chore Irrigation 02.jpg.jpeg"),
};

export const allProducts = ACTIVE_PRODUCT_IDS.map((id) => {
  const product = productDetails[id];
  return {
    id,
    name: product.name,
    category: product.category,
    tagline: product.tagline,
    image: productPageImages[id],
    href: `/product/${PRODUCT_SLUGS[id]}`,
  };
});

export const landingProductsSection = {
  viewAllHref: "/products",
  viewAllLabel: "View All Products",
};
