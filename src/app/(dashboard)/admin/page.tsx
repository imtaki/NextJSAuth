import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth"

export default async function page() {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    return(
    <div className="w-full container flex flex-row gap-4 justify-center items-center">
      <h1 className='text-4xl'>Welcome to Admin Page:  {session?.user.username}</h1>
     </div>
    )

  }
    return(
    <div className="w-full container flex flex-row gap-4 justify-center items-center">
      <h1 className='text-4xl'>You are not logged in. Please log in !</h1>
     </div>
    )
  }