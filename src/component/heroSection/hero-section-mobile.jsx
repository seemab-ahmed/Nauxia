import Navbar from "../Navbar";
import bgImage from "../../images/film.svg";
import mobileLogo from "../../images/giflogo.gif";

export const HeroSectionMobile = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="relative bg-no-repeat bg-center bg-cover h-[100vh] w-full bg-black"
    >
      <div className="relative z-10">
        <Navbar />
        <div className=" bg-black justify-center flex items-center h-[100vh] bgMobile-Bars">
        <img src={mobileLogo} alt="Logo" />
        </div>
      </div>
    </div>
  );
};
