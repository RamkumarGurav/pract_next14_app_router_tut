"use client";
import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

interface AnimatedTextProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
}

export default function AnimatedDiv({ children, ...rest }: AnimatedTextProps) {
  return <motion.div {...rest}>{children}</motion.div>;
}
