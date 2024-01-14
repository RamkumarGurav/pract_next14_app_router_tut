"use client";
import Link from "next/link";
import useSWR from "swr";
import Loading from "./loading";
import { useEffect } from "react";

export interface Todo {
  [key: string]: any;
  id: string;
}

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => {
    if (!res.ok) {
      throw new Error("failed to fetch");
    }
    return res.json();
  });

export default function Todos() {
  console.log("Todos Renderred 1");
  const { data, error, isLoading } = useSWR(
    Math.ceil(Math.random() * 2) > 1
      ? "https://jsonplaceholder.typicode.com/wrong"
      : "https://jsonplaceholder.typicode.com/todos",

    fetcher
  );

  console.log("Todos Renderred 2");

  //generating Error after first render
  useEffect(() => {
    const random = Math.ceil(Math.random() * 10);
    console.log("random", random);
    if (random > 4) {
      throw new Error("failed to fetch");
    }
  }, []);

  if (isLoading || !data) {
    return <Loading />;
  }

  return (
    <div className="p-3 bg-blue-200 m-2">
      <h1 className="text-xl font-bold">Client Component with Todos</h1>

      {data?.slice(0, 2).map((todo: Todo) => (
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
