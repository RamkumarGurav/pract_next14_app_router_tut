//to display notfound page for wrong userIds
export const dynamicParams = false;

async function fetchUser(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    next: { revalidate: 2 },
  });

  const data = await res.json();
  return data;
}
async function fetchUsers() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);

  const data = await res.json();
  return data;
}
export default async function User({ params }: { params: { userId: string } }) {
  const userId = params.userId;
  const user = await fetchUser(userId);
  const timeVar = new Date().getTime().toString();

  return (
    <div>
      <h1 className="text-4xl text-center font-bold p-3">User Details</h1>
      <h1>TimeAfterEachRunOfThisCompoent (server) : {timeVar}</h1>
      <p className="text-2xl text-center font-bold p-3">UserID: {user.id}</p>
      <p className="text-2xl text-center font-bold p-3">Name: {user.name}</p>
      <p className="text-2xl text-center font-bold p-3">email: {user.email}</p>
    </div>
  );
}

//Dont forget to Export this function and also convert the userId to string
export async function generateStaticParams() {
  const users = await fetchUsers();
  return users.map((user: { [key: string]: any }) => ({
    userId: user.id.toString(),
  }));
}
