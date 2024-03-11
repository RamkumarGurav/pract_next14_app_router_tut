"use client";

import { motion } from "framer-motion";

export default function Backdrop({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClick}
      className="absolute top-0 left-0 w-full h-full bg-black/70 flex justify-center items-center"
    >
      {children}
    </motion.div>
  );
}
