import React from "react";
import TodoButton1 from "./TodoButton";
import { Suspense } from "react";
import Todos from "./Todos";
import ExtraTodos from "./ExtraTodos";
import Error from "../../../error";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "@/components/ErrorFallback";

//Forcing Dynamic SSR
export const dynamic = "force-dynamic";

export default async function FilterTodos() {
  const timeVar = new Date().getTime().toString();

  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();

  return (
    <div className="p-2 bg-yellow-300">
      <h1 className="text-xl font-bold text-red-500">
        This route is dynamically rendered,and inside this route , calling
        useSearchParams() in any client components that is inside the Suspense
        boundary will cause the tree up to the closest Suspense boundary to be
        client-side rendered. And the entire route will be dynamically
        rendered(dynamic ssr)
      </h1>
      <h1>TimeAfterEachRunOfThisCompoent (server+variable) : {timeVar}</h1>
      <TodoButton1>show completed todos</TodoButton1>

      <ErrorBoundary fallback={<Error />}>
        <Suspense>
          <Todos />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary fallback={<Error />}>
        <ExtraTodos />
      </ErrorBoundary>
    </div>
  );
}
