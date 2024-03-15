"use client";
// Import Swiper React components
import banner1 from "@/public/mysore.jpeg";
import banner2 from "@/public/manali.jpeg";
import banner3 from "@/public/spaceman.jpg";
import banner4 from "@/public/assets/earphones_a_4.webp";
import banner6 from "@/public/assets/earphones_a_5.webp";
import Image from "next/image";

// SWIPER IMPORTS
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function PageName() {
  return (
    <div>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src={banner1}
            alt="banner"
            className="w-full h-[300px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={banner2}
            alt="banner"
            className="w-full h-[300px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={banner1}
            alt="banner"
            className="w-full h-[300px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={banner2}
            alt="banner"
            className="w-full h-[300px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={banner1}
            alt="banner"
            className="w-full h-[300px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={banner2}
            alt="banner"
            className="w-full h-[300px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={banner1}
            alt="banner"
            className="w-full h-[300px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={banner2}
            alt="banner"
            className="w-full h-[300px] object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
