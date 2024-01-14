import React from "react";
import Todos from "./Todos";
import ExtraTodos from "./Users";
import Error from "./error";
import { ErrorBoundary } from "react-error-boundary";

//Forcing Dynamic SSR
export const dynamic = "force-dynamic";

export default async function FilterTodos() {
  const timeVar = new Date().getTime().toString();

  return (
    <div className="p-2 bg-yellow-300">
      <h1 className="text-xl font-bold text-red-500">
        Loading UI inside client components and default Error for client
        Components Using ErrorBoundary. (Full page Error component inside
        layouts)
      </h1>
      <h1>TimeAfterEachRunOfThisCompoent (server+variable) : {timeVar}</h1>

      <ErrorBoundary fallback={<Error />}>
        <Todos />
      </ErrorBoundary>
      <ErrorBoundary fallback={<Error />}>
        <ExtraTodos />
      </ErrorBoundary>
    </div>
  );
}
