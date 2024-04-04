import React from "react";

import background from '../images/mobile_footer.png';
// import footersmLogo from "../images/footersmlogo.svg";
export default function FooterMobile() {
  return (
    <><div
      style={{ backgroundImage: `url(${background})`, backgroundAttachment: 'inherit' }}
      className="relative h-[511px] justify-center bg-cover bg-center bg-footerGradient py-[55px] smd:py-0 sm:pt-[15px] px-8  smd:px-[40px] lg:px-[68px] flex m-auto gap-8"
    >
      {/* <img src={background} alt="bg" className="absolute top-0 left-0 w-full -z-40" /> */}
      <div className="flex flex-col max-w-[329px] w-full">
        <div className="flex flex-col gap-y-[20px] -mt-2">
          <p className="font-jura text-[12px] lg:text-[14px] text-white uppercase opacity-50">
            Will she master the cycle of time or let the Vayd <br className="smd:hidden zero:hidden 391:block" /> collapse into shards of ice ?
          </p>
          <hr className=" text-transparentWhite " />
        </div>
      </div>
    </div>


      <div className="flex gap-5 items-center bg-black h-12 justify-center">
        <a href="https://twitter.com/nauxia4060">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.6" d="M8.094 6.2239L13.157 0.295898H11.957L7.562 5.4429L4.05 0.295898H0L5.31 8.0799L0 14.2959H1.2L5.842 8.8599L9.551 14.2959H13.601L8.094 6.2239ZM6.451 8.1479L5.913 7.3729L1.632 1.2059H3.475L6.929 6.1829L7.467 6.9579L11.958 13.4279H10.115L6.451 8.1479Z" fill="white" />
          </svg>

        </a>
        <p className=" text-white opacity-60 uppercase font-jura text-[14px] font-bold border-l-transparentWhite border-l pl-4">
          Founded 2024
        </p>
      </div></>
  );
}
