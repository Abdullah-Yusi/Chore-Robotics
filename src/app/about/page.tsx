import type { Metadata } from "next";
import AboutContent from "@/components/about/AboutContent";
import AboutHero from "@/components/about/AboutHero";
import AboutMissionVision from "@/components/about/AboutMissionVision";
import Footer from "@/components/landing/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "About — CHORE",
  description:
    "Founded in 2025, Chore Robotics is engineering intelligent modular robots to automate indoor and outdoor property maintenance at scale",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background pt-[88px]">
        <AboutHero />
        <AboutMissionVision />
        <AboutContent />
      </main>
      <Footer showAddress />
    </>
  );
}
