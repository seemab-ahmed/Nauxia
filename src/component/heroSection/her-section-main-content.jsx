import React from 'react';
import { TypingEffect } from './typingEffect';
export const HeroSectionMaincontent = () => {
  return (
    <div className="relative bg-cover bg-center h-full ">
      <div className="flex h-full items-end">
        <div className="flex justify-between w-full">
          <div className="flex-col gap-y-[22px] max-w-[488px] w-full uppercase leading-7 hidden md:flex text-white font-hackathon text-2xl font-normal">
            <TypingEffect />
          </div>
          <div className="flex flex-col gap-y-[22px] max-w-[488px] w-full uppercase leading-7 md:hidden">
            <p className="text-white font-hackathon text-3xl ">
              a
              <br /> n3v3r- <br /> end1ng <br /> exp3ri3n2e!
            </p>
          </div>

          <div className="max-w-[434px] w-full self-end ">
            <p className=" text-transparentWhite font-jura text-sm text-right  uppercase">
              <span className='font-bold'> SEASON 1</span> <br />
              Beyond the challenges for <br /> this strange land holds the   <br />
              deepest secret of their civilization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
