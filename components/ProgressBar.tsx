"use client";
import { cn } from "@/lib/utils";
import React, { useEffect } from "react";

export function ProgressBar() {
  const [progress, setProgress] = React.useState(0);

  useEffect(() => {
    function handleScroll() {
      const progressScrollValue = window.scrollY;
      const allAvailableScrollValue =
        window.document.documentElement.scrollHeight;

      const scrollProgressPercentage =
        (progressScrollValue / allAvailableScrollValue) * 100 + 6;
      setProgress(Math.floor(scrollProgressPercentage));
    }
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={cn("absolute bottom-0 right-0 left-0 z-50")}>
      <div
        style={{ width: `${progress < 10 ? 0 : progress}%` }}
        className={` dark:bg-[linear-gradient(to_right,var(--secondary-700),var(--secondary-500),var(--error-400),var(--error-200),var(--error-50))] bg-black h-[1px] transition-all  `}
      ></div>
    </div>
  );
}
