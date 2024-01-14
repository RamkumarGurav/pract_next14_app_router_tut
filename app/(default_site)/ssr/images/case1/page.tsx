import Image from "next/image";
import myImage from "@/public/spaceman.jpg";
import { getBase64 } from "@/utils/base64Converters";
export default async function MyImages() {
  //making the custom blurDataURl using plaiceholder package
  const myCustomBlurDataUrl = await getBase64(
    "https://images.unsplash.com/photo-1502201388237-dd1dde0ffba9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );

  ///----------GENERATING COLORED LOADING PHOTO
  // Pixel GIF code adapted from https://stackoverflow.com/a/33919020/266535
  const keyStr =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

  const triplet = (e1: number, e2: number, e3: number) =>
    keyStr.charAt(e1 >> 2) +
    keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
    keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
    keyStr.charAt(e3 & 63);

  //this for blurDataURL if we have placeholder as 'blur'
  // if we want to give the image and then blur it use this
  const rgbDataURL = (r: number, g: number, b: number) =>
    `data:image/gif;base64,R0lGODlhAQABAPAA${
      triplet(0, r, g) + triplet(b, 255, 255)
    }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

  //this is for placeholder , when we want to show the already blurred or has some shimmer effect image/gif we use this
  const base64RgbData = (r: number, g: number, b: number) =>
    `R0lGODlhAQABAPAA${
      triplet(0, r, g) + triplet(b, 255, 255)
    }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

  ///---GENERATING SHIMMERED LOADING PHOTO
  //this is for placeholder , when we want to show  the image/gif thas  already has the blurred or has some shimmer effect we use this
  const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#f5f5f5" offset="20%" />
      <stop stop-color="#cdced0" offset="50%" />
      <stop stop-color="#f5f5f5" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#f5f5f5" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

  const toBase64 = (str: string) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);
  return (
    <div className=" flex flex-col justify-center items-center p-20">
      <h1 className="my-4 text-center text-2xl font-bold">
        case-1 : Statically imported image from local files ,No need to specify
        width(attribute) and heigth(attribute) attributes - its responsive
        without any particular width(style) and heigth(style) - it acts like a
        normal div with content - its real height and width is the real height
        and width of the real image{" "}
      </h1>
      <Image
        src={myImage}
        alt="pagination"
        priority={true}
        className="h-auto w-auto"
      />

      <h1 className="my-4 text-center text-2xl font-bold">
        case-1a : Statically imported image from local files ,No need to specify
        width and heigth attribute - when we give height(style) and width(style)
        without object-cover we loose aspect ratio
      </h1>
      <Image src={myImage} alt="pagination" className="w-[600px] h-[150px]" />

      <h1 className="my-4 text-center text-2xl font-bold">
        case-1b : Statically imported image from local files ,No need to specify
        width and heigth attribute - when we give height and width with
        object-cover we dont loose aspect ratio
      </h1>
      <Image
        src={myImage}
        alt="pagination"
        className="w-[600px] h-[150px] object-cover"
      />
      <h1 className="my-4 text-center text-2xl font-bold">
        case-1c : Statically imported image from local files ,No need to specify
        width and heigth attribute - using fill to fill the parent with our
        image ,here Parent component should be positioned
        relative/absolute/fixed - here if we dont specify object-cover in the
        image component then we loose the aspect ratio
      </h1>
      <h1>
        A boolean that causes the image to fill the parent element, which is
        useful when the width and height are unknown and The parent element must
        assign position: relative, position: fixed, or position: absolute style.
      </h1>
      <h1>
        If no styles are applied to the image, the image will stretch to fit the
        container. You may prefer to set object-fit: contain for an image which
        is letterboxed to fit the container and preserve aspect ratio.
        Alternatively, object-fit: cover will cause the image to fill the entire
        container and be cropped to preserve aspect ratio. For this to look
        correct, the overflow: hidden style should be assigned to the parent
        element.
      </h1>
      <div
        id="image-container"
        className="relative w-[600px] h-[150px] border-2 border-blue-500 "
      >
        <Image src={myImage} alt="pagination" fill />
      </div>
      <h1 className="my-4 text-center text-2xl font-bold">
        case-1d : Statically imported image from local files ,No need to specify
        width and heigth attribute - using fill to fill the parent with our
        image ,here Parent component should be positioned
        relative/absolute/fixed - here if we specify object-cover in the image
        component then we dont loose the aspect ratio
      </h1>
      <div
        id="image-container"
        className="relative w-[600px] h-[150px] overflow-hidden"
      >
        <Image src={myImage} alt="pagination" fill className="object-cover" />
      </div>
      <h1 className="my-4 text-center text-2xl font-bold">
        case-1e : Statically imported image from local files ,No need to specify
        width and heigth attribute - using fill to fill the parent with our
        image ,here Parent component should be positioned
        relative/absolute/fixed - here if we specify object-cover in the image
        component then we dont loose the aspect ratio
      </h1>
      <h1 className="my-4 text-center text-2xl font-bold">
        when we give placeholder as empty then until image gets populated it
        will be empty(placeholder as empty is a default value)
      </h1>
      <div
        id="image-container"
        className="relative w-[600px] h-[150px] overflow-hidden"
      >
        <Image
          src={myImage}
          alt="pagination"
          fill
          className="object-cover"
          placeholder="empty"
        />
      </div>
      <h1 className="my-4 text-center text-2xl font-bold">
        case-1f : Statically imported image from local files ,No need to specify
        width and heigth attribute - using fill to fill the parent with our
        image ,here Parent component should be positioned
        relative/absolute/fixed - here if we specify object-cover in the image
        component then we dont loose the aspect ratio
      </h1>
      <h1 className="my-4 text-center text-xl font-bold">
        when we give placeholder as blur then until image gets populated it will
        show the blurred image.
      </h1>
      <h1 className="my-4 text-center text-xl font-bold">
        When blur, the blurDataURL property will be used as the placeholder. If
        src is an object from a static import and the imported image is .jpg,
        .png, .webp, or .avif, then blurDataURL will be automatically populated,
        except when the image is detected to be animated.
      </h1>
      <div
        id="image-container"
        className="relative w-[600px] h-[150px] overflow-hidden"
      >
        <Image
          src={myImage}
          alt="pagination"
          fill
          className="object-cover "
          placeholder="blur"
        />
      </div>

      <h1 className="my-4 text-center text-2xl font-bold">
        case-2 : ralitive images from local files ,we need to specify
        width(attribute) and heigth(attribute) attribute (otherwise we get
        error)
      </h1>
      <Image src="/mysore.jpeg" alt="pagination" width={500} height={700} />
      <h1 className="my-4 text-center text-2xl font-bold">
        case-2a : ralitive images from local files ,we need to specify
        width(attribute) and heigth(attribute) attribute (otherwise we get
        error) - when we give height(style) and width(style) without
        object-cover we loose aspect ratio
      </h1>
      <Image
        src="/mysore.jpeg"
        alt="pagination"
        width={500}
        height={700}
        className="w-[600px] h-[150px] "
      />
      <h1 className="my-4 text-center text-2xl font-bold">
        case-2b : ralitive images from local files ,we need to specify
        width(attribute) and heigth(attribute) attribute (otherwise we get
        error) - when we give height(style) and width(style) with object-cover
        we dont loose aspect ratio
      </h1>
      <Image
        src="/mysore.jpeg"
        alt="pagination"
        width={500}
        height={700}
        className="w-[600px] h-[150px] object-cover"
        placeholder="blur"
        blurDataURL={rgbDataURL(220, 220, 220)}
      />
      <h1 className="my-4 text-center text-2xl font-bold">
        case-2c : relative image from local files ,we dont need to specify width
        and heigth attributes bcz we are using fill - using fill to fill the
        parent with our image ,here Parent component should be positioned
        relative - here if we dont specify object-cover in the image component
        then we loose the aspect ratio
      </h1>
      <div id="image-container" className="relative w-[600px] h-[150px]">
        <Image
          src="/mysore.jpeg"
          alt="pagination"
          fill
          className="w-auto h-auto"
        />
      </div>
      <h1 className="my-4 text-center text-2xl font-bold">
        case-2d : relative image from local files ,we dont need to specify width
        and heigth attributes bcz we are using fill - using fill to fill the
        parent with our image ,here Parent component should be positioned
        relative - here if we specify object-cover in the image component then
        we dont loose the aspect ratio
      </h1>
      <div id="image-container" className="relative w-[600px] h-[150px]">
        <Image
          src="/mysore.jpeg"
          alt="pagination"
          fill
          className="object-cover"
        />
      </div>
      <h1 className="my-4 text-center text-2xl font-bold">
        case-2e : relative image from local files ,we dont need to specify width
        and heigth attributes bcz we are using fill - using fill to fill the
        parent with our image ,here Parent component should be positioned
        relative - here if we specify object-cover in the image component then
        we dont loose the aspect ratio
      </h1>
      <h1 className="my-4 text-center text-2xl font-bold">
        when we give placeholder as empty then until image gets populated it
        will be empty(placeholder as empty is a default value)
      </h1>
      <div id="image-container" className="relative w-[600px] h-[150px]">
        <Image
          src="/mysore.jpeg"
          alt="pagination"
          fill
          className="object-cover"
          placeholder="empty"
        />
      </div>
      <h1 className="my-4 text-center text-2xl font-bold">
        case-2f: relative image from local files ,we dont need to specify width
        and heigth attributes bcz we are using fill - using fill to fill the
        parent with our image ,here Parent component should be positioned
        relative - here if we specify object-cover in the image component then
        we dont loose the aspect ratio
      </h1>
      <h1 className="my-4 text-center text-xl font-bold">
        when we give placeholder as blur then until image gets populated it will
        show the blurred image.since its not statically imported image we need
        to provide the blurDataURL along with the placeholder,Here I used the a
        function a generate a url of the image using rgb values
      </h1>
      <div id="image-container" className="relative w-[600px] h-[150px]">
        <Image
          src="/mysore.jpeg"
          alt="pagination"
          fill
          className="object-cover"
          placeholder="blur"
          blurDataURL={rgbDataURL(220, 220, 220)}
        />
      </div>
      <h1 className="my-4 text-center text-2xl font-bold">
        case-2g: relative image from local files ,we dont need to specify width
        and heigth attributes bcz we are using fill - using fill to fill the
        parent with our image ,here Parent component should be positioned
        relative - here if we specify object-cover in the image component then
        we dont loose the aspect ratio
      </h1>
      <h1 className="my-4 text-center text-xl font-bold">
        we can add shimmer effect as a loading photo in place of placeholder
      </h1>
      <div id="image-container" className="relative w-[600px] h-[150px]">
        <Image
          src="/mysore.jpeg"
          alt="pagination"
          fill
          className="object-cover"
          placeholder={`data:image/svg+xml;base64,${toBase64(
            shimmer(700, 475)
          )}`}
        />
      </div>
      <h1 className="my-4 text-center text-2xl font-bold">
        case-3 : Dynamic images from web , the urls protocol and hostname must
        be provided inside the remotePatterns array of images object in
        next.config file,we need to specify width(attribute) and
        heigth(attribute) attribute (otherwise we get error)
      </h1>
      <Image
        src="https://images.unsplash.com/photo-1502201388237-dd1dde0ffba9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="pagination"
        width={500}
        height={700}
      />
      <h1 className="my-4 text-center text-2xl font-bold">
        case-3a: Dynamic images from web , the urls protocol and hostname must
        be provided inside the remotePatterns array of images object in
        next.config file ,we need to specify width(attribute) and
        heigth(attribute) attribute (otherwise we get error) - when we give
        height(style) and width(style) without object-cover we loose aspect
        ratio
      </h1>
      <Image
        src="https://images.unsplash.com/photo-1502201388237-dd1dde0ffba9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="pagination"
        width={500}
        height={700}
        className="w-[600px] h-[150px] "
      />
      <h1 className="my-4 text-center text-2xl font-bold">
        case-3b : Dynamic images from web , the urls protocol and hostname must
        be provided inside the remotePatterns array of images object in
        next.config file ,we need to specify width(attribute) and
        heigth(attribute) attribute (otherwise we get error) - when we give
        height(style) and width(style) with object-cover we dont loose aspect
        ratio
      </h1>
      <Image
        src="https://images.unsplash.com/photo-1502201388237-dd1dde0ffba9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="pagination"
        width={500}
        height={700}
        className="w-[600px] h-[150px] object-cover"
      />
      <h1 className="my-4 text-center text-2xl font-bold">
        case-3c : dynamic image from web ,we dont need to specify width and
        heigth attributes bcz we are using fill - using fill to fill the parent
        with our image ,here Parent component should be positioned
        relative/absolute/fixed - here if we dont specify object-cover in the
        image component then we loose the aspect ratio
      </h1>
      <div id="image-container" className="relative w-[600px] h-[150px]">
        <Image
          src="https://images.unsplash.com/photo-1502201388237-dd1dde0ffba9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="pagination"
          fill
        />
      </div>
      <h1 className="my-4 text-center text-2xl font-bold">
        case-3d : dynamic image from web ,we dont need to specify width and
        heigth attributes bcz we are using fill - using fill to fill the parent
        with our image ,here Parent component should be positioned
        relative/absolute/fixed - here if we specify object-cover in the image
        component then we dont loose the aspect ratio
      </h1>
      <div id="image-container" className="relative w-[600px] h-[150px]">
        <Image
          src="https://images.unsplash.com/photo-1502201388237-dd1dde0ffba9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="pagination"
          fill
          className="object-cover"
        />
      </div>

      <h1 className="my-4 text-center text-2xl font-bold">
        case-3e : dynamic image from web ,we dont need to specify width and
        heigth attributes bcz we are using fill - using fill to fill the parent
        with our image ,here Parent component should be positioned relative -
        here if we specify object-cover in the image component then we dont
        loose the aspect ratio
      </h1>
      <h1 className="my-4 text-center text-2xl font-bold">
        when we give placeholder as empty then until image gets populated it
        will be empty(placeholder as empty is a default value)
      </h1>
      <div id="image-container" className="relative w-[600px] h-[150px]">
        <Image
          src="https://images.unsplash.com/photo-1502201388237-dd1dde0ffba9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="pagination"
          fill
          className="object-cover"
          placeholder="empty"
        />
      </div>
      <h1 className="my-4 text-center text-2xl font-bold">
        case-3f: dynamic image from web ,we dont need to specify width and
        heigth attributes bcz we are using fill - using fill to fill the parent
        with our image ,here Parent component should be positioned relative -
        here if we specify object-cover in the image component then we dont
        loose the aspect ratio
      </h1>
      <h1 className="my-4 text-center text-xl font-bold">
        when we give placeholder as blur then until image gets populated it will
        show the blurred image.since its not statically imported image we need
        to provide the blurDataURL along with the placeholder,Here I used a
        function a generate a url of the image using rgb values
      </h1>
      <div id="image-container" className="relative w-[600px] h-[150px]">
        <Image
          src="https://images.unsplash.com/photo-1502201388237-dd1dde0ffba9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="pagination"
          fill
          className="object-cover"
          placeholder="blur"
          blurDataURL={rgbDataURL(220, 220, 220)}
        />
      </div>
      <h1 className="my-4 text-center text-2xl font-bold">
        case-3g: dynamic image from web ,we dont need to specify width and
        heigth attributes bcz we are using fill - using fill to fill the parent
        with our image ,here Parent component should be positioned relative -
        here if we specify object-cover in the image component then we dont
        loose the aspect ratio
      </h1>
      <h1 className="my-4 text-center text-xl font-bold">
        we create our own custome blurDataURL using the npm package plaiceholder
        and use it when we placeholder as blur and provide our custom
        blurDataURL to blurDataUrl attribute
      </h1>
      <div id="image-container" className="relative w-[600px] h-[150px]">
        <Image
          src="https://images.unsplash.com/photo-1502201388237-dd1dde0ffba9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="pagination"
          fill
          className="object-cover"
          placeholder="blur"
          blurDataURL={myCustomBlurDataUrl}
        />
      </div>
      <h1 className="my-4 text-center text-2xl font-bold">
        case-3h: dynamic image from web ,we dont need to specify width and
        heigth attributes bcz we are using fill - using fill to fill the parent
        with our image ,here Parent component should be positioned relative -
        here if we specify object-cover in the image component then we dont
        loose the aspect ratio
      </h1>
      <h1 className="my-4 text-center text-xl font-bold">
        we can directly give the dataUrl to placeholder if we already have a
        blurred image or gif that has shimmiring effect (when we give
        placeholder as blur and dataUrl with dataUrl our browser or nodejs adds
        blur to our image )
      </h1>
      <div id="image-container" className="relative w-[600px] h-[150px]">
        <Image
          src="https://images.unsplash.com/photo-1502201388237-dd1dde0ffba9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="pagination"
          fill
          className="object-cover"
          placeholder={`data:image/gif;base64,${base64RgbData}`}
        />
      </div>
      <h1 className="my-4 text-center text-2xl font-bold">
        case-3i: dynamic image from web ,we dont need to specify width and
        heigth attributes bcz we are using fill - using fill to fill the parent
        with our image ,here Parent component should be positioned relative -
        here if we specify object-cover in the image component then we dont
        loose the aspect ratio
      </h1>
      <h1 className="my-4 text-center text-xl font-bold">
        we can directly give the dataUrl to placeholder if we already have a
        blurred image or gif that has shimmiring effect (when we give
        placeholder as blur and dataUrl with dataUrl our browser or nodejs adds
        blur to our image )
      </h1>
      <div id="image-container" className="relative w-[600px] h-[150px]">
        <Image
          src="https://images.unsplash.com/photo-1502201388237-dd1dde0ffba9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="pagination"
          fill
          className="object-cover"
          placeholder={`data:image/svg+xml;base64,${toBase64(
            shimmer(700, 475)
          )}`}
        />
      </div>
    </div>
  );
}
