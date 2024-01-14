"use client";
import Link from "next/link";
import useSWR from "swr";
import Loading from "./loading";

export interface Todo {
  [key: string]: any;
  id: string;
}

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

export default function Users() {
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/users",

    fetcher
  );

  if (isLoading || !data) {
    return <Loading />;
  }


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
