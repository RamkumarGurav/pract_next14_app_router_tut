import Link from "next/link";
import CUsers from "../CUsers";
import Time from "../TimeWOEffect";
import CompUsers from "../CompUsers";

export interface User {
  [key: string]: any;
  id: string;
}

export default async function Users() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await res.json();

  const randomVarServer = Math.ceil(Math.random() * 1000);
  const timeVarServer = new Date().getTime().toString();

  return (
    <div className="">
      <h1 className="text-4xl text-red text-center">SSG</h1>
      <h1>
        Async Users Page that acts as SSG Server component Page that uses Client
        Components
      </h1>
      <div className="bg-teal-400 p-3 m-3">
        <h1 className="text-2xl font-bold italic">Client Component -1 </h1>
        <Time />
      </div>

      <div className="bg-yellow-400 p-3">
        <h1 className="text-2xl font-bold italic">
          Main Part of the Server Component{" "}
        </h1>
        <div>
          <h1>Random Number(server+variable) : {randomVarServer}</h1>
          <h1>CurrentTime(server+variable) : {timeVarServer}</h1>
          {users.slice(0, 2).map((user: User) => (
            <Link
              key={user.email}
              className="block  p-3 m-3 border border-solid border-gray-500"
              href={`/ssg/users/${user.id}`}
            >
              {user.id}: {user.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="bg-teal-400 p-3 m-3">
        <h1 className="text-2xl font-bold italic">Client Component -2 </h1>
        <CompUsers />
      </div>
    </div>
  );
}
