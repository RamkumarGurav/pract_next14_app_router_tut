"use client";
import { usePathname, useRouter } from "next/navigation";

export default function ErrorFallback({ error }: { error?: Error }) {
  const router = useRouter();
  const pathname = usePathname();

  const hardReload = () => {
    if (window != undefined) {
      window.location.reload();
    }
  };
  return (
    <div className="flex flex-col justify-center items-center p-3 m-3 text-xl font-bold text-center text-red-600 bg-white border border-solid border-red-400  ">
      <p>Oops! Something went wrong.</p>
      {error && <p>Error: {error.message}</p>}
      <button
        className="bg-black text-white p-3 px-4 m-3 rounded-xl "
        onClick={hardReload}
      >
        Try Again
      </button>
    </div>
  );
}
