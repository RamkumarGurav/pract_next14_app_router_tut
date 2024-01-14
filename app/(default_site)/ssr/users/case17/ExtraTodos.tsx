import Link from "next/link";

export default async function ExtraTodos() {
  //Making 3 seconds delay
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  return (
    <div className="p-3 bg-red-200">
      <h1 className="text-xl">Client Component with </h1>

      {data?.slice(0, 2).map((todo: any) => (
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
