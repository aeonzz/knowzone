import React from "react";
import Logo from "../../../public/KnowZone logo.svg";
import { Button, buttonVariants } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import UserNav from "../ui/user-nav";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { fetchUserById } from "@/lib/server-actions/user.actions";

const NavBar = async () => {
  const session = await getServerSession(authOptions)
  return (
    <header className="w-ful static px-5 py-4">
      <nav className="container flex w-full items-center justify-between">
        <Link href="/">
          <Image src={Logo} width={150} height={150} alt="KnowZone" />
        </Link>
        <div className="space-x-1">
          {session ? (
            <UserNav userId={session.user.id} />
          ) : (
            <Link
              href="/sign-in"
              className={cn(
                buttonVariants({ variant: "default" }),
                "font-semibold",
              )}
            >
              Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
