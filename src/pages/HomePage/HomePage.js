import React from "react";
import Footer from "../../component/Footer";
import ExploreContainer from "../../component/ExploreContainer";
import { HeroSection } from "../../component/heroSection/hero-section";

export default function HomePage() {
  return (
    <div className="mx-auto">
      <HeroSection />
      <ExploreContainer />
      <Footer />
    </div>
  );
}
