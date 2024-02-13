import React from 'react';
import bgLines from '../../images/film.svg';
export default function LandingPage() {
  return (
    <div className="relative bg-cover bg-center h-screen">
    <div className="absolute top-0 left-0 w-full h-full"></div>
    <img src={bgLines} className="absolute top-0 left-0 w-full h-full object-cover opacity-20" alt="Overlay" />
    {/* Content of hero section goes here */}
  </div>
  )
}
