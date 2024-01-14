import Link from "next/link";
import Button from "../Button";

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
      <h1>Async Users Page that acts as SSG Server component Page </h1>
      <div className="bg-yellow-400 p-3">
        <h1>Random Number(server+variable) : {randomVarServer}</h1>
        <h1>CurrentTime(server+variable) : {timeVarServer}</h1>
        {/* //-----both below buttons with click event can't be used in server components------------//------------ */}
        {/* <button
          className="bg-black text-white p-3 m-3 "
          onClick={() => alert(randomVarServer)}
        >
          show random value
        </button>
        <button
          className="bg-black text-white p-3 m-3 "
          onClick={() => alert("HI")}
        >
          Alert Hi
        </button> */}
        {/* //Solution  for above prbm is convertin above buttons as client component and use here like this    */}
        <Button message={randomVarServer}>show random value</Button>
        <Button message={"hi"}>Alert Hi</Button>

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
