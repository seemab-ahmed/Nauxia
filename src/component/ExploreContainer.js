import React from "react";
import nauxiaLogo from "../images/Union.svg";
import bgLines from "../images/film.svg";
import whiteBorder from "../images/whiteBorder.svg";
import { useNavigate } from "react-router-dom";

export default function ExploreContainer() {
  const navigate = useNavigate();
  const handleClick = () => {
    // Navigate to the desired route when the button is clicked
    navigate("/explore");
  };
  return (
    <div style={{backgroundImage: `url(${bgLines})`}}>
      <div className="relative bg-cover bg-center bg-[rgba(0,0,0,0.9)] py-[120px] flex items-center flex-col m-auto gap-8 px-10" style={{backgroundImage: `url${bgLines}`}}>
        {/* <div className="absolute top-0 left-0 w-full h-full"></div>
        <img
          src={bgLines}
          className="absolute top-0 left-0 w-full h-full object-cover opacity-25"
          alt="Overlay"
        /> */}
        <div className=" text-white justify-center font-medium font-jura text-[36px] uppercase tracking-144 text-center">
          the <br className="block md:hidden" /> first <br className="block md:hidden" />step
        </div>
        <hr className=" text-transparentWhite w-[100%] absolute mt-[27.5px] opacity-45" />
        <div className=" justify-center">
          <img src={nauxiaLogo} alt="Nauxia" width={100} />
        </div>
        <div className="flex justify-center flex-col items-center font-normal">
          <p className=" font-jura text-[24px] text-white text-start sm:text-center uppercase">
            In a distant corner of the universe,
          </p>
          <div className="relative overflow-hidden w-fit">
            <p className="font-jura text-[24px] text-white text-start sm:text-center uppercase">
              a group of intrepid humans embarked on a perilous journey,
            </p>
            <div className="animation w-[229px] absolute top-[19px] left-0 flex flex-col">
              <span className="w-full h-[5px] bg-gradient mb-[0.8px]"></span>
              <span className="w-full h-[5px] bg-gradient mb-[0.8px]"></span>
              <span className="w-full h-[5px] bg-gradient"></span>
            </div>
          </div>
          <p className=" font-jura text-[24px] text-white text-start sm:text-center sm:px-[5%] uppercase">
            leaving behind the familiar comforts of Earth to land on an
            enigmatic and uncharted planet.
          </p>
        </div>
        <img src={whiteBorder} alt="border" />
        <button
          className=" shadow-custom bg-white py-1 px-3 text-black font-jura uppercase text-[25px] font-bold"
          onClick={handleClick}
        >
          {`Explore >>`}
        </button>
      </div>
    </div>
  );
}
