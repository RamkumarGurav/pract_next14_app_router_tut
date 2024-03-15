import Image from "next/image";

export default function Card({
  imageDetails,
}: {
  imageDetails: { src: string; blurDataUrl: string | undefined };
}) {
  return (
    // Main container for the card
    <div
      id="card-shell"
      className="@container w-full  rounded border border-gray-500  shadow-lg"
    >
      {/* Container for the card's content */}
      <div id="card-container" className="  w-full h-full @md:flex ">
        {/* Container for the image */}
        <div
          id="image-container"
          className="relative min-h-[180px] @md:min-w-[40%] @md:h-full overflow-hidden "
        >
          {/* Image component using Tailwind classes */}
          <Image
            // Source of the image
            src={imageDetails.src}
            alt="pagination"
            fill
            sizes="500px"
            // Tailwind classes for styling the image
            className="object-cover hover:scale-[1.2] hover:rotate-2 transition-all duration-[1s] ease-in-out"
            // Placeholder for the image
            placeholder="blur"
            blurDataURL={imageDetails.blurDataUrl}
          />
        </div>
        {/* Container for text content */}
        <div className="p-2 w-full flex flex-col justify-center items-center">
          {/* Heading for the card */}
          <h1 className="text-center text-xl font-bold">This is the Card</h1>
          {/* Paragraph for description */}
          <p className="text-gray-700 mt-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos nisi
            asperiores, delectus aut provident nam rem nobis culpa eius, hic
            impedit laborum! Laboriosam alias dolor facere eos quisquam natus
            odit maxime eum quam rerum.
          </p>
        </div>
      </div>
    </div>
  );
}
