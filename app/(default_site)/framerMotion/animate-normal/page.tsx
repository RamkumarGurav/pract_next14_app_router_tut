"use client";
import { motion } from "framer-motion";

export default function PageName() {
  return (
    <div className="w-full">
      <h1 className="font-bold text-center p-4">
        animate When Element is in the View(use "animate" in place of "animate")
      </h1>
      <h1 className="font-bold text-center p-4">
        Always make the parent element as "overflow-hidden" to avoid scroll bar
        generation
      </h1>
      <div className="w-full h-[100vh] bg-red-400 flex flex-col items-center justify-center">
        <p className="text-black text-2xl font-bold mx-auto  my-2 ">
          scroll down
        </p>
      </div>
      <div className="overflow-hidden w-full h-[100vh] bg-yellow-400 flex flex-col items-center justify-center">
        <motion.p
          initial={{ x: "-50%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "tween",
          }}
          className="text-black text-2xl font-bold mx-auto  my-2 "
        >
          Some Content with transition type "tween"
        </motion.p>
        <motion.p
          initial={{ x: "-50%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
          }}
          className="text-black text-2xl font-bold mx-auto  my-2 "
        >
          Some Content with transition type "spring" (recommended)
        </motion.p>
        <motion.p
          initial={{ x: "-50%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "just",
          }}
          className="text-black text-2xl font-bold mx-auto  my-2 "
        >
          Some Content with transition type "just"
        </motion.p>
      </div>
      <section className="flex bg-blue-300  py-10 ">
        <motion.div
          initial={{ x: "-50%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring" }}
          className="text-md font-bold mx-3"
        >
          I will be coming from right
        </motion.div>
      </section>
      <section className="overflow-hidden flex flex-col bg-yellow-300 min-h-[300px] py-10 items-center justify-center">
        <motion.div
          initial={{ y: "100px", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring" }}
          className="text-xl font-bold mx-3"
        >
          I will be coming from Below (spring-default)
        </motion.div>
      </section>
      <section className="overflow-hidden flex flex-col bg-red-300 min-h-[300px] py-10 items-center justify-center">
        <motion.div
          initial={{ y: "100px", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 1 }}
          className="text-xl font-bold mx-3"
        >
          I will be coming from Below (spring-with some duration)
        </motion.div>
      </section>
      <section className="overflow-hidden flex flex-col bg-yellow-300 min-h-[300px] py-10 items-center justify-center">
        <motion.div
          initial={{ y: "100px", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "tween" }}
          className="text-xl font-bold mx-3"
        >
          I will be coming from Below (tween-default)
        </motion.div>
      </section>
      <section className="overflow-hidden flex flex-col bg-red-300 min-h-[300px] py-10 items-center justify-center">
        <motion.div
          initial={{ y: "100px", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 1 }}
          className="text-xl font-bold mx-3"
        >
          I will be coming from Below (tween-with some duration)(recommended)
        </motion.div>
      </section>
    </div>
  );
}
