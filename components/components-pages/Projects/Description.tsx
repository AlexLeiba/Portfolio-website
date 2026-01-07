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
  const [expanded, setExpanded] = useState(false);
  return (
    <button
      title={expanded ? "Read less" : "Read more"}
      onClick={() => setExpanded(!expanded)}
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
          {description.substring(0, expanded ? description.length : 150) +
            (expanded ? "" : "...")}
        </p>
        <div
          className="text-primary-400 flex justify-end group-hover:underline z-20"
          onClick={() => setExpanded(!expanded)}
        >
          <p>{expanded ? "Read less" : "Read more"}</p>
          {expanded ? <ChevronUp /> : <ChevronDown />}
        </div>
      </div>
    </button>
  );
}
