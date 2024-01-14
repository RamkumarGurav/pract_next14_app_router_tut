"use client";

import { useEffect, useState } from "react";

export default function Time() {
  const randomVarClient = Math.ceil(Math.random() * 1000);
  const timeVarClient = new Date().getTime().toString();

  // Convert Date object to string initially
  const [currentTime, setCurrentTime] = useState(
    new Date().getTime().toString()
  );
  const [random, setRandom] = useState(Math.ceil(Math.random() * 1000));

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setRandom(Math.ceil(Math.random() * 1000));
      setCurrentTime(new Date().getTime().toString());
    }, 2000);

    return () => clearTimeout(timeOutId);
  }, []);

  // //even though we are inside the client component but still we can't directly access the window
  // console.log(
  //   "outside useEffect and inside component: window.document=>",
  //   window?.document
  // );//it will give error like this when we run build "ReferenceError: window is not defined"

  return (
    <div>
      <h1 className="text-center text-4xl">Time from a Client-Component</h1>
      <h1 className="text-2xl">Current Time (state) : {currentTime}</h1>
      <p className="text-2xl">Current Time (variable) :{timeVarClient}</p>
      <button
        className="p-3 m-3 bg-red-500"
        onClick={() => setCurrentTime(new Date().getTime().toString())}
      >
        change state time
      </button>
      <h1 className="text-2xl">Random Number (state) : {random}</h1>
      <p className="text-2xl">Random Number (variable) :{randomVarClient}</p>
      <button
        className="p-3 m-3 bg-green-500"
        onClick={() => setRandom(Math.ceil(Math.random() * 1000))}
      >
        change state random
      </button>
    </div>
  );
}
