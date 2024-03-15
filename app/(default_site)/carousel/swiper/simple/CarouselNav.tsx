"use client";
// Import Swiper React components
import banner1 from "@/public/mysore.jpeg";
import banner2 from "@/public/manali.jpeg";
import banner3 from "@/public/spaceman.jpg";
import Image from "next/image";

// SWIPER IMPORTS
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function PageName() {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
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
            src={banner3}
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
            src={banner3}
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
