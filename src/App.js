import React, { useEffect, useState } from "react";
import HomePage from "./pages/HomePage/HomePage";
import ExplorePage from "./pages/ExplorePage/ExplorePage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// import gifLogo from "./images/giflogo.gif";

import bgImage from "./images/heroIImg.svg";
import bgImageipad from "./images/ipadhero.svg";
import bgLines from "./images/film.svg";

import loaderImage from "./images/loadingScreen.png";
import loaderLogo from "./images/loaderLogo.png";

function App() {
  const [, setLoading] = useState(true);
  const [isEnter, setIsEnter] = useState(true);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleLoadingScreen = () => {
    setIsEnter(false);
  };

  useEffect(() => {
    const urls = [bgImage, bgImageipad, bgLines];

    const loadImage = (url) =>
      new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = url;
      });

    const imagePromises = urls.map(loadImage);
    const timePromise = new Promise((resolve, reject) =>
      setTimeout(resolve, 0)
    );

    Promise.all([...imagePromises, timePromise])
      .then(() => setLoading(false))
      .catch((error) => {
        console.error("Ërror laoding");
        setLoading(false);
      });

    // let loadedImages = 0;
    //  urls.forEach(url => {
    //   const img = new Image();
    //   img.onload = () => {
    //     loadedImages++;
    //     if(loadedImages === urls.length){
    //       setLoading(false);
    //     }
    //   };
    //   img.src = url;
    //  })
  }, []);
  // if (loading) {
  //   return (
  //     <div className="relative w-screen h-screen flex items-center justify-center bg-black">
  //       <img
  //         src={gifLogo}
  //         alt="gif logo"
  //         width={400}
  //         height={400}
  //         className="relative z-0"
  //       />
  //     </div>
  //   );
  // }

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isEnter && windowSize.width >= 660 && window.location.pathname === "/") {
    return (
      <div
        className="relative w-screen h-screen"
        style={{ backgroundImage: `url(${loaderImage})` }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center max-w-[375px] w-full">
          <img src={loaderLogo} alt="gif logo" width={24} height={24} />
          <p className="font-jura text-white font-bold text-center mt-9 pb-9 border-b border-opacity-20">
            A JOURNEY THAT NEVER ENDS.
            <br />
            AN EXPERIENCE THAT KEEPS ON GOING.
          </p>
          <button
            onClick={handleLoadingScreen}
            className="bg-white max-w-[300px] h-[58px] w-full mt-[30px] shadow-buttonShadow font-jura font-bold text-xl"
          >
            {"// ENTER NAUXIA //"}
          </button>
        </div>
      </div>
    );
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
