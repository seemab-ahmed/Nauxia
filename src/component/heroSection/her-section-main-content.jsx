export const HeroSectionMaincontent = () => {
  return (
    <div className="relative bg-cover bg-center h-screen">
      <div className="flex h-full items-end">
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-y-[22px] max-w-[488px] w-full uppercase hero_section-gradient leading-7">
            <p className=" text-white font-hackathon text-2xl font-normal">
              Hello! This is Exelon 14. We need help immediately. Can anyone
              hear us?
            </p>
            <p className=" text-white font-hackathon text-2xl">
              Hello! Is anybody out there? Hello? This is Tracer Ship Exelon 14.
              We have crashed. I repeat we have crashed...
            </p>
            <p className=" text-white font-hackathon text-2xl">
              What is this place? Is anyone around here??{" "}
            </p>
          </div>
          <div className="max-w-[434px] w-full self-end ">
            <p className=" text-transparentWhite font-jura text-sm text-right font-bold">
              The Biggest <br />
              Interactive storytelling experience <br />
              on Solana. Are you with us here ?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
