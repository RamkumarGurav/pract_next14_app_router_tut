import React from "react";
import { Suspense } from "react";
import Todos from "./Todos";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "@/components/ErrorFallback";
import Loading from "./loading";
import Users from "./Users";
import Error from "./error";

//Forcing Dynamic SSR
export const dynamic = "force-dynamic";

export default async function FilterTodos() {
  const timeVar = new Date().getTime().toString();

  return (
    <div className="p-2 bg-yellow-300">
      <h1 className="text-xl font-bold text-red-500">
      Loading UI and default Error for Server Components Using Both
        ErrorBoundary and Suspense.(Full page Error component inside layouts )(using hardreload instead of reset method)
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
