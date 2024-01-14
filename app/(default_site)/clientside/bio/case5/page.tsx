"use client";

import { useEffect, useState } from "react";

export default function Case4() {
  const [bio, setBio] = useState("I am Ram");
  const [time, setTime] = useState(new Date().getTime().toString());
  const bioVar = "I am Ram";
  const timeVar = new Date().getTime().toString();
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setBio("I am Ram set inside UseEffect");

      setTime(new Date().getTime().toString());
    }, 2000);

    return () => clearTimeout(timeOutId);
  }, []);

  return (
    <div>
      <h1 className="text-4xl text-center">
        This is Bio Page (client component page)
      </h1>
      <p className="text-xl text-center">Bio(state) : {bio}</p>
      <p className="text-xl text-center text-red-600">
        Bio(variable) : {bioVar}
      </p>
      <p className="text-xl text-center">CurrentTime(state) : {time}</p>
      <p className="text-xl text-center text-green-600">
        CurrentTime(variable) : {timeVar}
      </p>
    </div>
  );
}
