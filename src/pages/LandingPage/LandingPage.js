import React from "react";
import bgLines from "../../images/film.svg";
export default function LandingPage() {
  return (
    <div className="relative bg-cover bg-center h-screen">
      <div className="absolute top-0 left-0 w-full h-full"></div>
      <img
        src={bgLines}
        className="absolute top-0 left-0 w-full h-full object-cover opacity-20"
        alt="Overlay"
      />
      {/* Content of hero section goes here */}
      {/* <div className="flex flex-col px-5 sm:px-[72px]">
        <div className="flex justify-between">
          <div className="flex flex-col gap-4">
            <p className=" text-white font-hackbot text-2xl font-bold">
              Hello! This is Exelon 14. We need help immediately. Can anyone
              hear us?
            </p>
            <p className=" text-white font-hackbot text-2xl font-bold">
              Hello! Is anybody out there? Hello? This is Tracer Ship Exelon 14.
              We have crashed. I repeat we have crashed...
            </p>
            <p className=" text-white font-hackbot text-2xl font-bold">
              What is this place? Is anyone around here??{" "}
            </p>
          </div>
          <div>
            <p className=" text-transparentWhite font-jura text-xl font-bold text-right">
              The Biggest <br />
              Interactive storytelling experience <br />
              on Solana. Are you with us here ?
            </p>
          </div>
        </div>
        <div>
            
        </div>
      </div> */}
    </div>
  );
}
