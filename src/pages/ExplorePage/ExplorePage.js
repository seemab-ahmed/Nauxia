import React, { useRef, useState } from "react";
import Navbar from "../../component/Navbar";
import Slider from "../../component/ui/Slider/Slider";
import { CustomSlider } from "../../component/ui/sliderCustom/slider";

import plusIcon from "../../assets/plus-icon.png";
import { Modal } from "../../component/ui/modal/modal";

export default function ExplorePage() {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const sliderRef = useRef(null);

  const handleOpenModal = () => {
    setIsModelOpen(true);
    console.log(sliderRef.current.imageIndex)
  };

  const handleCloseModal = () => {
    setIsModelOpen(false);
    sliderRef.current?.activateImageOnMobile(sliderRef.current.imageIndex);
    // sliderRef.current?.activateImage(imageIndex)
    console.log(sliderRef.current.imageIndex)
  };

  const handleNextClick = () => {
    sliderRef.current?.nextSlide();
  };
  const handleBackClick = () => {
    sliderRef.current?.prevSlide();
  };

  const handleImageclick = (index) => {
    if (window.innerWidth < 920) return;
    setIsModelOpen(true);
  };

  return (
    <>
      <div className="bg-[#0B0B0B] relative bg-cover bg-center bg-footerGradient w-100 h-[100vh]">
        <Navbar />
        <div className="xlg:flex xlg:justify-center overflow-hidden">
          <div className="xs:flex-col px-10 py-20 mt-3 border border-y-transparentWhite border-opacity-20 flex md:flex-row justify-center md:w-[1220px]">
            <CustomSlider ref={sliderRef} onImageClick={handleImageclick} />

            <div className="flex md:hidden gap-x-4 justify-center mt-10">
              <button
                onClick={handleBackClick}
                className="text-white font-hackathon text-[28px] bg-white w-10 h-10 bg-opacity-20 rounded-full flex justify-center items-center"
              >
                +
              </button>
              <button
                onClick={handleOpenModal}
                className="text-black font-hackathon text-[28px] bg-white w-10 h-10 bg-opacity-80 rounded-full flex justify-center items-center"
              >
                +
              </button>
              <button
                onClick={handleNextClick}
                className="text-white font-hackathon text-[28px] bg-white w-10 h-10 bg-opacity-20 rounded-full flex justify-center items-center"
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-end px-10 py-4 md:flex sm:hidden">
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
