"use client";
import { fetcher } from "@/utils/fetcher";
import useSWR from "swr";
import Link from "next/link";
import { useEffect } from "react";
import OnlyUsersSWR from "./OnlyUsersSWR";

export default function CUsers() {
  const timeVar = new Date().getTime().toString();

  return (
    <div className=" p-3">
      <h1>Users using useSWR : Client side after first Render </h1>
      <h1>TimeAfterEachRender On This Component: {timeVar}</h1>
      <OnlyUsersSWR />
    </div>
  );
}
