import { SignUp } from "@clerk/nextjs";
import React from "react";

const signUp = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <SignUp />
    </div>
  );
};

export default signUp;
