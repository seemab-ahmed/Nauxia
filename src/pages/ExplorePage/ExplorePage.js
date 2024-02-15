import React, { useRef } from "react";
import Navbar from "../../component/Navbar";
import Slider from "../../component/ui/Slider/Slider";
import { CustomSlider } from "../../component/ui/sliderCustom/slider";

export default function ExplorePage() {
  const sliderRef = useRef(null);
  const handleNextClick = () => {
    sliderRef.current?.nextSlide();
  };
  const handleBackClick = () => {
    sliderRef.current?.prevSlide();
  };

  return (
    <div className="bg-[#0B0B0B] relative bg-cover bg-center bg-footerGradient w-100 h-[100vh]">
      <Navbar />
      <div className=" border border-y-transparentWhite px-10 py-20 mt-3 flex justify-center">
        {/* <Slider ref={sliderRef} /> */}
        <CustomSlider ref={sliderRef} />
      </div>
      <div className="flex justify-end px-10 py-4">
        <button
          className="uppercase text-white border border-transparentWhite py-1 px-2 font-jura font-bold"
          onClick={handleNextClick}
        >{`Scroll >> `}</button>
      </div>
      <button onClick={handleBackClick} className="text-white">Prev</button>
      <button onClick={handleNextClick} className="text-white">Next</button>
    </div>
  );
}
