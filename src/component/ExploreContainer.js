import nauxiaLogo from "../images/giflogo.gif";
import whiteBorder from "../images/whiteBorder.svg";
import { useNavigate } from "react-router-dom";
import { adjustAnimationStopPoint, useDeviceType } from "../utils/util";
import { useEffect, useRef, useState } from "react";
import { CustomSlider } from "./ui/sliderCustom/slider";

export default function ExploreContainer() {
  const navigate = useNavigate();
  
  const sliderRef = useRef(null);
  const { mobile } = useDeviceType();

  const disabled = useState(true)[0];

  const handleClick = () => {
    navigate("/explore");
  };

  useEffect(() => {
    window.addEventListener("resize", adjustAnimationStopPoint);
    adjustAnimationStopPoint();

    return () => window.removeEventListener("resize", adjustAnimationStopPoint);
  }, []);

  
  // const handleNextClick = () => {
  //   sliderRef.current?.nextSlide();
  // };
  // const handleBackClick = () => {
  //   sliderRef.current?.prevSlide();
  // };


  return (
    <div className="bg-Bars relative bg-cover bg-[rgba(0,0,0,1)] desktop:h-[713px] zero:pb-[60px] smd:pb-[122px] py-20">
      <div className="flex items-center flex-col m-auto gap-[40px] px-[20px]">
        <div className=" text-white justify-center font-medium font-jura text-[36px] tracking-144 ml-[1.2em] uppercase text-center">
          {"the"}
          <span className="zero:hidden desktop:inline">&nbsp;</span>
          <br className="block desktop:hidden" />
          {"first"}
          <span className="zero:hidden desktop:inline">&nbsp;</span>
          <br className="block desktop:hidden" />
          {"step"}
        </div>
        <div className="flex flex-col gap-[35px] items-center">
          <div className=" justify-center">
            <img src={nauxiaLogo} alt="Nauxia" width={150} />
          </div>
          <div className="flex justify-center flex-col items-center w-full">
            <p className=" font-jura text-[24px] text-white text-center uppercase">
              In a distant corner of the universe,
            </p>
            <div className="relative overflow-hidden  w-full">
              <p className="relative font-jura text-[24px] text-white text-center uppercase">
                a group of intrepid humans embarked on a{" "}
                <span className="inline-block">perilous journey</span>,
                <div className="animation2 w-[209px] absolute zero:top-[85px] 444:top-[50px] 488:top-[50px] 512:top-[60px] 805:top-[15px] 922:top-[15px] left-0 flex flex-col">
                  <span className="w-full h-[5px] bg-gradient mb-[0.8px]"></span>
                  <span className="w-full h-[5px] bg-gradient mb-[0.8px]"></span>
                  <span className="w-full h-[5px] bg-gradient"></span>
                </div>
              </p>
            </div>

            <p className="relative overflow-hidden font-jura text-[24px] text-white text-center sm:px-[5%] uppercase">
              leaving behind the familiar comforts of Earth to land on an
              enigmatic and{" "}
              <span className="inline-block">uncharted planet.</span>
              <div className="animation3 w-[209px] absolute zero:top-[155px] 391:top-[120px] 473:top-[85px] 713:top-[50px] 805:top-[50px] left-0 flex flex-col">
                <span className="w-full h-[5px] bg-gradient mb-[0.8px]"></span>
                <span className="w-full h-[5px] bg-gradient mb-[0.8px]"></span>
                <span className="w-full h-[5px] bg-gradient"></span>
              </div>
            </p>
          </div>
          <img src={whiteBorder} alt="border" />
          <button
            className={`relative z-20 zero:hidden smd:block ${
              !disabled ? "shadow-custom bg-white" : "line-through bg-[#b1b1b1]"
            } hover-button  py-1 px-3 text-black font-jura uppercase text-[25px] font-bold`}
            onClick={handleClick}
            disabled={disabled}
          >
            {`Explore ${!disabled ? ">>" : ""}`}
          </button>
          <CustomSlider ref={sliderRef} isMobile={mobile} />

        </div>
      </div>
    </div>
  );
}
