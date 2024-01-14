"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: any) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="p-3 m-3 text-xl font-bold text-center text-red-600 bg-white border border-solid border-red-400  ">
      <h2>Something went wrong!</h2>
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
  );
}

// export default function Error() {
//   return (
//     <div className="p-3 m-3 text-xl font-bold text-center text-red-600 bg-white border border-solid border-red-400  ">
//       Oops! Something went wrong.
//     </div>
//   );
// }
