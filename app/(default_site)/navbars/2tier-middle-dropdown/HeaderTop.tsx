import { ContactUs } from "@/app/(default_site)/layout";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { Lato } from "next/font/google";

const lato = Lato({ weight: "400", subsets: ["latin"] });

export default function HeaderTop({ contactUs }: { contactUs: ContactUs }) {
  return (
    <div
      id="header-top"
      className={`bg-[#140A46] text-white  h-[41px] ${lato.className} relative z-[999]`}
    >
      <div className="px-[14px] h-full flex justify-between ">
        <div className="flex ">
          <div className="hidden lg:flex justify-center items-center  gap-1">
            <FiMail size={14} className="text-gray-100" />
            <span className="text-sm">{contactUs.email}</span>
          </div>
          <div className="hidden lg:flex h-full border-l border-gray-400 mx-2" />

          <div className="hidden lg:flex justify-center gap-1 items-center">
            <FaPhone size={13} className="text-gray-100" />
            <span className="text-sm">
              {contactUs.phoneNumbers[0]} / {contactUs.phoneNumbers[1]}
            </span>
          </div>
        </div>
        <Link
          href="https://www.appolopublicschool.com/contact-us.html"
          className="h-full px-3 flex items-center justify-center bg-red-500 text-white font-semibold uppercase hover:bg-primary-blue"
        >
          contact us
        </Link>
      </div>
    </div>
  );
}
