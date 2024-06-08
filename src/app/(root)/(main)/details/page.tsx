import Image from "next/image";
import React from "react";
import rrl1 from "../../../../../public/rrl1.png";

const page = () => {
  return (
    <section className="space-y-3">
      <div className="relative h-36">
        <Image src={rrl1} alt="gg" objectFit="cover" fill />
      </div>
      <div className="flex flex-col space-y-3">
        <h1 className="text-4xl font-semibold">consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo</h1>
        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </section>
  );
};

export default page;
