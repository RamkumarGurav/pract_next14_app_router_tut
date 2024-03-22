"use client";
import React, { useState } from "react";

const Card = ({
  children,
  title = "Working Element",
  elementCode,
  elementTag,
}: {
  children: React.ReactNode;
  title?: string;
  elementCode: string;
  elementTag: string;
}) => {
  const [showCode, setShowCode] = useState(false);
  const [copyButtonText, setCopyButtonText] = useState("Copy Code");

  const handleToggle = () => {
    setShowCode(!showCode);
  };

  const handleCopyCode = () => {
    const code = showCode ? elementCode : elementTag;
    navigator.clipboard.writeText(code).then(() => {
      // console.log("Code copied to clipboard:", code);
      setCopyButtonText("Copied");
      setTimeout(() => {
        setCopyButtonText("Copy Code");
      }, 2000); // Reset button text after 2 seconds
    });
  };

  return (
    <div className="w-full bg-white border overflow-hidden border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="">
        <div className="bg-purple  text-white p-4 text-xl font-semibold">
          {title}
        </div>
        <div className="flex flex-col justify-center items-center mt-2.5 mb-5 min-h-[300px]">
          {children}
        </div>
        <div className="flex items-center justify-between px-4">
          <button className={`btn btn-light mb-4`} onClick={handleToggle}>
            {showCode ? "Element Code" : "Element Tag"}
          </button>
          <button
            className="btn btn-dark mb-4 w-[150px]"
            onClick={handleCopyCode}
          >
            {copyButtonText}
          </button>
        </div>

        <div className="card-content">
          {showCode ? (
            <>
              <pre>
                <code
                  className="flex-auto relative block bg-gray-900 text-slate-50 pt-4 pb-4 px-4
                 overflow-auto"
                >
                  {`${elementCode}`}
                </code>
              </pre>
            </>
          ) : (
            <>
              <pre>
                <code className="flex-auto relative block bg-gray-900 text-slate-50 pt-4 pb-4 px-4 overflow-auto">
                  {`${elementTag}`}
                </code>
              </pre>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
