"use client";

import Link from "next/link";
import { useState } from "react";
import { Crushed } from "next/font/google";
const font = Crushed({ weight: "400", subsets: ["latin"] });
export default function EnquireForm({
  admissionYear,
}: {
  admissionYear: string;
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <>
      <div
        className={`${font.className} visible fixed bottom-0 left-0 right-0 w-full sm:hidden z-[999] `}
      >
        <div
          className="flex justify-center items-center gap-1 bg-[#E92226] text-white p-4 py-2 cursor-pointer"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <span className={` grid place-content-center font-sans `}>
            Admissions Open {admissionYear} x
          </span>
        </div>
      </div>

      <div
        className="fixed left-auto right-[-80px] top-[250px]  transform rotate-[-90deg]
         bg-red-600 py-[11px] px-[19px] text-sm text-white font-sans font-semibold z-[99] cursor-pointer hidden sm:flex"
        onClick={() => {
          setOpen(!open);
        }}
      >
        Admissions Open {admissionYear}
      </div>

      <div
        className={`fixed ${
          open ? "right-0 sm:right-[0px]" : "right-[-100vw] sm:right-[-300px]"
        } top-0 sm:top-[130px] w-[100vw] h-[100vh]  border border-gray-200 border-t-0   sm:h-auto sm:w-[300px] sm:flex transition-all ease-in-out duration-700 z-[999]  bg-white shadow`}
      >
        <form className="relative bg-white w-full flex flex-col p-[25px]">
          <div className="gap-2 flex flex-col ">
            <div
              className="absolute top-0 right-0 bg-[#E92226] text-white w-[30px] h-[30px] flex items-center justify-center cursor-pointer"
              onClick={() => {
                setOpen(!open);
              }}
            >
              X
            </div>
            <h1 className="text-lg text-center text-gray-900 font-semibold">
              Enquire With Us
            </h1>
            <input
              type="text"
              placeholder="Name* "
              className="p-[10px] text-black placeholder-gray-800 font-sans text-[13px] rounded border-[1px] transition-all mb-[3px] h-[38px] focus:ring-0 focus:outline-none border-solid focus:border-black border-[#a1841e]   "
            />
            <input
              type="text"
              placeholder="Email Address*"
              className="p-[10px] text-black placeholder-gray-800 font-sans text-[13px] rounded border-[1px] transition-all mb-[3px] h-[38px] focus:ring-0 focus:outline-none border-solid focus:border-black border-[#a1841e]   "
            />
            <input
              type="text"
              placeholder="Contact No*"
              className="p-[10px] text-black placeholder-gray-800 font-sans text-[13px] rounded border-[1px] transition-all mb-[3px] h-[38px] focus:ring-0 focus:outline-none border-solid focus:border-black border-[#a1841e]   "
            />

            <textarea
              placeholder="Message*"
              cols={10}
              rows={4}
              className="p-[10px] text-black placeholder-gray-800 font-sans text-[13px] rounded border-[1px] transition-all mb-[3px] h-[110px] focus:ring-0 focus:outline-none border-solid focus:border-black border-[#a1841e]"
            />
            <div>
              <button
                className="w-[160px] h-[52px] font-medium text-base font-sans text-white bg-[#E92226] inline-block rounded hover:bg-black hover:text-white"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
