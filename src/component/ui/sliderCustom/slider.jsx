import slideOne from "../../../images/slide2.svg";
import slideTwo from "../../../images/slideA2.png";
import slideThree from "../../../images/sideA3.png";
import slideFour from "../../../images/slideA4.png";
import slideFive from "../../../images/slide6.svg";
import slideSix from "../../../images/slide7.svg";
import slideSeven from "../../../images/slide8.svg";
import slideEight from "../../../images/slide9.svg";

import React, {
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";

const images = [
  slideOne,
  slideTwo,
  slideThree,
  slideFour,
  slideFive,
  slideSix,
  slideSeven,
  slideEight,
];

export const CustomSlider = forwardRef((props, ref) => {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStartX, setScrollStartX] = useState(0);
  const [clicked, setClicked] = useState(new Array(images.length).fill(false));

  const handleImageClick = (index) => {
    // Update the clicked state to true for the clicked image
    const updatedClicked = clicked.map((item, i) =>
      i === index ? true : item
    );
    setClicked(updatedClicked);
  };

const scroll = (direction) => {
    if (!sliderRef.current || sliderRef.current.children.length === 0) return;
  
    // Assuming each child (slide) has the same width and using the first child as reference
    const slideWidth = sliderRef.current.firstChild.offsetWidth;
    // Assuming a consistent gap defined by marginRight on each slide
    const gap = parseInt(getComputedStyle(sliderRef.current.firstChild).marginRight, 10);
    const fullSlideWidth = slideWidth + gap;
  
    // Determine the current slide index based on the scrollLeft position
    const currentSlideIndex = Math.round(sliderRef.current.scrollLeft / fullSlideWidth);
  
    if (direction === "next") {
      // Calculate the new scroll position to the next slide
      const newScrollPosition = (currentSlideIndex + 1) * fullSlideWidth;
      sliderRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    } else { // "prev"
      // Calculate the new scroll position to the previous slide
      // Ensure we don't scroll to a negative index
      const newScrollPosition = Math.max(0, (currentSlideIndex - 1) * fullSlideWidth);
      sliderRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };
  

  useImperativeHandle(ref, () => ({
    nextSlide: () => scroll("next"),
    prevSlide: () => scroll("prev"),
  }));

  const handleWheel = (e) => {
    if (sliderRef.current) {
      e.preventDefault();
      sliderRef.current.scrollLeft += e.deltaY * 2.5;
    }
  };

  const handleMouseDown = (e) => {
    e.preventDefault(); // Prevent the default drag behavior
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollStartX(sliderRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const currentX = e.pageX - sliderRef.current.offsetLeft;
    const walk = (currentX - startX) * 2;
    sliderRef.current.scrollLeft = scrollStartX - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

return (
    <div className="overflow-hidden max-w-[1086px] mx-auto relative">
      <div
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
        onMouseUp={handleMouseUp}
        className={`flex gap-5 overflow-x-hidden pl-5 select-none ${isDragging ? "cursor-grabbing" : "cursor-pointer"} snap-x snap-mandatory`}
      >
        {images.map((img, index) => (
          <div key={index} className="snap-center flex justify-center shrink-0 relative w-full md:w-auto md:calc((100% - (5 * 2rem)) / 3) flex-none">
            <img
              src={img}
              alt={`Slide ${index}`}
              className={`w-[362px] h-[475px] ${clicked[index] ? "" : "blur-lg"}`}
              onClick={() => handleImageClick(index)}
            />
            {!clicked[index] && (
              <div
                className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center text-2xl font-hackathon text-white cursor-pointer bg-black bg-opacity-50"
                onClick={() => handleImageClick(index)}
              >
                ?
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
});
