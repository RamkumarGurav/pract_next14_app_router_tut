import TodoButton1 from "./TodoButton";
import TodosByUSP from "../TodosByUSP";
import { Suspense } from "react";

export default async function FilterTodos() {
  const timeVar = new Date().getTime().toString();

  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();

  return (
    <div className="p-2 bg-yellow-300">
      <h1 className="text-xl font-bold text-red-500">
      This route is statically rendered,and inside this route , calling useSearchParams() in any client components that is inside the Suspense boundary will cause the tree up to the closest Suspense boundary to be client-side rendered and the entire route will be statically rendered
      </h1>
      <h1>TimeAfterEachRunOfThisCompoent (server+variable) : {timeVar}</h1>
      <TodoButton1>show completed todos</TodoButton1>
      {/* //if you are show compoent that renders some data by fetching data then use Suspense boundaries */}
      <Suspense         fallback={
          <p className="text-center font-bold bg-gray-300">
            Fallback Loading...
          </p>
        }>
        <TodosByUSP todos={data} />
      </Suspense>
    </div>
  );
}
