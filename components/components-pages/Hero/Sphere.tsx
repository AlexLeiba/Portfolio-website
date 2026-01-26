import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
};
export function Sphere({ children }: Props) {
  return (
    <div
      className={cn(
        "top-[800px] sm:top-[calc(100vh-100px)]",
        "z-20 position absolute  w-[3000px]  h-full dark:bg-[radial-gradient(closest-side,_#000000_90%,#331d4e)] bg-[radial-gradient(closest-side,_#ffffff_90%,#bfe6f6_100%)] right-0 left-[50%]  rounded-[50%] -translate-x-1/2 ",
        "md:block lg:block hidden planetClassName",
      )}
    >
      {children}
    </div>
  );
}
