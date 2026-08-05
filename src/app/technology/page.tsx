import type { Metadata } from "next";
import FleetManagementSection from "@/components/landing/FleetManagementSection";
import Footer from "@/components/landing/Footer";
import ObstacleNavigationSection from "@/components/landing/ObstacleNavigationSection";
import SpatialAwarenessSection from "@/components/landing/SpatialAwarenessSection";
import TechnologySection from "@/components/landing/TechnologySection";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Technology — CHORE",
  description:
    "Engineering built for the long haul — dynamic obstacle navigation and fleet command from a single app.",
};

export default function TechnologyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background pt-[88px]">
        <TechnologySection />
        <SpatialAwarenessSection />
        <ObstacleNavigationSection />
        <FleetManagementSection />
      </main>
      <Footer />
    </>
  );
}
