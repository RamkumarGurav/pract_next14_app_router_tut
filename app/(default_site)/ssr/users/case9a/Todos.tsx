"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import useSWR from "swr";
import Loading from "./loading";

import ErrorFallback from "@/components/ErrorFallback";

export interface Todo {
  [key: string]: any;
  id: string;
}

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

export default function Todos() {
  // const [allTodos, setAllTodos] = useState<Todo[] | null | undefined>(null);
  // const [shouldFetch, setShouldFetch] = useState(true);
  const searchParams = useSearchParams();
  const completed = searchParams.get("completed")?.toString();
  const timeVar = new Date().getTime().toString();

  const url = completed
    ? `https://jsonplaceholder.typicode.com/todos?completed=${completed}`
    : "https://jsonplaceholders.typicode.com/todos";

  const { data, error, isLoading, mutate } = useSWR(
    Math.ceil(Math.random() * 4) > 2
      ? "https://jsonplaceholder.typicode.com/wrong"
      : "https://jsonplaceholder.typicode.com/todos",

    fetcher
  );

  console.log("Todos Renderred");

  useEffect(() => {
    mutate();
  }, [url, mutate]);

  if (isLoading) {
    return <Loading />;
  }

  // if (error) {
  //   return <ErrorFallback error={error} />;
  // }

  return (
    <div className="p-3 bg-blue-200 m-2">
      <h1 className="text-xl font-bold">
        Client Component with useSearchParams() hook
      </h1>

      {data &&
        data.slice(0, 2).map((todo: Todo) => (
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
