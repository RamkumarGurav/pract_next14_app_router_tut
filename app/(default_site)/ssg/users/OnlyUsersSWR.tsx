"use client";
import { fetcher } from "@/utils/fetcher";
import useSWR from "swr";
import Link from "next/link";

export default function CUsers() {
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  );

  const timeVar = new Date().getTime().toString();

  if (isLoading) {
    return <p> Loading...</p>;
  }

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className=" p-3">
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
