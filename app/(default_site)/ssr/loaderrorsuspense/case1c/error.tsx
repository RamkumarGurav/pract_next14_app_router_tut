"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Error({ error }: any) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  const router = useRouter();
  const pathname = usePathname();

  const hardReload = () => {
    if (window != undefined) {
      window?.location.reload();
    }
  };

  return (
    <div className="">
      <div className="p-3 m-3 text-xl font-bold text-center text-red-600 bg-red-300/80 border border-solid-2x border-gray-500 rounded-md ">
        <h2>Something went wrong!</h2>
 {/* //Important: use error.message to make reset method work and hide the element to make the error fallback take place of page.tsx  */}
 <h1 className="hidden">Error: {error.message}</h1>
        <button className="bg-black text-white p-3 m-3" onClick={hardReload}>
          Try again
        </button>
      </div>
    </div>
  );
}
