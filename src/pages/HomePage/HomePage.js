import React from "react";
import Footer from "../../component/Footer";
import ExploreContainer from "../../component/ExploreContainer";
import { HeroSection } from "../../component/heroSection/hero-section";
import { HeroSectionMobile } from "../../component/heroSection/hero-section-mobile";

export default function HomePage() {
  return (
    <div className="mx-auto">
      <div className="hidden sm:block">
      <HeroSection />
      </div>
      <div className="block sm:hidden">
      <HeroSectionMobile />
      </div>
      <ExploreContainer />
      <Footer />
    </div>
  );
}
