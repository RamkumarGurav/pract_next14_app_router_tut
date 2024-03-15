// pages/GalleryPage.tsx
import ImageCarousel from "./Carousel";

const GalleryPage = () => {
  const images = ["blue", "green", "yellow", "gray"];
  return (
    <div className=" py-10 flex items-center justify-center">
      <ImageCarousel slides={images} />
    </div>
  );
};

export default GalleryPage;
