import React , {useState , useEffect} from 'react';
import Navbar from "../Navbar";
import bgImage from "../../images/heroIImg.svg";
import bgImageipad from "../../images/ipadhero.svg";
import bgLines from "../../images/film.svg";
import { HeroSectionContent } from "./hero-section-content";

  
export const HeroSection = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    // Function to update window width state
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array means this effect runs only once after component mount

  // Choose background image based on window width
  const bgheroImage = windowWidth > 1024 ? bgImage : bgImageipad;
  return (
    <div
      style={{ backgroundImage: `url(${bgheroImage})` }}
      className="relative bg-no-repeat bg-center bg-cover h-[100vh] w-full"
    >
      {/* <img src={bgImage} className="absolute top-0" /> */}
      <div
        style={{
          backgroundImage: `url(${bgLines})`,
        }}
        className="absolute top-0 left-0 right-0 bottom-0 bg-no-repeat bg-cover bg-center opacity-10 bgMobile"
      ></div>
      <div className="relative z-10">
        <Navbar />
        <HeroSectionContent />
      </div>
    </div>
  );
};
