"use client";

import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";

const Logout = () => {
  return (
    <div
      onClick={() =>
        signOut({
          redirect: true,
          callbackUrl: `${window.location.origin}sign-in`,
        })
      }
      className="text-red-600 hover:!text-red-600 cursor-pointer"
    >
      <LogOut className="mr-2 h-5 w-5 stroke-red-600" />
    </div>
  );
};

export default Logout;
