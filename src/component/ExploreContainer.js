import nauxiaLogo from "../images/giflogo.gif";
import whiteBorder from "../images/whiteBorder.svg";
import { useNavigate } from "react-router-dom";
import { adjustAnimationStopPoint } from "../utils/util";
import { useEffect } from "react";

export default function ExploreContainer() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/explore");
  };

  useEffect(() => {
    window.addEventListener("resize", adjustAnimationStopPoint);
    adjustAnimationStopPoint();

    return () => window.removeEventListener("resize", adjustAnimationStopPoint);
  }, []);

  return (
    <div className="relative bg-cover bg-[rgba(0,0,0,1)] desktop:h-[713px] zero:pb-[60px] smd:pb-[122px] py-20">
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
            <p className=" font-jura text-[28px] text-white text-center uppercase">
              In a distant corner of the universe,
            </p>
            <div className="relative overflow-hidden  w-full">
              <p className="relative font-jura text-[28px] text-white text-center uppercase">
                a group of intrepid humans embarked on a{" "}
                <span className="inline-block">perilous journey</span>,
                <div className="animation2 w-[229px] absolute zero:top-[140px] 350:top-[100px] 512:top-[60px] 922:top-[19px] left-0 flex flex-col">
                  <span className="w-full h-[5px] bg-gradient mb-[0.8px]"></span>
                  <span className="w-full h-[5px] bg-gradient mb-[0.8px]"></span>
                  <span className="w-full h-[5px] bg-gradient"></span>
                </div>
              </p>
            </div>

            <p className="relative overflow-hidden font-jura text-[28px] text-white text-center sm:px-[5%] uppercase">
              leaving behind the familiar comforts of Earth to land on an
              enigmatic and{" "}
              <span className="inline-block">uncharted planet.</span>
              <div className="animation3 w-[229px] absolute zero:top-[225px] 330:top-[183px] 432:top-[140px] 525:top-[100px] 805:top-[60px] left-0 flex flex-col">
                <span className="w-full h-[5px] bg-gradient mb-[0.8px]"></span>
                <span className="w-full h-[5px] bg-gradient mb-[0.8px]"></span>
                <span className="w-full h-[5px] bg-gradient"></span>
              </div>
            </p>
          </div>
          <img src={whiteBorder} alt="border" />
          <button
            className="relative z-20 shadow-custom bg-white py-1 px-3 text-black font-jura uppercase text-[25px] font-bold"
            onClick={handleClick}
          >
            {`Explore >>`}
          </button>
        </div>
      </div>
    </div>
  );
}
