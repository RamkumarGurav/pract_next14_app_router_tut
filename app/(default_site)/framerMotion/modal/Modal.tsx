"use client";

import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import { IoMdCloseCircle } from "react-icons/io";

const animateDropIn = {
  offscreen: {
    y: "-100vh",
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.1,
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

export default function Modal({
  children,
  handleClose,
  modalOpen,
  text,
}: {
  children: React.ReactNode;
  handleClose: () => void;
  modalOpen: boolean;
  text?: string;
}) {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        initial={"offscreen"}
        animate={"onscreen"}
        exit={"exit"}
        variants={animateDropIn}
        className="z-[9999] relative bg-white w-[clamp(50%,700px,90%)] h-[min(50%,300px)] m-auto  rounded-md overflow-hidden flex flex-col items-center "
        onClick={(e) => e.stopPropagation()}
      >
        <IoMdCloseCircle
          size={24}
          onClick={handleClose}
          class="absolute top-2 right-2 cursor-pointer"
        />
        {children}
      </motion.div>
    </Backdrop>
  );
}
