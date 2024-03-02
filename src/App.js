import React, { useEffect, useState } from "react";
import HomePage from "./pages/HomePage/HomePage";
import ExplorePage from "./pages/ExplorePage/ExplorePage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import gifLogo from "./images/giflogo.gif";

import bgImage from "./images/heroIImg.svg";
import bgImageipad from "./images/ipadhero.svg";
import bgLines from "./images/film.svg";

function App() {
  const [loading, setLoading] = useState(true);

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
      setTimeout(resolve, 4000)
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
  if (loading) {
    return (
      <div className="relative w-screen h-screen flex items-center justify-center bg-black">
        <img
          src={gifLogo}
          alt="gif logo"
          width={400}
          height={400}
          className="relative z-0"
        />
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
