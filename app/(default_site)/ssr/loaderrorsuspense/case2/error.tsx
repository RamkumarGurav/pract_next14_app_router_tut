"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: any) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="">
      <div className="p-3 m-3 text-xl font-bold text-center text-red-600 bg-red-300/80 border border-solid-2x border-gray-500 rounded-md ">
        <h2>Something went wrong!</h2>
        {/* //Important: use error.message to make reset method work and hide the element to make the error fallback take place of page.tsx  */}
        <h1 className="hidden">Error: {error?.message}</h1>
        <button
          className="bg-black text-white p-3 m-3"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </button>
      </div>
    </div>
  );
}
