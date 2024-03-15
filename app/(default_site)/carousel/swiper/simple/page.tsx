import Carousel from "./Carousel";
import CarouselAuto from "./CarouselAuto";
import CarouselLoop from "./CarouselLoop";
import CarouselLoopNav from "./CarouselLoopNav";
import CarouselLoopNavPag from "./CarouselLoopNavPag";
import CarouselLoopNavPagAuto from "./CarouselLoopNavPagAuto";
import CarouselNav from "./CarouselNav";
import CarouselNavAuto from "./CarouselNavAuto";
import CarouselNavPagination from "./CarouselNavPagination";
import CarouselNavPaginationAuto from "./CarouselNavPaginationAuto";
import styles from "./styles.module.css";

export default function PageName() {
  return (
    <div className={`${styles.bgm_red}`}>
      <h1 className="m-5 text-center ">SIMPLE WITHOUT ANY FEATURES</h1>
      <Carousel />
      <h1 className="m-5 text-center">SIMPLE WITH AUTOPLAY</h1>
      <CarouselAuto />
      <h1 className="m-5 text-center">SIMPLE WITH ONLY NAVIGATION</h1>
      <CarouselNav />
      <h1 className="m-5 text-center">SIMPLE WITH NAVIGATION AND AUTOPLAY</h1>
      <CarouselNavAuto />
      <h1 className="m-5 text-center">
        SIMPLE WITH ONLY NAVIGATION + PAGINATION{" "}
      </h1>
      <CarouselNavPagination />
      <h1 className="m-5 text-center">
        SIMPLE WITH ONLY NAVIGATION AND PAGINATION AND AUTOPLAY{" "}
      </h1>
      <CarouselNavPaginationAuto />
      <h1 className="m-5 text-center">SIMPLE LOOP </h1>
      <CarouselLoop />
      <h1 className="m-5 text-center">SIMPLE LOOP + NAVIGATION </h1>
      <CarouselLoopNav />
      <h1 className="m-5 text-center">SIMPLE LOOP + NAVIGATION + PAGINATION</h1>
      <CarouselLoopNavPag />
      <h1 className="m-5 text-center">
        SIMPLE LOOP + NAVIGATION + PAGINATION + AUTOPLAY
      </h1>
      <CarouselLoopNavPagAuto />
    </div>
  );
}
