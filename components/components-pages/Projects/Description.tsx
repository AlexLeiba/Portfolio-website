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
      <div className="">
        <p>
          {description.substring(0, expnded ? description.length : 100) +
            (expnded ? "" : "...")}
        </p>
        <Button
          variant={"link"}
          className="text-primary-400 "
          onClick={() => setExpanded(!expnded)}
        >
          <p>{expnded ? "Read less" : "Read more"}</p>
          {expnded ? <ChevronUp /> : <ChevronDown />}
        </Button>
      </div>
    </div>
  );
}
