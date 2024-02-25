import episode1 from "../../../assets/images/episode1.png";
import episode1Mobile from "../../../images/mobile-active-slide.png";
import episode2 from "../../../assets/images/episode2.png";
import episode3 from "../../../assets/images/episode3.png";
import nauxialogo from "../../../assets/logo.png";
// import arrow from "../../../assets/warrow.png.png";
import React, {
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";
import { Modal } from "../modal/modal";

export const CustomSlider = forwardRef(({ isMobile }, ref) => {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStartX, setScrollStartX] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const images = [
    {
      src: windowWidth > 768 ? episode1 : episode1Mobile,
      isReleased: true,
      title: `beginning`,
      description: `<p>This new world, bathed in alien hues and strange landscapes, held
      secrets and wonders beyond their wildest imagination.</p>
      <br/>
      <p>As they forged connections with the planet's indigenous beings and
      delved deeper into its mysteries, they discovered that their arrival
      was not by chance.</p>
      <br />
      <p>As they forged connections with the planet's indigenous beings and
      delved deeper into its mysteries, they discovered that their arrival
      was not by chance.</p>`,
    },
    {
      src: episode2,
      isReleased: false,
      title: `middle`,
      description: `<p>This new world, bathed in alien hues and strange landscapes, held
      secrets and wonders beyond their wildest imagination.</p>
      <br/>
      <p>As they forged connections with the planet's indigenous beings and
      delved deeper into its mysteries, they discovered that their arrival
      was not by chance.</p>`,
    },
    {
      src: episode3,
      isReleased: false,
      title: `end`,
      description: `<p>This new world, bathed in alien hues and strange landscapes, held
      secrets and wonders beyond their wildest imagination.</p>
      <br/>
      <p>As they forged connections with the planet's indigenous beings and
      delved deeper into its mysteries, they discovered that their arrival
      was not by chance.</p>`,
    },
    {
      src: episode3,
      isReleased: false,
      title: `beginning`,
      description: `<p>This new world, bathed in alien hues and strange landscapes, held
      secrets and wonders beyond their wildest imagination.</p>
      <br/>
      <p>As they forged connections with the planet's indigenous beings and
      delved deeper into its mysteries, they discovered that their arrival
      was not by chance.</p>`,
    },
    {
      src: episode3,
      isReleased: false,
      title: `beginning`,
      description: `<p>This new world, bathed in alien hues and strange landscapes, held
      secrets and wonders beyond their wildest imagination.</p>
      <br/>
      <p>As they forged connections with the planet's indigenous beings and
      delved deeper into its mysteries, they discovered that their arrival
      was not by chance.</p>`,
    },
  ];

  const [clicked, setClicked] = useState(new Array(images.length).fill(false));
  const handleImageClick = (index) => {
    const updatedClicked = clicked.map((item, i) =>
      i === index ? true : item
    );
    setClicked(updatedClicked);
  };

  const handleOpenModal = (index) => {
    setIsModelOpen(true);
    setImageIndex(index);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setIsDragging(true);
    setStartX(touch.pageX - sliderRef.current.offsetLeft);
    setScrollStartX(sliderRef.current.scrollLeft);
  };
  
  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    const currentX = touch.pageX - sliderRef.current.offsetLeft;
    const walk = (currentX - startX) * 2;
    sliderRef.current.scrollLeft = scrollStartX - walk;
  };
  
  const handleTouchEnd = () => {
    setIsDragging(false);
    const moveDistance = sliderRef.current.scrollLeft - scrollStartX;
    const threshold = 100;
  
    if (moveDistance > threshold) {
      setActiveImageIndex((prevIndex) => Math.min(prevIndex + 1, images.length - 1));
    } else if (moveDistance < -threshold) {
      setActiveImageIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    }
  };

  const handleWheelOnImage = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="overflow-hidden desktop:ml-[152px] relative">
        <div
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseUp}
          onMouseUp={handleMouseUp}
          onWheel={handleWheel}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className={`flex gap-5 smd:px-40 desktop:px-0 overflow-x-hidden select-none ${
            isDragging ? "cursor-grabbing" : "cursor-pointer"
          } snap-x snap-mandatory`}
        >
          {images.map(({ src, isReleased }, index) => (
            <div
              key={index}
              className="snap-center flex justify-center shrink-0 relative w-full  smd:w-auto desktop:w-auto  flex-none"
            >
              <div
                className={`relative flex justify-center items-center ${
                  isReleased ? "zero:pt-10" : "pt-0"
                } smd:w-[528px] smd:h-[687px] desktop:w-auto desktop:h-auto ${
                  isReleased && !isMobile
                    ? "border border-[rgba(255,255,255,0.3)] smd:p-6"
                    : "blur-"
                }`}
              >
                {isReleased && (
                  <>
                    <p className="absolute zero:top-12 zero:left-4 smd:top-[70px] smd:left-14 desktop:top-8 desktop:left-10 font-jura font-bold text-white text-2xl uppercase z-20 zero:hidden smd:block">
                      episode /
                    </p>

                    <img
                      src={nauxialogo}
                      alt="Logo"
                      className="mr-2 w-[46px] h-12 absolute zero:bottom-2 zero:right-2 smd:bottom-[80px] smd:right-[60px] desktop:bottom-8 desktop:right-8 z-20 zero:hidden smd:block"
                    />
                  </>
                )}
                <img
                  src={src}
                  alt={`Slide ${index}`}
                  className={`relative z-10 zero:w-[372px] zero:h-[372px] desktop:w-[362px] desktop:h-[475px] smd:w-[460px] smd:h-[595px] smd:shadow-none zero:border-b zero:border-white smd:border-0`}
                  onClick={() => (window.innerWidth >= 768 && isReleased) && handleOpenModal(index)}
                  onWheel={handleWheelOnImage}
                />
                {isReleased && (
                  <div onWheel={handleWheelOnImage} className="absolute inner-glow zero:w-[372px] zero:h-[372px] desktop:w-[362px] desktop:h-[475px] smd:w-[460px] smd:h-[595px] smd:hidden z-0"></div>
                )}
                {/* <span className="moving-arrow bg-red absolute zero:bottom-0 zero:right-[20px] smd:bottom-[42px] smd:right-[50px] smd:hidden">
                  <img src={arrow} alt="arrow icon" width={24} height={24} />
                </span> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="smd:hidden flex justify-center pb-[28px]">
        <div className="flex justify-center bg-[#090909] max-w-[372px]">
          {images.map(({ title, description }, index) => (
            <div
              key={index}
              className={`w-full max-h-[276px] max-w-[372px] overflow-y-auto px-8 mt-[1px] hide-scrollbar ${
                activeImageIndex === index ? "block" : "hidden"
              }`}
            >
              <h1 className="font-bold font-jura tracking-[22px] leading-4 uppercase text-white my-[38px] text-center">
                {title}
              </h1>
              <p
                className="font-medium text-sm leading-4 font-jura uppercase text-white mb-[28px]"
                dangerouslySetInnerHTML={{ __html: description }}
              ></p>
            </div>
          ))}
        </div>
      </div>
      {isModelOpen && <Modal onClose={handleCloseModal} />}
    </>
  );
});
