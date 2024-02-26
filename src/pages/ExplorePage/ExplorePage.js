import React, { useRef, useState } from "react";
import Navbar from "../../component/Navbar";
import { CustomSlider } from "../../component/ui/sliderCustom/slider";

import { Modal } from "../../component/ui/modal/modal";
import { useDeviceType } from "../../utils/util";

export default function ExplorePage() {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const sliderRef = useRef(null);
  const { mobile, tablet } = useDeviceType();

  const handleOpenModal = () => {
    tablet && setIsModelOpen(true);
    mobile &&
      sliderRef.current?.activateImageOnMobile(sliderRef.current.imageIndex);
  };

  const handleCloseModal = () => {
    setIsModelOpen(false);
    sliderRef.current?.activateImageOnMobile(sliderRef.current.imageIndex);
  };

  const handleNextClick = () => {
    sliderRef.current?.nextSlide();
  };
  const handleBackClick = () => {
    sliderRef.current?.prevSlide();
  };

  const buttonClasses = `relative font-hackathon text-[28px] w-10 h-10 bg-opacity-80 ${
    mobile ? "rounded-full" : ""
  } flex justify-center items-center`;

  return (
    <>
      <div className="bg-black relative bg-cover bg-center w-100 h-[100vh] overflow-auto md:overflow-hidden desktop:flex desktop:flex-col desktop:justify-between">
        <Navbar className={"bg-[#0B0B0B]"} />
        <div className="smd:flex smd:justify-start items-center smd:h-full w-full bg-black">
          <div className="xs:flex-col zero:mt-[84px] smd:mt-[0px] desktop:mt-[0px] desktop:mb-[0px] flex justify-center w-full">
            <CustomSlider ref={sliderRef} isMobile={mobile} />

            <div className="flex smd:hidden gap-x-4 justify-center smd:pt-[39px] zero:pb-[8px]">
              <button
                onClick={handleBackClick}
                className={`${buttonClasses} bg-[rgba(255,255,255,0.2)] text-white`}
              >
                <span className="absolute top-0 left-1/2 transform -translate-x-1/2">
                  +
                </span>
              </button>
              <button
                onClick={handleOpenModal}
                className={`${buttonClasses} bg-[rgba(255,255,255,0.8)] text-black`}
              >
                <span className="absolute top-0 left-1/2 transform -translate-x-1/2">
                  +
                </span>
              </button>
              <button
                onClick={handleNextClick}
                className={`${buttonClasses} bg-[rgba(255,255,255,0.2)] text-white`}
              >
                <span className="absolute top-0 left-1/2 transform -translate-x-1/2">
                  +
                </span>
              </button>
            </div>
          </div>
        </div>
        <div>
          <hr className="zero:hidden desktop:block text-transparentWhite w-[100%]" />
          <div className="flex justify-end px-10 py-4 desktop:flex zero:hidden ">
            <button
              className="uppercase text-white border border-transparentWhite py-1 px-2 font-jura font-bold"
              onClick={handleNextClick}
            >{`Scroll >> `}</button>
          </div>
        </div>
      </div>
      {isModelOpen && <Modal onClose={handleCloseModal} />}
    </>
  );
}
