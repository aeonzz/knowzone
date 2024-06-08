"use server";

import prisma from "../db";

interface CreateRrlParams {
  title: string;
  description?: string | undefined;
  year: Date;
  course: string;
  yearLevel: string;
  category: string;
  url: string;
}

export async function createRrl({
  title,
  description,
  year,
  course,
  yearLevel,
  category,
  url,
}: CreateRrlParams) {
  try {

    await prisma.rrl.create({
      data: {
        title,
        description,
        year,
        course,
        yearLevel,
        category,
        url,
      }
    })
    
    return { error: null, status: 200 };
  } catch (error: any) {
    return { error: error.message, status: 500 };
  }
}
