import React from "react";
import logo from "../images/logo.svg";
import footersmLogo from "../images/footersmlogo.svg";
import FooterFlower from "../images/FooterFlower.svg";
export default function Footer() {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(180deg, #151515 0%, rgba(0, 0, 0, 0) 100%)",
      }}
      className="bg-black relative bg-cover bg-center bg-footerGradient py-[72px] px-5 md:px-[40px] lg:px-[68px] flex m-auto gap-8"
    >
      <div className="flex w-full justify-between">
        <div className="flex flex-col gap-5 justify-center">
          <img width={133} src={logo} alt="border" />
          <p className="font-jura text-[14px] text-white uppercase">
            A future world adventure saga explored through art and <br />{" "}
            fictional storytelling.
          </p>
          <hr className=" text-transparentWhite " />
          <div className="flex gap-5 items-center ">
            <img src={footersmLogo} alt="logo" />
            <p className=" text-transparentWhite uppercase font-jura text-[14px] font-bold border-l-transparentWhite border-l pl-4">
              {" "}
              Founded 2024
            </p>
          </div>
        </div>
        <div>
          <img
            src={FooterFlower}
            alt="Footer Flower"
            className="hidden sm:block"
          />
        </div>
      </div>
    </div>
  );
}
