import Image from "next/image";
export default function PageName() {
  return (
    <div className="py-8 space-y-4">
      <section className="border-2 border-gray-400">
        <h1 className="text-center font-semibold ">blur-sm</h1>
        <div className="blur-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa enim
          quaerat molestiae laudantium! Dolore blanditiis quidem perferendis
          unde, pariatur consequatur illum, ab possimus exercitationem totam
          voluptatum, vel nobis harum quos!
        </div>
        <h1 className="text-center font-semibold ">blur</h1>
        <div className="blur">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa enim
          quaerat molestiae laudantium! Dolore blanditiis quidem perferendis
          unde, pariatur consequatur illum, ab possimus exercitationem totam
          voluptatum, vel nobis harum quos!
        </div>
        <h1 className="text-center font-semibold ">blur-xl</h1>
        <div className="blur-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa enim
          quaerat molestiae laudantium! Dolore blanditiis quidem perferendis
          unde, pariatur consequatur illum, ab possimus exercitationem totam
          voluptatum, vel nobis harum quos!
        </div>
        <h1 className="text-center font-semibold ">blur</h1>
        <div
          id="image-container"
          className="mx-auto relative w-[600px] h-[150px] blur"
        >
          <Image
            src="/mysore.jpeg"
            alt="pagination"
            fill
            className="object-cover"
          />
        </div>
        <h1 className="text-center font-semibold ">brightness-50</h1>
        <div
          id="image-container"
          className="mx-auto relative w-[600px] h-[150px] brightness-50"
        >
          <Image
            src="/mysore.jpeg"
            alt="pagination"
            fill
            className="object-cover"
          />
        </div>
        <h1 className="text-center font-semibold ">brightness-200</h1>
        <div
          id="image-container"
          className="mx-auto relative w-[600px] h-[150px] brightness-200"
        >
          <Image
            src="/mysore.jpeg"
            alt="pagination"
            fill
            className="object-cover"
          />
        </div>
        <h1 className="text-center font-semibold ">contnrast-50</h1>
        <div
          id="image-container"
          className="mx-auto relative w-[600px] h-[150px] contrast-50"
        >
          <Image
            src="/mysore.jpeg"
            alt="pagination"
            fill
            className="object-cover"
          />
        </div>
        <h1 className="text-center font-semibold ">contnrast-200</h1>
        <div
          id="image-container"
          className="mx-auto relative w-[600px] h-[150px] contrast-200"
        >
          <Image
            src="/mysore.jpeg"
            alt="pagination"
            fill
            className="object-cover"
          />
        </div>
        <h1 className="text-center font-semibold ">grayscale</h1>
        <div
          id="image-container"
          className="mx-auto relative w-[600px] h-[150px] grayscale"
        >
          <Image
            src="/mysore.jpeg"
            alt="pagination"
            fill
            className="object-cover"
          />
        </div>
        <h1 className="text-center font-semibold ">sepia</h1>
        <div
          id="image-container"
          className="mx-auto relative w-[600px] h-[150px] sepia"
        >
          <Image
            src="/mysore.jpeg"
            alt="pagination"
            fill
            className="object-cover"
          />
        </div>
      </section>
    </div>
  );
}
