import Loader from "@/components/ui/loader";
import React from "react";

const loading = () => {
  return (
    <div className="flex h-1/2 w-full items-center justify-center">
      <Loader />
    </div>
  );
};

export default loading;
