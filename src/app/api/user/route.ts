import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import * as z from "zod";

const userSchema =  z.object({
  username: z.string().min(1, 'Username is required').max(100),
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must have than 8 characters'),
})


export async function POST(request: Request) {
    try {
      const body = await request.json();
      const { email, username, password } = userSchema.parse(body);

      const existingUserByEmail = await db.user.findUnique({
        where: { email: email },
      });
      if(existingUserByEmail) {
        return NextResponse.json({user: null, message: "Email already exists"},{status: 409});
      }
      const existingUserByUsername = await db.user.findUnique({
        where: { username: username },
      });
      if(existingUserByUsername) {
        return NextResponse.json({user: null, message: "Username already exists"},{status: 409});
      }
      const hashedPassword = await hash(password, 10);
      const newUser = await db.user.create({
        data: {
          email,
          username,
          password: hashedPassword,
        }
    });
    const { password: newUserPassword, ...rest } = newUser;
      return NextResponse.json({user: rest, message: "User created successfully"},{status: 201});
    } catch (error) {
      console.error(error);
    }
  }