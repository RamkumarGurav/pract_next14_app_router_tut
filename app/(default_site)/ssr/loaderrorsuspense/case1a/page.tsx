import React from "react";
import { Suspense } from "react";
import Todos from "./Todos";
import Error from "./error";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "@/components/ErrorFallback";
import Loading from "./loading";
import Users from "./Users";

//Forcing Dynamic SSR
export const dynamic = "force-dynamic";

export default async function FilterTodos() {
  const timeVar = new Date().getTime().toString();

  return (
    <div className="p-2 bg-yellow-300">
      <h1 className="text-xl font-bold text-red-500">
        Loading UI inside client components and default Error for client Components
        Using ErrorBoundary  .(Error component replaces error producing components only)
      </h1>
      <h1>TimeAfterEachRunOfThisCompoent (server+variable) : {timeVar}</h1>
      
      <ErrorBoundary fallback={<Error />}>
        <Todos />
      </ErrorBoundary>
      <ErrorBoundary fallback={<Error  />}>
        <Users />
      </ErrorBoundary>
    </div>
  );
}
