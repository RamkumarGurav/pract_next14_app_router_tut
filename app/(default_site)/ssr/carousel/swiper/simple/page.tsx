import Carousel from "./Carousel";
import CarouselAuto from "./CarouselAuto";
import CarouselNav from "./CarouselNav";
import CarouselNavAuto from "./CarouselNavAuto";
import CarouselNavPagination from "./CarouselNavPagination";
import CarouselNavPaginationAuto from "./CarouselNavPaginationAuto";

export default function PageName() {
  return (
    <div>
      <h1 className="m-5 text-center">SIMPLE WITHOUT ANY FEATURES</h1>
      <Carousel />
      <h1 className="m-5 text-center">SIMPLE WITH AUTOPLAY</h1>
      <CarouselAuto />
      <h1 className="m-5 text-center">SIMPLE WITH ONLY NAVIGATION</h1>
      <CarouselNav />
      <h1 className="m-5 text-center">SIMPLE WITH NAVIGATION AND AUTOPLAY</h1>
      <CarouselNavAuto />
      <h1 className="m-5 text-center">
        SIMPLE WITH ONLY NAVIGATION AND PAGINATION{" "}
      </h1>
      <CarouselNavPagination />
      <h1 className="m-5 text-center">
        SIMPLE WITH ONLY NAVIGATION AND PAGINATION AND AUTOPLAY{" "}
      </h1>
      <CarouselNavPaginationAuto />
    </div>
  );
}
