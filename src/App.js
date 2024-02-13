import React from "react";
import LandingPage from "./pages/LandingPage/LandingPage";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import bgImage from "./images/heroIImg.svg";
import ExploreContainer from "./component/ExploreContainer";
function App() {
  return (
    <div className="w-100 mx-auto">
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className="relative bg-cover bg-center h-screen"
      >
        <Navbar />
        <LandingPage />
      </div>
      <ExploreContainer />
      <Footer />
    </div>
  );
}

export default App;
