"use client";
import { fetcher } from "@/utils/fetcher";
import Link from "next/link";
import useSWR from "swr";

export default function Users() {
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  );
  

  if (isLoading) {
    return <p>loading....</p>;
  }
  if (error) {
    return <p>Something went Wrong : {error.message}</p>;
  }
  return (
    <div>
      <h1>Users Page as Client Component</h1>

      {data?.slice(0, 2).map((user: { [key: string]: any }) => (
        <Link
          key={user.email}
          className="block  p-3 m-3 border border-solid border-gray-500"
          href={`/ssg/users/${user.id}`}
        >
          {user.id}: {user.name}
        </Link>
      ))}
    </div>
  );
}
