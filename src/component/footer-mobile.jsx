import React from "react";

import background from '../images/mobile_footer.png';
export default function FooterMobile() {
  return (
    <div
      className=" relative bg-cover bg-center bg-footerGradient py-[70px] smd:py-0 sm:pt-[15px] px-8  smd:px-[40px] lg:px-[68px] flex m-auto gap-8"
    >
        <img src={background} alt="bg" className="absolute top-0 left-0 w-full -z-40" />
      <div className="flex w-full justify-between">
        <div className="flex flex-col gap-[24px] justify-center">
          <div className="flex flex-col gap-[40px]">
            <p className="font-jura text-[12px] lg:text-[14px] text-white uppercase opacity-50">
              Will she master the cycle of time or let the Vayd collapse into shards of ice ?
            </p>
            <hr className=" text-transparentWhite " />
          </div>
        </div>
      </div>
    </div>
  );
}
