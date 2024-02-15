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
import { Modal } from "../modal/modal";

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

export const CustomSlider = forwardRef(({ onImageClick }, ref) => {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStartX, setScrollStartX] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const [clicked, setClicked] = useState(new Array(images.length).fill(false));

  const handleImageClick = (index) => {
    const updatedClicked = clicked.map((item, i) =>
      i === index ? true : item
    );
    setClicked(updatedClicked);
  };

  const handleOpenModal = (index) => {
    setIsModelOpen(true);
    setImageIndex(index)
  };

  const handleCloseModal = () => {
    setIsModelOpen(false);
    handleImageClick(imageIndex);
  };

  const scroll = (direction) => {
    if (!sliderRef.current || sliderRef.current.children.length === 0) return;

    const slideWidth =
      sliderRef.current.firstChild.offsetWidth +
      parseInt(getComputedStyle(sliderRef.current.firstChild).marginRight, 10);
    const currentScroll = sliderRef.current.scrollLeft;
    const maxIndex = images.length - 1;

    let newIndex = activeImageIndex;

    if (direction === "next") {
      newIndex =
        activeImageIndex + 1 > maxIndex ? maxIndex : activeImageIndex + 1;
    } else if (direction === "prev") {
      newIndex = activeImageIndex - 1 < 0 ? 0 : activeImageIndex - 1;
    }

    const newScrollPosition = newIndex * slideWidth;
    sliderRef.current.scrollTo({
      left: newScrollPosition,
      behavior: "smooth",
    });

    setActiveImageIndex(newIndex);
  };

  useImperativeHandle(
    ref,
    () => ({
      nextSlide: () => scroll("next"),
      prevSlide: () => scroll("prev"),
      activateImage: (index) => handleImageClick(index),
      activateImageOnMobile: (index) => handleImageClick(index),
      imageIndex: activeImageIndex,
    }),
    [activeImageIndex]
  );

  const handleWheel = (e) => {
    if (sliderRef.current) {
      e.preventDefault();
      sliderRef.current.scrollLeft += e.deltaY * 2.5;
    }
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
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
    <>
      <div className="overflow-hidden max-w-[1120px] mx-auto relative">
        <div
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseUp}
          onMouseUp={handleMouseUp}
          className={`flex gap-5 overflow-x-hidden select-none ${
            isDragging ? "cursor-grabbing" : "cursor-pointer"
          } snap-x snap-mandatory`}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="snap-center flex justify-center shrink-0 relative w-full md:w-auto md:calc((100% - (5 * 2rem)) / 3) flex-none"
            >
              <img
                src={img}
                alt={`Slide ${index}`}
                className={`w-[362px] h-[475px] ${
                  clicked[index] ? "" : "blur-lg"
                }`}
                onClick={() => (window.innerWidth > 920 && !clicked[index]) && handleOpenModal(index)}
              />
              {!clicked[index] && (
                <div
                  className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center text-2xl font-hackathon text-white cursor-pointer bg-black bg-opacity-50"
                  onClick={() => window.innerWidth > 920 && handleOpenModal(index)}
                >
                  ?
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {isModelOpen && <Modal onClose={handleCloseModal} />}
    </>
  );
});
