import Link from "next/link";

export interface Todo {
  [key: string]: any;
  id: string;
}
const fetchTodos = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export default async function TodosServer({ url }: { url: string }) {
  const timeVar = new Date().getTime().toString();

  const allTodos = await fetchTodos(url);

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
