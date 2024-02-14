import React, { useState, forwardRef, useImperativeHandle } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CarouselSlide from "./carouselSlide";
import "swiper/swiper-bundle.css";
import slideOne from "../../../images/slide2.svg";
import slideTwo from "../../../images/slideA2.png";
import slideThree from "../../../images/sideA3.png";
import slideFour from "../../../images/slideA4.png";
import slideFive from "../../../images/slide6.svg";
import slideSix from "../../../images/slide7.svg";
import slideSeven from "../../../images/slide8.svg";
import slideEight from "../../../images/slide9.svg";
import { Modal } from "../modal/modal";

const Slider = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const hanldeModalOpen = () => {
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  const nextSlide = () => {
    setActiveSlideIndex((prevIndex) =>
      prevIndex === slideImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const settings = {
    slidesPerView: 4,
    spaceBetween: 20,
    slidesPerGroup: 1,
    loop: true,
    autoplay: {
      delay: 2000,
    },
    pagination: {
      clickable: true,
    },
    navigation: false,
    speed: 700,
    centeredSlides: true,
    breakpoints: {
      1600: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1300: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 1,
      },
      310: {
        slidesPerView: 1,
      },
    },
  };

  const handleSlideClick = (index) => {
    setActiveSlideIndex(index);
    hanldeModalOpen(); 
  };
 

  const slideImages = [
    { inactive: slideFive, active: slideOne },
    { inactive: slideSix, active: slideTwo },
    { inactive: slideSeven, active: slideThree },
    { inactive: slideEight, active: slideFour },
  ];

  const slideStyles = (index) => {
    return {
      width: "372px",
      boxShadow:
        index === activeSlideIndex ? "0 0 10px rgba(0, 0, 0, 0.5)" : "none",
      transition: "border-color 0.3s, box-shadow 0.3s",
      padding: "15px",
      ...(index === activeSlideIndex && {
        // Apply styles for active slide
        border: "2px solid rgba(250, 250, 250, 0.2)",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
        transition: "border-color 0.3s, box-shadow 0.3s, background-image 0.3s", 
        maxWidth: "372px",
      }),
    };
  };

  useImperativeHandle(ref, () => ({
    nextSlide: nextSlide,
  }));

  return (
    <>
      <Swiper {...settings}>
        {slideImages.map((slide, index) => (
          <SwiperSlide
            key={index}
            className={(index === activeSlideIndex ? '' : 'hoveredSlide')}
            style={slideStyles(index)}
            onClick={() => handleSlideClick(index)}
          >
            <CarouselSlide
              image={index === activeSlideIndex ? slide.active : slide.inactive}
              active={activeSlideIndex === index}
              index={index}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {isOpen && <Modal onClose={handleModalClose} />}
    </>
  );
});

export default Slider;
