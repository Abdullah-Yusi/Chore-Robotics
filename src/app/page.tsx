import Footer from "@/components/landing/Footer";
import LandingProductsSection from "@/components/landing/LandingProductsSection";
import LandingTechnologyPreviewSection from "@/components/landing/LandingTechnologyPreviewSection";
import NewsletterSection from "@/components/landing/NewsletterSection";
import ReserveSection from "@/components/landing/ReserveSection";
import ProductTabShowcaseSection from "@/components/landing/ProductTabShowcaseSection";
import VideoHero from "@/components/landing/VideoHero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-background pt-[72px]">
        <VideoHero />
        <LandingProductsSection />
        <LandingTechnologyPreviewSection />
        <ReserveSection />
        <ProductTabShowcaseSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
