"use client";
export default function Button({
  message,
  children,
}: {
  message: string | number;
  children: React.ReactNode;
}) {
  return (
    <button
      className="bg-black text-white p-3 m-3"
      onClick={() => {
        alert(message);
      }}
    >
      {children}
    </button>
  );
}
