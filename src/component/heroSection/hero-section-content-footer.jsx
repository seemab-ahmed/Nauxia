import heroContentSymbols1 from "../../images/herofooter1.png";
import heroContentSymbols2 from "../../images/herofooter2.png";
import heroContentSymbols3 from "../../images/herofooter3.png";
export const HeroSectionContentFooter = () => {
  return (
    <div className="flex justify-between items-center py-8 border-t-2 border-white border-opacity-30">
      <div className="flex gap-3">
      <img src={heroContentSymbols1} alt="symbols" width={30} />
      <img src={heroContentSymbols2} alt="symbols" width={30} />
      <img src={heroContentSymbols3} alt="symbols" width={30} />
      </div>
      <p className="font-normal text-[20px] font-hackathon leading-[22px] hero_section-footer_gradient">{'// E1F3 //'}</p>
    </div>
  );
};
