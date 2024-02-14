import React, {useRef} from 'react'
import Navbar from '../../component/Navbar'
import Slider from '../../component/ui/Slider/Slider'

export default function ExplorePage() {
    const sliderRef = useRef(null);
    const handleNextClick = () => {
            if (sliderRef.current) {
              sliderRef.current.nextSlide();
            }
          };


  return (
    <div
      className="bg-[#0B0B0B] relative bg-cover bg-center bg-footerGradient w-100 h-[100vh]"
    >
        <Navbar />
       <div className=' border border-y-transparentWhite px-10 py-20 mt-3 flex justify-center'>
       <Slider ref={sliderRef} />
       </div>
       <div className='flex justify-end px-10 py-4'>
        <button className='uppercase text-white border border-transparentWhite py-1 px-2 font-jura font-bold' onClick={handleNextClick}>{`Scroll >> `}</button>
       </div>
    </div>
  )
}



