"use client";
import { Button } from "@/components/UI/Button/Button";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

export function Description({
  description,
  ...rest
}: { description: string } & React.HTMLAttributes<HTMLDivElement>) {
  const [expnded, setExpanded] = useState(false);
  return (
    <div {...rest}>
      <button
        onClick={() => setExpanded(!expnded)}
        className="dark:bg-black bg-white shadow-md  dark:ring-1 dark:outline-gray-100 p-2 rounded-md hover:shadow-xl group"
      >
        <p>
          {description.substring(0, expnded ? description.length : 100) +
            (expnded ? "" : "...")}
        </p>
        <div
          className="text-primary-400 flex justify-end group-hover:underline"
          onClick={() => setExpanded(!expnded)}
        >
          <p>{expnded ? "Read less" : "Read more"}</p>
          {expnded ? <ChevronUp /> : <ChevronDown />}
        </div>
      </button>
    </div>
  );
}
