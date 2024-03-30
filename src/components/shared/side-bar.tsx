"use client";

import { navMenu } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { CurrentUser } from "../../../types/user";

const SideBar = ({ currentUser }: { currentUser: CurrentUser | null }) => {
  const pathname = usePathname();
  console.log(currentUser)
  return (
    <div className="h-32 w-56">
      {navMenu.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            item.title === "Admin" &&
              currentUser?.role === "User" &&
              "invisible",
            pathname === item.href &&
              "bg-slate-100 before:absolute before:left-0 before:block before:h-full before:w-1 before:bg-pink-500",
            "relative mb-1 flex w-full items-center justify-start py-5 font-semibold",
          )}
        >
          <Image
            src={item.icon}
            alt={item.alt}
            width={24}
            height={24}
            className="mr-2"
          />
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
