"use client";
import { BackgroundGradientAnimation } from "@/components/UI/BackgroundGradientAnimation";
import { Button } from "@/components/UI/Button/Button";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

export function Description({
  description,
  ...rest
}: { description: string } & React.HTMLAttributes<HTMLButtonElement>) {
  const [expnded, setExpanded] = useState(false);
  return (
    <button
      onClick={() => setExpanded(!expnded)}
      className={cn(
        [
          "dark:bg-black bg-white shadow-md  dark:ring-1 dark:outline-gray-100 p-2 rounded-md hover:shadow-xl group transition-all",
          "conic-gradient-parent relative  bg-black z-20",
        ],
        rest.className
      )}
    >
      {/* GRADIENT */}
      <BackgroundGradientAnimation
        className="-inset-[2px] rounded-[6px]"
        classNameBackground="dark:bg-black bg-white rounded-[5px] dark:rounded-[6px]"
      />
      <div className="relative z-20">
        <p className="z-20 text-left">
          {description.substring(0, expnded ? description.length : 100) +
            (expnded ? "" : "...")}
        </p>
        <div
          className="text-primary-400 flex justify-end group-hover:underline z-20"
          onClick={() => setExpanded(!expnded)}
        >
          <p>{expnded ? "Read less" : "Read more"}</p>
          {expnded ? <ChevronUp /> : <ChevronDown />}
        </div>
      </div>
    </button>
  );
}
