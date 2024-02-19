import { HeroSectionMaincontent } from "./her-section-main-content";
import { HeroSectionContentFooter } from "./hero-section-content-footer";

export const HeroSectionContent = () => {
  return (
    <div className="lg:px-[40px] sm:px-[40px] px-5 flex flex-col gap-y-3 h-[100vh]">
      <HeroSectionMaincontent />
      <HeroSectionContentFooter />
    </div>
  );
};
