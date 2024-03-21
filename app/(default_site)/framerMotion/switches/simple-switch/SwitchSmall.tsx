"use client"; // This line is for Next.js to recognize this file as a client-side component
import { motion, useCycle } from "framer-motion"; // Importing motion and useCycle hooks from Framer Motion

export default function SwitchSmall() {
  const [current, cycle] = useCycle("off", "on"); // Using useCycle to toggle between "off" and "on" states

  const handleTap = () => {
    cycle(); // When tapped, cycle through the states
  };

  console.log(current);

  return (
    <motion.div
      className="w-[42px] h-[26px] rounded-[16px] bg-[#78788029] relative cursor-pointer" // Using motion.div to create an animated div
      animate={current} // Applying the current state to animate the div
      initial={false} // Disable initial animation
      onTapStart={handleTap} // When tapped, call handleTap function to cycle through states
    >
      <motion.div
        className="w-full h-full rounded-full bg-green-500" // Using motion.div to create an animated div
        variants={{ off: { scale: 0 }, on: { scale: 1 } }} // Define animation variants for different states
        transition={{ ease: "easeInOut" }} // Define transition properties
      />
      <motion.div
        className="w-[22px] h-[22px] rounded-full bg-white shadow-md absolute top-[2px] left-[2px]" // Using motion.div to create an animated div
        variants={{ off: { x: 0 }, on: { x: 17 } }} // Define animation variants for different states
        transition={{ ease: "easeInOut" }} // Define transition properties
      />
    </motion.div>
  );
}
