import CodeCard from "@/components/CodeCards/CodeCard";
import AnimatedButton from "../../reusable-elements/AnimatedButton";

export default function PageName() {
  return (
    <section
      id="Section"
      className="overflow-hidden bg-yellow-500 py-[35px] sm:py-[50px] sm:px-[35px] xl:px-[70px] min-h-[100vh]"
    >
      <div className="px-4">
        <div className="py-[100px]"></div>

        <CodeCard
          title="Animated Button with Box and Text shadow and Scale"
          elementCode={`"use client";
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
          `}
          elementTag={`<AnimatedButton
            className="btn btn-dark-outline btn-pill !text-xl !bg-transparent hover:!bg-transparent hover:!text-gray-950"
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 10px rgb(255,255,255)",
            }}
          >
            Subscribe
          </AnimatedButton>`}
        >
          <AnimatedButton
            className="btn btn-dark-outline btn-pill !text-xl !bg-transparent hover:!bg-transparent hover:!text-gray-950"
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 10px rgb(255,255,255)",
            }}
          >
            Subscribe
          </AnimatedButton>
        </CodeCard>
      </div>
    </section>
  );
}
