import React from 'react'
import bgLines from '../images/film.svg';
import nauxiaLogo from '../images/Union.svg'; 
import whiteBorder from '../images/whiteBorder.svg'
export default function ExploreContainer() {
  return (
    <div className="relative bg-cover bg-center bg-black py-[120px] flex items-center flex-col m-auto gap-8 px-10">
    <div className="absolute top-0 left-0 w-full h-full"></div>
    <img src={bgLines} className="absolute top-0 left-0 w-full h-full object-cover opacity-25" alt="Overlay" />
    <div className=' text-white justify-center font-jura text-3xl font-bold uppercase tracking-144 text-center'>the first step</div>
    <div className=' justify-center'><img src={nauxiaLogo} alt='Nauxia' width={50} /></div>
    <div>
    <p className=' font-jura text-[24px] text-white text-center uppercase'>In a distant corner of the universe,</p>
    <p className=' font-jura text-[24px] text-white text-center uppercase'>a group of intrepid humans embarked on a perilous journey,</p>
    <p className=' font-jura text-[24px] text-white text-center px-[5%] uppercase'> leaving behind the familiar comforts of Earth to land on an enigmatic and uncharted planet.</p>
    </div>
    <img src={whiteBorder} alt="border" />
    <div className=' shadow-custom bg-white py-1 px-3 text-black font-jura uppercase text-[25px] font-bold'>
        {`Explore >>`}
    </div>
  </div>
  )
}
