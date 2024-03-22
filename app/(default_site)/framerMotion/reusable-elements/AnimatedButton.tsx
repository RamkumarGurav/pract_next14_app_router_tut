"use client";
import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

interface AnimatedButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
}

export default function AnimatedButton({
  children,
  ...rest
}: AnimatedButtonProps) {
  return <motion.button {...rest}>{children}</motion.button>;
}
