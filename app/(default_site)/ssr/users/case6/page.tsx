import Link from "next/link";

export interface Todo {
  [key: string]: any;
  id: string;
}

export default async function Todos({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos?completed=${searchParams.completed}`
  );
  const todos = await res.json();

  const randomVarServer = Math.ceil(Math.random() * 1000);
  const timeVarServer = new Date().getTime().toString();

  return (
    <div className="">
      <h1 className="text-4xl text-red text-center">Dynamic SSR</h1>
      <h1>
        Users Page that acts as Dynamic Server component Page due to
        searchParams page props
      </h1>
      <div className="bg-yellow-400 p-3">
        <h1>Random Number(server+variable) : {randomVarServer}</h1>
        <h1>
          TimeAfterEachRunOfThisCompoent (server+variable) : {timeVarServer}
        </h1>

        {todos.slice(0, 2).map((todo: Todo) => (
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
    </div>
  );
}
