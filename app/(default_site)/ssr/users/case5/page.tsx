import Link from "next/link";

export interface User {
  [key: string]: any;
  id: string;
}

export default async function Users() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`, {
    cache: "no-store",
  });
  const users = await res.json();

  const randomVarServer = Math.ceil(Math.random() * 1000);
  const timeVarServer = new Date().getTime().toString();

  return (
    <div className="">
      <h1 className="text-4xl text-red text-center">Dynamic SSR</h1>
      <h1>
        Users Page that acts as Dynamic Server component Page due to no-store
        during Data fetching{" "}
      </h1>
      <div className="bg-yellow-400 p-3">
        <h1>Random Number(server+variable) : {randomVarServer}</h1>
        <h1>TimeAfterEachRunOfThisCompoent (server+variable) : {timeVarServer}</h1>
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
  );
}
