"use client";
import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

interface AnimatedTextProps extends HTMLMotionProps<"p"> {
  children: React.ReactNode;
}

export default function AnimatedText({ children, ...rest }: AnimatedTextProps) {
  return <motion.p {...rest}>{children}</motion.p>;
}
