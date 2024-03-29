"use client";

import { navMenu } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const pathname = usePathname();
  return (
    <div className="h-32 w-40">
      {navMenu.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            pathname === item.href && "bg-slate-100 before:block before:bg-pink-500 before:absolute before:w-1 before:h-full before:left-0",
            "mb-1 flex w-full items-center justify-start font-semibold relative py-5",
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
