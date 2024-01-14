import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ExtraTodos from "./ExtraTodos";
import Error from "./error";
import Loading from "./loading";

//Dynamic SSR
export const dynamic = "force-dynamic";

export default async function Users() {
  return (
    <div className="bg-green-200 p-4">
      <h1 className="text-2xl text-center font-bold">These Are the Todos</h1>

      <ErrorBoundary fallback={<Error />}>
        <Suspense fallback={<Loading />}>
          <ExtraTodos />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
