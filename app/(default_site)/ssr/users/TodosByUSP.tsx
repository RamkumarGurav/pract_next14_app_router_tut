"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import useSWR from "swr";

export interface Todo {
  [key: string]: any;
  id: string;
}

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

export default function Todos({ todos }: { todos: Todo[] }) {
  const [allTodos, setAllTodos] = useState(todos);
  const [shouldFetch, setShouldFetch] = useState(false);
  const searchParams = useSearchParams();
  const completed = searchParams.get("completed")?.toString();
  const timeVar = new Date().getTime().toString();

  const { data, error, isLoading } = useSWR(
    shouldFetch
      ? `https://jsonplaceholder.typicode.com/todos?completed=${completed}`
      : null,

    fetcher,
    {
      onSuccess: (tdata) => {
        setAllTodos(tdata);
        setShouldFetch(false);
      },
    }
  );

  useEffect(() => {
    if (completed) {
      setShouldFetch(true);
    }
  }, [completed]);

  if (error) {
    return <p>Something went Wrong : {error.message}</p>;
  }

  return (
    <div className="p-3 bg-blue-200">
      <h1 className="text-xl">Client Component with useSearchParams() hook</h1>
      <p className="text-xl text-center">
        TimeAfterEachRunOfThisCompoent (variable) : {timeVar}
      </p>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        allTodos?.slice(0, 2).map((todo: Todo) => (
          <Link
            key={todo.id}
            className="block  p-3 m-3 border border-solid border-gray-500"
            href={`/ssg/todos/${todo.id}`}
          >
            {todo.id}: {todo.title} - status:
            {todo.completed ? "true" : "false"}
          </Link>
        ))
      )}
    </div>
  );
}
