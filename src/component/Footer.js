import React from "react";
import logo from "../images/logo.svg";
import footersmLogo from "../images/footersmlogo.svg";
import FooterFlower from "../images/FooterFlower.svg";
export default function Footer() {
  return (
    <div
      style={{
        background: 'linear-gradient(to bottom, #151515 0%, #151515 20%, #000000 50%, #000000 100%)',
      }}
      className="bg-black relative bg-cover bg-center bg-footerGradient py-[70px] smd:py-0 sm:pt-[15px] pl-5 smd:pl-[40px] lg:pl-[68px] flex m-auto gap-8"
    >
      <div className="flex w-full justify-between">
        <div className="flex flex-col gap-[24px] justify-center">
          <img width={133} src={logo} alt="border" />
          <div className="flex flex-col gap-[40px]">
            <p className="font-jura text-[12px] lg:text-[14px] text-white uppercase">
              A future world adventure saga explored through art and <br className="xmd:block zero:hidden" />
              fictional storytelling.
            </p>
            <hr className=" text-transparentWhite " />
            <div className="flex gap-5 items-center ">
              <img src={footersmLogo} alt="logo" />
              <p className=" text-transparentWhite uppercase font-jura text-[14px] font-bold border-l-transparentWhite border-l pl-4">
                Founded 2024
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            src={FooterFlower}
            alt="Footer Flower"
            className="hidden smd:block"
          />
        </div>
      </div>
    </div>
  );
}
