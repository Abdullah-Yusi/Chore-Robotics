import { notFound } from "next/navigation";
import {
  productDetails,
  resolveProductId,
} from "@/data/product-details";
import ProductDetail from "@/components/ProductDetail";
import Navbar from "@/components/Navbar";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;
  const productId = resolveProductId(id);
  const product = productId ? productDetails[productId] : undefined;

  if (!product) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="pt-[88px]">
        <ProductDetail product={product} />
      </main>
    </>
  );
}
