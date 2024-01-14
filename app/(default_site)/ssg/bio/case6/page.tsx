"use client";

import { useState } from "react";

export default function Case3() {
  const [bio, setBio] = useState("I am Ram");
  const [time, setTime] = useState(new Date().getTime().toString());
  const timeVar = new Date().getTime().toString();

  return (
    <div>
      <h1 className="text-4xl text-center">
      This is Bio Page (client component page but acts as SSG)
      </h1>
      <p className="text-xl text-center">Bio(state) : {bio}</p>
      <p className="text-xl text-center">currentTime(state) : {time}</p>
      <p className="text-xl text-center">
        timeAfterEachRendering(variable) : {timeVar}
      </p>
      <button
        className="m-3 p-3 bg-yellow-400"
        onClick={() => setTime(new Date().getTime().toString())}
      >
        change time to now
      </button>
    </div>
  );
}
