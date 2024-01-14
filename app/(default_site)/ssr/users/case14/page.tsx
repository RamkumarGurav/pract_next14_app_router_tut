import { Suspense } from "react";
import TodoButton1 from "./TodoButton";
import Todos from "./Todos";

export default function FilterTodos({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const timeVar = new Date().getTime().toString();

  const completed = searchParams.completed?.toString();
  const url = completed
    ? `https://jsonplaceholder.typicode.com/todos?completed=${completed}`
    : "https://jsonplaceholder.typicode.com/todos";

  return (
    <div className="p-2 bg-yellow-300">
      <h1 className="text-xl font-bold text-red-500">
        This route is dynamically rendered,and inside this route , calling
        useSearchParams() in any client components that is not inside the
        Suspense boundary to be client-side rendered. And the entire route will
        be dynamically rendered(dynamic ssr)
      </h1>
      <h1>TimeAfterEachRunOfThisCompoent (server+variable) : {timeVar}</h1>
      <TodoButton1>show completed todos</TodoButton1>
      <Suspense
        fallback={
          <p className="text-center font-bold bg-gray-300">
            Fallback Loading...
          </p>
        }
      >
        <Todos url={url} />
      </Suspense>
    </div>
  );
}
