import type { Metadata } from "next";
import Footer from "@/components/landing/Footer";
import InvestorEmailAlerts from "@/components/investors/InvestorEmailAlerts";
import InvestorEvents from "@/components/investors/InvestorEvents";
import InvestorHero from "@/components/investors/InvestorHero";
import InvestorPressReleases from "@/components/investors/InvestorPressReleases";
import InvestorRequestForm from "@/components/investors/InvestorRequestForm";
import InvestorSocialLinks from "@/components/investors/InvestorSocialLinks";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Investors — CHORE",
  description:
    "Investor relations for Chore Robotics — press releases, events, email alerts, and information requests for partners and analysts.",
};

export default function InvestorsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background pt-[88px]">
        <InvestorHero />
        <InvestorPressReleases />
        <InvestorEvents />

        <section className="border-t border-border bg-background px-4 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
          <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-10 xl:gap-12">
            <InvestorRequestForm />
            <InvestorSocialLinks />
          </div>
        </section>

        <InvestorEmailAlerts />
      </main>
      <Footer showAddress />
    </>
  );
}
