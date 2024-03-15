import Link from "next/link";
import { FaCaretDown } from "react-icons/fa";

export default function NavLinks({
  isScrolled,
  navLinks,
}: {
  isScrolled?: boolean;
  navLinks: { [key: string]: any };
}) {
  return (
    <div className="hidden lg:flex  items-stretch justify-evenly gap-0">
      <Link
        href={navLinks.home.link}
        className={`navLink h-full  w-full flex justify-center items-center text-start  ${
          isScrolled && "hover:text-black"
        }`}
      >
        {navLinks.home.name}
      </Link>

      <div className="dropDownContainer relative h-full flex justify-center items-stretch ">
        <div
          className={`flex justify-center  items-center  flex-nowrap h-full hover:text-[#e6272d] `}
        >
          <div className="navLink flex justify-center relative items-center">
            <span className={`  link-text  inline-block py-2 cursor-pointer `}>
              {navLinks.aboutUs.name}
            </span>
            <FaCaretDown size={13} className="navlinkDownIcon" />
          </div>
        </div>

        <div className=" dropDownLinks   absolute top-[100%] shadow-2xl   left-0   border-b-4 rounded border-red-500   text-gray-900 visible">
          <div className="dropDownLinks-x w-full h-full  relative  ">
            {navLinks.aboutUs.dropDown.map(
              (item: { [key: string]: any }, i: number) => (
                <Link key={i} href={item.link} className="navLinkInDrop">
                  {item.name}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
      <div className="dropDownContainer relative h-full flex justify-center items-stretch ">
        <div
          className={`flex justify-center  items-center  flex-nowrap h-full hover:text-[#e6272d] `}
        >
          <div className="navLink flex justify-center relative items-center">
            {" "}
            <span className={`    inline-block py-2 cursor-pointer `}>
              {navLinks.messages.name}
            </span>
            <FaCaretDown size={13} className="navlinkDownIcon" />
          </div>
        </div>

        <div className=" dropDownLinks   absolute top-[100%] shadow-2xl   left-0   border-b-4 rounded border-red-500   text-gray-900 visible">
          <div className="dropDownLinks-x w-full h-full  relative  ">
            {navLinks.messages.dropDown.map(
              (item: { [key: string]: any }, i: number) => (
                <Link key={i} href={item.link} className="navLinkInDrop">
                  {item.name}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
      <div className="dropDownContainer relative h-full flex justify-center items-stretch ">
        <div
          className={`flex justify-center  items-center  flex-nowrap h-full hover:text-[#e6272d] `}
        >
          <div className="navLink flex justify-center relative items-center">
            {" "}
            <span
              className={`  navlink-text  inline-block py-2  cursor-pointer `}
            >
              {navLinks.academics.name}
            </span>
            <FaCaretDown size={13} className="navlinkDownIcon" />
          </div>
        </div>

        <div className=" dropDownLinks   absolute top-[100%] shadow-2xl   left-0   border-b-4 rounded border-red-500   text-gray-900 visible">
          <div className="dropDownLinks-x w-full h-full  relative  ">
            {navLinks.academics.dropDown.map(
              (item: { [key: string]: any }, i: number) => (
                <Link key={i} href={item.link} className="navLinkInDrop">
                  {item.name}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
      <Link
        href={navLinks.facilities.link}
        className={`navLink w-full flex justify-center items-center text-start  ${
          isScrolled && "hover:text-black"
        }`}
        title="Home"
      >
        {navLinks.facilities.name}
      </Link>

      <div className="dropDownContainer relative h-full flex justify-center items-stretch ">
        <div
          className={`flex justify-center  items-center  flex-nowrap h-full hover:text-[#e6272d] `}
        >
          <div className="navLink flex justify-center relative items-center">
            {" "}
            <span className={`  link-text  inline-block py-2 cursor-pointer `}>
              {navLinks.gallery.name}
            </span>
            <FaCaretDown size={13} className="navlinkDownIcon" />
          </div>
        </div>

        <div className=" dropDownLinks min-w-[220px]   absolute top-[100%] shadow-2xl   left-0   border-b-4 rounded border-red-500   text-gray-900 visible">
          <div className="dropDownLinks-x w-full h-full  relative  ">
            {navLinks.gallery.dropDown.map(
              (item: { [key: string]: any }, i: number) => (
                <Link key={i} href={item.link} className="navLinkInDrop">
                  {item.name}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
      <Link
        href={navLinks.newsandevents.link}
        className={`navLink w-full flex justify-center items-center text-start  ${
          isScrolled && "hover:text-black"
        }`}
        title="Home"
      >
        {navLinks.newsandevents.name}
      </Link>
    </div>
  );
}
