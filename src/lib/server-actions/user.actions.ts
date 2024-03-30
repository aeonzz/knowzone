"use server";

import { revalidatePath } from "next/cache";
import prisma from "../db";

export async function fetchUserById(userId: string) {
  try {
    const response = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    });
    return { data: response, error: null, status: 200 };
  } catch (error: any) {
    return { data: null, error: error.message, status: 500 };
  }
}

interface UpdateUserParams {
  userId: string;
  email: string;
  studentId: string;
  role: string;
  password: string;
  firstName: string;
  middleName: string;
  lastName: string;
}

export async function updateUser({
  userId,
  email,
  studentId,
  role,
  password,
  firstName,
  middleName,
  lastName,
}: UpdateUserParams) {
  const studentIdInt = parseInt(studentId, 10);
  try {
    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        email,
        studentId: studentIdInt,
        role,
        password,
        firstName,
        middleName,
        lastName,
      },
    });
    return { error: null, status: 200 };
  } catch (error: any) {
    return { error: error.message, status: 500 };
  }
}

export async function deleteUserById(userId: string) {
  try {
     await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        deleted: true,
      },
    });

    revalidatePath("/dashboard");

    return { error: null, status: 200 };
  } catch (error: any) {
    console.log(error)
    return { error: error.message, status: 500 };
  }
}
