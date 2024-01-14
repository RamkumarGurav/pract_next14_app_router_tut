import Link from "next/link";
import { useEffect, useState } from "react";

export default function UsersCPage() {
  const [data, setData] = useState<{ [key: string]: any }[] | null>(null);
  const [loading, setLoading] = useState(true);
  let time = new Date().getTime().toString();

  const [currentTime, setCurrentTime] = useState<string | Date | number>(
    new Date().getTime().toString()
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
    console.log("Before fetchData: inside useEffect", window.document);
    fetchData(); // Fetch data only once when the component mounts
    console.log("After fetchData : inside useEffect", window.document);
  }, []);

  //Since its a Pure Client side Rendered Page  we can directly access the window object
  console.log("outside useEffect and inside Component", window.document);

  return (
    <div className="p-2">
      <h1 className="text-4xl italic font-bold ">Pure Client Side </h1>
      <h1 className="text-2xl">Current Time (state) : {String(currentTime)}</h1>
      <p className="text-2xl">TimeAfterEachRender (variable) :{String(time)}</p>
      <button
        className="p-3 m-3 bg-red-500"
        onClick={() => setCurrentTime(new Date().getTime().toString())}
      >
        change state time
      </button>
      <div className="">
        <div>
          {loading ? (
            <p>loading...</p>
          ) : (
            data?.slice(0, 2).map((user) => (
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
