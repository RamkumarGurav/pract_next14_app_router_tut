"use client";
import Link from "next/link";
import useSWR from "swr";
import Loading from "./loading";
import ErrorFallback from "@/components/ErrorFallback";

export interface Todo {
  [key: string]: any;
  id: string;
}

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

export default function ExtraTodos() {
  //
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/todos",

    fetcher
  );

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorFallback />;
  }

  return (
    <div className="p-3 bg-red-200">
      <h1 className="text-xl font-bold">Client Component with Extra Todos </h1>

      {data &&
        data?.slice(0, 2).map((todo: Todo) => (
          <Link
            key={todo.id}
            className="block  p-3 m-3 border border-solid border-gray-500"
            href={`/ssg/todos/${todo.id}`}
          >
            {todo.id}: {todo.title} - status:
            {todo.completed ? "true" : "false"}
          </Link>
        ))}
    </div>
  );
}
