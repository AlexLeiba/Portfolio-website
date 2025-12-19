import { cn } from "@/lib/utils";
import React, { ComponentProps } from "react";

type Props = ComponentProps<"div"> & {
  classNameBackground?: string;
};

export function BackgroundGradientAnimation({
  className,
  classNameBackground,
}: Props) {
  return (
    <>
      {/* GRADIENT */}
      <div
        className={cn(
          "absolute  -inset-[2px]    conic-gradient rounded-xl",
          className
        )}
      />

      {/* BACKGROUND */}
      <div
        className={cn(
          "dark:bg-black bg-white  absolute inset-0 rounded-[10px] z-10",
          classNameBackground
        )}
      />
    </>
  );
}
