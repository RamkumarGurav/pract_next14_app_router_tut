import Link from "next/link";

export interface Todo {
  [key: string]: any;
  id: string;
}

const fetcher = async () => {
  //Some Delay
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
};

export default async function Users() {
  const data = await fetcher();

  return (
    <div className="p-3 bg-red-200">
      <h1 className="text-xl font-bold">Client Component with Extra Todos </h1>

      {data.slice(0, 2).map((user: Todo) => (
        <Link
          key={user.id}
          className="block  p-3 m-3 border border-solid border-gray-500"
          href={`/ssg/users/${user.id}`}
        >
          {user.id}: {user.name} - email:
        </Link>
      ))}
    </div>
  );
}
