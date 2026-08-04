import { getProductMenuImage } from "./product-details";

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

export const productCategories: ProductCategory[] = [
  {
    id: "lawn-care",
    label: "Lawn Care",
    products: [
      {
        id: "p10",
        name: "CHORE MOWER",
        image: getProductMenuImage("p10"),
      },
      {
        id: "p6",
        name: "CHORE COLLECTOR",
        image: getProductMenuImage("p6"),
      },
      {
        id: "p9",
        name: "CHORE IRRIGATOR",
        image: getProductMenuImage("p9"),
      },
    ],
  },
  {
    id: "floor-care",
    label: "Floor Care",
    products: [
      {
        id: "p2",
        name: "CHORE MOPPER",
        image: getProductMenuImage("p2"),
      },
    ],
  },
  {
    id: "snow-removal",
    label: "Snow Removal",
    products: [
      {
        id: "p4",
        name: "CHORE PLOW",
        image: getProductMenuImage("p4"),
      },
      {
        id: "p5",
        name: "CHORE BLOWER",
        image: getProductMenuImage("p5"),
      },
    ],
  },
];
