import React, { useRef, useState } from "react";
import Navbar from "../../component/Navbar";
import Slider from "../../component/ui/Slider/Slider";
import { CustomSlider } from "../../component/ui/sliderCustom/slider";

import plusIcon from "../../assets/plus-icon.png";
import { Modal } from "../../component/ui/modal/modal";
import { useDeviceType } from "../../utils/util";

export default function ExplorePage() {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const sliderRef = useRef(null);
  const { desktop, mobile, tablet } = useDeviceType();

  const handleOpenModal = () => {
    tablet && setIsModelOpen(true);
    mobile && sliderRef.current?.activateImageOnMobile(sliderRef.current.imageIndex);
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

  const buttonClasses = `font-hackathon text-[28px] w-10 h-10 bg-opacity-80 ${mobile ? 'rounded-full' : ''} flex justify-center items-center`;

  return (
    <>
      <div className="bg-[#0B0B0B] relative bg-cover bg-center bg-footerGradient w-100 h-screen">
        <Navbar />
        <div className="xlg:flex xlg:justify-center overflow-hidden">
          <div className="xs:flex-col px-10 smd:py-20 mt-3 smd:border bg-[#d9d9d9] bg-opacity-[2%] smd:border-y-[#494949]  zero:py-4 zero:border-t zero:border-t-[#494949] border-opacity-20 flex md:flex-row justify-center md:w-[1220px]">
            <CustomSlider ref={sliderRef} />

            <div className="flex md:hidden gap-x-4 justify-center mt-10">
              <button
                onClick={handleBackClick}
                className={`${buttonClasses} bg-[rgba(255,255,255,0.2)] text-white`}
              >
                <span className="h-fit">+</span>
              </button>
              <button
                onClick={handleOpenModal}
                className={`${buttonClasses} bg-[rgba(255,255,255,0.8)] text-black`}
              >
                <span>+</span>
              </button>
              <button
                onClick={handleNextClick}
                className={`${buttonClasses} bg-[rgba(255,255,255,0.2)] text-white`}
              >
                <span>+</span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-end px-10 py-4 md:flex zero:hidden">
          <button
            className="uppercase text-white border border-transparentWhite py-1 px-2 font-jura font-bold"
            onClick={handleNextClick}
          >{`Scroll >> `}</button>
        </div>
      </div>
      {isModelOpen && <Modal onClose={handleCloseModal} />}
    </>
  );
}
