import { getProductMenuImage, productDetails } from "./product-details";

export type ProductItem = {
  id: string;
  name: string;
  image: string;
};

export type ProductCategory = {
  id: string;
  label: string;
  products: ProductItem[];
};

function menuProduct(id: string): ProductItem {
  return {
    id,
    name: productDetails[id].name,
    image: getProductMenuImage(id),
  };
}

export const productCategories: ProductCategory[] = [
  {
    id: "lawn-care",
    label: "Lawn Care",
    products: [menuProduct("p10"), menuProduct("p6"), menuProduct("p9")],
  },
  {
    id: "floor-care",
    label: "Floor Care",
    products: [menuProduct("p2")],
  },
  {
    id: "snow-removal",
    label: "Snow Removal",
    products: [menuProduct("p4"), menuProduct("p5")],
  },
];
