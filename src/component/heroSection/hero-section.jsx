import Navbar from "../Navbar";
import bgImage from "../../images/heroIImg.svg";
import bgLines from "../../images/film.svg";
import { HeroSectionContent } from "./hero-section-content";

export const HeroSection = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="relative bg-no-repeat bg-center bg-cover h-full w-full"
    >
      {/* <img src={bgImage} className="absolute top-0" /> */}
      <div
        style={{
          backgroundImage: `url(${bgLines})`,
        }}
        className="absolute top-0 left-0 right-0 bottom-0 bg-no-repeat bg-cover bg-center opacity-10 bgMobile"
      ></div>
      <div className="relative z-10">
        <Navbar />
        <HeroSectionContent />
      </div>
    </div>
  );
};
