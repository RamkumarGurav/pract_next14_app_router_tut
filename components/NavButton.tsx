"use client";

import { useState } from "react";

export default function NavButton() {
  const [open, setOpen] = useState(false);
  return (
    <button className="hidden sm:flex" onClick={() => setOpen(!open)}>
      menu
    </button>
  );
}
