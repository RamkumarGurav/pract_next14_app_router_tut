"use client";
import { motion, useCycle } from "framer-motion";
import { IoMdMoon, IoMdSunny } from "react-icons/io";

export default function Switch() {
  const [current, cycle] = useCycle("off", "on");

  const handleTap = () => {
    cycle();
  };

  return (
    <motion.div
      className={`w-[61px] h-[31px] rounded-[16px] ${
        current == "on" ? "bg-gray-800" : " bg-purple-700"
      } shadow-sm shadow-full-sm shadow-gray-200 border-gray-300 relative cursor-pointer`}
      animate={current}
      initial={false}
      onTapStart={handleTap}
    >
      <motion.div className={`absolute top-[4px] left-[4px]`}>
        <IoMdMoon size={22} className={`text-yellow-400`} />
      </motion.div>
      <motion.div className={`absolute top-[4px] right-[4px]`}>
        <IoMdSunny size={22} className={`text-yellow-100`} />
      </motion.div>
      <motion.div
        className="w-full h-full rounded-full "
        variants={{ off: { scale: 0 }, on: { scale: 1 } }}
        transition={{ ease: "easeInOut" }}
      />
      <motion.div
        className="w-[27px] h-[27px] rounded-full bg-white shadow-md absolute top-[2px] left-[2px] flex items-center justify-center"
        variants={{ off: { x: 0 }, on: { x: 29 } }}
        transition={{ ease: "easeInOut" }}
      ></motion.div>
    </motion.div>
  );
}
