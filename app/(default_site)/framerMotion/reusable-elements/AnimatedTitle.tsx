"use client";
import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

interface AnimatedTextProps extends HTMLMotionProps<"p"> {
  children: React.ReactNode;
}

export default function AnimatedTitle({
  children,
  ...rest
}: AnimatedTextProps) {
  return <motion.h2 {...rest}>{children}</motion.h2>;
}
