"use client";
import { usePathname, useRouter } from "next/navigation";

export default function TodoButton1({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const completedTodos = () => {
    router.replace(`${pathname}?completed=true`);
  };
  return (
    <button className="bg-blue-500 text-white p-3 m-3" onClick={completedTodos}>
      {children}
    </button>
  );
}
