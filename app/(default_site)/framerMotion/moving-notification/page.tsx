"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function PageName() {
  return (
    <div className="COPY_movingNotificationContainer_ELEMENT_FOR_USE">
      {/* //if dont give overflow-hidden then u wil get horizontal scroll bar */}
      <div
        id="movingNotificationContainer"
        className="overflow-hidden bg-[#F8F4E1] p-1   text-black font-semibold w-full h-[35.5px] flex items-center"
      >
        <AnimatePresence>
          <motion.div
            key="notification"
            initial={{ x: "99vw", opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "tween",
              ease: "linear",
              duration: 10,
              repeat: Infinity,
            }}
          >
            Admissions are open
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="bg-blue-400 min-h-[500px]">some space</div>
    </div>
  );
}
