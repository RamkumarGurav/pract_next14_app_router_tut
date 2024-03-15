import Carousel from "./Carousel";

export default function PageName() {
  return (
    <div>
      <h1 className="m-5 font-semibold text-center uppercase bgm-red">
        custom slides per view with loop nav ,pagination and autoplay
      </h1>
      <p className="text-red-500 text-center font-semibold">
        (if you don't want autoplay or pagination just comment out the
        attributes on swiper element)
      </p>
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
