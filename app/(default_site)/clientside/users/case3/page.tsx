"use client";
import dynamic from "next/dynamic";
import UsersCPage from "@/clientPages/UsersCPage";

export default dynamic(() => Promise.resolve(UsersCPage), { ssr: false });
