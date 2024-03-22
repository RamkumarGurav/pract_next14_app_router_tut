"use client";
import React, { useState } from "react";

const Card: React.FC = () => {
  const [showCode, setShowCode] = useState<boolean>(false);

  const handleToggle = () => {
    setShowCode(!showCode);
  };

  return (
    <div className="w-full  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="px-5 pb-5">
        <div className="flex items-center space-x-1 rtl:space-x-reverse">
          SECTION
        </div>
        <div className="flex flex-col justify-center items-center mt-2.5 mb-5"></div>
        <div className="flex items-center justify-between">
          <button
            className={`btn btn-dark-outline mb-4`}
            onClick={handleToggle}
          >
            {showCode ? "Element Code" : "Element Tag"}
          </button>
        </div>

        <div className="card-content">
          {showCode ? (
            <>
              <pre>
                <code className="flex-auto relative block bg-gray-900 text-slate-50 pt-4 pb-4 px-4 overflow-auto">{`
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

              `}</code>
              </pre>
            </>
          ) : (
            <>
              <pre>
                <code className="flex-auto relative block bg-gray-900 text-slate-50 pt-4 pb-4 px-4 overflow-auto">{`<AnimatedButton
          className="btn btn-dark-outline btn-pill !text-xl !bg-transparent hover:!bg-transparent hover:!text-gray-950"
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 10px rgb(255,255,255)",
          }}
        >
          Subscribe
        </AnimatedButton>`}</code>
              </pre>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
