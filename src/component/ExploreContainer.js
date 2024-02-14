import React from "react";
import nauxiaLogo from "../images/Union.svg";
import whiteBorder from "../images/whiteBorder.svg";
import { useNavigate } from 'react-router-dom';

export default function ExploreContainer() {
  const navigate = useNavigate();
  const handleClick = () => {
    // Navigate to the desired route when the button is clicked
    navigate('/explore');
  };
  return (
    <>
      <div className="relative bg-cover bg-center bg-black py-[120px] flex items-center flex-col m-auto gap-8 px-10">
        <div className=" text-white justify-center font-jura text-3xl font-bold uppercase tracking-144 text-center">
          the first step
        </div>
        <div className=" justify-center">
          <img src={nauxiaLogo} alt="Nauxia" width={50} />
        </div>
        <div className="flex justify-center flex-col items-center">
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
      
    </>
  );
}
