"use client";
import Image from "next/image";
import Logo from "@/public/logo_rb2.png";
import { useEffect, useRef, useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { GrFormClose } from "react-icons/gr";
import { FaBars } from "react-icons/fa";
import SideNav from "./DropDown";
import NavLinks from "./NavLinks";
import Link from "next/link";
import HeaderTop from "./HeaderTop";
import DropDown from "./DropDown";
import { Lato } from "next/font/google";

const font = Lato({ weight: "400", subsets: ["latin"] });

export default function Navbar({
  navLinks,
  contactUs,
}: {
  navLinks: { [key: string]: any };
  contactUs: { [key: string]: any };
}) {
  const [open, setOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const mainNavBarRef = useRef<HTMLDivElement>(null);
  const [navLinkName, setNavLinkName] = useState("");
  const handleOpen = () => {
    setOpen(!open);
  };

  const handleNavLinkName = (name: string) => {
    setNavLinkName((prevName) => (prevName === name ? "" : name));
  };

  useEffect(() => {
    if (!open) {
      setNavLinkName("");
    }
  }, [open]);

  useEffect(() => {
    if (!mainNavBarRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      ([event]) => setIsSticky(event.intersectionRatio < 1),
      { threshold: [1], rootMargin: "-1px 0px 0px 0px" }
    );
    observer.observe(mainNavBarRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <HeaderTop contactUs={contactUs} />

      <div
        className={`min-w-[100%]  sticky top-0 left-0 right-0    
         
        flex items-center text-gray-900 font-serif   h-full  ${font.className}  shadow-b
         z-[998]
        `}
        ref={mainNavBarRef}
      >
        <div
          className={`wrapperToMakeZindexWork w-full h-full  bg-yellow-muted  px-3 pb-1 lg:px-1
         z-[997]`}
        >
          <div className=" w-full h-full  flex  justify-between    ">
            <Link href="/" className="p-1">
              <Image
                src={Logo}
                alt="logo"
                width={200}
                height={200}
                className={`w-auto object-cover   ${
                  isSticky ? " h-[56px] sm:h-[71px]" : " h-[46px] sm:h-[61px]"
                } transition-all`}
                placeholder="blur"
              />
            </Link>
            <NavLinks navLinks={navLinks} />
            <div className=" w-[50px]  flex items-center justify-center   lg:hidden">
              {!open ? (
                <FaBars
                  size={30}
                  onClick={handleOpen}
                  className="visible lg:hidden cursor-pointer   "
                />
              ) : (
                <GrFormClose
                  size={40}
                  onClick={handleOpen}
                  className="visible lg:hidden cursor-pointer font-bolder  "
                />
              )}
            </div>
          </div>
        </div>

        <DropDown
          open={open}
          navLinkName={navLinkName}
          handleNavLinkName={handleNavLinkName}
          handleOpen={handleOpen}
          navLinks={navLinks}
        />
      </div>
    </>
  );
}
