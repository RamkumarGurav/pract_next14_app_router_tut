"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Switch() {
  const [isOn, setIsOn] = useState(false);

  const handleTap = () => {
    setIsOn((prevState) => !prevState);
  };

  return (
    <motion.div
      className="w-[51px] h-[31px] rounded-[16px] bg-[#78788029] relative cursor-pointer"
      animate={{ backgroundColor: isOn ? "#34C759" : "#78788029" }}
      initial={false}
      onTapStart={handleTap}
    >
      <motion.div
        className="w-full h-full rounded-full bg-green-500"
        variants={{ off: { scale: 0 }, on: { scale: 1 } }}
        transition={{ ease: "easeInOut" }}
        initial={false}
        animate={{ scale: isOn ? 1 : 0 }}
      />
      <motion.div
        className="w-[27px] h-[27px] rounded-full bg-white shadow-md absolute top-[2px] left-[2px]"
        variants={{ off: { x: 0 }, on: { x: 20 } }}
        transition={{ ease: "easeInOut" }}
        initial={false}
        animate={{ x: isOn ? 20 : 0 }}
      />
    </motion.div>
  );
}
