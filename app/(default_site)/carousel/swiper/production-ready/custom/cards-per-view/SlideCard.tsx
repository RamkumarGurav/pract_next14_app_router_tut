import Image from "next/image";

export default function SlideCard({
  imageDetails,
}: {
  imageDetails?: { src: string; blurDataUrl: string | undefined };
}) {
  return (
    // Main container for the card
    <div className="border-2 bg-blue-300 border-yellow-900 w-full h-full ">
      Card
    </div>
  );
}
