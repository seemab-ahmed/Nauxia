import React, { useEffect, useRef, useState } from "react";
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

import loaderImage from "./images/loadingScreen.png";
import loaderLogo from "./images/loaderLogo.png";

import backgroundAudio from './assets/music.mp3';


// const AudioContext = window.AudioContext || window.webkitAudioContext;
// const audioContext = new AudioContext();

// const playBakcgroundAudio = async (url) => {
//   try{
//     if(audioContext.state === 'suspended'){
//       await audioContext.resume();
//     }

//     const response = await fetch(url);
//     const arrayBuffer = await response.arrayBuffer();
//     const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

//     const source = audioContext.createBufferSource();
//     source.buffer = audioBuffer;
//     source.connect(audioContext.destination);
//     source.start();

//   }catch(error){
//     console.error('Error palying', error)
//   }
// }

function App() {
  const [loading, setLoading] = useState(true);
  const [isEnter, setIsEnter] = useState(false);
  const [, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  // const [audio, setAudio] = useState(new Audio(backgroundAudio));
  // const [audioSrc, setAudioSrc] = useState(null);
  const audioRef = useRef(null);

  const handleLoadingScreen = () => {
    setIsEnter(true);
    // const audio = new Audio(backgroundAudio);
    // audio.play();
    if(audioRef.current){
      audioRef.current.play().catch(error => console.log('there is an error in audio', error))
    }
    // if(audioEl && audioSrc){
    //   audioEl.src = audioSrc;
    //   // audio.play();
    // }
  };

  

  
  // useEffect(() => {
  //   if (audio && isEnter) {
  //     audio.play();
  //   }
  // }, [audio, isEnter, windowSize]);

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


  // useEffect(() => {
  //   const urls = [bgImage, bgImageipad, bgLines, loaderImage];

  //   const loadImage = (url) =>
  //     new Promise((resolve, reject) => {
  //       const img = new Image();
  //       img.onload = resolve;
  //       img.onerror = reject;
  //       img.src = url;
  //     });

  //   const imagePromises = urls.map(loadImage);
  //   const timePromise = new Promise((resolve, reject) =>
  //     setTimeout(resolve, 5000)
  //   );
  //   // const audioPromise = new Promise((resolve, reject) => {
  //   //   const audio = new Audio(backgroundAudio);
  //   //   audio.onloadedmetadata = resolve;
  //   //   audio.onerror = reject;
  //   //   setAudio(audio);
  //   // });

  //     // Load audio file
  //     const audioPromise = fetch(backgroundAudio)
  //     .then((response) => response.blob())
  //     .then((blob) => {
  //       const url = URL.createObjectURL(blob);
  //       setAudioSrc(url);
  //       const audio = new Audio(url);
  //       setAudio(audio);
  //     })
  //     .catch((error) => {
  //       console.error("Error loading audio:", error);
  //     });

  //   Promise.all([...imagePromises, timePromise, audioPromise])
  //     .then(() => setLoading(false))
  //     .catch((error) => {
  //       console.error("Ërror laoding");
  //       setLoading(false);
  //     });
  //   let loadedImages = 0;
  //    urls.forEach(url => {
  //     const img = new Image();
  //     img.onload = () => {
  //       loadedImages++;
  //       if(loadedImages === urls.length){
  //         setLoading(false);
  //       }
  //     };
  //     img.src = url;
  //    })
  // }, []);

  useEffect(() => {
    audioRef.current = document.getElementById("audio");
    const urls = [bgImage, bgImageipad, bgLines, loaderImage];
  
    const loadImage = (url) =>
      new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = url;
      });
  
    const imagePromises = urls.map(loadImage);
    
    const audioPromise = fetch(backgroundAudio)
      .then((response) => response.blob())
      .then((blob) => {
        // const url = URL.createObjectURL(blob);
        // setAudioSrc(url);
        // const audio = new Audio(url);
        // setAudio(audio);
      })
      .catch((error) => {
        console.error("Error loading audio:", error);
      });

      // audio.load();
  
    Promise.all([...imagePromises, audioPromise])
      .then(() => {
        setTimeout(() => {
          setLoading(false);
        }, 6000);
      })
      .catch((error) => {
        console.error("Error loading:", error);
        setLoading(false);
      });
  
  }, []);
  
  
  if (loading) {
    return (
      <div className="relative w-screen h-screen flex items-center justify-center bg-black">
        <img
          src={gifLogo}
          alt="gif logo"
          width={300}
          height={300}
          className="relative z-0 w-[300px] h-[170px]"
        />
      </div>
    );
  }

  if (!isEnter && window.location.pathname === "/") {
    return (
      <div className="relative w-screen h-screen bg-black flex justify-center items-center">
        {/* <div
        className="relative w-screen h-full"
        style={{ backgroundImage: `url(${loaderImage})` }}
      > */}
      <img src={loaderImage} alt="loader img" className="w-full max-h-[808px] h-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center max-w-[375px] w-full">
          <img src={loaderLogo} alt="gif logo" width={24} height={24} />
          <p className="font-jura text-white font-bold text-center mt-9 pb-9 border-b border-opacity-20">
            A JOURNEY THAT NEVER ENDS.
            <br />
            AN EXPERIENCE THAT KEEPS ON GOING.
          </p>
          <button
            onClick={handleLoadingScreen}
            className="hover-button bg-white max-w-[300px] h-[58px] w-full mt-[30px] shadow-buttonShadow font-jura font-bold text-xl"
          >
            {"// ENTER NAUXIA //"}
          </button>
        </div>
      {/* </div> */}
      </div>
    );
  }


  
//   {!isEnter && window.location.pathname === "/" &&  <div className="relative w-screen h-screen bg-black flex justify-center items-center">
//   {/* <div
//   className="relative w-screen h-full"
//   style={{ backgroundImage: `url(${loaderImage})` }}
// > */}
// <img src={loaderImage} className="w-full max-h-[808px] h-full" />
//   <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center max-w-[375px] w-full">
//     <img src={loaderLogo} alt="gif logo" width={24} height={24} />
//     <p className="font-jura text-white font-bold text-center mt-9 pb-9 border-b border-opacity-20">
//       A JOURNEY THAT NEVER ENDS.
//       <br />
//       AN EXPERIENCE THAT KEEPS ON GOING.
//     </p>
//     <button
//       onClick={handleLoadingScreen}
//       className="hover-button bg-white max-w-[300px] h-[58px] w-full mt-[30px] shadow-buttonShadow font-jura font-bold text-xl"
//     >
//       {"// ENTER NAUXIA //"}
//     </button>
//   </div>
// {/* </div> */}
// </div>}
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
