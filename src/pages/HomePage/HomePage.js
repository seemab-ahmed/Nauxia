import React from "react";
import Footer from "../../component/Footer";
import ExploreContainer from "../../component/ExploreContainer";
import { HeroSection } from "../../component/heroSection/hero-section";
import { HeroSectionMobile } from "../../component/heroSection/hero-section-mobile";
import FooterMobile from "../../component/footer-mobile";

export default function HomePage() {
  return (
    <div className="mx-auto bounce-effect">
      <div className="hidden sm:block">
      <HeroSection />
      </div>
      <div className="block sm:hidden">
      <HeroSectionMobile />
      </div>
      <ExploreContainer />
      <div className="zero:hidden sm:block">
      <Footer />
      </div>
      <div className="sm:hidden zero:block">
        <FooterMobile />
      </div>
    </div>
  );
}
