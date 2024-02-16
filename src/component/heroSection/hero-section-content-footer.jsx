import heroContentSymbols from "../../assets/hero-content-symbols.png";
export const HeroSectionContentFooter = () => {
  return (
    <div className="flex justify-between items-center pt-8 border-t-2 border-white border-opacity-30">
      <img src={heroContentSymbols} alt="symbols" />
      <p className="font-normal text-[20px] font-hackathon leading-[22px] hero_section-footer_gradient">{'// E1F3 //'}</p>
    </div>
  );
};
