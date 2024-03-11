"use client";
import { motion } from "framer-motion";

const textSpringAnimateFromLeft = {
  offscreen: { x: -120 ,opacity:0},
  onscreen: {
    x: 0,
    opacity:1,
    transition: {
      type: "spring",
    },
  },
};

const textSpringAnimateFromBelow = {
  offscreen: { y: 70, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 3,
    },
  },
};

export default function PageName() {
  return (
    <div className="w-full">
      <div className="w-full h-[100vh] bg-red-400 flex flex-col items-center justify-center">
        <p className="text-black text-2xl font-bold mx-auto  my-2 ">
          scroll down
        </p>
      </div>
      <div className="overflow-hidden w-full h-[100vh] bg-yellow-400 flex flex-col items-center justify-center">
        <motion.p
          initial={"offscreen"}
          whileInView={"onscreen"}
          variants={textSpringAnimateFromLeft}
          className="text-black text-2xl font-bold mx-auto  my-2 "
        >
          Some Content with transition type "spring" (recommended)
        </motion.p>
      </div>
      <section className="flex bg-blue-300 py-4">
        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          variants={textSpringAnimateFromLeft}
          className="text-md font-bold mx-3"
        >
          I will be coming from right
        </motion.div>
      </section>
      <section className="flex bg-yellow-300  py-10 items-center justify-center">
        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          variants={textSpringAnimateFromBelow}
          className="text-xl font-bold mx-3"
        >
          I will be coming from Below
        </motion.div>
      </section>
    </div>
  );
}
