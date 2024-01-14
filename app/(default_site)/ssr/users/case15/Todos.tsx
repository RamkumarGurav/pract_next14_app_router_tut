"use client"
import { fetcher } from "@/utils/fetcher";
import Link from "next/link";
import { useEffect, useState } from "react";
import useSWR from "swr";

export interface Todo {
  [key: string]: any;
  id: string;
}

export default  function Todos({ url }: { url: string }) {
  const timeVar = new Date().getTime().toString();
  const [allTodos, setAllTodos] = useState<Todo[] | null>(null);
  const { data, error, isLoading, mutate } = useSWR(
    url,

    fetcher,
    {
      onSuccess: (tdata) => {
        setAllTodos(tdata);
      },
    }
  );

  useEffect(() => {
    if (url) {
      mutate();
    }
  }, [url, mutate]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went Wrong : {error.message}</p>;
  }

  return (
    <div className="p-3 bg-blue-200">
      <h1 className="text-xl">Client Component with useSearchParams() hook</h1>
      <p className="text-xl text-center">
        TimeAfterEachRunOfThisCompoent (variable) : {timeVar}
      </p>
      {allTodos?.slice(0, 2).map((todo: Todo) => (
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
