"use client";
import Carousel from "./Carousel";

export default function PageName() {
  return (
    <div>
      <h1 className="m-5 text-center uppercase bgm-red">
        custom nav-page with loop and autoplay{" "}
      </h1>
      <p>Add below css to global.css file </p>
      <p>
        .swiper-button-prev &#123; display: none !important; opacity: 0
        !important; &#125;{" "}
      </p>
      <p>
        .swiper-button-next &#123; display: none !important; opacity: 0
        !important; &#125;
      </p>
      <Carousel />
    </div>
  );
}
