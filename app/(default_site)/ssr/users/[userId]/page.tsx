import { notFound } from "next/navigation";

async function fetchUser(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    cache: "no-cache",
  });

  if (!res.ok) return undefined;
  return res.json();
}
export default async function User({ params }: { params: { userId: string } }) {
  const userId = params.userId;
  const user = await fetchUser(userId);
  const timeVar = new Date().getTime().toString();
  if (!user) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-4xl text-center font-bold p-3">User Details</h1>
      <h1>TimeAfterEachRunOfThisCompoent (variable) : {timeVar}</h1>
      <p className="text-2xl text-center font-bold p-3">UserID: {user.id}</p>
      <p className="text-2xl text-center font-bold p-3">Name: {user.name}</p>
      <p className="text-2xl text-center font-bold p-3">email: {user.email}</p>
    </div>
  );
}
