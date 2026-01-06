import React from "react";

export function UnderlineLink() {
  return (
    <div className="h-[2px] w-0 dark:bg-[linear-gradient(to_right,var(--secondary-700),var(--secondary-500),var(--error-400),var(--error-200))] bg-black  group-hover:w-full transition-all duration-300 ease-in-out" />
  );
}
