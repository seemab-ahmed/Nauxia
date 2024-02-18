import episode1 from "../../../assets/images/episode1.png";
import episode2 from "../../../assets/images/episode2.png";

import React, {
  useState,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";
import { Modal } from "../modal/modal";

const images = [
  {
    src: episode1,
    isReleased: true,
    title: `beginning`,
    description: `<p>This new world, bathed in alien hues and strange landscapes, held
    secrets and wonders beyond their wildest imagination.</p>
    <br/>
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
    blured: episode2,
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
    src: episode2,
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
    src: episode2,
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
    src: episode2,
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
    src: episode2,
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
    src: episode2,
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

export const CustomSlider = forwardRef((props, ref) => {
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

  // const handleWheel = (e) => {
  //   if (sliderRef.current) {
  //     e.preventDefault();
  //     sliderRef.current.scrollLeft += e.deltaY * 2.5;
  //   }
  // };

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
      <div className="overflow-hidden ml-[152px] relative">
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
          {images.map(({ src, isReleased }, index) => (
            <div
              key={index}
              className="snap-center flex justify-center shrink-0 relative w-full md:w-auto  flex-none"
            >
              <div
                className={`relative flex justify-center items-center ${
                  isReleased
                    ? "border border-[rgba(255,255,255,0.2)] p-6"
                    : "blur-"
                }`}
              >
                <img
                  src={src}
                  alt={`Slide ${index}`}
                  className={`w-[362px] h-[475px] zero:shadow-white-glow smd:shadow-none`}
                  onClick={() =>
                    window.innerWidth > 920 &&
                    !isReleased &&
                    handleOpenModal(index)
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center smd:hidden">
        {images.map(({ title, description }, index) => (
          <div
            key={index}
            className={`max-w-[362px] w-full max-h-[372px] overflow-y-auto px-8 border-t mt-[1px] border-[#494949] hide-scrollbar ${
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
      {isModelOpen && <Modal onClose={handleCloseModal} />}
    </>
  );
});
