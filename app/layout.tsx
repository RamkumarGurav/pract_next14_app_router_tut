"use client";

import "./globals.css";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //it Automatically creates the root div element with id inside body after first render So we get this div only after second render
  useEffect(() => {
    const modalRoot = document.createElement("div");
    modalRoot.id = "login-modal-root";
    document.body.appendChild(modalRoot);
    console.log(
      "After first render successfully created the root div for popup"
    );
    return () => {
      document.body.removeChild(modalRoot);
    };
  }, []);

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
