"use client";
import { signOut } from "next-auth/react";
export default function UserAccountNav() {
  return <button onClick={() => signOut()} className="bg-red-500 text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium dark:hover:bg-red-800 ">
                Sign Out
              </button>
}