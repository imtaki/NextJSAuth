
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import UserAccountNav from "./UserAccountNav";
export default async function NavBar() {
  const session = await getServerSession(authOptions);

  return (
    <nav className="top-0 shadow-l mb-3 bg-gray-900 dark:bg-slate-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-gray-600 transition-colors">
            Logo
          </Link>
          {session?.user ? (
          <UserAccountNav/>
          ) : (
            <div className="flex gap-4">
            <Link href="/sign-in" className="bg-black text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium dark:bg-gray-300 dark:hover:bg-gray-500 dark:text-black">
              Sign in
            </Link>
            <Link href="/sign-up" className="bg-black text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium dark:bg-gray-300 dark:hover:bg-gray-500 dark:text-black">
              Sign up
            </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}