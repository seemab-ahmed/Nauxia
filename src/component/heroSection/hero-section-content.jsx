import { HeroSectionMaincontent } from "./her-section-main-content";
import { HeroSectionContentFooter } from "./hero-section-content-footer";

export const HeroSectionContent = () => {
  return (
    <div className="lg:px-[28px] sm:px-[72px] flex flex-col gap-y-3">
      <HeroSectionMaincontent />
      <HeroSectionContentFooter />
    </div>
  );
};