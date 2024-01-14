import Link from "next/link";

export interface Todo {
  [key: string]: any;
  id: string;
}

const fetcher = async () => {
  //Some Delay
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const res = await fetch(
    Math.ceil(Math.random() * 10) > 6
      ? "https://jsonplaceholsder.typicode.com"
      : "https://jsonplaceholder.typicode.com/todos"
  );
  const data = await res.json();
  return data;
};

export default async function Todos() {
  console.log("Todos Rendered 1");
  const data = await fetcher();
  console.log("Todos Rendered 2");
  console.log("data", data);
  return (
    <div className="p-3 bg-blue-200 m-2">
      <h1 className="text-xl font-bold">Todos With Server Components</h1>

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
