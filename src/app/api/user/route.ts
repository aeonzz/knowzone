import prisma from "@/lib/db";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      email,
      studentId,
      firstName,
      middleName,
      lastName,
      role,
      password,
    } = body;
    const studentIdInt = parseInt(studentId, 10);

    const existingUserByEmail = await prisma.user.findUnique({
      where: { email: email },
    });

    if (existingUserByEmail) {
      return NextResponse.json(
        { user: null, message: "Email already exists" },
        { status: 409 },
      );
    }

    const existingUserById = await prisma.user.findUnique({
      where: { studentId: studentIdInt },
    });

    if (existingUserById) {
      return NextResponse.json(
        { user: null, message: "Student Id already exists" },
        { status: 409 },
      );
    }

    const hashedPassword = await hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        email,
        firstName,
        middleName,
        lastName,
        password: hashedPassword,
        studentId: studentIdInt,
        role,
      },
    });

    const { password: newUserPassword, ...rest } = newUser;

    return NextResponse.json(
      { user: rest, message: "User created successfully" },
      { status: 201 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  }
}
