"use client";
import { useTheme } from "@/hooks/useThemeContext";
import { cn } from "@/lib/utils";
import React, { ComponentProps } from "react";

export function BlobAnimation({ className }: ComponentProps<"div">) {
  const { darkMode } = useTheme();

  return (
    <div
      className={cn(
        "absolute ",
        "dark:bg-gradient-to-r dark:from-[#251439] dark:to-[#000000]",
        "!bg-gradient-to-r from-[#d3f3ff] to-[#ffffff] ",
        className
      )}
    />
  );
}
