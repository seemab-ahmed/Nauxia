import React from "react";
export default function LandingPage() {
  return (
    <div className="relative bg-cover bg-center h-screen">
      <div className="flex h-full items-end px-5 sm:px-[72px]">
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-4 max-w-[488px] w-full uppercase hero_section-gradient">
            <p className=" text-white font-hackathon text-2xl font-normal">
              Hello! This is Exelon 14. We need help immediately. Can anyone
              hear us?
            </p>
            <br/>
            <p className=" text-white font-hackathon text-2xl">
              Hello! Is anybody out there? Hello? This is Tracer Ship Exelon 14.
              We have crashed. I repeat we have crashed...
            </p>
            <br/>
            <p className=" text-white font-hackathon text-2xl">
              What is this place? Is anyone around here??{" "}
            </p>
          </div>
          <div className="max-w-[434px] w-full self-end uppercase">
            <p className=" text-transparentWhite font-jura text-xl text-right font-bold uppercase">
              The Biggest <br />
              Interactive storytelling experience <br />
              on Solana. Are you with us here ?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
