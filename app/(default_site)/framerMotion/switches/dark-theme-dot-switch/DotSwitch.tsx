"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { IoMdMoon, IoMdSunny } from "react-icons/io";

export default function DotSwitch() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <div className="flex flex-col justify-center bg-purple-950 w-full p-4  items-center">
      <motion.div
        className={`flex items-center p-1 rounded-full  cursor-pointer `}
        // style={{
        //   boxShadow:
        //     "0 0 0 0.5px rgba(1,0,0,.04), 0 3px 8px 0 rgba(2,0,0,.15), 0 3px 1px 0 rgba(0,2,0,.06)",
        // }}
        onClick={toggleTheme}
        whileHover={{ scale: 1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isDarkTheme ? (
          <IoMdMoon size={24} className={`text-yellow-400`} />
        ) : (
          <IoMdSunny size={24} className={`text-yellow-400`} />
        )}
      </motion.div>

      <div></div>
    </div>
  );
}
