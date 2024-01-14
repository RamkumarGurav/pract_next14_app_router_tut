import TodoButton1 from "./TodoButton";
import TodosByUSP from "../TodosByUSP";

export default async function FilterTodos() {
  const timeVar = new Date().getTime().toString();

  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();

  return (
    <div className="p-2 bg-yellow-300">
    <h1 className="text-xl font-bold text-red-500">
        This route is statically rendered,and inside this route , calling
        useSearchParams() in any client components that is not inside the
        Suspense boundary will cause the entire route segment to render on the
        pure client side
      </h1>
      <h1>TimeAfterEachRunOfThisCompoent (server+variable) : {timeVar}</h1>
      <TodoButton1>show completed todos</TodoButton1>
      <TodosByUSP todos={data} />
    </div>
  );
}
