import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
export const GET = async (req: Request) => {
  const session = await getServerSession();
  return NextResponse.json({authenticated: !!session});

};