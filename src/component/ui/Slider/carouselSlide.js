import React from 'react'
import nauxialogo from '../../../images/Union.svg';
export default function CarouselSlide({active, index, image}) {
  return (
    <div className={'mx-auto max-w-[372px] h-[475px] bg-no-repeat flex flex-col justify-between p-5 cursor-pointer'} style={{ backgroundImage: `url(${image})`}}>
     {active && <div className='fade-in-animation' >
        <p className='font-jura font-bold text-white tetxt-2xl uppercase'> episode {index}</p>
     </div>}
     {active &&  <div className='flex flex-row-reverse fade-in-animation'>
     <img
          src={nauxialogo}
          alt="Logo"
          className="mr-2 h-[50px]"
        />
     </div>}
    </div>
  )
}
