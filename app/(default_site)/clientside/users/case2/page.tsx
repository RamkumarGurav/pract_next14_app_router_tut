"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function UsersCPage() {
  const [data, setData] = useState<{ [key: string]: any }[] | null>(null);
  const [loading, setLoading] = useState(true);
  let time = new Date();

  const [currentTime, setCurrentTime] = useState<string | Date | number>(
    new Date()
  );

  const fetchData = async () => {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const users = await res.json();
      setData(users);
      setLoading(false);
    } catch (error) {
      // Handle error, set state accordingly
      setLoading(false);
    }
  };
  useEffect(() => {
    console.log("Before fetchData: inside useEffect", window?.document);
    fetchData(); // Fetch data only once when the component mounts
    console.log("After fetchData : inside useEffect", window?.document);
  }, []);

  //still its a client Component Page but we can't directly access the window object
  // console.log("inside useEffect", window?.document);//you will get error like "window is not defined while running  build"

  return (
    <div className="min-h-screen">
      <h1>Users Page as  Client Component</h1>
      <h1 className="text-2xl">Current Time (state) : {String(currentTime)}</h1>
      <p className="text-2xl">Current Time (variable) :{String(time)}</p>
      <button onClick={() => setCurrentTime("123123")}>
        change state time
      </button>
      <div className="">
        <div>
          {loading ? (
            <p>loading...</p>
          ) : (
            data?.map((user) => (
              <Link
                key={user.email}
                className="block  p-3 m-3 border border-solid border-gray-500"
                href={`/ssg/users/${user.id}`}
              >
                {user.id}: {user.name}
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
