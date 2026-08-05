import Footer from "@/components/landing/Footer";
import ProductShowcase from "@/components/landing/ProductShowcase";
import Navbar from "@/components/Navbar";

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background pt-[88px]">
        <ProductShowcase />
      </main>
      <Footer />
    </>
  );
}
