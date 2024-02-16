import { HeroSectionMaincontent } from "./her-section-main-content";
import { HeroSectionContentFooter } from "./hero-section-content-footer";

export const HeroSectionContent = () => {
  return (
    <div className="lg:px-[28px] sm:px-[72px] px-5 flex flex-col gap-y-3 h-[835px]">
      <HeroSectionMaincontent />
      <HeroSectionContentFooter />
    </div>
  );
};
