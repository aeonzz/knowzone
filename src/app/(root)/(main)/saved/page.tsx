import RrlCard from "@/components/ui/rrl-card";
import { rrls } from "@/constants";
import React from "react";

const page = () => {
  return (
    <section className="space-y-3">
      <h1 className="scroll-m-20 text-3xl font-bold tracking-tight">Saved</h1>
      <div className="grid h-screen w-full grid-flow-row grid-cols-3 gap-3">
        {rrls.map((item, index) => (
          <RrlCard key={index} rrl={item} />
        ))}
      </div>
    </section>
  );
};

export default page;
