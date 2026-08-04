import { getProductMenuImage, PRODUCT_SLUGS, productDetails } from "./product-details";

export type SeriesProduct = {
  id: string;
  name: string;
  image: string;
  price: number;
  monthlyPayment: number;
  rating: number;
  reviewsCount: number;
  bestSeller?: boolean;
  href: string;
};

export const coreSeriesProducts: SeriesProduct[] = (
  ["p10", "p2", "p4", "p5", "p6", "p9"] as const
).map((id) => {
  const product = productDetails[id];
  return {
    id,
    name: product.name,
    image: product.images[0] ?? getProductMenuImage(id),
    price: product.price,
    monthlyPayment: product.monthlyPayment,
    rating: product.rating,
    reviewsCount: product.reviewsCount,
    href: `/product/${PRODUCT_SLUGS[id]}`,
  };
});
