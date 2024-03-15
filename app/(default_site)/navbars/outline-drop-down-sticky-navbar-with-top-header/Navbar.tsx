"use client";
import { useEffect, useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { FaBars } from "react-icons/fa";
import { Lato } from "next/font/google";

const font = Lato({ weight: "400", subsets: ["latin"] });

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  //don;t use div use react frogment bcz we must plac the navbar elements inside the main visible parent of our page

  return (
    <>
      <section
        id="topNavbar"
        className="w-full h-50  bg-blue bg-yellow-500/90 relative z-[999]"
      >
        topNavbar
      </section>
      <div
        id="mainNavBarBox"
        className={`w-full    sticky top-0 left-0 right-0 z-[998]`}
      >
        {/* <section id="mainNavBar" className={` w-full bg-red-500 z-[997]`}> */}
        <section
          id="mainNavBar"
          className={` mx-auto h-full bg-red-600  w-full xl:max-w-[1200px]  flex items-stretch lg:px-1   z-[997] `}
        >
          <div
            className={`min-w-[100%]    px-3   pb-1  flex items-center  text-gray-900 font-serif   ${font.className}  
      h-[50px]   
        `}
          >
            <div className=" w-full h-full flex items-center justify-between  bg-blue-600  ">
              {/* <NavLinks isScrolled={isScrolled} navLinks={navLinks} /> */}
              <div className="h-full w-[40px]  flex items-center justify-center  visible lg:hidden">
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

            <span className="mx-auto">mainNavBar</span>
          </div>
        </section>
        {/* <section
          id="dropDownNavbar"
          className={`bg-blue-500 w-full  h-[250px] absolute  left-0  ${
            open ? "top-[100%] " : " top-[-500px] "
          } visible transition-all duration-700 ease-in-out lg:hidden 
           py-2 pt-6 px-6 sm:px-12  font-sans text-sm z-[-1]
      `}
        > */}
        <section
          id="dropDownNavbar"
          className={`bg-blue-300 w-full  h-[250px] absolute  left-0  ${
            open ? "top-[100%] " : " top-[-500px] "
          } visible transition-all duration-700 ease-in-out lg:hidden  py-2 pt-6 px-6 sm:px-12  font-sans 
          text-sm z-[-1]
      `}
        >
          dropDownNavbar
        </section>
      </div>
    </>
  );
}
