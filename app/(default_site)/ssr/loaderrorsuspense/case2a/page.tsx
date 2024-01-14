import React, { Suspense } from "react";
import Todos from "./Todos";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./error";
import Loading from "./loading";
import Users from "./Users";

//Forcing Dynamic SSR
export const dynamic = "force-dynamic";

export default async function FilterTodos() {
  const timeVar = new Date().getTime().toString();

  return (
    <div className="p-2 bg-yellow-300">
      <h1 className="text-xl font-bold text-red-500">
        Loading UI and default Error for Server Components Using Both
        ErrorBoundary and Suspense (Error component replaces error producing components only)
      </h1>
      <h1>TimeAfterEachRunOfThisCompoent (server+variable) : {timeVar}</h1>
      <ErrorBoundary fallback={<Error />}>
        <Suspense fallback={<Loading />}>
          <Todos />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary fallback={<Error />}>
        <Suspense fallback={<Loading />}>
          <Users />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
