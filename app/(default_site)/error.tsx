"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: any) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen grid place-content-center">
      <div className="p-3 m-3 text-xl font-bold text-center text-red-600 bg-red-300/80 border border-solid-2x border-gray-500 rounded-md ">
        <h2>Something went wrong!</h2>
        <h2>Error: {error.message}</h2>
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
