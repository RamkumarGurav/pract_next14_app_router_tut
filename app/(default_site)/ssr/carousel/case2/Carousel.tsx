"use client";
import { useState } from "react";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

const ImageCarousel = ({ slides }: { slides: string[] }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleNext = () =>
    setCurrentSlideIndex(
      currentSlideIndex === slides.length - 1 ? 0 : currentSlideIndex + 1
    );
  const handlePrev = () =>
    setCurrentSlideIndex(
      currentSlideIndex === 0 ? slides.length - 1 : currentSlideIndex - 1
    );

  console.log("currentSlideIndex", currentSlideIndex);

  return (
    <div className="container carousel-shell relative  overflow-hidden border border-solid border-black">
      <div
        className={`carousel-container  bg-white  flex  transition-transform duration-500 ease-in-out 
      `}
        style={{ transform: `translateX(-${currentSlideIndex * 100}%)` }}
      >
        {/* <div className="min-w-[600px] h-40 bg-red-500"></div>
        <div className="min-w-[600px] h-40 bg-blue-500"></div>
        <div className="min-w-[600px] h-40 bg-green-500"></div>
        <div className="min-w-[600px] h-40 bg-yellow-500"></div> */}
        {slides.map((item, i) => (
          <div
            key={i}
            className={`min-w-full h-[300px] bg-${item}-400 flex item-center justify-center`}
          >
            {item}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt quas
            dignissimos optio asperiores beatae obcaecati, inventore quos error
            eum, earum minima iste odit iure? Porro error est temporibus. Beatae
            repellendus deserunt excepturi, tempora nisi est exercitationem,
            distinctio voluptatem, explicabo facere consequatur sint optio natus
            illo? Pariatur in corrupti laboriosam earum, mollitia quaerat optio
            tenetur fuga nostrum dicta ullam sint doloremque accusamus commodi
            neque odio facilis porro autem cupiditate aliquam dolorem. A quasi
            deleniti placeat aspernatur sequi maiores iste, hic facilis
            reprehenderit veniam unde corrupti dolores praesentium obcaecati
            necessitatibus rerum inventore illum veritatis architecto velit
            quos. Labore nisi voluptatem animi nihil?
          </div>
        ))}
      </div>
      <div className={`absolute inset-0 flex justify-between items-center  `}>
        <button
          className="bg-white/50 hover:bg-white text-gray-900 p-1 rounded-full shadow"
          onClick={handlePrev}
        >
          <GrFormPrevious size={24} />
        </button>
        <button
          className="bg-white/50 hover:bg-white text-gray-900 p-1 rounded-full shadow"
          onClick={handleNext}
        >
          <MdNavigateNext size={24} />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0 flex items-center justify-center gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            className={` rounded-full ${
              i === currentSlideIndex ? "bg-white p-[6px]" : "p-1 bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
