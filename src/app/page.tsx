import Link from "next/link";
import User from "@/components/User";
import { getServerSession } from "next-auth";
export default async function Home() {
  const session = await getServerSession();
  return ( 
    <div className="min-h-screen flex items-center justify-center gap-4">
      <h1 className="text-4xl">Home</h1>
      <Link 
        href="/admin" 
        className="bg-black text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium dark:bg-white dark:hover:bg-gray-500 dark:text-black"
      >
        Go to Admin Page
      </Link>
      <h2>Client session</h2>
      <User />
      <h2>Server session</h2>
      {JSON.stringify(session)}
    </div>
  )
}