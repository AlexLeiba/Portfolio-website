import { cn } from "@/lib/utils";
import React, { ComponentProps } from "react";

type Props = ComponentProps<"div"> & {
  data: string[];
};
export function TechUsed({ className, data }: Props) {
  return (
    <div className={cn("flex gap-3 flex-wrap ", className)}>
      {data.map((tech, index) => {
        return (
          <p
            className="font-bold text-xs text-baseline-400 dark:text-baseline-50 px-3 py-1  bg-baseline-50 dark:bg-baseline-800 rounded-full"
            key={index}
          >
            {tech}
          </p>
        );
      })}
    </div>
  );
}
