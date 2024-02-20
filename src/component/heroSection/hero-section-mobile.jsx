import Navbar from "../Navbar";
import bgImage from "../../images/film.svg";
import mobileLogo from "../../images/giflogo.gif";

export const HeroSectionMobile = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="relative bg-no-repeat bg-center bg-cover h-full w-full"
    >
      <div className="relative z-10">
        <Navbar />
        <div className=" bg-black justify-center flex items-center h-[100vh]">
        <img src={mobileLogo} alt="Logo" />
        </div>
      </div>
    </div>
  );
};
