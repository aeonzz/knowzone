"use server";

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
