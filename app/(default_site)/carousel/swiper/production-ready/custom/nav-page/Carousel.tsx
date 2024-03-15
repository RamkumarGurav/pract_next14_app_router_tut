"use client";
// Import Swiper React components
import banner1 from "@/public/mysore.jpeg";
import banner2 from "@/public/manali.jpeg";
import banner3 from "@/public/spaceman.jpg";
import Image from "next/image";
import { IoCaretForward, IoCaretBack } from "react-icons/io5";
// SWIPER IMPORTS
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useCallback, useRef } from "react";
export default function Carousel() {
  const swiperRef = useRef<SwiperType>();

  return (
    <div className="customSwiperContainer relative ">
      <style global jsx>{`
        span.swiper-pagination-bullet {
          background-color: rgb(0, 0, 0) !important;
          opacity: 0.6 !important;
        }

        span.swiper-pagination-bullet.swiper-pagination-bullet-active {
          background-color: white !important;
          display: inline-block;
          width: 10px !important;
          height: 10px !important;
          border: 2px white solid !important;
        }
      `}</style>
      <Swiper
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        speed={800}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper "
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <SwiperSlide>
          <Image
            src={banner1}
            alt="banner"
            className="w-full h-[420px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={banner2}
            alt="banner"
            className="w-full h-[420px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={banner3}
            alt="banner"
            className="w-full h-[420px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={banner1}
            alt="banner"
            className="w-full h-[420px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={banner2}
            alt="banner"
            className="w-full h-[420px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={banner3}
            alt="banner"
            className="w-full h-[420px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={banner1}
            alt="banner"
            className="w-full h-[420px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={banner2}
            alt="banner"
            className="w-full h-[420px] object-cover"
          />
        </SwiperSlide>
      </Swiper>
      <div className="btnsContainer  ">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute top-[50%] left-2 z-[999] "
        >
          <IoCaretBack
            size={50}
            className="text-gray-600 hover:text-gray-800"
          />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute top-[50%] right-2 z-[999] text-gray-600 hover:text-gray-800"
        >
          <IoCaretForward size={50} />
        </button>
      </div>
      <div></div>
    </div>
  );
}
