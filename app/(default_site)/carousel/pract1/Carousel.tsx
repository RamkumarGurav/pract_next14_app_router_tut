"use client";
import { useEffect, useState } from "react";

export default function Carousel({
  children,
  slidesArr,
  autoPlay = true,
  interval = 3000,
}: {
  children: React.ReactNode;
  slidesArr: any[];
  autoPlay?: boolean;
  interval?: number;
}) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  console.log("autoPlay", autoPlay);

  const nextSlide = () => {
    setActiveSlideIndex(
      activeSlideIndex < slidesArr.length - 1 ? activeSlideIndex + 1 : 0
    );
  };

  const prevSlide = () => {
    setActiveSlideIndex(
      activeSlideIndex < slidesArr.length - 1 ? activeSlideIndex + 1 : 0
    );
  };

  useEffect(() => {
    if (!autoPlay) return;
    const intervalId = setInterval(() => nextSlide(), interval);

    return () => clearInterval(intervalId);
  }, [activeSlideIndex, autoPlay, interval]);

  console.log("activeSlideIndex", activeSlideIndex);
  return (
    <div id="carousel-shell" className="container mx-auto ">
      <div
        id="carousel-container"
        className="relative mx-auto border-2 border-gray-400  overflow-hidden"
      >
        <div
          className="flex items-center transform transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${100 * activeSlideIndex}%)` }}
        >
          {children}
        </div>
        <div
          id="carousel-prev-next-box"
          className="absolute inset-0  flex justify-between items-stretch "
        >
          <div className=" pl-2 flex justify-center items-center ">
            <button
              className="w-10 h-10  rounded-full bg-gray-800 hover:bg-gray-700 text-gray-100 font-bold"
              onClick={() =>
                setActiveSlideIndex(
                  activeSlideIndex > 0
                    ? activeSlideIndex - 1
                    : slidesArr.length - 1
                )
              }
            >
              &lt;
            </button>
          </div>
          <div className="pr-2 flex justify-center items-center ">
            <button
              className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-100 text-gray-900"
              onClick={() =>
                setActiveSlideIndex(
                  activeSlideIndex < slidesArr.length - 1
                    ? activeSlideIndex + 1
                    : 0
                )
              }
            >
              &gt;
            </button>
          </div>
        </div>
        <div
          id="carousel-nav-box"
          className="absolute bottom-4 left-0 right-0 flex justify-center items-center gap-1"
        >
          {slidesArr.map((item, i) => (
            <div key={i} className="w-3 flex justify-center items-center">
              <div
                className={` rounded-full ${
                  i === activeSlideIndex
                    ? "p-[6px] bg-gray-300"
                    : "p-[4px] bg-gray-500"
                }`}
                onClick={() => setActiveSlideIndex(i)}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
