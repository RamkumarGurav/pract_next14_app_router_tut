"use client";
import { fetcher } from "@/utils/fetcher";
import useSWR from "swr";
import Link from "next/link";
import { useEffect } from "react";

export default function CUsers() {
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  );

  const timeVar = new Date().getTime().toString();

  useEffect(() => {
    console.log("TimeAfterEachRender On This Component", timeVar);
  }, [timeVar]);

  if (isLoading) {
    return (
      <div>
        {/* //to check it also runs during prerender and hydration */}
        <h1>TimeAfterEachRender On This Component: {timeVar}</h1>
        <p> Loading...</p>
      </div>
    );
  } else;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className=" p-3">
      <h1>Users using useSWR : Client side after first Render </h1>
      <h1>TimeAfterEachRender On This Component: {timeVar}</h1>
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
