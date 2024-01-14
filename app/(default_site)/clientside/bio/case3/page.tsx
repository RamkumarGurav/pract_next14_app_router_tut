"use client";

import { useState } from "react";

export default function Case3() {
  const [bio, setBio] = useState("I am Ram");
  const [time, setTime] = useState(new Date().getTime().toString());

  return (
    <div>
      <h1 className="text-4xl text-center">
        This is Bio Page (client component page)
      </h1>
      <p className="text-xl text-center">Bio(state) : {bio}</p>
      <p className="text-xl text-center">currentTime(state) : {time}</p>
    </div>
  );
}
